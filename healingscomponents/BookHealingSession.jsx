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
    <section className="py-24 bg-[#F5F2EE] px-6 sm:px-10 text-[#524E48]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6 max-w-5xl mx-auto"
      >
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
            Booking
          </p>
          <h2 className="font-serif text-[2.4rem] leading-tight">
            Ready to receive?
          </h2>
          <p className="text-base text-[#524E48]/75">
            Tell us the sensation you seek—grounding, release, or energy boost—and we’ll choreograph the healing.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] border border-[#EAE4DC] shadow-[0_20px_60px_rgba(82,78,72,0.08)] p-8 space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full border border-[#EAE4DC] rounded-full px-5 py-3 focus:ring-2 focus:ring-[#A59079] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-[#EAE4DC] rounded-full px-5 py-3 focus:ring-2 focus:ring-[#A59079] outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-[#EAE4DC] rounded-full px-5 py-3 focus:ring-2 focus:ring-[#A59079] outline-none"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full border border-[#EAE4DC] rounded-full px-5 py-3 focus:ring-2 focus:ring-[#A59079] outline-none bg-white text-[#524E48]/75"
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
              className="w-full border border-[#EAE4DC] rounded-full px-5 py-3 focus:ring-2 focus:ring-[#A59079] outline-none"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full border border-[#EAE4DC] rounded-full px-5 py-3 focus:ring-2 focus:ring-[#A59079] outline-none"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Intentions, areas of imbalance, or sensations you're craving..."
            className="w-full border border-[#EAE4DC] rounded-[24px] px-5 py-4 focus:ring-2 focus:ring-[#A59079] outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#524E48] text-[#EAE4DC] text-xs font-semibold uppercase tracking-[0.4em] rounded-full py-3 hover:bg-[#3a3733] transition disabled:opacity-60"
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "Submitting..." : "Book Healing"}
          </button>

          {status.state === "error" && (
            <p className="mt-3 text-sm text-red-600 text-center">{status.message}</p>
          )}
          {status.state === "success" && (
            <p className="mt-3 text-sm text-green-700 text-center">
              {status.message}
            </p>
          )}
          <p className="text-xs text-center text-[#B0AAA0] uppercase tracking-[0.4em]">
            Your information stays sacred · Privacy policy
          </p>
        </motion.form>
      </motion.div>
    </section>
  );
}
