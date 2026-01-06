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
    <section
      className="py-24 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EEECE9 100%)" }}
      id="learnings"
    >
      <div className="mx-auto max-w-[1200px] px-6 space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <article className="rounded-[16px] border border-[#e7dfd6] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
            <div className="relative h-80 overflow-hidden">
              <img
                src={feature.image ?? "/assets/images/astrology.jpg"}
                alt={feature.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e7dfd6]/80 to-transparent" />
            </div>
            <div className="p-8 space-y-4">
              <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                Featured Course
              </p>
              <div className="flex flex-wrap gap-4 text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                <span>{formatDuration(feature.durationWeeks, feature.format)}</span>
                <span>·</span>
                <span>{feature.price ? formatPrice(feature.price, feature.currency) : "Custom"}</span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-semibold leading-tight">
                {feature.title}
              </h3>
              <p className="text-[14px] text-[#7a736c] leading-[1.7]">
                {feature.headline ?? feature.description}
              </p>
              {feature.modules?.length ? (
                <ul className="text-[12px] uppercase tracking-[0.2em] text-[#9a938c] space-y-1">
                  {feature.modules.slice(0, 4).map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              ) : null}
              <a
                href="/courses#form"
                className="min-w-[200px] rounded-[12px] bg-white px-6 py-2 text-[14px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
              >
                Enroll
              </a>
            </div>
          </article>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                Curriculum
              </p>
              <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
                Other courses in this editorial series
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
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
                  className="grid gap-4 py-4 border-b border-[#e7dfd6] last:border-0 md:grid-cols-12"
                >
                  <div className="text-[12px] uppercase tracking-[0.2em] text-[#9a938c] md:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-2 md:col-span-7">
                    <h3 className="text-[18px] sm:text-[20px] font-semibold">{course.title}</h3>
                    <p className="text-[14px] text-[#7a736c] leading-[1.7]">
                      {course.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-[12px] uppercase tracking-[0.2em] text-[#9a938c] md:col-span-3">
                    <span>{formatDuration(course.durationWeeks, course.format)}</span>
                    <span>{course.price ? formatPrice(course.price, course.currency) : "Custom"}</span>
                    <a
                      href="/courses#form"
                      className="text-[#6b625a] hover:text-[#8f857c]"
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
