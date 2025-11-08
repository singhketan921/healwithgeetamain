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
    <section className="bg-[#E8E4D2] py-20 px-6 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="font-serif text-[2.4rem] sm:text-[3rem] font-semibold text-charcoal mb-3">
          Book Your Consultation
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-10">
          Take the first step toward spiritual clarity and transformation
        </p>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 sm:p-10 text-left"
        >
          <h3 className="text-lg font-semibold text-charcoal mb-6">
            Schedule Your Consultation
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-full px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-full px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-full px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-full px-4 py-3 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            >
              <option value="">Select Service</option>
              <option value="Astrology Consultation">
                Astrology Consultation
              </option>
              <option value="Tarot Reading">Tarot Reading</option>
              <option value="Energy Healing">Energy Healing</option>
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-full px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-full px-4 py-3 w-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            >
              <option value="">Select Time</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your goals and what you are seeking guidance on ..."
            rows="4"
            className="border border-gray-300 rounded-xl px-4 py-3 w-full mt-4 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
          />

          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-[#F8DE9D] hover:bg-[#F3D57A] text-charcoal font-semibold px-10 py-3 rounded-full transition-all shadow-sm"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Submitting..." : "Book Now"}
            </button>
            {status.state === "error" && (
              <p className="mt-3 text-sm text-red-600">{status.message}</p>
            )}
            {status.state === "success" && (
              <p className="mt-3 text-sm text-green-700">{status.message}</p>
            )}
            <p className="text-xs text-gray-500 mt-3">
              Your information is safe and will never be shared.{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
