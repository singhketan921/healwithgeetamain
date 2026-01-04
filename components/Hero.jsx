"use client";

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
      <Marquee direction="left" />

      <div className="hero-main w-full">
        <div className="flex w-full items-start justify-start px-5 pt-0 pb-12 -mt-70 sm:items-center sm:justify-end sm:px-6 sm:py-12 sm:mt-0 lg:px-12">
          <div className="w-full max-w-[520px] text-white sm:max-w-[420px] lg:w-[33%] lg:max-w-none">
            <h1 className="text-[32px] leading-[1.15] sm:text-[46px] lg:text-[56px] font-semibold">
              Where Healing
              <br />
              Meets Alignment
            </h1>
            <p className="mt-3 max-w-[360px] text-[14px] sm:text-[18px] leading-[1.6] text-white/90">
              Astrology, healing, and guidance to align and uplift you.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-6 sm:gap-4">
              <button className="rounded-[12px] bg-white px-6 py-3 text-[13px] sm:px-8 sm:py-3.5 sm:text-[16px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
                Begin Transformation
              </button>
              <button className="rounded-[12px] border border-white/70 bg-transparent px-6 py-3 text-[13px] sm:px-8 sm:py-3.5 sm:text-[16px] font-semibold text-white">
                Explore More
              </button>
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
