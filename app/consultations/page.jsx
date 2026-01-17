import ConsultHero from "@/consultationscomponents/ConsultHero";
import ConsultationOfferings from "@/consultationscomponents/ConsultationOfferings";
import HowItWorks from "@/consultationscomponents/HowItWorks";
import ConsultTestimonials from "@/consultationscomponents/ConsultTestimonials";
import ExpectAndFAQ from "@/consultationscomponents/ExpectAndFAQ";
import BookConsultation from "@/consultationscomponents/BookConsultation";
import {
  fetchConsultations,
  fetchConsultationFaq,
} from "@/lib/services/consultationService";
import { fetchTestimonials } from "@/lib/services/testimonialService";

export default async function ConsultationsPage() {
  const [consultations, faq, testimonials] = await Promise.all([
    fetchConsultations(),
    fetchConsultationFaq(),
    fetchTestimonials({ category: "consultations" }),
  ]);

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      {/* <section id="hero" className="w-full">
        <ConsultHero />
      </section> */}

      <section id="consultationOfferings" className="w-full">
        <ConsultationOfferings offerings={consultations} />
      </section>

      <section id="howitworks" className="w-full">
        <HowItWorks />
      </section>

      <section id="testimonials" className="w-full">
        <ConsultTestimonials testimonials={testimonials} />
      </section>

      <section id="expectandfaqs" className="w-full">
        <ExpectAndFAQ faqs={faq} />
      </section>

      <section id="bookconsultation" className="w-full">
        <BookConsultation offerings={consultations} />
      </section>
    </div>
  );
}
