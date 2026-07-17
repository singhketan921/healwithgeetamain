import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PublicChecklist,
  PublicDetailLayout,
  PublicInfoCard,
  formatPublicDuration,
  formatPublicPrice,
} from "@/components/PublicPageUI";
import FAQSection from "@/components/FAQSection";
import { fetchCourseById } from "@/lib/services/courseService";

export const dynamic = "force-dynamic";

function extractLowestPrice(text, fallbackCurrency = "INR") {
  if (!text) return null;
  const normalized = text.toString();
  const isInr = /₹|inr|rs\.?/i.test(normalized) || /\/-/.test(normalized);
  const currency = isInr ? "INR" : fallbackCurrency;
  const matches = Array.from(normalized.matchAll(/(\d{1,3}(?:[,\s]\d{3})+|\d+)(?:\.\d+)?/g));
  const values = matches
    .map((match) => Number(match[0].replace(/[,\s]/g, "")))
    .filter((value) => Number.isFinite(value) && value > 0);
  return values.length ? { amount: Math.min(...values), currency } : null;
}

function extractDurationText(text) {
  if (!text) return "";
  const normalized = text.toString();
  const match = normalized.match(/([0-9]+(?:\.[0-9]+)?\s*(?:day|days|week|weeks|month|months|hour|hours|minute|minutes))/i);
  return match?.[1]?.trim() || "";
}

function listItems(items) {
  if (Array.isArray(items)) return items.filter(Boolean);
  if (typeof items === "string" && items.trim()) return items.split(/\n+/).map((item) => item.trim()).filter(Boolean);
  return [];
}

function ContentBlock({ title, items }) {
  const list = listItems(items);
  if (!list.length) return null;
  return (
    <PublicInfoCard title={title}>
      <PublicChecklist items={list} />
    </PublicInfoCard>
  );
}

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const course = await fetchCourseById(resolvedParams.id);

  if (!course) notFound();

  const derivedPrice = extractLowestPrice(course.feesDetails, course.currency);
  const priceText = derivedPrice
    ? formatPublicPrice(derivedPrice.amount, derivedPrice.currency)
    : course.priceTiers?.length
      ? `${course.priceTiers.length} price options`
      : course.price
        ? formatPublicPrice(course.price, course.currency || "INR")
        : "Custom pricing";
  const durationText =
    extractDurationText(course.certificationDetails) ||
    formatPublicDuration(course.durationMonths, course.format, course.durationWeeks);
  const detailItems = [
    priceText,
    durationText || "Custom duration",
    course.format || course.level || "Certificate course",
  ];

  return (
    <PublicDetailLayout
      backHref="/courses"
      backLabel="← Back to courses"
      title={course.title}
      description={course.summary || course.description}
      image={course.image || "/assets/images/astrology.jpg"}
      badges={[priceText, durationText || "Custom duration", course.level || "Certificate"]}
      aside={
        <div>
          <h2>Begin your learning journey</h2>
          <p>Secure your seat and receive the course roadmap, practice notes, material guidance and next steps for your batch.</p>
          <PublicChecklist items={detailItems} />
          <Link className="public-detail__side-cta" href={`/courses/${resolvedParams.id}/checkout`}>
            {course.ctaText || "Enroll Now"}
          </Link>
        </div>
      }
    >
      <ContentBlock title="What this course covers" items={course.courseCovers} />
      <ContentBlock title="Modules" items={course.modules} />
      <ContentBlock title="Outcomes" items={course.outcomes} />
      <ContentBlock title="Energy & intuition development" items={course.intuitionTraining} />
      <ContentBlock title="Real-world reading skills" items={course.realWorldSkills} />
      <ContentBlock title="Tarot spreads covered" items={course.tarotSpreads} />
      <ContentBlock title="Hands-on training" items={course.handsOnTraining} />
      <ContentBlock title="Certification" items={course.certificationDetails} />
      <ContentBlock title="Fees & enrollment" items={course.feesDetails} />
      <ContentBlock title="Who can join" items={course.whoCanJoin} />
      <ContentBlock title="Course format" items={course.formatDetails} />
      <ContentBlock title="Duration details" items={course.durationDetails} />
      <ContentBlock title="Why students love this course" items={course.whyStudentsLove} />
      {Array.isArray(course.faqs) && course.faqs.length ? <FAQSection faqs={course.faqs} /> : null}
      {!Array.isArray(course.faqs) && course.faqs?.trim() ? (
        <FAQSection faqs={[{ question: "Course FAQs", answer: course.faqs }]} />
      ) : null}
    </PublicDetailLayout>
  );
}
