"use client";

export default function DailyNeeds() {
  return (
    <section className="bg-[#EEECE9] py-14 text-[#6b625a]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[681px_672px] lg:items-start lg:justify-center">
          <div className="grid gap-6">
            <div className="relative z-10 overflow-visible rounded-[30px] bg-[#DFDCD6] shadow-[0_7px_20.4px_rgba(0,0,0,0.25)] w-full max-w-[681px] min-h-[320px] sm:h-[391px]">
              <div className="relative z-10 p-5 sm:p-7">
                <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#5f5750]">Spiritual Consultations</h3>
                <p className="mt-2 max-w-[260px] text-[14px] sm:text-[16px] leading-[1.6] text-[#7a736c]">
                  Tarot, astrology, numerology, Vastu, and intuitive readings for refined spiritual
                  guidance.
                </p>
                <button className="mt-4 rounded-full bg-[#9b8872] px-6 sm:px-7 py-2.5 text-[13px] sm:text-[15px] font-semibold text-white">
                  Explore More
                </button>
              </div>
              <img
                src="/assets/images/spiritual consultations img.png"
                alt="Spiritual consultations"
                className="absolute -right-4 bottom-0 h-[105%] w-[70%] object-cover sm:-right-8 sm:h-[108%] sm:w-[66%]"
                loading="lazy"
              />
            </div>

            <div className="relative z-10 overflow-visible rounded-[30px] bg-[#F8FCFF] shadow-[0_7px_33px_rgba(0,0,0,0.25)] w-full max-w-[681px] min-h-[320px] sm:h-[391px]">
              <div className="grid h-full items-center gap-4 sm:grid-cols-[2fr_1fr]">
                <div className="relative h-[180px] overflow-hidden rounded-[24px] sm:h-full sm:rounded-none">
                  <img
                    src="/assets/images/spiritual healings img.png"
                    alt="Spiritual healings"
                    className="h-full w-full object-cover sm:absolute sm:-left-10 sm:-top-25 sm:h-[165%] sm:w-[130%]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#5f5750]">Spiritual Healings</h3>
                  <p className="mt-2 text-[14px] sm:text-[16px] leading-[1.6] text-[#7a736c]">
                    A blend of energy and vibration to cleanse, align, and harmonize your mind, body,
                    and spirit.
                  </p>
                  <button className="mt-4 rounded-full bg-[#9b8872] px-6 sm:px-7 py-2.5 text-[13px] sm:text-[15px] font-semibold text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative rounded-[30px] bg-[#FDFDFD] px-6 pt-8 text-center shadow-[0_7px_41.1px_rgba(0,0,0,0.25)] sm:px-10 w-full max-w-[672px] min-h-[520px] sm:h-[797px] flex flex-col overflow-visible">
              <h3 className="text-[24px] sm:text-[30px] font-semibold text-[#5f5750]">Divine Learning</h3>
              <p className="mx-auto mt-2 max-w-[360px] text-[14px] sm:text-[16px] leading-[1.6] text-[#7a736c]">
                A collection of spiritual courses designed to elevate your knowledge and inner
                growth.
              </p>
              <button className="mt-5 rounded-full bg-[#9b8872] px-7 py-2.5 text-[13px] sm:text-[15px] font-semibold text-white">
                Explore More
              </button>
              <img
                src="/assets/images/divine learning image.png"
                alt="Divine learning"
                className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[70%] w-[110%] max-w-none object-cover sm:-bottom-6 sm:h-[85%] sm:w-[120%]"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
