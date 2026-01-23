'use client';

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const logo = "/assets/images/logo.png";

const links = [
  { name: "Consultations", href: "/consultations" },
  { name: "FH Music", href: "/fhmusic" },
  { name: "Courses", href: "/courses" },
  { name: "Workshops", href: "/workshops" },
  { name: "Healings", href: "/healings" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full border-b border-[#524E48] bg-[#FFFFFF]"
    >
      <div className="flex h-16 items-center justify-between w-full px-4 py-3 gap-4 md:px-[19px] md:py-[18px] md:gap-[139px]">
        <Link
          href="/"
          className="flex items-center gap-3 text-[#4d4d4d] flex-shrink-0 md:min-w-[160px] lg:min-w-[220px]"
        >
          <img
            src={logo}
            alt="FaithHealers lotus logo"
            className="h-7 w-7 md:h-8 md:w-8"
          />
          <span
            className="text-[18px] md:text-xl font-semibold tracking-wide"
          >
            FaithHealers
          </span>
        </Link>

        <nav className="hidden md:flex flex-grow justify-center gap-8 text-[15px] font-medium text-[#4d4d4d]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors duration-200 hover:text-black focus-visible:text-black focus-visible:outline-none"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end flex-shrink-0 gap-5 md:min-w-[220px]">
          <button
            type="button"
            className="text-black transition-transform duration-150 hover:scale-105"
            aria-label="Account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
              <path d="M4 20a8 8 0 0 1 16 0Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={toggleCart}
            className="text-black transition-transform duration-150 hover:scale-105"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M7.5 18a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 7.5 18Zm9 0A1.5 1.5 0 1 0 18 19.5 1.5 1.5 0 0 0 16.5 18ZM6.2 6l-.8-2H2.5a.75.75 0 0 0 0 1.5h1.9l2.3 8.1a2.25 2.25 0 0 0 2.16 1.65h7.44a2.25 2.25 0 0 0 2.2-1.76l1.5-6A.75.75 0 0 0 19.3 6Zm12.05 1.5-1.22 4.88a.75.75 0 0 1-.73.62H8.86a.75.75 0 0 1-.72-.56L6.54 7.5Z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden ml-auto">
          <button
            onClick={toggleCart}
            className="relative px-3 py-2 text-[13px] font-medium text-charcoal border border-gray-200 rounded-full hover:border-charcoal transition"
            aria-label="Open cart"
          >
            Cart
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 transition-colors border border-gray-300 rounded-md text-charcoal hover:bg-gray-100"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 shadow-lg bg-white/90 backdrop-blur-lg md:hidden animate-fadeIn">
          <nav className="flex flex-col px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-medium transition rounded-md text-charcoal hover:bg-olive/10 hover:text-olive"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4 space-y-3">
            <input
              type="search"
              placeholder="Search in site"
              className="w-full h-10 px-4 text-sm placeholder-gray-400 bg-white border border-gray-200 rounded-full text-charcoal focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20"
            />
            <button
              onClick={() => {
                toggleCart();
                setIsOpen(false);
              }}
              className="w-full rounded-full border border-gray-200 py-2 text-sm font-medium text-charcoal hover:border-charcoal transition"
            >
              View Cart ({itemCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
