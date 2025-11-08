import { NextResponse } from "next/server";
import { fetchContactMessages } from "@/lib/services/contactService";

export async function GET() {
  const messages = await fetchContactMessages();
  return NextResponse.json({
    data: messages,
    meta: {
      count: messages.length,
    },
  });
}
