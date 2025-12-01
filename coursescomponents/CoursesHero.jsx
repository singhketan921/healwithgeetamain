'use client';

import EditorialHero from "@/components/EditorialHero";

const COURSES_MEDIA = "/assets/images/courseshero.png";

export default function CoursesHero() {
  return (
    <EditorialHero
      eyebrow="Courses - Cohort 09"
      subtitle="Certification / Live salons / Guided practicum"
      title="Expand your wisdom with guided study"
      description="Our immersive classrooms blend live ceremonies, tactile workbooks, and mentorship from Geeta. Each week reveals a new chapter from chart architecture to energy medicine practicum."
      primary={{ label: "Enroll Now", href: "/courses#form" }}
      secondary={{ label: "View Syllabus", href: "/courses#learnings" }}
      media={COURSES_MEDIA}
    />
  );
}
