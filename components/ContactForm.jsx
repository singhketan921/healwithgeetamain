'use client';

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
    <section className="bg-white py-24 text-[#524E48]">
      <div className="max-w-6xl px-6 mx-auto lg:px-0">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#B0AAA0]">
              Correspondence Desk
            </p>
            <h2 className="font-serif text-[2.6rem] leading-tight">
              Send a letter to the studio
            </h2>
            <p className="text-base leading-relaxed text-[#524E48]/80">
              Appointments are curated like editorials. Share the chapter you’re
              entering—health reset, heart work, or career rebirth—and we’ll
              compose the next spread together. Responses land within 48 hours.
            </p>

            <div className="space-y-4 text-sm uppercase tracking-[0.35em] text-[#B0AAA0]">
              <p>WhatsApp: +91 99999 99999</p>
              <p>Mail: hello@healwithgeeta.com</p>
              <p>Studio Hours: Tue–Sun, 9AM–7PM IST</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 p-8 border border-[#EAE4DC] rounded-[32px] bg-[#EAE4DC]/35 space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="px-5 py-3 border rounded-full border-[#B0AAA0] focus:outline-none focus:ring-2 focus:ring-[#A59079]"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="px-5 py-3 border rounded-full border-[#B0AAA0] focus:outline-none focus:ring-2 focus:ring-[#A59079]"
              />
            </div>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-5 py-3 border rounded-full border-[#B0AAA0] bg-white focus:outline-none focus:ring-2 focus:ring-[#A59079]"
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
              placeholder="Share your story, symptoms, or curiosities..."
              className="w-full px-5 py-4 border rounded-[24px] border-[#B0AAA0] focus:outline-none focus:ring-2 focus:ring-[#A59079]"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] rounded-full border border-[#524E48] hover:bg-[#524E48] hover:text-[#EAE4DC] transition"
            >
              Submit Letter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
