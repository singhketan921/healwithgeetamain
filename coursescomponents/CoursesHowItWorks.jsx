'use client';

import { motion } from "framer-motion";
import { FaUserPlus, FaVideo, FaTasks, FaCertificate } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Enroll",
    text: "Choose your cohort and secure your seat.",
  },
  {
    icon: <FaVideo />,
    title: "Attend Live Class",
    text: "Weekly Zoom salons with Geeta and guest mentors.",
  },
  {
    icon: <FaTasks />,
    title: "Practice & Submit",
    text: "Assignments read like editorial briefs with real feedback.",
  },
  {
    icon: <FaCertificate />,
    title: "Get Certified",
    text: "Graduate with credentials recognized by our global community.",
  },
];

export default function CoursesHowItWorks() {
  return (
    <section className="bg-[#f8f3ef] px-6 py-12 text-[#ad7f53] sm:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-10 max-w-[820px] text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-[18px] font-normal text-[#ad7f53]">
            <span className="text-[25px] leading-none">✽</span>
            Process
          </p>
          <h2 className="text-[42px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[56px] md:text-[68px]">
            How Each Course
            <span className="mt-2 block font-serif text-[46px] italic leading-none sm:text-[62px] md:text-[72px]">
              Unfolds
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.45] text-[#ad7f53]/85">
            A four-part rhythm that mirrors the cadence of a beautifully edited feature.
          </p>
        </div>

        <div className="grid border-l border-t border-[#ad7f53] md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex min-h-[220px] flex-col justify-center border-b border-r border-[#ad7f53] bg-[#f8f3ef] px-6 py-8 text-center transition-colors duration-300 hover:bg-[#ad7f53] sm:px-10 lg:min-h-[250px]"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-[#ad7f53] text-[22px] text-[#ad7f53] transition-colors duration-300 group-hover:border-white group-hover:text-white">
                {step.icon}
              </div>
              <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#ad7f53]/80 transition-colors duration-300 group-hover:text-white/80">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[25px] font-normal leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[30px]">
                {step.title}
              </h3>
              <div className="mx-auto my-5 h-px w-full max-w-[420px] bg-[#ad7f53] transition-colors duration-300 group-hover:bg-white" />
              <p className="mx-auto max-w-[420px] text-[16px] leading-[1.35] text-[#ad7f53] transition-colors duration-300 group-hover:text-white/90">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
