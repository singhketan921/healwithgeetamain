"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: "guidance",
    label: "Spiritual guidance",
  },
  {
    id: "healing",
    label: "Healing and alignment",
  },
  {
    id: "learning",
    label: "Learning and growth",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="home-hero" aria-label="Geeta Sharma introduction">
      <div
        className={`home-hero__slide home-hero__slide--guidance ${
          activeSlide === 0 ? "is-active" : ""
        }`}
        aria-hidden={activeSlide !== 0}
      >
        <img
          src="/assets/geeta-hero-cutout.png"
          alt=""
          width="1448"
          height="1086"
          className="home-hero__figure"
        />
        <div className="home-hero__content">
          <div className="home-hero__copy">
            <h1 className="home-hero__title">
              <span>When You&apos;re Lost</span>
              <span>Between Questions</span>
              <span>and Answers,</span>
              <strong>Let Guidance</strong>
              <strong>Light the Way.</strong>
            </h1>
            <p className="home-hero__eyebrow">
              Through Astrology, Face Reading, Tarot, Numerology.
            </p>
            <div className="home-hero__divider" aria-hidden="true">
              <span />
              <img src="/assets/navicon.png" alt="" />
              <span />
            </div>
            <p className="home-hero__description">
              Discover clarity, healing, and transformation with ancient wisdom and intuitive insight.
            </p>
            <Link href="/consultations" className="home-hero__cta">
              <img src="/assets/navicon.png" alt="" />
              <span>Consultation</span>
              <span className="home-hero__cta-arrow" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`home-hero__slide home-hero__slide--healing ${
          activeSlide === 1 ? "is-active" : ""
        }`}
        aria-hidden={activeSlide !== 1}
      >
        <img
          src="/assets/geeta/healing-session-cutout.png"
          alt=""
          width="1448"
          height="1086"
          className="home-hero__figure home-hero__figure--healing"
        />
        <div className="home-hero__content">
          <div className="home-hero__copy">
            <h2 className="home-hero__title home-hero__title--healing">
              <strong>Healing</strong>
              <span>Happens When</span>
              <span>Everything Within You</span>
              <span>Comes Into Alignment.</span>
            </h2>
            <div className="home-hero__divider" aria-hidden="true">
              <span />
              <img src="/assets/navicon.png" alt="" />
              <span />
            </div>
            <p className="home-hero__description">
              Awaken your inner harmony. Align your mind, body, and spirit for a life of clarity, purpose, and profound well-being.
            </p>
            <Link href="/healings" className="home-hero__cta">
              <img src="/assets/navicon.png" alt="" />
              <span>Let&apos;s Heal</span>
              <span className="home-hero__cta-arrow" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`home-hero__slide home-hero__slide--learning ${
          activeSlide === 2 ? "is-active" : ""
        }`}
        aria-hidden={activeSlide !== 2}
      >
        <img
          src="/assets/geeta/learning-session-cutout.png"
          alt=""
          width="1535"
          height="1024"
          className="home-hero__figure home-hero__figure--learning"
        />
        <div className="home-hero__content">
          <div className="home-hero__copy home-hero__copy--learning">
            <h2 className="home-hero__title home-hero__title--learning">
              <span>The More You Learn,</span>
              <span>The More You Grow.</span>
            </h2>
            <div className="home-hero__divider" aria-hidden="true">
              <span />
              <img src="/assets/navicon.png" alt="" />
              <span />
            </div>
            <p className="home-hero__description">
              Expand your awareness through soulful learning. Discover practical wisdom that nurtures clarity, confidence, and conscious growth.
            </p>
            <div className="home-hero__learning-card">
              <img src="/assets/navicon.png" alt="" aria-hidden="true" />
              <p>Let&apos;s Learn</p>
              <Link href="/courses" className="home-hero__cta">
                <span>Let&apos;s Learn</span>
                <span className="home-hero__cta-arrow" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-hero__pagination" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={activeSlide === index ? "is-active" : ""}
            aria-label={`Show ${slide.label} slide`}
            aria-current={activeSlide === index ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
