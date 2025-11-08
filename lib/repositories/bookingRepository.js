import { withCollection } from "@/lib/repositories/baseRepository";

const BOOKING_STORAGE = Symbol.for("healwithgeeta.bookings");

function getMemoryStore() {
  if (!globalThis[BOOKING_STORAGE]) {
    globalThis[BOOKING_STORAGE] = [];
  }
  return globalThis[BOOKING_STORAGE];
}

export async function createBooking(payload) {
  const { collection } = await withCollection("bookings");
  const booking = {
    _id: crypto.randomUUID(),
    ...payload,
    createdAt: new Date().toISOString(),
  };

  if (collection) {
    await collection.insertOne({ ...booking, createdAt: new Date() });
  } else {
    getMemoryStore().push(booking);
  }

  return booking;
}

export async function listBookings(filter = {}) {
  const { collection } = await withCollection("bookings");
  if (collection) {
    const query = {};
    if (filter.type) {
      query.type = filter.type;
    }
    const docs = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray();
    return docs.map((doc) => ({
      ...doc,
      id: doc._id?.toString(),
    }));
  }

  const store = getMemoryStore();
  return store
    .filter((booking) => (filter.type ? booking.type === filter.type : true))
    .slice(-50)
    .reverse();
}
