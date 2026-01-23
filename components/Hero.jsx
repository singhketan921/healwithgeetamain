"use client";

import Link from "next/link";

const MARQUEE_ITEMS = [
  "Astrology Reading",
  "Aura Healing",
  "Reiki Power",
  "Negative Release",
  "Cosmic Guidance",
  "Number Healing",
  "Divine Alignment",
  "Spiritual Awakening",
  "Chakra Balance",
  "Astro Guidance",
];

export default function Hero() {
  return (
    <section className="hero-section hero-bg w-full">
      <span className="hero-bg-slide hero-bg-slide-1" aria-hidden="true" />
      <span className="hero-bg-slide hero-bg-slide-2" aria-hidden="true" />
      <span className="hero-bg-slide hero-bg-slide-3" aria-hidden="true" />
      <span className="hero-bg-slide hero-bg-slide-4" aria-hidden="true" />
      <Marquee direction="left" />

      <div className="hero-main w-full">
        <div className="flex w-full items-start justify-start px-5 pt-6 pb-10 sm:items-center sm:justify-end sm:px-6 sm:py-12 lg:px-12">
          <div className="w-full max-w-[360px] text-[#6b625a] sm:max-w-[520px] lg:w-[40%] lg:max-w-none">
            <div
              className="mt-[-270px] mb-4 rounded-[22px] border border-white/60 px-5 py-2 backdrop-blur-xl shadow-[0_16px_38px_rgba(184,148,103,0.28)] sm:mt-0 sm:mb-0 sm:px-8 sm:py-5"
              style={{
                background:
                  "linear-gradient(140deg, rgba(255, 255, 255, 0.7) 0%, rgba(249, 244, 232, 0.65) 55%, rgba(231, 221, 205, 0.6) 100%)",
              }}
            >
              <h1 className="text-[26px] leading-[1.1] sm:text-[46px] lg:text-[56px] font-semibold hero-text-glow">
                Where Healing
                <br />
                Meets Alignment
              </h1>
              <p className="mt-2 max-w-[320px] text-[12px] sm:text-[18px] leading-[1.6] text-[#6b625a] hero-text-glow">
                Astrology, healing, and guidance to align and uplift you.
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-4">
                <Link
                  href="/transformation"
                  className="rounded-[12px] bg-white px-5 py-2 text-[12px] sm:px-8 sm:py-3.5 sm:text-[16px] font-semibold !text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
                >
                  Begin Transformation
                </Link>
                <Link
                  href="/courses"
                  className="rounded-[12px] border border-[#6b625a] bg-transparent px-5 py-2 text-[12px] sm:px-8 sm:py-3.5 sm:text-[16px] font-semibold text-[#6b625a]"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-8">
        <div className="mx-auto flex w-full max-w-[1200px] justify-center">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-8 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/70" />
          </div>
        </div>
      </div>

      <Marquee direction="right" />
    </section>
  );
}

function Marquee({ direction = "left" }) {
  return (
    <div className="marquee">
      <div className={["marquee-track", direction === "left" ? "marquee-left" : "marquee-right"].join(" ")}>
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <span key={`${direction}-${idx}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
