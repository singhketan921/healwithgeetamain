"use client";

export default function Hero() {
  return (
    <section className="home-hero" aria-label="Geeta Sharma introduction">
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
          <a href="/consultations" className="home-hero__cta">
            <img src="/assets/navicon.png" alt="" />
            <span>Consultation</span>
            <span className="home-hero__cta-arrow" aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
