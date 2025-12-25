"use client";

const CARDS = [
  {
    title: "Energy Blocks",
    image: "/assets/images/modality1.png",
  },
  {
    title: "Emotional Healing",
    image: "/assets/images/modality2.png",
  },
  {
    title: "Clarity & Direction",
    image: "/assets/images/modality3.png",
  },
];

export default function DailyNeeds() {
  return (
    <section className="bg-white text-[#5c554c]">
      <div className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-20">
        <span className="pointer-events-none absolute right-6 top-10 h-2 w-2 rounded-full bg-[#e2dbd2]" />
        <span className="pointer-events-none absolute left-8 top-28 h-3 w-3 rounded-full border border-[#eee7df]" />
        <div className="text-center">
          <h2 className="text-[30px] sm:text-[38px] font-semibold tracking-[0.14em] text-[#6a625a]">
            FOR DAILY HEALING NEEDS
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] tracking-[0.08em] text-[#a59d94]">
            Designed for Everyday Clarity and Comfort
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-[22px] bg-[#faf7f3] shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-[240px] w-full object-cover sm:h-[280px] lg:h-[320px] transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-[18px] sm:text-[20px] tracking-[0.02em]">
                  {card.title} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
