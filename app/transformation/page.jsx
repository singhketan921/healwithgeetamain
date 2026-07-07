import {
  FeatureStrip,
  PublicCardGrid,
  PublicCatalogCard,
  PublicHero,
  PublicInfoCard,
  PublicPageShell,
  PublicSection,
  SubscribeBand,
  WhyLearnBand,
} from "@/components/PublicPageUI";
import { PiFlowerLotus, PiHeart, PiSparkle, PiUsersThree } from "react-icons/pi";

const chapters = [
  {
    title: "Roots of Devotion",
    description: "A quiet inner calling began inside ordinary daily life and slowly became a spiritual path.",
    image: "/assets/images/lady.png",
  },
  {
    title: "First Awakenings",
    description: "Astrology, intuition and guidance opened the first doorway into deeper self-trust.",
    image: "/assets/images/astrology.jpg",
  },
  {
    title: "Sacred Study",
    description: "Dedicated learning transformed curiosity into disciplined practice and service.",
    image: "/assets/images/divine learning image.png",
  },
  {
    title: "Practitioner of Light",
    description: "The path became a living practice of guiding others toward clarity, healing and growth.",
    image: "/assets/images/spiritual guide img.jpg",
  },
];

export default function TransformationPage() {
  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Transformation" }]}
        title="A Journey of Growth, Healing & Spiritual Service"
        description="The story of devotion, study and courage becoming a path of guidance for seekers."
        image="/assets/images/hero image faith healers.png"
      />
      <FeatureStrip
        items={[
          { title: "Faith", text: "Trusting the quiet inner call", icon: PiHeart },
          { title: "Study", text: "Learning ancient systems with discipline", icon: PiFlowerLotus },
          { title: "Practice", text: "Turning insight into lived wisdom", icon: PiSparkle },
          { title: "Service", text: "Guiding seekers with compassion", icon: PiUsersThree },
        ]}
      />
      <PublicSection>
        <PublicInfoCard title="A Journey Women Can See Themselves In">
          <p>
            Transformation often begins in the middle of ordinary life. Through faith, learning and
            steady practice, a quiet calling can become a path of purpose. This page honors that
            unfolding and invites every seeker to trust their own beginning.
          </p>
        </PublicInfoCard>
        <PublicCardGrid>
          {chapters.map((chapter, index) => (
            <PublicCatalogCard
              key={chapter.title}
              title={chapter.title}
              description={chapter.description}
              image={chapter.image}
              price={`Chapter ${index + 1}`}
              label="Journey"
              cta="Reflect"
            />
          ))}
        </PublicCardGrid>
      </PublicSection>
      <WhyLearnBand
        title="The Transformation Path"
        items={[
          { title: "Consultation", text: "Map your present questions and concerns" },
          { title: "Spiritual Analysis", text: "Reveal patterns through sacred systems" },
          { title: "Healing", text: "Release blocks and restore clarity" },
          { title: "Life Alignment", text: "Integrate rituals and next steps" },
        ]}
      />
      <SubscribeBand title="Begin your transformation" text="Receive guidance notes and invitations to learn with Geeta." />
    </PublicPageShell>
  );
}
