import { notFound } from "next/navigation";
import { fetchCourseById } from "@/lib/services/courseService";

function formatPrice(value, currency = "USD") {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
}

function formatDuration(months, format, weeks) {
  if (months) {
    const base = `${months} ${months === 1 ? "Month" : "Months"}`;
    return format ? `${base} - ${format}` : base;
  }
  if (weeks) {
    const base = `${weeks} ${weeks === 1 ? "Week" : "Weeks"}`;
    return format ? `${base} - ${format}` : base;
  }
  return format ?? "";
}

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const course = await fetchCourseById(resolvedParams.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#EAE4DC] pt-28 pb-16 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <a
          href="/courses"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.32em] text-[#8f857c]"
        >
          <span>&lt;-</span>
          Back to courses
        </a>
      </div>
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[24px] overflow-hidden border border-[#e7dfd6] shadow-[0_18px_36px_rgba(0,0,0,0.14)]">
            <img
              src={course.image || "/assets/images/astrology.jpg"}
              alt={course.title}
              className="w-full h-[360px] object-cover"
            />
          </div>
          <div className="bg-white/80 rounded-[24px] border border-[#e7dfd6] p-6">
            <h2 className="text-[18px] font-semibold text-[#6b625a]">
              Course Overview
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#7a736c]">
              {course.summary || course.headline || course.description}
            </p>
            {course.modules?.length ? (
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Modules
                </p>
                <ul className="mt-3 grid gap-2 text-[14px] text-[#6b625a]">
                  {course.modules.map((module) => (
                    <li
                      key={module}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.outcomes?.length ? (
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Outcomes
                </p>
                <ul className="mt-3 grid gap-2 text-[14px] text-[#6b625a]">
                  {course.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.courseCovers?.length ? (
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  What this course covers
                </p>
                <ul className="mt-3 grid gap-2 text-[14px] text-[#6b625a]">
                  {course.courseCovers.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.intuitionTraining?.length ? (
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Energy & intuition development
                </p>
                <ul className="mt-3 grid gap-2 text-[14px] text-[#6b625a]">
                  {course.intuitionTraining.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.realWorldSkills?.length ? (
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Real-world reading skills
                </p>
                <ul className="mt-3 grid gap-2 text-[14px] text-[#6b625a]">
                  {course.realWorldSkills.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.tarotSpreads?.length ? (
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Tarot spreads covered
                </p>
                <ul className="mt-3 grid gap-2 text-[14px] text-[#6b625a]">
                  {course.tarotSpreads.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.handsOnTraining?.length ? (
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Hands-on training
                </p>
                <ul className="mt-3 grid gap-2 text-[14px] text-[#6b625a]">
                  {course.handsOnTraining.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[24px] border border-[#e7dfd6] bg-[#fbf8f5] p-6 shadow-[0_16px_32px_rgba(0,0,0,0.12)]">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Certificate Course
            </p>
            <h1 className="mt-3 text-[30px] font-semibold text-[#6b625a]">
              {course.title}
            </h1>
            <div className="mt-4 flex items-center justify-between text-[13px] uppercase tracking-[0.2em] text-[#9a938c]">
              <span>{course.level ?? "Certificate"}</span>
              <span>
                {course.priceTiers?.length
                  ? `${course.priceTiers.length} price options`
                  : course.price
                    ? formatPrice(course.price, course.currency)
                    : "Custom"}
              </span>
            </div>
            <div className="mt-2 text-[14px] text-[#7a736c]">
              {formatDuration(
                course.durationMonths,
                course.format,
                course.durationWeeks
              ) || "Program details on request"}
            </div>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#7a736c]">
              {course.description}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/courses#form"
                className="rounded-[12px] bg-[#6b625a] px-6 py-3 text-[13px] font-semibold text-white text-center"
              >
                {course.ctaText || "Enroll in this course"}
              </a>
              <a
                href="/courses"
                className="rounded-[12px] border border-[#8f857c] px-6 py-3 text-[13px] font-semibold text-[#6b625a] text-center"
              >
                Back to courses
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#e7dfd6] bg-white/80 p-6">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Details
            </p>
            <dl className="mt-4 space-y-3 text-[14px] text-[#6b625a]">
              <div className="flex items-center justify-between">
                <dt>Price</dt>
                <dd>
                  {course.priceTiers?.length
                    ? "Multiple options"
                    : course.price
                      ? formatPrice(course.price, course.currency)
                      : "Custom"}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Duration</dt>
                <dd>
                  {formatDuration(
                    course.durationMonths,
                    course.format,
                    course.durationWeeks
                  ) || "Custom"}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Format</dt>
                <dd>{course.format ?? "Custom"}</dd>
              </div>
            </dl>
            {course.priceTiers?.length ? (
              <div className="mt-5 text-[14px] text-[#6b625a]">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Price options
                </p>
                <ul className="mt-3 grid gap-2">
                  {course.priceTiers.map((tier) => {
                    const label = tier.label ?? "Price";
                    const isOriginal = /original|mrp/i.test(label);
                    return (
                      <li
                        key={`${label}-${tier.amount}`}
                        className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                      >
                        <span className="font-semibold">{label}:</span>{" "}
                        <span className={isOriginal ? "line-through text-[#9a938c]" : ""}>
                          {formatPrice(tier.amount, tier.currency ?? course.currency)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {course.formatDetails?.length ? (
              <div className="mt-5 text-[14px] text-[#6b625a]">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Course format
                </p>
                <ul className="mt-3 grid gap-2">
                  {course.formatDetails.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.whoCanJoin?.length ? (
              <div className="mt-5 text-[14px] text-[#6b625a]">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Who can join
                </p>
                <ul className="mt-3 grid gap-2">
                  {course.whoCanJoin.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.durationDetails?.length ? (
              <div className="mt-5 text-[14px] text-[#6b625a]">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Duration details
                </p>
                <ul className="mt-3 grid gap-2">
                  {course.durationDetails.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.certificationDetails?.length ? (
              <div className="mt-5 text-[14px] text-[#6b625a]">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Certification
                </p>
                <ul className="mt-3 grid gap-2">
                  {course.certificationDetails.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.whyStudentsLove?.length ? (
              <div className="mt-5 text-[14px] text-[#6b625a]">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Why students love this course
                </p>
                <ul className="mt-3 grid gap-2">
                  {course.whyStudentsLove.map((item) => (
                    <li
                      key={item}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {course.feesDetails?.length ? (
              <div className="mt-5 text-[14px] text-[#6b625a]">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Fees & enrollment
                </p>
                <ul className="mt-3 grid gap-2">
                  {course.feesDetails.map((item) => {
                    const isOriginal = /original|mrp/i.test(item);
                    return (
                      <li
                        key={item}
                        className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                      >
                        <span className={isOriginal ? "line-through text-[#9a938c]" : ""}>
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {course.faqs?.length ? (
              <div className="mt-5 text-[14px] text-[#6b625a]">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  FAQ
                </p>
                <div className="mt-3 space-y-3">
                  {course.faqs.map((faq) => (
                    <div
                      key={`${faq.question}-${faq.answer}`}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-3"
                    >
                      <p className="font-semibold">{faq.question}</p>
                      <p className="mt-2 text-[#7a736c]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  );
}
