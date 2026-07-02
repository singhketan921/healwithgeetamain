"use client";

import Link from "next/link";
import { PiFlowerLotus, PiLeaf, PiPlayCircle, PiSealCheck, PiSun } from "react-icons/pi";

const topics = [
  { label: "Spiritual Guidance", icon: PiFlowerLotus },
  { label: "Healing Talks", icon: PiLeaf },
  { label: "Course Insights", icon: PiSealCheck },
  { label: "Weekly Wisdom", icon: PiSun },
];

export default function YouTubeCommunity() {
  return (
    <section className="youtube-community" aria-label="Join our YouTube community">
      <div className="youtube-community__content">
        <div className="youtube-community__top-mark" aria-hidden="true">
          <img src="/assets/navicon.png" alt="" />
        </div>

        <p className="youtube-community__eyebrow">Connect Beyond The Website</p>

        <div className="youtube-community__small-divider" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <h2>
          Join Our
          <br />
          <strong>YouTube Community</strong>
        </h2>

        <div className="youtube-community__divider" aria-hidden="true">
          <span />
          <img src="/assets/navicon.png" alt="" />
          <span />
        </div>

        <p className="youtube-community__copy">
          Watch spiritual insights, healing wisdom,
          <br />
          guided learning, and transformative
          <br />
          conversations-anytime, anywhere.
        </p>

        <Link href="https://www.youtube.com/" className="youtube-community__cta" target="_blank">
          <img src="/assets/navicon.png" alt="" />
          <span>Explore The Channel</span>
          <span aria-hidden="true">→</span>
        </Link>

        <p className="youtube-community__note">
          <PiPlayCircle aria-hidden="true" />
          <span>New videos, guidance, and inspiration every week.</span>
        </p>

        <div className="youtube-community__topics" aria-label="Channel topics">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <span key={topic.label}>
                <Icon aria-hidden="true" />
                {topic.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
