"use client";

import Link from "next/link";

const VIDEO_TESTIMONIALS = [
  {
    src: "https://www.youtube.com/embed/8VdXcf7Dke4",
    title: "HealWithGeeta testimonial",
  },
  {
    src: "https://www.youtube.com/embed/qODcx8MckdM",
    title: "HealWithGeeta testimonial video 2",
  },
  {
    src: "https://www.youtube.com/embed/trNw4MSuNRg",
    title: "HealWithGeeta testimonial video 3",
  },
  {
    src: "https://www.youtube.com/embed/g7ZnJU-_iYE",
    title: "HealWithGeeta testimonial video 4",
  },
];

export default function Testimonials({ showCtas = true } = {}) {
  const videos = [...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS];

  return (
    <section className="bg-[#F9F4E8] py-16 text-[#6b625a]">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-[26px] sm:text-[36px] md:text-[40px] font-semibold tracking-[0.12em] text-[#6b625a]">
            REAL TRANSFORMATION STORIES
          </h2>
          <p className="mx-auto mt-2 max-w-[720px] text-[14px] sm:text-[17px] leading-[1.6] text-[#7a736c]">
            Authentic Stories From Those Who Have Experienced True
            <br />
            Spiritual Transformation.
          </p>

          {showCtas ? (
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/consultations"
                className="min-w-[200px] sm:min-w-[230px] rounded-[12px] bg-white px-7 sm:px-9 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
              >
                Explore Consultations
              </Link>
              <Link
                href="/healings"
                className="min-w-[200px] sm:min-w-[230px] rounded-[12px] border border-[#8f857c] bg-transparent px-7 sm:px-9 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] text-center"
              >
                Explore Healings
              </Link>
            </div>
          ) : null}
        </div>

        <div className="mt-8 -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:gap-6 sm:px-0 sm:pb-0 flex-nowrap">
          {videos.map((video, index) => (
            <div
              key={`${video.src}-${index}`}
              className="min-w-[240px] max-w-[260px] w-[70vw] rounded-[24px] overflow-hidden bg-[#d9d9d9] shadow-[0_14px_28px_rgba(0,0,0,0.12)] sm:w-full sm:max-w-[320px] sm:mx-auto"
            >
              <div className="aspect-[9/16] w-full">
                <iframe
                  src={video.src}
                  title={video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="bg-white px-4 py-3 text-center text-xs uppercase tracking-[0.2em] text-[#8f857c]">
                Video testimonial
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
