import { NextResponse } from "next/server";
import { fetchCourses, fetchCourseFaq } from "@/lib/services/courseService";

export async function GET() {
  const [courses, faq] = await Promise.all([fetchCourses(), fetchCourseFaq()]);
  return NextResponse.json({
    data: courses,
    meta: {
      count: courses.length,
    },
    faq,
  });
}
