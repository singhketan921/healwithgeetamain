import Link from "next/link";
import { fetchBlogs } from "@/lib/services/blogService";

export const runtime = "nodejs";

export default async function AdminBlogsPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-[#9a938c]">
          Admin
        </p>
        <h1 className="text-3xl font-semibold text-[#6b625a]">Blogs</h1>
        <p className="text-sm text-[#7a736c]">
          Manage blog posts displayed on the Blogs page.
        </p>
      </header>

      <section className="rounded-2xl border border-[#e7dfd6] bg-white/80 shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7dfd6] px-6 py-4">
          <span className="text-sm text-[#7a736c]">
            Showing {blogs.length} entries
          </span>
          <Link
            href="/admin/blogs/new"
            className="rounded-full bg-[#6b625a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            Add blog
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#6b625a]">
            <thead className="bg-[#F9F4E8] text-xs uppercase tracking-[0.2em] text-[#9a938c]">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Slug</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Publish Date</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-[#9a938c]"
                  >
                    No blogs yet. Click "Add blog" to create one.
                  </td>
                </tr>
              )}
              {blogs.map((blog) => (
                <tr
                  key={blog.id ?? blog._id}
                  className="border-t border-[#e7dfd6]"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-[#6b625a]">
                      {blog.title ?? "Untitled"}
                    </div>
                    <div className="text-xs text-[#9a938c]">
                      {blog.author ?? ""}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9a938c]">
                    {blog.id ?? "-"}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                        blog.active
                          ? "bg-[#6b625a] text-white"
                          : "bg-[#F9F4E8] text-[#9a938c]"
                      }`}
                    >
                      {blog.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-[#9a938c]">
                    {blog.publishDate || "-"}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <Link
                      href={`/admin/blogs/${blog.id ?? blog._id}`}
                      className="text-[#6b625a] underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
