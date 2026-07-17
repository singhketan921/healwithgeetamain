const consultationOfferings = Object.freeze([
  {
    id: "tarot-card-reading",
    title: "Tarot Card Reading",
    price: 120,
    currency: "USD",
    durationMinutes: 75,
    description:
      "A tarot consultation helps you understand a life situation with more clarity. Depending on your need, the session can focus on one specific concern or explore multiple areas such as career, money, health, relationships and personal direction.",
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
      "An astrology consultation begins with your birth details and horoscope preparation. Your chart is then read to understand life patterns, timing, strengths, challenges, karmic influences and the direction that can support your next decisions.",
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
      "A numerology consultation uses your date of birth and name vibration to reveal the numbers influencing your life. It can also review mobile numbers, house numbers, car numbers or business names to support smoother energy and better choices.",
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
      "A focused number reading for your mobile number and communication energy. The session helps identify whether your number supports opportunity, visibility and harmony, and suggests corrections where needed.",
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
      "A space-alignment consultation that blends Vastu insight with kundali awareness to identify energetic blocks in your home or workplace and suggest practical remedies for peace, prosperity and stability.",
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
      "A face reading consultation helps you understand a person's nature, intentions, personality patterns and life themes through facial features, expressions, marks and lines. It can be taken standalone or combined with tarot or astrology.",
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
      "Bring your questions clearly. For astrology or numerology, keep your birth date, exact birth time, birthplace and relevant numbers ready if available.",
  },
  {
    id: "remote-availability",
    question: "Do you offer remote sessions?",
    answer:
      "Yes. Consultations can be held online through Zoom or another agreed video call platform, and selected sessions may also be available offline.",
  },
  {
    id: "scope",
    question: "Can I ask about someone else?",
    answer:
      "A session is focused on one person or one selected situation unless you book a full spectrum reading. For another person's situation, a separate session may be required.",
  },
  {
    id: "aftercare",
    question: "What happens after the consultation?",
    answer:
      "You receive practical guidance, suggested remedies where relevant, and clear next steps so the insight can be used responsibly in daily life.",
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
