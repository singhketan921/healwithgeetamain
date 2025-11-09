'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#F2D7A2";
const OVERLAY_LIGHT = "#FCEFD6";
const OVERLAY_DARK = "#F3DBB0";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center w-full min-h-screen px-6 py-20 sm:px-10 bg-[#FFFBF4]">
      <div className="absolute inset-0 pointer-events-none">
        <span
          className="absolute -left-14 top-16 w-48 h-48 rounded-full blur-[130px] opacity-70"
          style={{ backgroundColor: OVERLAY_LIGHT }}
        />
        <span
          className="absolute right-0 bottom-8 w-64 h-64 rounded-full blur-[140px] opacity-60"
          style={{ backgroundColor: OVERLAY_DARK }}
        />
      </div>
      <div className="flex flex-col-reverse items-center justify-between w-full gap-10 mx-auto md:flex-row max-w-7xl md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[750px] text-left"
        >
          <h1 className="font-serif text-[2.6rem] sm:text-[4rem] md:text-[4.4rem] font-semibold leading-tight mb-6 text-[#1B1B1B]">
            Spiritual Tools for{" "}
            <span className="text-[#C9A856] font-bold">Transformation</span>
          </h1>
          <p className="text-[#333333] text-[1rem] sm:text-[1.2rem] leading-relaxed mb-8 sm:mb-10">
            Explore crystals, candles, ritual kits, and ceremonial tools that
            blend ancient wisdom with modern intention. Every product listed
            below is pulled directly from our Shopify storefront so you can shop
            with confidence.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="#products"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full border text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#F2D7A2]/15"
              style={{ borderColor: ACCENT }}
            >
              Browse Collection
            </Link>
            <Link
              href="#products"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 shadow-[0_3px_6px_rgba(0,0,0,0.08)]"
              style={{ backgroundColor: ACCENT }}
            >
              Visit Store
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden sm:block w-full md:w-[460px] lg:w-[500px] h-[380px] lg:h-[420px] rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] overflow-hidden bg-white"
        >
          <Image
            src="/assets/images/gems.png"
            alt="Curated collection of crystals"
            width={500}
            height={420}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
