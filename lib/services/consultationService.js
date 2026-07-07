'use server';

import {
  getAllConsultations,
  getConsultationById,
  getConsultationFaq,
} from "@/lib/data/consultations";
import {
  getCatalogItemById,
  listCatalogItems,
} from "@/lib/repositories/catalogRepository";

export async function fetchConsultations() {
  if (!process.env.MONGODB_URI) {
    return getAllConsultations();
  }
  try {
    const consultations = await listCatalogItems("consultations");
    return consultations.length ? consultations : getAllConsultations();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Consultation fetch error:", message);
    return getAllConsultations();
  }
}

export async function fetchConsultationById(id) {
  if (!process.env.MONGODB_URI) {
    return getConsultationById(id);
  }
  try {
    return (await getCatalogItemById("consultations", id)) ?? getConsultationById(id);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Consultation fetch error:", message);
    return getConsultationById(id);
  }
}

export async function fetchConsultationFaq() {
  return getConsultationFaq();
}
