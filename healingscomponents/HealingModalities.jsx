'use client';

import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaSpa, FaLeaf, FaUserMd } from "react-icons/fa";

const fallbackModalities = [
  {
    id: "healing-1",
    title: "Energy Healing Therapy",
    investment: 120,
    currency: "USD",
    description:
      "Restore balance and harmony through personalized energy alignment sessions rooted in ancient Vedic wisdom.",
    image: "/assets/images/astrology.jpg",
  },
];

const defaultFeatures = [
  {
    icon: <FaHandHoldingHeart className="text-[#A59079]" />,
    label: "Personalized Healing",
  },
  {
    icon: <FaSpa className="text-[#A59079]" />,
    label: "Calming Environment",
  },
  {
    icon: <FaLeaf className="text-[#A59079]" />,
    label: "Natural Energy Flow",
  },
  {
    icon: <FaUserMd className="text-[#A59079]" />,
    label: "Expert Practitioners",
  },
];

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
  const safeModalities = modalities.length ? modalities : fallbackModalities;

  const spotlight = safeModalities[0];
  const collection = safeModalities.slice(1);

  return (
    <section id="modalities" className="flex flex-col gap-14 px-6 py-24 bg-white text-[#524E48]">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[36px] overflow-hidden border border-[#EAE4DC] shadow-[0_25px_90px_rgba(82,78,72,0.12)] flex flex-col">
          <div className="relative h-72">
            <img
              src={spotlight.image ?? "/assets/images/astrology.jpg"}
              alt={spotlight.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="p-8 space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
              Spotlight Session
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
              <span>{formatInvestment(spotlight.investment ?? spotlight.price, spotlight.currency)}</span>
              <span>·</span>
              <span>60 min</span>
            </div>
            <h3 className="font-serif text-[2rem] leading-tight">
              {spotlight.title}
            </h3>
            <p className="text-sm text-[#524E48]/75 leading-relaxed">
              {spotlight.description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {(spotlight.benefits?.length
                ? spotlight.benefits.map((label) => ({ icon: null, label }))
                : defaultFeatures
              ).slice(0, 4).map((feature, index) => (
                <div key={`${feature.label}-${index}`} className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
                  {feature.icon ?? <FaHandHoldingHeart className="text-[#A59079]" />}
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
            <a
              href="#bookconsultation"
              className="inline-flex items-center justify-center px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] border border-[#524E48] rounded-full hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
            >
              Book Session
            </a>
          </div>
        </article>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">Modalities</p>
            <h2 className="font-serif text-[2.4rem] leading-tight">Other rituals + therapies</h2>
            <p className="text-sm text-[#524E48]/80">
              Bespoke energy work, chakra balancing, sound therapy, and botanical prescriptions.
            </p>
          </div>

          <div className="space-y-4">
            {[spotlight, ...collection].map((modality, i) => (
              <motion.article
                key={modality.id ?? i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="grid gap-3 py-4 border-b border-[#EAE4DC] last:border-0 md:grid-cols-[0.2fr_0.8fr_0.3fr]"
              >
                <div className="text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl">{modality.title}</h3>
                  <p className="text-sm text-[#524E48]/70 leading-relaxed">
                    {modality.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
                  <span>{formatInvestment(modality.investment ?? modality.price, modality.currency)}</span>
                  <a href="#bookconsultation" className="text-[#524E48] hover:text-[#A59079]">
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
