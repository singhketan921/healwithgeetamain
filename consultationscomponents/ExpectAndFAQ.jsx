'use client';

import { useMemo } from "react";
import FAQSection from "@/components/FAQSection";

const defaultFaqs = [
  {
    id: "prep",
    question: "How do I prepare for my session?",
    answer:
      "Prepare a calm space and note down your questions or intentions. Keep an open mind for guidance and reflection.",
  },
];

export default function ExpectAndFAQ({ faqs = [] }) {
  const safeFaqs = useMemo(() => (faqs.length ? faqs : defaultFaqs), [faqs]);

  return <FAQSection id="expectandfaqs" faqs={safeFaqs} />;
}
