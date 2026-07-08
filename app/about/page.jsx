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
  { title: "Intuitive Guidance", text: "Clarity for real life decisions", icon: PiCompass },
  { title: "Healing First", text: "Gentle work for mind, body and spirit", icon: PiHandsPraying },
  { title: "Rooted Wisdom", text: "Ancient practices with grounded care", icon: PiFlowerLotus },
  { title: "Growth Pathways", text: "Courses, sessions and mentorship", icon: PiUsersThree },
];

const values = [
  {
    title: "A safe space for truth",
    text: "Every session begins with listening. The work is held with privacy, patience, and respect for where you are in your journey.",
  },
  {
    title: "Guidance you can live with",
    text: "Spiritual insight is translated into practical next steps, so clarity does not remain abstract after the session ends.",
  },
  {
    title: "Healing with responsibility",
    text: "The intention is to support emotional balance, energetic alignment, and self-trust without fear, pressure, or dependency.",
  },
];

const journey = [
  "Helping seekers understand repeating emotional, relationship, and life patterns.",
  "Creating learning spaces for people who feel called to heal, guide, teach, and serve.",
  "Blending occult diagnosis, intuitive insight, and energy work into clear spiritual direction.",
  "Supporting students as they step into confidence, purpose, and self-led growth.",
];

export default function AboutPage() {
  return (
    <PublicPageShell className="about-page">
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="Meet the guide"
        title="A Sacred Space for Clarity, Healing & Inner Alignment"
        description="HealWithGeeta is built around compassionate guidance, practical spiritual learning, and the belief that every seeker can reconnect with their own wisdom."
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
              Geeta Sharma is an occult diagnosis and healing expert who helps seekers
              understand the deeper patterns behind their questions, emotions, relationships,
              and life direction.
            </p>
            <p>
              Her work brings together intuitive guidance, energy healing, spiritual analysis,
              and soulful teaching. The intention is simple: help people feel clear, steady,
              and connected to their own inner knowing.
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
              HealWithGeeta is not only about receiving answers. It is about learning how to
              trust your own energy, make aligned choices, and move forward with steadiness.
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
          { title: "Clarity", text: "Understand what feels confusing or repeated", icon: PiSparkle },
          { title: "Healing", text: "Release emotional heaviness with care", icon: PiHeart },
          { title: "Learning", text: "Grow through structured spiritual tools", icon: PiUsersThree },
          { title: "Alignment", text: "Make choices from inner steadiness", icon: PiCompass },
        ]}
      />

      <SubscribeBand
        title="Stay close to the guidance"
        text="Receive spiritual notes, learning updates and gentle reminders for your journey."
      />
    </PublicPageShell>
  );
}
