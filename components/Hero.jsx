"use client";

export default function Hero() {
  return (
    <section className="home-hero" aria-label="Faith Healers introduction">
      <div className="home-hero__glow" aria-hidden="true" />
      <img
        src="/assets/images/bgFlower.png"
        alt=""
        width="552"
        height="520"
        className="home-hero__flower"
      />
      <img
        src="/assets/images/hero 1 final.png"
        alt="Geeta holding a glowing crystal beside a microphone"
        width="2048"
        height="1138"
        className="home-hero__figure"
      />
      <div className="home-hero__content">
        <div className="home-hero__copy">
          <h1 className="home-hero__title">
            <span>Where <em>Healing</em></span>
            <span>Meets <em>Alignment</em></span>
          </h1>
        </div>
      </div>
    </section>
  );
}
