'use server';

import { z } from "zod";
import { createBooking, listBookings } from "@/lib/repositories/bookingRepository";

const bookingSchema = z.object({
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
});

export async function submitBooking(payload) {
  const parsed = bookingSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const booking = await createBooking(parsed.data);
  return {
    success: true,
    data: booking,
  };
}

export async function fetchBookings(filter) {
  return listBookings(filter);
}
