'use client';

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaLaptop, FaHandHoldingHeart, FaChevronDown } from "react-icons/fa6";

const defaultFaqs = [
  {
    id: "prep",
    question: "How do I prepare for my session?",
    answer:
      "Prepare a calm space and note down your questions or intentions. Keep an open mind for guidance and reflection.",
  },
];

const expectations = [
  {
    icon: <FaClock className="text-[#C5A35C] text-xl" />,
    title: "Session Duration",
    desc: "Each consultation lasts approximately 60 minutes, giving us ample time for deep exploration.",
  },
  {
    icon: <FaLaptop className="text-[#C5A35C] text-xl" />,
    title: "Online & In Person",
    desc: "Choose between convenient Zoom sessions or visit our peaceful sanctuary in person.",
  },
  {
    icon: <FaHandHoldingHeart className="text-[#C5A35C] text-xl" />,
    title: "Preparation",
    desc: "Come with an open heart and specific questions. Birth details are helpful for astrological readings.",
  },
];

export default function ExpectAndFAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const safeFaqs = useMemo(() => (faqs.length ? faqs : defaultFaqs), [faqs]);

  return (
    <section className="py-20 bg-white px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[2rem] sm:text-[2.4rem] font-semibold text-charcoal mb-8">
            What to Expect
          </h2>

          <div className="flex flex-col gap-6">
            {expectations.map((item, i) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="bg-[#F3E6C7] rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[2rem] sm:text-[2.4rem] font-semibold text-charcoal mb-8">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-4">
            {safeFaqs.map((faq, index) => (
              <div
                key={faq.id ?? index}
                className="bg-[#F7F6F1] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium"
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
                  <div className="px-5 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
