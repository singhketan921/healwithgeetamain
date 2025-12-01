'use client';

const services = [
  { id: 1, title: "Astrology Consultation", blurb: "Natal, transit and relationship charting woven into actionable rituals." },
  { id: 2, title: "Tarot & Timeline Reading", blurb: "Editorial spreads that frame your current chapter, cast in archetypes." },
  { id: 3, title: "Energy + Somatic Healing", blurb: "Hybrid Reiki, pranic breath, and sound therapy choreographed per body." },
  { id: 4, title: "Botanical Prescriptions", blurb: "Custom tonics, serums and altar mists blended to your elemental makeup." },
];

export default function Services() {
  return (
    <section className="bg-white py-24 text-[#524E48]">
      <div className="max-w-6xl px-6 mx-auto space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
              Columns
            </p>
            <h2 className="font-serif text-[2.5rem] leading-tight">
              The Service Portfolio
            </h2>
          </div>
          <a
            href="/consultations#consultationOfferings"
            className="uppercase tracking-[0.4em] text-xs border px-6 py-3 rounded-full border-[#524E48] hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
          >
            View All
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="rounded-[30px] border border-[#EAE4DC] bg-[#F6F3EF] shadow-[0_22px_60px_rgba(82,78,72,0.08)] p-8 flex flex-col gap-4"
            >
              <div className="text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
                {String(index + 1).padStart(2, "0")} · Service
              </div>
              <h3 className="font-serif text-2xl leading-tight">{service.title}</h3>
              <p className="text-sm leading-relaxed text-[#524E48]/80 flex-1">
                {service.blurb}
              </p>
              <a
                href="/consultations#bookconsultation"
                className="self-start text-xs uppercase tracking-[0.4em] border px-5 py-2.5 rounded-full border-[#524E48] hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
              >
                Book
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
