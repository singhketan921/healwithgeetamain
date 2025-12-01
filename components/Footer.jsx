'use client';

import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const logo = "/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#F5F2EE] text-[#524E48] py-16 px-6 border-t border-[#EAE4DC]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="HealWithGeeta" className="w-14 h-14 object-contain" />
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">HealWithGeeta</p>
                <p className="font-serif text-xl">Ritual Wellness Gazette</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#524E48]/80 max-w-md">
              A modern apothecary of astrology, healing, and high-touch rituals for luminous women everywhere.
            </p>
            <div className="flex gap-3">
              {[FaYoutube, FaInstagram, FaFacebookF, FaXTwitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#B0AAA0] flex items-center justify-center text-[#524E48] hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">Offerings</p>
            <ul className="space-y-2 text-sm">
              {["Consultations", "Healings", "Courses", "Products"].map((item) => (
                <li key={item}>
                  <a className="hover:text-[#A59079] transition" href={`/${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">Studio</p>
            <ul className="space-y-2 text-sm">
              {["Contact", "Privacy", "Terms", "Refunds"].map((item) => (
                <li key={item}>
                  <a className="hover:text-[#A59079] transition" href={`/${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0] text-center">
          © {new Date().getFullYear()} HealWithGeeta · Crafted with cosmic intention
        </div>
      </div>
    </footer>
  );
}
