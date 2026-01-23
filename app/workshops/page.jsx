import Link from "next/link";
import Reveal from "@/components/Reveal";
import { fetchWorkshops } from "@/lib/services/workshopService";

export const metadata = {
  title: "Workshops - HealWithGeeta",
  description:
    "Explore upcoming live workshops and sacred learning experiences with Geeta.",
};

function formatPrice(price, currency) {
  if (!price) {
    return "Price on request";
  }
  return `${currency || "INR"} ${price}`;
}

function buildSchedule(workshop) {
  if (!workshop.startDate) {
    return "Dates to be announced";
  }
  const time = workshop.startTime ? ` · ${workshop.startTime}` : "";
  const tz = workshop.timezone ? ` ${workshop.timezone}` : "";
  return `${workshop.startDate}${time}${tz}`;
}

export default async function WorkshopsPage() {
  const workshops = await fetchWorkshops();
  const activeWorkshops = (workshops ?? []).filter((item) => item?.active);

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <section
        className="w-full pt-24 pb-14"
        style={{ background: "linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="max-w-[720px] space-y-4 text-[#6b625a]">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Workshops
            </p>
            <h1 className="text-[30px] sm:text-[40px] font-semibold tracking-[0.08em]">
              Live transmissions for ritual alignment
            </h1>
            <p className="text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
              Join the upcoming sacred sessions designed to reset energy, reveal
              intuition, and anchor your daily practice.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f6f2ee]">
        <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6">
          {activeWorkshops.length === 0 ? (
            <div className="rounded-[20px] border border-[#e7dfd6] bg-white/80 px-6 py-10 text-center text-[#6b625a] shadow-[0_12px_26px_rgba(0,0,0,0.08)]">
              <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                New sessions soon
              </p>
              <h2 className="mt-3 text-[24px] sm:text-[30px] font-semibold tracking-[0.08em]">
                No workshops available
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
                The next live experience is being prepared. Please check back
                shortly for the upcoming launch.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeWorkshops.map((workshop, index) => {
                const slug = workshop.id ?? workshop._id;
                return (
                  <Reveal
                    key={slug ?? index}
                    delay={0.08 * index}
                    className="flex h-full flex-col overflow-hidden rounded-[26px] border border-[#e7dfd6] bg-white/90 shadow-[0_18px_40px_rgba(82,78,72,0.08)]"
                  >
                    <div className="relative h-48">
                      <img
                        src={
                          workshop.heroImage ||
                          "/assets/images/hero image faith healers.png"
                        }
                        alt={workshop.title || "Workshop"}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#524E48]/60 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full border border-[#e7dfd6] bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-[#6b625a]">
                        {workshop.offerBadge || "Live Workshop"}
                      </span>
                    </div>
                    <div className="flex h-full flex-col gap-4 p-6 text-[#524E48]">
                      <div className="space-y-2">
                        <h3 className="text-[20px] font-semibold leading-snug">
                          {workshop.title || "Untitled Workshop"}
                        </h3>
                        {workshop.subtitle ? (
                          <p className="text-sm text-[#7a736c]">
                            {workshop.subtitle}
                          </p>
                        ) : null}
                        {workshop.teaser ? (
                          <p className="text-sm leading-relaxed text-[#524E48]/80">
                            {workshop.teaser}
                          </p>
                        ) : null}
                      </div>
                      <div className="space-y-2 text-xs uppercase tracking-[0.28em] text-[#9a938c]">
                        <div>{buildSchedule(workshop)}</div>
                        <div>
                          {workshop.location || "Online"}{" "}
                          {workshop.durationMinutes
                            ? `· ${workshop.durationMinutes} mins`
                            : ""}
                        </div>
                        <div>
                          {formatPrice(workshop.price, workshop.currency)}{" "}
                          {workshop.seats ? `· ${workshop.seats} seats` : ""}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Link
                          href={`/workshops/${slug}`}
                          className="inline-flex items-center justify-center rounded-full border border-[#524E48] px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#524E48] transition hover:bg-[#524E48] hover:text-[#f6f2ee]"
                        >
                          View Workshop
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
