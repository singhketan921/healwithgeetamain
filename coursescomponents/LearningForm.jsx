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
    <section className="px-6 py-20 bg-white sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="font-serif text-[2rem] sm:text-[2.5rem] font-semibold text-charcoal mb-3">
          Begin Your Learning Journey
        </h2>
        <p className="mb-10 text-base text-gray-700 sm:text-lg">
          Take the first step toward spiritual clarity and transformation
        </p>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#F8F5ED] rounded-2xl shadow-sm p-6 sm:p-8 text-left"
        >
          <h3 className="mb-6 text-lg font-semibold text-charcoal">
            Enroll in Our Certified Courses
          </h3>

          {/* Input Grid */}
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ACBF69] text-gray-600"
            >
              <option value="">Select Service</option>
              <option value="Astrology">Astrology</option>
              <option value="Tarot Reading">Tarot Reading</option>
              <option value="Healing">Healing</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            />
          </div>

          {/* Textarea */}
          <textarea
            name="message"
            placeholder="Tell us about your goals and what you are seeking guidance on ..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#EFDFA8] text-charcoal font-semibold px-10 py-3 rounded-full hover:bg-[#E6D28C] transition disabled:opacity-60"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Submitting..." : "Enroll Now"}
            </button>
          </div>

          {status.state === "error" && (
            <p className="mt-3 text-sm text-red-600 text-center">
              {status.message}
            </p>
          )}
          {status.state === "success" && (
            <p className="mt-3 text-sm text-green-700 text-center">
              {status.message}
            </p>
          )}

          <p className="mt-3 text-xs text-center text-gray-500">
            Your information is safe and will never be shared.{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </form>
      </motion.div>
    </section>
  );
}
