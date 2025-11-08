'use client';

import { motion } from "framer-motion";
import { FaBrain, FaHeart, FaDove } from "react-icons/fa";

export default function BenefitsOfHealing() {
  return (
    <section className="py-20 bg-[#FAF9F6] text-center px-6 sm:px-10">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-serif text-[2.3rem] sm:text-[2.8rem] font-semibold text-[#1B1B1B] mb-2">
          Benefits of Energy Healing
        </h2>
        <p className="text-base text-gray-700 sm:text-lg">
          Your journey to spiritual clarity in four simple steps
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto text-center sm:grid-cols-3">
        {/* Mind */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 flex items-center justify-center bg-[#E4C982] rounded-full mb-6">
            <FaBrain className="text-3xl text-[#1B1B1B]" />
          </div>
          <h3 className="text-lg font-semibold text-[#1B1B1B] mb-3">Mind</h3>
          <ul className="space-y-1 text-sm text-left text-gray-700 list-disc list-inside sm:text-center sm:list-none">
            <li>Stress relief and deep relaxation</li>
            <li>Mental clarity and focus</li>
            <li>Emotional balance and calm</li>
          </ul>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 flex items-center justify-center bg-[#E4C982] rounded-full mb-6">
            <FaHeart className="text-3xl text-[#1B1B1B]" />
          </div>
          <h3 className="text-lg font-semibold text-[#1B1B1B] mb-3">Body</h3>
          <ul className="space-y-1 text-sm text-left text-gray-700 list-disc list-inside sm:text-center sm:list-none">
            <li>Natural pain reduction</li>
            <li>Improved energy and vitality</li>
            <li>Enhanced physical well-being</li>
          </ul>
        </motion.div>

        {/* Spirit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 flex items-center justify-center bg-[#E4C982] rounded-full mb-6">
            <FaDove className="text-3xl text-[#1B1B1B]" />
          </div>
          <h3 className="text-lg font-semibold text-[#1B1B1B] mb-3">Spirit</h3>
          <ul className="space-y-1 text-sm text-left text-gray-700 list-disc list-inside sm:text-center sm:list-none">
            <li>Emotional release and healing</li>
            <li>Spiritual alignment and growth</li>
            <li>Connection with higher self</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
