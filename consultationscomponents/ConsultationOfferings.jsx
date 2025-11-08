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
      className="py-20 px-6 sm:px-10 bg-white text-center"
    >
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto mb-14">
        <h2 className="font-serif text-[2rem] sm:text-[2.6rem] md:text-[3rem] font-semibold text-charcoal mb-3">
          Our Consultation Offerings
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Choose the guidance that resonates with your soul
        </p>
      </div>

      {/* Offerings Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {safeOfferings.map((item, i) => (
          <motion.div
            key={item.id ?? i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[20px] shadow-md hover:shadow-lg transition-all overflow-hidden text-left flex flex-col justify-between"
          >
            {/* Image */}
            <img
              src={item.image ?? "/assets/images/astrology.jpg"}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-[#ACBF69] font-semibold text-lg">
                    {item.title}
                  </h3>
                  <span className="text-[#ACBF69] font-medium">
                    {formatPrice(item.price, item.currency)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                {item.modalities?.length ? (
                  <ul className="mt-4 text-xs text-gray-500 list-disc list-inside space-y-1">
                    {item.modalities.map((modality) => (
                      <li key={modality}>{modality}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* Button */}
              <div className="mt-6">
                <a
                  href="/consultations#bookconsultation"
                  className="block text-center w-full bg-[#ACBF69] text-white text-sm font-medium rounded-full py-2.5 hover:bg-[#9CAD5B] transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
