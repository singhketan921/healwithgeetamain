export default function LegalPolicyPage({ title, subtitle, effectiveDate, sections }) {
  return (
    <div className="w-full px-6 pb-16 pt-[calc(var(--navbar-height)+32px)] md:pb-20">
      <article className="max-w-4xl mx-auto rounded-3xl border border-[#D0BFA9] bg-white/90 p-6 md:p-10 shadow-[0_10px_40px_rgba(82,78,72,0.08)]">
        <header className="border-b border-[#E6D9C9] pb-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A59079]">Legal</p>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl text-[#524E48]">{title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-[#6B625A]">{subtitle}</p>
          <p className="mt-3 text-sm text-[#6B625A]">
            <span className="font-medium text-[#524E48]">Effective Date:</span> {effectiveDate}
          </p>
        </header>

        <section className="mt-8 space-y-7">
          {sections.map((section) => (
            <div key={section.heading} className="space-y-3">
              <h2 className="font-serif text-2xl text-[#524E48]">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-[#5E5750]">
                  {paragraph}
                </p>
              ))}
              {section.items?.length ? (
                <ul className="list-disc pl-6 space-y-2 text-[15px] leading-relaxed text-[#5E5750]">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}
