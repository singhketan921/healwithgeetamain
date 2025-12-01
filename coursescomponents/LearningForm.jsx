'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export default function LearningForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      await onSubmit(formData);
      return;
    }

    setStatus({ state: "loading", message: "" });

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "course",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.date,
          preferredTime: formData.time,
          notes: formData.message,
          offeringId: formData.service || undefined,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error?.errors
            ? Object.values(error.errors).flat().join(", ")
            : "Unable to submit enrollment right now."
        );
      }

      setFormData(initialState);
      setStatus({
        state: "success",
        message: "Thank you for enrolling! We'll contact you soon.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <section className="px-6 py-24 bg-white text-[#524E48]" id="form">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
            Enrollment
          </p>
          <h2 className="font-serif text-[2.4rem] leading-tight">
            Begin your learning journey
          </h2>
          <p className="text-base text-[#524E48]/80">
            Tell us the course calling your name and we’ll curate schedules, payment plans, and prep materials.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#F8F6F3] rounded-[32px] border border-[#EAE4DC] shadow-[0_20px_60px_rgba(82,78,72,0.08)] p-8 space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[#EAE4DC] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A59079]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-[#EAE4DC] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A59079]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-[#EAE4DC] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A59079]"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-[#EAE4DC] rounded-full px-5 py-3 bg-white text-[#524E48]/75 focus:outline-none focus:ring-2 focus:ring-[#A59079]"
            >
              <option value="">Select Course</option>
              <option value="Vedic Astrology">Vedic Astrology</option>
              <option value="Intuitive Tarot">Intuitive Tarot</option>
              <option value="Energy Healing">Energy Healing</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-[#EAE4DC] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A59079]"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border border-[#EAE4DC] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A59079]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Intentions, learning goals, or experience you’d like us to know about..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-[#EAE4DC] rounded-[24px] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#A59079]"
          ></textarea>

          <div className="space-y-3 text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] rounded-full border border-[#524E48] hover:bg-[#524E48] hover:text-[#EAE4DC] transition disabled:opacity-60"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Submitting..." : "Submit Request"}
            </button>
            {status.state === "error" && (
              <p className="text-sm text-red-600">{status.message}</p>
            )}
            {status.state === "success" && (
              <p className="text-sm text-green-700">{status.message}</p>
            )}
            <p className="text-xs text-[#B0AAA0] uppercase tracking-[0.4em]">
              Your information stays sacred · Privacy policy
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
