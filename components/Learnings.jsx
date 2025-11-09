'use client';

import { motion } from "framer-motion";

const astrologyImage = "/assets/images/astrology.jpg";
const astrologyImage1 = "/assets/images/modality5.png";

const learnings = [
  {
    id: 1,
    title: "Vedic Astrology Mastery",
    subtitle: "Certificate Course",
    description:
      "Comprehensive 6-month program covering birth chart analysis, planetary periods, predictive techniques, and practical consultation skills.",
    price: "$1,200",
    duration: "24 Weeks Duration",
    features: ["Live Group Sessions", "Official Certification", "Lifetime Access"],
    image: astrologyImage,
  },
  {
    id: 2,
    title: "Vedic Astrology Mastery",
    subtitle: "Certificate Course",
    description:
      "Comprehensive 6-month program covering birth chart analysis, planetary periods, predictive techniques, and practical consultation skills.",
    price: "$1,200",
    duration: "24 Weeks Duration",
    features: ["Live Group Sessions", "Official Certification", "Lifetime Access"],
    image: astrologyImage1,
  },
];

export default function Learnings() {
  return (
    <section className="relative bg-[#EBF0E7] py-20 overflow-hidden">
      <div className="relative z-10 px-6 mx-auto text-center max-w-7xl sm:px-8">
        {/* Heading */}
        <h2 className="font-serif text-[2.5rem] sm:text-[3rem] font-semibold text-charcoal mb-3">
          Learnings
        </h2>
        <p className="mb-8 text-base text-charcoal/80 sm:text-lg">
          Quality Learnings that are tailored for excellence.
        </p>

        {/* Browse Button */}
        <div className="mb-14">
          <a
            href="/courses"
            className="inline-block bg-[#ACBF69] text-white px-8 py-3 rounded-md font-medium text-lg shadow-sm transition hover:bg-[#9CAD5B]"
          >
            Browse Learnings
          </a>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 justify-items-center">
          {learnings.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden w-full max-w-[540px] transition-all duration-300 hover:shadow-lg"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[220px] object-cover rounded-t-[20px]"
              />

              <div className="px-8 py-6 text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#F7E0A3] text-[#2e2e2e] text-sm font-medium px-4 py-1 rounded-full">
                    {course.subtitle}
                  </span>
                  <span className="text-[#ACBF69] text-lg font-semibold">{course.price}</span>
                </div>

                <h3 className="text-lg font-semibold text-[#51624F] mb-2">{course.title}</h3>

                <p className="mb-5 text-sm leading-relaxed text-charcoal/80">{course.description}</p>

                <ul className="grid grid-cols-2 mb-6 text-sm gap-y-2 text-charcoal/90">
                  {[course.duration, ...course.features].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span>&bull;</span> {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center">
                  <a
                    href="/courses#form"
                    className="w-full text-center bg-[#ACBF69] text-white font-medium py-3 rounded-full hover:bg-[#9CAD5B] transition"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
