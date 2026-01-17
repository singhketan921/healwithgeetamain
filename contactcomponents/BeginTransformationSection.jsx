'use client';

import Reveal from "@/components/Reveal";

export default function BeginTransformationSection() {
  return (
    <section className="relative overflow-hidden bg-[#F9F4E8] px-6 py-20">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white blur-[140px]" />
        <span className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#CDBFB4] blur-[160px]" />
      </div>

      <Reveal className="relative z-10 mx-auto max-w-[1200px] rounded-[16px] border border-[#e7dfd6] bg-white/85 px-8 py-12 text-center text-[#6b625a] shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
        <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
          Final note
        </p>
        <h2 className="mt-4 text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em] leading-tight">
          Begin your transformation today
        </h2>
        <p className="mt-4 text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
          Schedule a consultation or send a message to start your healing journey.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/consultations"
            className="rounded-[12px] bg-white px-8 py-3 text-[14px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
          >
            Book consultation
          </a>
          <a
            href="/contact"
            className="rounded-[12px] border border-[#8f857c] bg-transparent px-8 py-3 text-[14px] font-semibold text-[#6b625a] text-center"
          >
            Contact us
          </a>
        </div>
      </Reveal>
    </section>
  );
}