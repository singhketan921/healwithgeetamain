'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

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
      "Most courses recommend 3–4 hours per week, including live circles and self-paced practices.",
  },
  {
    id: "support",
    question: "Is there mentorship or community support?",
    answer:
      "Yes. You’ll have access to live Q&A calls, private community spaces, and guidance from Geeta throughout the journey.",
  },
];

export default function CoursesFAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const safeFaqs = faqs.length ? faqs : defaultFaqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#E9E6D2] w-full py-20 px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Heading */}
        <h2 className="font-serif text-[2.3rem] sm:text-[2.8rem] font-semibold text-charcoal text-center mb-12">
          Have Questions?
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {safeFaqs.map((faq, i) => (
            <div
              key={faq.id ?? i}
              className="bg-[#A5B967] rounded-md overflow-hidden shadow-sm"
            >
              <button
                className="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white focus:outline-none"
                onClick={() => toggleFAQ(i)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === i
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="px-5 overflow-hidden text-sm text-gray-700 bg-white"
              >
                {openIndex === i && (
                  <div className="py-3">{faq.answer}</div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

