import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PublicChecklist,
  PublicDetailLayout,
  PublicInfoCard,
  formatPublicPrice,
} from "@/components/PublicPageUI";
import { fetchCourseById } from "@/lib/services/courseService";

export const dynamic = "force-dynamic";

function extractLowestPrice(text, fallbackCurrency = "INR") {
  if (!text) return null;
  const normalized = text.toString();
  const currency = /₹|inr|rs\.?/i.test(normalized) ? "INR" : fallbackCurrency;
  const matches = Array.from(normalized.matchAll(/(\d{1,3}(?:[,\s]\d{3})+|\d+)(?:\.\d+)?/g));
  const values = matches
    .map((match) => Number(match[0].replace(/[,\s]/g, "")))
    .filter((value) => Number.isFinite(value) && value > 0);
  return values.length ? { amount: Math.min(...values), currency } : null;
}

export default async function CourseCheckoutPage({ params }) {
  const resolvedParams = await params;
  const course = await fetchCourseById(resolvedParams.id);

  if (!course) notFound();

  const derivedPrice = extractLowestPrice(course.feesDetails, course.currency);
  const priceText = derivedPrice
    ? formatPublicPrice(derivedPrice.amount, derivedPrice.currency)
    : course.price
      ? formatPublicPrice(course.price, course.currency || "INR")
      : "Custom pricing";

  return (
    <PublicDetailLayout
      backHref={`/courses/${course.id ?? course._id}`}
      backLabel="← Back to course"
      title={`Enroll in ${course.title}`}
      description="Confirm your learning path and connect with the team to complete enrollment securely."
      image={course.image || "/assets/images/astrology.jpg"}
      badges={[priceText, course.format || "Certificate", "Secure enrollment"]}
      aside={
        <div>
          <h2>Enrollment Summary</h2>
          <p>{course.title}</p>
          <PublicChecklist items={[priceText, course.durationDetails || "Schedule shared after enrollment", "Classes and materials shared after confirmation"]} />
          <Link className="public-detail__side-cta" href="/contact">Contact to Enroll</Link>
        </div>
      }
    >
      <PublicInfoCard title="What happens next">
        <PublicChecklist
          items={[
            "Submit your enrollment request through the contact page.",
            "The team confirms batch timing, payment details and materials.",
            "You receive joining instructions and preparation guidance.",
          ]}
        />
      </PublicInfoCard>
      <PublicInfoCard title="Course note">
        <p className="preserve-format">
          {course.feesDetails || course.description || "Final details are shared after enrollment confirmation."}
        </p>
      </PublicInfoCard>
    </PublicDetailLayout>
  );
}
