"use server";

import {
  getCatalogItemById,
  listCatalogItems,
} from "@/lib/repositories/catalogRepository";

export async function fetchBlogs() {
  return listCatalogItems("blogs");
}

export async function fetchBlogById(id) {
  return getCatalogItemById("blogs", id);
}
