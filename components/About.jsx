"use client";

export default function About() {
  return (
    <section className="guide-section">
      <div className="guide-inner">
        <div className="guide-card">
          <div className="guide-crest" aria-hidden="true" />
          <div className="guide-copy">
            <h2 className="guide-title">Where Healers Become Leaders</h2>
            <p className="guide-lead">
              Geeta Sharma is not only an energy healer.
              <br />
              She is a teacher who helps students experience Reiki deeply.
            </p>
            <p className="guide-paragraph">
              She believes in teaching Reiki in its traditional way and draws personal
              satisfaction when students assimilate the essentials of Reiki healing.
            </p>
            <p className="guide-paragraph">Today, many of those souls are:</p>
            <ul className="guide-list">
              <li>Making Reiki a way of life</li>
              <li>Learning meditation through customized classes</li>
              <li>Practicing healing with clearer energy awareness</li>
              <li>Growing through online and centre-based guidance</li>
            </ul>
            <p className="guide-paragraph">This is not taught in a commercial way.</p>
            <p className="guide-paragraph">
              This is about understanding the connection between mind, body and soul,
              and using spiritual practices with an open heart and mind.
            </p>
            <p className="guide-paragraph">I walk with you until:</p>
            <ul className="guide-list">
              <li>Your energy channels feel more open</li>
              <li>Your meditation practice becomes steadier</li>
              <li>Your understanding of Reiki becomes practical</li>
              <li>Your healing journey becomes part of daily life.</li>
            </ul>
            <p className="guide-paragraph guide-final">
              Her classes are customized to the needs of the students in the group.
            </p>
          </div>
          <div className="guide-figure">
            <img
              src="/assets/images/HeroImg.webp"
              alt="Geeta holding a glowing crystal"
              width="1024"
              height="878"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
