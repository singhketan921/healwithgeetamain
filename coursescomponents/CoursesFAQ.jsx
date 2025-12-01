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
  const [openIndex, setOpenIndex] = useState(null);
  const safeFaqs = faqs.length ? faqs : defaultFaqs;

  return (
    <section className="bg-[#F5F2EE] w-full py-24 px-6 text-[#524E48]" id="contactfaq">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
              Guidance
            </p>
            <h2 className="font-serif text-[2.4rem] leading-tight">
              Frequently asked by our students
            </h2>
          </div>
          <p className="text-base text-[#524E48]/80">
            Enrollment teams answer every message with nuance—here are a few
            excerpts straight from our inbox.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {safeFaqs.map((faq, index) => (
            <div
              key={faq.id ?? index}
              className="border border-[#EAE4DC] rounded-[24px] overflow-hidden bg-white shadow-[0_6px_25px_rgba(82,78,72,0.06)]"
            >
              <button
                className="flex items-center justify-between w-full px-5 py-4 font-medium text-left uppercase tracking-[0.2em]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 text-sm text-[#524E48]/75 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
