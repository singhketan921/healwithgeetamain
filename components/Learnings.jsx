"use client";

import Link from "next/link";

const programs = [
  {
    number: "1",
    title: "Consultation",
    text: "Begin with a focused reading of your energy, timing, and intention.",
    href: "/consultations",
    image: "/assets/images/consultations img.jpeg",
    textClassName: "left-[4%] top-[36%]",
    numberClassName: "left-[19%] top-[43%]",
    nodeClassName: "left-[13%] top-[73%]",
    cardClassName: "left-[58%] top-[-18%]",
  },
  {
    number: "2",
    title: "Programs",
    text: "Learn occult sciences through guided courses and practical rituals.",
    href: "/courses",
    image: "/assets/images/healing path ways.JPG",
    textClassName: "left-[31%] top-[59%]",
    numberClassName: "left-[43%] top-[60%]",
    nodeClassName: "left-[37%] top-[21%]",
    cardClassName: "left-[-10%] top-[92%]",
  },
  {
    number: "3",
    title: "Healings",
    text: "Receive energetic alignment through guided healing containers.",
    href: "/healings",
    image: "/assets/images/healings img .jpeg",
    textClassName: "left-[56%] top-[24%]",
    numberClassName: "left-[72%] top-[22%]",
    nodeClassName: "left-[66%] top-[72%]",
    cardClassName: "left-[-42%] top-[-8%]",
  },
  {
    number: "4",
    title: "Workshops",
    text: "Join live ritual-based experiences for clarity, resilience, and growth.",
    href: "/workshops",
    image: "/assets/images/coursesimg.png",
    textClassName: "left-[77%] top-[48%]",
    numberClassName: "left-[92%] top-[49%]",
    nodeClassName: "left-[88%] top-[20%]",
    cardClassName: "right-[20%] top-[78%]",
  },
];

export default function Learnings() {
  return (
    <section className="relative overflow-hidden bg-[#f8f3ef] py-14 text-[#4c4740] sm:py-16">
      <img
        src="/assets/images/bgFlower.png"
        alt=""
        className="pointer-events-none absolute -bottom-24 -left-24 w-[300px] opacity-15"
      />
      <div className="relative mx-auto h-[430px] max-w-[1780px] px-5 sm:h-[470px]">
        <svg
          className="absolute left-1/2 top-0 hidden h-full w-[calc(100%+120px)] -translate-x-1/2 overflow-visible md:block"
          viewBox="0 0 1780 470"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-40 330 C160 370 300 324 430 116 C540 -58 682 62 750 226 C834 430 1032 350 1138 164 C1268 -62 1468 2 1820 210"
            fill="none"
            stroke="#e2d8cf"
            strokeWidth="10"
            opacity="0.65"
            transform="translate(0 38)"
          />
          <path
            d="M-40 330 C160 370 300 324 430 116 C540 -58 682 62 750 226 C834 430 1032 350 1138 164 C1268 -62 1468 2 1820 210"
            fill="none"
            stroke="#ad7f53"
            strokeWidth="11"
            strokeLinecap="round"
          />
        </svg>

        {programs.map((program) => (
          <ProgramPoint key={program.number} program={program} />
        ))}

        <div className="grid gap-4 md:hidden">
          {programs.map((program) => (
            <Link
              key={program.number}
              href={program.href}
              className="grid grid-cols-[70px_1fr] items-center gap-4 border border-[#ad7f53] bg-[#f8f3ef] p-4"
            >
              <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white font-serif text-[30px] shadow-[0_12px_22px_rgba(173,127,83,0.18)]">
                {program.number}
              </span>
              <span>
                <span className="block font-serif text-[26px] leading-none">{program.title}</span>
                <span className="mt-2 block text-[13px] leading-[1.35]">{program.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramPoint({ program }) {
  return (
    <>
      <Link
        href={program.href}
        className={`absolute z-10 hidden w-[235px] bg-[#f8f3ef]/75 md:block ${program.textClassName}`}
        aria-label={program.title}
      >
        <h3 className="font-serif text-[30px] leading-none text-[#4c4740] lg:text-[34px]">
          {program.title}
        </h3>
        <p className="mt-3 max-w-[190px] text-[14px] leading-[1.22] text-[#4c4740] lg:text-[15px]">
          {program.text}
        </p>
      </Link>

      <span
        className={`pointer-events-none absolute z-10 hidden bg-[#f8f3ef]/75 font-serif text-[112px] leading-none text-[#4c4740]/90 drop-shadow-[0_22px_7px_rgba(76,71,64,0.14)] md:block lg:text-[132px] ${program.numberClassName}`}
      >
        {program.number}
      </span>

      <Link
        href={program.href}
        className={`group absolute z-20 hidden h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_20px_32px_rgba(173,127,83,0.22)] transition-transform duration-300 hover:scale-105 md:flex lg:h-[122px] lg:w-[122px] ${program.nodeClassName}`}
        aria-label={program.title}
      >
        <span className="font-serif text-[34px] leading-none text-[#4c4740] opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:text-[40px]">
          {program.number}
        </span>

        <div
          className={[
            "absolute z-20 w-[250px] overflow-hidden rounded-[16px] bg-white opacity-0 shadow-[0_18px_34px_rgba(173,127,83,0.25)] transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100",
            program.cardClassName,
          ].join(" ")}
        >
          <div className="px-6 py-5">
            <h4 className="font-serif text-[22px] leading-none">{program.title}</h4>
            <p className="mt-3 text-[11px] leading-[1.25]">{program.text}</p>
          </div>
          <img src={program.image} alt="" className="h-[86px] w-full object-cover" />
        </div>
      </Link>
    </>
  );
}
