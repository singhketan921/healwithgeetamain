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
    <section className="relative overflow-hidden border-t border-[#d9d2ca] bg-[#EEECE9] px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-white blur-[140px]" />
      </div>

      <Reveal className="relative z-10 mx-auto max-w-[1200px] text-center text-[#6b625a]">
        <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
          Dispatches
        </p>
        <h2 className="mt-3 text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em] leading-tight">
          Stay connected with HealWithGeeta
        </h2>
        <p className="mt-4 text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
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
              className="flex items-center justify-between rounded-[16px] border border-[#e7dfd6] bg-white/90 px-6 py-4 text-left shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            >
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">{label}</p>
                <p className="text-[18px] sm:text-[20px] font-semibold text-[#6b625a]">@healwithgeeta</p>
              </div>
              <span className="rounded-full bg-[#fbf8f5] p-3 text-[#6d655d]">
                <Icon className="text-lg" />
              </span>
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-10 rounded-[12px] bg-white px-10 py-3 text-[14px] font-semibold text-[#6b625a] shadow-[0_8px_18px_rgba(0,0,0,0.12)] text-center"
        >
          Follow us
        </a>
      </Reveal>
    </section>
  );
}
