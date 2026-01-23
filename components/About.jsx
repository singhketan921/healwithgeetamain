"use client";

export default function About() {
  return (
    <section
      className="py-14 text-[#6b625a] relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 relative">
        <h2 className="text-center text-[28px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.14em] text-[#6b625a]">
          MEET THE SPIRITUAL GUIDE
        </h2>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[16px] bg-black shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/assets/images/spiritual guide img.jpg"
              >
                <source src="/assets/images/CRYSTAL HEALING .mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="max-w-[420px]">
            <div className="flex items-center gap-2">
              <img src="/assets/images/logo.png" alt="" className="h-7 w-7" />
              <h3 className="text-[28px] sm:text-[32px] font-semibold tracking-[0.08em] text-[#6b625a]">
                GEETA SHARMA
              </h3>
            </div>

            <p className="mt-4 text-[17px] sm:text-[18px] leading-[1.7] text-[#7a736c]">
              With Years Of Spiritual Practice And Divine Guidance, Geeta Has Helped Thousands Heal,
              Align, And Find Clarity Through Sacred Sciences. Every Session Is Guided By Deep
              Intuition, Ancient Wisdom, And A Genuine Desire To Bring Peace, Balance, And
              Transformation Into People's Lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
