'use client';

import { motion } from "framer-motion";
import { FaBrain, FaHeart, FaDove } from "react-icons/fa";

const columns = [
  {
    icon: <FaBrain className="text-3xl text-[#6b625a]" />,
    title: "Mind",
    bullets: ["Stress relief", "Mental clarity", "Emotional calm"],
  },
  {
    icon: <FaHeart className="text-3xl text-[#6b625a]" />,
    title: "Body",
    bullets: ["Physical vitality", "Pain relief", "Hormonal balance"],
  },
  {
    icon: <FaDove className="text-3xl text-[#6b625a]" />,
    title: "Spirit",
    bullets: ["Intuition", "Purpose", "Self-trust"],
  },
];

export default function BenefitsOfHealing() {
  return (
    <section className="py-24 bg-[#EEECE9] text-[#6b625a] px-6 sm:px-10">
      <div className="mx-auto max-w-[1200px] space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
            Benefits
          </p>
          <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
            How healing reshapes your ecosystem
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
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
              className="rounded-[16px] border border-[#e7dfd6] bg-white p-6 flex flex-col gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            >
              <div className="w-16 h-16 rounded-full bg-[#e2dbd2] flex items-center justify-center">
                {column.icon}
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold">{column.title}</h3>
              <ul className="text-[14px] leading-[1.7] text-[#7a736c] space-y-1">
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
