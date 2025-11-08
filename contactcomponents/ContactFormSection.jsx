'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaPhone } from "react-icons/fa6";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactFormSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          topic: form.subject?.toLowerCase().includes("course")
            ? "courses"
            : form.subject?.toLowerCase().includes("healing")
            ? "healing"
            : "consultation",
          message: form.message,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error?.errors
            ? Object.values(error.errors).flat().join(", ")
            : "Unable to send your message right now."
        );
      }

      setForm(initialForm);
      setStatus({
        state: "success",
        message: "Thank you! We'll get back to you within 24 hours.",
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
      <div className="flex flex-col gap-10 mx-auto max-w-7xl lg:flex-row">
        {/* ---------------- Left Side: Form ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="mb-8 font-serif text-4xl font-semibold">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8B963] outline-none"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8B963] outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8B963] outline-none"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8B963] outline-none"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your goals and what you are seeking guidance on ..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#A8B963] outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#A8B963] text-white font-medium px-8 py-3 rounded-md hover:bg-[#99A855] transition w-full sm:w-auto disabled:opacity-60"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending..." : "Submit Message"}
            </button>

            {status.state === "error" && (
              <p className="text-sm text-red-600">{status.message}</p>
            )}
            {status.state === "success" && (
              <p className="text-sm text-green-700">{status.message}</p>
            )}

            <p className="mt-1 text-sm text-gray-500">
              We will get back to you in 24 hours.
            </p>
          </form>
        </motion.div>

        {/* ---------------- Right Side: Direct Contact Card ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-[320px]"
        >
          <div className="rounded-2xl bg-[#F6F4E9] border border-black/5 shadow-sm p-5 sm:p-6 w-full">
            <h3 className="mb-2 font-serif text-lg text-gray-800">
              Prefer Direct Contact?
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              Call us anytime during our business hours for immediate assistance
              with your healing journey.
            </p>

            <div className="space-y-3">
              {/* Working hours */}
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F1E4B8] ring-1 ring-black/5">
                  <FaRegClock className="text-[#C5A35C] text-[14px]" />
                </span>
                <span className="text-[14px] text-gray-800">
                  Mon-Fri: 9AM to 7PM
                </span>
              </div>

              {/* Phone number */}
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F1E4B8] ring-1 ring-black/5">
                  <FaPhone className="text-[#C5A35C] text-[13px]" />
                </span>
                <span className="text-[14px] text-gray-800 font-medium">
                  +91 98208 88862
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

