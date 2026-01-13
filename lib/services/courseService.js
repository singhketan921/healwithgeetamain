'use server';

import { getAllCourses, getCourseById, getCourseFaq } from "@/lib/data/courses";
import {
  getCatalogItemById,
  listCatalogItems,
} from "@/lib/repositories/catalogRepository";

export async function fetchCourses() {
  if (!process.env.MONGODB_URI) {
    return getAllCourses();
  }
  try {
    return await listCatalogItems("courses");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Course fetch error:", message);
    return getAllCourses();
  }
}

export async function fetchCourseById(id) {
  if (!process.env.MONGODB_URI) {
    return getCourseById(id);
  }
  try {
    const stored = await getCatalogItemById("courses", id);
    return stored ?? getCourseById(id);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Course fetch error:", message);
    return getCourseById(id);
  }
}

export async function fetchCourseFaq() {
  return getCourseFaq();
}
