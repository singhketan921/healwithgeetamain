'use client';

import { motion } from "framer-motion";
import { FaBrain, FaHeart, FaDove } from "react-icons/fa";

const columns = [
  {
    icon: <FaBrain className="text-3xl text-[#524E48]" />,
    title: "Mind",
    bullets: ["Stress relief", "Mental clarity", "Emotional calm"],
  },
  {
    icon: <FaHeart className="text-3xl text-[#524E48]" />,
    title: "Body",
    bullets: ["Physical vitality", "Pain relief", "Hormonal balance"],
  },
  {
    icon: <FaDove className="text-3xl text-[#524E48]" />,
    title: "Spirit",
    bullets: ["Intuition", "Purpose", "Self-trust"],
  },
];

export default function BenefitsOfHealing() {
  return (
    <section className="py-24 bg-[#F5F2EE] text-[#524E48] px-6 sm:px-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
            Benefits
          </p>
          <h2 className="font-serif text-[2.4rem] leading-tight">
            How healing reshapes your ecosystem
          </h2>
          <p className="text-base text-[#524E48]/75">
            The sessions read like a luxury spa ritual—soft, sensory, quietly transformational.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column, index) => (
            <motion.article
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-[#EAE4DC] bg-white p-6 flex flex-col gap-4 shadow-[0_18px_45px_rgba(82,78,72,0.08)]"
            >
              <div className="w-16 h-16 rounded-full bg-[#EAE4DC] flex items-center justify-center">
                {column.icon}
              </div>
              <h3 className="font-serif text-xl">{column.title}</h3>
              <ul className="text-sm leading-relaxed text-[#524E48]/75 space-y-1">
                {column.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
