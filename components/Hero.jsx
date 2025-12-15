"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#d7d1c7]">
      {/* Background image */}
      <Image
        src="/assets/images/courseshero.png" // <-- put your screenshot-like hero image here
        alt="Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Slight wash like screenshot */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Left content */}
      <div className="relative z-10 min-h-screen">
        <div className="mx-auto flex min-h-screen w-full max-w-[1400px] px-6 sm:px-10">
          <div className="flex w-full max-w-[560px] flex-col justify-center py-16 sm:py-20">
            {/* Top pill */}
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-white px-5 py-2 text-[12px] tracking-[0.18em] text-[#6b6257] shadow-sm">
                FAITH HEALERS INDIA
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white uppercase font-sans font-extrabold leading-[0.98] tracking-[0.02em] text-[44px] sm:text-[62px] lg:text-[74px]">
              THE EFFICACY
              <br />
              ISN&apos;T IN THE
              <br />
              BOTTLE, IT&apos;S IN
              <br />
              THE DELIVERY
            </h1>

            {/* Body */}
            <p className="mt-8 max-w-[420px] text-white/90 text-[16px] leading-7">
              Every molecule, from R&amp;D to final packaging, is engineered and
              manufactured in-house under a single, uncompromised standard —
              the precision of our founder, an IFSCC recognized cosmetic
              scientist.
            </p>

            {/* CTA row */}
            <div className="mt-10 relative flex items-center">
              {/* Badge (overlapping) */}
              

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 pl-10 text-[14px] tracking-[0.12em] uppercase text-[#3b352f] shadow-md"
              >
                Begin Transformation
              </a>
            </div>
          </div>

          {/* Right side is just the image (kept empty intentionally) */}
          <div className="flex-1" />
        </div>
      </div>

      {/* Live chat bubble (bottom-right) */}
      
        
      
    </section>
  );
}
