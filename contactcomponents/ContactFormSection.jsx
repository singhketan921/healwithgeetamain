'use client';

import { useState } from "react";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const META_CARDS = [
  { label: "Studio hours", value: "Mon - Fri, 9 AM to 7 PM" },
  { label: "Phone", value: "+91 98208 88862" },
  { label: "Response time", value: "Within 24 hours" },
];

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
    <section className="relative overflow-hidden bg-[#F6F3EF] px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white blur-[150px]" />
        <span className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#D3C6BA] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[#B0AAA0]">
            Correspondence desk
          </p>
          <h2 className="font-serif text-[2.8rem] leading-tight text-[#524E48]">
            Send a letter to the studio
          </h2>
          <p className="text-base text-[#524E48]/80">
            Tell us about the chapter you are ready to edit. Share your
            astrological questions, course inquiries, or healing requests and
            our team will curate a bespoke reply.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {META_CARDS.map((card) => (
              <div
                key={card.label}
                className="rounded-[24px] border border-[#EAE4DC] bg-white/80 px-5 py-4 text-sm uppercase tracking-[0.2em] text-[#A59079]"
              >
                <p>{card.label}</p>
                <p className="mt-2 text-base font-serif normal-case tracking-normal text-[#524E48]">
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[36px] border border-[#EAE4DC] bg-white/90 p-6 shadow-[0_25px_70px_rgba(82,78,72,0.08)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="rounded-2xl border border-[#EAE4DC] bg-[#F8F6F3] px-4 py-3 text-sm text-[#524E48] focus:border-[#A59079] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="rounded-2xl border border-[#EAE4DC] bg-[#F8F6F3] px-4 py-3 text-sm text-[#524E48] focus:border-[#A59079] focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="rounded-2xl border border-[#EAE4DC] bg-[#F8F6F3] px-4 py-3 text-sm text-[#524E48] focus:border-[#A59079] focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Topic"
                className="rounded-2xl border border-[#EAE4DC] bg-[#F8F6F3] px-4 py-3 text-sm text-[#524E48] focus:border-[#A59079] focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Share your intentions, questions, or requests..."
              className="w-full rounded-2xl border border-[#EAE4DC] bg-[#F8F6F3] px-4 py-3 text-sm text-[#524E48] focus:border-[#A59079] focus:outline-none"
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-[#524E48] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#524E48] transition hover:bg-[#524E48] hover:text-[#F6F3EF] disabled:opacity-60"
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? "Sending" : "Submit message"}
              </button>
              <p className="text-sm text-[#A59079]">
                We reply personally with ceremony notes and next steps.
              </p>
            </div>

            {status.state === "error" && (
              <p className="text-sm text-red-600">{status.message}</p>
            )}
            {status.state === "success" && (
              <p className="text-sm text-[#4A7C59]">{status.message}</p>
            )}
          </form>
        </div>

        <aside className="w-full max-w-sm self-start rounded-[32px] border border-[#EAE4DC] bg-white/85 p-6 text-[#524E48] shadow-[0_25px_70px_rgba(82,78,72,0.08)]">
          <p className="text-xs uppercase tracking-[0.45em] text-[#B0AAA0]">
            Studio concierge
          </p>
          <p className="mt-3 font-serif text-2xl leading-snug">
            Prefer a call? Leave your number and we will schedule a time to
            speak or arrange an in-person visit.
          </p>
          <div className="mt-6 space-y-4 text-sm text-[#524E48]/80">
            <p>WhatsApp: +91 98208 88862</p>
            <p>Email: hello@healwithgeeta.com</p>
            <p>Address: Mumbai, India (appointments only)</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
