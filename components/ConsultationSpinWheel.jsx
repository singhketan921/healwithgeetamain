"use client";

import { useMemo, useState } from "react";
import {
  PiArrowRight,
  PiDiamond,
  PiFlowerLotus,
  PiGift,
  PiHandsPraying,
  PiHeart,
  PiMoonStars,
  PiNumberCircleNine,
  PiSparkle,
  PiSun,
} from "react-icons/pi";

const outcomes = [
  { label: "Reiki Healing", type: "win", icon: PiSun, x: 50, y: 17, width: 15, lines: ["Reiki", "Healing"] },
  {
    label: "Face Reading Mini Reading",
    type: "win",
    icon: PiMoonStars,
    x: 78,
    y: 31,
    width: 15,
    lines: ["Face", "Reading", "Mini Reading"],
  },
  { label: "Numerology Insight", type: "win", icon: PiNumberCircleNine, x: 82, y: 56, width: 14, lines: ["Numerology", "Insight"] },
  { label: "Crystal Guidance", type: "win", icon: PiDiamond, x: 70, y: 79, width: 14, lines: ["Crystal", "Guidance"] },
  { label: "Surprise Gift", type: "win", icon: PiGift, x: 50, y: 84, width: 14, lines: ["Surprise", "Gift"] },
  {
    label: "Abundance Affirmation",
    type: "note",
    icon: PiFlowerLotus,
    x: 30,
    y: 79,
    width: 14,
    lines: ["Abundance", "Affirmation"],
  },
  { label: "Chakra Check-In", type: "note", icon: PiHandsPraying, x: 18, y: 56, width: 14, lines: ["Chakra", "Check-In"] },
  {
    label: "Better Luck Next Time",
    type: "note",
    icon: PiHeart,
    x: 22,
    y: 31,
    width: 15,
    lines: ["Better", "Luck", "Next Time"],
  },
];

function pickOutcome(winProbability) {
  const normalizedProbability =
    typeof winProbability === "number" && Number.isFinite(winProbability)
      ? Math.min(Math.max(winProbability, 0), 1)
      : 0.1;
  const pool = outcomes.filter((item) =>
    Math.random() <= normalizedProbability ? item.type === "win" : item.type !== "win"
  );
  return pool[Math.floor(Math.random() * pool.length)] || outcomes[0];
}

export default function ConsultationSpinWheel({ winProbability = 0.1 }) {
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const segmentStyle = useMemo(
    () => ({
      transform: `rotate(${rotation}deg)`,
    }),
    [rotation]
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      interests: formData.get("interests")?.toString().trim(),
      message: "Consultation page spin wheel lead",
    };

    setStatus("submitting");
    setError("");
    setResult(null);

    const response = await fetch("/api/spin-wheel-leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("idle");
      setError("Please check your details and try again.");
      return;
    }

    const outcome = pickOutcome(winProbability);
    const outcomeIndex = outcomes.findIndex((item) => item.label === outcome.label);
    const segmentAngle = 360 / outcomes.length;
    const targetAngle = 360 - (outcomeIndex * segmentAngle + segmentAngle / 2);
    const nextRotation = rotation + 1440 + targetAngle;

    setStatus("spinning");
    setRotation(nextRotation);

    window.setTimeout(() => {
      setResult(outcome);
      setStatus("complete");
    }, 1250);
  }

  const busy = status === "submitting" || status === "spinning";

  return (
    <section className="consultation-spin" aria-label="Consultation offer wheel">
      <div className="consultation-spin__copy">
        <p className="consultation-spin__eyebrow">
          <PiSparkle aria-hidden="true" />
          Consultation Offer
        </p>
        <h2>Spin for a Personal Session Benefit</h2>
        <p>
          Share your details, spin the wheel, and our team will follow up with the
          session benefit connected to your consultation enquiry.
        </p>
      </div>

      <div className="consultation-spin__wheel-wrap" aria-hidden="true">
        <span className="consultation-spin__pointer" />
        <div className="consultation-spin__wheel" style={segmentStyle}>
          {outcomes.map((outcome, index) => (
            <span
              key={outcome.label}
              style={{
                "--spin-label-x": `${outcome.x}%`,
                "--spin-label-y": `${outcome.y}%`,
                "--spin-label-width": `${outcome.width}%`,
              }}
            >
              <outcome.icon aria-hidden="true" />
              <b>
                {outcome.lines.map((line) => (
                  <em key={line}>{line}</em>
                ))}
              </b>
            </span>
          ))}
          <i>
            <img src="/assets/navicon.png" alt="" />
          </i>
        </div>
      </div>

      <form className="consultation-spin__form" onSubmit={handleSubmit}>
        <div className="consultation-spin__fields">
          <label>
            <span>Name</span>
            <input name="name" type="text" minLength={2} required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" required />
          </label>
          <label>
            <span>Phone</span>
            <input name="phone" type="tel" minLength={6} required />
          </label>
          <label>
            <span>Interest</span>
            <select name="interests" required defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="Spiritual Guidance">Spiritual Guidance</option>
              <option value="Energy Healing">Energy Healing</option>
              <option value="Relationship Harmony">Relationship Harmony</option>
              <option value="Career and Life Purpose">Career and Life Purpose</option>
            </select>
          </label>
        </div>

        {error ? <p className="consultation-spin__error">{error}</p> : null}
        {result ? (
          <p className="consultation-spin__result">
            Your result: <strong>{result.label}</strong>
          </p>
        ) : null}

        <button type="submit" disabled={busy}>
          <span>{busy ? "Spinning" : "Submit and Spin"}</span>
          <PiArrowRight aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}
