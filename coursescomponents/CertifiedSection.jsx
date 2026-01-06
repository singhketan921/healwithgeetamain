'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function CertifiedSection() {
  return (
    <section className="px-6 py-24 bg-[#EEECE9] text-[#6b625a] sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid items-center max-w-[1200px] grid-cols-1 gap-12 mx-auto md:grid-cols-2"
      >
        <div className="space-y-4">
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
            Flagship Program
          </p>
          <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em] leading-tight">
            Certified Master in Vedic Sciences
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
            A six-month atelier blending astrology, intuitive coaching, and energy healing. Graduates receive an official accreditation and join our private guild.
          </p>
          <ul className="space-y-2">
            {[
              "Live salons & practicum labs",
              "Printed manuals + video archive",
              "Portfolio review + certification",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#6b625a]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/courses#form"
            className="rounded-[12px] bg-white px-8 py-3 text-[14px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
          >
            Enroll Now
          </Link>
        </div>

        <div className="rounded-[16px] overflow-hidden border border-[#e7dfd6] shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
          <Image
            src="/assets/images/certifiedasset.png"
            alt="Certified coursework"
            width={600}
            height={420}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
