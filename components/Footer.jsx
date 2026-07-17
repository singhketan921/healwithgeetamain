import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa6";
import { PiArrowUpRight, PiFlowerLotus, PiMapPinArea, PiSparkle } from "react-icons/pi";

const logo = "/assets/drive/HEALWITHGEETA%20WEBSITE/LOGO/logo-transparent-cropped.png";
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
    <footer className="relative overflow-hidden bg-[#fff8ec] px-4 py-10 text-[#3d403a] sm:px-8 sm:py-12 lg:px-[5vw]">
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
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8b680] to-[#d8b680]/70" />
          <PiFlowerLotus className="text-[24px]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d8b680] to-[#d8b680]/70" />
        </div>

        <div className="grid gap-9 py-9 sm:py-10 lg:grid-cols-[1.05fr_1.4fr_0.95fr] lg:gap-14 lg:py-12">
          <div className="text-center sm:text-left">
            <Link
              href="/"
              className="mx-auto inline-flex max-w-full flex-col items-center gap-2 text-[#475028] sm:mx-0 sm:flex-row sm:items-center sm:gap-3"
            >
              <img
                src={logo}
                alt="Faith Healers"
                className="h-14 w-[94px] shrink-0 object-contain sepia-[0.28] saturate-[0.82] hue-rotate-[352deg] contrast-[0.96] sm:h-16 sm:w-[104px]"
              />
              <span className="flex min-w-0 flex-col leading-none">
                <span className="font-serif text-[22px] font-bold uppercase sm:text-[28px]">
                  Geeta Sharma
                </span>
                <span className="mt-1 max-w-[230px] text-center text-[9px] font-semibold uppercase tracking-[0.08em] text-[#6d5d34] sm:max-w-none sm:text-left sm:text-[10px] sm:tracking-[0.12em]">
                  Occult Diagnosis &amp; Healing Expert
                </span>
              </span>
            </Link>

            <p className="mx-auto mt-6 max-w-sm font-serif text-[24px] font-semibold leading-[1.12] text-[#667030] sm:mx-0 sm:text-[31px] sm:leading-[1.08]">
              A quieter path into guidance, healing, and inner clarity.
            </p>
            <p className="mx-auto mt-4 max-w-sm text-[14px] leading-[1.7] text-[#6e6b63] sm:mx-0 sm:leading-[1.75]">
              Consultations, energy healing, workshops, and learning spaces for
              seekers moving with intention.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-7 text-center sm:grid-cols-3 sm:text-left">
            {[
              ["Offerings", footerSections.offerings],
              ["Studio", footerSections.studio],
              ["Legal", footerSections.legal],
            ].map(([title, items]) => (
              <div key={title} className={title === "Legal" ? "col-span-2 sm:col-span-1" : undefined}>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a77629] sm:mb-4 sm:text-[11px] sm:tracking-[0.24em]">
                  {title}
                </p>
                <ul className="space-y-2.5 text-[14px] leading-snug text-[#4f4c3f]">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        className="group inline-flex max-w-full items-center justify-center gap-1.5 transition hover:text-[#667030] sm:justify-start sm:gap-2"
                        href={item.href}
                      >
                        <span className="min-w-0 break-words">{item.label}</span>
                        <PiArrowUpRight
                          className="hidden shrink-0 text-[13px] text-[#a77629] opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:block"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center sm:text-left lg:justify-self-end">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a77629] sm:text-[11px] sm:tracking-[0.24em]">
              Connect
            </p>
            <div className="mx-auto max-w-sm space-y-3 text-[14px] text-[#4f4c3f] sm:mx-0">
              {contactItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex min-w-0 items-center justify-center gap-3 transition hover:text-[#667030] sm:justify-start"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="shrink-0 text-[16px] text-[#a77629]" aria-hidden="true" />
                  <span className="min-w-0 break-words">{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-2.5 sm:justify-start">
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

        <div className="flex flex-col items-center gap-3 border-t border-[#e8d5b4] pt-5 text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.08em] text-[#6d5d34] sm:flex-row sm:justify-between sm:pt-6 sm:text-left sm:text-[11px] sm:tracking-[0.16em]">
          <p>(C) {new Date().getFullYear()} HealWithGeeta. All rights reserved.</p>
          <p className="inline-flex items-center justify-center gap-2">
            <PiSparkle className="shrink-0 text-[#a77629]" aria-hidden="true" />
            Crafted with cosmic intention
          </p>
        </div>
      </div>
    </footer>
  );
}
