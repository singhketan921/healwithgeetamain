import AdminShell from "@/app/admin/AdminShell";
import { logoutAction } from "@/app/admin/authActions";
import { requireAdminSession } from "@/lib/auth/session";

export default async function ProtectedAdminLayout({ children }) {
  const session = await requireAdminSession();

  return (
    <AdminShell session={session} onLogout={logoutAction}>
      {children}
    </AdminShell>
  );
}
