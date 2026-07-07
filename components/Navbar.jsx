'use client';

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
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
  { name: "About", href: "/#about", icon: FaRegUser },
  { name: "Services", href: "/courses", icon: GiFlowerPot, hasMenu: true },
  { name: "Consultation", href: "/consultations", icon: FaRegComment },
  { name: "Workshops", href: "/workshops", icon: FaRegCalendarAlt },
  { name: "Blog", href: "/blogs", icon: GiSprout },
  { name: "Contact", href: "/contact", icon: FaRegEnvelope },
];

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
  const { toggleCart, items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0);

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
          onClick={() => setIsOpen(false)}
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5 text-[#475028] xl:static xl:translate-x-0 xl:gap-3 xl:border-r xl:border-[#ead2ae] xl:pr-8"
        >
          <img
            src="/assets/navicon.png"
            alt=""
            className="h-8 w-8 shrink-0 object-contain xl:h-14 xl:w-14"
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

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative flex min-w-[104px] flex-col items-center justify-center gap-1.5 px-5 text-[14px] font-medium text-[#28291c] transition-colors hover:text-[#667030] ${
                  index > 0 ? "border-l border-[#ead2ae]" : ""
                }`}
              >
                <Icon className="h-6 w-6 text-[#a77629] transition-colors group-hover:text-[#667030]" aria-hidden="true" />
                <span className="flex items-center gap-1">
                  {link.name}
                  {link.hasMenu ? <FaAngleDown className="h-3 w-3 text-[#a77629]" aria-hidden="true" /> : null}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#a77629]" aria-hidden="true" />
                {link.name === "Home" ? (
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
          <nav className="flex h-full flex-col justify-center px-[18%] py-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group inline-flex items-center gap-3 py-2.5 font-serif text-[36px] leading-none text-[#28291c] transition-colors hover:text-[#667030] sm:text-[42px]"
              >
                <span>{link.name}</span>
                {link.name === "Home" ? (
                  <span className="text-[#ad7f53] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
                    ↗
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
