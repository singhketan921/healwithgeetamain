"use client";

const courses = [
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

export default function BestSellingCourses() {
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
        {courses.map((course) => (
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
