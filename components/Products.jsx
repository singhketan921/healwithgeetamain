"use client";

import { useMemo } from "react";
import { useCart } from "@/context/CartContext";

const moonstone = "/assets/images/moonstone.jpg";

const fallbackProducts = [
  {
    id: 1,
    title: "Moon Stone",
    subtitle: "For Healing",
    type: "Pendant",
    priceText: "$38.00",
    image: moonstone,
    variantId: null,
    price: 38,
    currency: "USD",
  },
  {
    id: 2,
    title: "Moon Stone",
    subtitle: "For Healing",
    type: "Pendant",
    priceText: "$38.00",
    image: moonstone,
    variantId: null,
    price: 38,
    currency: "USD",
  },
  {
    id: 3,
    title: "Moon Stone",
    subtitle: "For Healing",
    type: "Pendant",
    priceText: "$38.00",
    image: moonstone,
    variantId: null,
    price: 38,
    currency: "USD",
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

export default function Products({ products = [], storeUrl }) {
  const { addItem } = useCart();

  const productList = useMemo(() => {
    if (!products?.length) {
      return fallbackProducts;
    }

    return products.map((product, index) => {
      const fallbackUrl =
        storeUrl && product.handle ? `${storeUrl}/products/${product.handle}` : null;

      return {
        id: product.id ?? index,
        title: product.title,
        subtitle: product.subtitle ?? product.description,
        description: product.description,
        type: product.type,
        image: product.image ?? moonstone,
        priceText:
          product.priceText || formatPrice(product.price, product.currency),
        price: Number(product.price) || null,
        currency: product.currency || "USD",
        url: product.url || fallbackUrl,
        variantId: product.variantId ?? product.primaryVariantId ?? null,
      };
    });
  }, [products, storeUrl]);

  return (
    <section className="bg-white py-20 text-[#6d655d]">
      <div className="relative mx-auto max-w-[1400px] px-6">
        <span className="pointer-events-none absolute left-6 top-8 h-2 w-2 rounded-full bg-[#e2dbd2]" />
        <span className="pointer-events-none absolute right-10 top-16 h-3 w-3 rounded-full border border-[#eee7df]" />
        <div className="text-center">
          <h2 className="text-[30px] sm:text-[38px] font-semibold tracking-[0.14em] text-[#6a625a]">
            RITUAL TOOLS
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] tracking-[0.08em] text-[#a59d94]">
            Curated pieces for daily balance and intention
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productList.map((product, index) => (
            <div
              key={product.id ?? index}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_14px_32px_rgba(0,0,0,0.08)]"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[260px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              <div className="flex flex-1 flex-col px-6 py-6">
                <p className="text-[12px] uppercase tracking-[0.25em] text-[#b5ada4]">
                  {product.type || "Ritual"}
                </p>
                <h3 className="mt-3 text-[20px] font-semibold text-[#6a625a]">
                  {product.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#948c83]">
                  {product.subtitle || product.description || "Limited drop"}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[12px] uppercase tracking-[0.25em] text-[#b5ada4]">
                    {product.priceText ?? "Sold Out"}
                  </span>
                  {product.variantId ? (
                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          variantId: product.variantId,
                          title: product.title,
                          subtitle: product.subtitle,
                          price: product.price,
                          currency: product.currency,
                          image: product.image,
                        })
                      }
                      className="rounded-full bg-[#8a8176] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white"
                    >
                      Add to Cart
                    </button>
                  ) : product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[#8a8176]/40 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#8a8176]"
                    >
                      View
                    </a>
                  ) : (
                    <span className="rounded-full border border-[#d9d1c8] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#c7beb4]">
                      Archive
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
