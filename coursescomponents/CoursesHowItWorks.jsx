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
    <section className="bg-[#F9F4E8] py-24 text-[#6b625a]">
      <div className="mx-auto max-w-[1200px] px-6 space-y-10">
        <div className="space-y-3">
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
            Process
          </p>
          <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
            How each course unfolds
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
            A four-part rhythm that mirrors the cadence of a beautifully edited feature.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[16px] border border-[#e7dfd6] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] p-6 flex gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-[#6d655d] flex items-center justify-center text-2xl text-white">
                {step.icon}
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[18px] sm:text-[20px] font-semibold mt-1">{step.title}</h3>
                <p className="text-[14px] text-[#7a736c] leading-[1.7] mt-2">
                  {step.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}