'use client';

import { useEffect, useState } from "react";

const IMAGES = [
  {
    src: "/assets/images/lady.png",
    alt: "Editorial ritual portrait",
    title: "Mystic",
  },
  {
    src: "/assets/images/gems.png",
    alt: "Luxury serum and gemstone still life",
    title: "Remedies",
  },
  {
    src: "/assets/images/healinghero.png",
    alt: "Healing ceremony close up",
    title: "Ceremonies",
  },
];

export default function HeroCarousel({ variant = "default", className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (nextIndex) => setIndex((nextIndex + IMAGES.length) % IMAGES.length);

  const isCard = variant === "card";
  const containerHeight = isCard ? "h-[520px]" : "h-[320px] sm:h-[420px] lg:h-[500px]";

  return (
    <div
      className={`relative w-full ${containerHeight} overflow-hidden rounded-[36px] border border-[#EAE4DC] bg-white shadow-[0_30px_80px_rgba(82,78,72,0.12)] ${className}`}
    >
      {IMAGES.map((image, i) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {isCard ? (
        <>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2b1c0e]/70 to-transparent pointer-events-none" />
          <div className="absolute left-0 right-0 bottom-4 flex items-center justify-between px-6 text-white">
            <div className="bg-[#b0733c]/90 px-4 py-2 rounded-full text-lg font-serif shadow-lg">
              {IMAGES[index].title}
            </div>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="h-10 w-10 rounded-full bg-white/80 text-[#7b5b36] flex items-center justify-center text-3xl leading-none"
              aria-label="Next slide"
            >
              &rsaquo;
            </button>
          </div>
        </>
      ) : (
        <div className="absolute inset-x-4 bottom-4 hidden sm:flex items-center justify-between">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="rounded-full bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#524E48] backdrop-blur hover:bg-white transition"
          >
            Prev
          </button>
          <div className="flex gap-2">
            {IMAGES.map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`h-2 w-8 rounded-full transition ${
                  dotIdx === index ? "bg-[#524E48]" : "bg-white/70"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="rounded-full bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#524E48] backdrop-blur hover:bg-white transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
