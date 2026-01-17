import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogById } from "@/lib/services/blogService";
import { deleteBlog, upsertBlog } from "@/app/admin/actions";

export const runtime = "nodejs";

export default async function AdminBlogEditPage({ params }) {
  const resolvedParams = await params;
  const blog = await fetchBlogById(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-2">
        <Link
          href="/admin/blogs"
          className="text-xs uppercase tracking-[0.32em] text-[#8f857c]"
        >
          &larr; Back to blogs
        </Link>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Edit Blog</h1>
        <p className="text-sm text-[#7a736c]">
          Update the blog details below.
        </p>
      </header>

      <form
        action={upsertBlog}
        className="rounded-2xl border border-[#e7dfd6] bg-white/80 p-6 space-y-4"
      >
        <input type="hidden" name="returnTo" value="/admin/blogs" />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>Slug (ID)</span>
            <input
              name="id"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={blog.id ?? ""}
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Title</span>
            <input
              name="title"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={blog.title ?? ""}
              required
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Author</span>
            <input
              name="author"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={blog.author ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Publish Date</span>
            <input
              name="publishDate"
              type="date"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={blog.publishDate ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Short description</span>
            <textarea
              name="excerpt"
              rows={3}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={blog.excerpt ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Content</span>
            <textarea
              name="content"
              rows={10}
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={blog.content ?? ""}
            />
          </label>
          <label className="space-y-2 text-sm md:col-span-2">
            <span>Image URL/path</span>
            <input
              name="image"
              className="w-full rounded-xl border border-gray-200 px-3 py-2"
              defaultValue={blog.image ?? ""}
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
          <label className="flex items-center gap-2 text-sm md:col-span-2">
            <input
              type="checkbox"
              name="active"
              className="h-4 w-4"
              defaultChecked={!!blog.active}
            />
            <span>Active (visible on Blogs page)</span>
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
            formAction={deleteBlog}
            formNoValidate
            className="rounded-full border border-red-200 px-6 py-2 text-sm font-semibold text-red-600"
          >
            Delete blog
          </button>
        </div>
      </form>
    </div>
  );
}
