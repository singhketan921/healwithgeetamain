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
    <section className="px-6 py-24 bg-[#EEECE9] text-[#6b625a]" id="form">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[1200px] space-y-8"
      >
        <div className="space-y-3">
          <p className="text-[12px] uppercase tracking-[0.28em] text-[#9a938c]">
            Enrollment
          </p>
          <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-semibold tracking-[0.12em]">
            Begin your learning journey
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#7a736c] leading-[1.7]">
            Tell us the course calling your name and we’ll curate schedules, payment plans, and prep materials.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] border border-[#e7dfd6] bg-[#fbf8f5] p-8 shadow-[0_14px_32px_rgba(0,0,0,0.08)] space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 bg-white text-[#7a736c] focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
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
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border border-[#e7dfd6] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Intentions, learning goals, or experience you’d like us to know about..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-[#e7dfd6] rounded-[22px] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
          ></textarea>

          <div className="space-y-3 text-center">
            <button
              type="submit"
              className="w-full rounded-full bg-[#8a8176] px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white disabled:opacity-60"
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
            <p className="text-[12px] text-[#9a938c] uppercase tracking-[0.28em]">
              Your information stays sacred · Privacy policy
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
