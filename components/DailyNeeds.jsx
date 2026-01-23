"use client";

import Link from "next/link";

export default function DailyNeeds() {
  return (
    <section className="bg-[#F9F4E8] py-14 text-[#6b625a]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[681px_672px] lg:items-start lg:justify-center">
          <div className="grid gap-6">
            <div className="relative z-10 overflow-hidden rounded-[30px] bg-[#DFDCD6] shadow-[0_7px_20.4px_rgba(0,0,0,0.25)] w-full max-w-[681px] min-h-[200px] sm:h-[391px]">
              <div className="flex h-full flex-col items-center gap-4 p-5 text-center sm:block sm:p-7">
                <div className="relative z-10 sm:text-left">
                  <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#5f5750]">Spiritual Consultations</h3>
                  <p className="mt-2 max-w-[260px] text-[14px] sm:text-[16px] leading-[1.6] text-[#7a736c] sm:max-w-[260px]">
                    Tarot, astrology, numerology, Vastu, and intuitive readings for refined spiritual
                    guidance.
                  </p>
                  <Link
                    href="/consultations"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#9b8872] px-6 sm:px-7 py-2.5 text-[13px] sm:text-[15px] font-semibold !text-white sm:w-auto sm:justify-start"
                  >
                    Explore More
                  </Link>
                </div>
                <div className="relative h-[240px] w-[calc(100%+40px)] -mx-5 -mb-5 overflow-hidden sm:hidden">
                  <img
                    src="/assets/images/consultations img.jpeg"
                    alt="Spiritual consultations"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <img
                src="/assets/images/consultations img.jpeg"
                alt="Spiritual consultations"
                className="hidden sm:block absolute -right-8 bottom-0 h-[108%] w-[58%] object-cover"
                loading="lazy"
              />
            </div>

            <div className="relative z-10 overflow-hidden rounded-[30px] bg-[#F8FCFF] shadow-[0_7px_33px_rgba(0,0,0,0.25)] w-full max-w-[681px] min-h-[240px] sm:h-[391px]">
              <img
                src="/assets/images/healings img .jpeg"
                alt="Spiritual healings"
                className="sm:hidden h-[340px] w-full object-cover"
                loading="lazy"
              />
              <div className="relative flex h-full flex-col items-center gap-4 p-6 text-center sm:flex-row sm:items-center sm:gap-0 sm:p-7 sm:pl-[45%] sm:text-left">
                <img
                  src="/assets/images/healings img .jpeg"
                  alt="Spiritual healings"
                  className="hidden sm:block absolute left-0 top-0 h-full w-[45%] object-cover"
                  loading="lazy"
                />
                <div className="relative z-10 max-w-[320px] sm:pl-6">
                  <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#5f5750]">Spiritual Healings</h3>
                  <p className="mt-2 text-[14px] sm:text-[16px] leading-[1.6] text-[#7a736c]">
                    A blend of energy and vibration to cleanse, align, and harmonize your mind, body,
                    and spirit.
                  </p>
                  <Link
                    href="/healings"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#9b8872] px-6 sm:px-7 py-2.5 text-[13px] sm:text-[15px] font-semibold !text-white sm:w-auto"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative rounded-[30px] bg-[#FDFDFD] px-6 pt-8 text-center shadow-[0_7px_41.1px_rgba(0,0,0,0.25)] sm:px-10 w-full max-w-[672px] min-h-[520px] sm:h-[797px] flex flex-col overflow-hidden">
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
                src="/assets/images/learnings.jpeg"
                alt="Divine learning"
                className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[58%] w-[100%] max-w-none object-cover sm:-bottom-6 sm:h-[70%] sm:w-[105%]"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
