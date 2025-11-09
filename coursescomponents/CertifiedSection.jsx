'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function CertifiedSection() {
  return (
    <section className="px-6 py-20 bg-white sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2"
      >
        {/* Left Side - Image */}
        <div className="bg-gray-100 h-[300px] sm:h-[360px] rounded-2xl shadow-inner">
          <Image
                      src="/assets/images/certifiedasset.png"
                      alt="Guide providing personalized consultation"
                      width={500}
                      height={420}
                      className="object-cover w-full h-full"
                      priority
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="font-serif text-[2rem] sm:text-[2.4rem] font-semibold text-charcoal mb-4">
            Certified Master in Vedic Sciences
          </h2>

          <p className="max-w-lg mb-6 text-base text-gray-700 sm:text-lg">
            Our flagship comprehensive program combining astrology, energy
            healing, and spiritual guidance.
          </p>

          <ul className="mb-8 space-y-3">
            {[
              "Live Sessions",
              "Downloadable Course Material",
              "Certification Upon Completion",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-[#DCC478] mr-3 text-lg" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/courses#form"
            className="inline-flex bg-[#ACBF69] text-white px-10 py-3 rounded-full font-medium hover:bg-[#9EB35C] transition"
          >
            Enroll Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
