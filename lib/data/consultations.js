const consultationOfferings = Object.freeze([
  {
    id: "astro-alignment",
    title: "Astrology Alignment",
    price: 120,
    currency: "USD",
    durationMinutes: 90,
    description:
      "Deep dive into your natal chart with personalised remedies and planetary guidance for the upcoming year.",
    modalities: ["Vedic Charts", "Planetary Dashas", "Remedial Rituals"],
    image: "/assets/images/modality1.png",
  },
  {
    id: "soul-purpose",
    title: "Soul Purpose Reading",
    price: 95,
    currency: "USD",
    durationMinutes: 75,
    description:
      "Uncover karmic patterns, strengths, and life lessons to align your daily actions with your dharmic path.",
    modalities: ["Tarot Spread", "Numerology", "Oracle Guidance"],
    image: "/assets/images/modality4.png",
  },
  {
    id: "business-clarity",
    title: "Business Clarity Session",
    price: 140,
    currency: "USD",
    durationMinutes: 100,
    description:
      "Astro-guided strategy session for entrepreneurs seeking timings, partnerships, and brand alignment.",
    modalities: ["Electional Astrology", "Brand Archetypes", "Energy Mapping"],
    image: "/assets/images/modality7.png",
  },
  {
    id: "relationship-harmony",
    title: "Relationship Harmony",
    price: 110,
    currency: "USD",
    durationMinutes: 80,
    description:
      "Multi-layered synastry reading that harmonises personal, romantic, and family dynamics.",
    modalities: ["Synastry Charts", "Aura Reading", "Communication Coaching"],
    image: "/assets/images/modality2.png",
  },
  {
    id: "wellness-reset",
    title: "Wellness Reset",
    price: 130,
    currency: "USD",
    durationMinutes: 90,
    description:
      "Holistic mind-body audit with crystal, sound, and chakra balancing to revitalise your energy field.",
    modalities: ["Chakra Scan", "Sound Bath", "Crystal Grids"],
    image: "/assets/images/modality8.png",
  },
  {
    id: "ancestral-healing",
    title: "Ancestral Healing Intensive",
    price: 160,
    currency: "USD",
    durationMinutes: 120,
    description:
      "Guided ancestral lineage healing to release inherited patterns and reclaim your sovereign light.",
    modalities: ["Past Life Regression", "Timeline Clearing", "Light Codes"],
    image: "/assets/images/modality10.png",
  },
]);

const consultationFaq = Object.freeze([
  {
    id: "what-to-prepare",
    question: "What should I prepare before my consultation?",
    answer:
      "Bring your birth date, time, and location if available, plus any intentions or questions. A quiet, sacred space helps you receive the guidance deeply.",
  },
  {
    id: "remote-availability",
    question: "Do you offer remote sessions?",
    answer:
      "Yes. Consultations are available worldwide via Zoom using high-fidelity audio and video for ceremony-grade experiences.",
  },
  {
    id: "rescheduling",
    question: "Can I reschedule if something comes up?",
    answer:
      "Absolutely. Reschedule up to 24 hours before your session without any additional cost. Inside 24 hours a 30% reschedule fee applies.",
  },
  {
    id: "aftercare",
    question: "What happens after the consultation?",
    answer:
      "You receive a personalised integration email that includes ritual suggestions, recommended practices, and any astro calendar highlights.",
  },
]);

export function getAllConsultations() {
  return consultationOfferings;
}

export function getConsultationById(id) {
  return consultationOfferings.find((item) => item.id === id) ?? null;
}

export function getConsultationFaq() {
  return consultationFaq;
}
