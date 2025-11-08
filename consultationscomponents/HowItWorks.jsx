'use client';

import { motion } from "framer-motion";
import { FaListCheck, FaCalendarDays, FaVideo, FaUserCheck } from "react-icons/fa6";


export default function HowItWorks() {
  const steps = [
    {
      icon: <FaListCheck />,
      title: "Choose your consultation",
      desc: "Select the service that resonates with your needs",
    },
    {
        icon: <FaCalendarDays />,
        title: "Schedule your Session",
        desc: "Pick a convenient date and time that works for you",
    },
    {
      icon: <FaVideo />,
      title: "Join via Zoom or In Person",
      desc: "Connect from anywhere or visit our sacred space",
    },
    {
      icon: <FaUserCheck />,
      title: "Receive Personalized Guidance",
      desc: "Experience transformative insights tailored to you",
    },
  ];

  return (
    <section className="bg-[#FCFBF8] py-20 px-6 sm:px-10 text-center relative overflow-hidden">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-[2rem] sm:text-[2.6rem] md:text-[3rem] font-semibold text-charcoal mb-3">
          How it Works
        </h2>
        <p className="text-base text-gray-600 sm:text-lg">
          Your journey to spiritual clarity in four simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="relative max-w-6xl mx-auto">
        {/* Dotted line */}
        <div className="absolute top-[45px] left-0 right-0 hidden md:block border-t-2 border-dotted border-[#E4C77C]" />

        <div className="relative z-10 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#E4C77C] flex items-center justify-center text-white text-3xl mb-6 shadow-md">
                {step.icon}
              </div>
              <h3 className="mb-1 text-base font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
