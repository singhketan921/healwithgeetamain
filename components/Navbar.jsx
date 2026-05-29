'use client';

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Programs", href: "/courses" },
  { name: "Consultation", href: "/consultations" },
  { name: "Workshops", href: "/workshops" },
  { name: "FH music", href: "/fhmusic" },
  { name: "Contact", href: "/contact" },
];

function HamburgerIcon({ className = "" }) {
  return (
    <span className={`flex flex-col items-center justify-center gap-[4px] ${className}`} aria-hidden="true">
      <span className="h-[2px] w-5 rounded-full bg-current" />
      <span className="h-[2px] w-5 rounded-full bg-current" />
      <span className="h-[2px] w-5 rounded-full bg-current" />
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-[#d7c4ad] bg-white"
    >
      <div className="relative flex h-[72px] w-full items-center justify-between px-6 sm:px-12 lg:h-[88px] lg:px-[72px]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ad7f53] text-white transition-transform duration-200 hover:scale-105 lg:h-12 lg:w-12"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <HamburgerIcon />
        </button>

        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 text-[#4c4740]"
        >
          <img
            src="/assets/navicon.png"
            alt=""
            className="h-9 w-9 shrink-0 object-contain lg:h-12 lg:w-12"
          />
          <span className="hidden whitespace-nowrap font-serif text-[30px] italic leading-none sm:block lg:text-[42px]">
            Faith Healers School Of Occult Science
          </span>
          <span className="whitespace-nowrap font-serif text-[22px] italic leading-none sm:hidden">
            Faith Healers
          </span>
        </Link>

        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={toggleCart}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#ad7f53] text-white transition-transform duration-200 hover:scale-105 lg:h-12 lg:w-12"
            aria-label={`Open cart with ${itemCount} item${itemCount === 1 ? "" : "s"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="currentColor"
              className="h-7 w-7 lg:h-9 lg:w-9"
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
        <div className="fixed left-0 top-[72px] z-40 h-[calc(100vh-72px)] w-[86vw] max-w-[520px] overflow-hidden border-x-2 border-b-2 border-[#ad7f53] bg-[#f8f3ef] animate-fadeIn lg:top-[88px] lg:h-[calc(100vh-88px)] lg:w-[520px]">
          <nav className="flex h-full flex-col justify-center px-[18%] py-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group inline-flex items-center gap-3 py-3 font-serif text-[38px] leading-none text-[#4c4740] transition-colors hover:text-[#ad7f53] sm:text-[46px] lg:text-[52px]"
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
