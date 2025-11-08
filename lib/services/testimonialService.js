'use server';

import {
  getAllTestimonials,
  getTestimonialsByCategory,
} from "@/lib/data/testimonials";

export async function fetchTestimonials(filter = {}) {
  if (filter.category) {
    return getTestimonialsByCategory(filter.category);
  }
  return getAllTestimonials();
}
