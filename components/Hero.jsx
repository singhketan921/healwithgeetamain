'use client';

import EditorialHero from "@/components/EditorialHero";

const HERO_MEDIA = "/assets/images/lady.png";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-sand)" }}
    >
      <div className="absolute inset-0 bg-white/20 mix-blend-lighten" />
      <div className="relative">
        <EditorialHero
          eyebrow="Studio Letter - Issue 01"
          subtitle="Astrology / Energy work / Botanical care"
          title="The editorial of ritual wellness"
          description="Slow mornings with incense, handwritten lunar notes, and bespoke remedies bottled beneath constellations. HealWithGeeta curates a living magazine of astrology, energy medicine, and handcrafted potions that invite women back to their luminous intuition."
          primary={{ label: "Book Session", href: "#contact" }}
          secondary={{ label: "View Offerings", href: "#services" }}
          media={HERO_MEDIA}
        />
      </div>
    </section>
  );
}
