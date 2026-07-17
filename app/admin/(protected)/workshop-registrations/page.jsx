import { fetchWorkshopRegistrations } from "@/lib/services/workshopRegistrationService";

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleString();
  } catch {
    return dateString ?? "";
  }
}

function formatFormat(value) {
  if (value === "offline") return "In person";
  if (value === "either") return "Either";
  return "Online";
}

export default async function AdminWorkshopRegistrationsPage() {
  const registrations = await fetchWorkshopRegistrations();

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
          Admin
        </p>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Workshop Registrations</h1>
        <p className="text-sm text-[#7a736c]">
          Users who registered interest for upcoming workshops.
        </p>
      </header>

      <section className="rounded-2xl border border-[#e7dfd6] bg-white/80 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between border-b border-[#e7dfd6] px-6 py-4">
          <span className="text-sm text-[#7a736c]">
            Showing {registrations.length} entries
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#6b625a]">
            <thead className="bg-[#f4efe9] text-xs uppercase tracking-[0.2em] text-[#9a938c]">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Contact</th>
                <th className="px-6 py-3">Workshop Interest</th>
                <th className="px-6 py-3">Format</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3">Received</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-[#9a938c]"
                  >
                    No workshop registrations captured yet.
                  </td>
                </tr>
              )}
              {registrations.map((registration) => (
                <tr
                  key={registration.id ?? registration._id}
                  className="border-t border-[#e7dfd6]"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-[#6b625a]">
                      {registration.name ?? "Unknown"}
                    </div>
                    <div className="text-xs text-[#9a938c]">
                      {registration.city ?? "-"}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div>{registration.phone ?? "-"}</div>
                    <div className="text-xs text-[#9a938c]">
                      {registration.email ?? "-"}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {registration.preferredWorkshop ?? "-"}
                  </td>
                  <td className="px-6 py-4">
                    {formatFormat(registration.preferredFormat)}
                  </td>
                  <td className="max-w-[320px] px-6 py-4 text-sm text-[#7a736c]">
                    {registration.message ?? "-"}
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9a938c]">
                    {formatDate(registration.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
