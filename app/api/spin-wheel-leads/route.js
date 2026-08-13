import { NextResponse } from "next/server";
import { submitSpinWheelLead } from "@/lib/services/spinWheelLeadService";

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || "unknown";
}

async function hashIp(ip) {
  const bytes = new TextEncoder().encode(ip);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = await submitSpinWheelLead(payload, await hashIp(getClientIp(request)));

  if (result.alreadySpun) {
    return NextResponse.json({ error: "This IP address has already spun." }, { status: 409 });
  }

  if (!result.success) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  return NextResponse.json({ data: result.data }, { status: 201 });
}
