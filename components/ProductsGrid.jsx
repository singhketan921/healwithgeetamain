'use client';

import { useCart } from "@/context/CartContext";

export default function ProductsGrid({ products = [] }) {
  const { addItem } = useCart();

  return (
    <div
      id="product-grid"
      className="grid grid-cols-1 gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product) => {
        const price = product.priceText ?? "—";
        const canAdd = Boolean(product.variantId);

        return (
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
                  {price}
                </span>
                <button
                  disabled={!canAdd}
                  onClick={() =>
                    addItem({
                      variantId: product.variantId,
                      title: product.title,
                      subtitle: product.description,
                      price: product.priceNumber,
                      currency: product.currency,
                      image: product.image,
                      vendor: product.vendor,
                      handle: product.handle,
                    })
                  }
                  className={`text-sm font-medium rounded-full px-4 py-2 transition ${
                    canAdd
                      ? "bg-[#F2D7A2] text-[#1B1B1B] hover:bg-[#e5c486]"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {canAdd ? "Add to Cart" : "Sold Out"}
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
