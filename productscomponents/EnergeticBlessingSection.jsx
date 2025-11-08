import Image from "next/image";
import Link from "next/link";

const CLEANSING_IMAGE = "/assets/images/about.png";

export default function EnergeticBlessingSection() {
  return (
    <section className="w-full bg-[#faf9f4] py-16 px-5 sm:px-8">
      
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="relative w-full h-64 sm:h-80 lg:h-auto lg:w-1/3 lg:ml-20">
            <Image
              src={CLEANSING_IMAGE}
              alt="Energetic cleansing ritual being performed"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center gap-4 px-6 pb-10 text-center lg:text-left lg:w-1/2 lg:px-12">
            <p className="uppercase text-xs tracking-[0.35em] text-[#A7A087]">
              Ritual Quality
            </p>
            <h2 className="font-serif text-3xl text-[#1E1D1A] font-semibold">
              Energetically Cleansed & Blessed
            </h2>
            <p className="text-[#49473F] leading-relaxed">
              Every product is energetically cleansed and infused with intention
              before delivery. I personally bless each crystal and spiritual tool
              to ensure it carries the highest vibrational frequency for your
              healing journey.
            </p>
            <p className="text-[#49473F] leading-relaxed">
              Using traditional cleansing methods including sage, moonlight, and
              Reiki energy, each item is prepared with love and sacred intention.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center self-center rounded-full bg-[#A8B963] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#8DA14C] lg:self-start"
            >
              Learn More About Our Process
            </Link>
          </div>
        </div>
      
    </section>
  );
}
