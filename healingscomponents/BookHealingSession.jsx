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
    <section className="py-20 bg-[#FAF9F6] px-6 sm:px-10 text-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-[2.3rem] sm:text-[2.8rem] font-semibold text-[#1B1B1B] mb-2">
          Book Your Healing
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-base text-gray-700 sm:text-lg">
          Take the first step toward spiritual clarity and transformation
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[#F8F7F3] shadow-md rounded-2xl p-8 sm:p-10 text-left border border-gray-100"
      >
        <h3 className="text-lg font-semibold text-[#1B1B1B] mb-6">
          Schedule Your Healing
        </h3>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#CBB87E] outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#CBB87E] outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#CBB87E] outline-none"
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#CBB87E] outline-none text-gray-600"
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
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#CBB87E] outline-none"
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#CBB87E] outline-none"
          />
        </div>

        {/* Message box */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us about your goals and what you are seeking guidance on ..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#CBB87E] outline-none mb-6 text-gray-700"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#F3D998] hover:bg-[#EACD8F] text-[#1B1B1B] font-semibold rounded-full py-3 transition disabled:opacity-60"
          disabled={status.state === "loading"}
        >
          {status.state === "loading" ? "Submitting..." : "Book Now"}
        </button>

        {status.state === "error" && (
          <p className="mt-3 text-sm text-red-600 text-center">{status.message}</p>
        )}
        {status.state === "success" && (
          <p className="mt-3 text-sm text-green-700 text-center">
            {status.message}
          </p>
        )}

        {/* Privacy Note */}
        <p className="mt-3 text-xs text-center text-gray-500">
          Your information is safe and will never be shared.{" "}
          <span className="underline cursor-pointer hover:text-[#A8B963]">
            Privacy Policy
          </span>
        </p>
      </motion.form>
    </section>
  );
}
