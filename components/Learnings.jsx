"use client";

export default function Learnings() {
  return (
    <section className="bg-[#f5f2ef] text-[#6b625a]">
      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-12">
        <div className="text-center">
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-semibold tracking-[0.12em] text-[#6b625a]">
            THE HEALING APPROACH
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-[13px] sm:text-[14px] leading-[1.6] text-[#7a736c]">
            Each Learning Blends Astrology, Energy Work, And Practical Rituals To Help You Heal,
            Align, And Move Forward With Clarity.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button className="min-w-[200px] rounded-[10px] bg-white px-8 py-2.5 text-[13px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
              Explore Healings
            </button>
            <button className="min-w-[200px] rounded-[10px] border border-[#8f857c] bg-transparent px-8 py-2.5 text-[13px] font-semibold text-[#6b625a]">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-[44px] h-[220px] w-[520px] -translate-x-1/2 rounded-[18px] bg-[#d7d3cf]" />

          <div className="relative grid gap-6">
            <div className="flex justify-center">
              <div className="rounded-[14px] bg-white px-6 py-3 text-center shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                <div className="text-[13px] font-semibold text-[#6b625a]">
                  Step 2 - Spiritual Analysis
                </div>
                <div className="mt-1 text-[11px] text-[#9a938c]">
                  Using Astrology, Tarot, Numerology &amp; Intuition.
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-[14px] bg-white px-6 py-3 text-center shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                <div className="text-[13px] font-semibold text-[#6b625a]">
                  Step 1 - Consultation
                </div>
                <div className="mt-1 text-[11px] text-[#9a938c]">
                  We Understand Your Energy, Birth Details, And Concerns.
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-[14px] bg-white px-6 py-3 text-center shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                <div className="text-[13px] font-semibold text-[#6b625a]">
                  Step 3 - Healing &amp; Guidance
                </div>
                <div className="mt-1 text-[11px] text-[#9a938c]">
                  Energy Clearing, Chakra Balancing &amp; Solutions.
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-[14px] bg-white px-6 py-3 text-center shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                <div className="text-[13px] font-semibold text-[#6b625a]">
                  Step 4 - Life Alignment
                </div>
                <div className="mt-1 text-[11px] text-[#9a938c]">
                  Personal Remedies And Next Steps.
                </div>
              </div>
            </div>

            <div className="mt-2 text-center">
              <h3 className="text-[24px] sm:text-[28px] font-semibold tracking-[0.08em] text-[#6b625a]">
                HEALING <span className="italic font-light">PATHWAYS</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
