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
    icon: <FaHandHoldingHeart className="text-[#6d655d]" />,
    label: "Personalized Healing",
  },
  {
    icon: <FaSpa className="text-[#6d655d]" />,
    label: "Calming Environment",
  },
  {
    icon: <FaLeaf className="text-[#6d655d]" />,
    label: "Natural Energy Flow",
  },
  {
    icon: <FaUserMd className="text-[#6d655d]" />,
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
    <section
      id="modalities"
      className="flex flex-col gap-14 px-6 py-24 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #EEECE9 0%, #FFFFFF 100%)" }}
    >
      <div className="mx-auto max-w-[1200px] grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[16px] overflow-hidden border border-[#e7dfd6] shadow-[0_12px_30px_rgba(0,0,0,0.12)] flex flex-col">
          <div className="relative h-72">
            <img
              src={spotlight.image ?? "/assets/images/astrology.jpg"}
              alt={spotlight.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="p-8 space-y-4">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
              Spotlight Session
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
              <span>{formatInvestment(spotlight.investment ?? spotlight.price, spotlight.currency)}</span>
              <span>·</span>
              <span>60 min</span>
            </div>
            <h3 className="text-[22px] sm:text-[24px] font-semibold leading-tight">
              {spotlight.title}
            </h3>
            <p className="text-[14px] text-[#7a736c] leading-[1.7]">
              {spotlight.description}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {(spotlight.benefits?.length
                ? spotlight.benefits.map((label) => ({ icon: null, label }))
                : defaultFeatures
              ).slice(0, 4).map((feature, index) => (
                <div key={`${feature.label}-${index}`} className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                  {feature.icon ?? <FaHandHoldingHeart className="text-[#6d655d]" />}
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
            <a
              href="#bookconsultation"
              className="min-w-[200px] rounded-[12px] bg-white px-6 py-2 text-[14px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
            >
              Book Session
            </a>
          </div>
        </article>

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">Modalities</p>
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">Other rituals + therapies</h2>
            <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
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
                className="grid gap-3 py-4 border-b border-[#e7dfd6] last:border-0 md:grid-cols-[0.2fr_0.8fr_0.3fr]"
              >
                <div className="text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="space-y-2">
                  <h3 className="text-[18px] sm:text-[20px] font-semibold">{modality.title}</h3>
                  <p className="text-[14px] text-[#7a736c] leading-[1.7]">
                    {modality.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                  <span>{formatInvestment(modality.investment ?? modality.price, modality.currency)}</span>
                  <a href="#bookconsultation" className="text-[#6b625a] hover:text-[#8f857c]">
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
