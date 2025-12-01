'use client';

import EditorialHero from "@/components/EditorialHero";

const HEALING_MEDIA = "/assets/images/healinghero.png";

export default function HealingHero() {
  return (
    <EditorialHero
      eyebrow="Healing Studio - Issue 12"
      subtitle="Reiki / Breathwork / Botanical therapy"
      title="An editorial ritual for nervous system repair"
      description="Bespoke sequencing of Reiki attunement, pranic breath choreography, sound baths, and botanical compress therapy. Sessions are composed like a magazine feature so every element feels intentional."
      primary={{ label: "Reserve Ritual", href: "/healings#bookconsultation" }}
      secondary={{ label: "Read Modalities", href: "/healings#consultationOfferings" }}
      media={HEALING_MEDIA}
    />
  );
}
