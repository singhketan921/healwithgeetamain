import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchConsultationById } from "@/lib/services/consultationService";
import { deleteConsultation, upsertConsultation } from "@/app/admin/actions";

export const runtime = "nodejs";

export default async function AdminConsultationEditPage({ params }) {
  const resolvedParams = await params;
  const consultation = await fetchConsultationById(resolvedParams.id);

  if (!consultation) {
    notFound();
  }

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
          Edit Consultation
        </h1>
        <p className="text-sm text-[#7a736c]">
          Update the consultation details below.
        </p>
      </header>

      <form
        action={upsertConsultation}
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-4"
      >
        <input type="hidden" name="returnTo" value="/admin/consultations" />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>ID</span>
            <input
              name="id"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={consultation.id ?? ""}
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Title</span>
            <input
              name="title"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={consultation.title ?? ""}
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Price</span>
            <input
              name="price"
              type="number"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={consultation.price ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Currency</span>
            <input
              name="currency"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={consultation.currency ?? "USD"}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Duration (minutes)</span>
            <input
              name="durationMinutes"
              type="number"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={consultation.durationMinutes ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Image URL/path</span>
            <input
              name="image"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={consultation.image ?? ""}
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
              defaultValue={consultation.description ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Modalities (one per line)</span>
            <textarea
              name="modalities"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={(consultation.modalities ?? []).join("\n")}
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
            formAction={deleteConsultation}
            formNoValidate
            className="rounded-full border border-red-200 px-6 py-2 text-sm font-semibold text-red-600"
          >
            Delete consultation
          </button>
        </div>
      </form>
    </div>
  );
}
