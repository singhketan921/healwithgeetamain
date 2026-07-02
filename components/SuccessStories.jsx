"use client";

import { PiHandsPraying, PiHeart, PiShieldCheck, PiSparkle } from "react-icons/pi";

const smallStories = [
  {
    image: "/assets/images/story-arjun.png",
    quote: "I found clarity in my purpose and direction in life.",
    name: "Arjun K.",
    role: "Entrepreneur",
  },
  {
    image: "/assets/images/story-meera.png",
    quote: "The meditations brought me back to myself.",
    name: "Pooja M.",
    role: "Seeker",
  },
  {
    image: "/assets/images/story-ritika.png",
    quote: "A journey that healed my heart and transformed my life.",
    name: "Ritika A.",
    role: "Student",
  },
  {
    image: "/assets/images/story-nikhil.png",
    quote: "I now handle challenges with calm and confidence.",
    name: "Nikhil R.",
    role: "Student",
  },
];

const proofItems = [
  { label: "Real People\nReal Experiences", icon: PiHandsPraying },
  { label: "Guided by\nAncient Wisdom", icon: PiSparkle },
  { label: "Backed by\nLasting Results", icon: PiHeart },
  { label: "A Safe Space for\nHealing & Growth", icon: PiShieldCheck },
];

function PlayButton() {
  return (
    <span className="success-stories__play" aria-hidden="true">
      <span />
    </span>
  );
}

export default function SuccessStories() {
  return (
    <section className="success-stories" aria-label="Success stories">
      <div className="success-stories__bg success-stories__bg--left" aria-hidden="true" />
      <div className="success-stories__bg success-stories__bg--right" aria-hidden="true" />

      <header className="success-stories__header">
        <p>Voices of Transformation</p>
        <h2>Success Stories</h2>
        <div className="success-stories__divider" aria-hidden="true">
          <span />
          <img src="/assets/navicon.png" alt="" />
          <span />
        </div>
        <p>Real journeys. Deep healing. Lasting transformation.</p>
      </header>

      <div className="success-stories__grid">
        <article className="story-feature">
          <div className="story-feature__badge">
            <img src="/assets/navicon.png" alt="" />
            <span>Featured<br />Story</span>
          </div>
          <div className="story-feature__media">
            <img src="/assets/images/story-meera.png" alt="" />
            <PlayButton />
          </div>
          <div className="story-feature__copy">
            <div className="story-feature__quote-mark">“</div>
            <h3>
              From Anxiety to Inner Peace
              <br />
              A New Way of Living
            </h3>
            <p>
              “The practices and guidance I received helped me release years of fear
              and self-doubt. Today, I live with clarity, gratitude, and a deep sense of
              purpose.”
            </p>
            <div className="story-feature__footer">
              <span className="story-person">
                <img src="/assets/images/story-meera.png" alt="" />
                <span>
                  <strong>Meera S.</strong>
                  <em>Student</em>
                </span>
              </span>
              <span className="story-stars">
                <strong>★★★★★</strong>
                <em>Life-changing experience</em>
              </span>
            </div>
          </div>
        </article>

        <div className="success-stories__cards">
          {smallStories.map((story) => (
            <article className="story-card" key={`${story.name}-${story.quote}`}>
              <div className="story-card__media">
                <img src={story.image} alt="" />
                <PlayButton />
              </div>
              <div className="story-card__body">
                <span className="story-card__quote">“</span>
                <p>“{story.quote}”</p>
                <span className="story-person story-person--small">
                  <img src={story.image} alt="" />
                  <span>
                    <strong>{story.name}</strong>
                    <em>{story.role}</em>
                  </span>
                </span>
              </div>
            </article>
          ))}

          <article className="story-impact">
            <img src="/assets/navicon.png" alt="" />
            <div className="story-impact__stars">★★★★★</div>
            <strong>10,000+</strong>
            <p>lives touched. Countless hearts transformed.</p>
            <span />
            <small>Trusted by 10,000+ students & seekers</small>
            <div className="story-impact__avatars">
              <img src="/assets/images/story-meera.png" alt="" />
              <img src="/assets/images/story-arjun.png" alt="" />
              <img src="/assets/images/story-ritika.png" alt="" />
              <img src="/assets/images/story-nikhil.png" alt="" />
              <b>10K+</b>
            </div>
          </article>
        </div>
      </div>

      <div className="success-stories__proof">
        {proofItems.map((item) => {
          const Icon = item.icon;
          const [first, second] = item.label.split("\n");

          return (
            <div className="success-stories__proof-item" key={item.label}>
              <Icon aria-hidden="true" />
              <span>
                <strong>{first}</strong>
                <strong>{second}</strong>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
