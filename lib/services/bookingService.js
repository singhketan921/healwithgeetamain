'use server';

import { z } from "zod";
import {
  createBooking,
  deleteBooking,
  findBookingBySlot,
  listBookings,
  updateBooking,
} from "@/lib/repositories/bookingRepository";
import { createZoomMeeting, deleteZoomMeeting } from "@/lib/services/zoomService";
import { createCalendarEvent } from "@/lib/services/googleCalendarService";
import { sendWhatsAppBookingMessage } from "@/lib/services/whatsappService";

const bookingSchema = z
  .object({
    type: z.enum(["consultation", "healing", "course"]),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z
      .string()
      .min(6)
      .optional()
      .transform((val) => (val?.trim() ? val.trim() : undefined)),
    preferredDate: z.string().optional(),
    preferredTime: z.string().optional(),
    notes: z.string().optional(),
    offeringId: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "consultation") {
      if (!data.preferredDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["preferredDate"],
          message: "Preferred date is required for consultations.",
        });
      }
      if (!data.preferredTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["preferredTime"],
          message: "Preferred time is required for consultations.",
        });
      }
    }
  });

const DEFAULT_TIMEZONE = process.env.CONSULTATION_TIMEZONE || "Asia/Kolkata";
const DEFAULT_DURATION_MINUTES = Number(
  process.env.CONSULTATION_DURATION_MINUTES || 60
);

function parseTimeLabel(timeLabel) {
  if (!timeLabel) {
    return null;
  }
  const match = timeLabel.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    return null;
  }
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3].toUpperCase();
  if (period === "PM" && hours < 12) {
    hours += 12;
  }
  if (period === "AM" && hours === 12) {
    hours = 0;
  }
  return { hours, minutes };
}

function formatTwo(value) {
  return String(value).padStart(2, "0");
}

function addMinutesToLocalDate(dateStr, hours, minutes, minutesToAdd) {
  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  const daysToAdd = Math.floor(totalMinutes / 1440);
  const remainingMinutes = ((totalMinutes % 1440) + 1440) % 1440;
  const endHours = Math.floor(remainingMinutes / 60);
  const endMinutes = remainingMinutes % 60;

  const baseDate = new Date(`${dateStr}T00:00:00Z`);
  baseDate.setUTCDate(baseDate.getUTCDate() + daysToAdd);
  const endDate = baseDate.toISOString().slice(0, 10);

  return { endDate, endHours, endMinutes };
}

function buildDateTimes(preferredDate, preferredTime, durationMinutes) {
  const parsedTime = parseTimeLabel(preferredTime);
  if (!parsedTime) {
    return null;
  }
  const startDateTime = `${preferredDate}T${formatTwo(parsedTime.hours)}:${formatTwo(
    parsedTime.minutes
  )}:00`;
  const { endDate, endHours, endMinutes } = addMinutesToLocalDate(
    preferredDate,
    parsedTime.hours,
    parsedTime.minutes,
    durationMinutes
  );
  const endDateTime = `${endDate}T${formatTwo(endHours)}:${formatTwo(endMinutes)}:00`;
  return { startDateTime, endDateTime };
}

export async function submitBooking(payload) {
  const parsed = bookingSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.type === "consultation") {
    const existing = await findBookingBySlot({
      type: "consultation",
      preferredDate: parsed.data.preferredDate,
      preferredTime: parsed.data.preferredTime,
    });
    if (existing) {
      return {
        success: false,
        status: 409,
        errors: {
          preferredTime: [
            "This slot is already booked. Please choose another time.",
          ],
        },
      };
    }
  }

  let booking;
  try {
    booking = await createBooking(parsed.data);
  } catch (error) {
    if (error?.code === "BOOKING_CONFLICT") {
      return {
        success: false,
        status: 409,
        errors: {
          preferredTime: [
            "This slot is already booked. Please choose another time.",
          ],
        },
      };
    }
    throw error;
  }

  if (parsed.data.type === "consultation") {
    const durationMinutes = Number.isFinite(DEFAULT_DURATION_MINUTES)
      ? DEFAULT_DURATION_MINUTES
      : 60;
    const dateTimes = buildDateTimes(
      parsed.data.preferredDate,
      parsed.data.preferredTime,
      durationMinutes
    );
    if (!dateTimes) {
      await deleteBooking(booking._id);
      return {
        success: false,
        status: 422,
        errors: {
          preferredTime: ["Please select a valid time slot."],
        },
      };
    }

    let zoomMeeting = null;
    try {
      const consultationLabel = parsed.data.offeringId || "Consultation";
      zoomMeeting = await createZoomMeeting({
        topic: `Consultation - ${consultationLabel}`,
        startTime: dateTimes.startDateTime,
        durationMinutes,
        timezone: DEFAULT_TIMEZONE,
        agenda: parsed.data.notes || "Consultation session",
        hostEmail: process.env.ZOOM_HOST_EMAIL,
      });

      const adminEmail =
        process.env.CALENDAR_ADMIN_EMAIL || process.env.GOOGLE_CALENDAR_ID;
      const attendees = [
        { email: parsed.data.email },
        ...(adminEmail && adminEmail !== parsed.data.email
          ? [{ email: adminEmail }]
          : []),
      ];

      const calendarEvent = await createCalendarEvent({
        summary: `Consultation - ${consultationLabel}`,
        description: [
          `Client: ${parsed.data.name}`,
          `Email: ${parsed.data.email}`,
          parsed.data.phone ? `Phone: ${parsed.data.phone}` : null,
          parsed.data.notes ? `Notes: ${parsed.data.notes}` : null,
          `Zoom Join: ${zoomMeeting.join_url}`,
        ]
          .filter(Boolean)
          .join("\n"),
        startDateTime: dateTimes.startDateTime,
        endDateTime: dateTimes.endDateTime,
        timezone: DEFAULT_TIMEZONE,
        attendees,
        location: zoomMeeting.join_url,
      });

      const updated = await updateBooking(booking._id, {
        zoomMeetingId: zoomMeeting.id,
        zoomJoinUrl: zoomMeeting.join_url,
        zoomStartUrl: zoomMeeting.start_url,
        calendarEventId: calendarEvent.id,
        calendarEventLink: calendarEvent.htmlLink,
      });
      booking = updated ?? booking;

      if (parsed.data.phone) {
        try {
          await sendWhatsAppBookingMessage({
            to: parsed.data.phone,
            name: parsed.data.name,
            date: parsed.data.preferredDate,
            time: parsed.data.preferredTime,
            timezone: DEFAULT_TIMEZONE,
            meetingLink: zoomMeeting.join_url,
          });
        } catch (whatsAppError) {
          const errorMessage =
            whatsAppError instanceof Error ? whatsAppError.message : "Unknown WhatsApp error";
          console.error("WhatsApp send error:", errorMessage);
        }
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown scheduling error";
      console.error("Booking scheduling error:", errorMessage);
      await deleteBooking(booking._id);
      if (zoomMeeting?.id) {
        await deleteZoomMeeting(zoomMeeting.id);
      }
      const includeDetails = process.env.NODE_ENV !== "production";
      return {
        success: false,
        status: 500,
        errors: {
          _form: [
            includeDetails
              ? `Scheduling failed: ${errorMessage}`
              : "Unable to schedule this consultation right now. Please try again.",
          ],
        },
      };
    }
  }

  return {
    success: true,
    data: booking,
  };
}

export async function fetchBookings(filter) {
  return listBookings(filter);
}
