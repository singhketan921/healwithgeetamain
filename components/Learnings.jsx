"use client";

import Link from "next/link";

export default function Learnings() {
  return (
    <section className="bg-white text-[#5c554c]">
      <div className="relative mx-auto max-w-[1500px] px-6 pt-16 pb-16">
        <span className="pointer-events-none absolute left-8 top-10 h-2 w-2 rounded-full bg-[#e2dbd2]" />
        <span className="pointer-events-none absolute right-12 top-24 h-3 w-3 rounded-full border border-[#eee7df]" />
        {/* ===== TOP CENTERED HEADER ===== */}
        <div className="text-center">
          <h2 className="text-[30px] sm:text-[40px] font-semibold tracking-[0.16em] text-[#6a625a]">
            THE HEALING APPROACH
          </h2>

          <p className="mx-auto mt-4 max-w-[820px] text-[18px] font-semibold text-[#8a8176]">
            Rooted in Vedic insight, guided with care.
          </p>

          <p className="mx-auto mt-2 max-w-[820px] text-[16px] sm:text-[17px] leading-[1.7] text-[#948c83]">
            Each learning blends astrology, energy work, and practical rituals to help you heal, align,
            and move forward with clarity.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses#learnings"
              className="inline-flex items-center justify-center rounded-full bg-[#ffffff] border-[#8a8176]/40 px-8 py-3 text-[12px] tracking-[0.18em] text-[#ffffff] shadow-[0_10px_26px_rgba(0,0,0,0.18)] uppercase"
            >
              Explore Learnings
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-full bg-[#ffffff] border border-[#8a8176]/40 px-8 py-3 text-[12px] tracking-[0.18em] text-[#8a8176] uppercase"
            >
              View Courses
            </Link>
          </div>
        </div>

        {/* ===== MAIN LAYOUT (LEFT CONTENT + ONE TALL RIGHT IMAGE) ===== */}
        <div className="relative mt-16 grid gap-10 lg:grid-cols-[0.48fr_0.52fr] items-start">
          {/* LEFT COLUMN */}
          <div className="relative">
            {/* PROTOCOL pill */}
            <div className="inline-flex items-center rounded-full bg-[#8a8176] px-5 py-2 text-[12px] tracking-[0.16em] text-white">
              PROTOCOL
            </div>

            {/* Integrity card */}
            <div className="mt-14 flex justify-center lg:justify-start">
              <div className="w-full max-w-[520px]">
                <InfoCard
                  title="Guidance You Can Trust"
                  desc="Every lesson is grounded in Vedic principles and years of practice."
                />
              </div>
            </div>

            {/* HEALING PATHWAYS heading */}
            <div className="mt-20">
              <h3 className="text-center lg:text-left text-[42px] sm:text-[52px] tracking-[0.08em] text-[#6a625a] leading-[1.05]">
                <span className="font-semibold">HEALING</span>{" "}
                <span className="italic font-light">PATHWAYS</span>
              </h3>
            </div>
          </div>

          {/* RIGHT COLUMN (ONE SINGLE TALL IMAGE PANEL) */}
          <div className="relative">
            <ImagePanel className="min-h-[520px] lg:min-h-[610px]">
              {/* Potency card (top-left on image) */}
              <div className="absolute left-[44px] top-[62px] w-[520px] max-w-[78%]">
                <InfoCard
                  title="Astrology for Direction"
                  desc="Understand your chart and cycles to choose the right next step."
                />
              </div>

              {/* Evidence card (middle-right on image) */}
              <div className="absolute right-[44px] top-[300px] w-[520px] max-w-[78%]">
                <InfoCard
                  title="Practices for Daily Balance"
                  desc="Simple, repeatable rituals to protect your energy and restore peace."
                />
              </div>
            </ImagePanel>
          </div>

          {/* ===== Transformation card (overlaps across left + right) ===== */}
          <div className="pointer-events-none absolute left-1/2 top-[500px] sm:top-[540px] -translate-x-1/2 z-20 w-[720px] max-w-[92%]">
            <div className="pointer-events-auto">
              <InfoCard
                title="Transformation is Supported"
                desc="Ongoing tools, reflections, and check-ins help you integrate the change."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- UI blocks ---------------- */

function ImagePanel({ className = "", children }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[34px] border border-black/5 bg-[#f1ece6]",
        className,
      ].join(" ")}
    >
      <img
        src="/assets/images/astrology.jpg"
        alt="Science texture"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-white/15" />
      {children}
    </div>
  );
}

function InfoCard({ title, desc }) {
  return (
    <div className="rounded-[18px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] px-9 py-8">
      <div className="mx-auto mb-5 flex justify-center text-[#c1ab96]">
        <MoleculeIcon />
      </div>

      <h4 className="text-center text-[22px] sm:text-[24px] font-medium text-[#5c554c]">
        {title}
      </h4>

      <p className="mx-auto mt-3 max-w-[520px] text-center text-[13px] sm:text-[14px] leading-[1.6] text-[#948c83]">
        {desc}
      </p>
    </div>
  );
}

function MoleculeIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="44" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="48" cy="44" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="46" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M22 22 L39 18" stroke="currentColor" strokeWidth="2" />
      <path d="M45 21 L47 38" stroke="currentColor" strokeWidth="2" />
      <path d="M43 44 L27 46" stroke="currentColor" strokeWidth="2" />
      <path d="M20 41 L18 24" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
