'use client';

import Link from "next/link";
import Reveal from "@/components/Reveal";

function OffsetImageCluster({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute hidden h-[170px] w-[210px] md:block ${className}`}>
      <img
        src="/assets/images/coursesimg.png"
        alt=""
        className="absolute left-0 top-[62px] h-[98px] w-[98px] object-cover"
      />
      <img
        src="/assets/images/coursesimg.png"
        alt=""
        className="absolute left-[70px] top-0 h-[118px] w-[118px] object-cover"
      />
      <img
        src="/assets/images/coursesimg.png"
        alt=""
        className="absolute left-[70px] top-[62px] h-[98px] w-[98px] object-cover"
      />
    </div>
  );
}

export default function BeginTransformationSection() {
  return (
    <section className="relative overflow-hidden bg-[#ad7f53] px-6 py-14 text-white sm:py-16 lg:min-h-[520px] lg:py-0">
      <OffsetImageCluster className="left-[8%] top-[82px]" />
      <OffsetImageCluster className="bottom-[54px] right-[8%]" />

      <Reveal className="relative z-10 mx-auto flex min-h-[430px] max-w-[980px] flex-col items-center justify-center text-center lg:min-h-[520px]">
        <p className="mb-4 flex items-center justify-center gap-2 text-[18px] leading-none text-white">
          <span className="text-[22px] leading-none">✽</span>
          Begin transformation
        </p>
        <h2 className="max-w-[900px] text-[36px] font-normal leading-[0.98] tracking-[-0.01em] text-white sm:text-[50px] lg:text-[62px]">
          Begin your
          <em className="font-serif italic"> healing </em>
          journey, restore
          <em className="font-serif italic"> balance</em>, and return to
          <em className="font-serif italic"> yourself</em>.
        </h2>
        <p className="mt-7 max-w-[650px] text-[16px] leading-[1.35] text-white sm:text-[17px]">
          Schedule a consultation or send a message to begin a grounded, intentional path into clarity, alignment, and energetic renewal.
        </p>

        <Link
          href="/consultations"
          className="mt-7 inline-flex min-w-[220px] items-center justify-center bg-[#f8f3ef] px-7 py-4 text-[15px] uppercase tracking-[0.12em] !text-[#ad7f53] transition-colors hover:bg-white"
        >
          Discover More ↗
        </Link>
      </Reveal>
    </section>
  );
}
