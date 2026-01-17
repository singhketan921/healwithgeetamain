import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { getSession } from "@/lib/auth/session";
import { ensureDefaultAdminUser } from "@/lib/repositories/userRepository";

export const metadata = {
  title: "Admin Login | HealWithGeeta",
};

export default async function AdminLoginPage() {
  await ensureDefaultAdminUser();
  const session = await getSession();
  if (session) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-[#D0BFA9] px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-10 rounded-2xl border border-[#e1d8ce] bg-white/80 px-8 py-12 shadow-[0_18px_36px_rgba(0,0,0,0.08)] lg:px-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
            Admin Access
          </p>
          <h1 className="text-3xl font-semibold text-[#6b625a]">
            Sign in to HealWithGeeta
          </h1>
          <p className="text-sm text-[#7a736c]">
            Use your admin credentials to manage consultations, courses,
            healings, bookings, and messages.
          </p>
        </div>
        <div className="w-full max-w-md">
          <LoginForm />
          <p className="mt-4 text-center text-xs text-[#9a938c]">
            Default admin: admin@faithhealers.in / Admin1234
          </p>
        </div>
      </div>
    </div>
  );
}