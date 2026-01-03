"use client";

export default function Services() {
  return (
    <section className="w-full bg-[#B5AEA6]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 px-4 py-6 text-center sm:flex-row sm:gap-5 sm:px-6 sm:py-7">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white sm:h-16 sm:w-16">
          <img src="/assets/images/logo.png" alt="" className="h-8 w-8" />
        </div>
        <div className="text-white">
          <h2 className="text-[20px] sm:text-[26px] font-semibold leading-tight tracking-[0.08em]">
            EXPERIENCE THE
            <br />
            ENERGY THAT BRINGS
            <br />
            BALANCE AND CLARITY
          </h2>
          <p className="mt-2 text-[12px] sm:text-[14px] tracking-[0.02em] text-white/80">
            Watch How Spiritual Guidance Transforms Lives.
          </p>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
          <img
            src="/assets/images/spiritual guide img.jpg"
            alt="Geeta Sharma performing a spiritual healing"
            className="h-auto w-full max-w-[520px] sm:max-w-[880px] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
