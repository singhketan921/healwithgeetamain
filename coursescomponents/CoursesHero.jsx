'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#F2D7A2";
const OVERLAY_LIGHT = "#FCEFD6";
const OVERLAY_DARK = "#F3DBB0";

export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center min-h-screen px-6 sm:px-10 lg:px-20 bg-[#FFFBF4]">
      <div className="absolute inset-0 pointer-events-none">
        <span
          className="absolute -left-16 top-6 w-48 h-48 rounded-full blur-[130px] opacity-70"
          style={{ backgroundColor: OVERLAY_LIGHT }}
        />
        <span
          className="absolute right-0 bottom-0 w-64 h-64 rounded-full blur-[140px] opacity-60"
          style={{ backgroundColor: OVERLAY_DARK }}
        />
      </div>
      <div className="flex flex-col-reverse items-center justify-between w-full gap-10 mx-auto md:flex-row max-w-7xl md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[750px] text-left"
        >
          <h1 className="font-serif text-[2.4rem] sm:text-[4.2rem] md:text-[4.4rem] font-semibold leading-tight mb-6 text-[#1B1B1B]">
            Expand Your Wisdom With{" "}
            <span className="text-[#C9A856] font-bold">Our Courses</span>
          </h1>

          <p className="text-[#333333] text-[0.95rem] sm:text-[1.2rem] leading-relaxed mb-8 sm:mb-10">
            Immerse yourself in structured learning guided by Vedic principles
            and spiritual mastery.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="/courses#form"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full border text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#F2D7A2]/15"
              style={{ borderColor: ACCENT }}
            >
              Enroll Now
            </Link>
            <Link
              href="/courses#learnings"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 shadow-[0_3px_6px_rgba(0,0,0,0.08)]"
              style={{ backgroundColor: ACCENT }}
            >
              Explore Courses
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
            src="/assets/images/coursesimg.png"
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
