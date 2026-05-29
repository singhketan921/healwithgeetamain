"use client";

const stats = [
  { value: "720", suffix: "+", label: "Guided Sessions" },
  { value: "25", suffix: "TH", label: "Year of Practice" },
  { value: "1,450", suffix: "+", label: "Students Guided" },
  { value: "130", suffix: "+", label: "Workshops Hosted" },
];

export default function HomeStats() {
  return (
    <section className="home-stats" aria-label="Faith Healers highlights">
      <div className="home-stats__grid">
        {stats.map((stat) => (
          <div className="home-stats__item" key={stat.label}>
            <div className="home-stats__value">
              <span>{stat.value}</span>
              <sup>{stat.suffix}</sup>
            </div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
