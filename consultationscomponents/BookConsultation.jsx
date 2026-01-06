'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export default function BookConsultation() {
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
    <section className="bg-[#EEECE9] py-24 px-6 text-[#6b625a]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[1200px] space-y-8"
      >
        <div className="text-left space-y-3">
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
            Booking
          </p>
          <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
            Schedule your consultation
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
            Share your details and intention. We reply within 48 hours with available slots and ceremony notes.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#fbf8f5] rounded-[28px] border border-[#e7dfd6] shadow-[0_14px_32px_rgba(0,0,0,0.08)] p-8 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 bg-white text-[#7a736c] focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            >
              <option value="">Select Service</option>
              <option value="Astrology Consultation">Astrology Consultation</option>
              <option value="Tarot Reading">Tarot Reading</option>
              <option value="Energy Healing">Energy Healing</option>
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 bg-white text-[#7a736c] focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            >
              <option value="">Preferred Time</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Intentions, themes, or questions you'd like us to focus on..."
            rows="4"
            className="border border-[#e7dfd6] rounded-[22px] px-5 py-4 w-full focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
          />

          <div className="space-y-3 text-center">
            <button
              type="submit"
              className="w-full rounded-full bg-[#8a8176] px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Submitting..." : "Book Consultation"}
            </button>
            {status.state === "error" && (
              <p className="text-sm text-red-600">{status.message}</p>
            )}
            {status.state === "success" && (
              <p className="text-sm text-green-700">{status.message}</p>
            )}
            <p className="text-[12px] text-[#9a938c] uppercase tracking-[0.28em]">
              Your information stays sacred · Privacy policy
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
