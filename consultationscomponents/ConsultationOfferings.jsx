'use client';

import Link from "next/link";
import { motion } from "framer-motion";

function formatPrice(value, currency = "USD") {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
}

export default function ConsultationOfferings({ offerings = [] }) {
  const safeOfferings = offerings;

  return (
    <section
      id="offerings"
      className="bg-[#f8f3ef] py-20 text-[#ad7f53] sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="mx-auto mb-14 max-w-[760px] text-center sm:mb-16">
          <p className="mb-3 flex items-center justify-center gap-2 text-[14px] font-medium text-[#ad7f53] sm:text-[16px]">
            <span className="text-[18px] leading-none">✽</span>
            Offerings
          </p>
          <h2 className="text-[40px] font-normal leading-[0.95] text-[#ad7f53] sm:text-[56px] md:text-[64px]">
            Consultations Crafted
            <span className="mt-2 block font-serif text-[44px] italic leading-none sm:text-[60px] md:text-[68px]">
              for Your Path
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.7] text-[#ad7f53]/85 sm:text-[16px]">
            Choose the reading that brings clarity and calm. Each session blends sacred insight with practical next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-[#c99b74] sm:grid-cols-2 lg:grid-cols-3">
          {safeOfferings.map((item, i) => {
            const itemId = item.id ?? item._id;
            return (
              <motion.article
                key={itemId ?? i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative min-h-[540px] overflow-hidden border-b border-r border-[#c99b74] bg-[#f8f3ef] p-8 sm:min-h-[600px] sm:p-10 lg:p-[72px]"
              >
                <div className="flex h-full flex-col items-start">
                  <Link href={`/consultations/${itemId}`} className="mb-8 block w-full">
                    <img
                      src={item.image || "/assets/images/astrology.jpg"}
                      alt={item.title}
                      className="aspect-[1.45/1] w-full object-cover"
                    />
                  </Link>
                  <Link href={`/consultations/${itemId}`}>
                    <h3 className="mb-3 text-[25px] font-normal leading-tight text-[#ad7f53] sm:text-[28px]">
                      {item.title}
                    </h3>
                  </Link>
                  <span className="mb-6 inline-flex bg-[#ad7f53] px-3 py-2 text-[13px] leading-none !text-white">
                    {formatPrice(item.price, item.currency)}
                  </span>
                  <p className="mb-8 max-w-[320px] text-[15px] leading-[1.35] text-[#ad7f53] preserve-format">
                    {item.description}
                  </p>
                  <Link
                    href={`/consultations/${itemId}`}
                    className="mt-auto inline-flex h-12 min-w-[168px] items-center justify-center gap-3 bg-[#ad7f53] px-7 text-[13px] font-medium uppercase tracking-[0.08em] !text-white transition-colors hover:bg-[#986d45]"
                  >
                    Read More <span aria-hidden="true">↗</span>
                  </Link>
                </div>

                <Link
                  href={`/consultations/${itemId}`}
                  className="absolute inset-0 z-10 flex translate-y-4 flex-col items-center justify-center bg-[#ad7f53] px-8 text-center !text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                >
                  <span className="mb-6 text-[27px] font-normal leading-tight sm:text-[30px]">
                    {item.title}
                  </span>
                  <span className="mb-7 max-w-[250px] text-[15px] leading-[1.45] !text-white/90">
                    {item.description}
                  </span>
                  <span className="inline-flex h-12 items-center justify-center gap-3 bg-[#f8f3ef] px-8 text-[13px] font-medium uppercase tracking-[0.08em] text-[#5e5147]">
                    View Details <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
