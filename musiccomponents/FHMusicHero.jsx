'use client';

import EditorialHero from "@/components/EditorialHero";

const MUSIC_MEDIA = "/assets/images/hero 2.png";

export default function FHMusicHero() {
  return (
    <EditorialHero
      eyebrow="FH Music - Issue 01"
      subtitle="Frequency / Ritual / Healing sound"
      title="Sacred soundscapes for deep alignment"
      description="Curated audio journeys designed to soften the nervous system, elevate focus, and anchor ritual work. Press play and enter the field."
      primary={{ label: "Listen Now", href: "#library" }}
      secondary={{ label: "Book a Session", href: "/consultations" }}
      media={MUSIC_MEDIA}
    />
  );
}
