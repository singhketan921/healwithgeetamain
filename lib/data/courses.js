const courses = Object.freeze([
  {
    id: "vedic-astrology-mastery",
    title: "Vedic Astrology Mastery",
    level: "Certificate",
    durationWeeks: 24,
    format: "Hybrid",
    price: 1200,
    currency: "USD",
    headline:
      "Comprehensive journey through grahas, houses, aspects, yogas, and predictive techniques with hands-on chart labs.",
    modules: [
      "Sacred foundations of Jyotish",
      "Chart interpretation deep dives",
      "Dashas, transits, and timing",
      "Case studies and practicum",
    ],
    outcomes: [
      "Read natal charts with confidence",
      "Design personalised remedial rituals",
      "Guide clients through life transitions",
    ],
    image: "/assets/images/modality1.png",
  },
  {
    id: "intuitive-tarot",
    title: "Intuitive Tarot & Oracle Circle",
    level: "Certificate",
    durationWeeks: 12,
    format: "Live Online",
    price: 640,
    currency: "USD",
    headline:
      "Activate your inner oracle with archetypal wisdom, spread design, and channelled storytelling.",
    modules: [
      "Archetypes & symbology",
      "Energetic hygiene",
      "Intuitive spread building",
      "Client facilitation labs",
    ],
    outcomes: [
      "Read for self and others ethically",
      "Hold confident ritual space",
      "Integrate tarot with other modalities",
    ],
    image: "/assets/images/modality2.png",
  },
  {
    id: "crystal-healing",
    title: "Crystal Healing Practitioner Path",
    level: "Certification",
    durationWeeks: 16,
    format: "In-Person",
    price: 980,
    currency: "USD",
    headline:
      "Master crystalline alchemy for chakra balancing, gridding, and soul reclamation ceremonies.",
    modules: [
      "Crystal kingdom science",
      "Chakra diagnostics",
      "Sacred gridding layouts",
      "Client session practicum",
    ],
    outcomes: [
      "Design crystal prescriptions",
      "Lead chakra restoration journeys",
      "Blend vibrational remedies confidently",
    ],
    image: "/assets/images/modality3.png",
  },
  {
    id: "sound-therapy-facilitator",
    title: "Sound Therapy Facilitator",
    level: "Certification",
    durationWeeks: 10,
    format: "Hybrid",
    price: 720,
    currency: "USD",
    headline:
      "Train with crystal bowls, gongs, and mantra to lead transformational sound journeys for groups and 1:1.",
    modules: [
      "Vibrational theory & instrumentation",
      "Somatic nervous system science",
      "Ceremony facilitation ethics",
      "Capstone practicum",
    ],
    outcomes: [
      "Facilitate sound baths confidently",
      "Design trauma-aware sessions",
      "Blend sound with breath & meditation",
    ],
    image: "/assets/images/modality4.png",
  },
  {
    id: "reiki-mastership",
    title: "Reiki Mastership Path",
    level: "Advanced",
    durationWeeks: 20,
    format: "Live Online",
    price: 890,
    currency: "USD",
    headline:
      "Move from practitioner to master teacher with lineage attunements, advanced symbol work, and client mentorship.",
    modules: [
      "Level III attunement clinic",
      "Symbol grids & distance healing",
      "Mentor practicum",
      "Teacher toolkit + business lab",
    ],
    outcomes: [
      "Offer master-level Reiki sessions",
      "Teach and attune new practitioners",
      "Launch or expand your healing studio",
    ],
    image: "/assets/images/modality5.png",
  },
  {
    id: "chakra-life-coach",
    title: "Chakra Life Coach Certification",
    level: "Certification",
    durationWeeks: 14,
    format: "Live Online",
    price: 760,
    currency: "USD",
    headline:
      "Coach clients through chakra psychology, somatic practices, and ritual prescriptions for embodied change.",
    modules: [
      "Chakra psychology & archetypes",
      "Somatic + breath interventions",
      "Client mapping & ritual design",
      "Supervised coaching labs",
    ],
    outcomes: [
      "Guide 1:1 chakra coaching journeys",
      "Blend coaching with energy work",
      "Deliver signature multi-week programs",
    ],
    image: "/assets/images/modality6.png",
  },
  {
    id: "astro-business-lab",
    title: "Astro Business Lab",
    level: "Immersion",
    durationWeeks: 8,
    format: "Cohort",
    price: 680,
    currency: "USD",
    headline:
      "Use astrocartography, electional astrology, and brand energetics to scale soulful businesses.",
    modules: [
      "Brand archetype diagnostics",
      "Electional launches & calendars",
      "Client pathway design",
      "Offer + pricing alignment",
    ],
    outcomes: [
      "Plan launches with cosmic timing",
      "Align offers to audience energetics",
      "Create astro-informed marketing",
    ],
    image: "/assets/images/modality7.png",
  },
  {
    id: "ayurvedic-wellness",
    title: "Ayurvedic Wellness Mentor",
    level: "Diploma",
    durationWeeks: 18,
    format: "Hybrid",
    price: 990,
    currency: "USD",
    headline:
      "Blend Ayurvedic nutrition, lifestyle rhythm, and herbal support to guide clients holistically.",
    modules: [
      "Dosha diagnostics",
      "Seasonal reset planning",
      "Herbal formulations",
      "Client coaching labs",
    ],
    outcomes: [
      "Design custom Ayurvedic protocols",
      "Coach clients through seasonal resets",
      "Integrate herbal allies safely",
    ],
    image: "/assets/images/modality8.png",
  },
  {
    id: "lunar-rituals",
    title: "Lunar Ritual Architect",
    level: "Immersion",
    durationWeeks: 6,
    format: "Live Online",
    price: 420,
    currency: "USD",
    headline:
      "Craft full and new moon ceremonies with astrological timing, altar magick, and community facilitation.",
    modules: [
      "Lunar archetypes & astrology",
      "Altar design & symbolism",
      "Circle facilitation",
      "Energetic boundaries",
    ],
    outcomes: [
      "Host transformational lunar circles",
      "Map personal lunar calendars",
      "Blend ritual with astrology",
    ],
    image: "/assets/images/modality9.png",
  },
  {
    id: "intuitive-business",
    title: "Intuitive Business Strategist",
    level: "Certification",
    durationWeeks: 16,
    format: "Cohort",
    price: 1050,
    currency: "USD",
    headline:
      "Fuse intuition with data to mentor purpose-led founders through launches and pivots.",
    modules: [
      "Intuitive decision frameworks",
      "Offer energetics",
      "Client journey mapping",
      "Leadership rituals",
    ],
    outcomes: [
      "Coach founders through aligned strategy",
      "Integrate intuition into planning",
      "Design ritual-backed launch plans",
    ],
    image: "/assets/images/astrology.jpg",
  },
  {
    id: "sacred-voice",
    title: "Sacred Voice Activation",
    level: "Workshop Series",
    durationWeeks: 5,
    format: "Live Online",
    price: 350,
    currency: "USD",
    headline:
      "Unlock the healing power of your voice with mantra, toning, and vocal channeling practices.",
    modules: [
      "Vocal toning foundations",
      "Mantra & bija sound",
      "Channeling & light language",
      "Performance & facilitation",
    ],
    outcomes: [
      "Lead vocal journeys",
      "Deepen personal voice practices",
      "Support clients with sound prescriptions",
    ],
    image: "/assets/images/modality10.png",
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
