'use client';

import EditorialHero from "@/components/EditorialHero";

const CONSULT_MEDIA = "/assets/images/consulthero.png";

export default function ConsultHero() {
  return (
    <EditorialHero
      eyebrow="Consultations - Issue 07"
      subtitle="Astrology / Intuition / Ritual strategy"
      title="Personal guidance for your spiritual storyline"
      description="Every session blends natal astrology, intuitive counsel, and ritual prescriptions. Think of it as a private editorial review where your current chapter is edited with clarity and care."
      primary={{ label: "Book Now", href: "/consultations#bookconsultation" }}
      secondary={{ label: "View Services", href: "/consultations#consultationOfferings" }}
      media={CONSULT_MEDIA}
    />
  );
}
