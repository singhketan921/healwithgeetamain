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
        <div className="mx-auto flex w-full items-center justify-center px-0 py-0">
          <video
            className="h-[320px] w-full object-cover sm:h-[520px]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/images/spiritual guide img.jpg"
          >
            <source src="/assets/images/FAITHHEALERS JOURNEY  home videp.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
