import {
  CatalogToolbar,
  FeatureStrip,
  PublicCardGrid,
  PublicCatalogCard,
  PublicCatalogPanel,
  PublicHero,
  PublicPageShell,
  SubscribeBand,
  WhyLearnBand,
  derivePublicPrice,
  formatPublicDuration,
} from "@/components/PublicPageUI";
import { PiCertificate, PiHeart, PiMonitorPlay, PiUsersThree } from "react-icons/pi";
import { fetchCourses } from "@/lib/services/courseService";

export const dynamic = "force-dynamic";

const featureItems = [
  { title: "Guided Learning", text: "Courses are taught with theory, meditation, practical training and notes", icon: PiUsersThree },
  { title: "Live & Online Batches", text: "Many programs are live interactive Zoom classes in Hindi and English", icon: PiMonitorPlay },
  { title: "Certificate Pathways", text: "Students learn the essentials before moving deeper into practice", icon: PiCertificate },
  { title: "Practical Transformation", text: "Use Reiki, tarot, numerology and chakra practices in daily life", icon: PiHeart },
];

const whyItems = [
  { title: "Rooted Teachings", text: "Reiki is taught in its traditional way, not only as a commercial course" },
  { title: "Hands-on Practice", text: "Students experience energies, meditations and practical techniques during class" },
  { title: "Responsible Guidance", text: "Geeta Sharma focuses on the higher good and safe spiritual practice" },
  { title: "Spiritual Confidence", text: "The learning helps students make Reiki and occult science a way of life" },
];

const coursePresentation = [
  {
    title: "Spiritual Awakening Masterclass",
    description: "Learn how spiritual practices strengthen the connection between mind, body and soul.",
    image: "/assets/images/divine learning image.webp",
    duration: "8 Hours",
    lessons: "16 Lessons",
    level: "Beginner",
    oldPrice: "₹4,999",
    price: "₹2,499",
  },
  {
    title: "Energy Healing Foundations",
    description: "Begin with Reiki self-healing, aura awareness, chakras, meditation and energy protection.",
    image: "/assets/images/stones.webp",
    duration: "6 Hours",
    lessons: "12 Lessons",
    level: "Beginner",
    oldPrice: "₹3,999",
    price: "₹1,999",
  },
  {
    title: "Relationship & Harmony Healing",
    description: "Use healing practices to clear emotional blocks and support harmony in relationships.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.10 (1).webp",
    duration: "5 Hours",
    lessons: "10 Lessons",
    level: "All Levels",
    oldPrice: "₹3,499",
    price: "₹1,699",
  },
  {
    title: "Life Purpose & Soul Mission",
    description: "Explore tools that help you understand patterns, decisions and life direction.",
    image: "/assets/images/learnings.webp",
    duration: "7 Hours",
    lessons: "14 Lessons",
    level: "Beginner",
    oldPrice: "₹4,499",
    price: "₹2,299",
  },
  {
    title: "Anxiety & Stress Relief Program",
    description: "Practice meditation and healing techniques that calm the mind and balance energy.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.08 (1).webp",
    duration: "4 Hours",
    lessons: "9 Lessons",
    level: "All Levels",
    oldPrice: "₹2,999",
    price: "₹1,499",
  },
  {
    title: "Vastu Shastra for Positive Energy",
    description: "Understand how space energy and Vastu remedies support prosperity and harmony.",
    image: "/assets/images/astrology.webp",
    duration: "6 Hours",
    lessons: "11 Lessons",
    level: "Beginner",
    oldPrice: "₹3,999",
    price: "₹1,999",
  },
];

const courseImageById = {
  "reiki-all-levels": "/assets/generated/old-site-inspired/course-reiki.webp",
  reiki: "/assets/generated/old-site-inspired/course-reiki.webp",
  numerology: "/assets/generated/old-site-inspired/course-numerology.webp",
  "tarot-card-reading": "/assets/generated/old-site-inspired/course-tarot.webp",
  tarot: "/assets/generated/old-site-inspired/course-tarot.webp",
  vaastu: "/assets/generated/old-site-inspired/course-vaastu.webp",
  vastu: "/assets/generated/old-site-inspired/course-vaastu.webp",
  "money-reiki": "/assets/generated/old-site-inspired/course-money-reiki.webp",
  "switchword-mastery": "/assets/generated/old-site-inspired/course-switchword-mastery.webp",
  "face-reading": "/assets/generated/old-site-inspired/course-face-reading.webp",
  "chakra-balancing": "/assets/generated/old-site-inspired/course-chakra-balancing.webp",
  chakra: "/assets/generated/old-site-inspired/course-chakra-balancing.webp",
  "mobile-numerology": "/assets/generated/old-site-inspired/course-mobile-numerology.webp",
  "peacock-remedies": "/assets/generated/old-site-inspired/course-peacock-remedies.webp",
  "visiting-card": "/assets/generated/old-site-inspired/course-visiting-card.webp",
  "angel-healing": "/assets/generated/old-site-inspired/course-angel-healing.webp",
};

function getCourseImage(course, display) {
  const id = String(course?.id ?? course?._id ?? "").toLowerCase();
  const title = String(course?.title ?? display?.title ?? "").toLowerCase();

  if (course?.image) return course.image;
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

  return display?.image || courseImageById["reiki-all-levels"];
}

function courseMeta(course) {
  return [
    { label: formatPublicDuration(course.durationMonths, course.format, course.durationWeeks) },
    { label: `${course.modules?.length || 10} Lessons` },
    { label: course.level || "Beginner" },
  ];
}

export default async function CoursesPage() {
  const courses = await fetchCourses();

  return (
    <PublicPageShell className="courses-page">
      <PublicHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Courses" },
        ]}
        title="Courses for Growth, Healing & Transformation"
        description="Learn Reiki, tarot, numerology, chakra work and spiritual remedies through guided courses designed for real practice, inner growth and confident service."
        image="/assets/images/public-courses-hero-still-life.webp"
      />

      <FeatureStrip items={featureItems} />

      <PublicCatalogPanel>
        <CatalogToolbar
          filters={[
            "All Courses",
            "Spiritual Growth",
            "Healing",
            "Energy Work",
            "Mind & Wellness",
            "Relationships",
            "Vastu & Abundance",
          ]}
        />
        <PublicCardGrid>
          {(courses || []).slice(0, 6).map((course, index) => {
            const id = course.id ?? course._id;
            const price = derivePublicPrice(course);
            const display = coursePresentation[index];
            const image = getCourseImage(course, display);
            return (
              <PublicCatalogCard
                key={id}
                href={`/courses/${id}`}
                title={course.title || display?.title}
                description={course.headline || course.description || display?.description}
                image={image}
                price={price.price !== "On request" ? price.price : display?.price}
                oldPrice={price.oldPrice || display?.oldPrice}
                meta={courseMeta(course).map((item, metaIndex) => ({
                  label:
                    item.label === "Self paced" || item.label === "10 Lessons" || item.label === "Beginner"
                      ? [display?.duration, display?.lessons, display?.level][metaIndex] || item.label
                      : item.label,
                }))}
                cta="View Course"
              />
            );
          })}
        </PublicCardGrid>
      </PublicCatalogPanel>

      <WhyLearnBand title="Why Learn with Faith Healers?" items={whyItems} />
      <SubscribeBand />
    </PublicPageShell>
  );
}
