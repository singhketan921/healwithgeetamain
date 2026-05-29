'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQSection({
  faqs = [],
  id = "faq",
  className = "",
  eyebrow = "FAQ",
  title = "Frequently Asked",
  accentTitle = "Questions",
}) {
  const [openIndex, setOpenIndex] = useState(faqs.length ? 0 : null);

  if (!faqs.length) {
    return null;
  }

  return (
    <section
      id={id}
      className={`w-full bg-[#f8f3ef] px-6 py-24 text-[#ad7f53] sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-[920px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 flex items-center justify-center gap-2 text-[15px] font-medium text-[#ad7f53]">
            <span className="text-[18px] leading-none">✽</span>
            {eyebrow}
          </p>
          <h2 className="text-[42px] font-normal leading-[0.95] text-[#ad7f53] sm:text-[58px] md:text-[64px]">
            {title}
            <span className="mt-2 block font-serif text-[48px] italic leading-none sm:text-[64px] md:text-[70px]">
              {accentTitle}
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.id ?? `${faq.question}-${index}`} className="border-b border-[#c99b74]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left text-[#ad7f53]"
                >
                  <span className="text-[24px] font-normal leading-[1.2] sm:text-[30px]">
                    {faq.question}
                  </span>
                  <span
                    className={`mt-1 flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-[#ad7f53] text-[20px] leading-none transition-colors ${
                      isOpen ? "bg-[#ad7f53] text-white" : "bg-transparent text-[#ad7f53]"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[760px] pb-7 text-[15px] leading-[1.7] text-[#ad7f53] preserve-format sm:text-[16px]">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
