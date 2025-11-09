import ProductsGrid from "@/components/ProductsGrid";
import { fetchShopifyProducts } from "@/lib/services/shopifyProductService";

const FALLBACK_IMAGE = "/assets/images/moonstone.jpg";

const FALLBACK_PRODUCTS = [
  {
    id: "fallback-1",
    title: "Moonstone Palm Stone",
    description: "Calm intuition • emotional balance",
    priceText: "$38.00",
    image: FALLBACK_IMAGE,
    variantId: null,
    currency: "USD",
    priceNumber: 38,
  },
  {
    id: "fallback-2",
    title: "Rose Quartz Sphere",
    description: "Heart-opening • compassion",
    priceText: "$44.00",
    image: FALLBACK_IMAGE,
    variantId: null,
    currency: "USD",
    priceNumber: 44,
  },
  {
    id: "fallback-3",
    title: "Black Tourmaline Tower",
    description: "Protection • grounding",
    priceText: "$52.00",
    image: FALLBACK_IMAGE,
    variantId: null,
    currency: "USD",
    priceNumber: 52,
  },
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
        "—",
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
    <section
      id="products"
      className="w-full bg-gradient-to-b from-[#FFFEFA] via-[#F7F1DF] to-[#F1E4C7] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1F1F] mb-3">
          Find the Right Energy Tool for You
        </h2>
        <p className="text-base sm:text-lg text-[#3B3B3B] max-w-3xl mx-auto">
          Discover crystals that align with your specific intentions and needs.
        </p>

        <ProductsGrid products={productCards} />
      </div>
    </section>
  );
}
