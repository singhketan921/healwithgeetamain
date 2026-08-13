const consultationOfferings = Object.freeze([
  {
    id: "tarot-card-reading",
    title: "Tarot Card Reading",
    price: 120,
    currency: "USD",
    durationMinutes: 75,
    description:
      "Tarot reading with Geeta Sharma is used for insight into current situations and decision making. A session can help with career, business, family, health, education, travel, marriage and relationship issues, while also offering scope for course correction through clear guidance and remedies.",
    modalities: [
      "Single situation or full spectrum reading",
      "Career, relationship, money and personal life guidance",
      "Counselling and simple remedies where needed",
    ],
    image: "/assets/images/modality1.png",
  },
  {
    id: "astrology",
    title: "Astrology",
    price: 150,
    currency: "USD",
    durationMinutes: 90,
    description:
      "Astrology consultation with Geeta Sharma uses your date of birth, birthplace and exact birth time to prepare a birth chart and detailed life map. Her Lal Kitab approach studies your past, karmic influences, high points, challenges, nature and future direction with simple and effective remedies.",
    modalities: [
      "Birth chart and life-map analysis",
      "Past patterns, karmic influence and future timing",
      "Personal guidance for decisions, relationships and career",
    ],
    image: "/assets/images/astrology.jpg",
  },
  {
    id: "numerology",
    title: "Numerology",
    price: 110,
    currency: "USD",
    durationMinutes: 60,
    description:
      "Numerology calculations from Geeta Sharma go deeper than general personality descriptions. She tallies numbers with astrology and face reading to prepare a detailed blueprint for career, relationships, health, marriage, available options and important life decisions.",
    modalities: [
      "Life path, destiny and name vibration",
      "Mobile, house, vehicle and business number analysis",
      "Single situation or full spectrum life guidance",
    ],
    image: "/assets/images/modality2.png",
  },
  {
    id: "mobile-numerology",
    title: "Mobile Numerology",
    price: 95,
    currency: "USD",
    durationMinutes: 45,
    description:
      "Mobile numerology is a focused number consultation for everyday communication, opportunity flow and energetic support. Geeta Sharma studies number patterns and suggests practical corrections where the mobile number is not supporting the person well.",
    modalities: [
      "Mobile number vibration analysis",
      "Communication and opportunity flow",
      "Correction guidance and simple remedies",
    ],
    image: "/assets/images/modality3.png",
  },
  {
    id: "kundali-vastu",
    title: "Kundali Vastu",
    price: 175,
    currency: "USD",
    durationMinutes: 90,
    description:
      "Kundli Vastu, or Astro Vastu, combines horoscope insight with the energy of a home or workplace. Geeta Sharma uses this approach to identify Vastu-related blocks and suggest simple remedies that support peace, prosperity, health and stability.",
    modalities: [
      "Home or workplace energy review",
      "Kundali-linked Vastu guidance",
      "Simple space remedies and alignment notes",
    ],
    image: "/assets/images/modality4.png",
  },
  {
    id: "face-reading",
    title: "Face Reading",
    price: 130,
    currency: "USD",
    durationMinutes: 60,
    description:
      "Face Reading, or Samudrik Shastra, helps determine a person's nature, personality and intentions through facial features. It can support decisions around marriage, employers, colleagues, lending money, partnerships or any situation where understanding another person matters.",
    modalities: [
      "Personality and intention reading",
      "Relationship, career and family pattern insight",
      "Standalone or combined reading with other modalities",
    ],
    image: "/assets/images/modality5.png",
  },
]);

const consultationFaq = Object.freeze([
  {
    id: "what-to-prepare",
    question: "What should I prepare before my consultation?",
    answer:
      "Bring your questions and background clearly. For astrology, keep your date of birth, exact birth time and birthplace ready. For numerology, keep your date of birth, name and any relevant mobile, house, vehicle or business numbers ready.",
  },
  {
    id: "remote-availability",
    question: "Do you offer remote sessions?",
    answer:
      "Yes. You may visit the centre by appointment or choose an online session. Many consultations and classes at FaithHealers are conducted live and interactively through Zoom.",
  },
  {
    id: "scope",
    question: "Can I ask about someone else?",
    answer:
      "Yes, when the consultation requires understanding another person, such as in face reading, relationship matters or a specific situation. The session is still guided by the details and context you provide.",
  },
  {
    id: "aftercare",
    question: "What happens after the consultation?",
    answer:
      "You receive guidance for decision making and, where relevant, simple remedies drawn from tarot, astrology, numerology, Vastu, Reiki or other spiritual practices so the insight can be used in daily life.",
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
