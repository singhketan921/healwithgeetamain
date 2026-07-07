import Link from "next/link";
import {
  PiBookOpenText,
  PiCaretDown,
  PiCertificate,
  PiClock,
  PiEnvelopeSimple,
  PiFlowerLotus,
  PiGridFour,
  PiHeart,
  PiListBullets,
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
  return <section className={`public-section ${className}`}>{children}</section>;
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
      <div className="public-hero__copy">
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
      </div>
      <div className="public-hero__image" aria-hidden="true">
        <img src={image} alt="" />
      </div>
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
          <article className="public-feature" key={item.title}>
            <span className="public-feature__icon">
              <Icon aria-hidden="true" />
            </span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.text}</small>
            </span>
          </article>
        );
      })}
    </section>
  );
}

export function CatalogToolbar({ filters = [], sortLabel = "Sort by Popularity" }) {
  return (
    <div className="public-toolbar">
      <div className="public-toolbar__filters">
        {filters.map((filter, index) => (
          <button className={index === 0 ? "is-active" : ""} type="button" key={filter}>
            {filter}
          </button>
        ))}
      </div>
      <div className="public-toolbar__actions">
        <button type="button">
          {sortLabel}
          <PiCaretDown aria-hidden="true" />
        </button>
        <span aria-hidden="true">
          <PiGridFour />
        </span>
        <span aria-hidden="true">
          <PiListBullets />
        </span>
      </div>
    </div>
  );
}

export function PublicCardGrid({ children, className = "" }) {
  return <div className={`public-card-grid ${className}`}>{children}</div>;
}

export function PublicCatalogPanel({ children, className = "" }) {
  return <section className={`public-catalog-panel ${className}`}>{children}</section>;
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
        <p>{description}</p>
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

  return href ? <Link className="public-catalog-link" href={href}>{content}</Link> : content;
}

export function WhyLearnBand({ title = "Why Learn with Faith Healers?", items = [] }) {
  const fallbackIcons = [PiFlowerLotus, PiShieldCheck, PiSparkle, PiUsersThree];
  return (
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
  );
}

export function SubscribeBand({
  title = "Stay inspired on your journey",
  text = "Get updates on new courses, offers and spiritual insights.",
}) {
  return (
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
  );
}

export function PublicDetailLayout({ backHref, backLabel, title, description, image, badges = [], children, aside }) {
  return (
    <PublicPageShell>
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
    </PublicPageShell>
  );
}

export function PublicInfoCard({ title, children }) {
  return (
    <section className="public-info-card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function PublicChecklist({ items = [] }) {
  return (
    <ul className="public-checklist">
      {items.map((item) => (
        <li key={item}>
          <PiStarFour aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
