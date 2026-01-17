import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchCourseById } from "@/lib/services/courseService";
import { deleteCourse, upsertCourse } from "@/app/admin/actions";

export const runtime = "nodejs";

export default async function AdminCourseEditPage({ params }) {
  const resolvedParams = await params;
  let course = await fetchCourseById(resolvedParams.id);
  try {
    course = course ? JSON.parse(JSON.stringify(course)) : course;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Admin course edit error:", message);
    course = null;
  }

  if (!course) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-2">
        <Link
          href="/admin/courses"
          className="text-xs uppercase tracking-[0.32em] text-[#8f857c]"
        >
          &larr; Back to courses
        </Link>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Edit Course</h1>
        <p className="text-sm text-[#7a736c]">
          Update the course details below.
        </p>
      </header>

      <form
        action={upsertCourse}
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-4"
      >
        <input type="hidden" name="returnTo" value="/admin/courses" />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>ID</span>
            <input
              name="id"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.id ?? ""}
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Title</span>
            <input
              name="title"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.title ?? ""}
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Level</span>
            <input
              name="level"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.level ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Format</span>
            <input
              name="format"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.format ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Duration (months)</span>
            <input
              name="durationMonths"
              type="number"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.durationMonths ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Currency</span>
            <input
              name="currency"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.currency ?? "USD"}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Image URL/path</span>
            <input
              name="image"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.image ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Price tiers (one per line: Label: Amount)</span>
            <textarea
              name="priceTiers"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.priceTiers ?? [])
                .map((tier) => `${tier.label}: ${tier.amount}`)
                .join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Upload image</span>
            <input
              name="imageFile"
              type="file"
              accept="image/*"
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Headline</span>
            <textarea
              name="headline"
              rows={2}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.headline ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Summary (short intro)</span>
            <textarea
              name="summary"
              rows={2}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.summary ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Description</span>
            <textarea
              name="description"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.description ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Course covers (one per line)</span>
            <textarea
              name="courseCovers"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.courseCovers ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Modules (one per line)</span>
            <textarea
              name="modules"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.modules ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Outcomes (one per line)</span>
            <textarea
              name="outcomes"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.outcomes ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Energy & intuition training (one per line)</span>
            <textarea
              name="intuitionTraining"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.intuitionTraining ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Real-world skills (one per line)</span>
            <textarea
              name="realWorldSkills"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.realWorldSkills ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Tarot spreads covered (one per line)</span>
            <textarea
              name="tarotSpreads"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.tarotSpreads ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Hands-on training (one per line)</span>
            <textarea
              name="handsOnTraining"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.handsOnTraining ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Certification details (one per line)</span>
            <textarea
              name="certificationDetails"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.certificationDetails ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Why students love this course (one per line)</span>
            <textarea
              name="whyStudentsLove"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.whyStudentsLove ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Course format (one per line)</span>
            <textarea
              name="formatDetails"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.formatDetails ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Who can join (one per line)</span>
            <textarea
              name="whoCanJoin"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.whoCanJoin ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Duration details (one per line)</span>
            <textarea
              name="durationDetails"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.durationDetails ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Fees & enrollment details (one per line)</span>
            <textarea
              name="feesDetails"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.feesDetails ?? []).join("\n")}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>FAQ (one per line: Question | Answer)</span>
            <textarea
              name="faqs"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(course.faqs ?? [])
                .map((faq) => `${faq.question} | ${faq.answer}`)
                .join("\n")}
              placeholder="Do I need prior experience? No, beginners are welcome.\nDo you provide recordings - Yes, all sessions are recorded."
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>CTA text</span>
            <textarea
              name="ctaText"
              rows={2}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={course.ctaText ?? ""}
            />
          </label>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            formEncType="multipart/form-data"
            className="rounded-full bg-[#6b625a] px-6 py-2 text-sm font-semibold text-white"
          >
            Save changes
          </button>
          <button
            type="submit"
            formAction={deleteCourse}
            formNoValidate
            className="rounded-full border border-red-200 px-6 py-2 text-sm font-semibold text-red-600"
          >
            Delete course
          </button>
        </div>
      </form>
    </div>
  );
}
