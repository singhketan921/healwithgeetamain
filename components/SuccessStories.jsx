import { PiHandsPraying, PiHeart, PiShieldCheck, PiSparkle } from "react-icons/pi";

const fallbackStoryImages = [
  "/assets/images/story-arjun.png",
  "/assets/images/story-meera.png",
  "/assets/images/story-ritika.png",
  "/assets/images/story-nikhil.png",
];

const fallbackSmallStories = [
  {
    image: fallbackStoryImages[0],
    quote: "I found clarity in my purpose and direction in life.",
    name: "Arjun K.",
    role: "Entrepreneur",
  },
  {
    image: fallbackStoryImages[1],
    quote: "The meditations brought me back to myself.",
    name: "Pooja M.",
    role: "Seeker",
  },
  {
    image: fallbackStoryImages[2],
    quote: "A journey that healed my heart and transformed my life.",
    name: "Ritika A.",
    role: "Student",
  },
  {
    image: fallbackStoryImages[3],
    quote: "I now handle challenges with calm and confidence.",
    name: "Nikhil R.",
    role: "Student",
  },
];

const fallbackStoryVideos = [
  "https://www.youtube.com/watch?v=8VdXcf7Dke4",
  "https://www.youtube.com/watch?v=qODcx8MckdM",
  "https://www.youtube.com/watch?v=trNw4MSuNRg",
  "https://www.youtube.com/watch?v=g7ZnJU-_iYE",
];

const fallbackFeaturedStory = {
  image: "/assets/images/story-meera.png",
  title: "From Anxiety to Inner Peace\nA New Way of Living",
  quote:
    "The practices and guidance I received helped me release years of fear and self-doubt. Today, I live with clarity, gratitude, and a deep sense of purpose.",
  name: "Meera S.",
  role: "Student",
  ratingLabel: "Life-changing experience",
  videoUrl: fallbackStoryVideos[0],
};

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

function safeStoryImage(item, index) {
  if (item?.image && !item.image.includes("/newImages/")) {
    return item.image;
  }
  return fallbackStoryImages[index % fallbackStoryImages.length];
}

function normalizeStories(testimonials = []) {
  return testimonials.map((item, index) => ({
    image: safeStoryImage(item, index),
    title: item.title || item.headline || fallbackFeaturedStory.title,
    quote: item.quote || item.description || fallbackSmallStories[index % fallbackSmallStories.length].quote,
    name: item.name || fallbackSmallStories[index % fallbackSmallStories.length].name,
    role: item.role || item.category || fallbackSmallStories[index % fallbackSmallStories.length].role,
    ratingLabel: item.rating ? `${item.rating}/5 experience` : fallbackFeaturedStory.ratingLabel,
    videoUrl:
      item.youtubeUrl ||
      item.videoUrl ||
      item.mediaUrl ||
      item.url ||
      fallbackStoryVideos[index % fallbackStoryVideos.length],
  }));
}

export default function SuccessStories({ testimonials = [] }) {
  const dynamicStories = normalizeStories(testimonials);
  const featuredStory = dynamicStories[0] || fallbackFeaturedStory;
  const cardStories = [
    ...dynamicStories.slice(1, 5),
    ...fallbackSmallStories,
  ].slice(0, 4);

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
          <a
            className="story-feature__media"
            href={featuredStory.videoUrl || fallbackStoryVideos[0]}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${featuredStory.name || "featured story"} on YouTube`}
          >
            <img src={featuredStory.image} alt="" />
            <PlayButton />
          </a>
          <div className="story-feature__copy">
            <div className="story-feature__quote-mark">“</div>
            <h3>
              {featuredStory.title.split("\n").map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            <p>“{featuredStory.quote}”</p>
            <div className="story-feature__footer">
              <span className="story-person">
                <img src={featuredStory.image} alt="" />
                <span>
                  <strong>{featuredStory.name}</strong>
                  <em>{featuredStory.role}</em>
                </span>
              </span>
              <span className="story-stars">
                <strong>★★★★★</strong>
                <em>{featuredStory.ratingLabel}</em>
              </span>
            </div>
          </div>
        </article>

        <div className="success-stories__cards">
          {cardStories.map((story) => (
            <article className="story-card" key={`${story.name}-${story.quote}`}>
              <a
                className="story-card__media"
                href={story.videoUrl || fallbackStoryVideos[0]}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${story.name || "success story"} on YouTube`}
              >
                <img src={story.image} alt="" />
                <PlayButton />
              </a>
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
