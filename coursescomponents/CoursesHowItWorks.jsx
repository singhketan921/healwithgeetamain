'use client';

import { motion } from "framer-motion";
import { FaUserPlus, FaVideo, FaTasks, FaCertificate } from "react-icons/fa";

export default function CoursesHowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Enroll",
      text: "Choose your course and complete registration",
    },
    {
      icon: <FaVideo />,
      title: "Attend Live Class",
      text: "Join interactive sessions with expert guidance",
    },
    {
      icon: <FaTasks />,
      title: "Complete Assignments",
      text: "Practice with real-world applications",
    },
    {
      icon: <FaCertificate />,
      title: "Receive Certification",
      text: "Get recognized for your achievements",
    },
  ];

  return (
    <section className="bg-[#FAF9F4] py-20 px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Section Heading */}
        <h2 className="font-serif text-[2.3rem] sm:text-[2.8rem] font-semibold text-charcoal mb-3">
          How it Works
        </h2>
        <p className="text-base text-gray-700 sm:text-lg mb-14">
          Your journey to spiritual clarity in four simple steps
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-[#E3C875] text-white w-24 h-24 flex items-center justify-center rounded-full text-4xl mb-5 shadow-inner">
                {step.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-[200px]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
