"use client";

export default function Testimonials() {
  return (
    <section className="bg-[#f5f2ef] py-16 text-[#6b625a]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-semibold tracking-[0.12em] text-[#6b625a]">
            REAL TRANSFORMATION STORIES
          </h2>
          <p className="mx-auto mt-2 max-w-[640px] text-[13px] sm:text-[14px] leading-[1.6] text-[#7a736c]">
            Authentic Stories From Those Who Have Experienced True
            <br />
            Spiritual Transformation.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button className="min-w-[200px] rounded-[10px] bg-white px-7 py-2.5 text-[13px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
              Explore Consultations
            </button>
            <button className="min-w-[200px] rounded-[10px] border border-[#8f857c] bg-transparent px-7 py-2.5 text-[13px] font-semibold text-[#6b625a]">
              Explore Healings
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={`testimonial-placeholder-${idx}`}
              className="h-[260px] rounded-[18px] bg-[#d9d9d9]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
