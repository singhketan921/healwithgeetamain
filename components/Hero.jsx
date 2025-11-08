'use client';

import { useEffect, useRef, useState } from "react";

const mandala = "/assets/images/mandala.png";
const lady = "/assets/images/lady.png";
const stones = "/assets/images/stones.png";

export default function Hero() {
  const sectionRef = useRef(null);
  const mandalaRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [twinklingStars] = useState(() =>
    Array.from({ length: 35 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 8 + 4,
      opacity: Math.random() * 0.8 + 0.4,
      depth: (Math.random() * 2 + 1).toFixed(2),
      delay: Math.random() * 3,
    }))
  );

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Parallax scroll for lady and stones
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor parallax for mandala + stars
  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 200;
      targetY = (e.clientY / innerHeight - 0.5) * 200;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (mandalaRef.current) {
        mandalaRef.current.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${(currentX + currentY) / 10}deg) scale(1.02)`;
      }

      document.querySelectorAll(".twinkle-star, .sparkle").forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-depth")) || 1.5;
        el.style.transform = `translate(${currentX / (depth * 0.6)}px, ${currentY / (depth * 0.6)}px)`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center min-h-screen overflow-hidden isolate bg-hero-gradient"
    >
      {/* Golden overlay */}
      <div className="absolute inset-0 bg-[#E8D8A8]/10 pointer-events-none" />

      {/* Animated mandala */}
      <div
        ref={mandalaRef}
        className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out pointer-events-none opacity-30"
      >
        <img
          src={mandala}
          alt="Mandala background"
          className="w-[1300px] sm:w-[1200px] lg:w-[1300px] animate-slow-spin select-none 
          -translate-y-32 sm:-translate-y-44 lg:-translate-y-72
          max-sm:w-[1600px] max-sm:-translate-y-10"
        />
      </div>

      {/* Soft glows */}
      <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-gold-light/35 blur-[120px]" />
      <div className="absolute -right-24 bottom-6 h-72 w-72 rounded-full bg-[#A1A071]/25 blur-[120px]" />

      {/* Twinkling stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {twinklingStars.map((star, i) => (
          <span
            key={i}
            className="absolute block bg-white rounded-full twinkle-star animate-twinkle-glow"
            data-depth={star.depth}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9))",
            }}
          ></span>
        ))}
      </div>

      {/* Main content */}
      <div
        className={`relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-35 xl:px-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Left content */}
        <div className="relative z-10 flex flex-col order-2 gap-8 mt-10 text-center md:gap-10 lg:order-1 lg:text-left sm:mt-12 md:mt-20 lg:mt-28">
          <h1
            className="font-serif font-bold text-[#C5A35C] drop-shadow-inner-gold
            text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.5rem]
            leading-[1.05] tracking-tight text-center lg:text-left"
          >
            Discover <span className="whitespace-nowrap">Your Divine Path</span>
          </h1>

          {/* ðŸ“± Smaller subtext for mobile */}
          <p className="max-w-2xl mx-auto font-sans leading-relaxed text-charcoal/90 
          text-[0.9rem] sm:text-lg sm:leading-8 lg:mx-0 lg:text-l">
            Unlock the ancient wisdom of Vedic sciences through personalized
            astrology, tarot readings, and transformative healing practices
            guided by centuries-old traditions.
          </p>

          {/* Buttons - ðŸ“± smaller & side-by-side on mobile */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:gap-5 lg:justify-start">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-[#ACBF69] px-6 py-2 text-base font-medium text-[#ACBF69] 
              hover:bg-[#ACBF69] hover:text-white hover:shadow-halo sm:px-10 sm:py-4 sm:text-lg"
            >
              More Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ACBF69] px-6 py-2 text-base font-medium text-white 
              hover:bg-[#9CAD5B] hover:shadow-halo sm:px-10 sm:py-4 sm:text-lg"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Right visuals - hidden on mobile */}
        <div
          className={`order-1 hidden sm:flex justify-center lg:order-2 relative z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative mx-auto flex max-w-[700px] sm:max-w-[820px] md:max-w-[950px] items-center justify-center">
            {/* Aura */}
            <div className="absolute inset-0 flex items-center justify-center animate-pulse-glow">
              <div className="h-[620px] w-[620px] sm:h-[700px] sm:w-[700px] rounded-full bg-[#A1A071]/35 blur-[140px]" />
            </div>

            <img
              src={lady}
              alt="Divine feminine silhouette"
              loading="lazy"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: "transform 0.2s ease-out",
              }}
              className="relative w-72 sm:w-80 md:w-[25rem] lg:w-[28rem] xl:w-[30rem] drop-shadow-2xl"
            />

            <img
              src={stones}
              alt="Healing crystals"
              loading="lazy"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                transition: "transform 0.2s ease-out",
              }}
              className="absolute -bottom-10 left-1/2 w-[26rem] sm:w-[30rem] md:w-[34rem] lg:w-[36rem] -translate-x-1/2 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




