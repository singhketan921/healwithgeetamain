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

function formatPrice(value, currency = "USD") {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
}

function formatDurationWeeks(weeks, format) {
  if (!weeks) return format ?? "";
  const durationText = `${weeks} ${weeks === 1 ? "Week" : "Weeks"}`;
  return format ? `${durationText} | ${format}` : durationText;
}

export default function CoursesLearnings({ courses = [] }) {
  const safeCourses = courses.length ? courses : fallbackCourses;

  return (
    <section className="px-6 py-20 bg-[#FCFBF8] sm:px-10" id="courses">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="font-serif text-[2.3rem] sm:text-[2.8rem] font-semibold text-charcoal mb-2">
          Our Learnings
        </h2>
        <p className="text-base text-gray-600">
          Choose the guidance that resonates with your soul
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {safeCourses.map((course, i) => (
          <motion.div
            key={course.id ?? i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col overflow-hidden transition bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={course.image ?? "/assets/images/astrology.jpg"}
              alt={course.title}
              className="object-cover w-full h-48"
            />

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 p-5">
              <div>
                <h3 className="text-[1.1rem] font-semibold text-charcoal mb-1">
                  {course.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">
                  {course.headline ?? course.description}
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  {formatDurationWeeks(course.durationWeeks, course.format)}
                </p>
                {course.modules?.length ? (
                  <ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
                    {course.modules.slice(0, 4).map((module) => (
                      <li key={module}>{module}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between pt-3 mt-auto">
                <span className="text-[#ACBF69] font-semibold text-base">
                  {formatPrice(course.price, course.currency)}
                </span>
                <a
                  href="/courses#form"
                  className="bg-[#ACBF69] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#98A95C] transition"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
