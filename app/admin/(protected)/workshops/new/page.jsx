import Link from "next/link";
import { upsertWorkshop } from "@/app/admin/actions";

export const runtime = "nodejs";

export default function AdminWorkshopNewPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-2">
        <Link
          href="/admin/workshops"
          className="text-xs uppercase tracking-[0.32em] text-[#8f857c]"
        >
          &larr; Back to workshops
        </Link>
        <h1 className="text-3xl font-semibold text-[#6b625a]">
          Add Workshop
        </h1>
        <p className="text-sm text-[#7a736c]">
          Create an ad landing page workshop with a slug and timer.
        </p>
      </header>

      <form
        action={upsertWorkshop}
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-4"
      >
        <input type="hidden" name="returnTo" value="/admin/workshops" />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>Slug (ID)</span>
            <input
              name="id"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="e.g. occult-intuition-bootcamp"
              required
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
            <span>Subtitle</span>
            <input
              name="subtitle"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Offer Badge</span>
            <input
              name="offerBadge"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="Limited Offer"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Teaser</span>
            <textarea
              name="teaser"
              rows={2}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
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
          <label className="space-y-2 text-sm">
            <span>Start Date</span>
            <input
              name="startDate"
              type="date"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Start Time</span>
            <input
              name="startTime"
              type="time"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Timezone</span>
            <input
              name="timezone"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="Asia/Kolkata"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Duration (minutes)</span>
            <input
              name="durationMinutes"
              type="number"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Price</span>
            <input
              name="price"
              type="number"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Currency</span>
            <input
              name="currency"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="INR"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Seats</span>
            <input
              name="seats"
              type="number"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Location</span>
            <input
              name="location"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>CTA Label</span>
            <input
              name="ctaLabel"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="Reserve Your Seat"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>CTA Link</span>
            <input
              name="ctaLink"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="https://..."
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Hero Image URL/path</span>
            <input
              name="heroImage"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Upload Hero Image</span>
            <input
              name="heroImageFile"
              type="file"
              accept="image/*"
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Offer Title</span>
            <input
              name="offerTitle"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Offer Description</span>
            <textarea
              name="offerDescription"
              rows={2}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Highlights (one per line)</span>
            <textarea
              name="highlights"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Agenda (one per line)</span>
            <textarea
              name="agenda"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Includes (one per line)</span>
            <textarea
              name="includes"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Who It's For (one per line)</span>
            <textarea
              name="whoItsFor"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Host Name</span>
            <input
              name="hostName"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Host Title</span>
            <input
              name="hostTitle"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Host Bio</span>
            <textarea
              name="hostBio"
              rows={2}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Host Image URL/path</span>
            <input
              name="hostImage"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="flex items-center gap-2 text-sm md:col-span-2">
            <input type="checkbox" name="active" className="h-4 w-4" />
            <span>Active (visible on ad landing page)</span>
          </label>
        </div>
        <button
          type="submit"
          formEncType="multipart/form-data"
          className="rounded-full bg-[#6b625a] px-6 py-2 text-sm font-semibold text-white"
        >
          Save workshop
        </button>
      </form>
    </div>
  );
}
