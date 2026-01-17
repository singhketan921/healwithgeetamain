"use server";

import { getCatalogItemById } from "@/lib/repositories/catalogRepository";

const SETTINGS_ID = "spinwheel";

export async function fetchSpinWheelSettings() {
  const settings = await getCatalogItemById("spinwheel", SETTINGS_ID);
  return settings ?? { id: SETTINGS_ID, winProbability: 0.1 };
}
