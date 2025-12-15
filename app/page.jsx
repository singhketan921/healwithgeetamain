import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Learnings from "@/components/Learnings";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { fetchTestimonials } from "@/lib/services/testimonialService";
import { fetchShopifyProducts } from "@/lib/services/shopifyProductService";

export default async function HomePage() {
  const [testimonials, shopify] = await Promise.all([
    fetchTestimonials(),
    fetchShopifyProducts(6),
  ]);

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth">
      <section id="hero" className="w-full">
        <Hero />
      </section>

      <section id="about" className="w-full">
        <div className="section-panel section-panel--ivory">
          <About />
        </div>
      </section>

      <section id="products" className="w-full">
        <div className="section-panel section-panel--peach">
          <Products products={shopify.products} storeUrl={shopify.storeUrl} />
        </div>
      </section>

      <section id="services" className="w-full">
        <div className="section-panel section-panel--rose">
          <Services />
        </div>
      </section>

      <section id="learnings" className="w-full">
        <div className="section-panel section-panel--amber">
          <Learnings />
        </div>
      </section>

      <section id="testimonials" className="w-full">
        <div className="section-panel section-panel--peach">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      <section id="contact" className="w-full">
        <div className="section-panel section-panel--ivory">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
