"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const journeyMoments = [
  {
    title: "Roots of Devotion",
    chapter: "Chapter 1",
    description:
      "A devoted homemaker, caring for family by day and quietly nurturing a spiritual pull by night.",
    image: "/assets/images/lady.png",
  },
  {
    title: "First Awakenings",
    chapter: "Chapter 2",
    description:
      "The first spark came through astrology and intuition, turning doubt into a gentle inner voice.",
    image: "/assets/images/astrology.jpg",
  },
  {
    title: "Sacred Study",
    chapter: "Chapter 3",
    description:
      "She committed to study: occult science, energy healing, and guidance from trusted mentors.",
    image: "/assets/images/divine learning image.png",
  },
  {
    title: "Practitioner of Light",
    chapter: "Chapter 4",
    description:
      "She became a practitioner, helping women step into clarity, strength, and spiritual mastery.",
    image: "/assets/images/spiritual guide img.jpg",
  },
];

const approachSteps = [
  {
    title: "Step 1 - Consultation",
    description: "We map your energy, birth details, and present concerns to clarify the path.",
  },
  {
    title: "Step 2 - Spiritual Analysis",
    description: "Astrology, tarot, numerology, and intuitive reading reveal root patterns.",
  },
  {
    title: "Step 3 - Healing and Guidance",
    description: "Energy clearing, chakra balancing, and focused remedies recalibrate you.",
  },
  {
    title: "Step 4 - Life Alignment",
    description: "Personal rituals, protection, and next steps keep you aligned.",
  },
];

const courseModules = [
  { title: "Foundations of Occult Science", image: "/assets/images/modality1.png" },
  { title: "Astrology and Birth Charts", image: "/assets/images/modality2.png" },
  { title: "Tarot and Symbol Reading", image: "/assets/images/modality3.png" },
  { title: "Numerology and Vibrations", image: "/assets/images/modality4.png" },
  { title: "Reiki and Energy Healing", image: "/assets/images/modality5.png" },
  { title: "Crystal and Elemental Work", image: "/assets/images/modality6.png" },
  { title: "Aura and Chakra Balancing", image: "/assets/images/modality7.png" },
  { title: "Protection Rituals", image: "/assets/images/modality8.png" },
  { title: "Intuition and Psychic Development", image: "/assets/images/modality9.png" },
  { title: "Practitioner Mastery", image: "/assets/images/modality10.png" },
];

export default function TransformationPage() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth text-[#6b625a]">
      <section
        className="w-full hero-section"
        style={{ background: "linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)" }}
      >
        <div className="hero-main mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="space-y-6">
              <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                Sacred Journey
              </p>
              <h1 className="text-[30px] sm:text-[40px] lg:text-[52px] font-semibold leading-[1.15] tracking-[0.06em]">
                From Home Heart to
                <br />
                Occult Science Practitioner
              </h1>
              <p className="text-[14px] sm:text-[17px] leading-[1.7] text-[#7a736c] max-w-[540px]">
                This is the story of a housewife who chose to grow beyond labels. Through faith,
                learning, and courage, she became an occult science practitioner. Her path
                invites women to believe that their home can be a beginning, not a boundary.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/courses"
                  className="min-w-[180px] rounded-[12px] bg-white px-6 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
                >
                  Explore the Course
                </Link>
                <Link
                  href="/contact"
                  className="min-w-[180px] rounded-[12px] border border-[#8f857c] bg-transparent px-6 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] text-center"
                >
                  Begin Your Journey
                </Link>
              </div>
            </Reveal>

            <Reveal
              delay={0.2}
              className="relative overflow-hidden rounded-[18px] border border-[#e5ded6] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] min-h-[260px] sm:min-h-[360px]"
            >
              <img
                src="/assets/images/hero image faith healers.png"
                alt="Occult science practitioner"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F1ED 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal className="space-y-4">
              <p className="text-[12px] uppercase tracking-[0.3em] text-[#9a938c]">Her Story</p>
              <h2 className="text-[26px] sm:text-[36px] font-semibold tracking-[0.1em] text-[#5f5750]">
                A Journey Women Can See Themselves In
              </h2>
              <p className="text-[14px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
                She started where many women start: caring for her home, placing her dreams last,
                and listening to a quiet inner calling. With each small step, she learned that
                devotion is not only to family, but also to self. She studied, practiced, and
                slowly built a life of purpose. This page is her story so you can find your own.
              </p>
            </Reveal>
            <Reveal
              delay={0.2}
              className="rounded-[18px] border border-[#e5ded6] bg-white p-6 shadow-[0_14px_32px_rgba(0,0,0,0.1)]"
            >
              <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                A Message To Women
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#7a736c]">
                You are not "just" a housewife. You are a creator, a healer, and a seeker. Your
                transformation can begin with one conversation, one class, or one healing session.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-[520px]">
              <p className="text-[12px] uppercase tracking-[0.3em] text-[#9a938c]">The Journey</p>
              <h2 className="mt-3 text-[26px] sm:text-[36px] font-semibold tracking-[0.1em] text-[#5f5750]">
                The Transformation Story
              </h2>
              <p className="mt-4 text-[14px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
                Each chapter is captured through images that trace the quiet shift from
                homemaker to healer, and then to a dedicated occult science practitioner.
              </p>
            </Reveal>
            <Reveal
              delay={0.2}
              className="rounded-[18px] border border-[#e5ded6] bg-white shadow-[0_14px_32px_rgba(0,0,0,0.1)] p-6 max-w-[420px]"
            >
              <p className="text-[13px] uppercase tracking-[0.28em] text-[#9a938c]">
                Signature Path
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] text-[#7a736c]">
                Faith, study, and service intertwine as the path unfolds into a full healing
                practice with a structured occult science curriculum.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journeyMoments.map((moment) => (
              <Reveal key={moment.title} className="rounded-[18px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] overflow-hidden border border-[#e9e2da]">
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                    {moment.chapter}
                  </p>
                  <h3 className="mt-2 text-[18px] font-semibold text-[#6b625a]">
                    {moment.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[#7a736c]">
                    {moment.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ background: "linear-gradient(180deg, #F7F5F2 0%, #FFFFFF 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6">
          <div className="text-center">
            <h2 className="text-[26px] sm:text-[36px] font-semibold tracking-[0.12em] text-[#5f5750]">
              THE HEALING APPROACH
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] sm:text-[17px] leading-[1.6] text-[#7a736c]">
              The same pathway you see on the home page, now expanded with deeper guidance and
              a clearer view of each step in the transformation.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-14">
            <div className="absolute inset-0 overflow-hidden rounded-[28px]">
              <img
                src="/assets/images/healing path ways.JPG"
                alt="Healing pathway"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#f2ede7] opacity-70" />
            </div>

            <div className="relative z-10 min-h-[520px]">
              <div className="text-center pt-6">
                <h3 className="text-[22px] sm:text-[32px] font-semibold tracking-[0.08em] text-[#6b625a]">
                  HEALING <span className="italic font-light">PATHWAYS</span>
                </h3>
              </div>

              <div className="mt-8 grid gap-4 sm:hidden">
                {approachSteps.map((step) => (
                  <StepCard key={step.title} title={step.title} description={step.description} />
                ))}
              </div>

              <div className="hidden sm:block">
                <div className="absolute left-8 top-[120px]">
                  <StepCard title={approachSteps[1].title} description={approachSteps[1].description} />
                </div>
                <div className="absolute right-10 top-[80px]">
                  <StepCard title={approachSteps[0].title} description={approachSteps[0].description} />
                </div>
                <div className="absolute left-1/2 top-[260px] -translate-x-1/2">
                  <StepCard title={approachSteps[2].title} description={approachSteps[2].description} />
                </div>
                <div className="absolute right-14 top-[320px]">
                  <StepCard title={approachSteps[3].title} description={approachSteps[3].description} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {approachSteps.map((step) => (
              <Reveal key={`detail-${step.title}`} className="rounded-[18px] border border-[#e5ded6] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                <h4 className="text-[18px] font-semibold text-[#6b625a]">{step.title}</h4>
                <p className="mt-3 text-[14px] leading-[1.7] text-[#7a736c]">{step.description}</p>
                <p className="mt-3 text-[13px] uppercase tracking-[0.24em] text-[#9a938c]">
                  Guided, Practical, Grounded
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F4E8 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <Reveal className="max-w-[520px]">
              <p className="text-[12px] uppercase tracking-[0.3em] text-[#9a938c]">
                Complete Course
              </p>
              <h2 className="mt-3 text-[26px] sm:text-[36px] font-semibold tracking-[0.1em] text-[#5f5750]">
                The Occult Science Curriculum
              </h2>
              <p className="mt-4 text-[14px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
                A full, image-rich course designed to take you from foundations to mastery,
                combining spiritual science with hands-on practice.
              </p>
            </Reveal>
            <Reveal
              delay={0.2}
              className="rounded-[20px] overflow-hidden border border-[#e5ded6] shadow-[0_18px_40px_rgba(0,0,0,0.12)] min-h-[240px] max-w-[460px]"
            >
              <img
                src="/assets/images/hero 2.png"
                alt="Occult science course"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courseModules.map((module) => (
              <Reveal key={module.title} className="rounded-[18px] bg-white border border-[#e8e1d9] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.1)]">
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[16px] font-semibold text-[#6b625a]">{module.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/courses"
              className="min-w-[200px] rounded-[12px] bg-white px-8 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
            >
              View Courses
            </Link>
            <Link
              href="/contact"
              className="min-w-[200px] rounded-[12px] border border-[#8f857c] bg-transparent px-8 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] text-center"
            >
              Speak With Geeta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepCard({ title, description }) {
  return (
    <div className="rounded-[16px] bg-white px-6 py-4 text-center shadow-[0_10px_22px_rgba(0,0,0,0.12)] max-w-[280px]">
      <div className="text-[15px] sm:text-[16px] font-semibold text-[#6b625a]">{title}</div>
      <div className="mt-2 text-[13px] sm:text-[14px] text-[#9a938c] leading-[1.6]">
        {description}
      </div>
    </div>
  );
}
