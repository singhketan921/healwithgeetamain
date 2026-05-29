'use client';

import Link from "next/link";
import Reveal from "@/components/Reveal";

function OffsetImageCluster({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute hidden h-[210px] w-[260px] md:block ${className}`}>
      <img
        src="/assets/images/coursesimg.png"
        alt=""
        className="absolute left-0 top-[76px] h-[122px] w-[122px] object-cover"
      />
      <img
        src="/assets/images/coursesimg.png"
        alt=""
        className="absolute left-[86px] top-0 h-[146px] w-[146px] object-cover"
      />
      <img
        src="/assets/images/coursesimg.png"
        alt=""
        className="absolute left-[86px] top-[76px] h-[122px] w-[122px] object-cover"
      />
    </div>
  );
}

export default function BeginTransformationSection() {
  return (
    <section className="relative overflow-hidden bg-[#ad7f53] px-6 py-20 text-white sm:py-28 lg:min-h-[700px] lg:py-0">
      <OffsetImageCluster className="left-[9%] top-[120px]" />
      <OffsetImageCluster className="bottom-[86px] right-[8%]" />

      <Reveal className="relative z-10 mx-auto flex min-h-[540px] max-w-[1040px] flex-col items-center justify-center text-center lg:min-h-[700px]">
        <p className="mb-4 flex items-center justify-center gap-2 text-[18px] leading-none text-white">
          <span className="text-[22px] leading-none">✽</span>
          Begin transformation
        </p>
        <h2 className="max-w-[940px] text-[42px] font-normal leading-[0.98] tracking-[-0.01em] text-white sm:text-[58px] lg:text-[72px]">
          Begin your
          <em className="font-serif italic"> healing </em>
          journey, restore
          <em className="font-serif italic"> balance</em>, and return to
          <em className="font-serif italic"> yourself</em>.
        </h2>
        <p className="mt-10 max-w-[650px] text-[18px] leading-[1.35] text-white">
          Schedule a consultation or send a message to begin a grounded, intentional path into clarity, alignment, and energetic renewal.
        </p>

        <Link
          href="/consultations"
          className="mt-9 inline-flex min-w-[258px] items-center justify-center bg-[#f8f3ef] px-8 py-5 text-[16px] uppercase tracking-[0.12em] !text-[#ad7f53] transition-colors hover:bg-white"
        >
          Discover More ↗
        </Link>
      </Reveal>
    </section>
  );
}
