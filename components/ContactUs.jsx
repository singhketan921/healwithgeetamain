"use client";

import { useState } from "react";
import {
  PiCaretDown,
  PiChatCircleDots,
  PiClock,
  PiEnvelopeSimple,
  PiFlowerLotus,
  PiMapPin,
  PiPhone,
  PiUser,
} from "react-icons/pi";

const contactDetails = [
  {
    icon: PiEnvelopeSimple,
    title: "Email",
    value: "hello@sacredpathways.com",
  },
  {
    icon: PiPhone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: PiMapPin,
    title: "Location",
    value: "New Delhi, India",
  },
  {
    icon: PiClock,
    title: "Working Hours",
    value: "Mon - Sat | 10 AM - 6 PM",
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for reaching out. We will reply within 48 hours.");
  };

  return (
    <div className="contact-us">
      <div className="contact-us__inner">
        <form className="contact-us__form-card" onSubmit={handleSubmit}>
          <img
            src="/assets/navicon.png"
            alt=""
            className="contact-us__lotus-large"
            aria-hidden="true"
          />
          <p className="contact-us__eyebrow">
            <span>✧</span>
            Let&apos;s Connect
            <span>✧</span>
          </p>
          <h2>Contact Us</h2>
          <div className="contact-us__divider" aria-hidden="true">
            <span />
            <img src="/assets/navicon.png" alt="" />
            <span />
          </div>
          <p className="contact-us__intro">
            We&apos;re here to guide you on your journey.
            <br />
            Reach out for questions, bookings, or spiritual support.
          </p>

          <label className="contact-us__field">
            <PiUser aria-hidden="true" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </label>

          <label className="contact-us__field">
            <PiEnvelopeSimple aria-hidden="true" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </label>

          <label className="contact-us__field">
            <PiPhone aria-hidden="true" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </label>

          <label className="contact-us__field contact-us__field--select">
            <PiFlowerLotus aria-hidden="true" />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              aria-label="Service Interested In"
            >
              <option value="">Service Interested In</option>
              <option value="online-courses">Online Courses</option>
              <option value="consultations">Consultations</option>
              <option value="healings">Healings</option>
              <option value="personal-guidance">Personal Guidance</option>
            </select>
            <PiCaretDown className="contact-us__select-icon" aria-hidden="true" />
          </label>

          <label className="contact-us__field contact-us__field--message">
            <PiChatCircleDots aria-hidden="true" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
            />
          </label>

          <button className="contact-us__submit" type="submit">
            <span>Send Message</span>
            <PiFlowerLotus aria-hidden="true" />
          </button>
          <span className="contact-us__corner contact-us__corner--left" aria-hidden="true" />
        </form>

        <aside className="contact-us__side" aria-label="Contact details">
          <div className="contact-us__note-card">
            <div className="contact-us__note-mark">
              <img src="/assets/navicon.png" alt="" aria-hidden="true" />
            </div>
            <p>
              Book a consultation or ask about courses, healing sessions, and
              personal guidance.
            </p>
            <div className="contact-us__note-divider" aria-hidden="true">
              <span />
              <img src="/assets/navicon.png" alt="" />
              <span />
            </div>
          </div>

          <div className="contact-us__details">
            {contactDetails.map(({ icon: Icon, title, value }) => (
              <div className="contact-us__detail-card" key={title}>
                <div className="contact-us__detail-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="contact-us__detail-copy">
                  <h3>{title}</h3>
                  <p>{value}</p>
                </div>
                <img
                  src="/assets/images/mandala.png"
                  alt=""
                  className="contact-us__detail-mandala"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          <img
            className="contact-us__still-life"
            src="/assets/images/contact-still-life.png"
            alt=""
            aria-hidden="true"
          />
        </aside>

        <div className="contact-us__bottom-ornament" aria-hidden="true">
          <span />
          <i />
          <img src="/assets/navicon.png" alt="" />
          <i />
          <span />
        </div>
      </div>
    </div>
  );
}
