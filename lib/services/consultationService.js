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
  return listCatalogItems("consultations");
}

export async function fetchConsultationById(id) {
  if (!process.env.MONGODB_URI) {
    return getConsultationById(id);
  }
  return getCatalogItemById("consultations", id);
}

export async function fetchConsultationFaq() {
  return getConsultationFaq();
}
