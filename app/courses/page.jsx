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
  { title: "Guided Learning", text: "Study with structured practices, examples and clear next steps", icon: PiUsersThree },
  { title: "Live & Online Batches", text: "Learn through Zoom or selected in-person learning spaces", icon: PiMonitorPlay },
  { title: "Certificate Pathways", text: "Build confidence through practice, integration and completion guidance", icon: PiCertificate },
  { title: "Practical Transformation", text: "Use the tools for self-healing, guidance and daily life decisions", icon: PiHeart },
];

const whyItems = [
  { title: "Rooted Teachings", text: "Reiki, tarot, numerology and energy practices taught with context" },
  { title: "Hands-on Practice", text: "Examples, remedies and exercises that make the learning usable" },
  { title: "Responsible Guidance", text: "A grounded approach to intuition, healing and client support" },
  { title: "Spiritual Confidence", text: "Learn how to trust your tools without fear or dependency" },
];

const coursePresentation = [
  {
    title: "Spiritual Awakening Masterclass",
    description: "Discover your true self and awaken to a higher state of consciousness.",
    image: "/assets/images/divine learning image.png",
    duration: "8 Hours",
    lessons: "16 Lessons",
    level: "Beginner",
    oldPrice: "₹4,999",
    price: "₹2,499",
  },
  {
    title: "Energy Healing Foundations",
    description: "Learn powerful energy healing techniques to heal yourself and others.",
    image: "/assets/images/stones.png",
    duration: "6 Hours",
    lessons: "12 Lessons",
    level: "Beginner",
    oldPrice: "₹3,999",
    price: "₹1,999",
  },
  {
    title: "Relationship & Harmony Healing",
    description: "Build stronger relationships and create harmony in your personal life.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.10 (1).jpeg",
    duration: "5 Hours",
    lessons: "10 Lessons",
    level: "All Levels",
    oldPrice: "₹3,499",
    price: "₹1,699",
  },
  {
    title: "Life Purpose & Soul Mission",
    description: "Align with your soul's calling and live a purpose-driven life.",
    image: "/assets/images/learnings.jpeg",
    duration: "7 Hours",
    lessons: "14 Lessons",
    level: "Beginner",
    oldPrice: "₹4,499",
    price: "₹2,299",
  },
  {
    title: "Anxiety & Stress Relief Program",
    description: "Heal your mind, reduce stress and cultivate inner peace.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.08 (1).jpeg",
    duration: "4 Hours",
    lessons: "9 Lessons",
    level: "All Levels",
    oldPrice: "₹2,999",
    price: "₹1,499",
  },
  {
    title: "Vastu Shastra for Positive Energy",
    description: "Balance your space and attract prosperity, health and happiness.",
    image: "/assets/images/astrology.jpg",
    duration: "6 Hours",
    lessons: "11 Lessons",
    level: "Beginner",
    oldPrice: "₹3,999",
    price: "₹1,999",
  },
];

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
        image="/assets/images/public-courses-hero-still-life.png"
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
            return (
              <PublicCatalogCard
                key={id}
                href={`/courses/${id}`}
                title={course.title || display?.title}
                description={course.headline || course.description || display?.description}
                image={course.image || display?.image}
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
