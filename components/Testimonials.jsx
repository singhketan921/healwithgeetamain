'use client';

import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

const fallbackTestimonials = [
  {
    id: "spotlight-1",
    name: "John Doe",
    role: "Software Engineer, New York",
    rating: 4.5,
    video: "/assets/videos/testimonial1.mp4",
  },
];

export default function Testimonials({ testimonials = [] }) {
  const controls = useAnimation();
  const marqueeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const items = useMemo(
    () => (testimonials.length ? testimonials : fallbackTestimonials),
    [testimonials]
  );

  useEffect(() => {
    const updateViewportFlag = () => setIsMobile(window.innerWidth < 640);
    updateViewportFlag();
    window.addEventListener("resize", updateViewportFlag);
    return () => window.removeEventListener("resize", updateViewportFlag);
  }, []);

  const startMarquee = useCallback(
    (speed = isMobile ? 120 : 85) => {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        },
      });
    },
    [controls, isMobile]
  );

  useEffect(() => {
    startMarquee();
  }, [startMarquee]);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      controls.stop();
    }
  }, [controls, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      startMarquee();
    }
  }, [isMobile, startMarquee]);

  const handleVideoPlay = useCallback(() => controls.stop(), [controls]);
  const handleVideoPause = useCallback(() => startMarquee(), [startMarquee]);

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="px-6 mx-auto text-center max-w-7xl sm:px-8">
        {/* Heading */}
        <h2 className="font-serif text-[2.6rem] sm:text-[3rem] font-semibold text-charcoal mb-3">
          Sacred Transformations
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-base text-charcoal/80 sm:text-lg">
          Discover how ancient wisdom has transformed the lives of our cherished
          community members.
        </p>

        {/* Marquee container */}
        <div
          className="relative w-screen overflow-hidden -translate-x-1/2 cursor-pointer left-1/2"
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex gap-8 w-max"
            animate={controls}
            initial={{ x: 0 }}
          >
            {[...items, ...items].map((t, i) => (
              <div
                key={`${t.id ?? i}-${i}`}
                className={`flex-none bg-[#E8DFC8] rounded-[20px] p-6 flex flex-col justify-between
                  ${
                    isMobile
                      ? "w-screen mx-3"
                      : "w-[460px] sm:w-[500px] md:w-[660px]"
                  }`}
              >
                {/* Video */}
                <div className="mb-6 overflow-hidden bg-gray-200 rounded-[16px]">
                  <video
                    src={t.video}
                    controls
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    className={`w-full object-cover rounded-[16px] ${
                      isMobile ? "h-[220px]" : "h-[260px] md:h-[280px]"
                    }`}
                  />
                </div>

                {/* User Info */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 text-2xl text-gray-500 bg-white rounded-full">
                    <span>*</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-semibold text-black">
                      {t.name}
                    </h4>
                    <p className="text-sm text-black/80">{t.role}</p>
                    <div className="flex items-center gap-1 mt-1 text-[#C5A35C]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfStroke />
                      <span className="ml-1 text-sm text-black/70">
                        {t.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
