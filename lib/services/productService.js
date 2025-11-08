'use server';

import { getAllProducts, getProductById } from "@/lib/data/products";

export async function fetchProducts() {
  return getAllProducts();
}

export async function fetchProductById(id) {
  return getProductById(id);
}
