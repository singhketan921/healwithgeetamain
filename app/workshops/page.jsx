import Link from "next/link";
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
  const time = workshop.startTime ? ` ${workshop.startTime}` : "";
  const tz = workshop.timezone ? ` ${workshop.timezone}` : "";
  return `${workshop.startDate}${time}${tz}`;
}

export default async function WorkshopsPage() {
  const workshops = await fetchWorkshops();
  const activeWorkshops = (workshops ?? []).filter((item) => item?.active);

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <section
        className="py-24 text-[#6b625a] w-full"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F4E8 100%)" }}
      >
        <div className="mx-auto max-w-[1320px] px-6 space-y-12">
          <div className="space-y-4 max-w-[720px] mx-auto text-center">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Workshops
            </p>
            <h1 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold tracking-[0.14em] text-[#6b625a]">
              Live transmissions for ritual alignment
            </h1>
            <div className="mx-auto h-[2px] w-16 rounded-full bg-[#d8cfc6]" />
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
              Join the upcoming sacred sessions designed to reset energy, reveal
              intuition, and anchor your daily practice.
            </p>
          </div>

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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeWorkshops.map((workshop, index) => {
                const slug = workshop.id ?? workshop._id;
                const schedule = buildSchedule(workshop);
                const details = [
                  workshop.location || "Online",
                  workshop.durationMinutes
                    ? `${workshop.durationMinutes} mins`
                    : null,
                ]
                  .filter(Boolean)
                  .join(" - ");
                return (
                  <article
                    key={slug ?? index}
                    className="rounded-[18px] border border-[#e7dfd6] bg-[#fbf8f5] shadow-[0_16px_32px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col"
                  >
                    <Link href={`/workshops/${slug}`} className="block">
                      <img
                        src={
                          workshop.heroImage ||
                          "/assets/images/hero image faith healers.png"
                        }
                        alt={workshop.title || "Workshop"}
                        className="w-full h-52 object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex flex-col h-full p-6 space-y-4">
                      <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.2em] text-[#9a938c]">
                        <span>{workshop.offerBadge || "Workshop"}</span>
                        <span>
                          {workshop.price
                            ? formatPrice(workshop.price, workshop.currency)
                            : "Custom"}
                        </span>
                      </div>
                      <Link href={`/workshops/${slug}`}>
                        <h3 className="text-[20px] sm:text-[22px] font-semibold leading-snug">
                          {workshop.title || "Untitled Workshop"}
                        </h3>
                      </Link>
                      <p className="text-[14px] text-[#7a736c] flex-1 leading-[1.7]">
                        {workshop.teaser ||
                          workshop.subtitle ||
                          workshop.description ||
                          "A guided workshop for ritual alignment and energetic reset."}
                      </p>
                      <div className="text-[12px] uppercase tracking-[0.2em] text-[#9a938c] space-y-2">
                        <div>{schedule}</div>
                        <div>{details || "Live online session"}</div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link
                          href={`/workshops/${slug}`}
                          className="rounded-[12px] border border-[#8f857c] bg-transparent px-6 py-2 text-[13px] font-semibold text-[#6b625a] text-center"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
