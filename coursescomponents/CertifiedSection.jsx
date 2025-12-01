'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function CertifiedSection() {
  return (
    <section className="px-6 py-24 bg-[#524E48] text-[#EAE4DC] sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
            Flagship Program
          </p>
          <h2 className="font-serif text-[2.6rem] leading-tight">
            Certified Master in Vedic Sciences
          </h2>
          <p className="text-base text-[#EAE4DC]/85">
            A six-month atelier blending astrology, intuitive coaching, and energy healing. Graduates receive an official accreditation and join our private guild.
          </p>
          <ul className="space-y-2">
            {[
              "Live salons & practicum labs",
              "Printed manuals + video archive",
              "Portfolio review + certification",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#EAE4DC]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/courses#form"
            className="inline-flex px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] border border-[#EAE4DC] rounded-full hover:bg-[#EAE4DC] hover:text-[#524E48] transition"
          >
            Enroll Now
          </Link>
        </div>

        <div className="rounded-[32px] overflow-hidden border border-[#B0AAA0]/40 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
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
