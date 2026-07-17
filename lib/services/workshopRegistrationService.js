"use server";

import { z } from "zod";
import {
  listWorkshopRegistrations,
  persistWorkshopRegistration,
} from "@/lib/repositories/workshopRegistrationRepository";

const optionalText = z
  .string()
  .optional()
  .transform((value) => (value?.trim() ? value.trim() : undefined));

const workshopRegistrationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please provide a valid email"),
  phone: z.string().trim().min(7, "Please provide a valid phone number"),
  city: optionalText,
  preferredWorkshop: z
    .string()
    .trim()
    .min(2, "Please share the workshop topic you are interested in"),
  preferredFormat: z
    .enum(["online", "offline", "either"])
    .default("online"),
  message: optionalText,
});

export async function submitWorkshopRegistration(payload) {
  const parsed = workshopRegistrationSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const registration = {
    id: crypto.randomUUID(),
    status: "new",
    ...parsed.data,
  };

  await persistWorkshopRegistration(registration);

  return {
    success: true,
    data: registration,
  };
}

export async function fetchWorkshopRegistrations() {
  return listWorkshopRegistrations();
}
