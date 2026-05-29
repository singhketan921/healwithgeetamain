import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const logo = "/assets/images/logo 1.jpg";

const footerSections = {
  offerings: [
    { label: "Consultations", href: "/consultations" },
    { label: "Healings", href: "/healings" },
    { label: "Courses", href: "/courses" },
  ],
  studio: [
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white text-[#524E48] py-16 px-6 border-t border-[#D0BFA9]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="HealWithGeeta" className="w-14 h-14 object-contain" />
              <div>
                <p className="font-serif text-xl">FaithHealers</p>
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
                  className="w-10 h-10 rounded-full border border-[#B0AAA0] flex items-center justify-center text-[#524E48] hover:bg-[#524E48] hover:text-[#D0BFA9] transition"
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
              {footerSections.offerings.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-[#A59079] transition" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">Studio</p>
            <ul className="space-y-2 text-sm">
              {footerSections.studio.map((item) => (
                <li key={item.label}>
                  <Link className="hover:text-[#A59079] transition" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0] text-center">
          (C) {new Date().getFullYear()} FaithHealers | Crafted with cosmic intention
        </div>
      </div>
    </footer>
  );
}
