import clientPromise from "@/lib/db/mongodb";

let cachedDb = null;

export async function getMongoDb() {
  if (!process.env.MONGODB_URI) {
    return null;
  }

  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await clientPromise;
    cachedDb = client.db(process.env.MONGODB_DB || "healwithgeeta");
    return cachedDb;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("MongoDB connection error:", message);
    return null;
  }
}
