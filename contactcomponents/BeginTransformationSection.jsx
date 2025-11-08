'use client';

import { motion } from "framer-motion";

export default function BeginTransformationSection() {
  return (
    <section className="bg-gradient-to-r from-[#A8B963] to-[#E8D48A]  text-white w-full py-20 px-6 sm:px-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h2 className="mb-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
          Begin Your Transformation Today
        </h2>

        {/* Subheading */}
        <p className="mb-10 text-lg sm:text-base text-white/90">
          Schedule a consultation or send a message to start your healing journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="/consultations"
            className="bg-[#a8b963] text-[#A8B963] font-serif font-medium px-8 py-3 rounded-full shadow hover:bg-[#2e2e2e] transition"
          >
            Book Consultation
          </a>

          <a
            href="/contact"
            className="px-8 py-3 font-medium text-white transition border border-white rounded-full hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
