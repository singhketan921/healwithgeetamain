"use client";

import Link from "next/link";

export default function DailyNeeds() {
  return (
    <section className="bg-[#EEECE9] py-14 text-[#6b625a]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[681px_672px] lg:items-start lg:justify-center">
          <div className="grid gap-6">
            <div className="relative z-10 overflow-visible rounded-[30px] bg-[#DFDCD6] shadow-[0_7px_20.4px_rgba(0,0,0,0.25)] w-full max-w-[681px] min-h-[200px] sm:h-[391px]">
              <div className="grid h-full grid-cols-[1.1fr_0.9fr] items-center gap-4 p-5 sm:block sm:p-7 sm:gap-0">
                <div className="relative z-10">
                  <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#5f5750]">Spiritual Consultations</h3>
                  <p className="mt-2 max-w-[260px] text-[14px] sm:text-[16px] leading-[1.6] text-[#7a736c]">
                    Tarot, astrology, numerology, Vastu, and intuitive readings for refined spiritual
                    guidance.
                  </p>
                  <Link
                    href="/consultations"
                    className="mt-4 inline-flex rounded-full bg-[#9b8872] px-6 sm:px-7 py-2.5 text-[13px] sm:text-[15px] font-semibold !text-white"
                  >
                    Explore More
                  </Link>
                </div>
                <div className="relative h-[100px] overflow-visible sm:hidden">
                  <img
                    src="/assets/images/spiritual consultations img.png"
                    alt="Spiritual consultations"
                    className="absolute -right-10 -bottom-14 h-[240%] w-[170%] max-w-none object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <img
                src="/assets/images/spiritual consultations img.png"
                alt="Spiritual consultations"
                className="hidden sm:block absolute -right-8 bottom-0 h-[108%] w-[66%] object-cover"
                loading="lazy"
              />
            </div>

            <div className="relative z-10 overflow-visible rounded-[30px] bg-[#F8FCFF] shadow-[0_7px_33px_rgba(0,0,0,0.25)] w-full max-w-[681px] min-h-[240px] sm:h-[391px]">
              <div className="grid h-full grid-cols-[1.1fr_0.9fr] items-center gap-4 p-5 sm:grid-cols-[1.1fr_0.9fr] sm:gap-0 sm:p-7">
                <div className="relative z-10 sm:order-2">
                  <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#5f5750]">Spiritual Healings</h3>
                  <p className="mt-2 text-[14px] sm:text-[16px] leading-[1.6] text-[#7a736c]">
                    A blend of energy and vibration to cleanse, align, and harmonize your mind, body,
                    and spirit.
                  </p>
                  <Link
                    href="/healings"
                    className="mt-4 inline-flex rounded-full bg-[#9b8872] px-6 sm:px-7 py-2.5 text-[13px] sm:text-[15px] font-semibold !text-white"
                  >
                    Explore More
                  </Link>
                </div>
                <div className="relative h-[100px] overflow-visible sm:order-1 sm:h-full sm:overflow-visible sm:-translate-y-6">
                  <img
                    src="/assets/images/spiritual healings img.png"
                    alt="Spiritual healings"
                    className="absolute -right-10 -bottom-14 h-[240%] w-[170%] max-w-none object-cover sm:absolute sm:-left-30 sm:-top-20 sm:h-[175%] sm:w-[140%]"
                    loading="lazy"
                  />
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
              <Link
                href="/courses"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#9b8872] px-7 py-2.5 text-[13px] sm:text-[15px] font-semibold !text-white"
              >
                Explore More
              </Link>
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
