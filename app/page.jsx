import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import OurServices from "@/components/OurServices";
import GuidancePanel from "@/components/GuidancePanel";
import SpiritualGuide from "@/components/SpiritualGuide";
import BestSellingCourses from "@/components/BestSellingCourses";
import TransformLearning from "@/components/TransformLearning";
import YouTubeCommunity from "@/components/YouTubeCommunity";
import SuccessStories from "@/components/SuccessStories";
import ContactUs from "@/components/ContactUs";
import Reveal from "@/components/Reveal";
import { fetchConsultations } from "@/lib/services/consultationService";
import { fetchCourses } from "@/lib/services/courseService";
import { fetchHealingModalities } from "@/lib/services/healingService";
import { fetchTestimonials } from "@/lib/services/testimonialService";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [courses, consultations, healings, testimonials] = await Promise.all([
    fetchCourses(),
    fetchConsultations(),
    fetchHealingModalities(),
    fetchTestimonials(),
  ]);

  return (
    <div className="home-motion flex flex-col items-center scroll-smooth">
      <section id="hero" className="w-full">
        <Hero />
      </section>

      <Reveal className="w-full" direction="up" offset={18} delay={0.08}>
        <section id="trust-marquee" className="w-full">
          <TrustMarquee />
        </section>
      </Reveal>

      <Reveal className="w-full" direction="up" offset={30}>
        <section id="guidance-panel" className="w-full">
          <GuidancePanel />
        </section>
      </Reveal>

      <Reveal className="w-full" direction="up" offset={30}>
        <section id="spiritual-guide" className="w-full">
          <SpiritualGuide />
        </section>
      </Reveal>

      <Reveal className="w-full" direction="up" offset={30}>
        <section id="best-selling-courses" className="w-full">
          <BestSellingCourses courses={courses} />
        </section>
      </Reveal>

      <Reveal className="w-full" direction="up" offset={30}>
        <section id="transform-learning" className="w-full">
          <TransformLearning />
        </section>
      </Reveal>

      <Reveal className="w-full" direction="up" offset={30}>
        <section id="our-services" className="w-full">
          <OurServices courses={courses} consultations={consultations} healings={healings} />
        </section>
      </Reveal>

      <Reveal className="w-full" direction="up" offset={30}>
        <section id="youtube-community" className="w-full">
          <YouTubeCommunity />
        </section>
      </Reveal>

      <Reveal className="w-full" direction="up" offset={30}>
        <section id="success-stories" className="w-full">
          <SuccessStories testimonials={testimonials} />
        </section>
      </Reveal>

      <Reveal className="w-full" direction="up" offset={30}>
        <section id="contact-us" className="w-full">
          <ContactUs />
        </section>
      </Reveal>
    </div>
  );
}
