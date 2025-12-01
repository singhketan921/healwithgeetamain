'use client';

const aboutImg = "/assets/images/about.png";

export default function About() {
  return (
    <section className="bg-white py-24 text-[#524E48]">
      <div className="max-w-6xl px-6 mx-auto lg:px-0">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3 uppercase text-xs tracking-[0.5em] text-[#B0AAA0] flex flex-col gap-4">
            <span className="block h-[1px] w-16 bg-[#B0AAA0]" />
            <p>Field Notes</p>
            <p>Vedic Experiments &amp; Sacred Research</p>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-[#B0AAA0]">
                Feature Essay
              </p>
              <h2 className="font-serif text-[2.8rem] leading-tight">
                A healer’s atelier devoted to radical softness
              </h2>
            </div>

            <p className="text-lg leading-[1.9]">
              <span className="float-left mr-3 text-5xl font-serif text-[#A59079]">
                W
              </span>
              ith over a decade of clinical-grade spiritual work,
              HealWithGeeta unfolds like an artisan magazine—each consultation
              a feature story, each product a limited print. Astrology charts
              are penned beside lunar almanacs, herbal decoctions steep
              overnight, and clients are cast not as patients but as
              protagonists reclaiming their narrative. Our practice spans natal
              charting, intuitive tarot, restorative breathwork, and bespoke
              energy formulas—each crafted to honor the psyche, skin, and
              spirit as one continuum.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="p-6 border rounded-3xl border-[#EAE4DC] bg-[#EAE4DC]/35">
                <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0] mb-3">
                  Credentials
                </p>
                <h4 className="font-serif text-2xl leading-tight">
                  Certified Vedic astrologer &amp; clinical energy therapist
                </h4>
              </article>
              <article className="p-6 border rounded-3xl border-[#EAE4DC] bg-[#EAE4DC]/35">
                <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0] mb-3">
                  Community
                </p>
                <h4 className="font-serif text-2xl leading-tight">
                  5,000+ sessions | circles hosted across 12 countries
                </h4>
              </article>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="relative w-full rounded-[32px] overflow-hidden border border-[#EAE4DC]">
              <img
                src={aboutImg}
                alt="HealWithGeeta studio"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 text-sm uppercase tracking-[0.35em] text-[#B0AAA0]">
              <p>Dispatches</p>
              <p>Moonlit retreats · Botanical labs · Virtual salons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
