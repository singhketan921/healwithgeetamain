"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/admin/consultations", label: "Consultations" },
  { href: "/admin/healings", label: "Healings" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/messages", label: "Messages" },
];

function isActive(pathname, href) {
  if (!pathname) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#EAE4DC]">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r border-[#e1d8ce] bg-[#fbf8f5] px-5 pb-10 pt-24">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
              Admin Panel
            </p>
            <h2 className="text-lg font-semibold text-[#6b625a]">
              HealWithGeeta
            </h2>
          </div>
          <nav className="mt-8 space-y-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold ${
                    active
                      ? "bg-[#6b625a] text-white"
                      : "text-[#6b625a] hover:bg-[#efe7de]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1 px-6 pb-12 pt-24 lg:px-12">{children}</main>
      </div>
    </div>
  );
}
