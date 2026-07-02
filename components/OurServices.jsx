"use client";

import Link from "next/link";
import { PiBookOpenText, PiChatsCircle, PiHandsPraying } from "react-icons/pi";

const services = [
  {
    title: "Online Courses",
    description:
      "Transformative courses crafted to help you learn, grow, and evolve at your own pace from the comfort of your home.",
    href: "/courses",
    cta: "Explore Courses",
    image: "/assets/images/service-online-courses.png",
    icon: PiBookOpenText,
  },
  {
    title: "Consultations",
    description:
      "One-on-one sessions tailored to provide clarity, direction, and practical guidance for your unique journey.",
    href: "/consultations",
    cta: "Explore Consultations",
    image: "/assets/images/service-consultations.png",
    icon: PiChatsCircle,
  },
  {
    title: "Healings",
    description:
      "Energy healing sessions designed to release blockages, restore balance, and promote inner peace and well-being.",
    href: "/healings",
    cta: "Explore Healings",
    image: "/assets/images/service-healings.png",
    icon: PiHandsPraying,
  },
];

export default function OurServices() {
  return (
    <section className="our-services" aria-label="Our services">
      <div className="our-services__bg-lotus our-services__bg-lotus--top" aria-hidden="true" />
      <div className="our-services__bg-lotus our-services__bg-lotus--bottom" aria-hidden="true" />

      <div className="our-services__header">
        <div className="our-services__top-mark" aria-hidden="true">
          <span />
          <img src="/assets/navicon.png" alt="" />
          <span />
        </div>
        <h2>Our Services</h2>
        <div className="our-services__divider" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
        <p>
          Holistic offerings crafted to support your spiritual growth, healing, and
          <br />
          transformation journey.
        </p>
      </div>

      <div className="our-services__grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-offer-card" key={service.title}>
              <div className="service-offer-card__icon" aria-hidden="true">
                <Icon />
              </div>

              <img src={service.image} alt="" className="service-offer-card__image" />

              <div className="service-offer-card__body">
                <h3>{service.title}</h3>
                <span className="service-offer-card__rule" aria-hidden="true" />
                <p>{service.description}</p>
                <Link href={service.href} className="service-offer-card__cta">
                  <span>{service.cta}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="our-services__bottom-mark" aria-hidden="true">
        <span />
        <img src="/assets/navicon.png" alt="" />
        <span />
      </div>
    </section>
  );
}
