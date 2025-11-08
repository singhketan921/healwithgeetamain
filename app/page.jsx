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
        <About />
      </section>

      <section id="products" className="w-full">
        <Products products={shopify.products} storeUrl={shopify.storeUrl} />
      </section>

      <section id="services" className="w-full">
        <Services />
      </section>

      <section id="learnings" className="w-full">
        <Learnings />
      </section>

      <section id="testimonials" className="w-full">
        <Testimonials testimonials={testimonials} />
      </section>

      <section id="contact" className="w-full">
        <ContactForm />
      </section>
    </div>
  );
}
