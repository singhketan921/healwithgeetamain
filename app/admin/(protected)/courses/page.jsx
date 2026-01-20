import Link from "next/link";
import { fetchCourses } from "@/lib/services/courseService";
import { deleteCourse } from "@/app/admin/actions";

function formatPrice(value, currency = "USD") {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
}

function formatDuration(months, format, weeks) {
  if (months) {
    const base = `${months} ${months === 1 ? "Month" : "Months"}`;
    return format ? `${base} - ${format}` : base;
  }
  if (weeks) {
    const base = `${weeks} ${weeks === 1 ? "Week" : "Weeks"}`;
    return format ? `${base} - ${format}` : base;
  }
  return format ?? "Custom";
}

export default async function AdminCoursesPage() {
  const courses = await fetchCourses();

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
            Admin
          </p>
          <h1 className="text-3xl font-semibold text-[#6b625a]">Courses</h1>
          <p className="mt-2 text-sm text-[#7a736c]">
            Manage course offerings shown on the website.
          </p>
        </div>
        <Link
          href="/admin/courses/new"
          className="rounded-full bg-[#6b625a] px-5 py-2 text-sm font-semibold text-white"
        >
          Add course
        </Link>
      </header>

      {courses.length === 0 ? (
        <div className="rounded-2xl border border-[#e7dfd6] bg-white/70 p-6 text-sm text-[#7a736c]">
          No courses yet. Click "Add course" to create one.
        </div>
      ) : (
        <div className="grid gap-4">
          {courses.map((item) => (
            <div
              key={item.id ?? item._id}
              className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
                    {formatDuration(item.durationMonths, item.format, item.durationWeeks)}
                  </p>
                  <h2 className="text-xl font-semibold text-[#6b625a]">
                    {item.title ?? "Untitled course"}
                  </h2>
                  <p className="text-sm text-[#7a736c] preserve-format">
                    {item.headline ?? item.description ?? "No summary yet."}
                  </p>
                  <p className="text-sm font-semibold text-[#6b625a]">
                    {item.priceTiers?.length
                      ? `${item.priceTiers.length} price options`
                      : item.price
                        ? formatPrice(item.price, item.currency)
                        : "Custom"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/admin/courses/${item.id ?? item._id}`}
                    className="rounded-full border border-[#8f857c] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b625a]"
                  >
                    Edit
                  </Link>
                  <form action={deleteCourse}>
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
