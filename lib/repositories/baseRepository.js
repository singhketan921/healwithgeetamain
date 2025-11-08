import { getMongoDb } from "@/lib/db/mongoClient";

export async function withCollection(collectionName) {
  const db = await getMongoDb();
  if (!db) {
    return { collection: null };
  }

  return {
    collection: db.collection(collectionName),
  };
}
