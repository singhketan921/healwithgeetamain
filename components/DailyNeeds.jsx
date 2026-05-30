"use client";

import Link from "next/link";

const items = [
  {
    title: "Spiritual Consultations",
    description:
      "Tarot, astrology, numerology, Vastu, and intuitive readings for refined spiritual guidance.",
    href: "/consultations",
    image: "/assets/images/consultations img.jpeg",
  },
  {
    title: "Spiritual Healings",
    description:
      "A blend of energy and vibration to cleanse, align, and harmonize your mind, body, and spirit.",
    href: "/healings",
    image: "/assets/images/healings img .jpeg",
  },
  {
    title: "Divine Learning",
    description:
      "A collection of spiritual courses designed to elevate your knowledge and inner growth.",
    href: "/courses",
    image: "/assets/images/learnings.jpeg",
  },
];

export default function DailyNeeds() {
  return (
    <section className="bg-[#f8f3ef] px-6 py-12 text-[#ad7f53] sm:py-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.58fr] lg:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[16px] text-[#ad7f53]">
              <span className="text-[18px] leading-none">✽</span>
              Daily needs
            </p>
            <h2 className="text-[48px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[62px]">
              Choose Your
              <span className="block font-serif italic">Perfect Escape</span>
            </h2>
          </div>
          <p className="max-w-[430px] text-[15px] leading-[1.35] text-[#ad7f53] lg:pb-2">
            Explore everyday support for clarity, energetic balance, and sacred learning through
            guided sessions, healing rituals, and courses.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {items.map((item) => (
            <article
              key={item.title}
              className="grid h-[380px] overflow-hidden border border-[#ad7f53] bg-[#f8f3ef] sm:h-[420px] lg:h-[330px] lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="flex h-full min-h-0 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ad7f53] text-[18px] text-white">
                    ✽
                  </span>
                  <h3 className="text-[25px] font-normal leading-tight text-[#ad7f53]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-auto max-w-[420px] text-[15px] leading-[1.35] text-[#ad7f53]">
                  {item.description}
                </p>
              </div>
              <Link
                href={item.href}
                className="group relative h-full min-h-0 overflow-hidden"
                aria-label={`Explore ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span
                  className="absolute inset-0 bg-[#ad7f53] opacity-0 transition-opacity duration-300 group-hover:opacity-25 group-focus-visible:opacity-25"
                />
                <span
                  className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 bg-[#f8f3ef] px-7 py-4 text-[13px] uppercase tracking-[0.12em] !text-[#ad7f53] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  Read More ↗
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
