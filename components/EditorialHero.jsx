'use client';

import Reveal from "@/components/Reveal";

export default function EditorialHero({
  eyebrow = "Feature",
  title,
  subtitle,
  description,
  primary,
  secondary,
  media,
}) {
  return (
    <section
      className="hero-section relative overflow-hidden pb-12 sm:pb-20 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)" }}
    >
      <div className="hero-main mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="space-y-6">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
              {eyebrow}
            </p>
            <div className="space-y-4">
              <h1 className="text-[30px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.15] tracking-[0.06em]">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                  {subtitle}
                </p>
              )}
            </div>
            <p className="hidden sm:block text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c] max-w-2xl">
              {description}
            </p>
            <div className="flex flex-col gap-3 mt-4 sm:flex-row">
              {primary && (
                <a
                  href={primary.href}
                  className="min-w-[200px] sm:min-w-[230px] rounded-[12px] bg-white px-8 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
                >
                  {primary.label}
                </a>
              )}
              {secondary && (
                <a
                  href={secondary.href}
                  className="min-w-[200px] sm:min-w-[230px] rounded-[12px] border border-[#8f857c] bg-transparent px-8 py-3 text-[14px] sm:text-[16px] font-semibold text-[#6b625a] text-center"
                >
                  {secondary.label}
                </a>
              )}
            </div>
          </Reveal>

          <Reveal
            delay={0.2}
            className="rounded-[16px] border border-[#e5ded6] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] overflow-hidden min-h-[240px] sm:min-h-[360px] flex items-center justify-center"
          >
            {typeof media === "string" ? (
              <img
                src={media}
                alt={title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            ) : (
              media
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}