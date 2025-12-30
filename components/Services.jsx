"use client";

export default function Services() {
  return (
    <section className="bg-black">
      <div className="bg-[#b5aea6]">
        <div className="mx-auto flex max-w-[1200px] items-center gap-5 px-6 py-6 sm:py-7">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <img src="/assets/images/logo.png" alt="" className="h-8 w-8" />
          </div>
          <div className="text-white">
            <h2 className="text-[18px] sm:text-[20px] font-semibold leading-tight tracking-[0.08em]">
              EXPERIENCE THE
              <br />
              ENERGY THAT BRINGS
              <br />
              BALANCE AND CLARITY
            </h2>
            <p className="mt-1 text-[11px] tracking-[0.02em] text-white/90">
              Watch How Spiritual Guidance Transforms Lives.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] items-center justify-center px-6 py-12">
        <img
          src="/assets/images/about.png"
          alt="Geeta Sharma performing a spiritual healing"
          className="h-auto w-full max-w-[860px] object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
