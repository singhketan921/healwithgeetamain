const courses = Object.freeze([
  {
    id: "reiki-all-levels",
    title: "Reiki (All Levels)",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "From Level 1 to Master, learn attunements, symbols, and hands-on healing practice.",
    headline:
      "From Level 1 to Master, learn attunements, symbols, and hands-on healing practice.",
    modules: ["Level 1 Foundations", "Level 2 Symbols", "Master Teacher Path"],
    outcomes: [],
    image: "/assets/images/modality1.png",
  },
  {
    id: "numerology",
    title: "Numerology",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Decode life path, destiny, and name vibrations to guide personal and professional decisions.",
    headline:
      "Decode life path, destiny, and name vibrations to guide personal and professional decisions.",
    modules: ["Life Path", "Name Numbering", "Year Cycles"],
    outcomes: [],
    image: "/assets/images/modality2.png",
  },
  {
    id: "tarot-card-reading",
    title: "Tarot Card Reading",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Master major and minor arcana meanings, spreads, and ethical reading techniques.",
    headline:
      "Master major and minor arcana meanings, spreads, and ethical reading techniques.",
    modules: ["Arcana Meanings", "Spread Design", "Client Reading Practice"],
    outcomes: [],
    image: "/assets/images/modality3.png",
  },
  {
    id: "vaastu",
    title: "Vaastu",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Learn space energy principles and remedies to harmonize home and workplace environments.",
    headline:
      "Learn space energy principles and remedies to harmonize home and workplace environments.",
    modules: ["Energy Mapping", "Directional Remedies", "Practical Corrections"],
    outcomes: [],
    image: "/assets/images/modality4.png",
  },
  {
    id: "money-reiki",
    title: "Money Reiki",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Align money energy, clear blocks, and learn reiki techniques for abundance work.",
    headline:
      "Align money energy, clear blocks, and learn reiki techniques for abundance work.",
    modules: ["Abundance Healing", "Money Blocks", "Prosperity Rituals"],
    outcomes: [],
    image: "/assets/images/modality5.png",
  },
  {
    id: "face-reading",
    title: "Face Reading",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Interpret facial features to understand personality, strengths, and life patterns.",
    headline:
      "Interpret facial features to understand personality, strengths, and life patterns.",
    modules: ["Feature Analysis", "Expression Reading", "Life Themes"],
    outcomes: [],
    image: "/assets/images/modality6.png",
  },
  {
    id: "chakra-balancing",
    title: "Chakra Balancing",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Learn chakra diagnostics and balancing techniques for emotional and energetic harmony.",
    headline:
      "Learn chakra diagnostics and balancing techniques for emotional and energetic harmony.",
    modules: ["Chakra Basics", "Healing Techniques", "Balancing Practice"],
    outcomes: [],
    image: "/assets/images/modality7.png",
  },
  {
    id: "mobile-numerology",
    title: "Mobile Numerology",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Analyze mobile numbers for communication energy, balance, and opportunity flow.",
    headline:
      "Analyze mobile numbers for communication energy, balance, and opportunity flow.",
    modules: ["Number Analysis", "Energy Balance", "Practical Applications"],
    outcomes: [],
    image: "/assets/images/modality8.png",
  },
  {
    id: "peacock-remedies",
    title: "Peacock Remedies",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Study peacock-based remedies and rituals for protection, prosperity, and balance.",
    headline:
      "Study peacock-based remedies and rituals for protection, prosperity, and balance.",
    modules: ["Remedy Foundations", "Ritual Practice", "Case Guidance"],
    outcomes: [],
    image: "/assets/images/modality9.png",
  },
  {
    id: "visiting-card",
    title: "Visiting Card",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Create energized visiting cards for branding, magnetism, and client attraction.",
    headline:
      "Create energized visiting cards for branding, magnetism, and client attraction.",
    modules: ["Design Principles", "Energy Activation", "Usage Guidance"],
    outcomes: [],
    image: "/assets/images/modality10.png",
  },
  {
    id: "angel-healing",
    title: "Angel Healing",
    level: "Certificate",
    durationWeeks: null,
    format: "Certificate",
    price: null,
    currency: "USD",
    description:
      "Connect with angelic guidance and healing techniques for protection and upliftment.",
    headline:
      "Connect with angelic guidance and healing techniques for protection and upliftment.",
    modules: ["Angel Connection", "Healing Practice", "Protection Notes"],
    outcomes: [],
    image: "/assets/images/astrology.jpg",
  },
]);

const courseFaq = Object.freeze([
  {
    id: "certification",
    question: "Will I receive a certification?",
    answer:
      "Yes. After submitting your practicum portfolio and passing the integration interview you receive an accredited HealWithGeeta certification.",
  },
  {
    id: "recordings",
    question: "Are class recordings available?",
    answer:
      "Live sessions are recorded and available for replay within 48 hours. You retain lifetime access to the learning portal.",
  },
  {
    id: "support",
    question: "What support is provided between classes?",
    answer:
      "Weekly mentor office hours, a moderated community, and direct feedback on ritual design ensure you are fully supported.",
  },
  {
    id: "materials",
    question: "Do I need to purchase additional materials?",
    answer:
      "Course kits can be shipped globally and include workbooks, altar tools, and premium crystals. Digital-only participation is also available.",
  },
]);

export function getAllCourses() {
  return courses;
}

export function getCourseById(id) {
  return courses.find((item) => item.id === id) ?? null;
}

export function getCourseFaq() {
  return courseFaq;
}
