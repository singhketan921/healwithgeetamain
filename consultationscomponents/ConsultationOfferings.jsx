'use client';

import { motion } from "framer-motion";

const fallbackOfferings = [
  {
    id: "placeholder",
    title: "Personalised Consultation",
    price: 120,
    currency: "USD",
    description:
      "A tailored session blending astrology, intuitive guidance, and ritual prescriptions to realign your path.",
    image: "/assets/images/astrology.jpg",
  },
];

function formatPrice(value, currency = "USD") {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
}

export default function ConsultationOfferings({ offerings = [] }) {
  const safeOfferings = offerings.length ? offerings : fallbackOfferings;

  return (
    <section id="offerings" className="bg-white py-24 text-[#524E48]">
      <div className="max-w-6xl px-6 mx-auto space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
              Offerings
            </p>
            <h2 className="font-serif text-[2.6rem] leading-tight">
              Choose the guidance that resonates
            </h2>
            <p className="text-base leading-relaxed text-[#524E48]/80">
              Sessions blend astrology, intuitive strategy, and ritual prescriptions. Each is handwritten to your chart and lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {safeOfferings.map((item, i) => (
              <motion.article
                key={item.id ?? i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-[30px] border border-[#EAE4DC] bg-[#F8F6F3] shadow-[0_18px_45px_rgba(82,78,72,0.08)] overflow-hidden flex flex-col"
              >
                <img
                  src={item.image ?? "/assets/images/astrology.jpg"}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="flex flex-col h-full p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
                    <span>Session</span>
                    <span>{formatPrice(item.price, item.currency)}</span>
                  </div>
                  <h3 className="font-serif text-2xl leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#524E48]/75 flex-1 leading-relaxed">
                    {item.description}
                  </p>
                  {item.modalities?.length ? (
                    <ul className="text-xs text-[#B0AAA0] uppercase tracking-[0.3em] space-y-1">
                      {item.modalities.map((modality) => (
                        <li key={modality}>{modality}</li>
                      ))}
                    </ul>
                  ) : null}
                  <a
                    href="/consultations#bookconsultation"
                    className="inline-flex items-center justify-center px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] border border-[#524E48] rounded-full hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
                  >
                    Book
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
