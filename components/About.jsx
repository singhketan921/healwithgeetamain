'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const aboutImg = "/assets/images/about.jpg";

export default function About() {
  const [backgroundStars] = useState(() =>
    Array.from({ length: 20 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }))
  );

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Subtle background stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundStars.map((star, index) => (
          <span
            key={index}
            className="absolute block h-[3px] w-[3px] rounded-full bg-white opacity-70 animate-twinkle-glow"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.2rem] font-serif font-semibold text-charcoal mb-6">
            About HealWithGeeta
          </h2>

          <p className="text-charcoal/90 leading-relaxed text-[1.05rem] sm:text-lg mb-10">
            With over 15 years of dedicated practice in Vedic sciences, I have guided hundreds of souls on their journey
            to self-discovery and healing. My expertise spans across ancient astrological wisdom, intuitive tarot reading,
            and various energy healing modalities.
          </p>

          {/* Feature Cards */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            {/* Card 1 */}
            <div className="flex-1 bg-[#DCE4CF] rounded-xl px-6 py-5 shadow-sm relative overflow-hidden">
              <div className="absolute right-4 top-3 text-white/70 text-xl">*</div>
              <h4 className="text-charcoal font-semibold mb-1">Certified Master</h4>
              <p className="text-charcoal/80 text-sm leading-snug">
                Advanced certifications in Vedic Astrology, Tarot, and Energy Healing
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-[#E6D6BD] rounded-xl px-6 py-5 shadow-sm relative overflow-hidden">
              <div className="absolute right-4 top-3 text-white/70 text-xl">*</div>
              <h4 className="text-charcoal font-semibold mb-1">Global Community</h4>
              <p className="text-charcoal/80 text-sm leading-snug">
                Serving clients worldwide with personalized spiritual guidance
              </p>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-center text-charcoal font-serif text-xl sm:text-2xl font-medium gap-4 sm:gap-0">
            <p>10+ years experience</p>
            <p>5000+ consultations</p>
            <p>1:1 & online sessions</p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-[450px] aspect-square bg-[#F4F3F1] rounded-2xl flex items-center justify-center overflow-hidden shadow-md">
            <img
              src={aboutImg}
              alt="Healing with Geeta"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F4F3F1]/10"></div>
            <div className="absolute text-2xl text-white opacity-60 animate-pulse">*</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





