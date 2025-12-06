'use client';

import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen" style={{ backgroundImage: "var(--gradient-sand)" }}>
      <div className="absolute inset-0 bg-white/20 mix-blend-lighten" />
      <div className="glow-layer">
        <span className="glow-spot glow-spot-sand -left-20 top-10" />
        <span className="glow-spot glow-spot-olive right-0 bottom-0" />
      </div>

      <div className="relative sm:hidden min-h-screen flex flex-col px-0">
        <header className="px-5 pt-6 pb-3 flex items-center justify-between text-[#4d3a27]">
          <span className="text-3xl font-serif italic text-[#1f1b1a] leading-none">isha</span>
          <div className="flex-1 flex justify-center">
            <button className="px-5 py-1 rounded-full border border-[#c9b79c] bg-[#f8f2e8] text-[0.75rem] uppercase tracking-[0.3em] shadow-inner">
              Miracle of Mind
            </button>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span className="h-9 w-9 rounded-full border border-[#c9b79c] flex items-center justify-center">
              {"\u2315"}
            </span>
            <span className="h-9 w-9 rounded-full border border-[#c9b79c] flex items-center justify-center">
              {"\u2630"}
            </span>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full h-full bg-[#f6eee0] border border-[#d5c5b3] shadow-[0_20px_60px_rgba(52,40,31,0.35)] overflow-hidden">
            <div className="absolute inset-x-8 -bottom-10 h-24 bg-gradient-to-t from-[#c1975d]/80 via-transparent to-transparent blur-3xl" />
            <HeroCarousel variant="card" className="rounded-none border-0 shadow-none" />
            <div className="pb-6 flex flex-col items-center gap-2 text-[#c48d45]">
              <div className="h-[2px] w-32 bg-[#c48d45]/60" />
              <div className="flex items-center gap-2 text-base tracking-[0.7em]">
                {"\u21E0"} {"\u2727"} {"\u2727"} {"\u21E2"}
              </div>
              <div className="h-[2px] w-32 bg-[#c48d45]/60" />
            </div>
          </div>
        </div>
        <div className="pb-6 flex justify-center">
          <div className="h-[2px] w-24 bg-white/70" />
        </div>
      </div>

      <div className="hidden sm:flex min-h-screen flex-col px-10">
        <div className="flex-1 grid lg:grid-cols-[0.3fr_0.7fr] gap-10 items-center mt-12">
          <div className="text-[#4d3a27] space-y-6">
            <p className="uppercase tracking-[0.45em] text-xs text-[#b0a18a]">Featured Ritual</p>
            <h1 className="font-serif text-[3.5rem] leading-tight">Mystic editorial experiences</h1>
            <p className="text-base leading-relaxed text-[#4d3a27]/80">
              Slow mornings, incense, lunar journals, and bespoke remedies. Step inside a living magazine of intuitive guidance.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em]">
              <span className="px-4 py-2 rounded-full border border-[#c9b79c]">Tarot</span>
              <span className="px-4 py-2 rounded-full border border-[#c9b79c]">Energy Work</span>
              <span className="px-4 py-2 rounded-full border border-[#c9b79c]">Botanical</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-6 text-xs uppercase tracking-[0.4em]">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-[#4d3a27] text-[#4d3a27] [@media(hover:hover)]:hover:bg-[#E59A5A] [@media(hover:hover)]:hover:border-[#E59A5A] [@media(hover:hover)]:hover:text-white transition"
              >
                Book Session
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-full border border-[#c9b79c] text-[#4d3a27] [@media(hover:hover)]:hover:border-[#E59A5A] [@media(hover:hover)]:hover:text-[#E59A5A]"
              >
                View Offerings
              </a>
            </div>
          </div>
          <div className="relative w-full bg-[#f6eee0] border border-[#d5c5b3] rounded-[36px] shadow-[0_25px_80px_rgba(52,40,31,0.35)] overflow-hidden">
            <div className="absolute inset-x-16 -bottom-14 h-48 bg-gradient-to-t from-[#c1975d]/70 via-transparent to-transparent blur-[120px]" />
            <HeroCarousel variant="card" className="rounded-none border-0 shadow-none h-[620px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
