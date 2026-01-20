'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const formatInvestment = (value, currency = "USD") => {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
};

export default function HealingModalities({ modalities = [] }) {
  const safeModalities = modalities;

  return (
    <section
      id="modalities"
      className="py-24 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)" }}
    >
      <div className="mx-auto max-w-[1320px] px-6 space-y-12">
        <div className="space-y-4 max-w-[720px] mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
            Modalities
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold tracking-[0.14em] text-[#6b625a]">
            Healing Rituals and Therapies
          </h2>
          <div className="mx-auto h-[2px] w-16 rounded-full bg-[#d8cfc6]" />
          <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
            Explore gentle, restorative sessions designed to balance energy, calm the mind, and renew the body.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {safeModalities.map((modality, i) => {
            const modalityId = modality.id ?? modality._id;
            return (
              <motion.article
                key={modalityId ?? i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative min-h-[320px] overflow-hidden rounded-[22px] border border-[#e7dfd6] shadow-[0_18px_36px_rgba(0,0,0,0.14)]"
              >
                <Link href={`/healings/${modalityId}`}>
                  <img
                    src={modality.image || "/assets/images/astrology.jpg"}
                    alt={modality.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <div className="rounded-[16px] border border-white/20 bg-white/90 p-5 shadow-[0_12px_24px_rgba(0,0,0,0.12)] backdrop-blur">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#8f857c]">
                      <span>Session</span>
                      <span>
                        {formatInvestment(
                          modality.investment ?? modality.price,
                          modality.currency
                        )}
                      </span>
                    </div>
                    <Link href={`/healings/${modalityId}`}>
                      <h3 className="mt-3 text-[20px] sm:text-[22px] font-semibold leading-snug text-[#5f5750]">
                        {modality.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-[14px] text-[#7a736c] leading-[1.6] preserve-format">
                      {modality.description}
                    </p>
                    {modality.benefits?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-[#9a938c]">
                        {modality.benefits.slice(0, 3).map((benefit) => (
                          <span
                            key={benefit}
                            className="rounded-full border border-[#e7dfd6] bg-white px-3 py-1"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <div className="mt-4 flex flex-col gap-3">
                      <Link
                        href={`/healings/${modalityId}`}
                        className="inline-flex w-full items-center justify-center rounded-[12px] border border-[#8f857c] bg-transparent px-6 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6b625a]"
                      >
                        View details
                      </Link>
                    </div>
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
