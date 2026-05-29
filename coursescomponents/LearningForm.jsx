'use client';

import { useState } from "react";
import FormSectionFrame, {
  formBoxInputClass,
  formInputClass,
  formSubmitClass,
  formTextareaClass,
} from "@/components/FormSectionFrame";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export default function LearningForm({ courses = [], onSubmit }) {
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
    <FormSectionFrame
      id="form"
      eyebrow="Enrollment"
      title="Begin Your Learning"
      accentTitle="Journey"
      intro="Tell us the course calling your name and we'll curate schedules, payment plans, and prep materials."
      imageAlt="Astrology chart"
    >
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={formInputClass}
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className={formBoxInputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={formInputClass}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={formInputClass}
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course.id ?? course._id ?? course.title} value={course.id ?? course.title}>
                  {course.title}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={formInputClass}
            />
          </div>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className={formInputClass}
            />

          <textarea
            name="message"
            placeholder="Intentions, learning goals, or experience you’d like us to know about..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={formTextareaClass}
          ></textarea>

          <div className="space-y-3 text-center">
            <button
              type="submit"
              className={formSubmitClass}
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Submitting..." : "Submit Request ↗"}
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
