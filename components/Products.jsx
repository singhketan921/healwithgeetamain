'use client';

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const moonstone = "/assets/images/moonstone.jpg";

const fallbackProducts = [
  {
    id: 1,
    title: "Moon Stone",
    subtitle: "For Healing",
    type: "Pendant",
    priceText: "$38.00",
    image: moonstone,
  },
  {
    id: 2,
    title: "Moon Stone",
    subtitle: "For Healing",
    type: "Pendant",
    priceText: "$38.00",
    image: moonstone,
  },
  {
    id: 3,
    title: "Moon Stone",
    subtitle: "For Healing",
    type: "Pendant",
    priceText: "$38.00",
    image: moonstone,
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
  const [backgroundStars] = useState(() =>
    Array.from({ length: 25 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }))
  );

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
        type: product.type,
        image: product.image ?? moonstone,
        priceText:
          product.priceText || formatPrice(product.price, product.currency),
        url: product.url || fallbackUrl,
        cartUrl: product.cartUrl ?? null,
      };
    });
  }, [products, storeUrl]);

  return (
    <section className="relative bg-gradient-to-b from-[#FAFAF8] to-[#F9F8F3] py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundStars.map((star, i) => (
          <span
            key={i}
            className="absolute block h-[3px] w-[3px] rounded-full bg-white opacity-70 animate-twinkle-glow"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
            }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <h2 className="font-serif text-[2.5rem] sm:text-[3rem] font-semibold text-charcoal mb-3">
          Our Products
        </h2>
        <p className="text-charcoal/80 text-base sm:text-lg mb-8">
          Quality products tailored for excellence.
        </p>

        <div className="mb-14">
          <a
            href="/products"
            className="inline-block bg-[#ACBF69] text-white px-8 py-3 rounded-md font-medium text-lg shadow-sm transition hover:bg-[#9CAD5B]"
          >
            Browse Products
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {productList.map((product, index) => (
            <ProductCard
              key={product.id ?? index}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const productLink = product.cartUrl || product.url;
  const isCartLink = Boolean(product.cartUrl);

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-sm transition-all overflow-hidden max-w-[360px] w-full relative ${
        hovered ? "shadow-[0_0_25px_rgba(197,163,92,0.45)]" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-5 text-left">
        <h3 className="text-[1.05rem] font-semibold text-[#1E1E1E] mb-1">
          {product.title}
        </h3>
        <p className="text-[#6B6B6B] text-sm leading-tight mb-2">
          {product.subtitle}
          {product.type && (
            <>
              <br />
              {product.type}
            </>
          )}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-charcoal font-semibold text-[0.95rem]">
            {product.priceText ?? "—"}
          </span>

          {productLink ? (
            <motion.a
              href={productLink}
              target={isCartLink ? "_self" : "_blank"}
              rel={isCartLink ? undefined : "noreferrer"}
              initial={{ width: 28 }}
              animate={{
                width: hovered ? 130 : 28,
                backgroundColor: "#ACBF69",
                borderRadius: 9999,
                boxShadow: hovered
                  ? "0 4px 15px rgba(172, 191, 105, 0.4)"
                  : "0 0 0 rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-7 flex items-center justify-center text-white text-sm font-medium overflow-hidden"
            >
              {hovered ? (
                <span className="px-2 whitespace-nowrap">
                  {isCartLink ? "Add to Cart" : "Shop Product"}
                </span>
              ) : (
                <span className="text-lg leading-none">+</span>
              )}
            </motion.a>
          ) : (
            <motion.span
              initial={{ width: 28 }}
              animate={{
                width: hovered ? 115 : 28,
                backgroundColor: "#ACBF69",
                borderRadius: 9999,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-7 flex items-center justify-center text-white text-xs font-medium overflow-hidden"
            >
              Coming Soon
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
