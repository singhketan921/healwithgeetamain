'use client';

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
        storeUrl && product.handle
          ? `${storeUrl}/products/${product.handle}`
          : null;

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

  const feature = productList[0];

  return (
    <section className="bg-[#EAE4DC] py-24 text-[#524E48]">
      <div className="max-w-6xl px-6 mx-auto space-y-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <p className="text-xs uppercase tracking-[0.55em] text-[#B0AAA0]">
              Ritual Cabinet
            </p>
            <h2 className="font-serif text-[2.8rem] leading-tight">
              Objects for everyday alchemy
            </h2>
            <p className="text-lg leading-relaxed text-[#524E48]/85">
              Each remedy is a limited-edition drop—moonstone pendants bathed in
              mantra, serum oils infused with spikenard and goldenseal, and
              incense carved from Himalayan resins. Shop the apothecary edit or
              book a private curation.
            </p>
            {feature && (
              <div className="p-6 border rounded-[32px] border-[#B0AAA0]/60 bg-white">
                <p className="text-xs uppercase tracking-[0.35em] text-[#B0AAA0] mb-4">
                  Feature
                </p>
                <div className="rounded-[26px] overflow-hidden mb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-60"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-2xl leading-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#524E48]/70">
                  {feature.subtitle}
                </p>
                <span className="block mt-4 text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
                  {feature.priceText}
                </span>
              </div>
            )}
          </div>

          <div className="lg:col-span-8 space-y-10">
            {productList.map((product, index) => (
              <article
                key={product.id ?? index}
                className="grid items-center gap-4 py-6 border-b border-[#B0AAA0]/40 last:border-0 lg:grid-cols-12"
              >
                <div className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0] lg:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="font-serif text-2xl">{product.title}</h3>
                  <p className="text-sm text-[#524E48]/75">
                    {product.subtitle || product.description || "Limited drop"}
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-right lg:col-span-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#B0AAA0]">
                    {product.priceText ?? "Sold Out"}
                  </p>
                  <div className="flex justify-end gap-3 text-xs uppercase tracking-[0.4em]">
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
                        className="px-4 py-2 border border-[#524E48] rounded-full hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
                      >
                        Add to Cart
                      </button>
                    ) : product.url ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 border border-[#524E48] rounded-full hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
                      >
                        View
                      </a>
                    ) : (
                      <span className="px-4 py-2 border border-[#B0AAA0] rounded-full text-[#B0AAA0]">
                        Archive
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
