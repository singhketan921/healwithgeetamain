import {
  CatalogToolbar,
  FeatureStrip,
  PublicCardGrid,
  PublicCatalogCard,
  PublicHero,
  PublicPageShell,
  SubscribeBand,
  WhyLearnBand,
} from "@/components/PublicPageUI";
import { PiBookOpenText, PiFlowerLotus, PiSparkle, PiStarFour } from "react-icons/pi";
import { fetchBlogs } from "@/lib/services/blogService";

export default async function BlogsPage() {
  const blogs = await fetchBlogs();
  const visibleBlogs = (blogs || []).filter((blog) => blog?.active !== false);

  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
        title="Ritual Notes & Spiritual Insights"
        description="A curated library of reflections, practices and teachings to keep your energy aligned."
        image="/assets/images/learnings.jpeg"
      />
      <FeatureStrip
        items={[
          { title: "Guided Wisdom", text: "Reflective teachings for daily life", icon: PiBookOpenText },
          { title: "Ritual Notes", text: "Simple practices to return to center", icon: PiFlowerLotus },
          { title: "Energy Care", text: "Support for mind, body and spirit", icon: PiSparkle },
          { title: "Fresh Posts", text: "New insights as the library grows", icon: PiStarFour },
        ]}
      />
      <section className="public-section">
        <CatalogToolbar filters={["All Posts", "Rituals", "Healing", "Astrology", "Guidance"]} sortLabel="Sort by Latest" />
        {visibleBlogs.length ? (
          <PublicCardGrid>
            {visibleBlogs.map((blog) => {
              const id = blog.id ?? blog._id;
              return (
                <PublicCatalogCard
                  key={id}
                  href={`/blogs/${id}`}
                  title={blog.title}
                  description={blog.excerpt || blog.content?.slice(0, 150) || "Read the latest reflection from the HealWithGeeta journal."}
                  image={blog.image || "/assets/images/astrology.jpg"}
                  price={blog.publishDate || "Journal"}
                  label="Insight"
                  meta={[
                    { label: blog.author || "Geeta Sharma" },
                    { label: "5 min read" },
                    { label: "Guidance" },
                  ]}
                  cta="Read More"
                />
              );
            })}
          </PublicCardGrid>
        ) : (
          <div className="public-info-card">
            <h2>No blogs published yet</h2>
            <p>Please check back soon for new reflections and teachings.</p>
          </div>
        )}
      </section>
      <WhyLearnBand
        title="Why Read the Journal?"
        items={[
          { title: "Simple Practices", text: "Small rituals you can use immediately" },
          { title: "Grounded Wisdom", text: "Spiritual ideas made practical" },
          { title: "Inner Clarity", text: "Prompts to support reflection" },
          { title: "Consistent Growth", text: "Stay connected between sessions" },
        ]}
      />
      <SubscribeBand title="Receive new reflections" text="Get ritual notes and spiritual insights in your inbox." />
    </PublicPageShell>
  );
}
