"use client";

const chips = ["Growth", "Harmony", "Resilience"];

export default function GuidancePanel() {
  return (
    <section className="guidance-panel" aria-label="Spiritual guidance">
      <div className="guidance-panel__media" aria-hidden="true" />
      <div className="guidance-panel__wash" aria-hidden="true" />
      <div className="guidance-panel__grain" aria-hidden="true" />
      <div className="guidance-panel__lotus guidance-panel__lotus--left" aria-hidden="true" />
      <div className="guidance-panel__lotus guidance-panel__lotus--right" aria-hidden="true" />

      <div className="guidance-panel__content">
        <a className="guidance-panel__explore" href="#spiritual-guide" aria-label="Explore more services">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <defs>
              <path
                id="guidance-explore-path"
                d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"
              />
            </defs>
            <text>
              <textPath href="#guidance-explore-path" startOffset="4%">
                Explore More • Explore More •
              </textPath>
            </text>
          </svg>
          <span>→</span>
          <img src="/assets/navicon.png" alt="" />
        </a>

        <div className="guidance-panel__chips">
          {chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>

        <h2>Spiritual guidance that brings balance and clarity.</h2>

        <div className="guidance-panel__divider" aria-hidden="true">
          <span />
          <img src="/assets/navicon.png" alt="" />
          <span />
        </div>

        <p>
          Rooted in wisdom, healing, and transformation for every stage of your journey.
        </p>
      </div>
    </section>
  );
}
