import Link from "next/link";
import { fetchBlogs } from "@/lib/services/blogService";

export default async function BlogsPage() {
  const blogs = await fetchBlogs();
  const visibleBlogs = blogs.filter((blog) => blog?.active !== false);

  return (
    <div className="min-h-screen bg-[#F9F4E8] pt-28 pb-16 px-6 lg:px-12 text-[#6b625a]">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="text-center space-y-3">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
            Blogs
          </p>
          <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[0.12em] text-[#6b625a]">
            Ritual Notes & Spiritual Insights
          </h1>
          <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c] max-w-[720px] mx-auto">
            A curated library of reflections, practices, and teachings to keep your
            energy aligned.
          </p>
        </header>

        {visibleBlogs.length === 0 ? (
          <div className="rounded-[24px] border border-[#e7dfd6] bg-white/80 p-10 text-center">
            <p className="text-[14px] text-[#7a736c]">
              No blogs published yet. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleBlogs.map((blog) => (
              <article
                key={blog.id ?? blog._id}
                className="rounded-[20px] overflow-hidden border border-[#e7dfd6] bg-white/80 shadow-[0_16px_32px_rgba(0,0,0,0.12)] flex flex-col"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={blog.image || "/assets/images/astrology.jpg"}
                    alt={blog.title ?? "Blog cover"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col h-full p-6 space-y-4">
                  <div className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                    {blog.publishDate || "Journal"}
                  </div>
                  <h2 className="text-[20px] font-semibold text-[#6b625a] leading-snug">
                    {blog.title}
                  </h2>
                  <p className="text-[14px] text-[#7a736c] leading-[1.7] preserve-format">
                    {blog.excerpt || blog.content?.slice(0, 140) || ""}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/blogs/${blog.id ?? blog._id}`}
                      className="inline-flex rounded-[12px] border border-[#8f857c] px-6 py-2 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#6b625a]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
