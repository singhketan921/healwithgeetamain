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
    <section className="bg-[#F9F4E8] py-24 text-[#6b625a]">
      <div className="mx-auto max-w-[1200px] px-6 space-y-10">
        <div className="space-y-4">
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
            Process
          </p>
          <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
            How a consultation unfolds
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#7a736c] max-w-3xl leading-[1.7]">
            A four-part rhythm designed to make your experience feel editorial, intentional, and deeply human.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[16px] border border-[#e7dfd6] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] p-6 flex gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#6d655d] text-white flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[18px] sm:text-[20px] font-semibold">{step.title}</h3>
                <p className="text-[14px] leading-[1.7] text-[#7a736c]">
                  {step.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}