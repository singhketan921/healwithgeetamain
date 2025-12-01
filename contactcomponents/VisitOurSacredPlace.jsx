'use client';

import { motion } from "framer-motion";

const CHECKLIST = [
  "Private consultation rooms",
  "Meditation and sound spaces",
  "Ceremony atelier and apothecary",
];

export default function VisitOurSacredPlace() {
  return (
    <section className="relative overflow-hidden bg-[#EAE4DC] px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-0 top-16 h-72 w-72 rounded-full bg-white blur-[150px]" />
        <span className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-[#CDBFB4] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-[#524E48]"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-[#B0AAA0]">
            Studio visit
          </p>
          <h2 className="font-serif text-[2.7rem] leading-tight">
            Visit our sacred place
          </h2>
          <p className="text-base text-[#524E48]/80">
            Our Mumbai studio feels like a magazine set: linen sofas, sound baths,
            and apothecary shelves arranged with intention. Book a private
            ceremony or plan a studio drop in advance.
          </p>

          <ul className="space-y-3">
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#A59079]"
              >
                <span className="block h-px w-10 bg-[#A59079]" />
                <span className="font-serif text-base normal-case tracking-normal text-[#524E48]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="https://www.google.com/maps/search/?api=1&query=HealWithGeeta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#524E48] px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#524E48] transition hover:bg-[#524E48] hover:text-[#EAE4DC]"
          >
            Get directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-[#EAE4DC] bg-white/90 p-4 shadow-[0_25px_80px_rgba(82,78,72,0.12)]"
        >
          <iframe
            title="studio-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8837030282037!2d-86.80248998481135!3d33.52068288075259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891be8b3f6239f%3A0x9ad07e3f02e7ab23!2sBirmingham%2C%20AL!5e0!3m2!1sen!2sus!4v1695999439478!5m2!1sen!2sus"
            width="100%"
            height="380"
            className="w-full rounded-[24px] border border-[#EAE4DC]"
            allowFullScreen
            loading="lazy"
          />
          <div className="mt-4 flex flex-col gap-2 rounded-[20px] border border-[#EAE4DC] bg-[#F8F6F3] px-5 py-4 text-sm text-[#524E48]">
            <p className="text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
              By appointment only
            </p>
            <p>Address shared upon confirmation. Wheelchair access available.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
