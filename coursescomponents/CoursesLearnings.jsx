'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const formatPrice = (value, currency = "USD") => {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
};

const formatDuration = (months, format, weeks) => {
  if (months) {
    const base = `${months} ${months === 1 ? "Month" : "Months"}`;
    return format ? `${base} - ${format}` : base;
  }
  if (weeks) {
    const base = `${weeks} ${weeks === 1 ? "Week" : "Weeks"}`;
    return format ? `${base} - ${format}` : base;
  }
  return format ?? "";
};

export default function CoursesLearnings({ courses = [] }) {
  const safeCourses = courses;

  return (
    <section
      className="py-24 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F4E8 100%)" }}
      id="learnings"
    >
      <div className="mx-auto max-w-[1320px] px-6 space-y-12">
        <div className="space-y-4 max-w-[720px] mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
            Certificate Courses
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold tracking-[0.14em] text-[#6b625a]">
            Learn Sacred Practices with Guidance
          </h2>
          <div className="mx-auto h-[2px] w-16 rounded-full bg-[#d8cfc6]" />
          <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
            Explore our full list of certificate courses designed for spiritual seekers and future practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safeCourses.map((course, index) => {
            const courseId = course.id ?? course._id;
            return (
              <motion.article
                key={courseId ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-[18px] border border-[#e7dfd6] bg-[#fbf8f5] shadow-[0_16px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
              >
                <Link href={`/courses/${courseId}`} className="block">
                  <img
                    src={course.image || "/assets/images/astrology.jpg"}
                    alt={course.title}
                    className="w-full h-52 object-cover"
                  />
                </Link>
                <div className="flex flex-col h-full p-6 space-y-4">
                  <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                    <span>{course.level ?? "Certificate"}</span>
                    <span>
                      {course.priceTiers?.length
                        ? `${course.priceTiers.length} price options`
                        : course.price
                          ? formatPrice(course.price, course.currency)
                          : "Custom"}
                    </span>
                  </div>
                  <Link href={`/courses/${courseId}`}>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug">
                      {course.title}
                    </h3>
                  </Link>
                  <p className="text-[14px] text-[#7a736c] flex-1 leading-[1.7] preserve-format">
                    {course.headline ?? course.description}
                  </p>
                  <div className="text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                    {formatDuration(
                      course.durationMonths,
                      course.format,
                      course.durationWeeks
                    ) || "Certificate Program"}
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      href={`/courses/${courseId}`}
                      className="rounded-[12px] border border-[#8f857c] bg-transparent px-6 py-2 text-[13px] font-semibold text-[#6b625a] text-center"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
