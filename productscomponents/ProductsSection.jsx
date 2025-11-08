import { fetchShopifyProducts } from "@/lib/services/shopifyProductService";

const FALLBACK_IMAGE = "/assets/images/moonstone.jpg";

const FALLBACK_PRODUCTS = [
  {
    id: "fallback-1",
    title: "Moonstone Palm Stone",
    description: "Calm intuition • emotional balance",
    priceText: "$38.00",
    image: FALLBACK_IMAGE,
  },
  {
    id: "fallback-2",
    title: "Rose Quartz Sphere",
    description: "Heart-opening • compassion",
    priceText: "$44.00",
    image: FALLBACK_IMAGE,
  },
  {
    id: "fallback-3",
    title: "Black Tourmaline Tower",
    description: "Protection • grounding",
    priceText: "$52.00",
    image: FALLBACK_IMAGE,
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

    return {
      id: product.id ?? `shopify-${index}`,
      title: product.title,
      description: product.subtitle ?? product.description,
      image: product.image ?? FALLBACK_IMAGE,
      priceText:
        product.priceText ||
        formatPrice(product.price, product.currency) ||
        "—",
      url: product.url || fallbackUrl,
      cartLink: product.cartUrl ?? null,
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
      className="w-full bg-gradient-to-b from-[#FDFCF8] via-[#F5F1E4] to-[#EFE8D3] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F1F1F] mb-3">
          Find the Right Energy Tool for You
        </h2>
        <p className="text-base sm:text-lg text-[#3B3B3B] max-w-3xl mx-auto">
          Discover crystals that align with your specific intentions and needs.
        </p>

        <div
          id="product-grid"
          className="grid grid-cols-1 gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {productCards.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-[22px] shadow-[0_10px_40px_rgba(32,32,32,0.05)] overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 text-left">
                <p className="uppercase text-[0.65rem] tracking-[0.3em] text-[#B6B199] mb-2">
                  Featured Crystal
                </p>
                <h3 className="text-xl font-semibold text-[#201F1C] mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-[#595650] flex-1 mb-4">
                  {product.description || "Energetic support for modern rituals."}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-[#1F1F1F]">
                    {product.priceText}
                  </span>
                  {product.cartLink || product.url ? (
                    <a
                      href={product.cartLink || product.url}
                      target={product.cartLink ? "_self" : "_blank"}
                      rel={product.cartLink ? undefined : "noreferrer"}
                      className="text-sm font-medium text-[#A8B963] hover:text-[#8FA24E] transition"
                    >
                      {product.cartLink ? "Add to Cart →" : "Shop Now →"}
                    </a>
                  ) : (
                    <span className="text-xs uppercase tracking-[0.25em] text-[#A6A39A]">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
