const healingModalities = Object.freeze([
  {
    id: "reiki-healing",
    title: "Reiki Healing",
    investment: 120,
    currency: "USD",
    durationMinutes: 75,
    description:
      "A calm energy healing session that begins with brief counselling and then moves into Reiki support for the issue you are carrying. The intention is to clear energetic blocks, restore balance and help the mind, body and emotions feel steadier.",
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
      "A restorative vibration-based healing experience using sound frequencies to relax the nervous system, release stagnant energy and bring the body into a softer meditative state.",
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
      "A focused session using crystal energy, chakra awareness and intuitive placement to support energetic clearing, alignment and gentle emotional balance.",
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
      "A chakra-focused healing session that helps identify blocked or depleted energy centers and uses breath, visualization and energy work to bring the system back into balance.",
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
