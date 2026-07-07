import {
  CatalogToolbar,
  FeatureStrip,
  PublicCardGrid,
  PublicCatalogCard,
  PublicHero,
  PublicPageShell,
  SubscribeBand,
  WhyLearnBand,
  derivePublicPrice,
} from "@/components/PublicPageUI";
import { PiFlowerLotus, PiGift, PiShieldCheck, PiSparkle } from "react-icons/pi";
import { fetchProducts } from "@/lib/services/productService";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Products - HealWithGeeta",
  description: "Browse curated crystals, ritual kits, and spiritual tools.",
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <PublicPageShell>
      <PublicHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title="Sacred Tools for Ritual, Healing & Protection"
        description="Curated crystals, oils and ritual kits selected to support your altar, practice and daily energetic care."
        image="/assets/images/moonstone.jpg"
      />
      <FeatureStrip
        items={[
          { title: "Curated Tools", text: "Chosen for intention and energetic quality", icon: PiSparkle },
          { title: "Blessed Objects", text: "Prepared with care before dispatch", icon: PiFlowerLotus },
          { title: "Ritual Ready", text: "Easy to use in your daily practice", icon: PiGift },
          { title: "Safe Support", text: "Simple guidance for each object", icon: PiShieldCheck },
        ]}
      />
      <section className="public-section">
        <CatalogToolbar filters={["All Products", "Crystals", "Ritual Kits", "Oils", "Protection", "Meditation"]} />
        <PublicCardGrid>
          {(products || []).map((product) => {
            const id = product.id ?? product._id;
            const price = derivePublicPrice(product);
            return (
              <PublicCatalogCard
                key={id}
                title={product.title}
                description={product.subtitle || product.description}
                image={product.image}
                price={price.price}
                oldPrice={price.oldPrice}
                meta={[
                  { label: product.type || "Ritual Tool" },
                  { label: "Blessed" },
                  { label: "Limited" },
                ]}
                cta="View Product"
              />
            );
          })}
        </PublicCardGrid>
      </section>
      <WhyLearnBand
        title="Why Choose Our Sacred Tools?"
        items={[
          { title: "Intention-led", text: "Each piece supports a clear ritual purpose" },
          { title: "Simple Practice", text: "Easy to integrate into daily life" },
          { title: "Energetic Care", text: "Selected for grounding and alignment" },
          { title: "Beautiful Objects", text: "Designed to live naturally in your space" },
        ]}
      />
      <SubscribeBand title="Stay updated on new drops" text="Receive product launches, ritual notes and seasonal recommendations." />
    </PublicPageShell>
  );
}
