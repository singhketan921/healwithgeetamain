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
      className="bg-[#f8f3ef] py-20 text-[#ad7f53] sm:py-24"
      id="learnings"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="mx-auto mb-14 max-w-[760px] text-center sm:mb-16">
          <p className="mb-3 flex items-center justify-center gap-2 text-[14px] font-medium text-[#ad7f53] sm:text-[16px]">
            <span className="text-[18px] leading-none">✽</span>
            Certificate Courses
          </p>
          <h2 className="text-[40px] font-normal leading-[0.95] text-[#ad7f53] sm:text-[56px] md:text-[64px]">
            Learn Sacred Practices
            <span className="mt-2 block font-serif text-[44px] italic leading-none sm:text-[60px] md:text-[68px]">
              with Guidance
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.7] text-[#ad7f53]/85 sm:text-[16px]">
            Explore our full list of certificate courses designed for spiritual seekers and future practitioners.
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-[#c99b74] lg:grid-cols-3">
          {safeCourses.map((course, index) => {
            const courseId = course.id ?? course._id;
            const priceLabel = course.priceTiers?.length
              ? `${course.priceTiers.length} price options`
              : course.price
                ? formatPrice(course.price, course.currency)
                : "Custom";
            const description = course.headline ?? course.description;
            return (
              <motion.article
                key={courseId ?? index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative min-h-[390px] overflow-hidden border-b border-r border-[#c99b74] bg-[#f8f3ef] p-4 sm:min-h-[600px] sm:p-10 lg:p-[72px]"
              >
                <div className="flex h-full flex-col items-start">
                  <Link href={`/courses/${courseId}`} className="mb-4 block w-full sm:mb-8">
                    <img
                      src={course.image || "/assets/images/astrology.jpg"}
                      alt={course.title}
                      className="aspect-[1.45/1] w-full object-cover"
                    />
                  </Link>
                  <Link href={`/courses/${courseId}`}>
                    <h3 className="mb-2 text-[18px] font-normal leading-tight text-[#ad7f53] sm:mb-3 sm:text-[28px]">
                      {course.title}
                    </h3>
                  </Link>
                  <span className="mb-4 inline-flex bg-[#ad7f53] px-2.5 py-1.5 text-[11px] leading-none !text-white sm:mb-6 sm:px-3 sm:py-2 sm:text-[13px]">
                    {priceLabel}
                  </span>
                  <p className="mb-4 max-h-[4.1em] max-w-[320px] overflow-hidden text-[12px] leading-[1.35] text-[#ad7f53] preserve-format sm:mb-8 sm:max-h-none sm:text-[15px]">
                    {description}
                  </p>
                  <div className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[#ad7f53]/80 sm:mb-6 sm:text-[12px] sm:tracking-[0.14em]">
                    {formatDuration(
                      course.durationMonths,
                      course.format,
                      course.durationWeeks
                    ) || "Certificate Program"}
                  </div>
                  <Link
                    href={`/courses/${courseId}`}
                    className="mt-auto inline-flex h-9 w-full items-center justify-center gap-2 bg-[#ad7f53] px-3 text-[10px] font-medium uppercase tracking-[0.08em] !text-white transition-colors hover:bg-[#986d45] sm:h-12 sm:min-w-[168px] sm:w-auto sm:gap-3 sm:px-7 sm:text-[13px]"
                  >
                    Read More <span aria-hidden="true">↗</span>
                  </Link>
                </div>

                <Link
                  href={`/courses/${courseId}`}
                  className="absolute inset-0 z-10 flex translate-y-4 flex-col items-center justify-center bg-[#ad7f53] px-8 text-center !text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                >
                  <span className="mb-4 text-[20px] font-normal leading-tight sm:mb-6 sm:text-[30px]">
                    {course.title}
                  </span>
                  <span className="mb-5 max-w-[250px] text-[12px] leading-[1.35] !text-white/90 sm:mb-7 sm:text-[15px]">
                    {description}
                  </span>
                  <span className="inline-flex h-10 items-center justify-center gap-2 bg-[#f8f3ef] px-4 text-[10px] font-medium uppercase tracking-[0.08em] text-[#5e5147] sm:h-12 sm:gap-3 sm:px-8 sm:text-[13px]">
                    View Details <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
