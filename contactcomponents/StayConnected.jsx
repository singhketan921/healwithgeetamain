'use client';

import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function StayConnected() {
  return (
    <section className="bg-[#FDFCF8] border-t border-[#E8E6DA] py-20 px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1E1E1E] mb-4">
          Stay Connected
        </h2>

        {/* Subtext */}
        <p className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg">
          Follow <span className="font-medium text-[#1E1E1E]">HealWithGeeta</span> on
          social media for daily wisdom, astrology insights, and healing practices.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#E8D48A] hover:bg-[#DFC765] transition rounded-full p-3"
            aria-label="YouTube"
          >
            <FaYoutube className="text-[#1E1E1E] text-xl" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#E8D48A] hover:bg-[#DFC765] transition rounded-full p-3"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[#1E1E1E] text-xl" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#E8D48A] hover:bg-[#DFC765] transition rounded-full p-3"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-[#1E1E1E] text-xl" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#E8D48A] hover:bg-[#DFC765] transition rounded-full p-3"
            aria-label="Twitter / X"
          >
            <FaXTwitter className="text-[#1E1E1E] text-xl" />
          </a>
        </div>

        {/* Follow Button */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#A8B963] hover:bg-[#9CAF5C] text-white font-medium text-lg px-10 py-3 rounded-full transition shadow-sm"
        >
          Follow Us
        </a>
      </motion.div>
    </section>
  );
}
