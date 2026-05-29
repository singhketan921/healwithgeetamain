"use client";

import { useMemo, useRef, useState } from "react";

const SEGMENTS = [
  { label: "Face reading", displayLabel: "Face", type: "win" },
  { label: "Numerology", displayLabel: "Numero", type: "win" },
  { label: "Better luck next time", displayLabel: "Luck", type: "loss" },
  { label: "Tarot reading", displayLabel: "Tarot", type: "win" },
  { label: "Reiki healing", displayLabel: "Reiki", type: "win" },
  { label: "Switch words", displayLabel: "Switch", type: "win" },
  { label: "Crystal guidance", displayLabel: "Crystal", type: "win" },
  { label: "Better luck next time", displayLabel: "Luck", type: "loss" },
];

const SEGMENT_COLORS = ["#f1bd79", "#fffaf5"];
const LABEL_POSITIONS = [
  "left-[61%] top-[20%]",
  "left-[76%] top-[39%]",
  "left-[74%] top-[64%]",
  "left-[58%] top-[80%]",
  "left-[38%] top-[80%]",
  "left-[22%] top-[64%]",
  "left-[20%] top-[39%]",
  "left-[38%] top-[20%]",
];
const spinFormInputClass =
  "w-full border-0 border-b border-[#ad7f53] bg-transparent px-0 py-3 text-[16px] leading-none text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";
const spinFormBoxInputClass =
  "w-full border border-[#ad7f53] bg-transparent px-4 py-3 text-[16px] leading-none text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";
const spinFormTextareaClass =
  "w-full min-h-[112px] resize-none border-0 border-b border-[#ad7f53] bg-transparent px-0 py-3 text-[16px] text-[#ad7f53] placeholder:text-[#ad7f53] focus:border-[#986d45] focus:outline-none";
const spinFormSubmitClass =
  "inline-flex h-[54px] w-full items-center justify-center gap-3 bg-[#dccbb6] px-6 text-[14px] font-medium uppercase tracking-[0.14em] text-[#ad7f53] transition-colors hover:bg-[#d0b894] disabled:cursor-not-allowed disabled:opacity-60";

function pickSegmentIndex(winProbability) {
  const winSegments = SEGMENTS.map((segment, index) => ({ segment, index })).filter(
    (item) => item.segment.type === "win"
  );
  const lossSegments = SEGMENTS.map((segment, index) => ({ segment, index })).filter(
    (item) => item.segment.type === "loss"
  );

  const winChance = Math.min(Math.max(winProbability ?? 0.1, 0), 1);
  const roll = Math.random();
  if (roll < winChance) {
    const winner = winSegments[Math.floor(Math.random() * winSegments.length)];
    return winner.index;
  }

  const loser = lossSegments[Math.floor(Math.random() * lossSegments.length)];
  return loser.index;
}

function getRotationForIndex(index, segmentAngle) {
  return 360 - (index * segmentAngle + segmentAngle / 2);
}

export default function SpinWheel({ winProbability = 0.1 }) {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [leadStatus, setLeadStatus] = useState({ state: "idle", message: "" });
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    message: "",
  });
  const targetIndexRef = useRef(null);

  const segmentAngle = 360 / SEGMENTS.length;
  const wheelGradient = useMemo(() => {
    const colors = SEGMENTS.map((_, index) => SEGMENT_COLORS[index % SEGMENT_COLORS.length]);
    return `conic-gradient(${colors
      .map((color, index) => `${color} ${index * segmentAngle}deg ${(index + 1) * segmentAngle}deg`)
      .join(", ")})`;
  }, [segmentAngle]);

  const handleSpin = () => {
    if (spinning || hasSpun) {
      return;
    }
    if (leadStatus.state !== "success") {
      setShowForm(true);
      return;
    }
    const targetIndex = pickSegmentIndex(winProbability);
    targetIndexRef.current = targetIndex;
    setResult(null);
    setSpinning(true);

    const base = rotation % 360;
    const targetRotation = base + 360 * 4 + getRotationForIndex(targetIndex, segmentAngle);
    setRotation(targetRotation);

    setTimeout(() => {
      setSpinning(false);
      setHasSpun(true);
      const targetSegment = SEGMENTS[targetIndexRef.current];
      setResult(targetSegment);
    }, 4200);
  };

  const handleLeadChange = (e) => {
    const { name, value } = e.target;
    setLeadForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setLeadStatus({ state: "loading", message: "" });
    try {
      const response = await fetch("/api/spin-wheel-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadForm),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error?.errors
            ? Object.values(error.errors).flat().join(", ")
            : "Unable to save your details."
        );
      }

      setLeadStatus({ state: "success", message: "Details saved. Spin now." });
      setShowForm(false);
    } catch (error) {
      setLeadStatus({
        state: "error",
        message: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <section className="bg-[#f8f3ef] px-5 py-16 text-[#ad7f53] sm:py-20">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center">
        <div className="relative w-full max-w-[540px] pt-18 sm:pt-24 lg:max-w-[680px] xl:max-w-[740px]">
          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
            <div
              className="h-[48px] w-[52px] rounded-t-[8px] bg-[#ad7f53] drop-shadow-[0_9px_9px_rgba(76,71,64,0.26)] sm:h-[66px] sm:w-[70px]"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            />
          </div>
          <div className="relative mx-auto aspect-square w-full rounded-full border-[14px] border-[#fbdbb8] bg-[#fbdbb8] p-2 sm:border-[18px] sm:p-3 lg:border-[22px]">
            <div className="pointer-events-none absolute inset-[2.6%] rounded-full border-[3px] border-[#ad7f53]" />
            <div
              className="relative h-full w-full rounded-full border border-[#eac392] bg-[#f1bd79]"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
              }}
            >
              <div
                className="absolute inset-[4.5%] rounded-full"
                style={{ background: wheelGradient }}
              />
              <div
                className="absolute inset-[4.5%] rounded-full opacity-70"
                style={{
                  background:
                    "repeating-conic-gradient(from 0deg, rgba(173,127,83,0.34) 0deg 0.9deg, transparent 0.9deg 45deg)",
                }}
              />
              <div className="absolute inset-[4.5%] rounded-full border border-[#d7a772]" />
              <div
                className="absolute inset-[27%] rounded-full opacity-55"
                style={{
                  background:
                    "repeating-radial-gradient(circle, transparent 0 18px, rgba(173,127,83,0.20) 19px 21px)",
                }}
              />
              <div className="absolute inset-[34%] rounded-full border border-[#caa17a] bg-[#f7efe6]" />
              <div className="absolute inset-[40.5%] rounded-full bg-[conic-gradient(from_205deg,_#f29a20_0deg_245deg,_#f1c28b_245deg_360deg)]" />
              <div className="absolute inset-[43%] rounded-full bg-[radial-gradient(circle,_#f7efe6_0%,_#f4e4d0_100%)]" />

              {SEGMENTS.map((segment, index) => (
                <div
                  key={`${segment.label}-${index}`}
                  className={`absolute w-[70px] -translate-x-1/2 -translate-y-1/2 text-center font-sans text-[11px] font-black uppercase italic leading-none tracking-[0.01em] text-[#9f7650] sm:w-[104px] sm:text-[19px] lg:w-[124px] lg:text-[25px] ${LABEL_POSITIONS[index]}`}
                >
                  {segment.displayLabel}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleSpin}
              disabled={spinning || hasSpun}
              className="absolute left-1/2 top-1/2 z-10 flex h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle,_#f7efe6_0%,_#f1c28b_48%,_#f29a20_100%)] font-sans text-[34px] font-black uppercase leading-none !text-white shadow-[0_14px_26px_rgba(173,127,83,0.24)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-80 sm:text-[58px] lg:text-[70px]"
              aria-label={
                spinning
                  ? "Spinning"
                  : hasSpun
                  ? "Spin used"
                  : leadStatus.state === "success"
                  ? "Spin the wheel"
                  : "Enter details to spin"
              }
            >
              {spinning ? "..." : hasSpun ? "OK" : "GO"}
            </button>
          </div>

          {leadStatus.state === "success" && !result ? (
            <p className="mt-8 text-center text-[12px] uppercase tracking-[0.28em] text-[#ad7f53]">
              Details saved. You can spin now.
            </p>
          ) : null}
          {result ? (
            <div className="mx-auto mt-8 max-w-[520px] border border-[#ad7f53] bg-[#f8f3ef] px-6 py-4 text-center text-[15px] text-[#ad7f53]">
              {result.type === "win" ? (
                <span className="font-semibold">You unlocked: {result.label}</span>
              ) : (
                <span>Better luck next time. Stay close and try again.</span>
              )}
            </div>
          ) : null}
        </div>
      </div>
      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black/45 px-4 py-6"
          style={{ zIndex: 10000 }}
        >
          <div className="max-h-[calc(100dvh-48px)] w-full max-w-[680px] overflow-y-auto bg-white px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] sm:px-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center gap-2 text-[15px] text-[#ad7f53]">
                  <span className="text-[18px] leading-none">✽</span>
                  Spin access
                </p>
                <h3 className="text-[34px] font-normal leading-none text-[#ad7f53] sm:text-[44px]">
                  Enter Your
                  <span className="block font-serif text-[40px] italic sm:text-[50px]">
                    Details
                  </span>
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="border border-[#ad7f53] px-4 py-2 text-[12px] uppercase tracking-[0.12em] text-[#ad7f53]"
              >
                Close
              </button>
            </div>
            <form onSubmit={handleLeadSubmit} className="mt-6 space-y-5">
              <input
                name="name"
                value={leadForm.name}
                onChange={handleLeadChange}
                placeholder="Full Name"
                required
                className={spinFormInputClass}
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  value={leadForm.email}
                  onChange={handleLeadChange}
                  placeholder="Email Address"
                  required
                  className={spinFormBoxInputClass}
                />
                <input
                  name="phone"
                  value={leadForm.phone}
                  onChange={handleLeadChange}
                  placeholder="Phone Number"
                  required
                  className={spinFormInputClass}
                />
              </div>
              <input
                name="interests"
                value={leadForm.interests}
                onChange={handleLeadChange}
                placeholder="Interests"
                required
                className={spinFormInputClass}
              />
              <textarea
                name="message"
                value={leadForm.message}
                onChange={handleLeadChange}
                placeholder="Message"
                rows="3"
                className={spinFormTextareaClass}
              />
              {leadStatus.state === "error" && (
                <p className="text-[13px] text-red-600">{leadStatus.message}</p>
              )}
              <button
                type="submit"
                disabled={leadStatus.state === "loading"}
                className={spinFormSubmitClass}
              >
                {leadStatus.state === "loading" ? "Saving..." : "Save & Spin ↗"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
