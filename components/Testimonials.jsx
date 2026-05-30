"use client";

import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const VIDEO_TESTIMONIALS = [
  {
    src: "https://www.youtube.com/embed/8VdXcf7Dke4",
    title: "HealWithGeeta testimonial",
    image: "/assets/images/spiritual guide img.jpg",
  },
  {
    src: "https://www.youtube.com/embed/qODcx8MckdM",
    title: "HealWithGeeta testimonial video 2",
    image: "/assets/images/spiritual guide img.jpg",
  },
  {
    src: "https://www.youtube.com/embed/trNw4MSuNRg",
    title: "HealWithGeeta testimonial video 3",
    image: "/assets/images/spiritual guide img.jpg",
  },
  {
    src: "https://www.youtube.com/embed/g7ZnJU-_iYE",
    title: "HealWithGeeta testimonial video 4",
    image: "/assets/images/spiritual guide img.jpg",
  },
];

const FALLBACK_TESTIMONIALS = [
  {
    name: "Transformation Story",
    quote:
      "The guidance brought clarity, steadiness, and a deeper connection to my own intuition. Each session felt practical, sacred, and deeply personal.",
  },
  {
    name: "Healing Journey",
    quote:
      "I arrived with questions and left with grounded next steps. The experience helped me understand my energy, patterns, and timing with more compassion.",
  },
  {
    name: "Sacred Learning",
    quote:
      "The work felt both mystical and usable. I could take the insights into my daily life immediately, and that made the transformation last.",
  },
];

const SOCIAL_LINKS = [
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/" },
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/" },
  { icon: FaXTwitter, label: "Twitter", href: "https://twitter.com/" },
];

const EXPANDED_COPY =
  " Through the session, the guidance unfolded with a calm rhythm: first naming the emotional pattern, then connecting it to timing, energy, and practical next steps. What stayed with me was how grounded it felt. The reading did not feel abstract or distant; it gave me language for what I was sensing, helped me understand the choices in front of me, and offered a clearer way to move through the next phase with trust, patience, and self-awareness.";

function toWatchUrl(src) {
  return src.replace("/embed/", "/watch?v=");
}

export default function Testimonials({ testimonials = [] } = {}) {
  const stories = (testimonials.length ? testimonials : FALLBACK_TESTIMONIALS)
    .slice(0, 3)
    .map((item, index) => ({
      ...item,
      media: VIDEO_TESTIMONIALS[index % VIDEO_TESTIMONIALS.length],
    }));

  return (
    <section className="relative overflow-hidden bg-[#f8f3ef] px-6 py-12 text-[#4c4740] sm:py-16">
      <img
        src="/assets/images/bgFlower.png"
        alt=""
        className="pointer-events-none absolute -left-12 top-0 w-[260px] opacity-25 sm:w-[360px]"
      />
      <img
        src="/assets/images/bgFlower.png"
        alt=""
        className="pointer-events-none absolute -right-16 top-[28%] w-[260px] rotate-180 opacity-20 sm:w-[380px]"
      />
      <img
        src="/assets/images/bgFlower.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-1/2 w-[260px] -translate-x-1/2 opacity-20 sm:w-[360px]"
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="space-y-10 sm:space-y-14">
          {stories.map((story, index) => (
            <article
              key={story.id ?? `${story.name}-${index}`}
              className="grid items-center gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14 xl:-ml-10"
            >
              <a
                href={toWatchUrl(story.media.src)}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-[18px] border border-[#c99b74] bg-[#f3e6dc]"
                aria-label={`Play ${story.media.title}`}
              >
                <img
                  src={story.image || story.media.image}
                  alt={story.name || story.media.title}
                  className="aspect-[0.95/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#b77b3d] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110">
                  <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-[#b77b3d]" />
                </span>
              </a>

              <div className="text-left">
                <h2 className="font-serif text-[40px] font-normal leading-none text-[#4c4740] sm:text-[52px]">
                  {story.name || "Transformation Story"}
                </h2>
                <p className="mt-5 max-w-[820px] text-[15px] leading-[1.4] text-[#4c4740]">
                  {story.quote || story.text}
                  {EXPANDED_COPY}
                </p>
                <div className="mt-5 flex gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#c99b74] bg-[#f8efe8] text-[#ad7f53] transition-colors hover:bg-[#ad7f53] hover:text-white"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
