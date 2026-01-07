const healingModalities = Object.freeze([
  {
    id: "reiki-healing",
    title: "Reiki Healing",
    investment: 120,
    currency: "USD",
    durationMinutes: 75,
    description:
      "Gentle hands-on energy healing to restore balance, calm the nervous system, and support deep release.",
    benefits: [
      "Energy alignment and grounding",
      "Stress relief and emotional calm",
      "Post-session integration guidance",
    ],
    image: "/assets/images/modality1.png",
  },
  {
    id: "sound-healing",
    title: "Sound Healing",
    investment: 115,
    currency: "USD",
    durationMinutes: 70,
    description:
      "Immersive sound therapy using bowls, gongs, and voice to soothe the body and reset energetic flow.",
    benefits: [
      "Deep relaxation and nervous reset",
      "Energetic cleansing through vibration",
      "Grounding ritual to close the session",
    ],
    image: "/assets/images/modality4.png",
  },
  {
    id: "crystal-healing",
    title: "Crystal Healing",
    investment: 130,
    currency: "USD",
    durationMinutes: 80,
    description:
      "Targeted crystal placements to balance chakras, clear blocks, and restore energetic harmony.",
    benefits: [
      "Chakra balancing with crystal grids",
      "Aura cleansing and recalibration",
      "Personalized crystal guidance",
    ],
    image: "/assets/images/modality2.png",
  },
  {
    id: "chakra-healing",
    title: "Chakra Healing",
    investment: 135,
    currency: "USD",
    durationMinutes: 90,
    description:
      "Focus on aligning and clearing each chakra through breathwork, energy work, and intuitive guidance.",
    benefits: [
      "Energetic diagnostics and balancing",
      "Breathwork and guided visualization",
      "Integration plan for daily practice",
    ],
    image: "/assets/images/modality3.png",
  },
]);

export function getAllHealingModalities() {
  return healingModalities;
}

export function getHealingModalityById(id) {
  return healingModalities.find((item) => item.id === id) ?? null;
}
