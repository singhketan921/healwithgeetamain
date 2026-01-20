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
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-6"
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
          <div className="md:col-span-2 rounded-xl border border-[#e7dfd6] bg-white/60 p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9a938c]">
              Course Content
            </p>
            <label className="space-y-2 text-sm">
              <span>Short hook (top card text)</span>
              <textarea
                name="summary"
                rows={2}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="Heal yourself. Transform your energy. Awaken inner peace."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Course overview (main paragraph)</span>
              <textarea
                name="description"
                rows={6}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="Reiki Level 1 is the first powerful step into the world of energy healing..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>What is this course? (section block)</span>
              <textarea
                name="courseCovers"
                rows={6}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="🌈 What is Reiki Level 1? ... ✔ Stress & anxiety reduction..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>What you will learn (section block)</span>
              <textarea
                name="modules"
                rows={7}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="✨ What You Will Learn... 🔹 What Reiki is & how energy healing works..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Benefits (section block)</span>
              <textarea
                name="outcomes"
                rows={6}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="💫 Reiki Level 1 Benefits... ✨ Remove negative energies..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Certification & class format (section block)</span>
              <textarea
                name="certificationDetails"
                rows={6}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="🏆 Certification & Class Format..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Fees & registration (section block)</span>
              <textarea
                name="feesDetails"
                rows={6}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="💰 Fees & Registration..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Who can join (section block)</span>
              <textarea
                name="whoCanJoin"
                rows={5}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="🌟 Who Can Join... ✔ Beginners..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>FAQs (paste full FAQ text)</span>
              <textarea
                name="faqs"
                rows={10}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="🔹 Reiki Level 1 – Frequently Asked Questions..."
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>CTA text (button)</span>
              <textarea
                name="ctaText"
                rows={2}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
                placeholder="Contact now to join the next batch"
              />
            </label>
          </div>
          <div className="md:col-span-2 rounded-xl border border-[#e7dfd6] bg-white/60 p-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9a938c]">
              Optional Extra Sections
            </p>
            <label className="space-y-2 text-sm">
              <span>Headline (optional)</span>
              <textarea
                name="headline"
                rows={2}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Energy & intuition training</span>
              <textarea
                name="intuitionTraining"
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Real-world skills</span>
              <textarea
                name="realWorldSkills"
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Tarot spreads covered</span>
              <textarea
                name="tarotSpreads"
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Hands-on training</span>
              <textarea
                name="handsOnTraining"
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Why students love this course</span>
              <textarea
                name="whyStudentsLove"
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Course format</span>
              <textarea
                name="formatDetails"
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span>Duration details</span>
              <textarea
                name="durationDetails"
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-3 py-2"
              />
            </label>
          </div>
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
