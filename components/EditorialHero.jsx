'use client';

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
    <section className="relative overflow-hidden bg-[#EAE4DC] py-16 sm:py-20 text-[#524E48]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-[0.65rem] uppercase tracking-[0.5em] text-[#B0AAA0]">
              {eyebrow}
            </p>
            <div className="space-y-4">
              <h1 className="font-serif text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] leading-[1.1]">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[0.7rem] uppercase tracking-[0.4em] text-[#B0AAA0]">
                  {subtitle}
                </p>
              )}
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[#524E48]/85 max-w-2xl">
              {description}
            </p>
            <div className="flex flex-col gap-3 mt-4 sm:flex-row">
              {primary && (
                <a
                  href={primary.href}
                  className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] border border-[#524E48] rounded-full hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
                >
                  {primary.label}
                </a>
              )}
              {secondary && (
                <a
                  href={secondary.href}
                  className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] border border-[#B0AAA0] text-[#B0AAA0] rounded-full hover:text-[#524E48] hover:border-[#524E48] transition"
                >
                  {secondary.label}
                </a>
              )}
            </div>
          </div>

          <div className="rounded-[30px] sm:rounded-[36px] border border-[#EAE4DC] bg-white shadow-[0_30px_80px_rgba(82,78,72,0.12)] overflow-hidden min-h-[260px] sm:min-h-[360px] flex items-center justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
