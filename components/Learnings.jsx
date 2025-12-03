'use client';

import Reveal from "@/components/Reveal";

const learnings = [
  {
    id: 1,
    title: "Vedic Astrology Mastery",
    subtitle: "Certificate Course",
    description:
      "A six-month editorial lab covering chart drafting, predictive flows, and client storytelling.",
    price: ",200",
    duration: "24 Week Residency",
  },
  {
    id: 2,
    title: "Tarot Narratives Studio",
    subtitle: "Immersive Cohort",
    description:
      "Explore symbolism, therapeutic spreads, and performance style readings for circles and digital salons.",
    price: "",
    duration: "12 Week Salon",
  },
];

export default function Learnings() {
  return (
    <section
      className="relative overflow-hidden py-24 text-[#524E48]"
      style={{ backgroundImage: "var(--gradient-luxe)" }}
    >
      <div className="glow-layer">
        <span className="glow-spot glow-spot-cream left-1/2 top-0 -translate-x-1/2" />
        <span className="glow-spot glow-spot-olive right-0 bottom-0" />
      </div>
      <div className="relative max-w-6xl px-6 mx-auto space-y-12">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
              Classroom Dispatch
            </p>
            <h2 className="font-serif text-[2.5rem] leading-tight">
              Study group for mystic editors
            </h2>
          </div>
          <a
            href="/courses"
            className="text-xs uppercase tracking-[0.4em] border px-6 py-3 rounded-full border-[#524E48] hover:bg-[#524E48] hover:text-[#EAE4DC]"
          >
            Browse Courses
          </a>
        </Reveal>

        <div className="space-y-10">
          {learnings.map((course, index) => (
            <Reveal
              key={course.id}
              delay={0.1 * index}
              className="grid gap-6 py-6 border-t border-[#B0AAA0]/40 md:grid-cols-12 first:border-t-0"
            >
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
                  {course.subtitle}
                </p>
              </div>
              <div className="md:col-span-6 space-y-3">
                <h3 className="font-serif text-2xl">{course.title}</h3>
                <p className="text-sm text-[#524E48]/80 leading-relaxed">
                  {course.description}
                </p>
              </div>
              <div className="md:col-span-3 flex flex-col gap-3 text-sm uppercase tracking-[0.35em] text-[#B0AAA0]">
                <span>{course.duration}</span>
                <span>{course.price}</span>
                <a
                  href="/courses#form"
                  className="text-[#524E48] hover:text-[#A59079]"
                >
                  Enroll
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
