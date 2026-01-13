'use client';

import Link from "next/link";
import { motion } from "framer-motion";

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
  const safeOfferings = offerings;

  return (
    <section
      id="offerings"
      className="py-24 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #EEECE9 0%, #FFFFFF 100%)" }}
    >
      <div className="mx-auto max-w-[1320px] px-6 space-y-12">
        <div className="space-y-4 max-w-[720px] mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
            Offerings
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold tracking-[0.14em] text-[#6b625a]">
            Consultations Crafted for Your Path
          </h2>
          <div className="mx-auto h-[2px] w-16 rounded-full bg-[#d8cfc6]" />
          <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
            Choose the reading that brings clarity and calm. Each session blends sacred insight with practical next steps.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safeOfferings.map((item, i) => {
            const itemId = item.id ?? item._id;
            return (
              <motion.article
                key={itemId ?? i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-[18px] border border-[#e7dfd6] bg-[#fbf8f5] shadow-[0_16px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
              >
                <Link href={`/consultations/${itemId}`} className="block">
                  <img
                    src={item.image || "/assets/images/astrology.jpg"}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                </Link>
                <div className="flex flex-col h-full p-6 space-y-4">
                  <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                    <span>Session</span>
                    <span>{formatPrice(item.price, item.currency)}</span>
                  </div>
                  <Link href={`/consultations/${itemId}`}>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug">
                      {item.title}
                    </h3>
                  </Link>
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
                  <div className="flex flex-col gap-3">
                    <Link
                      href={`/consultations/${itemId}`}
                      className="rounded-[12px] border border-[#8f857c] bg-transparent px-6 py-2 text-[13px] font-semibold text-[#6b625a] text-center"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
