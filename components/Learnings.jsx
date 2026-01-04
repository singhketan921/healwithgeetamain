"use client";

export default function Learnings() {
  return (
    <section
      className="text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EEECE9 100%)" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-12 sm:px-6">
        <div className="text-center">
          <h2 className="text-[26px] sm:text-[36px] md:text-[40px] font-semibold tracking-[0.12em] text-[#5f5750]">
            THE HEALING APPROACH
          </h2>
          <p className="mx-auto mt-3 max-w-[720px] text-[14px] sm:text-[17px] leading-[1.6] text-[#7a736c]">
            Each Learning Blends Astrology, Energy Work, And Practical Rituals To Help You Heal,
            Align, And Move Forward With Clarity.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button className="min-w-[200px] sm:min-w-[230px] rounded-[12px] bg-white px-8 sm:px-10 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.15)]">
              Explore Healings
            </button>
            <button className="min-w-[200px] sm:min-w-[230px] rounded-[12px] border border-[#8f857c] bg-transparent px-8 sm:px-10 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a]">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-14 sm:min-h-[400px]">
          <div className="hidden sm:block absolute right-0 top-10 h-[240px] w-[520px] rounded-[22px] bg-[#d9d9d9]" />

          <div className="text-center sm:absolute sm:left-0 sm:top-0 sm:w-full">
            <h3 className="text-[24px] sm:text-[34px] font-semibold tracking-[0.08em] text-[#6b625a]">
              HEALING <span className="italic font-light">PATHWAYS</span>
            </h3>
          </div>

          <div className="sm:hidden">
            <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#d9d9d9] min-h-[680px]">
              <div className="absolute inset-0 bg-[#c9c4bc] opacity-35" />

              <div className="relative p-4">
                <div className="rounded-full bg-[#6d655d] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white w-fit">
                  Protocol
                </div>
              </div>

              <div className="absolute left-4 top-[90px] w-[52%]">
                <StepCard
                  title="Step 2 - Spiritual Analysis"
                  description="Using Astrology, Tarot, Numerology &amp; Intuition."
                />
              </div>

              <div className="absolute right-4 top-[18px] w-[46%]">
                <StepCard
                  title="Step 1 - Consultation"
                  description="We Understand Your Energy, Birth Details, And Concerns."
                />
              </div>

              <div className="absolute left-1/2 top-[44%] -translate-x-1/2 text-center text-[#6b625a]/70">
                <div className="text-[24px] font-semibold tracking-[0.08em]">HEALING</div>
                <div className="text-[18px] italic font-light tracking-[0.08em]">PATHWAYS</div>
              </div>

              <div className="absolute left-4 bottom-4 w-[52%]">
                <StepCard
                  title="Step 3 - Healing &amp; Guidance"
                  description="Energy Clearing, Chakra Balancing &amp; Solutions."
                />
              </div>

              <div className="absolute right-4 bottom-[140px] w-[46%]">
                <StepCard
                  title="Step 4 - Life Alignment"
                  description="Personal Remedies And Next Steps."
                />
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="absolute left-0 top-[78px]">
              <StepCard
                title="Step 2 - Spiritual Analysis"
                description="Using Astrology, Tarot, Numerology &amp; Intuition."
              />
            </div>

            <div className="absolute right-12 top-[78px]">
              <StepCard
                title="Step 1 - Consultation"
                description="We Understand Your Energy, Birth Details, And Concerns."
              />
            </div>

            <div className="absolute left-1/2 top-[220px] -translate-x-1/2">
              <StepCard
                title="Step 3 - Healing &amp; Guidance"
                description="Energy Clearing, Chakra Balancing &amp; Solutions."
              />
            </div>

            <div className="absolute right-10 top-[190px]">
              <StepCard
                title="Step 4 - Life Alignment"
                description="Personal Remedies And Next Steps."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ title, description }) {
  return (
    <div className="rounded-[14px] bg-white px-6 py-3 text-center shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
      <div className="text-[15px] sm:text-[16px] font-semibold text-[#6b625a]">{title}</div>
      <div className="mt-1 text-[13px] sm:text-[14px] text-[#9a938c]">{description}</div>
    </div>
  );
}
