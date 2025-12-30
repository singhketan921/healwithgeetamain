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
      className="w-full pt-[68px]"
      style={{
        background:
          "linear-gradient(90deg, #DBD8CD 27%, #BCB7AA 59%, #B6B1A3 73%, #9E968B 100%)",
      }}
    >
      <Marquee direction="left" />

      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-12 lg:grid-cols-[0.55fr_0.45fr]">
        <div className="relative">
          <img
            src="/assets/images/consulthero.png"
            alt="Spiritual guide with crystal"
            className="h-auto w-full max-w-[620px] object-contain"
            loading="lazy"
          />
        </div>

        <div className="text-white">
          <h1 className="text-[30px] sm:text-[36px] lg:text-[40px] font-semibold leading-[1.1]">
            Where Healing
            <br />
            Meets Alignment
          </h1>
          <p className="mt-3 max-w-[320px] text-[14px] leading-[1.6] text-white/90">
            Astrology, healing, and guidance to align and uplift you.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-[10px] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
              Begin Transformation
            </button>
            <button className="rounded-[10px] border border-white/70 bg-transparent px-6 py-2.5 text-[13px] font-semibold text-white">
              Explore More
            </button>
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
