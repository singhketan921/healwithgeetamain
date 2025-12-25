"use client";

import { useState } from "react";

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
    <section className="bg-white py-20 text-[#6d655d]">
      <div className="relative mx-auto max-w-[1200px] px-6">
        <span className="pointer-events-none absolute left-6 top-8 h-2 w-2 rounded-full bg-[#e2dbd2]" />
        <span className="pointer-events-none absolute right-10 top-16 h-3 w-3 rounded-full border border-[#eee7df]" />
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="space-y-6">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#b5ada4]">
              Contact
            </p>
            <h2 className="text-[30px] sm:text-[38px] font-semibold tracking-[0.14em] text-[#6a625a]">
              BEGIN YOUR HEALING
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#8a8075]">
              Share what you are navigating - relationships, career clarity, or
              emotional balance - and we will suggest the right session or learning
              path. Responses within 48 hours.
            </p>

            <div className="space-y-3 text-[12px] uppercase tracking-[0.28em] text-[#b5ada4]">
              <p>WhatsApp: +91 99999 99999</p>
              <p>Email: hello@healwithgeeta.com</p>
              <p>Hours: Tue-Sun, 9AM-7PM IST</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-black/5 bg-[#fbf8f5] p-7 shadow-[0_14px_32px_rgba(0,0,0,0.06)] space-y-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="rounded-full border border-[#e7dfd6] bg-white px-5 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="rounded-full border border-[#e7dfd6] bg-white px-5 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
              />
            </div>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-full border border-[#e7dfd6] bg-white px-5 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            >
              <option value="">Service of interest</option>
              <option value="consultation">Astrology Consultation</option>
              <option value="healing">Energy + Somatic Healing</option>
              <option value="course">Learning Program</option>
              <option value="products">Product Curation</option>
            </select>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Share your story or your questions..."
              className="w-full rounded-[22px] border border-[#e7dfd6] bg-white px-5 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#cbbdaf]"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#8a8176] px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-white"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
