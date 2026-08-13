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

const courseImageById = {
  "reiki-all-levels": "/assets/generated/old-site-inspired/course-reiki.png",
  reiki: "/assets/generated/old-site-inspired/course-reiki.png",
  numerology: "/assets/generated/old-site-inspired/course-numerology.png",
  "tarot-card-reading": "/assets/generated/old-site-inspired/course-tarot.png",
  tarot: "/assets/generated/old-site-inspired/course-tarot.png",
  vaastu: "/assets/generated/old-site-inspired/course-vaastu.png",
  vastu: "/assets/generated/old-site-inspired/course-vaastu.png",
  "money-reiki": "/assets/generated/old-site-inspired/course-money-reiki.png",
  "switchword-mastery": "/assets/generated/old-site-inspired/course-switchword-mastery.png",
  "face-reading": "/assets/generated/old-site-inspired/course-face-reading.png",
  "chakra-balancing": "/assets/generated/old-site-inspired/course-chakra-balancing.png",
  chakra: "/assets/generated/old-site-inspired/course-chakra-balancing.png",
  "mobile-numerology": "/assets/generated/old-site-inspired/course-mobile-numerology.png",
  "peacock-remedies": "/assets/generated/old-site-inspired/course-peacock-remedies.png",
  "visiting-card": "/assets/generated/old-site-inspired/course-visiting-card.png",
  "angel-healing": "/assets/generated/old-site-inspired/course-angel-healing.png",
};

function getCourseImage(course) {
  const id = String(course?.id ?? course?._id ?? "").toLowerCase();
  const title = String(course?.title ?? "").toLowerCase();

  if (courseImageById[id]) return courseImageById[id];
  if (title.includes("switchword")) return courseImageById["switchword-mastery"];
  if (title.includes("money reiki")) return courseImageById["money-reiki"];
  if (title.includes("mobile")) return courseImageById["mobile-numerology"];
  if (title.includes("numerology")) return courseImageById.numerology;
  if (title.includes("tarot")) return courseImageById["tarot-card-reading"];
  if (title.includes("vaastu") || title.includes("vastu")) return courseImageById.vaastu;
  if (title.includes("face")) return courseImageById["face-reading"];
  if (title.includes("chakra")) return courseImageById["chakra-balancing"];
  if (title.includes("peacock")) return courseImageById["peacock-remedies"];
  if (title.includes("visiting card")) return courseImageById["visiting-card"];
  if (title.includes("angel")) return courseImageById["angel-healing"];
  if (title.includes("reiki")) return courseImageById["reiki-all-levels"];

  return course?.image || courseImageById["reiki-all-levels"];
}

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
  const image = getCourseImage(course);

  return (
    <PublicDetailLayout
      backHref={`/courses/${course.id ?? course._id}`}
      backLabel="← Back to course"
      title={`Enroll in ${course.title}`}
      description="Confirm your learning path and connect with the team to complete enrollment securely."
      image={image}
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
