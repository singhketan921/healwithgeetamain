import { notFound } from "next/navigation";
import Testimonials from "@/components/Testimonials";
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
    <div className="min-h-screen bg-[#D0BFA9] pt-28 pb-16 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <a
          href="/healings"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.32em] text-[#8f857c]"
        >
          <span>&lt;-</span>
          Back to healings
        </a>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-5">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Healing Session
            </p>
            <h1 className="text-[32px] sm:text-[42px] font-semibold leading-[1.15] text-[#6b625a]">
              {modality.title}
            </h1>
            <p className="text-[15px] sm:text-[18px] leading-[1.7] text-[#7a736c]">
              {modality.description}
            </p>
            <div className="flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
              <span className="rounded-full border border-[#e7dfd6] bg-[#F9F4E8] px-4 py-2">
                {formatDuration(modality.durationMinutes) || "Custom duration"}
              </span>
              <span className="rounded-full border border-[#e7dfd6] bg-[#F9F4E8] px-4 py-2">
                {formatPrice(
                  modality.investment ?? modality.price,
                  modality.currency
                )}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
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
                View all healings
              </a>
            </div>
          </div>
          <div className="rounded-[26px] overflow-hidden border border-[#e7dfd6] shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
            <img
              src={modality.image || "/assets/images/astrology.jpg"}
              alt={modality.title}
              className="w-full h-[360px] object-cover"
            />
          </div>
        </section>

        <section className="mt-12 rounded-[24px] border border-[#e7dfd6] bg-white/80 p-8 shadow-[0_16px_34px_rgba(0,0,0,0.1)]">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                Healing Overview
              </p>
              <p className="mt-4 text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
                {modality.description}
              </p>
            </div>
            <div className="rounded-[20px] border border-[#e7dfd6] bg-[#F9F4E8] p-6">
              <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                Session Details
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
          </div>
        </section>

        {modality.benefits?.length ? (
          <section className="mt-12 rounded-[24px] border border-[#e7dfd6] bg-white/80 p-8">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Benefits
            </p>
            <ul className="mt-4 grid gap-2 text-[14px] text-[#6b625a]">
              {modality.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-[12px] border border-[#e7dfd6] bg-[#F9F4E8] px-4 py-2"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-12 rounded-[26px] bg-[#6b625a] px-8 py-10 text-center">
          <h2 className="text-[26px] sm:text-[32px] font-semibold !text-white">
            Ready to receive your healing?
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] text-white/80">
            Book your session and receive preparation guidance.
          </p>
          <a
            href="/healings#bookconsultation"
            className="mt-6 inline-flex rounded-[12px] bg-white px-8 py-3 text-[13px] font-semibold !text-[#6b625a]"
          >
            Book your healing
          </a>
        </section>
      </div>
      <section className="mt-16 -mx-6 lg:-mx-12">
        <Testimonials showCtas={false} />
      </section>
    </div>
  );
}
