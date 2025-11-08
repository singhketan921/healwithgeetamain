'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaClock } from "react-icons/fa";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for scheduling your consultation! We'll reach out soon.");
  };

  return (
    <section className="bg-[#DDE2D0] py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - INFO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
            Begin Your Sacred Journey
          </h2>
          <p className="text-base text-charcoal/80 font-medium max-w-md">
            Take the first step towards spiritual awakening and cosmic
            alignment. Your transformation awaits.
          </p>

          <div className="space-y-6 pt-4">
            {/* PHONE */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#EBD7A8] text-charcoal text-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">
                  Phone Consultation
                </h4>
                <p className="text-sm text-charcoal/80">+91 9999999999</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#EBD7A8] text-charcoal text-lg">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">Email Support</h4>
                <p className="text-sm text-charcoal/80">abc@gmail.com</p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#EBD7A8] text-charcoal text-lg">
                <FaGlobe />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">Sacred Space</h4>
                <p className="text-sm text-charcoal/80">
                  123 Spiritual Lane, New Delhi
                </p>
              </div>
            </div>

            {/* HOURS */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#EBD7A8] text-charcoal text-lg">
                <FaClock />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">
                  Consultation Hours
                </h4>
                <p className="text-sm text-charcoal/80">Mon-Fri: 9AM-7PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM SECTION */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#E8EDE0] border border-[#E0E5D6] rounded-2xl shadow-sm p-8 space-y-4"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-4">
            Schedule Your First Consultation
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full rounded-full border border-[#dcdcdc] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
              required
            />
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full rounded-full border border-[#dcdcdc] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full rounded-full border border-[#dcdcdc] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            required
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-full border border-[#dcdcdc] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-full border border-[#dcdcdc] px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
            required
          >
            <option value="">Select Service</option>
            <option value="astrology">Astrology Consultation</option>
            <option value="tarot">Tarot Reading</option>
            <option value="healing">Energy Healing</option>
            <option value="reiki">Reiki Session</option>
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your goals and what you are seeking guidance on..."
            rows="4"
            className="w-full rounded-2xl border border-[#dcdcdc] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#ACBF69]"
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-full bg-[#F4D689] text-charcoal font-semibold py-3 hover:bg-[#EECF75] transition"
          >
            Enroll Now
          </button>

          <p className="text-xs text-charcoal/60 text-center">
            Your information is safe and will never be shared.{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}

