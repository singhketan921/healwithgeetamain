const healingModalities = Object.freeze([
  {
    id: "reiki-healing",
    title: "Reiki Healing",
    investment: 120,
    currency: "USD",
    durationMinutes: 75,
    description:
      "Reiki is an ancient energy healing modality that works at physical, mental and emotional levels by removing blocks from the physical and spiritual systems. It channels universal life force energy, supports balance and can be safely integrated with advised medical treatment.",
    benefits: [
      "Support for anxiety, emotional heaviness and stress patterns",
      "Energy balancing for mind, body and subtle energy flow",
      "Grounded aftercare guidance for integration after the session",
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
      "Sound healing meditation and mantric healing repair and re-energize physical health, neurology and psychology. Through mantra chants, Aum vibration and Tibetan singing bowls, the session helps remove chakra blockages, reduce stress and support deep relaxation.",
    benefits: [
      "Deep relaxation through sound vibration",
      "Energetic cleansing and emotional release",
      "A peaceful reset for stress, fatigue and inner restlessness",
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
      "Crystal Healing is an alternative energy healing technique where crystals are used for health and emotional concerns. Crystals can absorb negative energy, channel positive healing energy to the required place and support chakra balance through focused energy grids.",
    benefits: [
      "Chakra support with crystal grids and placements",
      "Aura cleansing and energetic recalibration",
      "Personal crystal guidance for continued self-care",
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
      "Chakra Healing restores balanced flow of Prana within the energy centers. The seven main chakras affect life, health and emotional balance, and healing them helps clear energetic imbalance while supporting the mind, body and spiritual system.",
    benefits: [
      "Assessment of blocked, overactive or underactive chakras",
      "Guided balancing for emotional and energetic harmony",
      "Simple practices to maintain balance after the session",
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
