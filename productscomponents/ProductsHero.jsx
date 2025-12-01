'use client';

import EditorialHero from "@/components/EditorialHero";

export default function ProductsHero() {
  return (
    <EditorialHero
      eyebrow="Collection No. 04"
      subtitle="Skin rituals / Aura tools / Slow commerce"
      title="Editorial objects for luminous rituals"
      description="Crystals, serums, and ceremonial kits surfaced directly from our Shopify studio - photographed, archived, and updated in real time so you can browse like a magazine feature."
      primary={{ label: "Browse Collection", href: "#products" }}
      secondary={{ label: "Visit Storefront", href: "#products" }}
      media="/assets/images/gems.png"
    />
  );
}
