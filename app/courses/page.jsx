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

const featureItems = [
  { title: "Expert Guidance", text: "Learn from experienced healers and teachers", icon: PiUsersThree },
  { title: "Lifetime Access", text: "Access your courses anytime, anywhere", icon: PiMonitorPlay },
  { title: "Certificate of Completion", text: "Earn a certificate to celebrate your journey", icon: PiCertificate },
  { title: "Transform Your Life", text: "Practical tools for real and lasting change", icon: PiHeart },
];

const whyItems = [
  { title: "Authentic Teachings", text: "Rooted in ancient wisdom and spiritual practices" },
  { title: "Practical & Effective", text: "Simple techniques you can use in daily life" },
  { title: "Supportive Community", text: "Learn and grow with like-minded souls" },
  { title: "Safe & Sacred Space", text: "A nurturing space for your healing and growth" },
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
        description="Learn timeless wisdom and practical tools to elevate your mind, body and soul from the comfort of your space."
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
                title={display?.title || course.title}
                description={display?.description || course.headline || course.description}
                image={display?.image || course.image}
                price={display?.price || price.price}
                oldPrice={display?.oldPrice || price.oldPrice}
                meta={display ? [
                  { label: display.duration },
                  { label: display.lessons },
                  { label: display.level },
                ] : courseMeta(course)}
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
