import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchMusicTrackById } from "@/lib/services/musicService";
import { deleteMusicTrack, upsertMusicTrack } from "@/app/admin/actions";

export const runtime = "nodejs";

export default async function AdminMusicEditPage({ params }) {
  const resolvedParams = await params;
  const track = await fetchMusicTrackById(resolvedParams.id);

  if (!track) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-2">
        <Link
          href="/admin/music"
          className="text-xs uppercase tracking-[0.32em] text-[#8f857c]"
        >
          &larr; Back to FH Music
        </Link>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Edit Track</h1>
        <p className="text-sm text-[#7a736c]">
          Update the audio track details below.
        </p>
      </header>

      <form
        action={upsertMusicTrack}
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-4"
      >
        <input type="hidden" name="returnTo" value="/admin/music" />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>Slug (ID)</span>
            <input
              name="id"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={track.id ?? ""}
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Title</span>
            <input
              name="title"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={track.title ?? ""}
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Artist</span>
            <input
              name="artist"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={track.artist ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Description</span>
            <textarea
              name="description"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={track.description ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Audio URL/path</span>
            <input
              name="audioUrl"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={track.audioUrl ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Upload audio</span>
            <input
              name="audioFile"
              type="file"
              accept="audio/*"
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2"
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Cover Image URL/path</span>
            <input
              name="coverImage"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={track.coverImage ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Upload Cover Image</span>
            <input
              name="coverImageFile"
              type="file"
              accept="image/*"
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2"
            />
          </label>
          <label className="flex items-center gap-2 text-sm md:col-span-2">
            <input
              type="checkbox"
              name="active"
              className="h-4 w-4"
              defaultChecked={!!track.active}
            />
            <span>Active (visible on FH Music page)</span>
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
            formAction={deleteMusicTrack}
            formNoValidate
            className="rounded-full border border-red-200 px-6 py-2 text-sm font-semibold text-red-600"
          >
            Delete track
          </button>
        </div>
      </form>
    </div>
  );
}
