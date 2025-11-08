const testimonials = Object.freeze([
  {
    id: "john-doe",
    name: "John Doe",
    role: "Software Engineer, New York",
    rating: 4.5,
    quote:
      "Geeta's astrological reading gave me clarity I've been seeking for years. Her insights were profound and practical.",
    category: "consultations",
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    role: "Artist, Los Angeles",
    rating: 5,
    quote:
      "Her energy and compassion were truly healing. I walked away feeling centered, empowered, and deeply understood.",
    category: "healing",
  },
  {
    id: "michael-lee",
    name: "Michael Lee",
    role: "Entrepreneur, London",
    rating: 4.5,
    quote:
      "Geeta helped me connect with my spiritual side in ways I never imagined. The guidance was powerful and transformative.",
    category: "courses",
  },
  {
    id: "sophia-patel",
    name: "Sophia Patel",
    role: "Therapist, Mumbai",
    rating: 5,
    quote:
      "A truly divine experience—full of insight, peace, and light. Highly recommend her sessions to anyone seeking clarity.",
    category: "consultations",
  },
]);

export function getAllTestimonials() {
  return testimonials;
}

export function getTestimonialsByCategory(category) {
  return testimonials.filter((item) => item.category === category);
}
