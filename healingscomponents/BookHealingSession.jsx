'use client';

import { useState } from "react";
import FormSectionFrame, {
  formBoxInputClass,
  formInputClass,
  formSubmitClass,
  formTextareaClass,
} from "@/components/FormSectionFrame";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export default function BookHealingSession() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "healing",
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          preferredDate: form.date,
          preferredTime: form.time,
          notes: form.message,
          offeringId: form.service || undefined,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error?.errors
            ? Object.values(error.errors).flat().join(", ")
            : "Unable to submit booking right now."
        );
      }

      setForm(initialForm);
      setStatus({
        state: "success",
        message: "Thank you! We'll contact you soon to confirm your session.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <FormSectionFrame
      eyebrow="Booking"
      title="Ready To"
      accentTitle="Receive?"
      intro="Tell us the sensation you seek - grounding, release, or energy boost - and we'll choreograph the healing."
      imageAlt="Astrology chart"
    >
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className={formInputClass}
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className={formBoxInputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className={formInputClass}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={formInputClass}
            >
              <option value="">Select Service</option>
              <option value="Energy Healing">Energy Healing</option>
              <option value="Chakra Balancing">Chakra Balancing</option>
              <option value="Reiki Renewal">Reiki Renewal</option>
              <option value="Sound Healing">Sound Healing</option>
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className={formInputClass}
            />
          </div>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className={formInputClass}
            />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Intentions, areas of imbalance, or sensations you're craving..."
            className={formTextareaClass}
          ></textarea>

          <button
            type="submit"
            className={formSubmitClass}
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "Submitting..." : "Book Healing ↗"}
          </button>

          {status.state === "error" && (
            <p className="mt-3 text-sm text-red-600 text-center">{status.message}</p>
          )}
          {status.state === "success" && (
            <p className="mt-3 text-sm text-green-700 text-center">
              {status.message}
            </p>
          )}
          <p className="text-[12px] text-center text-[#9a938c] uppercase tracking-[0.28em]">
            Your information stays sacred - Privacy policy
          </p>
        </form>
    </FormSectionFrame>
  );
}
