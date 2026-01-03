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
    <section
      className="hero-section w-full"
      style={{
      backgroundImage:
          "url('/assets/images/HeroSection Image faithhealers.png'), linear-gradient(90deg, #DBD8CD 0%, #BCB7AA 45%, #B6B1A3 70%, #9E968B 100%)",
        backgroundSize: "cover, cover",
        backgroundPosition: "left 48px, left center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <Marquee direction="left" />

      <div className="hero-main w-full">
        <div className="flex w-full items-center justify-end px-6 py-12 lg:px-12">
          <div className="w-full max-w-[420px] text-white lg:w-[33%] lg:max-w-none">
            <h1 className="text-[38px] sm:text-[46px] lg:text-[56px] font-semibold leading-[1.1]">
              Where Healing
              <br />
              Meets Alignment
            </h1>
            <p className="mt-3 max-w-[420px] text-[16px] sm:text-[18px] leading-[1.6] text-white/90">
              Astrology, healing, and guidance to align and uplift you.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button className="rounded-[12px] bg-white px-8 py-3.5 text-[15px] sm:text-[16px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
                Begin Transformation
              </button>
              <button className="rounded-[12px] border border-white/70 bg-transparent px-8 py-3.5 text-[15px] sm:text-[16px] font-semibold text-white">
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
