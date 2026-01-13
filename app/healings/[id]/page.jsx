import { notFound } from "next/navigation";
import { fetchHealingModalityById } from "@/lib/services/healingService";

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

export default async function HealingDetailPage({ params }) {
  const resolvedParams = await params;
  const modality = await fetchHealingModalityById(resolvedParams.id);

  if (!modality) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#EAE4DC] pt-28 pb-16 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <a
          href="/healings"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.32em] text-[#8f857c]"
        >
          <span>&lt;-</span>
          Back to healings
        </a>
      </div>
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[24px] overflow-hidden border border-[#e7dfd6] shadow-[0_18px_36px_rgba(0,0,0,0.14)]">
            <img
              src={modality.image || "/assets/images/astrology.jpg"}
              alt={modality.title}
              className="w-full h-[360px] object-cover"
            />
          </div>
          <div className="bg-white/80 rounded-[24px] border border-[#e7dfd6] p-6">
            <h2 className="text-[18px] font-semibold text-[#6b625a]">
              Healing Overview
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#7a736c]">
              {modality.description}
            </p>
            {modality.benefits?.length ? (
              <div className="mt-6">
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Benefits
                </p>
                <ul className="mt-3 grid gap-2 text-[14px] text-[#6b625a]">
                  {modality.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="rounded-[12px] border border-[#e7dfd6] bg-[#fbf8f5] px-4 py-2"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[24px] border border-[#e7dfd6] bg-[#fbf8f5] p-6 shadow-[0_16px_32px_rgba(0,0,0,0.12)]">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Healing Session
            </p>
            <h1 className="mt-3 text-[30px] font-semibold text-[#6b625a]">
              {modality.title}
            </h1>
            <div className="mt-4 flex items-center justify-between text-[13px] uppercase tracking-[0.2em] text-[#9a938c]">
              <span>Session</span>
              <span>
                {formatPrice(
                  modality.investment ?? modality.price,
                  modality.currency
                )}
              </span>
            </div>
            <div className="mt-2 text-[14px] text-[#7a736c]">
              {formatDuration(modality.durationMinutes)}
            </div>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#7a736c]">
              {modality.description}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/healings#bookconsultation"
                className="rounded-[12px] bg-[#6b625a] px-6 py-3 text-[13px] font-semibold text-white text-center"
              >
                Book this healing
              </a>
              <a
                href="/healings"
                className="rounded-[12px] border border-[#8f857c] px-6 py-3 text-[13px] font-semibold text-[#6b625a] text-center"
              >
                Back to healings
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#e7dfd6] bg-white/80 p-6">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Details
            </p>
            <dl className="mt-4 space-y-3 text-[14px] text-[#6b625a]">
              <div className="flex items-center justify-between">
                <dt>Investment</dt>
                <dd>
                  {formatPrice(
                    modality.investment ?? modality.price,
                    modality.currency
                  )}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Duration</dt>
                <dd>{formatDuration(modality.durationMinutes) || "Custom"}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Currency</dt>
                <dd>{modality.currency ?? "USD"}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
