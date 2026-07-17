"use server";

import { withCollection } from "@/lib/repositories/baseRepository";

const WORKSHOP_REGISTRATION_STORAGE_KEY = Symbol.for("healwithgeeta.workshopRegistrations");

function getStore() {
  if (!globalThis[WORKSHOP_REGISTRATION_STORAGE_KEY]) {
    globalThis[WORKSHOP_REGISTRATION_STORAGE_KEY] = [];
  }
  return globalThis[WORKSHOP_REGISTRATION_STORAGE_KEY];
}

export async function persistWorkshopRegistration(registration) {
  const { collection } = await withCollection("workshopRegistrations");
  const record = {
    ...registration,
    createdAt: new Date().toISOString(),
  };

  if (collection) {
    await collection.insertOne({
      ...record,
      _id: record.id,
      createdAt: new Date(record.createdAt),
    });
  } else {
    getStore().push(record);
  }

  return record;
}

export async function listWorkshopRegistrations() {
  const { collection } = await withCollection("workshopRegistrations");
  if (collection) {
    const docs = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();
    return docs.map((doc) => ({
      ...doc,
      id: doc.id ?? doc._id?.toString(),
      createdAt:
        doc.createdAt instanceof Date
          ? doc.createdAt.toISOString()
          : doc.createdAt,
    }));
  }

  return [...getStore()].reverse();
}
