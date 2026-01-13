import AdminShell from "@/app/admin/AdminShell";

export const metadata = {
  title: "Admin Panel | HealWithGeeta",
  description: "Manage consultations, courses, healings, bookings, and messages.",
};

export const runtime = "nodejs";

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
