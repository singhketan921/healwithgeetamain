"use client";

import { FaStar } from "react-icons/fa6";

const fallbackTestimonials = [
  {
    id: "spotlight-1",
    name: "Ananya S.",
    role: "Client, Mumbai",
    rating: 5,
    quote:
      "The consultation felt gentle and grounding. I left with rituals, clear next steps, and real peace.",
  },
];

export default function Testimonials({ testimonials = [] }) {
  const items = testimonials.length ? testimonials : fallbackTestimonials;

  return (
    <section className="bg-[#f7f5f2] py-20 text-[#6d655d]">
      <div className="relative mx-auto max-w-[1200px] px-6">
        <span className="pointer-events-none absolute left-6 top-10 h-2 w-2 rounded-full bg-[#e2dbd2]" />
        <span className="pointer-events-none absolute right-8 top-20 h-3 w-3 rounded-full border border-[#eee7df]" />
        <div className="text-center">
          <h2 className="text-[30px] sm:text-[38px] font-semibold tracking-[0.14em] text-[#6a625a]">
            WORDS FROM THE COMMUNITY
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] tracking-[0.08em] text-[#a59d94]">
            Stories of healing, clarity, and calm
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((entry) => (
            <div
              key={entry.id}
              className="rounded-[24px] border border-black/5 bg-white px-7 py-7 shadow-[0_14px_32px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-4 flex gap-1 text-[#c1ab96] text-[18px]">
                {Array.from({ length: Math.round(entry.rating) }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <p className="text-[17px] leading-[1.7] text-[#7a7269]">
                {entry.quote}
              </p>
              <div className="mt-5 text-[11px] uppercase tracking-[0.28em] text-[#b5ada4]">
                {entry.name} - {entry.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
