'use server';

import {
  getAllHealingModalities,
  getHealingModalityById,
} from "@/lib/data/healings";
import {
  getCatalogItemById,
  listCatalogItems,
} from "@/lib/repositories/catalogRepository";

export async function fetchHealingModalities() {
  if (!process.env.MONGODB_URI) {
    return getAllHealingModalities();
  }
  return listCatalogItems("healings");
}

export async function fetchHealingModalityById(id) {
  if (!process.env.MONGODB_URI) {
    return getHealingModalityById(id);
  }
  return getCatalogItemById("healings", id);
}
