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
      <section className="w-full bg-[#f8f3ef] py-20 text-[#ad7f53] sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="mx-auto mb-14 max-w-[760px] text-center sm:mb-16">
            <p className="mb-3 flex items-center justify-center gap-2 text-[14px] font-medium text-[#ad7f53] sm:text-[16px]">
              <span className="text-[18px] leading-none">✽</span>
              Workshops
            </p>
            <h1 className="text-[40px] font-normal leading-[0.95] text-[#ad7f53] sm:text-[56px] md:text-[64px]">
              Live Transmissions
              <span className="mt-2 block font-serif text-[44px] italic leading-none sm:text-[60px] md:text-[68px]">
                for Ritual Alignment
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-[1.7] text-[#ad7f53]/85 sm:text-[16px]">
              Join the upcoming sacred sessions designed to reset energy, reveal
              intuition, and anchor your daily practice.
            </p>
          </div>

          {activeWorkshops.length === 0 ? (
            <div className="border border-[#c99b74] bg-[#f8f3ef] px-6 py-10 text-center text-[#ad7f53]">
              <p className="text-[12px] uppercase tracking-[0.32em]">
                New sessions soon
              </p>
              <h2 className="mt-3 text-[24px] font-normal sm:text-[30px]">
                No workshops available
              </h2>
              <p className="mx-auto mt-4 max-w-[520px] text-[14px] leading-[1.7] sm:text-[16px]">
                The next live experience is being prepared. Please check back
                shortly for the upcoming launch.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 border-l border-t border-[#c99b74] sm:grid-cols-2 lg:grid-cols-3">
              {activeWorkshops.map((workshop, index) => {
                const slug = workshop.id ?? workshop._id;
                const schedule = buildSchedule(workshop);
                const description =
                  workshop.teaser ||
                  workshop.subtitle ||
                  workshop.description ||
                  "A guided workshop for ritual alignment and energetic reset.";
                const priceLabel = workshop.price
                  ? formatPrice(workshop.price, workshop.currency)
                  : "Custom";
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
                    className="group relative min-h-[540px] overflow-hidden border-b border-r border-[#c99b74] bg-[#f8f3ef] p-8 sm:min-h-[600px] sm:p-10 lg:p-[72px]"
                  >
                    <div className="flex h-full flex-col items-start">
                      <Link href={`/workshops/${slug}`} className="mb-8 block w-full">
                        <img
                          src={
                            workshop.heroImage ||
                            "/assets/images/hero image faith healers.png"
                          }
                          alt={workshop.title || "Workshop"}
                          className="aspect-[1.45/1] w-full object-cover"
                          loading="lazy"
                        />
                      </Link>
                      <Link href={`/workshops/${slug}`}>
                        <h3 className="mb-3 text-[25px] font-normal leading-tight text-[#ad7f53] sm:text-[28px]">
                          {workshop.title || "Untitled Workshop"}
                        </h3>
                      </Link>
                      <span className="mb-6 inline-flex bg-[#ad7f53] px-3 py-2 text-[13px] leading-none !text-white">
                        {priceLabel}
                      </span>
                      <p className="mb-8 max-w-[320px] text-[15px] leading-[1.35] text-[#ad7f53]">
                        {description}
                      </p>
                      <div className="mb-6 space-y-2 text-[12px] uppercase tracking-[0.14em] text-[#ad7f53]/80">
                        <div>{schedule}</div>
                        <div>{details || "Live online session"}</div>
                      </div>
                      <Link
                        href={`/workshops/${slug}`}
                        className="mt-auto inline-flex h-12 min-w-[168px] items-center justify-center gap-3 bg-[#ad7f53] px-7 text-[13px] font-medium uppercase tracking-[0.08em] !text-white transition-colors hover:bg-[#986d45]"
                      >
                        Read More <span aria-hidden="true">↗</span>
                      </Link>
                    </div>

                    <Link
                      href={`/workshops/${slug}`}
                      className="absolute inset-0 z-10 flex translate-y-4 flex-col items-center justify-center bg-[#ad7f53] px-8 text-center !text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    >
                      <span className="mb-6 text-[27px] font-normal leading-tight sm:text-[30px]">
                        {workshop.title || "Untitled Workshop"}
                      </span>
                      <span className="mb-7 max-w-[250px] text-[15px] leading-[1.45] !text-white/90">
                        {description}
                      </span>
                      <span className="inline-flex h-12 items-center justify-center gap-3 bg-[#f8f3ef] px-8 text-[13px] font-medium uppercase tracking-[0.08em] text-[#5e5147]">
                        View Details <span aria-hidden="true">↗</span>
                      </span>
                    </Link>
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
