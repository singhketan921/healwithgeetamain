"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BG_IMAGES = [
  "/assets/images/courseshero.png",
  "/assets/images/healinghero.png",
  "/assets/images/gems.png",
];

const INTERVAL_MS = 800; // faster
const FADE_MS = 500;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (BG_IMAGES.length <= 1) return;

    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, INTERVAL_MS);

    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#d7d1c7]">
      {/* Background carousel */}
      {BG_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hero"
          fill
          priority={i === 0}
          className={[
            "object-cover object-center",
            "transition-opacity",
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        />
      ))}

      {/* Slight wash like screenshot */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Left content */}
      <div className="relative z-10 min-h-screen">
        <div className="mx-auto flex min-h-screen w-full max-w-[1400px] px-6 sm:px-10">
          <div className="flex w-full max-w-[560px] flex-col justify-center py-16 sm:py-20">
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-white px-5 py-2 text-[12px] tracking-[0.18em] text-[#6b6257] shadow-sm">
                HEAL WITH GEETA
              </span>
            </div>

            <h1 className="text-white uppercase font-sans font-extrabold leading-[0.98] tracking-[0.02em] text-[44px] sm:text-[62px] lg:text-[74px]">
              HEAL, ALIGN,
              <br />
              AND RENEW
              <br />
              WITH GUIDED
              <br />
              SPIRITUAL CARE
            </h1>

            <p className="mt-8 max-w-[420px] text-white/90 text-[16px] leading-7">
              Personalized astrology readings, energy healing, and soulful
              guidance sessions to help you clear blocks, restore balance, and
              move forward with confidence.
            </p>

            <div className="mt-10 relative flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 pl-10 text-[14px] tracking-[0.12em] uppercase text-[#3b352f] shadow-md"
              >
                Begin Transformation
              </a>
            </div>
          </div>

          <div className="flex-1" />
        </div>
      </div>

      {/* Dots (bottom-center) */}
      {BG_IMAGES.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {BG_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "h-2 rounded-full transition-all",
                i === index ? "w-10 bg-white/90" : "w-2 bg-white/40 hover:bg-white/60",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </section>
  );
}
