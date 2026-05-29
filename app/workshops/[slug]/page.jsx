import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkshopCountdown from "@/components/WorkshopCountdown";
import { fetchWorkshopById } from "@/lib/services/workshopService";

const MANTRA_ITEMS = [
  "Sacred Focus",
  "Ritual Alignment",
  "Intuitive Sight",
  "Energy Reset",
  "Mystic Clarity",
  "Cosmic Flow",
  "Inner Vision",
  "Light Activation",
];

function buildDateTime(startDate, startTime, timezone) {
  if (!startDate || !startTime) {
    return null;
  }
  const cleanTime = startTime.length === 5 ? `${startTime}:00` : startTime;
  const tz = (timezone || "").toLowerCase();
  const offset =
    tz.includes("kolkata") || tz.includes("ist") ? "+05:30" : "Z";
  return `${startDate}T${cleanTime}${offset}`;
}

function formatPrice(price, currency) {
  if (!price) {
    return "Price on request";
  }
  return `${currency || "INR"} ${price}`;
}

function CheckList({ items = [], fallback }) {
  const list = items.length ? items : [fallback];
  return (
    <div className="grid gap-3">
      {list.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 border border-[#ad7f53] px-4 py-3 text-[15px] leading-[1.45] text-[#ad7f53]"
        >
          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#ad7f53] text-[10px]">
            ✓
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default async function WorkshopLandingPage({ params }) {
  const resolvedParams = await params;
  const workshop = await fetchWorkshopById(resolvedParams.slug);

  if (!workshop || !workshop.active) {
    return (
      <>
        <section
          className="min-h-[60vh] w-full flex items-center justify-center text-center text-[#6b625a]"
          style={{ background: "linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)" }}
        >
          <div className="max-w-[540px] space-y-4 px-6">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Workshops
            </p>
            <h1 className="text-[28px] sm:text-[36px] font-semibold tracking-[0.08em]">
              No workshops available
            </h1>
            <p className="text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
              This offering is currently offline. Please check back soon for the next
              sacred learning experience.
            </p>
          </div>
        </section>

        <section className="w-full bg-[#f6f2ee]">
          <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-6">
            <div className="rounded-[20px] border border-[#e7dfd6] bg-white/80 px-6 py-8 shadow-[0_12px_26px_rgba(0,0,0,0.08)]">
              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#9a938c]">
                  Transmission
                </p>
                <h2 className="mt-4 text-[28px] sm:text-[40px] font-semibold tracking-[0.12em] text-[#5f5750]">
                  A Ritual Frequency You Can Feel
                </h2>
                <p className="mx-auto mt-4 max-w-[760px] text-[14px] sm:text-[17px] leading-[1.8] text-[#7a736c]">
                  This is not a lecture. It is an energetic immersion that opens the subtle body,
                  clears distortion, and anchors your intuition in one decisive arc.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[#9a938c]">
                {["Live transmission", "Guided ritual", "Energy reset", "Sacred practice"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e7dfd6] bg-white px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const startDateTime = buildDateTime(
    workshop.startDate,
    workshop.startTime,
    workshop.timezone
  );

  const ctaLabel = workshop.ctaLabel?.trim() || "Reserve Your Seat";
  const ctaLink = workshop.ctaLink || "/contact";

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-[#f8f3ef] text-[#ad7f53]">
      <section className="hero-section relative w-full overflow-hidden bg-[#f8f3ef]">
        <img
          src="/assets/images/bgFlower.png"
          alt=""
          className="pointer-events-none absolute -right-20 top-[120px] w-[420px] opacity-10"
        />
        <img
          src="/assets/images/bgFlower.png"
          alt=""
          className="pointer-events-none absolute -left-28 bottom-[-70px] w-[340px] opacity-10"
        />
        <div className="hero-main relative mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="space-y-7">
              <div className="inline-flex items-center gap-3 border border-[#ad7f53] bg-[#f8f3ef] px-5 py-2 text-[12px] uppercase tracking-[0.32em] text-[#ad7f53]">
                <span>{workshop.offerBadge || "Live Workshop"}</span>
                <span className="h-1 w-1 rounded-full bg-[#ad7f53]" />
                <span>{workshop.startDate || "Dates to be announced"}</span>
              </div>
              <h1 className="max-w-[620px] font-serif text-[48px] font-normal leading-[0.98] text-[#ad7f53] sm:text-[68px] lg:text-[84px]">
                {workshop.title}
              </h1>
              {workshop.subtitle ? (
                <p className="text-[13px] uppercase tracking-[0.36em] text-[#ad7f53]">
                  {workshop.subtitle}
                </p>
              ) : null}
              <p className="max-w-[610px] preserve-format text-[20px] leading-[1.35] text-[#ad7f53]">
                {workshop.teaser ||
                  "A sacred, time-bound immersion designed to elevate your spiritual practice."}
              </p>
              <div className="border border-[#ad7f53] bg-[#f8f3ef] px-6 py-6">
                <p className="text-[13px] uppercase tracking-[0.34em] text-[#ad7f53]">
                  Countdown
                </p>
                <div className="mt-5">
                  {startDateTime ? (
                    <WorkshopCountdown targetDateTime={startDateTime} />
                  ) : (
                    <div className="text-sm uppercase tracking-[0.2em] text-[#ad7f53]">
                      Schedule TBA
                    </div>
                  )}
                </div>
                <div className="mt-5 text-[13px] uppercase tracking-[0.28em] text-[#ad7f53]">
                  The portal closes at start time
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={ctaLink}
                  className="min-w-[220px] bg-[#ad7f53] px-8 py-4 text-center text-[14px] font-semibold uppercase tracking-[0.18em] !text-white"
                >
                  {ctaLabel}
                </Link>
                <Link
                  href="/consultations"
                  className="min-w-[190px] border border-[#ad7f53] bg-transparent px-8 py-4 text-center text-[14px] font-semibold uppercase tracking-[0.18em] !text-[#ad7f53]"
                >
                  View Consultations
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-[13px] uppercase tracking-[0.24em] text-[#ad7f53]">
                <span className="border border-[#ad7f53] px-4 py-2">
                  {workshop.seats ? `${workshop.seats} seats` : "Limited seats"}
                </span>
                <span className="border border-[#ad7f53] px-4 py-2">
                  {workshop.location || "Online"}
                </span>
                <span className="border border-[#ad7f53] px-4 py-2">
                  {workshop.durationMinutes
                    ? `${workshop.durationMinutes} mins`
                    : "Immersive"}
                </span>
              </div>
            </Reveal>

            <Reveal
              delay={0.2}
              className="relative min-h-[320px] overflow-hidden border border-[#ad7f53] bg-[#f8f3ef] sm:min-h-[460px] lg:min-h-[560px]"
            >
              <img
                src={
                  workshop.heroImage || "/assets/images/hero image faith healers.png"
                }
                alt={workshop.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8f3ef] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-[1320px] border border-[#ad7f53] px-6 py-12 text-center sm:px-10">
          <p className="text-[13px] uppercase tracking-[0.42em] text-[#ad7f53]">
            Mantra Field
          </p>
          <h2 className="mx-auto mt-6 max-w-[980px] text-[42px] font-normal leading-[1.05] text-[#ad7f53] sm:text-[58px]">
            Let the rhythm guide your focus
          </h2>
          <p className="mx-auto mt-8 max-w-[760px] text-[18px] leading-[1.5] text-[#ad7f53]">
            This page is designed as a gentle trance: layered, repeating, and intentional.
            Stay with it for a moment and feel the shift.
          </p>
          <div className="mt-10 space-y-5 border-t border-[#ad7f53] pt-8">
            <MantraMarquee direction="left" />
            <MantraMarquee direction="right" />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8f3ef] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <h2 className="text-[42px] font-normal leading-tight text-[#ad7f53] sm:text-[56px]">
              Offer Window Closes Soon
            </h2>
            <p className="preserve-format mt-7 max-w-[760px] text-[18px] leading-[1.45] text-[#ad7f53]">
              {workshop.offerDescription ||
                workshop.description ||
                "Step into a structured, high-frequency learning container that blends ritual, practice, and guidance."}
            </p>
            <div className="mt-8">
              {startDateTime ? (
                <WorkshopCountdown targetDateTime={startDateTime} />
              ) : (
                <div className="text-sm uppercase tracking-[0.2em] text-[#ad7f53]">
                  Schedule TBA
                </div>
              )}
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                "Live energy alignment",
                "Guided ritual flow",
                "Post-session integration",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[#ad7f53] px-5 py-5 text-center text-[13px] uppercase tracking-[0.28em] text-[#ad7f53]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="bg-[#6f675e] p-8 text-white sm:p-10">
            <p className="text-[13px] uppercase tracking-[0.34em] text-white/80">
              {workshop.offerTitle || "Sacred Offer"}
            </p>
            <div className="mt-8 text-[42px] font-semibold leading-none">
              {formatPrice(workshop.price, workshop.currency)}
            </div>
            <div className="mt-7 text-[13px] uppercase tracking-[0.3em] text-white/80">
              {workshop.seats ? `${workshop.seats} seats only` : "Limited seats"}
            </div>
            <p className="preserve-format mt-6 text-[18px] leading-[1.45] text-white/85">
              {workshop.offerDescription ||
                "Early confirmation includes preparatory materials and rituals to align your energy."}
            </p>
            <Link
              href={ctaLink}
              className="mt-8 inline-flex min-w-[220px] justify-center bg-[#f8f3ef] px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.22em] !text-[#6f675e]"
            >
              {ctaLabel}
            </Link>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1320px] gap-4 sm:grid-cols-3">
          {["Open the channel", "Activate the ritual", "Integrate the shift"].map((item, index) => (
            <Reveal
              key={item}
              delay={0.1 * index}
              className="border border-[#ad7f53] px-6 py-7 text-center"
            >
              <div className="text-[13px] uppercase tracking-[0.32em] text-[#ad7f53]">
                Step {index + 1}
              </div>
              <div className="mt-5 text-[26px] font-normal text-[#ad7f53]">
                {item}
              </div>
              <p className="mt-5 text-[15px] leading-[1.45] text-[#ad7f53]">
                {index === 0
                  ? "We align breath, intention, and focus to clear the field."
                  : index === 1
                  ? "You receive the core practice that activates your inner sight."
                  : "We lock in the experience with integration and a ritual anchor."}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#f8f3ef] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="flex items-center gap-2 text-[16px] text-[#ad7f53]">
              <span className="text-[18px] leading-none">✽</span>
              Experience
            </p>
            <h2 className="mt-4 text-[42px] font-normal leading-tight text-[#ad7f53] sm:text-[56px]">
              What You Will Experience
            </h2>
            <p className="mt-6 text-[18px] leading-[1.45] text-[#ad7f53]">
              A guided container that blends occult science with grounded healing rituals.
            </p>
            <div className="mt-8">
              <CheckList
                items={workshop.highlights ?? []}
                fallback="Hands-on rituals, deep energetic resets, and practitioner guidance."
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="border border-[#ad7f53] p-7 sm:p-9">
            <h3 className="text-[32px] font-normal text-[#ad7f53]">
              Workshop Details
            </h3>
            <dl className="mt-8 grid gap-4 text-[16px] text-[#ad7f53]">
              {[
                ["Date", workshop.startDate || "To be announced"],
                ["Time", `${workshop.startTime || "To be announced"} ${workshop.timezone || ""}`],
                [
                  "Duration",
                  workshop.durationMinutes
                    ? `${workshop.durationMinutes} minutes`
                    : "Flexible",
                ],
                ["Location", workshop.location || "Online via Zoom"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 border-b border-[#ad7f53] pb-4">
                  <dt className="uppercase tracking-[0.22em]">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1320px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Breath", "Intention", "Vision", "Alignment"].map((item) => (
            <div
              key={item}
              className="border border-[#ad7f53] px-5 py-7 text-center"
            >
              <div className="text-[13px] uppercase tracking-[0.32em] text-[#ad7f53]">
                Pillar
              </div>
              <div className="mt-5 text-[28px] font-normal text-[#ad7f53]">
                {item}
              </div>
              <p className="mt-4 text-[15px] leading-[1.45] text-[#ad7f53]">
                {item === "Breath"
                  ? "We slow the body and open the channel."
                  : item === "Intention"
                  ? "We set the signal that guides the ritual."
                  : item === "Vision"
                  ? "We open intuitive sight and inner knowing."
                  : "We lock in a stable energetic baseline."}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-[1320px] gap-8 border border-[#ad7f53] px-6 py-9 sm:px-9 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[13px] uppercase tracking-[0.36em] text-[#ad7f53]">
              Energy Promise
            </p>
            <h3 className="mt-4 text-[36px] font-normal leading-tight text-[#ad7f53]">
              Leave with a ritual you can feel in your body
            </h3>
            <p className="mt-6 text-[17px] leading-[1.45] text-[#ad7f53]">
              You will not just learn. You will shift. The practice stays with you, usable
              whenever you need clarity, grounding, or inner guidance.
            </p>
          </div>
          <div className="bg-[#ad7f53] px-6 py-7 text-center text-white">
            <div className="text-[13px] uppercase tracking-[0.3em] text-white/80">
              Your Takeaway
            </div>
            <div className="mt-5 text-[28px] font-normal">
              A personal ritual map
            </div>
            <p className="mt-4 text-[15px] leading-[1.45] text-white/85">
              Custom prompts, timing guidance, and a post-session practice flow.
            </p>
            <div className="mt-6 text-[12px] uppercase tracking-[0.24em] text-white/75">
              Delivered after the workshop
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8f3ef] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <h2 className="text-[42px] font-normal leading-tight text-[#ad7f53] sm:text-[56px]">
              Workshop Flow
            </h2>
            <div className="mt-8">
              <CheckList
                items={workshop.agenda ?? []}
                fallback="Opening ritual, guided teaching, live practice, and closing alignment."
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="border border-[#ad7f53] p-7 sm:p-9">
            <h3 className="text-[32px] font-normal text-[#ad7f53]">
              Includes
            </h3>
            <div className="mt-8">
              <CheckList
                items={workshop.includes ?? []}
                fallback="Live session, ritual guide, and integration notes."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-[#f8f3ef] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal className="border border-[#ad7f53] p-7 sm:p-9">
            <p className="flex items-center gap-2 text-[16px] text-[#ad7f53]">
              <span className="text-[18px] leading-none">✽</span>
              Your Guide
            </p>
            <h2 className="mt-4 text-[42px] font-normal leading-tight text-[#ad7f53] sm:text-[56px]">
              {workshop.hostName || "Geeta Singh"}
            </h2>
            <div className="mt-4 text-[13px] uppercase tracking-[0.28em] text-[#ad7f53]">
              {workshop.hostTitle || "Occult Science Practitioner"}
            </div>
            <p className="preserve-format mt-7 text-[17px] leading-[1.45] text-[#ad7f53]">
              {workshop.hostBio ||
                "Guiding seekers through astrology, ritual work, and deep energetic alignment."}
            </p>
            <div className="mt-8">
              <CheckList
                items={workshop.whoItsFor ?? []}
                fallback="For seekers ready to deepen their intuition and practice."
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="min-h-[320px] overflow-hidden border border-[#ad7f53]">
            <img
              src={workshop.hostImage || "/assets/images/lady.png"}
              alt={workshop.hostName || "Workshop host"}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-[#ad7f53] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <p className="mb-4 flex items-center gap-2 text-[18px]">
            <span className="text-[20px] leading-none">✽</span>
            Reserve your space
          </p>
          <h2 className="text-[48px] font-normal leading-[0.98] sm:text-[72px]">
            Ready to step in?
          </h2>
          <p className="mt-8 max-w-[720px] text-[18px] leading-[1.45]">
            Seats are intentionally limited to hold a focused energy container.
            Reserve your space and receive the preparation ritual.
          </p>
          <Link
            href={ctaLink}
            className="mt-9 inline-flex min-w-[240px] justify-center bg-[#f8f3ef] px-8 py-5 text-[14px] uppercase tracking-[0.2em] !text-[#ad7f53]"
          >
            {ctaLabel} ↗
          </Link>
          <p className="mt-6 text-[12px] uppercase tracking-[0.3em] text-white/80">
            You will receive prep rituals within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}

function MantraMarquee({ direction = "left" }) {
  return (
    <div className="marquee">
      <div
        className={[
          "marquee-track",
          direction === "left" ? "marquee-left" : "marquee-right",
        ].join(" ")}
      >
        {[...MANTRA_ITEMS, ...MANTRA_ITEMS].map((item, idx) => (
          <span key={`${direction}-${idx}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
