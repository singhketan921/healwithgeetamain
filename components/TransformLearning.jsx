"use client";

import Link from "next/link";

export default function TransformLearning() {
  return (
    <section className="transform-learning" aria-label="Transform through learning">
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
          From homemaker to entrepreneur, discover
          <br />
          the confidence, clarity, and spiritual strength
          <br />
          to create a life of purpose.
        </p>

        <Link href="/courses" className="transform-learning__cta">
          <img src="/assets/navicon.png" alt="" />
          <span>Explore Courses</span>
        </Link>
      </div>
    </section>
  );
}
