'use client';

import { motion } from "framer-motion";

const fallbackCourses = [
  {
    id: "placeholder-course",
    title: "Vedic Astrology Mastery",
    description:
      "An in-depth 8-week program exploring birth charts, planetary alignments, and the ancient art of prediction.",
    durationWeeks: 8,
    format: "Online",
    price: 1200,
    currency: "USD",
    image: "/assets/images/astrology.jpg",
    modules: [],
  },
];

const formatPrice = (value, currency = "USD") => {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
};

const formatDuration = (weeks, format) => {
  if (!weeks) return format ?? "";
  const base = `${weeks} ${weeks === 1 ? "Week" : "Weeks"}`;
  return format ? `${base} · ${format}` : base;
};

export default function CoursesLearnings({ courses = [] }) {
  const safeCourses = courses.length ? courses : fallbackCourses;
  const feature = safeCourses[0];
  const collection = safeCourses.slice(1);

  return (
    <section className="bg-[#F5F2EE] py-24 text-[#524E48]" id="learnings">
      <div className="max-w-6xl px-6 mx-auto space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <article className="rounded-[36px] border border-[#EAE4DC] bg-white shadow-[0_25px_80px_rgba(82,78,72,0.08)] overflow-hidden flex flex-col">
            <div className="relative h-80 overflow-hidden">
              <img
                src={feature.image ?? "/assets/images/astrology.jpg"}
                alt={feature.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#EAE4DC]/80 to-transparent" />
            </div>
            <div className="p-8 space-y-4">
              <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
                Featured Course
              </p>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
                <span>{formatDuration(feature.durationWeeks, feature.format)}</span>
                <span>·</span>
                <span>{feature.price ? formatPrice(feature.price, feature.currency) : "Custom"}</span>
              </div>
              <h3 className="font-serif text-[2rem] leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-[#524E48]/75 leading-relaxed">
                {feature.headline ?? feature.description}
              </p>
              {feature.modules?.length ? (
                <ul className="text-xs uppercase tracking-[0.3em] text-[#B0AAA0] space-y-1">
                  {feature.modules.slice(0, 4).map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              ) : null}
              <a
                href="/courses#form"
                className="inline-flex items-center justify-center px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] border border-[#524E48] rounded-full hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
              >
                Enroll
              </a>
            </div>
          </article>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
                Curriculum
              </p>
              <h2 className="font-serif text-[2.4rem] leading-tight">
                Other courses in this editorial series
              </h2>
              <p className="text-base text-[#524E48]/80">
                Each module reads like a magazine story—dense with technique yet styled for modern seekers.
              </p>
            </div>

            <div className="space-y-6">
              {[feature, ...collection].map((course, index) => (
                <motion.article
                  key={course.id ?? index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="grid gap-4 py-4 border-b border-[#EAE4DC] last:border-0 md:grid-cols-12"
                >
                  <div className="text-xs uppercase tracking-[0.35em] text-[#B0AAA0] md:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-2 md:col-span-7">
                    <h3 className="font-serif text-xl">{course.title}</h3>
                    <p className="text-sm text-[#524E48]/75 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm uppercase tracking-[0.35em] text-[#B0AAA0] md:col-span-3">
                    <span>{formatDuration(course.durationWeeks, course.format)}</span>
                    <span>{course.price ? formatPrice(course.price, course.currency) : "Custom"}</span>
                    <a
                      href="/courses#form"
                      className="text-[#524E48] hover:text-[#A59079]"
                    >
                      Enroll
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
