const healingModalities = Object.freeze([
  {
    id: "energy-harmony",
    title: "Energy Harmony Therapy",
    investment: 120,
    currency: "USD",
    durationMinutes: 75,
    description:
      "Restore balance and harmony through channelled energy alignment rooted in ancient Vedic wisdom.",
    benefits: [
      "Aura cleansing and recalibration",
      "Chakra balancing with crystal grids",
      "Personalised mantra and mudra sequence",
    ],
    image: "/assets/images/modality1.png",
  },
  {
    id: "chakra-illumination",
    title: "Chakra Illumination Journey",
    investment: 135,
    currency: "USD",
    durationMinutes: 90,
    description:
      "Awaken dormant prana with guided breathwork, sound healing, and intuitive channeling for each chakra.",
    benefits: [
      "Energetic diagnostics with pendulum scan",
      "Sound bath with crystal bowls",
      "Integration plan with herbal allies",
    ],
    image: "/assets/images/modality2.png",
  },
  {
    id: "ancestral-mending",
    title: "Ancestral Mending Ceremony",
    investment: 160,
    currency: "USD",
    durationMinutes: 110,
    description:
      "Release inherited stories and reclaim soul sovereignty through a guided ancestral lineage clearing.",
    benefits: [
      "Timeline regression to source imprint",
      "Cord-cutting and light infusion",
      "Ancestral altar activation guidance",
    ],
    image: "/assets/images/modality3.png",
  },
  {
    id: "sound-vibrational",
    title: "Sound & Vibrational Reset",
    investment: 115,
    currency: "USD",
    durationMinutes: 70,
    description:
      "Immerse in multi-instrument sound therapy featuring gongs, bowls, and voice to deeply rejuvenate the nervous system.",
    benefits: [
      "Brainwave entrainment",
      "Somatic unwinding techniques",
      "Post-session grounding ritual",
    ],
    image: "/assets/images/modality4.png",
  },
]);

export function getAllHealingModalities() {
  return healingModalities;
}

export function getHealingModalityById(id) {
  return healingModalities.find((item) => item.id === id) ?? null;
}
