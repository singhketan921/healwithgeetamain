import FAQSection from "@/components/FAQSection";

const defaultFaqs = [
  {
    id: "experience",
    question: "Do I need prior experience?",
    answer:
      "No prior experience is required. Courses start with foundational concepts and build gradually.",
  },
  {
    id: "schedule",
    question: "How much time do I need to dedicate each week?",
    answer:
      "Most courses recommend 3-4 hours per week, including live circles and self-paced practices.",
  },
  {
    id: "support",
    question: "Is there mentorship or community support?",
    answer:
      "Yes. You'll have access to live Q&A calls, private community spaces, and guidance from Geeta throughout the journey.",
  },
];

export default function CoursesFAQ({ faqs = [] }) {
  const safeFaqs = faqs.length ? faqs : defaultFaqs;

  return <FAQSection id="contactfaq" faqs={safeFaqs} />;
}
