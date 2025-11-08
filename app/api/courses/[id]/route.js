import { NextResponse } from "next/server";
import { fetchCourseById } from "@/lib/services/courseService";

export async function GET(_request, { params }) {
  const course = await fetchCourseById(params.id);

  if (!course) {
    return NextResponse.json({ error: `Course with id '${params.id}' not found.` }, { status: 404 });
  }

  return NextResponse.json({ data: course });
}
