"use client";

export default function Hero() {
  return (
    <section className="hero-section hero-bg w-full">
      <div className="hero-main w-full">
        <div className="hero-content mx-auto w-full max-w-[1200px] pt-6 lg:pt-10">
          <div className="hero-stack">
            <div className="hero-card">
              <h1 className="hero-title">
                Where Healing
                <br />
                Meets Alignment
              </h1>
              <p className="hero-subtitle">
                Astrology, healing, and guidance to align and uplift you.
              </p>
            </div>
            <div className="hero-figure">
              <img
                src="/assets/images/HeroImg.png"
                alt="Geeta holding a glowing crystal"
                width="1024"
                height="878"
                className="hero-image"
              />
            </div>
            <img
              src="/assets/images/hero 2.png"
              alt=""
              width="6048"
              height="3268"
              className="hero-image-secondary"
            />
          </div>
          <div className="hero-bottom">
            <div className="hero-bottom-card">
              <img
                src="/assets/images/HeroBottomBox1.png"
                alt=""
                width="437"
                height="228"
                className="hero-bottom-bg"
              />
              <div className="hero-bottom-text">
                <span className="hero-bottom-title">Chakra Balance</span>
                <span className="hero-bottom-subtitle">Align energy Heal emotions</span>
              </div>
            </div>
            <div className="hero-bottom-card">
              <img
                src="/assets/images/HeroBottomBox2.png"
                alt=""
                width="437"
                height="228"
                className="hero-bottom-bg"
              />
              <div className="hero-bottom-text">
                <span className="hero-bottom-title">Astro Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
