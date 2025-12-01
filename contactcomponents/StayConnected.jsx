'use client';

import Reveal from "@/components/Reveal";
import { FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/" },
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/" },
  { icon: FaXTwitter, label: "Twitter", href: "https://twitter.com/" },
];

export default function StayConnected() {
  return (
    <section className="relative overflow-hidden border-t border-[#D5CCC4] bg-[#F4EEE7] px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-white blur-[140px]" />
      </div>

      <Reveal className="relative z-10 mx-auto max-w-4xl text-center text-[#524E48]">
        <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
          Dispatches
        </p>
        <h2 className="mt-3 font-serif text-[2.6rem] leading-tight">
          Stay connected with HealWithGeeta
        </h2>
        <p className="mt-4 text-base text-[#524E48]/80">
          Follow the studio diary for daily rituals, astrology notes, and behind the
          scenes of new products.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[28px] border border-[#EAE4DC] bg-white/90 px-6 py-4 text-left shadow-[0_18px_40px_rgba(82,78,72,0.08)]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#B0AAA0]">{label}</p>
                <p className="font-serif text-xl text-[#524E48]">@healwithgeeta</p>
              </div>
              <span className="rounded-full bg-[#F6F3EF] p-3 text-[#A59079]">
                <Icon className="text-lg" />
              </span>
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-[#524E48] px-10 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#524E48] transition hover:bg-[#524E48] hover:text-[#F4EEE7]"
        >
          Follow us
        </a>
      </Reveal>
    </section>
  );
}
