import { NextResponse } from "next/server";
import { fetchConsultations, fetchConsultationFaq } from "@/lib/services/consultationService";

export async function GET() {
  const [items, faq] = await Promise.all([fetchConsultations(), fetchConsultationFaq()]);
  return NextResponse.json({
    data: items,
    meta: {
      count: items.length,
    },
    faq,
  });
}
