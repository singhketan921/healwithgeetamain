"use server";

import {
  getHomepageSettings,
  saveHomepageSettings,
} from "@/lib/repositories/homepageSettingsRepository";

export async function fetchHomepageSettings() {
  try {
    return await getHomepageSettings();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Homepage settings fetch error:", message);
    return { configured: false, homeCourseIds: [] };
  }
}

export async function updateHomepageSettings(settings) {
  return saveHomepageSettings(settings);
}

export async function resolveHomeCourses(courses = []) {
  const settings = await fetchHomepageSettings();

  if (!settings.configured) {
    return {
      courses,
      hasCustomHomeCourseSelection: false,
      settings,
    };
  }

  const byId = new Map(courses.map((course) => [course.id ?? course._id, course]));
  const selectedCourses = settings.homeCourseIds
    .map((id) => byId.get(id))
    .filter(Boolean);

  return {
    courses: selectedCourses,
    hasCustomHomeCourseSelection: true,
    settings,
  };
}
