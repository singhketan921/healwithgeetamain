'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const astrology = "/assets/images/astrology.jpg";
const tarot = "/assets/images/modality5.png";
const healing = "/assets/images/modality4.png";
const healing1 = "/assets/images/modality3.png";
const healing2 = "/assets/images/modality2.png";
const healing3 = "/assets/images/modality1.png";

const services = [
  { id: 1, title: "Astrology Consultation", image: astrology },
  { id: 2, title: "Tarot Reading", image: tarot },
  { id: 3, title: "Energy Healing", image: healing },
  { id: 4, title: "Reiki Session", image: healing1 },
  { id: 5, title: "Chakra Balancing", image: healing2 },
  { id: 6, title: "Palmistry Reading", image: healing3 },
];

export default function Services() {
  return (
    <section className="relative bg-[#FFFFFF] py-20 overflow-hidden">
      <div className="relative z-10 px-6 mx-auto text-center max-w-7xl sm:px-8">
        <h2 className="font-serif text-[2.6rem] sm:text-[3rem] font-semibold text-charcoal mb-3">
          Our Services
        </h2>
        <p className="mb-8 text-base text-charcoal/80 sm:text-lg">
          Quality Consultations tailored for excellence.
        </p>

        <div className="mb-14">
          <Link
            href="/consultations#consultationOfferings"
            className="inline-block bg-[#ACBF69] text-white px-8 py-3 rounded-md font-medium text-lg shadow-sm transition hover:bg-[#9CAD5B]"
          >
            Browse Services
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {services.map((service, i) => {
            const isWide = i === 0 || i === 5;
            const heightClass = "h-[220px] sm:h-[240px] lg:h-[260px]";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`w-full ${isWide ? "lg:col-span-2" : ""}`}
              >
                <div className="group relative bg-[#E8DFC8] rounded-[18px] p-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                  <div className="bg-white rounded-[14px]">
                    <div className="relative rounded-[10px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full ${heightClass} object-cover rounded-[10px] select-none`}
                        draggable="false"
                      />

                      <div
                        className="
                          absolute left-0 right-0 bottom-0
                          bg-[#E8DFC8]
                          px-4 py-3 sm:px-5 sm:py-4
                          flex flex-col sm:flex-row sm:items-center sm:justify-between
                          rounded-b-[10px]
                          transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                          opacity-100 translate-y-0
                          sm:opacity-0 sm:translate-y-4
                          sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                        "
                      >
                        <h3 className="text-charcoal font-semibold text-[0.85rem] sm:text-[1rem] leading-tight text-left mb-1 sm:mb-0">
                          {service.title}
                        </h3>
                        <Link
                          href="/consultations#bookconsultation"
                          className="
                            px-3 py-1.5
                            text-xs sm:text-sm
                            text-white
                            bg-[#ACBF69]
                            rounded-full
                            shadow-sm
                            inline-flex items-center gap-1
                            hover:brightness-[1.05] transition
                            justify-center
                          "
                        >
                          <span className="text-[0.9rem] leading-none">+</span>
                          <span>Book</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
