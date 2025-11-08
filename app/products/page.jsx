import ProductsHero from "@/productscomponents/ProductsHero";
import ProductsSection from "@/productscomponents/ProductsSection";
import IntentionsSection from "@/productscomponents/IntentionsSection";
import EnergeticBlessingSection from "@/productscomponents/EnergeticBlessingSection";
import ConsultTestimonials from "@/consultationscomponents/ConsultTestimonials";
import CoursesFAQ from "@/coursescomponents/CoursesFAQ";
import BeginTransformationSection from "@/contactcomponents/BeginTransformationSection";
import { fetchTestimonials } from "@/lib/services/testimonialService";

export const metadata = {
  title: "Products • HealWithGeeta",
  description:
    "Browse curated crystals, ritual kits, and spiritual tools sourced directly from our Shopify storefront.",
};

export default async function ProductsPage() {
  const testimonials = await fetchTestimonials();

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <section id="hero" className="w-full">
        <ProductsHero />
      </section>

      <section id="products-grid" className="w-full">
        <ProductsSection />
      </section>

      <section id="intentions" className="w-full">
        <IntentionsSection />
      </section>

      <section id="energetic-blessing" className="w-full">
        <EnergeticBlessingSection />
      </section>

      <section id="testimonials" className="w-full">
        <ConsultTestimonials testimonials={testimonials} />
      </section>

      <section id="faq" className="w-full">
        <CoursesFAQ />
      </section>

      <section id="cta" className="w-full">
        <BeginTransformationSection />
      </section>
    </div>
  );
}
