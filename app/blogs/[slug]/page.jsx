import { notFound } from "next/navigation";
import {
  PublicDetailLayout,
  PublicInfoCard,
} from "@/components/PublicPageUI";
import { fetchBlogById } from "@/lib/services/blogService";

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const blog = await fetchBlogById(resolvedParams.slug);

  if (!blog || blog.active === false) notFound();

  return (
    <PublicDetailLayout
      backHref="/blogs"
      backLabel="← Back to blogs"
      title={blog.title}
      description={blog.excerpt || `By ${blog.author || "Geeta Sharma"}`}
      image={blog.image || "/assets/images/astrology.jpg"}
      badges={[blog.publishDate || "Journal", blog.author || "Geeta Sharma", "Insight"]}
    >
      <PublicInfoCard title="Reflection">
        <p className="preserve-format">{blog.content || blog.excerpt || ""}</p>
      </PublicInfoCard>
    </PublicDetailLayout>
  );
}
