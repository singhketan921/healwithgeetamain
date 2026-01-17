import HealingHero from "@/healingscomponents/HealingHero";
import HealingModalities from "@/healingscomponents/HealingModalities";
import BenefitsOfHealing from "@/healingscomponents/BenefitsOfHealing";
import ConsultTestimonials from "@/consultationscomponents/ConsultTestimonials";
import CoursesFAQ from "@/coursescomponents/CoursesFAQ";
import BookHealingSession from "@/healingscomponents/BookHealingSession";
import { fetchHealingModalities } from "@/lib/services/healingService";
import { fetchCourseFaq } from "@/lib/services/courseService";
import { fetchTestimonials } from "@/lib/services/testimonialService";

export default async function HealingsPage() {
  const [modalities, faq, testimonials] = await Promise.all([
    fetchHealingModalities(),
    fetchCourseFaq(),
    fetchTestimonials({ category: "healing" }),
  ]);

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      {/* <section id="hero" className="w-full">
        <HealingHero />
      </section> */}

      <section id="consultationOfferings" className="w-full">
        <HealingModalities modalities={modalities} />
      </section>

      <section id="howitworks" className="w-full">
        <BenefitsOfHealing />
      </section>

      <section id="testimonials" className="w-full">
        <ConsultTestimonials testimonials={testimonials} />
      </section>

      <section id="contactfaq" className="w-full">
        <CoursesFAQ faqs={faq} />
      </section>

      <section id="bookconsultation" className="w-full">
        <BookHealingSession />
      </section>
    </div>
  );
}
