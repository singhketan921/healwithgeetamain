"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/admin/consultations", label: "Consultations" },
  { href: "/admin/healings", label: "Healings" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/workshops", label: "Workshops" },
  { href: "/admin/music", label: "FH Music" },
  { href: "/admin/spin-wheel", label: "Spin Wheel" },
  { href: "/admin/blogs", label: "Blogs" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/messages", label: "Messages" },
];

function isActive(pathname, href) {
  if (!pathname) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AdminShell({ children, session, onLogout }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#D0BFA9]">
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
                      ? "bg-[#6b625a] !text-white"
                      : "text-[#6b625a] hover:bg-[#efe7de]"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
          {session ? (
            <div className="mt-8 space-y-3 rounded-xl border border-[#e1d8ce] bg-white/80 p-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#9a938c]">
                  Signed in
                </p>
                <p className="truncate text-sm font-semibold text-[#6b625a]">
                  {session.email}
                </p>
              </div>
              {onLogout ? (
                <form action={onLogout}>
                  <button
                    type="submit"
                    className="w-full rounded-lg border border-[#8f857c] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6b625a] transition hover:bg-[#efe7de]"
                  >
                    Sign out
                  </button>
                </form>
              ) : null}
            </div>
          ) : null}
        </aside>
        <main className="flex-1 px-6 pb-12 pt-24 lg:px-12">{children}</main>
      </div>
    </div>
  );
}
