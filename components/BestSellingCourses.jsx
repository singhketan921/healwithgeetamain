const driveBase = "/assets/drive/HEALWITHGEETA%20WEBSITE";

const courseImages = {
  moneyReiki: `${driveBase}/COURSES/MEDITATION%20SESSION%202.jpg`,
  reiki: `${driveBase}/HEALINGS/REIKI%20HEALING/DSC_0607.JPG`,
  learning: `${driveBase}/COURSES/GRAND%20MASTER%20BATCH%20.jpg`,
  tarot: `${driveBase}/COURSES/TAROT%20BATCH.jpg`,
  vastu: `${driveBase}/CONSULTATION/COUNSELLLING/COUNSELLING.JPG`,
  numerology: `${driveBase}/CONSULTATION/NUMEROLOGY%20CONSULTATION/NUMO%20CONSULTATION.jpeg`,
};

const fallbackCourses = [
  {
    title: "Tarot Foundations",
    description: "Uncover the timeless wisdom of the cards and connect deeply with your intuition.",
    image: courseImages.tarot,
    imagePosition: "50% 58%",
    oldPrice: "₹6,999",
    price: "₹4,999",
    discount: "29%",
  },
  {
    title: "Astrology & Life Path",
    description: "Decode the stars to understand your destiny and align with your life purpose.",
    image: courseImages.learning,
    imagePosition: "50% 42%",
    oldPrice: "₹8,499",
    price: "₹6,499",
    discount: "24%",
  },
  {
    title: "Reiki Healing Essentials",
    description: "Learn the art of energy healing and restore harmony within and around you.",
    image: courseImages.reiki,
    imagePosition: "56% 48%",
    oldPrice: "₹7,499",
    price: "₹5,499",
    discount: "27%",
  },
];

const featuredCourseImages = {
  "reiki-all-levels": { image: courseImages.reiki, imagePosition: "56% 48%" },
  "money-reiki": { image: courseImages.moneyReiki, imagePosition: "50% 43%" },
  "chakra-balancing": { image: courseImages.reiki, imagePosition: "56% 48%" },
  numerology: { image: courseImages.numerology, imagePosition: "50% 48%" },
  "mobile-numerology": { image: courseImages.numerology, imagePosition: "50% 48%" },
  "tarot-card-reading": { image: courseImages.tarot, imagePosition: "50% 58%" },
  vaastu: { image: courseImages.vastu, imagePosition: "42% 52%" },
};

const featuredImageFallbacks = [
  { image: courseImages.moneyReiki, imagePosition: "50% 43%" },
  { image: courseImages.learning, imagePosition: "50% 42%" },
  { image: courseImages.tarot, imagePosition: "50% 58%" },
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

function getFeaturedCourseImage(course, fallback, index) {
  const title = course?.title?.toLowerCase() || "";

  if (course?.id && featuredCourseImages[course.id]) {
    return featuredCourseImages[course.id];
  }
  if (/money\s*reiki/.test(title)) {
    return { image: courseImages.moneyReiki, imagePosition: "50% 43%" };
  }
  if (/reiki|healing|chakra/.test(title)) {
    return { image: courseImages.reiki, imagePosition: "56% 48%" };
  }
  if (/switchword|learning|mastery|class/.test(title)) {
    return { image: courseImages.learning, imagePosition: "50% 42%" };
  }
  if (/vastu|vaastu/.test(title)) {
    return { image: courseImages.vastu, imagePosition: "42% 52%" };
  }
  if (/astrology|numerology|life path/.test(title)) {
    return { image: courseImages.numerology, imagePosition: "50% 48%" };
  }
  if (/tarot/.test(title)) {
    return { image: courseImages.tarot, imagePosition: "50% 58%" };
  }

  return featuredImageFallbacks[index % featuredImageFallbacks.length] || {
    image: course?.image || fallback.image,
    imagePosition: fallback.imagePosition,
  };
}

function toDisplayCourses(items = [], { useExactCourses = false } = {}) {
  const sourceItems = useExactCourses
    ? items.slice(0, 3)
    : items.length
      ? [...items.slice(0, 3), ...fallbackCourses].slice(0, 3)
      : fallbackCourses;

  return sourceItems.map((course, index) => {
    const fallback = fallbackCourses[index % fallbackCourses.length];
    const prices = getPriceDisplay(course, fallback);
    const courseImage = getFeaturedCourseImage(course, fallback, index);

    return {
      title: course?.title || fallback.title,
      description: course?.headline || course?.description || fallback.description,
      image: courseImage.image || fallback.image,
      imagePosition: courseImage.imagePosition || fallback.imagePosition,
      oldPrice: prices.oldPrice,
      price: prices.price,
      discount: getDiscount(prices.oldPrice, prices.price, fallback.discount),
    };
  });
}

export default function BestSellingCourses({ courses = [], useExactCourses = false }) {
  const displayCourses = toDisplayCourses(courses, { useExactCourses });

  if (useExactCourses && displayCourses.length === 0) {
    return null;
  }

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
              <img
                src={course.image}
                alt=""
                className="course-card__image"
                style={course.imagePosition ? { objectPosition: course.imagePosition } : undefined}
              />
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
