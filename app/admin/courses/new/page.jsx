import Link from "next/link";
import { upsertCourse } from "@/app/admin/actions";

export const runtime = "nodejs";

export default function AdminCourseNewPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-2">
        <Link
          href="/admin/courses"
          className="text-xs uppercase tracking-[0.32em] text-[#8f857c]"
        >
          &larr; Back to courses
        </Link>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Add Course</h1>
        <p className="text-sm text-[#7a736c]">
          Fill in the details to create a new course offering.
        </p>
      </header>

      <form
        action={upsertCourse}
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-4"
      >
        <input type="hidden" name="returnTo" value="/admin/courses" />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>ID (optional)</span>
            <input
              name="id"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="auto-generated"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Title</span>
            <input
              name="title"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Level</span>
            <input
              name="level"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Format</span>
            <input
              name="format"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Duration (months)</span>
            <input
              name="durationMonths"
              type="number"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Currency</span>
            <input
              name="currency"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="USD"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Image URL/path</span>
            <input
              name="image"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Price tiers (one per line: Label: Amount)</span>
            <textarea
              name="priceTiers"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="Original Course Price: 35000"
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
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Summary (short intro)</span>
            <textarea
              name="summary"
              rows={2}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="Learn Tarot from scratch and become a confident, intuitive reader."
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Description</span>
            <textarea
              name="description"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Course covers (one per line)</span>
            <textarea
              name="courseCovers"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Modules (one per line)</span>
            <textarea
              name="modules"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Outcomes (one per line)</span>
            <textarea
              name="outcomes"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Energy & intuition training (one per line)</span>
            <textarea
              name="intuitionTraining"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Real-world skills (one per line)</span>
            <textarea
              name="realWorldSkills"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Tarot spreads covered (one per line)</span>
            <textarea
              name="tarotSpreads"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Hands-on training (one per line)</span>
            <textarea
              name="handsOnTraining"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Certification details (one per line)</span>
            <textarea
              name="certificationDetails"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Why students love this course (one per line)</span>
            <textarea
              name="whyStudentsLove"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Course format (one per line)</span>
            <textarea
              name="formatDetails"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Who can join (one per line)</span>
            <textarea
              name="whoCanJoin"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Duration details (one per line)</span>
            <textarea
              name="durationDetails"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Fees & enrollment details (one per line)</span>
            <textarea
              name="feesDetails"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="Original Course Price: 35000"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>FAQ (one per line: Question | Answer)</span>
            <textarea
              name="faqs"
              rows={4}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="Do I need prior experience? No, beginners are welcome.\nDo you provide recordings - Yes, all sessions are recorded."
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>CTA text</span>
            <textarea
              name="ctaText"
              rows={2}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="WhatsApp now to book your seat."
            />
          </label>
        </div>
        <button
          type="submit"
          formEncType="multipart/form-data"
          className="rounded-full bg-[#6b625a] px-6 py-2 text-sm font-semibold text-white"
        >
          Save course
        </button>
      </form>
    </div>
  );
}
