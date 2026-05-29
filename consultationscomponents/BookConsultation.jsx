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

export default function BookConsultation({ offerings = [] }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "consultation",
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
        message: "Thank you! Your consultation request has been received.",
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
      id="bookconsultation"
      eyebrow="Booking"
      title="Schedule Your"
      accentTitle="Consultation"
      intro="Share your details and intention. We reply within 48 hours with available slots and ceremony notes."
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
              {offerings.map((offering) => {
                const value = offering.id ?? offering._id ?? offering.title;
                if (!value) {
                  return null;
                }
                return (
                  <option key={value} value={value}>
                    {offering.title ?? value}
                  </option>
                );
              })}
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
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className={formInputClass}
            >
              <option value="">Preferred Time</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Intentions, themes, or questions you'd like us to focus on..."
            rows="4"
            className={formTextareaClass}
          />

          <div className="space-y-3 text-center">
            <button
              type="submit"
              className={formSubmitClass}
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Submitting..." : "Book Consultation ↗"}
            </button>
            {status.state === "error" && (
              <p className="text-sm text-red-600">{status.message}</p>
            )}
            {status.state === "success" && (
              <p className="text-sm text-green-700">{status.message}</p>
            )}
            <p className="text-[12px] text-[#9a938c] uppercase tracking-[0.28em]">
              Your information stays sacred - Privacy policy
            </p>
          </div>
        </form>
    </FormSectionFrame>
  );
}
