"use client";

import { useMemo, useRef, useState } from "react";

const SEGMENTS = [
  { label: "Face reading", type: "win" },
  { label: "Numerology", type: "win" },
  { label: "Better luck next time", type: "loss" },
  { label: "Tarot reading", type: "win" },
  { label: "Reiki healing", type: "win" },
  { label: "Switch words", type: "win" },
  { label: "Crystal guidance", type: "win" },  
  { label: "Better luck next time", type: "loss" },
];

const SEGMENT_COLORS = ["#ffffff", "#F9F4E8", "#D0BFA9"];

function splitLabel(label) {
  const words = label.trim().split(/\s+/);
  if (words.length <= 2) {
    return [label, ""];
  }
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

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
    <section
      className="py-16 sm:py-20 text-[#6b625a]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F9F4E8 100%)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-6">
            <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
              Spin the wheel
            </p>
            <h2 className="text-[26px] sm:text-[36px] font-semibold tracking-[0.12em] text-[#6b625a]">
              Try your luck, claim your 5 minutes of free consultation
            </h2>
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#7a736c]">
              Spin once to unlock a surprise. Most spins are a gentle reminder to stay devoted,
              but some reveal a special gift.
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleSpin}
                disabled={spinning || hasSpun}
                className="rounded-[12px] bg-[#6b625a] px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold !text-white shadow-[0_10px_22px_rgba(0,0,0,0.16)] disabled:opacity-60"
              >
                {spinning
                  ? "Spinning..."
                  : hasSpun
                  ? "Spin used"
                  : leadStatus.state === "success"
                  ? "Spin the wheel"
                  : "Enter details to spin"}
              </button>
              <span className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                One spin per visit
              </span>
            </div>
            {leadStatus.state === "success" && (
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
                Details saved. You can spin now.
              </div>
            )}
            {result && (
              <div className="rounded-[16px] border border-[#e7dfd6] bg-[#fbf8f5] px-5 py-4 text-[14px] text-[#6b625a]">
                {result.type === "win" ? (
                  <span className="font-semibold">
                    You unlocked: {result.label}
                  </span>
                ) : (
                  <span>
                    Better luck next time. Stay close and try again.
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="h-0 w-0 border-x-[14px] border-x-transparent border-t-[22px] border-t-[#6b625a]" />
              </div>
              <div
                className="relative h-[280px] w-[280px] sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px] rounded-full border-[12px] border-[#F9F4E8] shadow-[0_24px_48px_rgba(0,0,0,0.18)]"
                style={{
                  background: wheelGradient,
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning ? "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
                }}
              >
                <div className="pointer-events-none absolute inset-2 rounded-full border-[3px] border-[#c79a62] shadow-[0_0_0_6px_rgba(208,191,169,0.35)]" />
                <div
                  className="pointer-events-none absolute inset-[28px] rounded-full border border-[#d9c8b0]"
                  style={{
                    background:
                      "repeating-conic-gradient(from 0deg, rgba(208,191,169,0.28) 0deg 3deg, rgba(255,255,255,0) 3deg 18deg)",
                  }}
                />
                <div className="pointer-events-none absolute inset-[70px] rounded-full border border-[#e4d6c5] bg-[radial-gradient(circle,_rgba(255,255,255,0.9),_rgba(248,244,232,0.35))]" />
                <div className="pointer-events-none absolute inset-[86px] rounded-full border border-[#e4d6c5]" />
                <div className="pointer-events-none absolute inset-[100px] rounded-full border border-[#eadfce]" />
                <div className="pointer-events-none absolute inset-[120px] rounded-full border border-[#eadfce] bg-[conic-gradient(from_0deg,_rgba(199,154,98,0.12)_0deg,_rgba(255,255,255,0)_30deg,_rgba(199,154,98,0.12)_60deg,_rgba(255,255,255,0)_90deg)]" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4d6c5]" />
                {SEGMENTS.map((segment, index) => {
                  const centerAngle = index * segmentAngle + segmentAngle / 2;
                  return (
                    <div
                      key={`${segment.label}-${index}`}
                      className="absolute left-1/2 top-1/2 w-[80px] sm:w-[140px] lg:w-[160px] -translate-x-1/2 -translate-y-1/2 [--label-radius:84px] sm:[--label-radius:140px] lg:[--label-radius:165px]"
                      style={{
                        transform: `rotate(${centerAngle}deg) translateY(calc(var(--label-radius) * -1))`,
                        transformOrigin: "center",
                      }}
                    >
                      <div
                        className="text-[6px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.04em] text-[#4f463e] text-center leading-[1.1] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
                        style={{
                          transform: `rotate(${-centerAngle}deg)`,
                        }}
                      >
                        <span className="inline-block max-w-[56px] sm:max-w-[110px] lg:max-w-[120px] break-words rounded-[6px] bg-white/70 px-1.5 py-0.5">
                          {splitLabel(segment.label)[0]}
                          <span className="block">{splitLabel(segment.label)[1]}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((badge) => {
                    const badgeAngle = badge * 45;
                    return (
                      <div
                        key={`badge-${badge}`}
                        className="absolute left-1/2 top-1/2 h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-[#c79a62] bg-white shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
                        style={{
                          transform: `rotate(${badgeAngle}deg) translateY(-120%) rotate(${-badgeAngle}deg)`,
                        }}
                      />
                    );
                  })}
                </div>
                <div className="absolute left-1/2 top-1/2 h-14 w-14 sm:h-18 sm:w-18 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#c79a62] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] flex items-center justify-center">
                  <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#6b625a]" />
                </div>
              </div>
              <p className="mt-4 text-center text-[11px] uppercase tracking-[0.28em] text-[#9a938c]">
                Tap spin and feel the shift
              </p>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[520px] rounded-[24px] border border-[#e7dfd6] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] uppercase tracking-[0.32em] text-[#9a938c]">
                  Spin access
                </p>
                <h3 className="mt-2 text-[22px] font-semibold text-[#6b625a]">
                  Enter your details to spin
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-full border border-[#e7dfd6] px-3 py-1 text-[12px] uppercase tracking-[0.2em] text-[#6b625a]"
              >
                Close
              </button>
            </div>
            <form onSubmit={handleLeadSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={leadForm.name}
                  onChange={handleLeadChange}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-full border border-[#e7dfd6] px-4 py-3 text-[14px]"
                />
                <input
                  name="email"
                  type="email"
                  value={leadForm.email}
                  onChange={handleLeadChange}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-full border border-[#e7dfd6] px-4 py-3 text-[14px]"
                />
                <input
                  name="phone"
                  value={leadForm.phone}
                  onChange={handleLeadChange}
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-full border border-[#e7dfd6] px-4 py-3 text-[14px]"
                />
                <input
                  name="interests"
                  value={leadForm.interests}
                  onChange={handleLeadChange}
                  placeholder="Interests (healing, courses, etc.)"
                  required
                  className="w-full rounded-full border border-[#e7dfd6] px-4 py-3 text-[14px]"
                />
              </div>
              <textarea
                name="message"
                value={leadForm.message}
                onChange={handleLeadChange}
                placeholder="Anything else you'd like to share?"
                rows="3"
                className="w-full rounded-[18px] border border-[#e7dfd6] px-4 py-3 text-[14px]"
              />
              {leadStatus.state === "error" && (
                <p className="text-[13px] text-red-600">{leadStatus.message}</p>
              )}
              <button
                type="submit"
                disabled={leadStatus.state === "loading"}
                className="w-full rounded-full bg-[#6b625a] px-6 py-3 text-[12px] uppercase tracking-[0.2em] font-semibold !text-white disabled:opacity-60"
              >
                {leadStatus.state === "loading" ? "Saving..." : "Save & spin"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
