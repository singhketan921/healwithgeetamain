import { NextResponse } from "next/server";
import { submitSpinWheelLead } from "@/lib/services/spinWheelLeadService";

export async function POST(request) {
  const payload = await request.json();
  const result = await submitSpinWheelLead(payload);

  if (!result.success) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  return NextResponse.json({ data: result.data }, { status: 201 });
}
