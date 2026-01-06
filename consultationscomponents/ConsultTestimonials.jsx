'use client';

import { motion } from "framer-motion";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

const fallbackTestimonials = [
  {
    id: "consult-1",
    name: "John Doe",
    role: "Software Engineer, New York",
    rating: 4.5,
    text: "Geeta's astrological reading gave me clarity I've been seeking for years. Her insights were profound and exactly what my soul needed to hear.",
  },
  {
    id: "consult-2",
    name: "Jane Smith",
    role: "Artist, Los Angeles",
    rating: 5,
    text: "Her energy and compassion were truly healing. I walked away feeling centered and deeply understood.",
  },
];

export default function ConsultTestimonials({
  testimonials = [],
  title = "Sacred Transformations",
  subtitle = "Stories of healing and spiritual awakening",
}) {
  const safeTestimonials = testimonials.length ? testimonials : fallbackTestimonials;

  return (
    <section className="px-6 py-20 overflow-hidden text-center bg-[#EEECE9] sm:px-10">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-[1200px]">
        <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em] text-[#6b625a] mb-3">
          {title}
        </h2>
        <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">{subtitle}</p>
      </div>

      {/* Desktop & Tablet Grid */}
      <div className="hidden mx-auto max-w-[1200px] gap-8 sm:grid sm:grid-cols-2">
        {safeTestimonials.map((t, i) => (
          <motion.div
            key={t.id ?? i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between p-6 text-left transition-all bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] rounded-[16px]"
          >
            <div className="flex items-start gap-4 mb-4">
              {/* Avatar */}
              <div className="h-12 w-12 rounded-full bg-[#6b625a] flex items-center justify-center text-white text-2xl">
                <span>*</span>
              </div>

              {/* Info */}
              <div>
                <h4 className="text-[16px] font-semibold text-[#6b625a]">{t.name}</h4>
                <p className="text-[14px] text-[#7a736c]">{t.role}</p>
                <div className="flex items-center gap-1 text-[#8f857c] mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  <span className="ml-1 text-[12px] text-[#7a736c]">{t.rating}/5</span>
                </div>
              </div>
            </div>

            <p className="text-[14px] italic leading-[1.7] text-[#7a736c]">
              &ldquo;{t.text ?? t.quote}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="relative mt-6 sm:hidden">
        <motion.div
          className="flex gap-6 px-2 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -400, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {safeTestimonials.map((t, i) => (
            <motion.div
              key={t.id ?? i}
              className="min-w-[100%] bg-white rounded-[16px] shadow-[0_12px_30px_rgba(0,0,0,0.12)] p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#6b625a] flex items-center justify-center text-white text-xl">
                  <span>*</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#6b625a]">{t.name}</h4>
                  <p className="text-[12px] text-[#7a736c]">{t.role}</p>
                  <div className="flex items-center gap-1 text-[#8f857c] mt-1 text-[12px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                    <span className="ml-1 text-[12px] text-[#7a736c]">{t.rating}/5</span>
                  </div>
                </div>
              </div>

              <p className="text-[14px] italic leading-[1.7] text-[#7a736c]">
                &ldquo;{t.text ?? t.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
