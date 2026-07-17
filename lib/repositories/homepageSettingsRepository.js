import { withCollection } from "@/lib/repositories/baseRepository";

const STORE_KEY = Symbol.for("healwithgeeta.homepageSettings");
const SETTINGS_ID = "homepage";

function getStore() {
  if (!globalThis[STORE_KEY]) {
    globalThis[STORE_KEY] = null;
  }
  return globalThis[STORE_KEY];
}

function setStore(value) {
  globalThis[STORE_KEY] = value;
}

function normalizeSettings(doc) {
  return {
    configured: Boolean(doc?.configured),
    homeCourseIds: Array.isArray(doc?.homeCourseIds) ? doc.homeCourseIds : [],
    updatedAt:
      doc?.updatedAt instanceof Date
        ? doc.updatedAt.toISOString()
        : doc?.updatedAt,
  };
}

export async function getHomepageSettings() {
  const { collection } = await withCollection("homepageSettings");
  if (collection) {
    const doc = await collection.findOne({ _id: SETTINGS_ID });
    return normalizeSettings(doc);
  }

  return normalizeSettings(getStore());
}

export async function saveHomepageSettings(settings) {
  const now = new Date();
  const record = {
    _id: SETTINGS_ID,
    configured: Boolean(settings.configured),
    homeCourseIds: Array.isArray(settings.homeCourseIds) ? settings.homeCourseIds : [],
    updatedAt: now,
  };

  const { collection } = await withCollection("homepageSettings");
  if (collection) {
    await collection.updateOne(
      { _id: SETTINGS_ID },
      {
        $set: {
          configured: record.configured,
          homeCourseIds: record.homeCourseIds,
          updatedAt: record.updatedAt,
        },
        $setOnInsert: {
          createdAt: now,
        },
      },
      { upsert: true }
    );
    return normalizeSettings(record);
  }

  setStore({ ...record, updatedAt: now.toISOString() });
  return normalizeSettings(record);
}
