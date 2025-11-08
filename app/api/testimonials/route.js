import { NextResponse } from "next/server";
import { fetchTestimonials } from "@/lib/services/testimonialService";

export async function GET(request) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get("category") ?? undefined;

  const testimonials = await fetchTestimonials({ category });
  return NextResponse.json({
    data: testimonials,
    meta: {
      count: testimonials.length,
      ...(category ? { category } : {}),
    },
  });
}
