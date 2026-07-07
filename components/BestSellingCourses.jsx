const fallbackCourses = [
  {
    title: "Tarot Foundations",
    description: "Uncover the timeless wisdom of the cards and connect deeply with your intuition.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.09.jpeg",
    oldPrice: "₹6,999",
    price: "₹4,999",
    discount: "29%",
  },
  {
    title: "Astrology & Life Path",
    description: "Decode the stars to understand your destiny and align with your life purpose.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.08 (2).jpeg",
    oldPrice: "₹8,499",
    price: "₹6,499",
    discount: "24%",
  },
  {
    title: "Reiki Healing Essentials",
    description: "Learn the art of energy healing and restore harmony within and around you.",
    image: "/assets/newImages/WhatsApp Image 2026-07-06 at 15.41.06.jpeg",
    oldPrice: "₹7,499",
    price: "₹5,499",
    discount: "27%",
  },
];

function formatCoursePrice(value, currency = "INR") {
  if (typeof value === "number") {
    return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  }
  return value || null;
}

function getPriceDisplay(course, fallback) {
  if (course?.priceTiers?.length) {
    const sale =
      course.priceTiers.find((tier) => /sale|offer|discount|final/i.test(tier.label || "")) ||
      course.priceTiers.find((tier) => !/original|mrp/i.test(tier.label || "")) ||
      course.priceTiers[0];
    const original = course.priceTiers.find((tier) => /original|mrp/i.test(tier.label || ""));
    return {
      price: formatCoursePrice(sale?.amount, sale?.currency || course.currency) || fallback.price,
      oldPrice: original
        ? formatCoursePrice(original.amount, original.currency || course.currency)
        : fallback.oldPrice,
    };
  }

  return {
    price: formatCoursePrice(course?.price ?? course?.investment, course?.currency) || fallback.price,
    oldPrice: formatCoursePrice(course?.oldPrice ?? course?.mrp, course?.currency) || fallback.oldPrice,
  };
}

function getDiscount(oldPrice, price, fallbackDiscount) {
  const original = Number(String(oldPrice || "").replace(/[^\d.]/g, ""));
  const current = Number(String(price || "").replace(/[^\d.]/g, ""));
  if (original > 0 && current > 0 && current < original) {
    return `${Math.round(((original - current) / original) * 100)}%`;
  }
  return fallbackDiscount;
}

function toDisplayCourses(items = []) {
  const sourceItems = items.length
    ? [...items.slice(0, 3), ...fallbackCourses].slice(0, 3)
    : fallbackCourses;

  return sourceItems.map((course, index) => {
    const fallback = fallbackCourses[index % fallbackCourses.length];
    const prices = getPriceDisplay(course, fallback);

    return {
      title: course?.title || fallback.title,
      description: course?.headline || course?.description || fallback.description,
      image: course?.image || fallback.image,
      oldPrice: prices.oldPrice,
      price: prices.price,
      discount: getDiscount(prices.oldPrice, prices.price, fallback.discount),
    };
  });
}

export default function BestSellingCourses({ courses = [] }) {
  const displayCourses = toDisplayCourses(courses);

  return (
    <section className="best-courses" aria-label="Best selling courses">
      <div className="best-courses__ornament best-courses__ornament--left" aria-hidden="true" />
      <div className="best-courses__ornament best-courses__ornament--right" aria-hidden="true" />

      <div className="best-courses__header">
        <img src="/assets/navicon.png" alt="" className="best-courses__lotus" />
        <p>
          <span />
          Popular Learning Paths
          <span />
        </p>
        <h2>Best Selling Courses</h2>
        <div className="best-courses__divider" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>
        <p className="best-courses__intro">
          Transformative courses to deepen your spiritual journey
          <br />
          and awaken your true potential.
        </p>
      </div>

      <div className="best-courses__grid">
        {displayCourses.map((course) => (
          <article className="course-card" key={course.title}>
            <div className="course-card__image-wrap">
              <img src={course.image} alt="" className="course-card__image" />
            </div>

            <div className="course-card__lotus" aria-hidden="true">
              <img src="/assets/navicon.png" alt="" />
            </div>

            <div className="course-card__body">
              <h3>{course.title}</h3>
              <div className="course-card__mini-divider" aria-hidden="true">
                <span />
                <i />
                <span />
              </div>
              <p>{course.description}</p>

              <div className="course-card__offer">Limited Offer</div>

              <div className="course-card__price-box">
                <span className="course-card__old-price">{course.oldPrice}</span>
                <span className="course-card__price">{course.price}</span>
                <span className="course-card__discount">
                  <strong>{course.discount}</strong>
                  <span>Off</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
