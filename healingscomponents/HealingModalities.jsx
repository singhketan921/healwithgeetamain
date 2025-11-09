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
    icon: <FaHandHoldingHeart className="text-[#A8B963]" />,
    label: "Personalized Healing",
  },
  {
    icon: <FaSpa className="text-[#A8B963]" />,
    label: "Calming Environment",
  },
  {
    icon: <FaLeaf className="text-[#A8B963]" />,
    label: "Natural Energy Flow",
  },
  {
    icon: <FaUserMd className="text-[#A8B963]" />,
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
      <div className="grid w-full grid-cols-1 gap-10 max-w-7xl sm:grid-cols-2">
        {safeModalities.map((modality, i) => (
          <motion.div
            key={modality.id ?? i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden transition bg-gradient-to-b from-[#FFFEFA] via-[#F8F1DB] to-[#F2E3C3] border border-[#F1E0BB] shadow-[0_14px_35px_rgba(205,170,88,0.15)] rounded-2xl hover:shadow-[0_18px_40px_rgba(205,170,88,0.2)]"
          >
            {/* Image */}
            <img
              src={modality.image ?? "/assets/images/astrology.jpg"}
              alt={modality.title}
              className="object-cover w-full h-60"
            />

            {/* Content */}
            <div className="flex flex-col justify-between p-6">
              {/* Title & Price */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-[#1B1B1B]">
                  {modality.title}
                </h3>
                <span className="text-[#A8B963] font-semibold text-sm">
                  {formatInvestment(modality.investment ?? modality.price, modality.currency)}
                </span>
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {modality.description}
              </p>

              {/* Healing Features */}
              <div className="grid grid-cols-2 gap-2 mb-5 text-xs text-gray-700">
                {(modality.benefits?.length
                  ? modality.benefits.map((label) => ({ icon: null, label }))
                  : defaultFeatures
                ).map((feature, index) => (
                  <div key={`${feature.label}-${index}`} className="flex items-center gap-2">
                    {feature.icon ?? <FaHandHoldingHeart className="text-[#A8B963]" />}
                    {feature.label}
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="#bookconsultation"
                className="bg-gradient-to-r from-[#F2D7A2] to-[#E1BE82] text-[#1B1B1B] font-medium text-sm py-3 rounded-lg w-full hover:opacity-95 transition text-center"
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
