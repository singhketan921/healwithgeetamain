'use client';

import { FaStar } from "react-icons/fa6";

const fallbackTestimonials = [
  {
    id: "spotlight-1",
    name: "John Doe",
    role: "Software Engineer, New York",
    rating: 5,
    quote:
      "The consultation felt like stepping inside an illuminated archive of my own story. I left with rituals, tinctures, and profound clarity.",
  },
];

export default function Testimonials({ testimonials = [] }) {
  const items = testimonials.length ? testimonials : fallbackTestimonials;

  return (
    <section className="bg-[#EAE4DC] py-24 text-[#524E48]">
      <div className="max-w-6xl px-6 mx-auto space-y-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
              Testimonials
            </p>
            <h2 className="mt-4 font-serif text-[2.6rem] leading-tight">
              Women writing new chapters
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#524E48]/80">
              Letters and field reports from the HealWithGeeta community—inked
              after ceremonies, tarot salons, and wellness residencies.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-8">
            {items.map((entry) => (
              <article
                key={entry.id}
                className="p-8 border border-[#B0AAA0]/50 rounded-[32px] bg-white"
              >
                <div className="flex gap-1 text-[#A59079] mb-4 text-lg">
                  {Array.from({ length: Math.round(entry.rating) }).map(
                    (_, idx) => (
                      <FaStar key={idx} />
                    )
                  )}
                </div>
                <p className="font-serif text-2xl leading-snug mb-6">
                  {entry.quote}
                </p>
                <div className="text-sm uppercase tracking-[0.35em] text-[#B0AAA0]">
                  {entry.name} · {entry.role}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
