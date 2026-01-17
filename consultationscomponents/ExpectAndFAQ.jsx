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
    icon: <FaClock className="text-[#6d655d] text-xl" />,
    title: "Session Duration",
    desc: "Each consultation lasts approximately 60 minutes, giving us ample time for deep exploration.",
  },
  {
    icon: <FaLaptop className="text-[#6d655d] text-xl" />,
    title: "Online & In Person",
    desc: "Choose between convenient Zoom sessions or visit our peaceful sanctuary in person.",
  },
  {
    icon: <FaHandHoldingHeart className="text-[#6d655d] text-xl" />,
    title: "Preparation",
    desc: "Come with an open heart and specific questions. Birth details are helpful for astrological readings.",
  },
];

export default function ExpectAndFAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const safeFaqs = useMemo(() => (faqs.length ? faqs : defaultFaqs), [faqs]);

  return (
    <section className="py-24 bg-[#F9F4E8] text-[#6b625a] px-6">
      <div className="mx-auto max-w-[1200px] grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c] mb-2">
              What to Expect
            </p>
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
              Rituals inside the session
            </h2>
          </div>
          <div className="space-y-5">
            {expectations.map((item) => (
              <article
                key={item.title}
                className="rounded-[16px] border border-[#e7dfd6] bg-[#fbf8f5] p-5 flex gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[18px] sm:text-[20px] font-semibold">{item.title}</h4>
                  <p className="text-[14px] text-[#7a736c] leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c] mb-2">
              FAQ
            </p>
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
              Questions from our readers
            </h2>
          </div>

          <div className="space-y-4">
            {safeFaqs.map((faq, index) => (
              <div
                key={faq.id ?? index}
                className="border border-[#e7dfd6] rounded-[16px] overflow-hidden bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-[14px] font-semibold tracking-wide"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}