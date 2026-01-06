'use client';

import Reveal from "@/components/Reveal";

const CHECKLIST = [
  "Private consultation rooms",
  "Meditation and sound spaces",
  "Ceremony atelier and apothecary",
];

export default function VisitOurSacredPlace() {
  return (
    <section className="relative overflow-hidden bg-[#EEECE9] px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-0 top-16 h-72 w-72 rounded-full bg-white blur-[150px]" />
        <span className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-[#CDBFB4] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="space-y-6 text-[#6b625a]">
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
            Studio visit
          </p>
          <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
            Visit our sacred place
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
            Our Mumbai studio feels like a magazine set: linen sofas, sound baths,
            and apothecary shelves arranged with intention. Book a private
            ceremony or plan a studio drop in advance.
          </p>

          <ul className="space-y-3">
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#9a938c]"
              >
                <span className="block h-px w-10 bg-[#9a938c]" />
                <span className="text-[15px] font-semibold normal-case tracking-normal text-[#6b625a]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="https://www.google.com/maps/search/?api=1&query=HealWithGeeta"
            target="_blank"
            rel="noreferrer"
            className="rounded-[12px] bg-white px-8 py-3 text-[14px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
          >
            Get directions
          </a>
        </Reveal>

        <Reveal delay={0.2} direction="up" className="rounded-[16px] border border-[#e7dfd6] bg-white/90 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
          <iframe
            title="studio-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8837030282037!2d-86.80248998481135!3d33.52068288075259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891be8b3f6239f%3A0x9ad07e3f02e7ab23!2sBirmingham%2C%20AL!5e0!3m2!1sen!2sus!4v1695999439478!5m2!1sen!2sus"
            width="100%"
            height="380"
            className="w-full rounded-[16px] border border-[#e7dfd6]"
            allowFullScreen
            loading="lazy"
          />
          <div className="mt-4 flex flex-col gap-2 rounded-[16px] border border-[#e7dfd6] bg-[#fbf8f5] px-5 py-4 text-[14px] text-[#6b625a]">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
              By appointment only
            </p>
            <p>Address shared upon confirmation. Wheelchair access available.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
