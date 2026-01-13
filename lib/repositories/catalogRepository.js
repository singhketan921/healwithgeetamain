import { ObjectId } from "mongodb";
import { withCollection } from "@/lib/repositories/baseRepository";

const STORE_KEYS = {
  consultations: Symbol.for("healwithgeeta.consultations"),
  courses: Symbol.for("healwithgeeta.courses"),
  healings: Symbol.for("healwithgeeta.healings"),
};

function getStore(collectionName) {
  const key = STORE_KEYS[collectionName];
  if (!key) {
    throw new Error(`Unknown collection: ${collectionName}`);
  }
  if (!globalThis[key]) {
    globalThis[key] = [];
  }
  return globalThis[key];
}

function normalizeDoc(doc) {
  return {
    ...doc,
    _id: doc._id?.toString(),
    id: doc.id ?? doc._id?.toString(),
    createdAt:
      doc.createdAt instanceof Date
        ? doc.createdAt.toISOString()
        : doc.createdAt,
    updatedAt:
      doc.updatedAt instanceof Date
        ? doc.updatedAt.toISOString()
        : doc.updatedAt,
  };
}

export async function listCatalogItems(collectionName) {
  const { collection } = await withCollection(collectionName);
  if (collection) {
    const docs = await collection
      .find({})
      .sort({ updatedAt: -1, createdAt: -1 })
      .toArray();
    return docs.map(normalizeDoc);
  }

  return [...getStore(collectionName)];
}

export async function getCatalogItemById(collectionName, id) {
  if (!id) {
    return null;
  }

  const { collection } = await withCollection(collectionName);
  if (collection) {
    const queries = [{ _id: id }, { id }];
    if (ObjectId.isValid(id)) {
      queries.push({ _id: new ObjectId(id) });
    }
    const doc = await collection.findOne({ $or: queries });
    return doc ? normalizeDoc(doc) : null;
  }

  const store = getStore(collectionName);
  return store.find((item) => item.id === id) ?? null;
}

export async function upsertCatalogItem(collectionName, item) {
  const now = new Date();
  const record = {
    ...item,
    updatedAt: now.toISOString(),
  };

  const { collection } = await withCollection(collectionName);
  if (collection) {
    await collection.updateOne(
      { _id: record.id },
      {
        $set: {
          ...record,
          _id: record.id,
          updatedAt: now,
        },
        $setOnInsert: {
          createdAt: now,
        },
      },
      { upsert: true }
    );
    return record;
  }

  const store = getStore(collectionName);
  const index = store.findIndex((entry) => entry.id === record.id);
  if (index >= 0) {
    store[index] = { ...store[index], ...record };
  } else {
    store.unshift({ ...record, createdAt: now.toISOString() });
  }

  return record;
}

export async function deleteCatalogItem(collectionName, id) {
  const { collection } = await withCollection(collectionName);
  if (collection) {
    await collection.deleteOne({ _id: id });
    return;
  }

  const store = getStore(collectionName);
  const index = store.findIndex((entry) => entry.id === id);
  if (index >= 0) {
    store.splice(index, 1);
  }
}
