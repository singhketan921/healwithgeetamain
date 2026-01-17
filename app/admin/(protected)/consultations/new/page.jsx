import Link from "next/link";
import { upsertConsultation } from "@/app/admin/actions";

export const runtime = "nodejs";

export default function AdminConsultationNewPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-2">
        <Link
          href="/admin/consultations"
          className="text-xs uppercase tracking-[0.32em] text-[#8f857c]"
        >
          &larr; Back to consultations
        </Link>
        <h1 className="text-3xl font-semibold text-[#6b625a]">
          Add Consultation
        </h1>
        <p className="text-sm text-[#7a736c]">
          Fill in the details to create a new consultation offering.
        </p>
      </header>

      <form
        action={upsertConsultation}
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-4"
      >
        <input type="hidden" name="returnTo" value="/admin/consultations" />
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
              placeholder="USD"
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
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Image URL/path</span>
            <input
              name="image"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              placeholder="/assets/images/modality1.png"
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
            <span>Description</span>
            <textarea
              name="description"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Modalities (one per line)</span>
            <textarea
              name="modalities"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
            />
          </label>
        </div>
        <button
          type="submit"
          formEncType="multipart/form-data"
          className="rounded-full bg-[#6b625a] px-6 py-2 text-sm font-semibold text-white"
        >
          Save consultation
        </button>
      </form>
    </div>
  );
}
