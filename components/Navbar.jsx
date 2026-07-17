'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getAllCourses } from "@/lib/data/courses";
import { getAllHealingModalities } from "@/lib/data/healings";
import {
  FaAngleDown,
  FaRegCalendarAlt,
  FaRegComment,
  FaRegEnvelope,
  FaRegUser,
} from "react-icons/fa";
import { GiFlowerPot, GiLotus, GiSprout } from "react-icons/gi";

const links = [
  { name: "Home", href: "/", icon: GiLotus },
  { name: "About", href: "/about", icon: FaRegUser },
  { name: "Services", href: "/courses", icon: GiFlowerPot, hasMenu: true },
  { name: "Consultation", href: "/consultations", icon: FaRegComment },
  { name: "Workshops", href: "/workshops", icon: FaRegCalendarAlt },
  { name: "Blog", href: "/blogs", icon: GiSprout },
  { name: "Contact", href: "/contact", icon: FaRegEnvelope },
];

const serviceMenu = [
  {
    title: "Courses",
    href: "/courses",
    eyebrow: "Learning paths",
    items: getAllCourses().map((course) => ({
      title: course.title,
      href: `/courses/${course.id}`,
    })),
  },
  {
    title: "Healings",
    href: "/healings",
    eyebrow: "Healing sessions",
    items: getAllHealingModalities().map((healing) => ({
      title: healing.title,
      href: `/healings/${healing.id}`,
    })),
  },
];

const brandLogo = "/assets/drive/HEALWITHGEETA%20WEBSITE/LOGO/logo-transparent-cropped.png";

function getActiveHref(pathname) {
  if (pathname === "/") return "/";

  const exactMatch = links.find((link) => link.href === pathname);
  if (exactMatch) return exactMatch.href;

  if (pathname.startsWith("/courses") || pathname.startsWith("/products") || pathname.startsWith("/healings")) {
    return "/courses";
  }

  return links.find((link) => link.href !== "/" && pathname.startsWith(link.href))?.href || "";
}

function HamburgerIcon({ className = "" }) {
  return (
    <span className={`flex flex-col items-center justify-center gap-[3px] ${className}`} aria-hidden="true">
      <span className="h-[2px] w-4 rounded-full bg-current lg:w-5" />
      <span className="h-[2px] w-4 rounded-full bg-current lg:w-5" />
      <span className="h-[2px] w-4 rounded-full bg-current lg:w-5" />
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedHref, setClickedHref] = useState("");
  const [dismissedServicesMenu, setDismissedServicesMenu] = useState(false);
  const pathname = usePathname();
  const { toggleCart, items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const activeHref = clickedHref.startsWith("/#") && pathname === "/" ? clickedHref : getActiveHref(pathname);

  const handleNavClick = (href) => {
    setClickedHref(href);
    setIsOpen(false);
  };

  const handleDropdownClick = (href) => {
    handleNavClick(href);
    setDismissedServicesMenu(true);
    document.activeElement?.blur?.();
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-[5vw] lg:pt-6"
    >
      <div className="relative flex h-[60px] w-full items-center justify-between rounded-[18px] border border-[#f5dfc0] bg-[#fff1da]/92 px-4 text-[#28291c] shadow-[0_18px_34px_rgba(104,74,39,0.16)] backdrop-blur-md sm:px-6 xl:h-[88px] xl:rounded-[22px] xl:px-7">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#667030] text-white transition-transform duration-200 hover:scale-105 xl:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <HamburgerIcon />
        </button>

        <Link
          href="/"
          onClick={() => handleNavClick("/")}
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5 text-[#475028] xl:static xl:translate-x-0 xl:gap-3 xl:border-r xl:border-[#ead2ae] xl:pr-8"
        >
          <img
            src={brandLogo}
            alt="Faith Healers"
            className="h-10 w-[64px] shrink-0 object-contain sepia-[0.28] saturate-[0.82] hue-rotate-[352deg] contrast-[0.96] xl:h-16 xl:w-[104px]"
          />
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-serif text-[20px] font-bold uppercase sm:text-[24px] xl:text-[25px]">
              Geeta Sharma
            </span>
            <span className="mt-1 hidden whitespace-nowrap text-[10px] font-semibold uppercase text-[#6d5d34] sm:block xl:text-[11px]">
              Occult Diagnosis &amp; Healing Expert
            </span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-stretch justify-center xl:flex">
          {links.map((link, index) => {
            const Icon = link.icon;
            const isActive = activeHref === link.href;

            if (link.hasMenu) {
              return (
                <div
                  key={link.name}
                  onMouseEnter={() => setDismissedServicesMenu(false)}
                  onMouseLeave={() => setDismissedServicesMenu(false)}
                  className={`group relative flex min-w-[104px] flex-col items-center justify-center border-l border-[#ead2ae] ${
                    isActive ? "bg-[#f6e3bd]/52" : ""
                  }`}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex h-full w-full flex-col items-center justify-center gap-1.5 px-5 text-[14px] font-medium transition-colors hover:text-[#667030] ${
                      isActive ? "text-[#667030]" : "text-[#28291c]"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 transition-colors group-hover:text-[#667030] ${
                        isActive ? "text-[#667030]" : "text-[#a77629]"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="flex items-center gap-1">
                      {link.name}
                      <FaAngleDown
                        className={`h-3 w-3 transition-transform group-hover:rotate-180 ${
                          isActive ? "text-[#667030]" : "text-[#a77629]"
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a77629]" aria-hidden="true" />
                    {isActive ? (
                      <span className="absolute bottom-2 h-[2px] w-10 rounded-full bg-[#667030]" aria-hidden="true" />
                    ) : null}
                  </Link>

                  {!dismissedServicesMenu ? (
                    <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[760px] -translate-x-1/2 translate-y-2 rounded-[22px] border border-[#ead2ae] bg-[#fff8ed] p-3 text-left text-[#28291c] opacity-0 shadow-[0_28px_70px_rgba(104,74,39,0.22)] transition-all duration-200 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-[#ead2ae] bg-[#fff8ed]" aria-hidden="true" />
                      <div className="grid grid-cols-[1.35fr_0.9fr] gap-3">
                        {serviceMenu.map((section) => (
                          <div
                            key={section.title}
                            className="min-w-0 rounded-[16px] border border-[#f0ddbe] bg-white/52 p-4"
                          >
                            <div className="mb-3 flex items-start justify-between gap-3 border-b border-[#ead2ae] pb-3">
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a77629]">
                                  {section.eyebrow}
                                </p>
                                <Link
                                  href={section.href}
                                  onClick={() => handleDropdownClick(section.href)}
                                  className="mt-1 inline-flex items-center gap-2 font-serif text-[23px] font-semibold leading-none text-[#475028] transition-colors hover:text-[#667030]"
                                >
                                  <span>{section.title}</span>
                                  <span className="text-[16px]" aria-hidden="true">-&gt;</span>
                                </Link>
                              </div>
                              <span className="rounded-full border border-[#d9bd8c] bg-[#fff1da] px-2.5 py-1 text-[11px] font-semibold text-[#7d642f]">
                                {section.items.length}
                              </span>
                            </div>
                            <div className={section.title === "Courses" ? "grid grid-cols-2 gap-1.5" : "grid gap-1.5"}>
                              {section.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => handleDropdownClick(item.href)}
                                  className={`group/item flex min-h-[40px] items-center justify-between gap-2 rounded-[10px] px-3 py-2 text-[13px] font-medium leading-snug transition-colors hover:bg-[#f3e2c5] ${
                                    pathname === item.href ? "bg-[#f3e2c5] text-[#667030]" : "text-[#5d4b2c]"
                                  }`}
                                >
                                  <span>{item.title}</span>
                                  <span className="text-[#a77629] opacity-0 transition-opacity group-hover/item:opacity-100" aria-hidden="true">-&gt;</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex min-w-[104px] flex-col items-center justify-center gap-1.5 px-5 text-[14px] font-medium transition-colors hover:text-[#667030] ${
                  isActive ? "bg-[#f6e3bd]/52 text-[#667030]" : "text-[#28291c]"
                } ${
                  index > 0 ? "border-l border-[#ead2ae]" : ""
                }`}
              >
                <Icon
                  className={`h-6 w-6 transition-colors group-hover:text-[#667030] ${
                    isActive ? "text-[#667030]" : "text-[#a77629]"
                  }`}
                  aria-hidden="true"
                />
                <span className="flex items-center gap-1">
                  {link.name}
                  {link.hasMenu ? (
                    <FaAngleDown
                      className={`h-3 w-3 ${isActive ? "text-[#667030]" : "text-[#a77629]"}`}
                      aria-hidden="true"
                    />
                  ) : null}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#a77629]" aria-hidden="true" />
                {isActive ? (
                  <span className="absolute bottom-2 h-[2px] w-10 rounded-full bg-[#667030]" aria-hidden="true" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end xl:border-l xl:border-[#ead2ae] xl:pl-5">
          <button
            type="button"
            onClick={toggleCart}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#667030] text-white transition-transform duration-200 hover:scale-105 xl:h-11 xl:w-11"
            aria-label={`Open cart with ${itemCount} item${itemCount === 1 ? "" : "s"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="currentColor"
              className="h-6 w-6 xl:h-8 xl:w-8"
            >
              <circle cx="32" cy="25" r="13" />
              <path d="M13 58c3-13 13-20 19-20s16 7 19 20Z" />
            </svg>
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[11px] font-semibold text-[#ad7f53]">
                {itemCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed left-4 right-4 top-[84px] z-40 h-[calc(100vh-100px)] overflow-hidden rounded-[18px] border border-[#d8b680] bg-[#fff1da] shadow-2xl animate-fadeIn sm:left-6 sm:right-auto sm:w-[86vw] sm:max-w-[500px] xl:hidden">
          <nav className="flex h-full flex-col overflow-y-auto px-[12%] py-7">
            {links.map((link) => {
              const isActive = activeHref === link.href;

              if (link.hasMenu) {
                return (
                  <div key={link.name} className="py-2">
                    <Link
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`group inline-flex items-center gap-3 font-serif text-[36px] leading-none transition-colors hover:text-[#667030] sm:text-[42px] ${
                        isActive ? "text-[#667030]" : "text-[#28291c]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <FaAngleDown className="h-5 w-5 text-[#ad7f53]" aria-hidden="true" />
                    </Link>

                    <div className="mt-4 grid gap-3">
                      {serviceMenu.map((section) => (
                        <div key={section.title} className="rounded-[16px] border border-[#e4c797] bg-[#fff8ed] p-4">
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a77629]">
                                {section.eyebrow}
                              </p>
                              <Link
                                href={section.href}
                                onClick={() => handleNavClick(section.href)}
                                className="mt-1 inline-flex items-center gap-2 font-serif text-[24px] font-semibold leading-none text-[#667030]"
                              >
                                <span>{section.title}</span>
                                <span className="text-[15px]" aria-hidden="true">-&gt;</span>
                              </Link>
                            </div>
                            <span className="rounded-full border border-[#d9bd8c] bg-[#fff1da] px-2.5 py-1 text-[11px] font-semibold text-[#7d642f]">
                              {section.items.length}
                            </span>
                          </div>
                          <div className="grid gap-1.5">
                            {section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`block rounded-[9px] px-3 py-2 text-[15px] font-medium leading-snug transition-colors hover:bg-[#f3e2c5] hover:text-[#667030] ${
                                  pathname === item.href ? "bg-[#f3e2c5] text-[#667030]" : "text-[#5d4b2c]"
                                }`}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group inline-flex items-center gap-3 py-2.5 font-serif text-[36px] leading-none transition-colors hover:text-[#667030] sm:text-[42px] ${
                    isActive ? "text-[#667030]" : "text-[#28291c]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="text-[#ad7f53] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
                      ↗
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
