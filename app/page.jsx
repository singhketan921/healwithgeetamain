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

export default function HomePage() {
  return (
    <div className="flex flex-col items-center scroll-smooth">
      <section id="hero" className="w-full">
        <Hero />
      </section>

      <section id="trust-marquee" className="w-full">
        <TrustMarquee />
      </section>

      <section id="guidance-panel" className="w-full">
        <GuidancePanel />
      </section>

      <section id="spiritual-guide" className="w-full">
        <SpiritualGuide />
      </section>

      <section id="best-selling-courses" className="w-full">
        <BestSellingCourses />
      </section>

      <section id="transform-learning" className="w-full">
        <TransformLearning />
      </section>

      <section id="our-services" className="w-full">
        <OurServices />
      </section>

      <section id="youtube-community" className="w-full">
        <YouTubeCommunity />
      </section>

      <section id="success-stories" className="w-full">
        <SuccessStories />
      </section>

      <section id="contact-us" className="w-full">
        <ContactUs />
      </section>
    </div>
  );
}
