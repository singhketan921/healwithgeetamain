'use client';

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function VisitOurSacredPlace() {
  return (
    <section className="bg-[#F8F7F1] py-20 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-5xl text-center text-[#1E1E1E] mb-14"
        >
          Visit Our Sacred Place
        </motion.h2>

        {/* Content Grid */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8837030282037!2d-86.80248998481135!3d33.52068288075259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891be8b3f6239f%3A0x9ad07e3f02e7ab23!2sBirmingham%2C%20AL!5e0!3m2!1sen!2sus!4v1695999439478!5m2!1sen!2sus"
              width="100%"
              height="350"
              className="border border-gray-200 rounded-lg shadow-sm"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 max-w-lg"
          >
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1E1E] mb-4">
              In Person Sessions Available
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">
              Experience the transformative power of our sacred space,
              designed to promote healing and spiritual growth. Our peaceful
              environment provides the perfect setting for deep healing
              sessions and spiritual consultations.
            </p>

            {/* List of Features */}
            <ul className="mb-8 space-y-3">
              {[
                "Private consultation rooms",
                "Meditation and healing spaces",
                "Sacred ceremony areas",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1E1E1E]">
                  <span className="text-[#C5A35C] text-lg">
                    <FaCheckCircle />
                  </span>
                  <span className="text-base sm:text-[15px] font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=HealWithGeeta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#E8D48A] hover:bg-[#DFC765] transition text-[#1E1E1E] font-medium px-8 py-3 rounded-full shadow-sm"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
