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
    image: "/assets/images/divine learning image.png",
    duration: "8 Hours",
    lessons: "16 Lessons",
    level: "Beginner",
    oldPrice: "₹4,999",
    price: "₹2,499",
  },
  {
    title: "Energy Healing Foundations",
    description: "Begin with Reiki self-healing, aura awareness, chakras, meditation and energy protection.",
    image: "/assets/images/stones.png",
    duration: "6 Hours",
    lessons: "12 Lessons",
    level: "Beginner",
    oldPrice: "₹3,999",
    price: "₹1,999",
  },
  {
    title: "Relationship & Harmony Healing",
    description: "Use healing practices to clear emotional blocks and support harmony in relationships.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.10 (1).jpeg",
    duration: "5 Hours",
    lessons: "10 Lessons",
    level: "All Levels",
    oldPrice: "₹3,499",
    price: "₹1,699",
  },
  {
    title: "Life Purpose & Soul Mission",
    description: "Explore tools that help you understand patterns, decisions and life direction.",
    image: "/assets/images/learnings.jpeg",
    duration: "7 Hours",
    lessons: "14 Lessons",
    level: "Beginner",
    oldPrice: "₹4,499",
    price: "₹2,299",
  },
  {
    title: "Anxiety & Stress Relief Program",
    description: "Practice meditation and healing techniques that calm the mind and balance energy.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.08 (1).jpeg",
    duration: "4 Hours",
    lessons: "9 Lessons",
    level: "All Levels",
    oldPrice: "₹2,999",
    price: "₹1,499",
  },
  {
    title: "Vastu Shastra for Positive Energy",
    description: "Understand how space energy and Vastu remedies support prosperity and harmony.",
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
