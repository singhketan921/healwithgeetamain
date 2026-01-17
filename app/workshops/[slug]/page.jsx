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
    <div className="flex flex-col items-center overflow-x-hidden text-[#6b625a]">
      <section className="w-full hero-section relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top, rgba(214,202,190,0.65) 0%, rgba(255,255,255,0.1) 55%), linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)",
          }}
        />
        <div className="absolute -right-20 top-12 h-64 w-64 rounded-full bg-[#e9dfd5] blur-[1px]" />
        <div className="absolute -left-10 bottom-10 h-48 w-48 rounded-full border border-[#e7dfd6]" />
        <div className="hero-main mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16 relative">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#e7dfd6] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#9a938c]">
                <span>{workshop.offerBadge || "Live Workshop"}</span>
                <span className="h-1 w-1 rounded-full bg-[#cbbdaf]" />
                <span>{workshop.startDate || "Dates to be announced"}</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[56px] font-semibold leading-[1.08] tracking-[0.06em]">
                {workshop.title}
              </h1>
              {workshop.subtitle ? (
                <p className="text-[12px] uppercase tracking-[0.3em] text-[#9a938c]">
                  {workshop.subtitle}
                </p>
              ) : null}
              <p className="text-[15px] sm:text-[18px] leading-[1.75] text-[#7a736c] max-w-[600px]">
                {workshop.teaser ||
                  "A sacred, time-bound immersion designed to elevate your spiritual practice."}
              </p>
              <div className="rounded-[18px] border border-[#e7dfd6] bg-white/85 px-5 py-5 shadow-[0_14px_28px_rgba(0,0,0,0.1)]">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#9a938c]">
                  Countdown
                </p>
                <div className="mt-4">
                  {startDateTime ? (
                    <WorkshopCountdown targetDateTime={startDateTime} />
                  ) : (
                    <div className="text-sm text-[#9a938c] uppercase tracking-[0.2em]">
                      Schedule TBA
                    </div>
                  )}
                </div>
                <div className="mt-3 text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                  The portal closes at start time
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={ctaLink}
                  className="min-w-[200px] rounded-[12px] bg-[#6b625a] px-7 py-3 text-[13px] sm:text-[15px] font-semibold uppercase tracking-[0.18em] !text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] text-center"
                >
                  {ctaLabel}
                </Link>
                <Link
                  href="/consultations"
                  className="min-w-[160px] rounded-[12px] border border-[#8f857c] bg-transparent px-6 py-3 text-[12px] sm:text-[14px] font-semibold uppercase tracking-[0.18em] !text-[#6b625a] text-center"
                >
                  View Consultations
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.22em] text-[#9a938c]">
                <span className="rounded-full border border-[#e7dfd6] px-3 py-1">
                  {workshop.seats ? `${workshop.seats} seats` : "Limited seats"}
                </span>
                <span className="rounded-full border border-[#e7dfd6] px-3 py-1">
                  {workshop.location || "Online"}
                </span>
                <span className="rounded-full border border-[#e7dfd6] px-3 py-1">
                  {workshop.durationMinutes
                    ? `${workshop.durationMinutes} mins`
                    : "Immersive"}
                </span>
              </div>
            </Reveal>

            <Reveal
              delay={0.2}
              className="relative overflow-hidden rounded-[20px] border border-[#e5ded6] bg-white shadow-[0_22px_44px_rgba(0,0,0,0.16)] min-h-[280px] sm:min-h-[380px]"
            >
              <div className="absolute inset-0 bg-[#e8dfd6] opacity-10" />
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

      <section
        className="w-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(223,213,202,0.6) 0%, rgba(255,255,255,0.7) 45%, rgba(246,242,238,1) 100%)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-6">
          <div className="rounded-[24px] border border-[#e7dfd6] bg-white/85 px-6 py-8 shadow-[0_16px_34px_rgba(0,0,0,0.08)]">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.42em] text-[#9a938c]">
                Mantra Field
              </p>
              <h2 className="mt-4 text-[26px] sm:text-[38px] font-semibold tracking-[0.12em] text-[#5f5750]">
                Let the rhythm guide your focus
              </h2>
              <p className="mx-auto mt-4 max-w-[760px] text-[14px] sm:text-[17px] leading-[1.8] text-[#7a736c]">
                This page is designed as a gentle trance: layered, repeating, and intentional.
                Stay with it for a moment and feel the shift.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <MantraMarquee direction="left" />
              <MantraMarquee direction="right" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F1ED 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="space-y-4">
              <h2 className="text-[24px] sm:text-[34px] font-semibold tracking-[0.1em] text-[#5f5750]">
                Offer Window Closes Soon
              </h2>
              <p className="text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
                {workshop.offerDescription ||
                  workshop.description ||
                  "Step into a structured, high-frequency learning container that blends ritual, practice, and guidance."}
              </p>
              <div className="mt-4">
                {startDateTime ? (
                  <WorkshopCountdown targetDateTime={startDateTime} />
                ) : (
                  <div className="text-sm text-[#9a938c] uppercase tracking-[0.2em]">
                    Schedule TBA
                  </div>
                )}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Live energy alignment",
                  "Guided ritual flow",
                  "Post-session integration",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[14px] border border-[#e7dfd6] bg-white/80 px-4 py-3 text-[12px] uppercase tracking-[0.22em] text-[#9a938c] text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[18px] border border-[#e7dfd6] bg-white/70 px-5 py-4 text-[13px] uppercase tracking-[0.28em] text-[#9a938c] text-center">
                Stay with the field for 3 minutes before you decide
              </div>
            </Reveal>
            <Reveal
              delay={0.2}
              className="rounded-[22px] border border-[#e5ded6] bg-[#6b625a] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.16)] text-white"
            >
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/80">
                {workshop.offerTitle || "Sacred Offer"}
              </p>
              <div className="mt-4 space-y-3">
                <div className="text-[30px] font-semibold">
                  {formatPrice(workshop.price, workshop.currency)}
                </div>
                <div className="text-[12px] uppercase tracking-[0.24em] text-white/70">
                  {workshop.seats ? `${workshop.seats} seats only` : "Limited seats"}
                </div>
                <p className="text-[14px] leading-[1.7] text-white/80">
                  {workshop.offerDescription ||
                    "Early confirmation includes preparatory materials and rituals to align your energy."}
                </p>
                <Link
                  href={ctaLink}
                  className="inline-flex min-w-[180px] justify-center rounded-[12px] bg-white px-6 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold !text-[#6b625a]"
                >
                  {ctaLabel}
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Open the channel", "Activate the ritual", "Integrate the shift"].map((item, index) => (
              <Reveal
                key={item}
                delay={0.1 * index}
                className="rounded-[18px] border border-[#e7dfd6] bg-white/90 px-5 py-6 text-center shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="text-[12px] uppercase tracking-[0.3em] text-[#9a938c]">
                  Step {index + 1}
                </div>
                <div className="mt-3 text-[18px] font-semibold text-[#6b625a]">
                  {item}
                </div>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#7a736c]">
                  {index === 0
                    ? "We align breath, intention, and focus to clear the field."
                    : index === 1
                    ? "You receive the core practice that activates your inner sight."
                    : "We lock in the experience with integration and a ritual anchor."}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ background: "linear-gradient(180deg, #F7F5F2 0%, #FFFFFF 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="space-y-4">
              <h2 className="text-[24px] sm:text-[34px] font-semibold tracking-[0.1em] text-[#5f5750]">
                What You Will Experience
              </h2>
              <p className="text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
                A guided container that blends occult science with grounded healing rituals.
              </p>
              <div className="grid gap-3">
                {(workshop.highlights ?? []).length > 0 ? (
                  workshop.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[16px] border border-[#e5ded6] bg-white/80 px-4 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                    >
                      <span className="text-[14px] text-[#7a736c]">{item}</span>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[16px] border border-[#e5ded6] bg-white/80 px-4 py-3 text-[14px] text-[#7a736c]">
                    Hands-on rituals, deep energetic resets, and practitioner guidance.
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal
              delay={0.2}
              className="rounded-[22px] border border-[#e5ded6] bg-white p-6 shadow-[0_14px_30px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-[18px] font-semibold text-[#6b625a]">
                Workshop Details
              </h3>
              <div className="mt-4 space-y-3 text-[14px] text-[#7a736c]">
                <div>
                  <span className="font-semibold text-[#6b625a]">Date:</span>{" "}
                  {workshop.startDate || "To be announced"}
                </div>
                <div>
                  <span className="font-semibold text-[#6b625a]">Time:</span>{" "}
                  {workshop.startTime || "To be announced"}{" "}
                  {workshop.timezone || ""}
                </div>
                <div>
                  <span className="font-semibold text-[#6b625a]">Duration:</span>{" "}
                  {workshop.durationMinutes
                    ? `${workshop.durationMinutes} minutes`
                    : "Flexible"}
                </div>
                <div>
                  <span className="font-semibold text-[#6b625a]">Location:</span>{" "}
                  {workshop.location || "Online via Zoom"}
                </div>
              </div>
              <div className="mt-6 rounded-[16px] bg-[#f7f4f0] px-4 py-3 text-[12px] uppercase tracking-[0.24em] text-[#9a938c]">
                Ad landing page only
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Breath", "Intention", "Vision", "Alignment"].map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-[#e7dfd6] bg-white/90 px-4 py-5 text-center shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Pillar
                </div>
                <div className="mt-3 text-[18px] font-semibold text-[#6b625a]">
                  {item}
                </div>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#7a736c]">
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
          <div className="mt-12 rounded-[24px] border border-[#e7dfd6] bg-[#fff9f3] px-6 py-8 shadow-[0_16px_34px_rgba(0,0,0,0.08)]">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#9a938c]">
                  Energy Promise
                </p>
                <h3 className="mt-3 text-[24px] sm:text-[30px] font-semibold tracking-[0.1em] text-[#5f5750]">
                  Leave with a ritual you can feel in your body
                </h3>
                <p className="mt-4 text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
                  You will not just learn. You will shift. The practice stays with you, usable
                  whenever you need clarity, grounding, or inner guidance.
                </p>
              </div>
              <div className="rounded-[18px] border border-[#e7dfd6] bg-white px-5 py-6 text-center">
                <div className="text-[12px] uppercase tracking-[0.3em] text-[#9a938c]">
                  Your Takeaway
                </div>
                <div className="mt-3 text-[20px] font-semibold text-[#6b625a]">
                  A personal ritual map
                </div>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#7a736c]">
                  Custom prompts, timing guidance, and a post-session practice flow.
                </p>
                <div className="mt-4 text-[12px] uppercase tracking-[0.24em] text-[#9a938c]">
                  Delivered after the workshop
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F4E8 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="space-y-4">
              <h2 className="text-[24px] sm:text-[34px] font-semibold tracking-[0.1em] text-[#5f5750]">
                Workshop Flow
              </h2>
              <div className="grid gap-3">
                {(workshop.agenda ?? []).length > 0 ? (
                  workshop.agenda.map((item, idx) => (
                    <div
                      key={`${item}-${idx}`}
                      className="rounded-[16px] border border-[#e5ded6] bg-white/80 px-4 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                    >
                      <span className="text-[14px] text-[#7a736c]">{item}</span>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[16px] border border-[#e5ded6] bg-white/80 px-4 py-3 text-[14px] text-[#7a736c]">
                    Opening ritual, guided teaching, live practice, and closing alignment.
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal
              delay={0.2}
              className="rounded-[22px] border border-[#e5ded6] bg-white p-6 shadow-[0_14px_30px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-[18px] font-semibold text-[#6b625a]">
                Includes
              </h3>
              <div className="mt-4 grid gap-3">
                {(workshop.includes ?? []).length > 0 ? (
                  workshop.includes.map((item) => (
                    <div
                      key={item}
                      className="rounded-[16px] border border-[#e5ded6] bg-white/80 px-4 py-3 text-[14px] text-[#7a736c]"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="rounded-[16px] border border-[#e5ded6] bg-white/80 px-4 py-3 text-[14px] text-[#7a736c]">
                    Live session, ritual guide, and integration notes.
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ background: "linear-gradient(180deg, #F9F4E8 0%, #FFFFFF 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <Reveal className="space-y-4">
              <h2 className="text-[24px] sm:text-[34px] font-semibold tracking-[0.1em] text-[#5f5750]">
                Your Guide
              </h2>
              <div className="text-[18px] font-semibold text-[#6b625a]">
                {workshop.hostName || "Geeta Singh"}
              </div>
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                {workshop.hostTitle || "Occult Science Practitioner"}
              </div>
              <p className="text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
                {workshop.hostBio ||
                  "Guiding seekers through astrology, ritual work, and deep energetic alignment."}
              </p>
              <div className="grid gap-3">
                {(workshop.whoItsFor ?? []).length > 0 ? (
                  workshop.whoItsFor.map((item) => (
                    <div
                      key={item}
                      className="rounded-[16px] border border-[#e5ded6] bg-white/80 px-4 py-3 text-[14px] text-[#7a736c]"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="rounded-[16px] border border-[#e5ded6] bg-white/80 px-4 py-3 text-[14px] text-[#7a736c]">
                    For seekers ready to deepen their intuition and practice.
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal
              delay={0.2}
              className="rounded-[20px] overflow-hidden border border-[#e5ded6] shadow-[0_18px_40px_rgba(0,0,0,0.12)] min-h-[260px]"
            >
              <img
                src={workshop.hostImage || "/assets/images/lady.png"}
                alt={workshop.hostName || "Workshop host"}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f4f0]">
        <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[24px] sm:text-[34px] font-semibold tracking-[0.1em] text-[#5f5750]">
              Ready to step in?
            </h2>
            <p className="max-w-[720px] text-[14px] sm:text-[16px] leading-[1.7] text-[#7a736c]">
              Seats are intentionally limited to hold a focused energy container.
              Reserve your space and receive the preparation ritual.
            </p>
            <Link
              href={ctaLink}
              className="min-w-[220px] rounded-[14px] bg-[#6b625a] px-8 py-3 text-[13px] uppercase tracking-[0.2em] !text-white shadow-[0_12px_26px_rgba(0,0,0,0.16)]"
            >
              {ctaLabel}
            </Link>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a938c]">
              You will receive prep rituals within 24 hours
            </p>
          </div>
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