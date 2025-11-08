import { NextResponse } from "next/server";
import { fetchHealingModalities } from "@/lib/services/healingService";

export async function GET() {
  const modalities = await fetchHealingModalities();
  return NextResponse.json({
    data: modalities,
    meta: {
      count: modalities.length,
    },
  });
}
