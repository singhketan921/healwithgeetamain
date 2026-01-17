import { NextResponse } from "next/server";
import { submitBooking, fetchBookings } from "@/lib/services/bookingService";

export async function GET(request) {
  const type = request.nextUrl.searchParams.get("type") || undefined;
  const bookings = await fetchBookings(type ? { type } : undefined);
  return NextResponse.json({
    data: bookings,
    meta: { count: bookings.length, ...(type ? { type } : {}) },
  });
}

export async function POST(request) {
  const payload = await request.json();
  const result = await submitBooking(payload);
  if (!result.success) {
    const status = result.status || 422;
    return NextResponse.json({ errors: result.errors }, { status });
  }
  return NextResponse.json({ data: result.data }, { status: 201 });
}
