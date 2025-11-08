import { NextResponse } from "next/server";
import {
  submitContactRequest,
  fetchContactChannels,
  fetchStayConnectedLinks,
} from "@/lib/services/contactService";

export async function GET() {
  const [channels, stayConnected] = await Promise.all([
    fetchContactChannels(),
    fetchStayConnectedLinks(),
  ]);

  return NextResponse.json({
    channels,
    stayConnected,
  });
}

export async function POST(request) {
  const payload = await request.json();
  const result = await submitContactRequest(payload);

  if (!result.success) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  return NextResponse.json({ data: result.data }, { status: 201 });
}
