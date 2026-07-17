import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import {
  fetchWorkshopRegistrations,
  submitWorkshopRegistration,
} from "@/lib/services/workshopRegistrationService";

export async function GET() {
  const registrations = await fetchWorkshopRegistrations();
  return NextResponse.json({
    data: registrations,
    meta: { count: registrations.length },
  });
}

export async function POST(request) {
  const payload = await request.json();
  const result = await submitWorkshopRegistration(payload);

  if (!result.success) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  revalidatePath("/admin/workshop-registrations");
  return NextResponse.json({ data: result.data }, { status: 201 });
}
