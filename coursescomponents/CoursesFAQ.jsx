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
    <section className="bg-[#EEECE9] w-full py-24 px-6 text-[#6b625a]" id="contactfaq">
      <div className="mx-auto max-w-[1200px] grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
              Guidance
            </p>
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
              Frequently asked by our students
            </h2>
          </div>
          <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
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
              className="border border-[#e7dfd6] rounded-[16px] overflow-hidden bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
            >
              <button
                className="flex items-center justify-between w-full px-5 py-4 text-left text-[14px] font-semibold tracking-wide"
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
                <div className="px-5 pb-4 text-[14px] text-[#7a736c] leading-[1.7]">
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
