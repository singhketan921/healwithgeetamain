'use server';

import { getAllCourses, getCourseById, getCourseFaq } from "@/lib/data/courses";

export async function fetchCourses() {
  return getAllCourses();
}

export async function fetchCourseById(id) {
  return getCourseById(id);
}

export async function fetchCourseFaq() {
  return getCourseFaq();
}
