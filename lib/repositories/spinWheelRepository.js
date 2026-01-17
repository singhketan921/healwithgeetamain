"use server";

import { withCollection } from "@/lib/repositories/baseRepository";

const SPIN_STORAGE_KEY = Symbol.for("healwithgeeta.spinWheelLeads");

function getStore() {
  if (!globalThis[SPIN_STORAGE_KEY]) {
    globalThis[SPIN_STORAGE_KEY] = [];
  }
  return globalThis[SPIN_STORAGE_KEY];
}

export async function persistSpinWheelLead(lead) {
  const { collection } = await withCollection("spinWheelLeads");
  const record = {
    ...lead,
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

export async function listSpinWheelLeads() {
  const { collection } = await withCollection("spinWheelLeads");
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
