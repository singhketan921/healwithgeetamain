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

const GOLD = "#E1C17B";

const defaultFeatures = [
  {
    icon: <FaHandHoldingHeart className="text-[#E1C17B]" />,
    label: "Personalized Healing",
  },
  {
    icon: <FaSpa className="text-[#E1C17B]" />,
    label: "Calming Environment",
  },
  {
    icon: <FaLeaf className="text-[#E1C17B]" />,
    label: "Natural Energy Flow",
  },
  {
    icon: <FaUserMd className="text-[#E1C17B]" />,
    label: "Expert Practitioners",
  },
];

function formatInvestment(value, currency = "USD") {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
}

export default function HealingModalities({ modalities = [] }) {
  const safeModalities = modalities.length ? modalities : fallbackModalities;

  return (
    <section
      id="modalities"
      className="flex flex-col items-center px-6 py-20 bg-white sm:px-10"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-serif text-[2.3rem] sm:text-[2.8rem] font-semibold text-[#1B1B1B] mb-2">
          Our Healing Modalities
        </h2>
        <p className="text-base text-gray-700 sm:text-lg">
          Each healing practice is designed to nurture your energy, body, and
          spirit.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid w-full grid-cols-1 gap-8 max-w-7xl sm:grid-cols-2">
        {safeModalities.map((modality, i) => (
          <motion.div
            key={modality.id ?? i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden transition bg-white/95 border border-[#F1E3CC] shadow-[0_16px_32px_rgba(165,140,95,0.12)] rounded-3xl hover:shadow-[0_22px_44px_rgba(165,140,95,0.18)] backdrop-blur flex flex-col"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-60">
              <img
                src={modality.image ?? "/assets/images/astrology.jpg"}
                alt={modality.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5 sm:p-6 flex-1">
              {/* Title & Price */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[#1B1B1B]">
                  {modality.title}
                </h3>
                <span className="px-4 py-1 text-sm font-semibold rounded-full bg-[#FFF5E2] text-[#A2792F]">
                  {formatInvestment(modality.investment ?? modality.price, modality.currency)}
                </span>
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {modality.description}
              </p>

              {/* Healing Features */}
              <div className="grid grid-cols-1 gap-3 mb-5 text-xs text-gray-700 sm:grid-cols-2">
                {(modality.benefits?.length
                  ? modality.benefits.map((label) => ({ icon: null, label }))
                  : defaultFeatures
                ).map((feature, index) => (
                  <div
                    key={`${feature.label}-${index}`}
                    className="flex items-center gap-2 rounded-full bg-[#FDF6EB] px-3 py-1.5"
                  >
                    {feature.icon ?? <FaHandHoldingHeart className="text-[#E1C17B]" />}
                    <span className="text-[0.8rem] text-gray-600">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="#bookconsultation"
                className="bg-[#C6A24A] text-white font-medium text-sm py-3 rounded-xl w-full shadow-[0_14px_30px_rgba(198,162,74,0.35)] hover:bg-[#b28f3f] transition text-center mt-auto"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
