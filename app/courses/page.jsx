import CoursesHero from "@/coursescomponents/CoursesHero";
import CoursesLearnings from "@/coursescomponents/CoursesLearnings";
import CertifiedSection from "@/coursescomponents/CertifiedSection";
import CoursesHowItWorks from "@/coursescomponents/CoursesHowItWorks";
import ConsultTestimonials from "@/consultationscomponents/ConsultTestimonials";
import CoursesFAQ from "@/coursescomponents/CoursesFAQ";
import LearningForm from "@/coursescomponents/LearningForm";
import { fetchCourses, fetchCourseFaq } from "@/lib/services/courseService";
import { fetchTestimonials } from "@/lib/services/testimonialService";

export default async function CoursesPage() {
  const [courses, faq, testimonials] = await Promise.all([
    fetchCourses(),
    fetchCourseFaq(),
    fetchTestimonials({ category: "courses" }),
  ]);

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      {/* <section id="hero" className="w-full">
        <CoursesHero />
      </section> */}

      <section id="learnings" className="w-full">
        <CoursesLearnings courses={courses} />
      </section>

      {/* <section id="products" className="w-full">
        <CertifiedSection />
      </section> */}

      <section id="courseshowitworks" className="w-full">
        <CoursesHowItWorks />
      </section>

      <section id="testimonials" className="w-full">
        <ConsultTestimonials testimonials={testimonials} />
      </section>

      <section id="contactfaq" className="w-full">
        <CoursesFAQ faqs={faq} />
      </section>

      <section id="form" className="w-full">
        <LearningForm />
      </section>
    </div>
  );
}
