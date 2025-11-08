'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HealingHero() {
  return (
    <section
      className="flex items-center justify-center min-h-screen px-6 sm:px-10 lg:px-20"
      style={{
        backgroundImage:
          "radial-gradient(closest-side at 50% 50%, #FFFFFF 0%, #F1F0E3 100%)",
      }}
    >
      <div className="flex flex-col-reverse items-center justify-between w-full gap-10 mx-auto md:flex-row max-w-7xl md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[650px] text-left"
        >
          <h1 className="font-serif text-[2.6rem] sm:text-[4.2rem] md:text-[4.4rem] font-semibold leading-tight mb-6 text-[#1B1B1B]">
            Experience Energy Alignment and{" "}
            <span className="text-[#A8B963] font-bold">Deep Healing</span>
          </h1>

          <p className="text-[#333333] text-[1rem] sm:text-[1.2rem] leading-relaxed mb-8 sm:mb-10">
            Restore balance and harmony through personalized energy therapies
            rooted in ancient Vedic wisdom.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="/healings#consultationOfferings"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full border border-[#A8B963] text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#A8B963]/10"
            >
              Explore Modalities
            </Link>
            <Link
              href="/healings#bookconsultation"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full bg-[#A8B963] text-white font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#99A855] shadow-[0_3px_6px_rgba(0,0,0,0.1)]"
            >
              Book a Healing Session
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden sm:block w-full md:w-[460px] lg:w-[500px] h-[380px] lg:h-[420px] bg-[#EDEDE9] rounded-[6px] shadow-inner"
        ><Image
        src="/assets/images/consultation.png"
        alt="Guide providing personalized consultation"
        width={500}
        height={420}
        className="object-cover w-full h-full"
        priority
      /></motion.div>
      </div>
    </section>
  );
}
