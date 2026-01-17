import { notFound } from "next/navigation";
import Testimonials from "@/components/Testimonials";
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

function renderListBlock(title, items) {
  if (!items?.length) {
    return null;
  }
  return (
    <div className="rounded-[20px] border border-[#e7dfd6] bg-white/80 p-6 shadow-[0_12px_26px_rgba(0,0,0,0.08)]">
      <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
        {title}
      </p>
      <ul className="mt-4 grid gap-2 text-[14px] text-[#6b625a]">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-[12px] border border-[#e7dfd6] bg-[#F9F4E8] px-4 py-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const course = await fetchCourseById(resolvedParams.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#D0BFA9] pt-28 pb-16 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <a
          href="/courses"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.32em] text-[#8f857c]"
        >
          <span>&lt;-</span>
          Back to courses
        </a>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-5">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              {course.level ?? "Certificate Course"}
            </p>
            <h1 className="text-[32px] sm:text-[42px] font-semibold leading-[1.15] text-[#6b625a]">
              {course.title}
            </h1>
            <p className="text-[15px] sm:text-[18px] leading-[1.7] text-[#7a736c]">
              {course.summary || course.headline || course.description}
            </p>
            <div className="flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
              <span className="rounded-full border border-[#e7dfd6] bg-[#F9F4E8] px-4 py-2">
                {formatDuration(
                  course.durationMonths,
                  course.format,
                  course.durationWeeks
                ) || "Custom duration"}
              </span>
              <span className="rounded-full border border-[#e7dfd6] bg-[#F9F4E8] px-4 py-2">
                {course.priceTiers?.length
                  ? `${course.priceTiers.length} price options`
                  : course.price
                    ? formatPrice(course.price, course.currency)
                    : "Custom pricing"}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/courses#form"
                className="rounded-[12px] bg-[#6b625a] px-6 py-3 text-[13px] font-semibold !text-white text-center"
              >
                {course.ctaText || "Enroll in this course"}
              </a>
              <a
                href="/courses"
                className="rounded-[12px] border border-[#8f857c] px-6 py-3 text-[13px] font-semibold text-[#6b625a] text-center"
              >
                View all courses
              </a>
            </div>
          </div>
          <div className="rounded-[26px] overflow-hidden border border-[#e7dfd6] shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
            <img
              src={course.image || "/assets/images/astrology.jpg"}
              alt={course.title}
              className="w-full h-[360px] object-cover"
            />
          </div>
        </section>

        <section className="mt-12 rounded-[24px] border border-[#e7dfd6] bg-white/80 p-8 shadow-[0_16px_34px_rgba(0,0,0,0.1)]">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                Course Overview
              </p>
              <p className="mt-4 text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
                {course.description}
              </p>
            </div>
            <div className="rounded-[20px] border border-[#e7dfd6] bg-[#F9F4E8] p-6">
              <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                Key Details
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
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {renderListBlock("Modules", course.modules)}
          {renderListBlock("Outcomes", course.outcomes)}
          {renderListBlock("What this course covers", course.courseCovers)}
          {renderListBlock("Energy & intuition development", course.intuitionTraining)}
          {renderListBlock("Real-world reading skills", course.realWorldSkills)}
          {renderListBlock("Tarot spreads covered", course.tarotSpreads)}
          {renderListBlock("Hands-on training", course.handsOnTraining)}
          {renderListBlock("Course format", course.formatDetails)}
          {renderListBlock("Who can join", course.whoCanJoin)}
          {renderListBlock("Duration details", course.durationDetails)}
          {renderListBlock("Certification", course.certificationDetails)}
          {renderListBlock("Why students love this course", course.whyStudentsLove)}
          {renderListBlock("Fees & enrollment", course.feesDetails)}
        </section>

        {course.priceTiers?.length ? (
          <section className="mt-12 rounded-[24px] border border-[#e7dfd6] bg-white/80 p-8">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Price options
            </p>
            <ul className="mt-4 grid gap-3 text-[14px] text-[#6b625a]">
              {course.priceTiers.map((tier) => {
                const label = tier.label ?? "Price";
                const isOriginal = /original|mrp/i.test(label);
                return (
                  <li
                    key={`${label}-${tier.amount}`}
                    className="rounded-[12px] border border-[#e7dfd6] bg-[#F9F4E8] px-4 py-3"
                  >
                    <span className="font-semibold">{label}:</span>{" "}
                    <span className={isOriginal ? "line-through text-[#9a938c]" : ""}>
                      {formatPrice(tier.amount, tier.currency ?? course.currency)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {course.faqs?.length ? (
          <section className="mt-12 rounded-[24px] border border-[#e7dfd6] bg-white/80 p-8">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              FAQ
            </p>
            <div className="mt-4 space-y-4">
              {course.faqs.map((faq) => (
                <div
                  key={`${faq.question}-${faq.answer}`}
                  className="rounded-[12px] border border-[#e7dfd6] bg-[#F9F4E8] px-4 py-3"
                >
                  <p className="font-semibold text-[#6b625a]">{faq.question}</p>
                  <p className="mt-2 text-[#7a736c]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12 rounded-[26px] bg-[#6b625a] px-8 py-10 text-center">
          <h2 className="text-[26px] sm:text-[32px] font-semibold !text-white">
            Ready to begin your learning journey?
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] text-white/80">
            Secure your seat and receive the full course roadmap.
          </p>
          <a
            href="/courses#form"
            className="mt-6 inline-flex rounded-[12px] bg-white px-8 py-3 text-[13px] font-semibold !text-[#6b625a]"
          >
            {course.ctaText || "Enroll now"}
          </a>
        </section>
      </div>
      <section className="mt-16 -mx-6 lg:-mx-12">
        <Testimonials showCtas={false} />
      </section>
    </div>
  );
}
