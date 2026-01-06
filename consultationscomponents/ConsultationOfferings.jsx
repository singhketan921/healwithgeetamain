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
    <section
      id="offerings"
      className="py-24 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #EEECE9 0%, #FFFFFF 100%)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-4">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
              Offerings
            </p>
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
              Choose the guidance that resonates
            </h2>
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
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
                className="rounded-[16px] border border-[#e7dfd6] bg-[#fbf8f5] shadow-[0_12px_30px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
              >
                <img
                  src={item.image ?? "/assets/images/astrology.jpg"}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="flex flex-col h-full p-6 space-y-4">
                  <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                    <span>Session</span>
                    <span>{formatPrice(item.price, item.currency)}</span>
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#7a736c] flex-1 leading-[1.7]">
                    {item.description}
                  </p>
                  {item.modalities?.length ? (
                    <ul className="text-[12px] text-[#9a938c] uppercase tracking-[0.2em] space-y-1">
                      {item.modalities.map((modality) => (
                        <li key={modality}>{modality}</li>
                      ))}
                    </ul>
                  ) : null}
                  <a
                    href="/consultations#bookconsultation"
                    className="rounded-[12px] border border-[#8f857c] bg-transparent px-6 py-2 text-[13px] font-semibold text-[#6b625a] text-center"
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
