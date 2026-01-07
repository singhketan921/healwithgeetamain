const consultationOfferings = Object.freeze([
  {
    id: "tarot-card-reading",
    title: "Tarot Card Reading",
    price: 120,
    currency: "USD",
    durationMinutes: 75,
    description:
      "Gain clarity on love, career, and life choices with a layered tarot spread that highlights your next best steps.",
    modalities: ["Tarot Spread", "Clarity Reading", "Guided Insight"],
    image: "/assets/images/modality1.png",
  },
  {
    id: "astrology",
    title: "Astrology",
    price: 150,
    currency: "USD",
    durationMinutes: 90,
    description:
      "Explore your natal chart, current transits, and timing windows to align decisions with cosmic rhythms.",
    modalities: ["Vedic Charts", "Planetary Dashas", "Transit Guidance"],
    image: "/assets/images/astrology.jpg",
  },
  {
    id: "numerology",
    title: "Numerology",
    price: 110,
    currency: "USD",
    durationMinutes: 60,
    description:
      "Decode your name and birth date to understand strengths, challenges, and the energy of your personal year.",
    modalities: ["Life Path", "Personal Year", "Name Vibration"],
    image: "/assets/images/modality2.png",
  },
  {
    id: "mobile-numerology",
    title: "Mobile Numerology",
    price: 95,
    currency: "USD",
    durationMinutes: 45,
    description:
      "Analyze your mobile number to refine communication, opportunity flow, and daily energetic balance.",
    modalities: ["Number Analysis", "Energy Balance", "Communication Flow"],
    image: "/assets/images/modality3.png",
  },
  {
    id: "kundali-vastu",
    title: "Kundali Vastu",
    price: 175,
    currency: "USD",
    durationMinutes: 90,
    description:
      "Blend Vastu remedies with kundali insights to harmonize your space and remove energetic blocks.",
    modalities: ["Vastu Review", "Space Remedies", "Chart Alignment"],
    image: "/assets/images/modality4.png",
  },
  {
    id: "face-reading",
    title: "Face Reading",
    price: 130,
    currency: "USD",
    durationMinutes: 60,
    description:
      "Interpret facial features and expressions to uncover personality patterns, strengths, and life themes.",
    modalities: ["Feature Mapping", "Expression Reading", "Life Themes"],
    image: "/assets/images/modality5.png",
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
