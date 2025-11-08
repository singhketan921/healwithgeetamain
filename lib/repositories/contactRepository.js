'use server';

import { withCollection } from "@/lib/repositories/baseRepository";

const CONTACT_STORAGE_KEY = Symbol.for("healwithgeeta.contactMessages");

function getStore() {
  if (!globalThis[CONTACT_STORAGE_KEY]) {
    globalThis[CONTACT_STORAGE_KEY] = [];
  }
  return globalThis[CONTACT_STORAGE_KEY];
}

export async function persistContactMessage(message) {
  const { collection } = await withCollection("contactMessages");
  const record = {
    ...message,
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

export async function listContactMessages() {
  const { collection } = await withCollection("contactMessages");
  if (collection) {
    const docs = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(50)
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
