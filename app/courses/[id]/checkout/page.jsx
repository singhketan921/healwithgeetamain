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

function extractLowestPrice(text, fallbackCurrency) {
  if (!text) {
    return null;
  }
  const normalized = text.toString();
  const isInr = /₹|inr|rs\.?/i.test(normalized) || /\/-/.test(normalized);
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

export default async function CourseCheckoutPage({ params }) {
  const resolvedParams = await params;
  const course = await fetchCourseById(resolvedParams.id);

  if (!course) {
    notFound();
  }

  const derivedPrice = extractLowestPrice(course.feesDetails, course.currency);
  const priceText = derivedPrice
    ? formatPrice(derivedPrice.amount, derivedPrice.currency ?? course.currency)
    : course.priceTiers?.length
      ? "Multiple price options"
      : course.price
        ? formatPrice(course.price, course.currency)
        : "Custom pricing";
  const originalPrice = course.priceTiers?.find((tier) =>
    /original|mrp/i.test(tier.label ?? "")
  );
  const originalPriceText = originalPrice
    ? formatPrice(originalPrice.amount, originalPrice.currency ?? course.currency)
    : null;
  const durationText =
    extractDurationText(course.certificationDetails) || "Custom duration";

  return (
    <div className="min-h-screen bg-[#d2c2ad] pt-24 pb-16 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <a
          href={`/courses/${course.id ?? course._id}`}
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.32em] text-[#8f857c]"
        >
          <span>&lt;-</span>
          Back to course
        </a>

        <div className="mt-6 rounded-[18px] bg-[#eee9e2] p-10 shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full border-4 border-[#d57b2d] text-[11px] uppercase tracking-[0.2em] text-[#d57b2d] flex items-center justify-center font-semibold bg-white shadow-[0_6px_14px_rgba(0,0,0,0.08)]">
                Sale
              </div>
              <div className="rounded-[12px] bg-white p-4 shadow-[0_10px_22px_rgba(0,0,0,0.1)]">
                <div className="relative overflow-hidden rounded-[10px]">
                  <img
                    src={course.image || "/assets/images/astrology.jpg"}
                    alt={course.title}
                    className="h-[220px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-[0_6px_12px_rgba(0,0,0,0.12)]">
                    <span className="text-[16px] text-[#6b625a]">🔍</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex rounded-[6px] bg-[#00a394] px-6 py-2 text-[14px] font-semibold text-white shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
              >
                Add to cart
              </button>
              <div className="mt-6 text-[14px] text-[#6b625a]">
                Category:{" "}
                <span className="ml-2 inline-flex rounded-[6px] bg-[#00a394] px-3 py-1 text-[13px] font-semibold text-white">
                  Courses
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-[28px] sm:text-[34px] font-semibold tracking-[0.08em] text-[#d47219]">
                {course.title?.toUpperCase() || "COURSE"}
              </h1>
              <div className="rounded-[6px] bg-[#00a394] px-5 py-3 text-white text-[16px] font-semibold flex items-center gap-4">
                {originalPriceText ? (
                  <span className="line-through text-white/70">{originalPriceText}</span>
                ) : null}
                <span>{priceText}</span>
              </div>

              <div className="rounded-[10px] border border-[#e0d6c9] bg-white p-6 text-[15px] leading-[1.7] text-[#5f5750] space-y-2">
                <p>
                  <span className="font-semibold text-[#2e2a26]">Duration:</span>{" "}
                  {durationText} (Live Classes)
                </p>
                <p>
                  <span className="font-semibold text-[#2e2a26]">Time:</span>{" "}
                  {course.durationDetails?.includes("Hour")
                    ? course.durationDetails
                    : "1.5 Hours in a day"}
                </p>
                <p>
                  <span className="font-semibold text-[#2e2a26]">Date:</span>{" "}
                  {course.durationDetails?.includes("202")
                    ? course.durationDetails
                    : "Schedule shared after enrollment"}
                </p>
                <p className="pt-3 font-semibold text-[#2e2a26]">
                  Note: Please check the shared materials after purchase. (Classes will be taken via Zoom only)
                </p>
                <a
                  href={`/courses/${course.id ?? course._id}`}
                  className="inline-flex text-[14px] font-semibold text-[#d47219]"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
