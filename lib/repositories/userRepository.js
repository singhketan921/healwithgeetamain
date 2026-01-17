import bcrypt from "bcryptjs";
import { withCollection } from "@/lib/repositories/baseRepository";

const USERS_COLLECTION = "users";
const MEMORY_STORE_KEY = Symbol.for("healwithgeeta.users");

const DEFAULT_ADMIN = {
  email: "admin@faithhealers.in",
  password: "Admin1234",
  role: "admin",
};

function getMemoryStore() {
  if (!globalThis[MEMORY_STORE_KEY]) {
    globalThis[MEMORY_STORE_KEY] = [];
  }
  return globalThis[MEMORY_STORE_KEY];
}

function normalizeUser(doc) {
  if (!doc) return null;
  return {
    ...doc,
    id: doc.id ?? doc._id ?? doc.email,
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

export async function findUserByEmail(email) {
  if (!email) return null;

  const { collection } = await withCollection(USERS_COLLECTION);
  if (collection) {
    const doc = await collection.findOne({ email: email.toLowerCase() });
    return normalizeUser(doc);
  }

  const store = getMemoryStore();
  const found = store.find(
    (user) => user.email?.toLowerCase() === email.toLowerCase()
  );
  return normalizeUser(found);
}

export async function upsertUserWithPassword({ email, password, role }) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const now = new Date();
  const passwordHash = await bcrypt.hash(password, 10);
  const record = {
    _id: email.toLowerCase(),
    email: email.toLowerCase(),
    passwordHash,
    role: role || "admin",
    updatedAt: now,
  };

  const { collection } = await withCollection(USERS_COLLECTION);
  if (collection) {
    await collection.updateOne(
      { _id: record._id },
      {
        $set: {
          ...record,
          updatedAt: now,
        },
        $setOnInsert: {
          createdAt: now,
        },
      },
      { upsert: true }
    );
    return normalizeUser({ ...record, createdAt: now });
  }

  const store = getMemoryStore();
  const index = store.findIndex(
    (user) => user.email?.toLowerCase() === record.email
  );
  const stored = normalizeUser({ ...record, createdAt: now.toISOString() });
  if (index >= 0) {
    store[index] = { ...store[index], ...stored };
  } else {
    store.push(stored);
  }
  return stored;
}

export async function ensureDefaultAdminUser() {
  const existing = await findUserByEmail(DEFAULT_ADMIN.email);
  if (existing?.passwordHash) {
    return existing;
  }

  return upsertUserWithPassword({
    email: DEFAULT_ADMIN.email,
    password: DEFAULT_ADMIN.password,
    role: DEFAULT_ADMIN.role,
  });
}
