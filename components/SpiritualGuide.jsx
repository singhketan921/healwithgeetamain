"use client";

import {
  GiCompass,
  GiLotus,
  GiMeditation,
  GiOpenBook,
  GiSparkles,
} from "react-icons/gi";

const guideServices = [
  { label: "Divine Learning", icon: GiOpenBook },
  { label: "Spiritual Analysis", icon: GiLotus },
  { label: "Consultations", icon: GiSparkles },
  { label: "Healing & Guidance", icon: GiMeditation },
  { label: "Life Alignment", icon: GiCompass },
];

export default function SpiritualGuide() {
  return (
    <section className="spiritual-guide" aria-label="Meet the spiritual guide">
      <div className="spiritual-guide__main">
        <div className="spiritual-guide__copy">
          <div className="spiritual-guide__lotus-mark" aria-hidden="true">
            <span />
            <img src="/assets/navicon.webp" alt="" />
            <span />
          </div>

          <p className="spiritual-guide__eyebrow">Meet The</p>
          <h2>
            Spiritual
            <br />
            Guide
          </h2>

          <div className="spiritual-guide__divider" aria-hidden="true">
            <span />
            <img src="/assets/navicon.webp" alt="" />
            <span />
          </div>

          <p className="spiritual-guide__body">
            Geeta Sharma is the founder of FaithHealers, a Reiki Grandmaster teacher,
            meditation expert, astrologer, numerologist and tarot card reader with more
            than 20 years of experience. Her work combines different occult science
            modalities to create healing experiences for mind, body and soul.
          </p>
        </div>

        <div className="spiritual-guide__portrait-wrap" aria-hidden="true">
          <img
            src="/assets/images/spiritual-guide-geeta-sharma.webp"
            alt=""
            className="spiritual-guide__portrait"
          />
        </div>
      </div>

      <div className="spiritual-guide__services">
        {guideServices.map((service) => {
          const Icon = service.icon;

          return (
            <div className="spiritual-guide__service" key={service.label}>
              <span className="spiritual-guide__service-icon">
                <Icon aria-hidden="true" />
              </span>
              <span>{service.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
