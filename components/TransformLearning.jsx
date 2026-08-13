"use client";

import Link from "next/link";

export default function TransformLearning() {
  return (
    <section className="transform-learning" aria-label="Transform through learning">
      <div className="transform-learning__visual" aria-hidden="true">
        <img src="/assets/images/HeroSection Image faithhealers.png" alt="" />
      </div>

      <div className="transform-learning__content">
        <img src="/assets/navicon.png" alt="" className="transform-learning__lotus" />

        <p className="transform-learning__eyebrow">
          <span />
          Transform Through Learning
          <span />
        </p>

        <h2>
          Awaken the
          <br />
          <strong>Leader</strong> Within
        </h2>

        <div className="transform-learning__divider" aria-hidden="true">
          <span />
          <img src="/assets/navicon.png" alt="" />
          <span />
        </div>

        <p className="transform-learning__copy">
          Learn how to co-create your destiny
          <br />
          with spiritual practices for abundance,
          <br />
          peace and prosperity.
        </p>

        <Link href="/courses" className="transform-learning__cta">
          <img src="/assets/navicon.png" alt="" />
          <span>Explore Courses</span>
        </Link>
      </div>
    </section>
  );
}
