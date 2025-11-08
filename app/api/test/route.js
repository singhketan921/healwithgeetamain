import clientPromise from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "healwithgeeta");
    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      message: "Connected to MongoDB!",
      collections,
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      {
        error: "Connection failed",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
