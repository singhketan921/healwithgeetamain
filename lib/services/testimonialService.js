'use server';

import {
  getAllTestimonials,
  getTestimonialsByCategory,
} from "@/lib/data/testimonials";
import { listCatalogItems } from "@/lib/repositories/catalogRepository";

export async function fetchTestimonials(filter = {}) {
  if (process.env.MONGODB_URI) {
    try {
      const testimonials = await listCatalogItems("testimonials");
      if (testimonials.length) {
        return filter.category
          ? testimonials.filter((item) => item.category === filter.category)
          : testimonials;
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : JSON.stringify(error);
      console.error("Testimonial fetch error:", message);
    }
  }

  if (filter.category) {
    return getTestimonialsByCategory(filter.category);
  }
  return getAllTestimonials();
}
