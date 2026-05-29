'use client';

import { useState } from "react";
import FormSectionFrame, {
  formBoxInputClass,
  formInputClass,
  formSubmitClass,
  formTextareaClass,
} from "@/components/FormSectionFrame";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactFormSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
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

      setForm(INITIAL_FORM);
      setStatus({
        state: "success",
        message: "Thank you. We will reply within 24 hours.",
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
      eyebrow="Ask Us Question"
      title="Can't Find What You're"
      accentTitle="Looking For?"
      intro="Ask us directly through the form below and our team will respond quickly."
      imageAlt="Astrology chart"
    >
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className={formInputClass}
            />
            <div className="grid gap-8 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={formBoxInputClass}
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={formInputClass}
              />
            </div>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={formInputClass}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Message"
              className={formTextareaClass}
            />

            <div className="space-y-3 text-center">
              <button
                type="submit"
                className={formSubmitClass}
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? "Sending" : "Send My Question ↗"}
              </button>
            </div>

            {status.state === "error" && (
              <p className="text-sm text-red-600">{status.message}</p>
            )}
            {status.state === "success" && (
              <p className="text-sm text-[#4A7C59]">{status.message}</p>
            )}
          </form>
    </FormSectionFrame>
  );
}
