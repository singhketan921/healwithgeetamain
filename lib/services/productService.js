'use server';

import { getAllProducts, getProductById } from "@/lib/data/products";
import {
  getCatalogItemById,
  listCatalogItems,
} from "@/lib/repositories/catalogRepository";

export async function fetchProducts() {
  if (!process.env.MONGODB_URI) {
    return getAllProducts();
  }
  try {
    const products = await listCatalogItems("products");
    return products.length ? products : getAllProducts();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Product fetch error:", message);
    return getAllProducts();
  }
}

export async function fetchProductById(id) {
  if (!process.env.MONGODB_URI) {
    return getProductById(id);
  }
  try {
    return (await getCatalogItemById("products", id)) ?? getProductById(id);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Product fetch error:", message);
    return getProductById(id);
  }
}
