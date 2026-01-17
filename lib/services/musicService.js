"use server";

import {
  getCatalogItemById,
  listCatalogItems,
} from "@/lib/repositories/catalogRepository";

export async function fetchMusicTracks() {
  return listCatalogItems("music");
}

export async function fetchMusicTrackById(id) {
  return getCatalogItemById("music", id);
}
