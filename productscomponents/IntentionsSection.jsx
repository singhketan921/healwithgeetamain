const INTENTIONS = [
  {
    id: "balance",
    label: "For Emotional Balance",
    description:
      "Rose Quartz for love and compassion, Moonstone for emotional stability and intuitive guidance.",
    cta: "Explore Emotional Healing",
    icon: "heart",
    href: "/healings#emotional",
  },
  {
    id: "protection",
    label: "For Protection & Grounding",
    description:
      "Obsidian for protection from negativity, Hematite for grounding and stability in daily life.",
    cta: "Explore Protection Stones",
    icon: "shield",
    href: "/healings#protection",
  },
  {
    id: "clarity",
    label: "For Clarity & Focus",
    description:
      "Amethyst for spiritual clarity, Citrine for mental focus and manifestation of goals.",
    cta: "Explore Clarity Stones",
    icon: "eye",
    href: "/healings#clarity",
  },
];

const ICON_MAP = {
  heart: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#E4C77C]"
      className="h-6 w-6 text-[#F2D7A2]"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 20.3a1 1 0 0 1-.7-.3l-6.6-6.4a4.7 4.7 0 0 1 0-6.7 4.9 4.9 0 0 1 6.8 0l.5.5.5-.5a4.9 4.9 0 0 1 6.8 0 4.7 4.7 0 0 1 0 6.7l-6.6 6.4a1 1 0 0 1-.7.3Z"
      />
    </svg>
  ),
  shield: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#F2D7A2]"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 21.4a1 1 0 0 1-.5-.1c-4.4-2-7-5.2-7-9.5V6.8a1 1 0 0 1 .7-.9l6.5-2.4a1 1 0 0 1 .6 0l6.5 2.4a1 1 0 0 1 .7.9v5c0 4.3-2.6 7.5-7 9.5a1 1 0 0 1-.5.1Z"
      />
    </svg>
  ),
  eye: (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#F2D7A2]"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 17.5c-6.2 0-9.9-5.1-10.1-5.4a1 1 0 0 1 0-1.2C2.1 10.6 5.8 5.5 12 5.5s9.9 5.1 10.1 5.4a1 1 0 0 1 0 1.2c-.2.3-3.9 5.4-10.1 5.4Zm0-9.3c-3.6 0-6.3 2.7-7.4 3.9 1.1 1.2 3.8 3.9 7.4 3.9s6.3-2.7 7.4-3.9c-1.1-1.2-3.8-3.9-7.4-3.9Zm0 6.3a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm0-3a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2Z"
      />
    </svg>
  ),
};

export default function IntentionsSection() {
  return (
    <section className="w-full bg-[#Ffffff] py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1F1F] font-semibold mb-3">
          Find the Right Energy Tool for You
        </h2>
        <p className="text-base sm:text-lg text-[#41413D] mb-10">
          Discover crystals that align with your specific intentions and needs.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INTENTIONS.map((item) => (
            <article
              key={item.id}
              className="w-full max-w-sm mx-auto  rounded-[26px] px-6 py-8 shadow-[0_18px_45px_rgba(31,31,31,0.05)] border border-[#F1EFE6]"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F3F0E3]">
                {ICON_MAP[item.icon]}
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A18] mb-3">
                {item.label}
              </h3>
              <p className="text-sm text-[#5C5C58] leading-relaxed mb-4">
                {item.description}
              </p>
              <a
                href={item.href}
                className="text-sm font-semibold text-[#A8B963] hover:text-[#8EA048] transition"
              >
                
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
