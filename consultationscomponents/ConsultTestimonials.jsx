'use client';

import { motion } from "framer-motion";

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

const AVATAR_SRC = "/assets/images/lady.png";
const COLUMN_HEIGHTS = [
  ["min-h-[300px]", "min-h-[300px]", "min-h-[300px]", "min-h-[300px]"],
  ["min-h-[270px]", "min-h-[300px]", "min-h-[270px]", "min-h-[300px]"],
  ["min-h-[300px]", "min-h-[300px]", "min-h-[300px]", "min-h-[300px]"],
];

function buildMasonryColumns(items) {
  const expanded = items.map((item, index) => ({
    ...item,
    _key: `${item.id ?? item.name ?? "testimonial"}-${index}`,
  }));

  return [0, 1, 2].map((columnIndex) =>
    expanded.filter((_, index) => index % 3 === columnIndex)
  );
}

function TestimonialCard({ testimonial, className = "", index = 0 }) {
  const quote = testimonial.text ?? testimonial.quote;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`group flex flex-col justify-center border border-[#ad7f53] bg-[#f8f3ef] px-8 py-10 text-left transition-colors duration-300 hover:bg-[#ad7f53] ${className}`}
    >
      <div className="mb-10 flex items-start justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={testimonial.avatar || AVATAR_SRC}
            alt={testimonial.name}
            className="h-[52px] w-[52px] rounded-full object-cover"
          />
          <div>
            <h3
              className="text-[20px] font-normal leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[22px]"
            >
              {testimonial.name}
            </h3>
            <p
              className="mt-1 text-[17px] leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[18px]"
            >
              {testimonial.role || "HealWithGeeta Client"}
            </p>
          </div>
        </div>
        <span
          className="font-serif text-[70px] leading-[0.65] text-[#ad7f53] transition-colors duration-300 group-hover:text-white"
          aria-hidden="true"
        >
          ”
        </span>
      </div>

      <p
        className="max-w-[400px] text-[20px] leading-[1.15] text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[22px]"
      >
        {quote}
      </p>
    </motion.article>
  );
}

export default function ConsultTestimonials({
  testimonials = [],
  title = "Sacred Transformations",
  subtitle = "Stories of healing and spiritual awakening",
}) {
  const safeTestimonials = testimonials.length ? testimonials : fallbackTestimonials;
  const columns = buildMasonryColumns(safeTestimonials);

  return (
    <section className="overflow-hidden bg-[#f8f3ef] px-6 py-24 text-center sm:px-10 sm:py-28">
      <div className="mx-auto mb-16 max-w-[1200px]">
        <p className="mb-4 flex items-center justify-center gap-2 text-[16px] text-[#ad7f53]">
          <span className="text-[18px] leading-none">✽</span>
          Testimonials
        </p>
        <h2 className="text-[46px] font-normal leading-none text-[#ad7f53] sm:text-[66px] md:text-[76px]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[18px] leading-[1.45] text-[#ad7f53]">
          {subtitle}
        </p>
      </div>

      <div className="mx-auto hidden max-w-[1320px] grid-cols-3 gap-7 lg:grid">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-7">
            {column.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial._key}
                testimonial={testimonial}
                index={columnIndex * 4 + index}
                className={COLUMN_HEIGHTS[columnIndex][index % COLUMN_HEIGHTS[columnIndex].length]}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="relative mt-6 lg:hidden">
        <motion.div
          className="flex cursor-grab gap-6 overflow-x-auto px-2 pb-3 active:cursor-grabbing"
          whileTap={{ cursor: "grabbing" }}
        >
          {safeTestimonials.map((testimonial, index) => (
            <div key={testimonial.id ?? index} className="min-w-[88vw] sm:min-w-[420px]">
              <TestimonialCard
                testimonial={testimonial}
                index={index}
                className="min-h-[300px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
