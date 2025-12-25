"use client";

import Image from "next/image";

export default function Services() {
  return (
    <section className="relative bg-[#fbf8f5] py-16">
      <div className="relative mx-auto max-w-[1400px] px-12 sm:px-14 lg:px-24">
        <span className="pointer-events-none absolute -left-2 top-6 h-2 w-2 rounded-full bg-[#e2dbd2]" />
        <span className="pointer-events-none absolute right-6 bottom-8 h-3 w-3 rounded-full border border-[#eee7df]" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-6">
            <ProductCard
              tone="warm"
              titleTop="Vedic"
              titleBottom="Astrology Reading"
              subtitle="Clarity - Timing - Direction"
              desc="Personalized chart analysis with practical guidance for relationships, career, and life transitions."
              cta="Book a Reading"
              img="/assets/images/astrology.jpg"
              imgClass="right-6 top-5 w-[300px] lg:w-[360px]"
              callouts={[
                { label: "Birth Chart", x: 70, y: 22, toX: 60, toY: 36 },
                { label: "Transit Timing", x: 42, y: 78, toX: 54, toY: 62 },
              ]}
            />

            <ProductCard
              tone="light"
              titleTop="Energy"
              titleBottom="Healing Session"
              subtitle="Balance - Release - Restore"
              desc="Reiki-inspired energy work, chakra alignment, and breath-led integration to help you feel grounded and clear."
              cta="Book a Session"
              img="/assets/images/healinghero.png"
              imgClass="right-6 top-6 w-[340px] lg:w-[420px]"
              callouts={[
                { label: "Chakra Reset", x: 46, y: 22, toX: 56, toY: 36 },
                { label: "Somatic Calm", x: 70, y: 70, toX: 66, toY: 56 },
              ]}
            />
          </div>

          <ProductCard
            tall
            tone="white"
            titleTop="Soul"
            titleBottom="Guided Ritual"
            subtitle="Intention - Protection - Renewal"
            desc="Custom rituals, affirmations, and spiritual practices tailored to your intention and season of life."
            cta="Book a Session"
            img="/assets/images/consultation.png"
            imgClass="right-6 top-8 w-[500px] lg:w-[600px]"
            callouts={[
              { label: "Protection Work", x: 34, y: 20, toX: 52, toY: 34 },
              { label: "Manifestation", x: 30, y: 58, toX: 54, toY: 62 },
            ]}
            topLeftMarks
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  tall = false,
  tone = "warm",
  titleTop,
  titleBottom,
  subtitle,
  desc,
  cta,
  img,
  imgClass = "",
  callouts = [],
  topLeftMarks = false,
}) {
  const bg =
    tone === "warm"
      ? "bg-[#efe9e2]"
      : tone === "white"
      ? "bg-white"
      : "bg-[#fcfdfd]";
  const highlight =
    tone === "white"
      ? "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.98), transparent 55%)"
      : "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.88), transparent 60%)";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[34px] border border-[#f0e9e1] shadow-[0_16px_32px_rgba(86,76,66,0.1)]",
        bg,
        tall ? "min-h-[440px] lg:min-h-[540px]" : "min-h-[210px] lg:min-h-[250px]",
      ].join(" ")}
    >
      <div className="absolute inset-0 opacity-80" style={{ background: highlight }} />

      {topLeftMarks && (
        <div className="absolute left-6 top-6 z-20 grid grid-cols-2 gap-3 opacity-60">
          {new Array(4).fill(0).map((_, i) => (
            <span key={i} className="h-10 w-10 rounded-2xl bg-[#f1ebe4]" />
          ))}
        </div>
      )}

      <div className="relative z-10 grid h-full grid-cols-[1.1fr_0.9fr] gap-6 p-8">
        <div className="flex flex-col justify-center pr-4">
          <h3 className="text-[34px] leading-[1.1] tracking-[0.16em] text-[#6a625a]">
            <span className="block font-semibold tracking-[0.18em] opacity-90">
              {titleTop}
            </span>
            <span className="mt-2 block whitespace-pre-line font-semibold">
              {titleBottom}
            </span>
          </h3>

          <p className="mt-5 text-[15px] uppercase tracking-[0.3em] text-[#b5ada4]">
            {subtitle}
          </p>

          <p className="mt-4 max-w-[420px] text-[13px] leading-6 text-[#9a9288]">
            {desc}
          </p>

          <button className="mt-5 inline-flex w-fit rounded-full bg-[#ccb8a5] px-6 py-2 text-[14px] font-medium text-white shadow-[0_6px_16px_rgba(120,98,76,0.25)]">
            {cta}
          </button>
        </div>

        <div className={["relative", tall ? "min-h-[360px]" : "min-h-[200px]"].join(" ")}>
          <div className={["absolute", imgClass].join(" ")}>
            <Image
              src={img}
              alt={titleTop}
              width={900}
              height={900}
              className="h-auto w-full object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.15)] brightness-[1.12] saturate-[1.1]"
              priority
            />
          </div>

          <div className="pointer-events-none absolute inset-0">
            {callouts.map((c, idx) => (
              <Callout key={idx} {...c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Callout({ label, x, y, toX, toY }) {
  return (
    <>
      <div
        className="absolute z-20 rounded-[12px] bg-[#eee7df] px-4 py-2 text-[13px] font-medium text-[#8a8278] shadow-sm"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(160,150,140,0.18)",
        }}
      >
        <span className="whitespace-pre-line leading-[1.05]">{label}</span>
      </div>

      <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={`M ${x} ${y} L ${x} ${toY} L ${toX} ${toY}`}
          fill="none"
          stroke="rgba(170,160,150,0.34)"
          strokeWidth="0.35"
        />
      </svg>

      <div
        className="absolute h-4 w-4 rounded-full border border-[#e7dfd6] bg-[#fdfbf8]"
        style={{
          left: `${toX}%`,
          top: `${toY}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dcd4cb]" />
      </div>
    </>
  );
}
