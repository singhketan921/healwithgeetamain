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
  try {
    const healings = await listCatalogItems("healings");
    return healings.length ? healings : getAllHealingModalities();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Healing fetch error:", message);
    return getAllHealingModalities();
  }
}

export async function fetchHealingModalityById(id) {
  if (!process.env.MONGODB_URI) {
    return getHealingModalityById(id);
  }
  try {
    return (await getCatalogItemById("healings", id)) ?? getHealingModalityById(id);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Healing fetch error:", message);
    return getHealingModalityById(id);
  }
}
