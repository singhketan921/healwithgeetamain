import ProductsGrid from "@/components/ProductsGrid";
import { fetchShopifyProducts } from "@/lib/services/shopifyProductService";

const FALLBACK_IMAGE = "/assets/images/moonstone.jpg";

const FALLBACK_PRODUCTS = [
  {
    id: "fallback-1",
    title: "Moonstone Palm Stone",
    description: "Calm intuition & emotional balance",
    priceText: "$38.00",
    image: FALLBACK_IMAGE,
    variantId: null,
    currency: "USD",
    priceNumber: 38,
  },
  {
    id: "fallback-2",
    title: "Rose Quartz Sphere",
    description: "Heart-opening & compassion",
    priceText: "$44.00",
    image: FALLBACK_IMAGE,
    variantId: null,
    currency: "USD",
    priceNumber: 44,
  },
  {
    id: "fallback-3",
    title: "Black Tourmaline Tower",
    description: "Protection & grounding",
    priceText: "$52.00",
    image: FALLBACK_IMAGE,
    variantId: null,
    currency: "USD",
    priceNumber: 52,
  },
];

const CURATION_NOTES = [
  {
    title: "Skin + Aura Lab",
    description:
      "Small-batch skincare serums, aura mists, and ritual oils composed with slow-extracted botanicals.",
    detail: "Edition of 25 per drop",
  },
  {
    title: "Crystal Apothecary",
    description:
      "Museum-grade stones sourced for clarity, weight, and energetic purpose - the kind you see in print features.",
    detail: "Hand-cleansed & catalogued",
  },
  {
    title: "Ceremonial Kits",
    description:
      "Editorial bundles pairing breathwork scripts, aroma discs, and botanicals for guided rituals.",
    detail: "Ships with archival notes",
  },
];

const COLLECTION_TAGS = [
  "Hydration therapy",
  "Grounding minerals",
  "Heart work",
  "Protection grids",
  "Botanical mists",
  "Crystal jewelry",
];

const formatPrice = (amount, currency = "USD") => {
  if (!amount) return null;
  const value = typeof amount === "string" ? Number(amount) : amount;
  if (Number.isNaN(value)) return null;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
};

const normalizeProducts = (products = [], storeUrl) => {
  if (!products.length) {
    return FALLBACK_PRODUCTS;
  }

  return products.map((product, index) => {
    const fallbackUrl =
      storeUrl && product.handle
        ? `${storeUrl}/products/${product.handle}`
        : null;

    const priceNumber = Number(product.price) || null;

    return {
      id: product.id ?? `shopify-${index}`,
      title: product.title,
      description: product.subtitle ?? product.description,
      image: product.image ?? FALLBACK_IMAGE,
      priceText:
        product.priceText ||
        formatPrice(product.price, product.currency) ||
        "--",
      currency: product.currency || "USD",
      priceNumber,
      variantId: product.primaryVariantId ?? product.variantId ?? null,
      vendor: product.subtitle,
      handle: product.handle,
      url: fallbackUrl,
    };
  });
};

export default async function ProductsSection({ limit = 12 }) {
  let payload = { products: [], storeUrl: undefined };

  try {
    payload = await fetchShopifyProducts(limit);
  } catch (error) {
    console.error("[ProductsSection] Failed to load Shopify products", error);
  }

  const productCards = normalizeProducts(payload.products, payload.storeUrl);

  return (
    <section id="products" className="relative overflow-hidden bg-[#F6F3EF] py-24 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-[#EAE4DC] blur-[160px]" />
        <span className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-[#C7B9AD] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-[#524E48] space-y-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-[#B0AAA0]">
              Collection dossier
            </p>
            <h2 className="font-serif text-[2.75rem] leading-tight">
              Find the right energy tool
            </h2>
            <p className="text-base sm:text-lg text-[#524E48]/85 max-w-2xl">
              Each object is styled like an editorial still life - soft rounded edges, neutral palette, and tactile finishes designed to sit beautifully on your altar or bathroom shelf.
            </p>

            <div className="flex flex-wrap gap-3">
              {COLLECTION_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#EAE4DC] px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-[#A59079] bg-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {CURATION_NOTES.map((note) => (
                <article
                  key={note.title}
                  className="rounded-[28px] border border-[#EAE4DC] bg-white/85 shadow-[0_20px_55px_rgba(82,78,72,0.08)] p-6 space-y-3"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
                    {note.detail}
                  </p>
                  <h3 className="font-serif text-2xl leading-tight">{note.title}</h3>
                  <p className="text-sm text-[#524E48]/75 leading-relaxed">
                    {note.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] bg-white border border-[#EAE4DC] shadow-[0_30px_90px_rgba(82,78,72,0.12)] p-10 space-y-6">
            <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
              Styling memo
            </p>
            <p className="font-serif text-[1.9rem] leading-tight">
              "Think of the collection like an editorial spread - each object is shot, catalogued, and blessed before it leaves the studio."
            </p>
            <p className="text-sm text-[#524E48]/75">
              Real-time Shopify inventory ensures pricing and availability remain accurate. Add pieces to cart instantly or jump to the full storefront to explore more drops.
            </p>
            <div className="flex gap-4 text-sm uppercase tracking-[0.35em] text-[#A59079]">
              <span>Updated daily</span>
              <span>&middot;</span>
              <span>Limited editions</span>
            </div>
          </div>
        </div>

        <ProductsGrid products={productCards} />
      </div>
    </section>
  );
}
