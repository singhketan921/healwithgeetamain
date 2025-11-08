import { NextResponse } from "next/server";
import { fetchConsultationById } from "@/lib/services/consultationService";

export async function GET(_request, { params }) {
  const consultation = await fetchConsultationById(params.id);

  if (!consultation) {
    return NextResponse.json(
      { error: `Consultation with id '${params.id}' not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: consultation });
}
