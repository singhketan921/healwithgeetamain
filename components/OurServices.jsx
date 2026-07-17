import Link from "next/link";
import { PiBookOpenText, PiChatsCircle, PiHandsPraying } from "react-icons/pi";

const fallbackServices = [
  {
    title: "Online Courses",
    description:
      "Structured learning in Reiki, tarot, numerology, chakra work and remedies, with practical tools you can use for yourself and others.",
    href: "/courses",
    cta: "Explore Courses",
    image: "/assets/drive/HEALWITHGEETA%20WEBSITE/COURSES/GROUP%20CLASSES.jpg",
    icon: PiBookOpenText,
  },
  {
    title: "Consultations",
    description:
      "Private one-on-one readings for career, relationships, money, health, timing and life direction, with grounded remedies where needed.",
    href: "/consultations",
    cta: "Explore Consultations",
    image: "/assets/drive/HEALWITHGEETA%20WEBSITE/CONSULTATION/COUNSELLLING/COUNSELLING.JPG",
    icon: PiChatsCircle,
  },
  {
    title: "Healings",
    description:
      "Energy support for stress, emotional heaviness, strained relationships and energetic blocks, held with care and after-session guidance.",
    href: "/healings",
    cta: "Explore Healings",
    image: "/assets/drive/HEALWITHGEETA%20WEBSITE/HEALINGS/REIKI%20HEALING/DSC_0607.JPG",
    icon: PiHandsPraying,
  },
];

function shortDescription(item, fallback) {
  const text = item?.headline || item?.description;
  if (!text) return fallback;
  return text.length > 145 ? `${text.slice(0, 142).trim()}...` : text;
}

function buildServices({ courses = [], consultations = [], healings = [] }) {
  const [course] = courses;
  const [consultation] = consultations;
  const [healing] = healings;
  const sources = [course, consultation, healing];

  return fallbackServices.map((service, index) => {
    const source = sources[index] || {};
    return {
      ...service,
      description: shortDescription(source, service.description),
    };
  });
}

export default function OurServices({ courses = [], consultations = [], healings = [] }) {
  const services = buildServices({ courses, consultations, healings });

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
          Courses, consultations and healing sessions crafted to support your spiritual growth, clarity, and
          <br />
          transformation with practical guidance.
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
