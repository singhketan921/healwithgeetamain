const products = Object.freeze([
  {
    id: "moonstone-ritual-set",
    title: "Moonstone Ritual Set",
    subtitle: "For New Beginnings",
    type: "Crystal Kit",
    price: 38,
    currency: "USD",
    description:
      "Hand-selected moonstone palm stone, altar cloth, and guided ritual card to harmonise emotional cycles.",
    image: "/assets/images/moonstone.jpg",
  },
  {
    id: "cosmic-tea-blend",
    title: "Cosmic Tea Blend",
    subtitle: "Ayurvedic Herbal Infusion",
    type: "Herbal Blend",
    price: 22,
    currency: "USD",
    description:
      "Tulsi, rose, ashwagandha, and blue lotus infusion to soothe the nervous system and deepen meditation.",
    image: "/assets/images/moonstone.jpg",
  },
  {
    id: "chakra-oil-set",
    title: "Chakra Anointing Oils",
    subtitle: "Seven Chakra Collection",
    type: "Aromatherapy",
    price: 54,
    currency: "USD",
    description:
      "Anointing oils infused with crystal essences and essential oils aligned to each chakra frequency.",
    image: "/assets/images/moonstone.jpg",
  },
]);

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((item) => item.id === id) ?? null;
}
