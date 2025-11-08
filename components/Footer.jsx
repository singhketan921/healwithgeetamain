'use client';

import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const logo = "/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#232323] text-white py-14 px-6">
      <div className="grid grid-cols-1 gap-12 mx-auto text-center max-w-7xl sm:grid-cols-3 sm:text-left">
        {/* LOGO + DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start"
        >
          {/* Logo */}
          <div className="flex flex-col items-center mb-3 sm:items-start">
            <img
              src={logo}
              alt="HealWithGeeta Logo"
              className="object-contain w-20 h-auto mb-2"
            />
            <h2 className="mt-2 text-xl font-semibold text-white">
              HealWithGeeta
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-gray-300">
            Guiding souls on their spiritual journey through the timeless wisdom
            of Vedic sciences, astrology, and healing practices.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-6 sm:justify-start">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-200 hover:text-[#C5A35C] hover:border-[#C5A35C] transition"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-200 hover:text-[#C5A35C] hover:border-[#C5A35C] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-200 hover:text-[#C5A35C] hover:border-[#C5A35C] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-200 hover:text-[#C5A35C] hover:border-[#C5A35C] transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </motion.div>

        {/* SERVICES SECTION (Hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden space-y-3 sm:block"
        >
          <h3 className="mb-2 text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Consultations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Healings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Certificate Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* SUPPORT SECTION (Hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="hidden space-y-3 sm:block"
        >
          <h3 className="mb-2 text-lg font-semibold text-white">Support</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A35C] transition">
                Testimonials
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="pt-6 mt-12 text-sm text-center text-gray-400 border-t border-gray-700">
        &copy; {new Date().getFullYear()} HealWithGeeta. All rights reserved.
      </div>
    </footer>
  );
}





