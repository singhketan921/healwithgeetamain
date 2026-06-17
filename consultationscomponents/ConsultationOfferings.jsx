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
      className="bg-[#f8f3ef] pb-20 pt-[calc(var(--navbar-height)+32px)] text-[#ad7f53] sm:pb-24"
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

        <div className="grid grid-cols-2 border-l border-t border-[#c99b74] lg:grid-cols-3">
          {safeOfferings.map((item, i) => {
            const itemId = item.id ?? item._id;
            return (
              <motion.article
                key={itemId ?? i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative min-h-[370px] overflow-hidden border-b border-r border-[#c99b74] bg-[#f8f3ef] p-4 sm:min-h-[600px] sm:p-10 lg:p-[72px]"
              >
                <div className="flex h-full flex-col items-start">
                  <Link href={`/consultations/${itemId}`} className="mb-4 block w-full sm:mb-8">
                    <img
                      src={item.image || "/assets/images/astrology.jpg"}
                      alt={item.title}
                      className="aspect-[1.45/1] w-full object-cover"
                    />
                  </Link>
                  <Link href={`/consultations/${itemId}`}>
                    <h3 className="mb-2 text-[18px] font-normal leading-tight text-[#ad7f53] sm:mb-3 sm:text-[28px]">
                      {item.title}
                    </h3>
                  </Link>
                  <span className="mb-4 inline-flex bg-[#ad7f53] px-2.5 py-1.5 text-[11px] leading-none !text-white sm:mb-6 sm:px-3 sm:py-2 sm:text-[13px]">
                    {formatPrice(item.price, item.currency)}
                  </span>
                  <p className="mb-4 max-h-[4.1em] max-w-[320px] overflow-hidden text-[12px] leading-[1.35] text-[#ad7f53] preserve-format sm:mb-8 sm:max-h-none sm:text-[15px]">
                    {item.description}
                  </p>
                  <Link
                    href={`/consultations/${itemId}`}
                    className="mt-auto inline-flex h-9 w-full items-center justify-center gap-2 bg-[#ad7f53] px-3 text-[10px] font-medium uppercase tracking-[0.08em] !text-white transition-colors hover:bg-[#986d45] sm:h-12 sm:min-w-[168px] sm:w-auto sm:gap-3 sm:px-7 sm:text-[13px]"
                  >
                    Read More <span aria-hidden="true">↗</span>
                  </Link>
                </div>

                <Link
                  href={`/consultations/${itemId}`}
                  className="absolute inset-0 z-10 flex translate-y-4 flex-col items-center justify-center bg-[#ad7f53] px-8 text-center !text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                >
                  <span className="mb-4 text-[20px] font-normal leading-tight sm:mb-6 sm:text-[30px]">
                    {item.title}
                  </span>
                  <span className="mb-5 max-w-[250px] text-[12px] leading-[1.35] !text-white/90 sm:mb-7 sm:text-[15px]">
                    {item.description}
                  </span>
                  <span className="inline-flex h-10 items-center justify-center gap-2 bg-[#f8f3ef] px-4 text-[10px] font-medium uppercase tracking-[0.08em] text-[#5e5147] sm:h-12 sm:gap-3 sm:px-8 sm:text-[13px]">
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
