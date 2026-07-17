import { updateHomeListings } from "@/app/admin/actions";
import { fetchCourses } from "@/lib/services/courseService";
import { fetchHomepageSettings } from "@/lib/services/homepageSettingsService";

function getCourseKey(course) {
  return course.id ?? course._id ?? "";
}

function getSelectedCourseIds(courses, settings) {
  if (settings.configured) {
    return settings.homeCourseIds || [];
  }

  return courses.slice(0, 3).map(getCourseKey).filter(Boolean);
}

function getOrderValue(courseId, selectedIds, fallbackIndex) {
  const selectedIndex = selectedIds.indexOf(courseId);
  return selectedIndex >= 0 ? selectedIndex + 1 : fallbackIndex + 1;
}

function formatSummary(course) {
  const summary = course.headline || course.description || "No summary yet.";
  return summary.length > 150 ? `${summary.slice(0, 147).trim()}...` : summary;
}

export default async function AdminHomeListingsPage() {
  const [courses, settings] = await Promise.all([
    fetchCourses(),
    fetchHomepageSettings(),
  ]);
  const selectedIds = getSelectedCourseIds(courses, settings);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
            Admin
          </p>
          <h1 className="text-3xl font-semibold text-[#6b625a]">Home Listings</h1>
          <p className="mt-2 max-w-2xl text-sm text-[#7a736c]">
            Choose the course cards shown in the homepage Best Selling Courses
            section. The first three selected courses will be shown in position order.
          </p>
        </div>
      </header>

      <form action={updateHomeListings} className="space-y-6">
        <div className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-5 text-sm text-[#7a736c]">
          Selected now:{" "}
          <span className="font-semibold text-[#6b625a]">
            {selectedIds.length ? selectedIds.length : "none"}
          </span>
          <span className="ml-2 text-[#9a938c]">
            Save with nothing selected to hide this section from the homepage.
          </span>
        </div>

        {courses.length === 0 ? (
          <div className="rounded-2xl border border-[#e7dfd6] bg-white/70 p-6 text-sm text-[#7a736c]">
            No courses available yet. Add courses first, then select homepage listings here.
          </div>
        ) : (
          <div className="grid gap-4">
            {courses.map((course, index) => {
              const courseId = getCourseKey(course);
              const selected = selectedIds.includes(courseId);

              return (
                <article
                  key={courseId || course.title}
                  className="rounded-2xl border border-[#e7dfd6] bg-white/85 p-5 shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="grid gap-4 lg:grid-cols-[96px_1fr_auto] lg:items-center">
                    <div className="h-24 w-24 overflow-hidden rounded-xl border border-[#eadfce] bg-[#f8f0e5]">
                      {course.image ? (
                        <img
                          src={course.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-semibold text-[#6b625a]">
                          {course.title ?? "Untitled course"}
                        </h2>
                        {selected ? (
                          <span className="rounded-full bg-[#1f4f35] px-3 py-1 text-xs font-semibold text-white">
                            Home
                          </span>
                        ) : null}
                      </div>
                      <p className="text-sm leading-6 text-[#7a736c]">
                        {formatSummary(course)}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                      <label className="flex items-center gap-2 rounded-full border border-[#d9c5a5] px-4 py-2 text-sm font-semibold text-[#6b625a]">
                        <input
                          type="checkbox"
                          name="courseIds"
                          value={courseId}
                          defaultChecked={selected}
                          className="h-4 w-4 accent-[#1f4f35]"
                        />
                        Show
                      </label>

                      <label className="flex items-center gap-2 text-sm font-semibold text-[#6b625a]">
                        Position
                        <input
                          type="number"
                          name={`courseOrder:${courseId}`}
                          min="1"
                          max="3"
                          defaultValue={getOrderValue(courseId, selectedIds, index)}
                          className="h-10 w-20 rounded-lg border border-[#d9c5a5] bg-white px-3 text-sm text-[#6b625a]"
                        />
                      </label>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="sticky bottom-4 flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-[#6b625a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
          >
            Save Home Listings
          </button>
        </div>
      </form>
    </div>
  );
}
