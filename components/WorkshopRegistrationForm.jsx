"use client";

import { useState } from "react";
import { PiArrowRight, PiCheckCircle, PiSparkle } from "react-icons/pi";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  preferredWorkshop: "",
  preferredFormat: "online",
  message: "",
};

export default function WorkshopRegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/workshop-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors || {});
        setStatus("error");
        return;
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrors({
        form: "Something went wrong. Please try again in a moment.",
      });
    }
  };

  const fieldError = (name) => errors[name]?.[0];

  return (
    <section className="public-section">
      <div className="grid gap-10 rounded-[28px] border border-[#ead8bd] bg-[#fff8ed] p-5 shadow-[0_24px_70px_rgba(104,74,39,0.12)] lg:grid-cols-[0.78fr_1.22fr] lg:p-8">
        <div className="flex flex-col justify-between rounded-[22px] bg-[#184f2d] p-7 text-white">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/14 text-[28px]">
              <PiSparkle aria-hidden="true" />
            </span>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4d39a]">
              Workshop Registration
            </p>
            <h2 className="mt-3 font-serif text-[34px] font-semibold leading-tight sm:text-[44px]">
              Register your interest for upcoming workshops
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-white/78">
              Share your details and the topic you want to learn. The team will contact you when the next relevant workshop opens.
            </p>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-white/86">
            {["Upcoming batches", "Online or in-person interest", "Admin-visible registration record"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <PiCheckCircle className="h-5 w-5 text-[#f4d39a]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#5d4b2c]">
              Full name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="min-h-12 rounded-[12px] border border-[#dfc79f] bg-white px-4 text-base font-medium text-[#28291c] outline-none transition focus:border-[#667030] focus:ring-2 focus:ring-[#667030]/20"
                placeholder="Your name"
                required
              />
              {fieldError("name") ? <span className="text-xs text-red-700">{fieldError("name")}</span> : null}
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#5d4b2c]">
              Phone number
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="min-h-12 rounded-[12px] border border-[#dfc79f] bg-white px-4 text-base font-medium text-[#28291c] outline-none transition focus:border-[#667030] focus:ring-2 focus:ring-[#667030]/20"
                placeholder="+91 98765 43210"
                required
              />
              {fieldError("phone") ? <span className="text-xs text-red-700">{fieldError("phone")}</span> : null}
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#5d4b2c]">
              Email address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="min-h-12 rounded-[12px] border border-[#dfc79f] bg-white px-4 text-base font-medium text-[#28291c] outline-none transition focus:border-[#667030] focus:ring-2 focus:ring-[#667030]/20"
                placeholder="you@example.com"
                required
              />
              {fieldError("email") ? <span className="text-xs text-red-700">{fieldError("email")}</span> : null}
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#5d4b2c]">
              City
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="min-h-12 rounded-[12px] border border-[#dfc79f] bg-white px-4 text-base font-medium text-[#28291c] outline-none transition focus:border-[#667030] focus:ring-2 focus:ring-[#667030]/20"
                placeholder="City"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_220px]">
            <label className="grid gap-2 text-sm font-semibold text-[#5d4b2c]">
              Workshop interest
              <input
                name="preferredWorkshop"
                value={form.preferredWorkshop}
                onChange={handleChange}
                className="min-h-12 rounded-[12px] border border-[#dfc79f] bg-white px-4 text-base font-medium text-[#28291c] outline-none transition focus:border-[#667030] focus:ring-2 focus:ring-[#667030]/20"
                placeholder="Tarot, Reiki, Numerology..."
                required
              />
              {fieldError("preferredWorkshop") ? <span className="text-xs text-red-700">{fieldError("preferredWorkshop")}</span> : null}
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#5d4b2c]">
              Format
              <select
                name="preferredFormat"
                value={form.preferredFormat}
                onChange={handleChange}
                className="min-h-12 rounded-[12px] border border-[#dfc79f] bg-white px-4 text-base font-medium text-[#28291c] outline-none transition focus:border-[#667030] focus:ring-2 focus:ring-[#667030]/20"
              >
                <option value="online">Online</option>
                <option value="offline">In person</option>
                <option value="either">Either</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-[#5d4b2c]">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="rounded-[12px] border border-[#dfc79f] bg-white px-4 py-3 text-base font-medium text-[#28291c] outline-none transition focus:border-[#667030] focus:ring-2 focus:ring-[#667030]/20"
              placeholder="Tell us what you want to learn or when you are available."
            />
          </label>

          {errors.form ? <p className="text-sm font-semibold text-red-700">{errors.form}</p> : null}
          {status === "success" ? (
            <p className="rounded-[12px] border border-[#b7d1a9] bg-[#eef7ea] px-4 py-3 text-sm font-semibold text-[#184f2d]">
              Thank you. Your workshop registration has been received.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-[#184f2d] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#667030] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? "Submitting..." : "Register Interest"}
            <PiArrowRight aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
