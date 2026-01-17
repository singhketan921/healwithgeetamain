import Link from "next/link";
import { fetchWorkshops } from "@/lib/services/workshopService";

export const runtime = "nodejs";

export default async function AdminWorkshopsPage() {
  const workshops = await fetchWorkshops();

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
          Admin
        </p>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Workshops</h1>
        <p className="text-sm text-[#7a736c]">
          Manage ad landing workshops and their availability.
        </p>
      </header>

      <section className="rounded-2xl border border-[#e7dfd6] bg-white/80 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7dfd6] px-6 py-4">
          <span className="text-sm text-[#7a736c]">
            Showing {workshops.length} entries
          </span>
          <Link
            href="/admin/workshops/new"
            className="rounded-full bg-[#6b625a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            Add workshop
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#6b625a]">
            <thead className="bg-[#f4efe9] text-xs uppercase tracking-[0.2em] text-[#9a938c]">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Slug</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Start</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {workshops.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-[#9a938c]"
                  >
                    No workshops yet. Click "Add workshop" to create one.
                  </td>
                </tr>
              )}
              {workshops.map((workshop) => (
                <tr
                  key={workshop.id ?? workshop._id}
                  className="border-t border-[#e7dfd6]"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-[#6b625a]">
                      {workshop.title ?? "Untitled"}
                    </div>
                    <div className="text-xs text-[#9a938c]">
                      {workshop.subtitle ?? ""}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9a938c]">
                    {workshop.id ?? "-"}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                        workshop.active
                          ? "bg-[#6b625a] text-white"
                          : "bg-[#efe7de] text-[#9a938c]"
                      }`}
                    >
                      {workshop.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9a938c]">
                    <div>{workshop.startDate ?? "-"}</div>
                    <div>{workshop.startTime ?? ""}</div>
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <Link
                      href={`/admin/workshops/${workshop.id ?? workshop._id}`}
                      className="text-[#6b625a] underline"
                    >
                      Edit
                    </Link>
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
