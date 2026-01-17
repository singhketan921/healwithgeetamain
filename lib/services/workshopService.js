"use server";

import {
  getCatalogItemById,
  listCatalogItems,
} from "@/lib/repositories/catalogRepository";

export async function fetchWorkshops() {
  return listCatalogItems("workshops");
}

export async function fetchWorkshopById(id) {
  return getCatalogItemById("workshops", id);
}
