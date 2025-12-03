import Reveal from "@/components/Reveal";

const INTENTIONS = [
  {
    id: "balance",
    label: "Emotional Balance",
    description:
      "Rose Quartz for devotion, Moonstone for intuitive calm, and sandalwood oil to soften the heart field.",
    note: "Pairs with breath journaling",
    href: "/healings#emotional",
    icon: "heart",
  },
  {
    id: "protection",
    label: "Protection & Grounding",
    description:
      "Black Tourmaline towers, obsidian palm stones, and smokey quartz grids to anchor sensitive empaths.",
    note: "Includes grounding ritual",
    href: "/healings#protection",
    icon: "shield",
  },
  {
    id: "clarity",
    label: "Clarity & Focus",
    description:
      "Amethyst elixirs blended with citrine points to keep your crown clear during launches and deep work.",
    note: "Recommended for founders",
    href: "/healings#clarity",
    icon: "eye",
  },
];

const ICON_MAP = {
  heart: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A59079]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 20.3a1 1 0 0 1-.7-.3l-6.6-6.4a4.7 4.7 0 0 1 0-6.7 4.9 4.9 0 0 1 6.8 0l.5.5.5-.5a4.9 4.9 0 0 1 6.8 0 4.7 4.7 0 0 1 0 6.7l-6.6 6.4a1 1 0 0 1-.7.3Z"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A59079]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 21.4a1 1 0 0 1-.5-.1c-4.4-2-7-5.2-7-9.5V6.8a1 1 0 0 1 .7-.9l6.5-2.4a1 1 0 0 1 .6 0l6.5 2.4a1 1 0 0 1 .7.9v5c0 4.3-2.6 7.5-7 9.5a1 1 0 0 1-.5.1Z"
      />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#A59079]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 17.5c-6.2 0-9.9-5.1-10.1-5.4a1 1 0 0 1 0-1.2C2.1 10.6 5.8 5.5 12 5.5s9.9 5.1 10.1 5.4a1 1 0 0 1 0 1.2c-.2.3-3.9 5.4-10.1 5.4Zm0-9.3c-3.6 0-6.3 2.7-7.4 3.9 1.1 1.2 3.8 3.9 7.4 3.9s6.3-2.7 7.4-3.9c-1.1-1.2-3.8-3.9-7.4-3.9Zm0 6.3a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm0-3a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2Z"
      />
    </svg>
  ),
};

export default function IntentionsSection() {
  return (
    <section
      className="relative overflow-hidden py-24 px-6"
      style={{ backgroundImage: "var(--gradient-sand)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-0 top-10 w-72 h-72 rounded-full bg-white blur-[160px]" />
        <span className="absolute right-0 bottom-0 w-60 h-60 rounded-full bg-[#D6CCC3] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-[#524E48]">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-[#B0AAA0]">
              Intention styling
            </p>
            <h2 className="font-serif text-[2.7rem] leading-tight">
              Curate your tools by mood & ritual
            </h2>
            <p className="text-base sm:text-lg text-[#524E48]/80">
              Shop like an editorial: choose a storyline - balance, protection, clarity - and we match the right stones, serums, and ritual notes for you.
            </p>

            <div className="rounded-[32px] border border-[#EAE4DC] bg-white/85 shadow-[0_20px_55px_rgba(82,78,72,0.09)] p-8 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
                Editor's pull quote
              </p>
              <p className="font-serif text-2xl leading-snug">
                "Each bundle is composed like a magazine shoot - soft lighting, tactile layers, and sensory cues for your home studio."
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#EAE4DC] bg-white/70 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
                  Shipping
                </p>
                <p className="text-sm text-[#524E48]/80">Worldwide within 5 days</p>
              </div>
              <div className="rounded-[24px] border border-[#EAE4DC] bg-white/70 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
                  Blessing
                </p>
                <p className="text-sm text-[#524E48]/80">Cleansed before dispatch</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {INTENTIONS.map((item, index) => (
              <Reveal
                key={item.id}
                delay={0.1 * index}
                className="rounded-[30px] border border-[#EAE4DC] bg-white shadow-[0_25px_70px_rgba(82,78,72,0.08)] p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#F6F3EF] flex items-center justify-center">
                    {ICON_MAP[item.icon]}
                  </div>
                  <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">{item.note}</p>
                </div>
                <h3 className="font-serif text-2xl leading-tight">{item.label}</h3>
                <p className="text-sm text-[#524E48]/75 leading-relaxed flex-1">{item.description}</p>
                <a
                  href={item.href}
                  className="text-xs uppercase tracking-[0.35em] text-[#A59079] inline-flex items-center gap-2"
                >
                  Explore set
                  <span className="inline-block h-px w-12 bg-[#A59079]" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
