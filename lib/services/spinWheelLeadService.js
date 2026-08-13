"use server";

import { z } from "zod";
import {
  persistSpinWheelLead,
  listSpinWheelLeads,
} from "@/lib/repositories/spinWheelRepository";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email"),
  phone: z
    .string()
    .min(6, "Please provide a valid phone number")
    .transform((value) => value.trim()),
  interests: z.string().min(2, "Please share your interests"),
  message: z.string().optional(),
});

export async function submitSpinWheelLead(payload, ipHash) {
  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const lead = {
    id: crypto.randomUUID(),
    ...parsed.data,
    ipHash,
  };

  const saved = await persistSpinWheelLead(lead);

  if (saved.alreadySpun) {
    return { success: false, alreadySpun: true };
  }

  return {
    success: true,
    data: saved.record,
  };
}

export async function fetchSpinWheelLeads() {
  return listSpinWheelLeads();
}
