'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center min-h-screen px-6 sm:px-10 lg:px-20 bg-[#FCFBF8]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute -left-10 top-12 w-44 h-44 rounded-full bg-[#F4E2B0] blur-[120px] opacity-70" />
        <span className="absolute right-0 bottom-6 w-60 h-60 rounded-full bg-[#E4C77C] blur-[140px] opacity-60" />
      </div>
      <div className="flex flex-col-reverse items-center justify-between w-full gap-10 mx-auto md:flex-row max-w-7xl md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[650px] text-left"
        >
          <h1 className="font-serif text-[2.6rem] sm:text-[4.2rem] md:text-[4.4rem] font-semibold leading-tight mb-6 text-[#1B1B1B]">
            Get in Touch with{" "}
            <span className="text-[#C9A856] font-bold">HealWithGeeta</span>
          </h1>

          <p className="text-[#333333] text-[1rem] sm:text-[1.2rem] leading-relaxed mb-8 sm:mb-10">
            We are here to guide you on your journey toward balance, healing,
            and transformation.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="https://www.google.com/maps/search/?api=1&query=HealWithGeeta"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full border border-[#F2D7A2] text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#F2D7A2]/15"
            >
              Get Directions
            </Link>
            <Link
              href="/consultations"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full bg-[#F2D7A2] text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#e5c486] shadow-[0_3px_6px_rgba(0,0,0,0.08)]"
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden sm:block w-full md:w-[460px] lg:w-[500px] h-[380px] lg:h-[420px] rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden bg-white"
        >
          <Image
            src="/assets/images/consultation.png"
            alt="Guide providing personalized consultation"
            width={500}
            height={420}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
