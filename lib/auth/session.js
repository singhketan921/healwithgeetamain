import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "admin_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function getSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    process.env.JWT_SECRET ||
    "dev-admin-secret"
  );
}

function signPayload(encodedPayload) {
  const hmac = crypto.createHmac("sha256", getSecret());
  hmac.update(encodedPayload);
  return hmac.digest("base64url");
}

function encodePayload(payload) {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

function decodePayload(encoded) {
  try {
    const json = Buffer.from(encoded, "base64url").toString("utf-8");
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function verifyToken(token) {
  if (!token || typeof token !== "string") {
    return null;
  }

  try {
    const [encodedPayload, signature] = token.split(".");
    if (!encodedPayload || !signature) {
      return null;
    }

    const expected = signPayload(encodedPayload);
    const provided = Buffer.from(signature, "base64url");
    const expectedBuffer = Buffer.from(expected, "base64url");
    if (
      provided.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(provided, expectedBuffer)
    ) {
      return null;
    }

    const payload = decodePayload(encodedPayload);
    if (!payload?.exp || Date.now() > payload.exp) {
      return null;
    }

    return payload;
  } catch (error) {
    console.error("Session verification failed:", error);
    return null;
  }
}

export function createSessionToken(user) {
  const payload = {
    sub: user.id ?? user._id ?? user.email,
    email: user.email,
    role: user.role ?? "admin",
    exp: Date.now() + SESSION_TTL_MS,
  };

  const encodedPayload = encodePayload(payload);
  const signature = signPayload(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export async function setSessionCookie(token) {
  const payload = verifyToken(token);
  const expires = payload?.exp ? new Date(payload.exp) : undefined;
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires,
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function requireAdminSession() {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }
  return session;
}
