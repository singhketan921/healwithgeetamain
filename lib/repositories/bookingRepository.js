import { withCollection } from "@/lib/repositories/baseRepository";

const BOOKING_STORAGE = Symbol.for("healwithgeeta.bookings");
const BOOKING_INDEX_STORAGE = Symbol.for("healwithgeeta.bookingIndexes");

function getMemoryStore() {
  if (!globalThis[BOOKING_STORAGE]) {
    globalThis[BOOKING_STORAGE] = [];
  }
  return globalThis[BOOKING_STORAGE];
}

function getIndexState() {
  if (!globalThis[BOOKING_INDEX_STORAGE]) {
    globalThis[BOOKING_INDEX_STORAGE] = { consultationSlot: false };
  }
  return globalThis[BOOKING_INDEX_STORAGE];
}

async function ensureConsultationSlotIndex(collection) {
  const indexState = getIndexState();
  if (indexState.consultationSlot) {
    return;
  }
  await collection.createIndex(
    { type: 1, preferredDate: 1, preferredTime: 1 },
    {
      unique: true,
      partialFilterExpression: {
        type: "consultation",
        preferredDate: { $exists: true },
        preferredTime: { $exists: true },
      },
      name: "consultation_slot_unique",
    }
  );
  indexState.consultationSlot = true;
}

export async function findBookingBySlot({ type, preferredDate, preferredTime }) {
  const { collection } = await withCollection("bookings");
  if (collection) {
    return collection.findOne({ type, preferredDate, preferredTime });
  }

  const store = getMemoryStore();
  return (
    store.find(
      (booking) =>
        booking.type === type &&
        booking.preferredDate === preferredDate &&
        booking.preferredTime === preferredTime
    ) ?? null
  );
}

export async function createBooking(payload) {
  const { collection } = await withCollection("bookings");
  const booking = {
    _id: crypto.randomUUID(),
    ...payload,
    createdAt: new Date().toISOString(),
  };

  if (collection) {
    await ensureConsultationSlotIndex(collection);
    try {
      await collection.insertOne({ ...booking, createdAt: new Date() });
    } catch (error) {
      if (error?.code === 11000) {
        const conflictError = new Error("Booking slot already taken.");
        conflictError.code = "BOOKING_CONFLICT";
        throw conflictError;
      }
      throw error;
    }
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

export async function updateBooking(id, updates) {
  const { collection } = await withCollection("bookings");
  if (collection) {
    const result = await collection.findOneAndUpdate(
      { _id: id },
      { $set: updates },
      { returnDocument: "after" }
    );
    return result.value ?? null;
  }

  const store = getMemoryStore();
  const index = store.findIndex((booking) => booking._id === id || booking.id === id);
  if (index === -1) {
    return null;
  }
  store[index] = { ...store[index], ...updates };
  return store[index];
}

export async function deleteBooking(id) {
  const { collection } = await withCollection("bookings");
  if (collection) {
    await collection.deleteOne({ _id: id });
    return;
  }

  const store = getMemoryStore();
  const index = store.findIndex((booking) => booking._id === id || booking.id === id);
  if (index !== -1) {
    store.splice(index, 1);
  }
}
