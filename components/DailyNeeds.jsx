"use client";

export default function DailyNeeds() {
  return (
    <section className="bg-[#f5f2ef] py-14 text-[#6b625a]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[18px] bg-[#e4e0da] shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
              <div className="relative z-10 p-6 sm:p-7">
                <h3 className="text-[18px] font-semibold text-[#5f5750]">Spiritual Consultations</h3>
                <p className="mt-2 max-w-[220px] text-[13px] leading-[1.5] text-[#7a736c]">
                  Tarot, astrology, numerology, Vastu, and intuitive readings for refined spiritual
                  guidance.
                </p>
                <button className="mt-4 rounded-full bg-[#9b8872] px-5 py-2 text-[12px] font-semibold text-white">
                  Explore More
                </button>
              </div>
              <img
                src="/assets/images/consultation.png"
                alt="Spiritual consultations"
                className="absolute right-0 top-0 h-full w-[58%] object-cover"
                loading="lazy"
              />
            </div>

            <div className="relative overflow-hidden rounded-[18px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
              <div className="grid items-center gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <img
                  src="/assets/images/healinghero.png"
                  alt="Spiritual healings"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6 sm:p-7">
                  <h3 className="text-[18px] font-semibold text-[#5f5750]">Spiritual Healings</h3>
                  <p className="mt-2 text-[13px] leading-[1.5] text-[#7a736c]">
                    A blend of energy and vibration to cleanse, align, and harmonize your mind, body,
                    and spirit.
                  </p>
                  <button className="mt-4 rounded-full bg-[#9b8872] px-5 py-2 text-[12px] font-semibold text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[18px] bg-white px-6 py-8 text-center shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:px-10">
              <h3 className="text-[22px] font-semibold text-[#5f5750]">Divine Learning</h3>
              <p className="mx-auto mt-2 max-w-[320px] text-[13px] leading-[1.6] text-[#7a736c]">
                A collection of spiritual courses designed to elevate your knowledge and inner
                growth.
              </p>
              <button className="mt-5 rounded-full bg-[#9b8872] px-6 py-2 text-[12px] font-semibold text-white">
                Explore More
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[18px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
              <img
                src="/assets/images/coursesimg.png"
                alt="Spiritual courses"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-white/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                <h3 className="text-[22px] font-semibold text-white drop-shadow">
                  Spiritual
                  <br />
                  Courses
                </h3>
                <button className="rounded-full bg-[#9b8872] px-6 py-2 text-[12px] font-semibold text-white">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
