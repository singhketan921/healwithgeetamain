'use server';

import { z } from "zod";
import { persistContactMessage, listContactMessages } from "@/lib/repositories/contactRepository";
import { getContactChannels, getStayConnectedLinks } from "@/lib/data/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email"),
  phone: z
    .string()
    .optional()
    .transform((value) => (value?.trim() ? value.trim() : undefined)),
  topic: z
    .enum(["consultation", "courses", "healing", "collaboration", "other"])
    .default("consultation"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactRequest(payload) {
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const contactMessage = {
    id: crypto.randomUUID(),
    ...parsed.data,
  };

  await persistContactMessage(contactMessage);

  return {
    success: true,
    data: contactMessage,
  };
}

export async function fetchContactChannels() {
  return getContactChannels();
}

export async function fetchStayConnectedLinks() {
  return getStayConnectedLinks();
}

export async function fetchContactMessages() {
  return listContactMessages();
}
