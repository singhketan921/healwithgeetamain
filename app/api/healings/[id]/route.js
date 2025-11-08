import { NextResponse } from "next/server";
import { fetchHealingModalityById } from "@/lib/services/healingService";

export async function GET(_request, { params }) {
  const modality = await fetchHealingModalityById(params.id);

  if (!modality) {
    return NextResponse.json({ error: `Healing modality with id '${params.id}' not found.` }, { status: 404 });
  }

  return NextResponse.json({ data: modality });
}
