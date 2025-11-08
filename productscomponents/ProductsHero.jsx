'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


export default function ProductsHero() {
  return (
    <section
      className="flex items-center justify-center w-full min-h-screen px-6 py-20 sm:px-10 "
      style={{
        backgroundImage:
          "radial-gradient(closest-side at 50% 50%, #FFFFFF 0%, #F1F0E3 100%)",
      }}
    >
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
            <span className="text-[#A8B963] font-bold">Transformation</span>
          </h1>
          <p className="text-[#333333] text-[1rem] sm:text-[1.2rem] leading-relaxed mb-8 sm:mb-10">
            Explore crystals, candles, ritual kits, and ceremonial tools that
            blend ancient wisdom with modern intention. Every product listed
            below is pulled directly from our Shopify storefront so you can
            shop with confidence.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-5">
            <Link
              href="#products"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full border border-[#A8B963] text-[#1B1B1B] font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#A8B963]/10"
            >
              Browse Collection
            </Link>
            <Link
              href="#products"
              className="px-6 py-2 sm:px-10 sm:py-3 rounded-full bg-[#A8B963] text-white font-medium text-[1rem] sm:text-[1.3rem] transition-all duration-300 hover:bg-[#99A855] shadow-[0_3px_6px_rgba(0,0,0,0.1)]"
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
          className="hidden sm:block w-full md:w-[460px] lg:w-[500px] h-[380px] lg:h-[420px] bg-[#EDEDE9] rounded-[6px] shadow-inner"
        ><Image
      src="/assets/images/gems.png"
      alt="Guide providing personalized consultation"
      width={500}
      height={420}
      className="object-cover w-full h-full"
      priority
    /></motion.div>
      </div>
    </section>
  );
}
