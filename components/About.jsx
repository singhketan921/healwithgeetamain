"use client";

import Link from "next/link";

const aboutImg = "/assets/images/astrology.jpg";

export default function About() {
  return (
    <section className="bg-[#f7f5f2] py-20 text-[#6d655d]">
      <div className="relative mx-auto max-w-[1400px] px-6">
        <span className="pointer-events-none absolute left-6 top-6 h-2 w-2 rounded-full bg-[#dcd4cb]" />
        <span className="pointer-events-none absolute right-10 top-20 h-3 w-3 rounded-full border border-[#e7dfd6]" />
        <span className="pointer-events-none absolute left-12 bottom-10 h-1.5 w-1.5 rounded-full bg-[#e7dfd6]" />
        <div className="grid items-center gap-12 lg:grid-cols-[0.46fr_0.54fr]">
          <div>
            <h2 className="text-[30px] sm:text-[36px] font-semibold tracking-[0.14em] text-[#6a625a]">
              THE HEALING STANDARD
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.8] text-[#8a8075]">
              Every session is guided with care, grounded in Vedic wisdom, and
              designed to support your emotional, spiritual, and energetic well-being.
            </p>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.8] text-[#8a8075]">
              HealWithGeeta blends intuitive insight with practical rituals so each
              step feels gentle, clear, and aligned with your path.
            </p>

            <Link
              href="/courses#learnings"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#b2a08c] px-7 py-3 text-[12px] tracking-[0.16em] text-white uppercase"
            >
              Learn the Protocol
            </Link>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] border border-black/5 bg-[#f1ece6]">
              <img
                src={aboutImg}
                alt="Healing ritual"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
