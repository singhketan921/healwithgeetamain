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
    <span className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#c16b0d]">
      <FaPlay className="ml-1 text-[25px]" />
    </span>
  );
}

function ReviewCard({ review, className = "" }) {
  return (
    <article
      className={`rounded-[30px] border border-[#c99b74] bg-[#fff7f0] px-7 py-7 text-[#ad7f53] sm:px-9 lg:px-10 ${className}`}
    >
      <div className="flex items-center gap-4">
        <img
          src="/assets/images/spiritual guide img.jpg"
          alt=""
          className="h-[58px] w-[58px] rounded-full border border-[#ad7f53] object-cover"
        />
        <div>
          <h3 className="text-[28px] font-normal leading-none">{review.name}</h3>
          <div className="mt-2 flex gap-1 text-[15px]" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-8 max-w-[700px] text-[21px] leading-[1.28]">
        {review.text}
      </p>
    </article>
  );
}

export default function ServiceProof() {
  return (
    <section className="bg-[#f8f3ef] px-5 py-14 text-[#ad7f53] sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-[1640px] gap-7 lg:grid-cols-[0.78fr_1.08fr_0.44fr] lg:grid-rows-[220px_220px_360px] xl:grid-rows-[235px_235px_380px]">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="group relative min-h-[540px] overflow-hidden rounded-[30px] border border-[#c99b74] lg:row-span-3 lg:min-h-0"
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
          className="group relative min-h-[360px] overflow-hidden rounded-[30px] border border-[#c99b74] lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:min-h-0"
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

        <article className="relative min-h-[320px] overflow-hidden rounded-[30px] border border-[#c99b74] bg-[#fff7f0] px-8 py-10 text-[#ad7f53] sm:px-16 lg:col-span-2 lg:col-start-2 lg:row-start-3 lg:min-h-0">
          <div className="relative z-10 max-w-[560px] pt-2 lg:pt-4">
            <div className="mb-3 font-serif text-[56px] font-bold leading-none">“</div>
            <p className="pl-8 text-[24px] leading-[1.16] sm:text-[27px] lg:text-[28px]">
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
            className="absolute bottom-0 right-8 hidden h-[94%] object-contain sm:block lg:right-12"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}
