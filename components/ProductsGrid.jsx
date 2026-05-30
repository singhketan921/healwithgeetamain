'use client';

import Reveal from "@/components/Reveal";
import { useCart } from "@/context/CartContext";

export default function ProductsGrid({ products = [] }) {
  const { addItem } = useCart();
  if (!products.length) return null;

  const spotlight = products[0];
  const collection = products.slice(1);

  const handleAdd = (product) => {
    if (!product.variantId) return;
    addItem({
      variantId: product.variantId,
      title: product.title,
      subtitle: product.description,
      price: product.priceNumber,
      currency: product.currency,
      image: product.image,
      vendor: product.vendor,
      handle: product.handle,
    });
  };

  return (
    <div className="mt-16 space-y-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <Reveal className="rounded-[36px] border border-[#D0BFA9] bg-white shadow-[0_25px_80px_rgba(82,78,72,0.08)] overflow-hidden flex flex-col group transition-transform duration-500 hover:-translate-y-2">
          <div className="relative h-80">
            <img
              src={spotlight.image}
              alt={spotlight.title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#D0BFA9]/70 to-transparent" />
          </div>
          <div className="p-8 space-y-4 text-[#524E48]">
            <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
              Spotlight Ritual
            </p>
            <h3 className="font-serif text-[2rem] leading-tight">
              {spotlight.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#524E48]/80">
              {spotlight.description ||
                "Limited release tool curated for protection, balance, and luminous intention."}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#B0AAA0]">
              <span>{spotlight.type || "Artifact"}</span>
              <span>&middot;</span>
              <span>{spotlight.priceText ?? "Sold Out"}</span>
            </div>
            <div className="flex gap-4">
              {spotlight.variantId ? (
                <button
                  onClick={() => handleAdd(spotlight)}
                  className="flex-1 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] border border-[#524E48] rounded-full hover:bg-[#524E48] hover:text-[#D0BFA9] transition"
                >
                  Add to Cart
                </button>
              ) : (
                <span className="flex-1 px-6 py-3 text-center text-xs uppercase tracking-[0.35em] border border-[#B0AAA0] rounded-full text-[#B0AAA0]">
                  Archive
                </span>
              )}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 text-[#524E48] sm:gap-6">
          {collection.map((product, index) => (
            <Reveal
              key={product.id}
              delay={0.08 * index}
              className="rounded-[20px] border border-[#D0BFA9] bg-white/90 p-4 shadow-[0_18px_50px_rgba(82,78,72,0.07)] flex flex-col gap-3 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(82,78,72,0.12)] sm:rounded-[28px] sm:p-6 sm:gap-4"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#B0AAA0] sm:text-xs sm:tracking-[0.35em]">
                {product.type || "Edition"}
              </p>
              <h4 className="font-serif text-[18px] leading-snug sm:text-xl">
                {product.title}
              </h4>
              <p className="max-h-[4.5em] overflow-hidden text-[12px] text-[#524E48]/70 flex-1 leading-[1.5] sm:max-h-none sm:text-sm sm:leading-relaxed">
                {product.description || "Energetic support for modern rituals."}
              </p>
              <div className="flex flex-col items-start gap-2 text-[10px] uppercase tracking-[0.18em] text-[#B0AAA0] sm:flex-row sm:items-center sm:justify-between sm:text-xs sm:tracking-[0.35em]">
                <span>{product.priceText ?? "Sold Out"}</span>
                {product.variantId ? (
                  <button
                    onClick={() => handleAdd(product)}
                    className="px-3 py-2 border border-[#524E48] rounded-full text-[#524E48] hover:bg-[#524E48] hover:text-[#D0BFA9] transition sm:px-4"
                  >
                    Add
                  </button>
                ) : product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 border border-[#B0AAA0] rounded-full hover:border-[#524E48] sm:px-4"
                  >
                    View
                  </a>
                ) : (
                  <span>Archive</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
