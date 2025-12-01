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
    <section className="bg-white py-24 text-[#524E48]">
      <div className="max-w-6xl px-6 mx-auto space-y-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
            Process
          </p>
          <h2 className="font-serif text-[2.4rem] leading-tight">
            How each course unfolds
          </h2>
          <p className="text-base text-[#524E48]/80">
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
              className="rounded-[30px] border border-[#EAE4DC] bg-[#F8F6F3] shadow-[0_18px_45px_rgba(82,78,72,0.08)] p-6 flex gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl text-[#A59079]">
                {step.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-xl mt-1">{step.title}</h3>
                <p className="text-sm text-[#524E48]/75 leading-relaxed mt-2">
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
