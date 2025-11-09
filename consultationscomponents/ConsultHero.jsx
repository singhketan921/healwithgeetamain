'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ACCENT = "#F2D7A2";
const OVERLAY_LIGHT = "#FCEFD6";
const OVERLAY_DARK = "#F3DBB0";

export default function ConsultHero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center min-h-screen px-6 sm:px-10 lg:px-20 bg-[#FFFBF4]">
      <div className="absolute inset-0 pointer-events-none">
        <span
          className="absolute -left-14 top-10 w-44 h-44 rounded-full blur-[120px] opacity-70"
          style={{ backgroundColor: OVERLAY_LIGHT }}
        />
        <span
          className="absolute right-4 bottom-6 w-60 h-60 rounded-full blur-[150px] opacity-60"
          style={{ backgroundColor: OVERLAY_DARK }}
        />
      </div>
      <div className="flex flex-col-reverse items-center justify-between w-full gap-10 mx-auto md:flex-row max-w-7xl md:gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[750px] text-left"
        >
          <h1 className="font-serif text-[2.4rem] sm:text-[4rem] md:text-[4.4rem] font-semibold leading-tight mb-6 text-[#1B1B1B]">
            Personalized
            <br />
            Consultation for Your{" "}
            <span className="text-[#C9A856] font-bold">Spiritual Journey</span>
          </h1>

          <p className="text-[#333333] text-[0.95rem] sm:text-[1.2rem] leading-relaxed mb-8 sm:mb-10">
            Receive tailored astrological and intuitive guidance designed to
            align you with your higher self.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="/consultations#consultationOfferings"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full border border-[#F2D7A2] text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#F2D7A2]/15"
            >
              Explore Services
            </Link>
            <Link
              href="/consultations#bookconsultation"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 shadow-[0_3px_6px_rgba(0,0,0,0.08)]"
              style={{ backgroundColor: ACCENT }}
            >
              Book Now
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden sm:block w-full md:w-[460px] lg:w-[500px] h-[380px] lg:h-[420px] rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden bg-white"
        >
          <Image
            src="/assets/images/consulthero.png"
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
