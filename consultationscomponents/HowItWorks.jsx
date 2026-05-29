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
    <section className="bg-[#f8f3ef] px-6 py-24 text-[#ad7f53] sm:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-16 max-w-[820px] text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-[22px] font-normal text-[#ad7f53]">
            <span className="text-[25px] leading-none">✽</span>
            Process
          </p>
          <h2 className="text-[48px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[70px] md:text-[84px]">
            How A Consultation
            <span className="mt-2 block font-serif text-[54px] italic leading-none sm:text-[76px] md:text-[88px]">
              Unfolds
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-[18px] leading-[1.45] text-[#ad7f53]/85">
            A four-part rhythm designed to make your experience feel editorial, intentional, and deeply human.
          </p>
        </div>

        <div className="grid border-l border-t border-[#ad7f53] md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex min-h-[300px] flex-col justify-center border-b border-r border-[#ad7f53] bg-[#f8f3ef] px-8 py-12 text-center transition-colors duration-300 hover:bg-[#ad7f53] sm:px-12 lg:min-h-[340px]"
            >
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center border border-[#ad7f53] text-[28px] text-[#ad7f53] transition-colors duration-300 group-hover:border-white group-hover:text-white">
                {step.icon}
              </div>
              <p className="mb-5 text-[14px] uppercase tracking-[0.28em] text-[#ad7f53]/80 transition-colors duration-300 group-hover:text-white/80">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[30px] font-normal leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[36px]">
                {step.title}
              </h3>
              <div className="mx-auto my-7 h-px w-full max-w-[420px] bg-[#ad7f53] transition-colors duration-300 group-hover:bg-white" />
              <p className="mx-auto max-w-[420px] text-[18px] leading-[1.35] text-[#ad7f53] transition-colors duration-300 group-hover:text-white/90">
                {step.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
