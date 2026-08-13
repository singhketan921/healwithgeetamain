const courses = Object.freeze([
  {
    id: "reiki-all-levels",
    title: "Reiki (All Levels)",
    level: "Certificate",
    durationWeeks: null,
    format: "Live certificate course",
    price: null,
    currency: "INR",
    description:
      "Reiki at Geeta Sharma's FaithHealers begins as an initiation into energy healing and grows into a complete path of self-healing, symbols, distance healing, chakra work, mastership and teaching. Students learn through live interactive classes, meditations, attunements and practical techniques that connect them with universal life force energy.",
    headline:
      "A complete Reiki path for self-healing, energy balance, symbols, attunements, and confident healing practice.",
    modules: [
      "Reiki history, principles, aura and chakra foundations",
      "Level 1 self-healing, full-body Reiki practice and energy hygiene",
      "Level 2 symbols for manifestation, distance healing and emotional balance",
      "Level 3 higher techniques including karmic, family and past-life healing",
      "Mastership attunement practice, client counselling and hands-on training",
    ],
    outcomes: [
      "Balance your own energy with a grounded daily Reiki practice",
      "Use Reiki symbols correctly for goals, situations and chakra activation",
      "Offer safe healing support to others with preparation and aftercare",
      "Understand how to counsel clients and hold a responsible healing space",
    ],
    courseCovers: [
      "Healing meditation, attunement, aura study and pranic ball practice",
      "Symbols, affirmations and techniques for different life situations",
      "Deep meditation, psychic surgery concepts and crystal grid practice",
      "Client listening, counselling basics and career guidance for Reiki healers",
    ],
    whoCanJoin: [
      "Beginners who want to start with self-healing",
      "Existing healers who want structured Reiki training",
      "Students who want to grow into professional healing or teaching work",
    ],
    image: "/assets/generated/old-site-inspired/course-reiki.png",
  },
  {
    id: "numerology",
    title: "Numerology",
    level: "Certificate",
    durationWeeks: null,
    format: "Live certificate course",
    price: null,
    currency: "INR",
    description:
      "Numerology classes with Geeta Sharma are live and interactive, covering the world of numbers in a simple and practical way. The course is designed so students become comfortable with numbers, their influence on life, deeper calculations, name correction, practical training and notes.",
    headline:
      "Decode numbers for life path clarity, name energy, relationships, business choices, and practical remedies.",
    modules: [
      "Personality number, destiny number and their impact",
      "Lo Shu Grid, arrows, missing numbers and repeated numbers",
      "Name analysis and name correction for people, businesses and projects",
      "Mobile, house, vehicle and address number correction",
      "Compatibility, career guidance, daily, monthly and yearly predictions",
    ],
    outcomes: [
      "Read core number patterns with confidence",
      "Identify helpful and challenging number combinations",
      "Suggest practical corrections for names, mobile numbers and addresses",
      "Use numerology as a grounded guidance tool for everyday decisions",
    ],
    courseCovers: [
      "Basic, advanced and combo numerology concepts",
      "Planet and number significators",
      "Marriage, relationship and business partner compatibility",
      "Medical numerology and traditional remedial guidance",
    ],
    image: "/assets/generated/old-site-inspired/course-numerology.png",
  },
  {
    id: "tarot-card-reading",
    title: "Tarot Card Reading",
    level: "Certificate",
    durationWeeks: null,
    format: "Live certificate course",
    price: null,
    currency: "INR",
    description:
      "The tarot reading course with Geeta Sharma helps students at a personal and professional level. It is taught through live interactive classes with practice, intuition-building, Major and Minor Arcana interpretation, question framing, client guidance and the confidence to read tarot accurately.",
    headline:
      "Build a confident tarot practice with card meanings, spreads, intuition training, and client reading skills.",
    modules: [
      "History of Tarot and how tarot cards work",
      "Major Arcana, Minor Arcana and Court Card interpretation",
      "Question framing for efficient and ethical readings",
      "Cleansing, charging and building a relationship with your deck",
      "Live practice readings, guidance cards, yes/no cards and special spreads",
    ],
    outcomes: [
      "Interpret cards across career, business, relationships and life situations",
      "Frame better questions and guide clients with clarity",
      "Use meditation to deepen intuition and card connection",
      "Read with confidence while maintaining boundaries and ethics",
    ],
    tarotSpreads: [
      "Three-card readings",
      "Celtic spread",
      "Relationship spread",
      "Astrology spread",
      "Card of the day and yearly guidance cards",
    ],
    handsOnTraining: [
      "Practical reading sessions",
      "Client communication practice",
      "Using more than one deck professionally",
      "Simple remedies and manifestation with cards",
    ],
    image: "/assets/generated/old-site-inspired/course-tarot.png",
  },
  {
    id: "vaastu",
    title: "Vaastu",
    level: "Certificate",
    durationWeeks: null,
    format: "Live certificate course",
    price: null,
    currency: "INR",
    description:
      "Vaastu is the ancient science of architecture that helps create positive energy and bring prosperity, abundance and harmony into a dwelling area. FaithHealers offers Vastu guidance rooted in practical remedies, Astro Vastu understanding and energy alignment for homes and workspaces.",
    headline:
      "Understand space energy and practical Vaastu remedies for homes, workplaces, prosperity and family harmony.",
    modules: [
      "Directional energy and space mapping foundations",
      "Identifying energetic blocks in home and workplace layouts",
      "Practical corrections using placement, intention and remedies",
      "Kundali and space alignment for deeper energetic understanding",
    ],
    outcomes: [
      "Read common space imbalances with more confidence",
      "Suggest simple corrections that are practical for modern homes",
      "Support clients seeking peace, prosperity and better flow",
      "Connect Vaastu principles with holistic energetic wellbeing",
    ],
    image: "/assets/generated/old-site-inspired/course-vaastu.png",
  },
  {
    id: "money-reiki",
    title: "Money Reiki",
    level: "Certificate",
    durationWeeks: null,
    format: "Live course",
    price: null,
    currency: "INR",
    description:
      "Money Reiki works on financial blockages, conditioning, past-life karmas and the energetic relationship with money. It is a deeper abundance practice that helps students understand money as energy, welcome prosperity, use switch words and remove blocks that stop the flow of money.",
    headline:
      "A focused abundance course for clearing money blocks and reprogramming prosperity energy.",
    modules: [
      "Money Reiki symbols and how to use them",
      "Affirmations to become a money magnet",
      "Switch words for money, prosperity and opportunity flow",
      "Meditations, visualization and law of attraction practice",
      "Root chakra activation, karmic blocks and abundance blocks",
    ],
    outcomes: [
      "Understand the energetic roots of recurring money stress",
      "Use simple daily practices to welcome abundance and prosperity",
      "Work with affirmations, switch words and visualization more effectively",
      "Create a calmer, more receptive relationship with money energy",
    ],
    courseCovers: [
      "Money Box, crystals and Yantra usage",
      "Mind programming and third-eye reprogramming techniques",
      "Fast money salt, prosperity ritual basics and energy cleansing",
    ],
    image: "/assets/generated/old-site-inspired/course-money-reiki.png",
  },
  {
    id: "face-reading",
    title: "Face Reading",
    level: "Certificate",
    durationWeeks: null,
    format: "Live course",
    price: null,
    currency: "INR",
    description:
      "Face Reading, or Physiognomy, studies facial features to understand character, personality, emotions, relationships and life patterns. Geeta Sharma teaches students how a face can reveal strengths, weaknesses, intentions, health indications and practical remedies through real-life examples.",
    headline:
      "Read facial features for personality analysis, relationship decisions, career insight and practical remedies.",
    modules: [
      "Different facial features and their impact",
      "Meaning of marks, lines and spots on the face",
      "Personality analysis and expression reading",
      "Career, relationship, family support and health-related indications",
      "Remedies to improve personality, future and relationship patterns",
    ],
    outcomes: [
      "Understand people with more precision and compassion",
      "Support better communication in personal and professional settings",
      "Spot risks before investing time, effort or money in someone",
      "Use face reading as a supportive tool with tarot, astrology or healing",
    ],
    whoCanJoin: [
      "Reiki healers, tarot readers and astrologers",
      "HR professionals, counsellors and coaches",
      "Anyone making relationship, marriage, hiring or partnership decisions",
    ],
    image: "/assets/generated/old-site-inspired/course-face-reading.png",
  },
  {
    id: "chakra-balancing",
    title: "Chakra Balancing",
    level: "Certificate",
    durationWeeks: null,
    format: "Live or recorded course",
    price: null,
    currency: "INR",
    description:
      "Chakra Balancing gives an in-depth understanding of the seven chakra system and how to heal and balance the chakras. Through live, interactive meditation classes, students learn how free-flowing Prana supports health, hidden potential, balance and spiritual growth.",
    headline:
      "A practical chakra healing and meditation program for balance, abundance, health and spiritual growth.",
    modules: [
      "In-depth understanding of the seven chakras",
      "Signs of blocked chakras and how to assess them",
      "Balancing techniques for each chakra",
      "Guided chakra meditation and daily healing practice",
    ],
    outcomes: [
      "Support emotional and energetic harmony",
      "Recognize common signs of chakra imbalance",
      "Use meditation to calm, clear and strengthen your energy",
      "Unlock hidden potential through consistent chakra practice",
    ],
    image: "/assets/generated/old-site-inspired/course-chakra-balancing.png",
  },
  {
    id: "mobile-numerology",
    title: "Mobile Numerology",
    level: "Certificate",
    durationWeeks: null,
    format: "Practical workshop",
    price: null,
    currency: "INR",
    description:
      "Mobile number correction is part of practical numerology guidance at FaithHealers. Students learn how numbers influence daily energy, communication, opportunity flow and choices, and how corrections can support smoother life patterns.",
    headline:
      "Learn how mobile numbers influence communication, attraction, opportunity and daily energetic rhythm.",
    modules: [
      "Mobile number vibration and number pattern basics",
      "Positive and challenging number combinations",
      "Correction methods for communication and opportunity flow",
      "Practical examples for personal and business numbers",
    ],
    outcomes: [
      "Assess mobile numbers with a clear framework",
      "Identify whether a number supports or drains communication energy",
      "Suggest practical corrections and remedies",
    ],
    image: "/assets/generated/old-site-inspired/course-mobile-numerology.png",
  },
  {
    id: "peacock-remedies",
    title: "Peacock Remedies",
    level: "Certificate",
    durationWeeks: null,
    format: "Remedy workshop",
    price: null,
    currency: "INR",
    description:
      "Spiritual remedies at FaithHealers are taught as practical tools for protection, positivity, prosperity and energetic cleansing. The focus is on choosing simple remedies with clarity, intention and respect for the situation being healed.",
    headline:
      "Learn simple peacock remedies and rituals for protection, balance, prosperity and energetic upliftment.",
    modules: [
      "Remedy foundations and intention setting",
      "Protection and prosperity rituals",
      "Energetic cleansing for personal and home use",
      "Case guidance and safe practice notes",
    ],
    outcomes: [
      "Choose remedies according to the issue",
      "Practice simple rituals with clarity and respect",
      "Support energetic protection and positivity in daily life",
    ],
    image: "/assets/generated/old-site-inspired/course-peacock-remedies.png",
  },
  {
    id: "visiting-card",
    title: "Visiting Card",
    level: "Certificate",
    durationWeeks: null,
    format: "Practical workshop",
    price: null,
    currency: "INR",
    description:
      "FaithHealers teaches how numerology, symbols, colors and energetic corrections can be applied to everyday professional tools. Visiting card guidance focuses on improving first impressions, client attraction and business energy through practical alignment.",
    headline:
      "Create energized visiting cards that support brand magnetism, professional clarity and client attraction.",
    modules: [
      "Design energy and first-impression principles",
      "Numbers, symbols and color considerations",
      "Energy activation and usage guidance",
      "Practical corrections for existing cards",
    ],
    outcomes: [
      "Review visiting cards through an energetic lens",
      "Create cards that feel aligned with the work being offered",
      "Use simple activation practices for professional magnetism",
    ],
    image: "/assets/generated/old-site-inspired/course-visiting-card.png",
  },
  {
    id: "angel-healing",
    title: "Angel Healing",
    level: "Certificate",
    durationWeeks: null,
    format: "Healing course",
    price: null,
    currency: "INR",
    description:
      "FaithHealers combines spiritual healing practices with meditation, protection and intuitive guidance to support emotional balance and inner reassurance. The work is gentle, grounded and intended for the higher good of the person receiving healing.",
    headline:
      "A gentle pathway for connecting with angelic guidance, protection, healing and inner reassurance.",
    modules: [
      "Angel connection and protection basics",
      "Meditation for guidance and intuitive listening",
      "Healing practice for emotional support",
      "Aftercare, grounding and responsible use",
    ],
    outcomes: [
      "Feel more supported in your spiritual practice",
      "Use angelic meditation for calm and clarity",
      "Offer gentle healing support with grounded boundaries",
    ],
    image: "/assets/generated/old-site-inspired/course-angel-healing.png",
  },
]);

const courseFaq = Object.freeze([
  {
    id: "certification",
    question: "Will I receive a certification?",
    answer:
      "FaithHealers courses are taught as certificate pathways with live practice, notes and completion guidance. Geeta Sharma focuses on helping students assimilate the essentials of the subject before they move ahead.",
  },
  {
    id: "recordings",
    question: "Are classes online or offline?",
    answer:
      "Many classes are conducted online through live, interactive Zoom sessions in Hindi and English, and selected programs may also be offered in person or through recorded lessons depending on the course.",
  },
  {
    id: "support",
    question: "Will I get practice support?",
    answer:
      "Yes. FaithHealers courses include practical training, meditation techniques, examples, notes and guided exercises so students can experience the energies and use the learning responsibly.",
  },
  {
    id: "materials",
    question: "Do I need special tools?",
    answer:
      "Some courses use tools such as tarot cards, Reiki symbols, wish boxes, crystals, mantras or chakra practices. Any required material or preparation is explained as part of the course guidance.",
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
