"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "@/app/admin/authActions";

const INITIAL_STATE = { error: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-[#6b625a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#5a524c] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Signing in..." : "Sign in"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginAction, INITIAL_STATE);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[#6b625a]">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-[#ddd3c9] bg-white/80 px-3 py-2 text-sm text-[#4c443d] shadow-inner focus:border-[#6b625a] focus:outline-none"
          placeholder="admin@faithhealers.in"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-[#6b625a]">
          Password
        </label>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full rounded-lg border border-[#ddd3c9] bg-white/80 px-3 py-2 text-sm text-[#4c443d] shadow-inner focus:border-[#6b625a] focus:outline-none"
          placeholder="••••••••"
        />
      </div>

      {state?.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <SubmitButton />
    </form>
  );
}
