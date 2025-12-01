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
    icon: <FaClock className="text-[#A59079] text-xl" />,
    title: "Session Duration",
    desc: "Each consultation lasts approximately 60 minutes, giving us ample time for deep exploration.",
  },
  {
    icon: <FaLaptop className="text-[#A59079] text-xl" />,
    title: "Online & In Person",
    desc: "Choose between convenient Zoom sessions or visit our peaceful sanctuary in person.",
  },
  {
    icon: <FaHandHoldingHeart className="text-[#A59079] text-xl" />,
    title: "Preparation",
    desc: "Come with an open heart and specific questions. Birth details are helpful for astrological readings.",
  },
];

export default function ExpectAndFAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const safeFaqs = useMemo(() => (faqs.length ? faqs : defaultFaqs), [faqs]);

  return (
    <section className="py-24 bg-white text-[#524E48] px-6">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0] mb-2">
              What to Expect
            </p>
            <h2 className="font-serif text-[2.4rem] leading-tight">
              Rituals inside the session
            </h2>
          </div>
          <div className="space-y-5">
            {expectations.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-[#EAE4DC] bg-[#F8F6F3] p-5 flex gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-serif text-xl">{item.title}</h4>
                  <p className="text-sm text-[#524E48]/75 leading-relaxed">
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0] mb-2">
              FAQ
            </p>
            <h2 className="font-serif text-[2.4rem] leading-tight">
              Questions from our readers
            </h2>
          </div>

          <div className="space-y-4">
            {safeFaqs.map((faq, index) => (
              <div
                key={faq.id ?? index}
                className="border border-[#EAE4DC] rounded-[22px] overflow-hidden bg-white shadow-[0_6px_25px_rgba(82,78,72,0.06)]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-sm font-semibold tracking-wide"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
