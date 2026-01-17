import bcrypt from "bcryptjs";
import {
  ensureDefaultAdminUser,
  findUserByEmail,
} from "@/lib/repositories/userRepository";

export async function authenticateAdmin(email, password) {
  if (!email || !password) {
    return null;
  }

  await ensureDefaultAdminUser();
  const user = await findUserByEmail(email);
  if (!user?.passwordHash) {
    return null;
  }

  const matches = await bcrypt.compare(password, user.passwordHash);
  if (!matches) {
    return null;
  }

  return {
    id: user.id ?? user._id ?? user.email,
    email: user.email,
    role: user.role ?? "admin",
  };
}
