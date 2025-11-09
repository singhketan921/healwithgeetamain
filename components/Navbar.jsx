'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const logo = "/assets/images/logo.png";

const links = [
  { name: "Home", href: "/" },
  { name: "Consultations", href: "/consultations" },
  { name: "Courses", href: "/courses" },
  { name: "Healings", href: "/healings" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const { items, toggleCart } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setShowShadow(true), 120);
      } else {
        setIsScrolling(false);
        clearTimeout(scrollTimeout);
        setShowShadow(false);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setShowShadow(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isScrolling
          ? "bg-white/30 backdrop-blur-md border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
      style={{
        boxShadow: showShadow
          ? "0 4px 18px rgba(0, 0, 0, 0.07)"
          : "0 0 0 rgba(0, 0, 0, 0)",
        transition:
          "background-color 0.4s ease, box-shadow 0.6s ease, backdrop-filter 0.5s ease",
      }}
    >
      <div className="flex items-center justify-between w-full px-4 py-4 sm:px-6 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 text-charcoal flex-shrink-0 md:min-w-[140px] lg:min-w-[220px]"
        >
          <img
            src={logo}
            alt="HealWithGeeta lotus logo"
            className={`h-8 w-8 transition-transform duration-500 ${
              isScrolling ? "scale-95 opacity-90" : "scale-100 opacity-100"
            }`}
          />
          <span
            className={`text-lg font-semibold tracking-wide text-charcoal transition-all duration-500 ${
              isScrolling ? "text-opacity-90" : "text-opacity-100"
            }`}
          >
            HealWithGeeta
          </span>
        </Link>

        <nav className="hidden md:flex flex-grow justify-center gap-2 text-sm font-medium text-charcoal md:gap-2.5 lg:gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors duration-200 text-charcoal hover:text-olive focus-visible:text-olive focus-visible:outline-none"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end flex-shrink-0 gap-3 md:min-w-[220px]">
          <div className="relative w-full md:max-w-[150px] lg:max-w-[200px]">
            <input
              type="search"
              placeholder="Search in site"
              className="w-full h-10 px-3 text-sm placeholder-gray-400 bg-white border border-gray-200 rounded-full pr-9 text-charcoal focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 lg:px-4 lg:pr-10"
            />
            <svg
              className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              />
            </svg>
          </div>
          <button
            onClick={toggleCart}
            className="relative px-4 py-2 text-sm font-medium text-charcoal border border-gray-200 rounded-full hover:border-charcoal transition"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[11px] font-semibold bg-charcoal text-white rounded-full min-w-[20px] h-[20px] leading-[20px] text-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden ml-auto">
          <button
            onClick={toggleCart}
            className="relative px-4 py-2 text-sm font-medium text-charcoal border border-gray-200 rounded-full hover:border-charcoal transition"
            aria-label="Open cart"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[11px] font-semibold bg-charcoal text-white rounded-full min-w-[18px] h-[18px] leading-[18px] text-center">
                {itemCount}
              </span>
            )}
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
