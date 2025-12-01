'use client';

import { motion } from "framer-motion";

export default function BeginTransformationSection() {
  return (
    <section className="relative overflow-hidden bg-[#EAE4DC] px-6 py-20">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white blur-[140px]" />
        <span className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#CDBFB4] blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-4xl rounded-[40px] border border-[#EAE4DC] bg-white/85 px-8 py-12 text-center text-[#524E48] shadow-[0_25px_80px_rgba(82,78,72,0.12)]"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
          Final note
        </p>
        <h2 className="mt-4 font-serif text-[2.8rem] leading-tight">
          Begin your transformation today
        </h2>
        <p className="mt-4 text-base text-[#524E48]/80">
          Schedule a consultation or send a message to start your healing journey.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/consultations"
            className="inline-flex items-center justify-center rounded-full border border-[#524E48] px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#524E48] transition hover:bg-[#524E48] hover:text-[#EAE4DC]"
          >
            Book consultation
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#B0AAA0] px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B0AAA0] transition hover:text-[#524E48] hover:border-[#524E48]"
          >
            Contact us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
