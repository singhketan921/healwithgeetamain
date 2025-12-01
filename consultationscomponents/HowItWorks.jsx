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
    <section className="bg-[#F5F2EE] py-24 text-[#524E48]">
      <div className="max-w-6xl px-6 mx-auto space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
            Process
          </p>
          <h2 className="font-serif text-[2.6rem] leading-tight">
            How a consultation unfolds
          </h2>
          <p className="text-base text-[#524E48]/80 max-w-3xl">
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
              className="rounded-[30px] border border-[#EAE4DC] bg-white shadow-[0_18px_50px_rgba(82,78,72,0.08)] p-6 flex gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#A59079] text-white flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#524E48]/75">
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
