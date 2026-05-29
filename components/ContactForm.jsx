"use client";

import { useState } from "react";
import FormSectionFrame, {
  formBoxInputClass,
  formInputClass,
  formSubmitClass,
  formTextareaClass,
} from "@/components/FormSectionFrame";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. We will reply within 48 hours.");
  };

  return (
    <FormSectionFrame
      eyebrow="Contact"
      title="Begin Your"
      accentTitle="Healing"
      intro="Share what you are navigating and we will suggest the right session or learning path. Responses within 48 hours."
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
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
                className={formInputClass}
            >
              <option value="">Service of interest</option>
              <option value="consultation">Astrology Consultation</option>
              <option value="healing">Energy + Somatic Healing</option>
              <option value="course">Learning Program</option>
              <option value="products">Product Curation</option>
            </select>
            </div>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className={formTextareaClass}
            />
            <button
              type="submit"
              className={formSubmitClass}
            >
              Submit Request ↗
            </button>
          </form>
    </FormSectionFrame>
  );
}
