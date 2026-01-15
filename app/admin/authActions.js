"use server";

import { redirect } from "next/navigation";
import { authenticateAdmin } from "@/lib/services/authService";
import {
  clearSessionCookie,
  createSessionToken,
  setSessionCookie,
} from "@/lib/auth/session";
import { ensureDefaultAdminUser } from "@/lib/repositories/userRepository";

export async function loginAction(prevState, formData) {
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const password = formData.get("password")?.toString() ?? "";

  await ensureDefaultAdminUser();
  const user = await authenticateAdmin(email, password);

  if (!user) {
    return { error: "Invalid email or password" };
  }

  const token = createSessionToken(user);
  await setSessionCookie(token);
  redirect("/admin");
}

export async function logoutAction() {
  await clearSessionCookie();
  redirect("/admin/login");
}
