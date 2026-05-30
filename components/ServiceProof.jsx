"use client";

import { FaPlay, FaStar } from "react-icons/fa6";

const reviewCards = [
  {
    name: "Ashley Cooper",
    text: "Teamollo delivered the site with in the timeline as they requested. Inthe end, the client found a 50% increase in traffic.",
  },
  {
    name: "Ashley Cooper",
    text: "Teamollo delivered the site with in the timeline as they requested. Inthe end, the client found a 50% increase in traffic.",
  },
];

function PlayButton() {
  return (
    <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#c16b0d] sm:h-14 sm:w-14">
      <FaPlay className="ml-1 text-[19px] sm:text-[22px]" />
    </span>
  );
}

function ReviewCard({ review, className = "" }) {
  return (
    <article
      className={`rounded-[22px] border border-[#c99b74] bg-[#fff7f0] px-5 py-5 text-[#ad7f53] sm:px-7 lg:px-8 ${className}`}
    >
      <div className="flex items-center gap-3">
        <img
          src="/assets/images/spiritual guide img.jpg"
          alt=""
          className="h-11 w-11 rounded-full border border-[#ad7f53] object-cover sm:h-12 sm:w-12"
        />
        <div>
          <h3 className="text-[22px] font-normal leading-none sm:text-[24px]">{review.name}</h3>
          <div className="mt-1.5 flex gap-1 text-[13px]" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-5 max-w-[700px] text-[16px] leading-[1.25] sm:text-[18px]">
        {review.text}
      </p>
    </article>
  );
}

export default function ServiceProof() {
  return (
    <section className="bg-[#f8f3ef] px-5 py-10 text-[#ad7f53] sm:px-8 sm:py-12">
      <div className="mx-auto grid max-w-[1500px] gap-5 lg:max-h-[calc(100vh_-_var(--navbar-height)_-_72px)] lg:grid-cols-[0.78fr_1.08fr_0.44fr] lg:grid-rows-[clamp(150px,20vh,180px)_clamp(150px,20vh,180px)_clamp(220px,31vh,280px)] xl:grid-rows-[clamp(160px,20vh,190px)_clamp(160px,20vh,190px)_clamp(230px,31vh,300px)]">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="group relative h-[min(70vh,420px)] overflow-hidden rounded-[22px] border border-[#c99b74] sm:h-[420px] lg:row-span-3 lg:h-auto lg:min-h-0"
          aria-label="Watch healing story"
        >
          <img
            src="/assets/images/healing path ways.JPG"
            alt="Healing story"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-[#d8c4a8]/45" />
          <PlayButton />
        </a>

        {reviewCards.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${index}`}
            review={review}
            className={index === 0 ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-2 lg:row-start-2"}
          />
        ))}

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="group relative h-[300px] overflow-hidden rounded-[22px] border border-[#c99b74] sm:h-[340px] lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:h-auto lg:min-h-0"
          aria-label="Watch another healing story"
        >
          <img
            src="/assets/images/healwithgeeta hero 2.png"
            alt="Healing video"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-[#d8c4a8]/45" />
          <PlayButton />
        </a>

        <article className="relative min-h-[260px] overflow-hidden rounded-[22px] border border-[#c99b74] bg-[#fff7f0] px-6 py-7 text-[#ad7f53] sm:px-10 lg:col-span-2 lg:col-start-2 lg:row-start-3 lg:min-h-0">
          <div className="relative z-10 max-w-[520px]">
            <div className="mb-1 font-serif text-[42px] font-bold leading-none sm:text-[48px]">“</div>
            <p className="pl-5 text-[20px] leading-[1.14] sm:text-[23px] lg:text-[25px]">
              Come back to your center
              <br />
              Receive guidance <strong>with calm clarity</strong>
              <br />
              <strong>Heal what feels heavy</strong>
              <br />
              Align your energy with intention
              <br />
              Move forward feeling grounded
            </p>
          </div>
          <div className="absolute bottom-0 right-0 h-full w-[48%] bg-[radial-gradient(circle_at_100%_70%,_#f0c992_0_32%,_#f5d9b3_32%_47%,_#f7e6d3_47%_58%,_transparent_58%)]" />
          <img
            src="/assets/images/lady.png"
            alt=""
            className="absolute bottom-0 right-5 hidden h-[90%] object-contain sm:block lg:right-8"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}
