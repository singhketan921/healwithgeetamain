import {
  FeatureStrip,
  PublicHero,
  PublicPageShell,
  PublicSection,
  SubscribeBand,
  WhyLearnBand,
} from "@/components/PublicPageUI";
import {
  PiCompass,
  PiFlowerLotus,
  PiHandsPraying,
  PiHeart,
  PiSparkle,
  PiStarFour,
  PiUsersThree,
} from "react-icons/pi";

export const metadata = {
  title: "About Us | HealWithGeeta",
  description:
    "Meet Geeta Sharma and learn about the guidance, healing, and learning philosophy behind HealWithGeeta.",
};

const featureItems = [
  { title: "Occult Diagnosis", text: "Clarity for patterns, timing and real-life decisions", icon: PiCompass },
  { title: "Healing First", text: "Gentle work for mind, body, emotions and energy", icon: PiHandsPraying },
  { title: "Rooted Wisdom", text: "Reiki, tarot, numerology, Vastu and practical remedies", icon: PiFlowerLotus },
  { title: "Growth Pathways", text: "Courses, consultations and guided learning spaces", icon: PiUsersThree },
];

const values = [
  {
    title: "A safe space for truth",
    text: "FaithHealers began from an unwavering faith in the healing power of Reiki and has grown into a space where mind, body and soul are approached together.",
  },
  {
    title: "Guidance you can live with",
    text: "Geeta Sharma combines Reiki, tarot, numerology, astrology, face reading and Vastu so each client receives guidance that is practical, specific and rooted in spiritual understanding.",
  },
  {
    title: "Healing with responsibility",
    text: "Her focus is always to bring maximum benefit with simple remedies, compassionate teaching and a healing approach that supports the person's higher good.",
  },
];

const journey = [
  "Started with Reiki healing for family and friends before growing into a full healing centre.",
  "Trained countless students in Reiki, tarot, numerology and other occult sciences.",
  "Created healing experiences by combining different modalities according to the client's need.",
  "Continues to teach Reiki traditionally, with deep satisfaction when students make Reiki a way of life.",
];

export default function AboutPage() {
  return (
    <PublicPageShell className="about-page">
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="Meet the guide"
        title="A Sacred Space for Clarity, Healing & Inner Alignment"
        description="HealWithGeeta is built around compassionate guidance, practical spiritual learning, Reiki healing and the belief that every seeker can reconnect with their own wisdom."
        image="/assets/images/HeroImg.png"
      />

      <FeatureStrip items={featureItems} />

      <PublicSection className="about-story-section">
        <div className="about-story">
          <div className="about-story__image" aria-hidden="true">
            <img src="/assets/images/spiritual-guide-portrait.png" alt="" />
          </div>
          <div className="about-story__copy">
            <p className="about-page__eyebrow">About Geeta Sharma</p>
            <h2>Guidance that meets you where life feels unclear.</h2>
            <div className="about-page__rule" aria-hidden="true">
              <span />
              <img src="/assets/navicon.png" alt="" />
            </div>
            <p>
              Geeta Sharma is an acclaimed energy healer in Delhi and the founder of
              FaithHealers. She is a Reiki Grandmaster teacher, meditation expert,
              astrologer, numerologist and tarot card reader with more than 20 years
              of experience.
            </p>
            <p>
              Her journey with Reiki began when she learnt it to heal herself from
              health problems. After experiencing Reiki as life-changing, she chose to
              take it up professionally and later built FaithHealers as a destination
              for mind, body and soul.
            </p>
          </div>
        </div>
      </PublicSection>

      <PublicSection className="about-values-section">
        <div className="about-values">
          {values.map((item, index) => (
            <article key={item.title}>
              <span>{index + 1}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </PublicSection>

      <PublicSection className="about-journey-section">
        <div className="about-journey">
          <div>
            <p className="about-page__eyebrow">The work</p>
            <h2>Where healing becomes confidence.</h2>
            <p>
              FaithHealers has catered to clients across the globe and trained students
              in occult sciences. Geeta Sharma&apos;s work brings together Reiki healing,
              tarot, numerology, face reading, Vastu, counselling, chakra healing,
              meditation and astrology.
            </p>
          </div>
          <ul>
            {journey.map((item) => (
              <li key={item}>
                <PiStarFour aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </PublicSection>

      <WhyLearnBand
        title="Why People Come Here"
        items={[
          { title: "Clarity", text: "Understand what feels confusing, blocked or repeated", icon: PiSparkle },
          { title: "Healing", text: "Release emotional and energetic heaviness with care", icon: PiHeart },
          { title: "Learning", text: "Grow through structured spiritual tools and practice", icon: PiUsersThree },
          { title: "Alignment", text: "Make choices from inner steadiness and practical insight", icon: PiCompass },
        ]}
      />

      <SubscribeBand
        title="Stay close to the guidance"
        text="Receive spiritual notes, learning updates and gentle reminders for your journey."
      />
    </PublicPageShell>
  );
}
