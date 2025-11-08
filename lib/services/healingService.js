'use server';

import {
  getAllHealingModalities,
  getHealingModalityById,
} from "@/lib/data/healings";

export async function fetchHealingModalities() {
  return getAllHealingModalities();
}

export async function fetchHealingModalityById(id) {
  return getHealingModalityById(id);
}
