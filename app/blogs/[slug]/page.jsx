import { notFound } from "next/navigation";
import { fetchBlogById } from "@/lib/services/blogService";

function renderContent(content) {
  if (!content) {
    return null;
  }
  return (
    <p className="leading-[1.8] text-[#7a736c] preserve-format">
      {content}
    </p>
  );
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const blog = await fetchBlogById(resolvedParams.slug);

  if (!blog || blog.active === false) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F9F4E8] pt-28 pb-16 px-6 lg:px-12 text-[#6b625a]">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-3">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
            {blog.publishDate || "Blog"}
          </p>
          <h1 className="text-[32px] sm:text-[44px] font-semibold leading-[1.2]">
            {blog.title}
          </h1>
          {blog.author ? (
            <p className="text-[14px] text-[#7a736c]">By {blog.author}</p>
          ) : null}
        </div>

        <div className="rounded-[24px] overflow-hidden border border-[#e7dfd6] shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
          <img
            src={blog.image || "/assets/images/astrology.jpg"}
            alt={blog.title}
            className="w-full h-[420px] object-cover"
          />
        </div>

        <div className="rounded-[24px] border border-[#e7dfd6] bg-white/80 p-8 space-y-5">
          {renderContent(blog.content)}
        </div>
      </div>
    </div>
  );
}
