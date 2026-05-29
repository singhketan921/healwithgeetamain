import { notFound } from "next/navigation";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
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

function extractLowestPrice(text, fallbackCurrency) {
  if (!text) {
    return null;
  }
  const normalized = text.toString();
  const isInr =
    /₹|inr|rs\.?/i.test(normalized) || /\/-/.test(normalized);
  const currency = isInr ? "INR" : fallbackCurrency;
  const matches = Array.from(
    normalized.matchAll(/(\d{1,3}(?:[,\s]\d{3})+|\d+)(?:\.\d+)?/g)
  );
  const values = matches
    .map((match) => match[0].replace(/[,\s]/g, ""))
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value) && value > 0);
  if (!values.length) {
    return null;
  }
  return { amount: Math.min(...values), currency };
}

function extractDurationText(text) {
  if (!text) {
    return "";
  }
  const normalized = text.toString();
  const durationMatch = normalized.match(
    /duration[^0-9]*([0-9]+(?:\.[0-9]+)?\s*(?:day|days|week|weeks|month|months|hour|hours|minute|minutes))/i
  );
  if (durationMatch?.[1]) {
    return durationMatch[1].trim();
  }
  const genericMatch = normalized.match(
    /([0-9]+(?:\.[0-9]+)?\s*(?:day|days|week|weeks|month|months|hour|hours|minute|minutes))/i
  );
  return genericMatch?.[1]?.trim() ?? "";
}

function renderListBlock(title, items) {
  if (Array.isArray(items) ? items.length === 0 : !items?.trim()) {
    return null;
  }
  const isList = Array.isArray(items);
  return (
    <section className="border-b border-[#ad7f53] py-9">
      <h2 className="text-[28px] font-normal text-[#ad7f53]">
        {title}
      </h2>
      {isList ? (
      <ul className="mt-7 grid gap-3 text-[15px] leading-[1.45] text-[#ad7f53]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    ) : (
        <p className="preserve-format mt-7 text-[15px] leading-[1.45] text-[#ad7f53]">
          {items}
        </p>
    )}
    </section>
  );
}

function sidebarSource(course) {
  const candidates = [
    course.modules,
    course.courseCovers,
    course.outcomes,
    course.whoCanJoin,
  ].find((items) => Array.isArray(items) && items.length);

  if (candidates?.length) {
    return candidates;
  }

  return ["Course overview", "Modules", "Certification", "Fees & enrollment", "Who can join"];
}

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const course = await fetchCourseById(resolvedParams.id);

  if (!course) {
    notFound();
  }

  const derivedPrice = extractLowestPrice(course.feesDetails, course.currency);
  const durationText =
    extractDurationText(course.certificationDetails) ||
    formatDuration(course.durationMonths, course.format, course.durationWeeks);
  const priceText = derivedPrice
    ? formatPrice(derivedPrice.amount, derivedPrice.currency ?? course.currency)
    : course.priceTiers?.length
      ? `${course.priceTiers.length} price options`
      : course.price
        ? formatPrice(course.price, course.currency)
        : "Custom pricing";

  return (
    <div className="min-h-screen bg-[#f8f3ef] px-6 pb-16 pt-[calc(var(--navbar-height)+56px)] text-[#ad7f53] lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_320px]">
        <main>
        <Link
          href="/courses"
          className="mb-10 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.26em] text-[#ad7f53]"
        >
          ← Back to courses
        </Link>

        <section>
            <h1 className="max-w-[760px] text-[46px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[60px]">
              {course.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-[12px] text-white">
              <span className="bg-[#ad7f53] px-4 py-2">
                Price {priceText}
              </span>
              <span className="bg-[#ad7f53] px-4 py-2">
                Duration : {durationText || "Custom"}
              </span>
            </div>

            <div className="mt-8 space-y-7 border-b border-[#ad7f53] pb-9">
              {course.summary ? (
                <p className="preserve-format text-[15px] leading-[1.45] text-[#ad7f53]">
                  {course.summary}
                </p>
              ) : null}
              <p className="preserve-format text-[15px] leading-[1.45] text-[#ad7f53]">
                {course.description}
              </p>
            </div>
        </section>

        <section>
          {renderListBlock("What this course covers", course.courseCovers)}
          {renderListBlock("Modules", course.modules)}
          {renderListBlock("Outcomes", course.outcomes)}
          {renderListBlock("Energy & intuition development", course.intuitionTraining)}
          {renderListBlock("Real-world reading skills", course.realWorldSkills)}
          {renderListBlock("Tarot spreads covered", course.tarotSpreads)}
          {renderListBlock("Hands-on training", course.handsOnTraining)}
          {renderListBlock("Certification", course.certificationDetails)}
          {renderListBlock("Fees & enrollment", course.feesDetails)}
          {renderListBlock("Who can join", course.whoCanJoin)}
          {renderListBlock("Course format", course.formatDetails)}
          {renderListBlock("Duration details", course.durationDetails)}
          {renderListBlock("Why students love this course", course.whyStudentsLove)}
        </section>

        {course.priceTiers?.length ? (
          <section className="border-b border-[#ad7f53] py-9">
            <h2 className="text-[28px] font-normal text-[#ad7f53]">
              Price options
            </h2>
            <ul className="mt-7 grid gap-3 text-[15px] text-[#ad7f53]">
              {course.priceTiers.map((tier) => {
                const label = tier.label ?? "Price";
                const isOriginal = /original|mrp/i.test(label);
                return (
                  <li
                    key={`${label}-${tier.amount}`}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">✓</span>
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

        <section className="border-b border-[#ad7f53] py-9">
          <h2 className="text-[28px] font-normal text-[#ad7f53]">
            Key details
          </h2>
          <ul className="mt-7 grid gap-3 text-[15px] text-[#ad7f53]">
            <li className="flex items-center gap-3">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">✓</span>
              {priceText}
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">✓</span>
              {durationText || "Custom duration"}
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">✓</span>
              {course.format ?? course.level ?? "Certificate course"}
            </li>
          </ul>
        </section>

        <img
          src={course.image || "/assets/images/astrology.jpg"}
          alt={course.title}
          className="mt-9 h-[360px] w-full object-cover"
        />

        {Array.isArray(course.faqs) ? (
          course.faqs.length ? (
            <FAQSection className="mt-12 -mx-6 lg:-mx-12" faqs={course.faqs} />
          ) : null
        ) : course.faqs?.trim() ? (
          <FAQSection
            className="mt-12 -mx-6 lg:-mx-12"
            faqs={[{ question: "Course FAQs", answer: course.faqs }]}
          />
        ) : null}
        </main>

        <aside className="space-y-6 lg:sticky lg:top-[calc(var(--navbar-height)+32px)] lg:self-start">
          <div className="bg-[#ad7f53] p-7 text-white">
            <h2 className="text-[25px] font-normal">{course.title}</h2>
            <div className="mt-6 grid gap-3">
              {sidebarSource(course).slice(0, 5).map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className={index === 0 ? "bg-[#f8f3ef] px-4 py-3 text-[#ad7f53]" : "border border-[#f8f3ef] px-4 py-3 text-white"}
                >
                  → {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white px-8 py-9 text-center text-[#ad7f53]">
            <h2 className="text-[28px] font-normal leading-tight">
              Begin your learning journey
            </h2>
            <p className="mt-6 text-[14px]">Secure your seat and receive the course roadmap.</p>
            <Link
              href={`/courses/${resolvedParams.id}/checkout`}
              className="mt-6 inline-flex bg-[#ad7f53] px-6 py-3 text-[13px] uppercase tracking-[0.12em] !text-white"
            >
              {course.ctaText || "Enroll Now"} ↗
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
