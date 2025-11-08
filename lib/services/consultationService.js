'use server';

import {
  getAllConsultations,
  getConsultationById,
  getConsultationFaq,
} from "@/lib/data/consultations";

export async function fetchConsultations() {
  return getAllConsultations();
}

export async function fetchConsultationById(id) {
  return getConsultationById(id);
}

export async function fetchConsultationFaq() {
  return getConsultationFaq();
}
