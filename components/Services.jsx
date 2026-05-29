"use client";

const chips = ["Growth", "Harmony", "Resilience"];

export default function Services() {
  return (
    <section className="bg-[#f8f3ef] px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-[1500px]">
        <div className="absolute -top-16 left-[7%] z-20 hidden h-[154px] w-[154px] items-center justify-center rounded-full bg-[#f8f3ef] md:flex">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 154 154" aria-hidden="true">
            <defs>
              <path
                id="services-explore-path"
                d="M77,77 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"
              />
            </defs>
            <text className="fill-[#4c4740] text-[13px] uppercase tracking-[0.24em]">
              <textPath href="#services-explore-path" startOffset="0%">
                Explore More. Explore More. Explore More.
              </textPath>
            </text>
          </svg>
          <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#f3eadf] text-[32px] leading-none text-[#4c4740]">
            ↓
          </span>
        </div>

        <div className="relative min-h-[520px] overflow-hidden bg-[#ad7f53] sm:min-h-[620px] lg:min-h-[690px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/images/spiritual guide img.jpg"
          >
            <source src="/assets/images/FAITHHEALERS JOURNEY  home videp.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,243,239,0.08)_0%,rgba(173,127,83,0.22)_40%,rgba(130,72,28,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[#ad7f53]/18" />

          <div className="relative z-10 flex min-h-[520px] flex-col justify-end px-6 pb-8 sm:min-h-[620px] sm:px-12 sm:pb-12 lg:min-h-[690px]">
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/30 bg-white/18 px-4 py-2 text-[13px] font-semibold leading-none text-white backdrop-blur-sm"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="max-w-[940px] text-[44px] font-normal leading-[1.02] tracking-[-0.01em] text-white sm:text-[64px] lg:text-[76px]">
                Spiritual guidance that brings balance and clarity.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
