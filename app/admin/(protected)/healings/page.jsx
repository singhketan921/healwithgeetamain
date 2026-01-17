import Link from "next/link";
import { fetchHealingModalities } from "@/lib/services/healingService";
import { deleteHealing } from "@/app/admin/actions";

function formatPrice(value, currency = "USD") {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
}

function formatDuration(minutes) {
  if (!minutes) return "Custom";
  return `${minutes} ${minutes === 1 ? "Minute" : "Minutes"}`;
}

export default async function AdminHealingsPage() {
  const healings = await fetchHealingModalities();

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
            Admin
          </p>
          <h1 className="text-3xl font-semibold text-[#6b625a]">Healings</h1>
          <p className="mt-2 text-sm text-[#7a736c]">
            Manage healing modalities shown on the website.
          </p>
        </div>
        <Link
          href="/admin/healings/new"
          className="rounded-full bg-[#6b625a] px-5 py-2 text-sm font-semibold text-white"
        >
          Add healing
        </Link>
      </header>

      {healings.length === 0 ? (
        <div className="rounded-2xl border border-[#e7dfd6] bg-white/70 p-6 text-sm text-[#7a736c]">
          No healings yet. Click "Add healing" to create one.
        </div>
      ) : (
        <div className="grid gap-4">
          {healings.map((item) => (
            <div
              key={item.id ?? item._id}
              className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
                    {formatDuration(item.durationMinutes)}
                  </p>
                  <h2 className="text-xl font-semibold text-[#6b625a]">
                    {item.title ?? "Untitled healing"}
                  </h2>
                  <p className="text-sm text-[#7a736c]">
                    {item.description ?? "No description yet."}
                  </p>
                  <p className="text-sm font-semibold text-[#6b625a]">
                    {formatPrice(item.investment ?? item.price, item.currency)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/admin/healings/${item.id ?? item._id}`}
                    className="rounded-full border border-[#8f857c] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b625a]"
                  >
                    Edit
                  </Link>
                  <form action={deleteHealing}>
                    <input
                      type="hidden"
                      name="id"
                      value={item.id ?? item._id ?? ""}
                    />
                    <button
                      type="submit"
                      className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-600"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
