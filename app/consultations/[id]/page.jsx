import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchConsultationById } from "@/lib/services/consultationService";

function formatPrice(value, currency = "USD") {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);
  }
  return value ?? "";
}

function formatDuration(minutes) {
  if (!minutes) return "";
  return `${minutes} ${minutes === 1 ? "Minute" : "Minutes"}`;
}

export default async function ConsultationDetailPage({ params }) {
  const resolvedParams = await params;
  const consultation = await fetchConsultationById(resolvedParams.id);

  if (!consultation) {
    notFound();
  }

  const sidebarItems = consultation.modalities?.length
    ? consultation.modalities
    : ["Session overview", "Preparation guidance", "Integration support"];

  return (
    <div className="min-h-screen bg-[#f8f3ef] px-6 pb-16 pt-[calc(var(--navbar-height)+56px)] text-[#ad7f53] lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_320px]">
        <main>
          <Link
            href="/consultations"
            className="mb-10 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.26em] text-[#ad7f53]"
          >
            ← Back to consultations
          </Link>

          <section>
            <h1 className="max-w-[720px] text-[46px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[60px]">
              {consultation.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-[12px] text-white">
              <span className="bg-[#ad7f53] px-4 py-2">
                Price {formatPrice(consultation.price, consultation.currency) || "on request"}
              </span>
              <span className="bg-[#ad7f53] px-4 py-2">
                Duration : {formatDuration(consultation.durationMinutes) || "Custom"}
              </span>
            </div>

            <div className="mt-8 space-y-7 border-b border-[#ad7f53] pb-9">
              <p className="preserve-format text-[15px] leading-[1.45] text-[#ad7f53]">
                {consultation.description}
                {consultation.description ? "\n\n" : ""}
                Every consultation is held as a focused, intentional session so the guidance stays practical, grounded, and easy to integrate after the call.
              </p>
            </div>
          </section>

          {consultation.modalities?.length ? (
            <section className="border-b border-[#ad7f53] py-9">
              <h2 className="text-[28px] font-normal text-[#ad7f53]">
                What this session may include
              </h2>
              <ul className="mt-7 grid gap-3 text-[15px] text-[#ad7f53]">
                {consultation.modalities.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="py-9">
            <h2 className="text-[28px] font-normal text-[#ad7f53]">
              Session details
            </h2>
            <ul className="mt-7 grid gap-3 text-[15px] text-[#ad7f53]">
              <li className="flex items-center gap-3">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">✓</span>
                {formatDuration(consultation.durationMinutes) || "Custom duration"}
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">✓</span>
                {formatPrice(consultation.price, consultation.currency) || "Price on request"}
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">✓</span>
                Preparation guidance shared after booking
              </li>
            </ul>
          </section>

          <img
            src={consultation.image || "/assets/images/astrology.jpg"}
            alt={consultation.title}
            className="mt-4 h-[360px] w-full object-cover"
          />
        </main>

        <aside className="space-y-6 lg:sticky lg:top-[calc(var(--navbar-height)+32px)] lg:self-start">
          <div className="bg-[#ad7f53] p-7 text-white">
            <h2 className="text-[25px] font-normal">{consultation.title}</h2>
            <div className="mt-6 grid gap-3">
              {sidebarItems.slice(0, 5).map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className={index === 0 ? "bg-[#f8f3ef] px-4 py-3 text-[#ad7f53]" : "border border-[#f8f3ef] px-4 py-3 text-white"}
                >
                  → {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white px-8 py-9 text-center text-[#ad7f53]">
            <h2 className="text-[28px] font-normal leading-tight">
              Ready to begin?
            </h2>
            <p className="mt-6 text-[14px]">Reserve your consultation today.</p>
            <Link
              href="/consultations#bookconsultation"
              className="mt-6 inline-flex bg-[#ad7f53] px-6 py-3 text-[13px] uppercase tracking-[0.12em] !text-white"
            >
              Book Now ↗
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
