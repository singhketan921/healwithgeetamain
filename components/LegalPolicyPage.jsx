import { PublicPageShell } from "@/components/PublicPageUI";

export default function LegalPolicyPage({ title, subtitle, effectiveDate, sections }) {
  return (
    <PublicPageShell>
      <article className="public-legal-card">
        <header>
          <p className="public-eyebrow">Legal</p>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p>
            <strong>Effective Date:</strong> {effectiveDate}
          </p>
        </header>

        <section>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items?.length ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      </article>
    </PublicPageShell>
  );
}
