'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="flex items-center justify-center min-h-screen px-6 sm:px-10 lg:px-20"
      style={{
        // Matches the Figma "Diamond" gradient
        backgroundImage:
          "radial-gradient(closest-side at 50% 50%, #FFFFFF 0%, #F1F0E3 100%)",
      }}
    >
      <div className="flex flex-col-reverse items-center justify-between w-full gap-10 mx-auto md:flex-row max-w-7xl md:gap-20">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[750px] text-left"
        >
          {/* Heading */}
          <h1 className="font-serif text-[2.4rem] sm:text-[4rem] md:text-[4.4rem] font-semibold leading-tight mb-6 text-[#1B1B1B]">
            Personalized
            <br />
            Consultation for Your{" "}
            <span className="text-[#A8B963] font-bold">Spiritual Journey</span>
          </h1>

          {/* Description - smaller for mobile */}
          <p className="text-[#333333] text-[0.95rem] sm:text-[1.2rem] leading-relaxed mb-8 sm:mb-10">
            Receive tailored astrological and intuitive guidance designed to align you with your higher self.
          </p>

          {/* Buttons - side by side & smaller on mobile */}
          <div className="flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="/consultations#consultationOfferings"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full border border-[#A8B963] text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#A8B963]/10"
            >
              Explore Services
            </Link>
            <Link
              href="/consultations#bookconsultation"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full bg-[#A8B963] text-white font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#99A855] shadow-[0_3px_6px_rgba(0,0,0,0.1)]"
            >
              Book Now
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden sm:block w-full md:w-[460px] lg:w-[500px] h-[380px] lg:h-[420px] bg-[#EDEDE9] rounded-[6px] shadow-inner"
        ></motion.div>
      </div>
    </section>
  );
}

