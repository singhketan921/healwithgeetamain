import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa6";
import { PiArrowUpRight, PiFlowerLotus, PiMapPinArea, PiSparkle } from "react-icons/pi";

const logo = "/assets/navicon.png";
const mandala = "/assets/hero-mandala.svg";

const footerSections = {
  offerings: [
    { label: "Consultations", href: "/consultations" },
    { label: "Healings", href: "/healings" },
    { label: "Courses", href: "/courses" },
    { label: "Workshops", href: "/workshops" },
  ],
  studio: [
    { label: "About", href: "/about" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

const socials = [
  { label: "Instagram", href: "https://instagram.com/healwithgeeta", icon: FaInstagram },
  { label: "YouTube", href: "https://youtube.com/@healwithgeeta", icon: FaYoutube },
  { label: "Facebook", href: "https://www.facebook.com/", icon: FaFacebookF },
];

const contactItems = [
  { label: "Mumbai, India", href: "https://www.google.com/maps/search/?api=1&query=HealWithGeeta", icon: PiMapPinArea },
  { label: "+91 98208 88862", href: "tel:+919820888862", icon: FaPhone },
  { label: "hello@healwithgeeta.com", href: "mailto:hello@healwithgeeta.com", icon: FaRegEnvelope },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e4cfaa] bg-[#f8f3ef] px-5 py-12 text-[#3d403a] sm:px-8 lg:px-[5vw]">
      <img
        src={mandala}
        alt=""
        className="pointer-events-none absolute -right-16 top-8 h-64 w-64 object-contain opacity-[0.045] sm:h-80 sm:w-80"
      />
      <img
        src={mandala}
        alt=""
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rotate-45 object-contain opacity-[0.035]"
      />

      <div className="relative mx-auto max-w-[1380px]">
        <div className="flex items-center gap-4 text-[#a77629]" aria-hidden="true">
          <span className="h-px flex-1 bg-[#d8b680]" />
          <PiFlowerLotus className="text-[24px]" />
          <span className="h-px flex-1 bg-[#d8b680]" />
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[1.05fr_1.4fr_0.95fr] lg:gap-14 lg:py-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-[#475028]">
              <img src={logo} alt="" className="h-12 w-12 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-[24px] font-bold uppercase sm:text-[28px]">
                  Geeta Sharma
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6d5d34]">
                  Occult Diagnosis &amp; Healing Expert
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm font-serif text-[26px] font-semibold leading-[1.08] text-[#667030] sm:text-[31px]">
              A quieter path into guidance, healing, and inner clarity.
            </p>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.75] text-[#6e6b63]">
              Consultations, energy healing, workshops, and learning spaces for
              seekers moving with intention.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              ["Offerings", footerSections.offerings],
              ["Studio", footerSections.studio],
              ["Legal", footerSections.legal],
            ].map(([title, items]) => (
              <div key={title}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a77629]">
                  {title}
                </p>
                <ul className="space-y-2.5 text-[14px] text-[#4f4c3f]">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        className="group inline-flex items-center gap-2 transition hover:text-[#667030]"
                        href={item.href}
                      >
                        <span>{item.label}</span>
                        <PiArrowUpRight
                          className="text-[13px] text-[#a77629] opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:justify-self-end">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a77629]">
              Connect
            </p>
            <div className="space-y-3 text-[14px] text-[#4f4c3f]">
              {contactItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-3 transition hover:text-[#667030]"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="text-[16px] text-[#a77629]" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8b680] bg-[#fff8ec]/50 text-[#a77629] transition hover:border-[#667030] hover:bg-[#667030] hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="text-[15px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#e4cfaa] pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6d5d34] sm:flex-row sm:items-center sm:justify-between">
          <p>(C) {new Date().getFullYear()} HealWithGeeta. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <PiSparkle className="text-[#a77629]" aria-hidden="true" />
            Crafted with cosmic intention
          </p>
        </div>
      </div>
    </footer>
  );
}
