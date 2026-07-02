"use client";

import { FcGoogle } from "react-icons/fc";
import {
  PiFlowerLotusLight,
  PiShieldStarLight,
  PiUsersThreeLight,
} from "react-icons/pi";

const marqueeItems = [
  {
    icon: PiUsersThreeLight,
    lines: ["Trusted by 10,000+", "Happy Clients"],
  },
  {
    icon: FcGoogle,
    lines: ["4.9/5 Rating on", "Google"],
    google: true,
  },
  {
    icon: PiFlowerLotusLight,
    lines: ["Transforming Lives", "Naturally"],
  },
  {
    icon: PiShieldStarLight,
    lines: ["20+ Years of", "Healing Excellence"],
  },
];

export default function TrustMarquee() {
  const loopItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="trust-marquee" aria-label="Faith Healers highlights">
      <div className="trust-marquee__track" aria-hidden="true">
        {loopItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="trust-marquee__group" key={`${item.lines[0]}-${index}`}>
              <div className="trust-marquee__item">
                <span
                  className={`trust-marquee__icon ${
                    item.google ? "trust-marquee__icon--google" : ""
                  }`}
                >
                  <Icon aria-hidden="true" />
                </span>
                <span className="trust-marquee__text">
                  <span>{item.lines[0]}</span>
                  <span>{item.lines[1]}</span>
                </span>
              </div>
              <span className="trust-marquee__spark" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
