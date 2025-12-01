'use client';

import EditorialHero from "@/components/EditorialHero";

const CONTACT_MEDIA = "/assets/images/contacthero.png";

export default function ContactHero() {
  return (
    <EditorialHero
      eyebrow="Correspondence"
      subtitle="Letters / Studio visits / Private events"
      title="Write to HealWithGeeta"
      description="Share the chapter you are ready to rewrite - our studio replies within 48 hours with ceremony details, schedules, and bespoke recommendations."
      primary={{ label: "Book Consultation", href: "/consultations" }}
      secondary={{
        label: "Visit Studio",
        href: "https://www.google.com/maps/search/?api=1&query=HealWithGeeta",
      }}
      media={CONTACT_MEDIA}
    />
  );
}
