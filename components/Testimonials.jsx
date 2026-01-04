"use client";

import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="bg-[#EEECE9] py-16 text-[#6b625a]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-[26px] sm:text-[36px] md:text-[40px] font-semibold tracking-[0.12em] text-[#6b625a]">
            REAL TRANSFORMATION STORIES
          </h2>
          <p className="mx-auto mt-2 max-w-[720px] text-[14px] sm:text-[17px] leading-[1.6] text-[#7a736c]">
            Authentic Stories From Those Who Have Experienced True
            <br />
            Spiritual Transformation.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/consultations"
              className="min-w-[200px] sm:min-w-[230px] rounded-[12px] bg-white px-7 sm:px-9 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
            >
              Explore Consultations
            </Link>
            <Link
              href="/healings"
              className="min-w-[200px] sm:min-w-[230px] rounded-[12px] border border-[#8f857c] bg-transparent px-7 sm:px-9 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] text-center"
            >
              Explore Healings
            </Link>
          </div>
        </div>

        <div className="mt-8 -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:grid sm:gap-6 sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={`testimonial-placeholder-${idx}`}
              className="min-w-[240px] max-w-[260px] w-[70vw] aspect-[9/16] rounded-[24px] bg-[#d9d9d9] sm:w-full sm:max-w-[320px] sm:mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
