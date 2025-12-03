import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const CLEANSING_IMAGE = "/assets/images/about.png";
const ALT_IMAGE = "/assets/images/modality2.png";

const RITUAL_STEPS = [
  {
    title: "Smoke + Sound",
    description: "Sage smudge, palo santo, and crystal bowls clear the field.",
  },
  {
    title: "Moon soak",
    description: "Pieces rest in Himalayan salt under full-moon frequency.",
  },
  {
    title: "Reiki seal",
    description: "Final blessing, intention scripting, and archival tagging.",
  },
];

export default function EnergeticBlessingSection() {
  return (
    <section
      className="relative overflow-hidden py-24 px-6"
      style={{ backgroundImage: "var(--gradient-luxe)" }}
    >
      <div className="glow-layer">
        <span className="glow-spot glow-spot-sand -left-16 bottom-10" />
        <span className="glow-spot glow-spot-olive right-0 top-0" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-[#524E48]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-[#B0AAA0]">
              Cleansing journal
            </p>
            <h2 className="font-serif text-[2.6rem] leading-tight">
              Energetically cleansed & archived before shipping
            </h2>
            <p className="text-base sm:text-lg text-[#524E48]/85">
              Every product leaves the studio like a magazine cover shoot - bathed in soft light, saged, misted, and Reiki sealed with handwritten notes for your altar.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {RITUAL_STEPS.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[26px] border border-[#EAE4DC] bg-white/80 shadow-[0_18px_50px_rgba(82,78,72,0.08)] p-6 space-y-2"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
                    {step.title}
                  </p>
                  <p className="text-sm text-[#524E48]/80 leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#524E48] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] hover:bg-[#524E48] hover:text-[#F4EEE7] transition"
            >
              Learn about our process
            </Link>
          </Reveal>

          <Reveal delay={0.2} className="relative">
            <div className="rounded-[36px] border border-[#EAE4DC] bg-white shadow-[0_30px_90px_rgba(82,78,72,0.12)] overflow-hidden">
              <div className="grid grid-rows-2">
                <div className="relative h-72">
                  <Image
                    src={CLEANSING_IMAGE}
                    alt="Energetic cleansing ritual being performed"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
                <div className="relative h-72 border-t border-[#EAE4DC]">
                  <Image
                    src={ALT_IMAGE}
                    alt="Blessing tools"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 left-6 right-6 rounded-[32px] border border-[#EAE4DC] bg-white/90 backdrop-blur p-6 shadow-[0_25px_80px_rgba(82,78,72,0.12)]">
              <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
                Studio memo
              </p>
              <p className="mt-3 text-sm text-[#524E48]/80 leading-relaxed">
                "We log every cleanse in our studio ledger so you know the moon phase, botanicals, and prayers your piece received."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
