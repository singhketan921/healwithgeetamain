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
    <section className="bg-[#f8f3ef] px-6 py-24 text-[#ad7f53] sm:py-28">
      <Reveal className="mx-auto max-w-[1440px] text-center">
        <p className="mb-5 flex items-center justify-center gap-3 text-[22px] font-normal text-[#ad7f53]">
          <span className="text-[25px] leading-none">✽</span>
          Dispatches
        </p>
        <h2 className="text-[48px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[70px] md:text-[84px]">
          Stay Connected
          <span className="mt-2 block font-serif text-[54px] italic leading-none sm:text-[76px] md:text-[88px]">
            With Us
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[1.45] text-[#ad7f53]/85">
          Follow the studio diary for daily rituals, astrology notes, and behind the
          scenes of new products.
        </p>

        <div className="mt-16 grid border-l border-t border-[#ad7f53] sm:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[300px] flex-col items-center justify-center border-b border-r border-[#ad7f53] bg-[#f8f3ef] px-8 py-12 text-center transition-colors duration-300 hover:bg-[#ad7f53]"
            >
              <span className="mb-8 flex h-16 w-16 items-center justify-center border border-[#ad7f53] text-[#ad7f53] transition-colors duration-300 group-hover:border-white group-hover:text-white">
                <Icon className="text-[28px]" />
              </span>
              <h3 className="text-[30px] font-normal leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white sm:text-[34px]">
                {label}
              </h3>
              <div className="my-7 h-px w-full bg-[#ad7f53] transition-colors duration-300 group-hover:bg-white" />
              <p className="text-[18px] leading-tight text-[#ad7f53] transition-colors duration-300 group-hover:text-white">
                @healwithgeeta
              </p>
            </a>
          ))}
        </div>

      </Reveal>
    </section>
  );
}
