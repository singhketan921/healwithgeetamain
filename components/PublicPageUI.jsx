import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  PiBookOpenText,
  PiCertificate,
  PiClock,
  PiEnvelopeSimple,
  PiFlowerLotus,
  PiHeart,
  PiMonitorPlay,
  PiPlay,
  PiShieldCheck,
  PiSparkle,
  PiStarFour,
  PiUsersThree,
} from "react-icons/pi";

export const PUBLIC_ASSETS = {
  heroStillLife: "/assets/images/public-courses-hero-still-life.png",
  fallbackImage: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.08 (2).jpeg",
  lotus: "/assets/navicon.png",
};

export function formatPublicPrice(value, currency = "INR") {
  if (typeof value === "number") {
    return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  }
  return value || "On request";
}

export function formatPublicDuration(months, format, weeks, minutes) {
  if (minutes) return `${minutes} ${minutes === 1 ? "Minute" : "Minutes"}`;
  if (months) return `${months} ${months === 1 ? "Month" : "Months"}${format ? ` | ${format}` : ""}`;
  if (weeks) return `${weeks} ${weeks === 1 ? "Week" : "Weeks"}${format ? ` | ${format}` : ""}`;
  return format || "Self paced";
}

export function derivePublicPrice(item) {
  if (item?.priceTiers?.length) {
    const sale =
      item.priceTiers.find((tier) => /sale|offer|discount|final/i.test(tier.label || "")) ||
      item.priceTiers.find((tier) => !/original|mrp/i.test(tier.label || "")) ||
      item.priceTiers[0];
    const original = item.priceTiers.find((tier) => /original|mrp/i.test(tier.label || ""));
    return {
      price: formatPublicPrice(sale?.amount, sale?.currency || item.currency || "INR"),
      oldPrice: original ? formatPublicPrice(original.amount, original.currency || item.currency || "INR") : null,
    };
  }

  const value = item?.price ?? item?.investment;
  return {
    price: value ? formatPublicPrice(value, item?.currency || "INR") : "On request",
    oldPrice: null,
  };
}

export function PublicPageShell({ children, className = "" }) {
  return <div className={`public-page-shell ${className}`}>{children}</div>;
}

export function PublicSection({ children, className = "" }) {
  return (
    <Reveal className="public-motion-wrap" direction="up" offset={28}>
      <section className={`public-section ${className}`}>{children}</section>
    </Reveal>
  );
}

export function PublicHero({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  image = PUBLIC_ASSETS.heroStillLife,
}) {
  return (
    <section className="public-hero">
      <Reveal className="public-hero__copy" direction="right" offset={34}>
        {breadcrumb.length ? (
          <nav className="public-breadcrumb" aria-label="Breadcrumb">
            {breadcrumb.map((item, index) => (
              <span key={`${item.label}-${index}`}>
                {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                {index < breadcrumb.length - 1 ? <b aria-hidden="true">›</b> : null}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? <p className="public-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <div className="public-title-rule" aria-hidden="true">
          <span />
          <img src={PUBLIC_ASSETS.lotus} alt="" />
        </div>
        {description ? <p className="public-hero__description">{description}</p> : null}
      </Reveal>
      <Reveal className="public-hero__image" direction="left" offset={34} delay={0.12} aria-hidden="true">
        <img src={image} alt="" />
      </Reveal>
    </section>
  );
}

export function FeatureStrip({ items = [] }) {
  const fallbackIcons = [PiUsersThree, PiMonitorPlay, PiCertificate, PiHeart];
  return (
    <section className="public-feature-strip" aria-label="Highlights">
      {items.map((item, index) => {
        const Icon = item.icon || fallbackIcons[index % fallbackIcons.length];
        return (
          <Reveal key={item.title} className="public-feature-motion" delay={index * 0.06} offset={18}>
            <article className="public-feature">
              <span className="public-feature__icon">
                <Icon aria-hidden="true" />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
            </article>
          </Reveal>
        );
      })}
    </section>
  );
}

export function CatalogToolbar({ filters = [] }) {
  return (
    <div className="public-toolbar">
      <div className="public-toolbar__filters">
        {filters.map((filter, index) => (
          <button className={index === 0 ? "is-active" : ""} type="button" key={filter}>
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PublicCardGrid({ children, className = "" }) {
  return <div className={`public-card-grid ${className}`}>{children}</div>;
}

export function PublicCatalogPanel({ children, className = "" }) {
  return (
    <Reveal className="public-motion-wrap" direction="up" offset={30}>
      <section className={`public-catalog-panel ${className}`}>{children}</section>
    </Reveal>
  );
}

export function PublicCatalogCard({
  title,
  description,
  image,
  href,
  price,
  oldPrice,
  meta = [],
  label = "Limited Offer",
  cta = "View Details",
}) {
  const content = (
    <article className="public-catalog-card">
      <div className="public-catalog-card__image">
        {label ? <span>{label}</span> : null}
        <img src={image || PUBLIC_ASSETS.fallbackImage} alt="" />
        <i aria-hidden="true">
          <PiPlay />
        </i>
      </div>
      <div className="public-catalog-card__body">
        <h2>{title}</h2>
        <p className="public-card-description">{description}</p>
        <span className="public-card-read-more">Read more</span>
        {meta.length ? (
          <div className="public-card-meta">
            {meta.map((item, index) => {
              const Icon = item.icon || [PiClock, PiBookOpenText, PiSparkle][index % 3];
              return (
                <span key={`${item.label}-${index}`}>
                  <Icon aria-hidden="true" />
                  {item.label}
                </span>
              );
            })}
          </div>
        ) : null}
        <div className="public-card-footer">
          <span className="public-card-price">
            {oldPrice ? <del>{oldPrice}</del> : null}
            <strong>{price || "On request"}</strong>
          </span>
          <span className="public-card-cta">{cta}</span>
        </div>
      </div>
    </article>
  );

  return (
    <Reveal className="public-card-motion" offset={24}>
      {href ? <Link className="public-catalog-link" href={href}>{content}</Link> : content}
    </Reveal>
  );
}

export function WhyLearnBand({ title = "Why Learn with Faith Healers?", items = [] }) {
  const fallbackIcons = [PiFlowerLotus, PiShieldCheck, PiSparkle, PiUsersThree];
  return (
    <Reveal className="public-motion-wrap" offset={30}>
      <section className="public-why-band">
        <div className="public-why-band__title">
          <PiFlowerLotus aria-hidden="true" />
          <h2>{title}</h2>
        </div>
        <div className="public-why-band__items">
          {items.map((item, index) => {
            const Icon = item.icon || fallbackIcons[index % fallbackIcons.length];
            return (
              <article key={item.title}>
                <Icon aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
              </article>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}

export function SubscribeBand({
  title = "Stay inspired on your journey",
  text = "Get updates on new courses, offers and spiritual insights.",
}) {
  return (
    <Reveal className="public-motion-wrap" offset={26}>
      <section className="public-subscribe-band">
        <span className="public-subscribe-band__icon">
          <PiEnvelopeSimple aria-hidden="true" />
        </span>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <form>
          <input type="email" placeholder="Enter your email" aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </Reveal>
  );
}

export function PublicDetailLayout({ backHref, backLabel, title, description, image, badges = [], children, aside }) {
  return (
    <PublicPageShell>
      <Reveal className="public-motion-wrap" offset={28}>
        <section className="public-detail">
          <main>
            <Link className="public-detail__back" href={backHref}>{backLabel}</Link>
            <div className="public-detail__hero-card">
              <div>
                <h1>{title}</h1>
                {badges.length ? (
                  <div className="public-detail__badges">
                    {badges.map((badge) => <span key={badge}>{badge}</span>)}
                  </div>
                ) : null}
                {description ? <p className="preserve-format">{description}</p> : null}
              </div>
              <img src={image || PUBLIC_ASSETS.fallbackImage} alt="" />
            </div>
            <div className="public-detail__content">{children}</div>
          </main>
          {aside ? <aside>{aside}</aside> : null}
        </section>
      </Reveal>
    </PublicPageShell>
  );
}

export function PublicInfoCard({ title, children }) {
  return (
    <Reveal className="public-motion-wrap" offset={22}>
      <section className="public-info-card">
        <h2>{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}

export function PublicChecklist({ items = [] }) {
  return (
    <Reveal className="public-motion-wrap" offset={18}>
      <ul className="public-checklist">
        {items.map((item) => (
          <li key={item}>
            <PiStarFour aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
