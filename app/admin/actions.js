"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  deleteCatalogItem,
  upsertCatalogItem,
} from "@/lib/repositories/catalogRepository";
import { requireAdminSession } from "@/lib/auth/session";

function slugify(value) {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseList(value) {
  if (!value) {
    return [];
  }
  return value
    .toString()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseNumber(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function parseBoolean(value) {
  if (!value) {
    return false;
  }
  return value === "on" || value === "true" || value === true;
}

function normalizeText(value) {
  return value?.toString().trim() || "";
}

function normalizeCurrency(value) {
  const normalized = normalizeText(value);
  return normalized ? normalized.toUpperCase() : "USD";
}

function isNextRedirect(error) {
  return typeof error?.digest === "string" && error.digest.startsWith("NEXT_REDIRECT");
}

function parsePriceTiers(value, currency) {
  if (!value) {
    return [];
  }
  return value
    .toString()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const normalized = line.replace(/\s+/g, " ");
      const separatorIndex = normalized.search(/[:|-]/);
      if (separatorIndex === -1) {
        const amountOnly = parseNumber(normalized.replace(/[^\d.]/g, ""));
        return amountOnly
          ? { label: "Price", amount: amountOnly, currency }
          : null;
      }
      const label = normalized.slice(0, separatorIndex).trim();
      const amountRaw = normalized.slice(separatorIndex + 1).trim();
      const amount = parseNumber(amountRaw.replace(/[^\d.]/g, ""));
      if (!amount) {
        return null;
      }
      return {
        label: label || "Price",
        amount,
        currency,
      };
    })
    .filter(Boolean);
}

function parseFaqs(value) {
  if (!value) {
    return [];
  }
  return value
    .toString()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      let question = "";
      let answer = "";
      if (line.includes("|")) {
        const parts = line.split("|");
        question = parts[0].trim();
        answer = parts.slice(1).join("|").trim();
      } else if (/\s[-–—]\s/.test(line)) {
        const match = line.match(/\s[-–—]\s/);
        const index = match ? line.indexOf(match[0]) : -1;
        if (index >= 0) {
          question = line.slice(0, index).trim();
          answer = line.slice(index + match[0].length).trim();
        }
      } else if (line.includes(":")) {
        const index = line.indexOf(":");
        question = line.slice(0, index).trim();
        answer = line.slice(index + 1).trim();
      } else if (line.includes("?")) {
        const index = line.indexOf("?");
        question = line.slice(0, index + 1).trim();
        answer = line.slice(index + 1).trim();
      }
      if (!question || !answer) {
        return null;
      }
      return { question, answer };
    })
    .filter(Boolean);
}

async function storeUploadedImage(file) {
  if (!file || typeof file.arrayBuffer !== "function") {
    return "";
  }

  const bytes = await file.arrayBuffer();
  if (!bytes || !bytes.byteLength) {
    return "";
  }

  try {
    const { mkdir, writeFile } = await import("fs/promises");
    const path = await import("path");
    const ext = path.extname(file.name || "").toLowerCase() || ".png";
    const fileName = `${crypto.randomUUID()}${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, fileName), Buffer.from(bytes));
    return `/uploads/${fileName}`;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Image upload skipped:", message);
    return "";
  }
}

async function storeUploadedAsset(file) {
  if (!file || typeof file.arrayBuffer !== "function") {
    return "";
  }

  const bytes = await file.arrayBuffer();
  if (!bytes || !bytes.byteLength) {
    return "";
  }

  try {
    const { mkdir, writeFile } = await import("fs/promises");
    const path = await import("path");
    const ext = path.extname(file.name || "").toLowerCase() || ".bin";
    const fileName = `${crypto.randomUUID()}${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, fileName), Buffer.from(bytes));
    return `/uploads/${fileName}`;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Asset upload skipped:", message);
    return "";
  }
}

async function upsertCatalog(collection, formData, payload) {
  try {
    await requireAdminSession();
    const title = normalizeText(formData.get("title"));
    const idInput = normalizeText(formData.get("id"));
    const id = idInput || slugify(title);
    const returnTo = normalizeText(formData.get("returnTo"));

    if (!title || !id) {
      return { success: false };
    }

    await upsertCatalogItem(collection, {
      id,
      title,
      ...payload,
    });

    revalidatePath("/admin");
    if (collection === "consultations") {
      revalidatePath("/consultations");
    }
    if (collection === "courses") {
      revalidatePath("/courses");
    }
    if (collection === "healings") {
      revalidatePath("/healings");
    }
    if (collection === "workshops") {
      revalidatePath("/workshops");
      if (id) {
        revalidatePath(`/workshops/${id}`);
      }
    }
    if (collection === "music") {
      revalidatePath("/fhmusic");
    }
    if (collection === "spinwheel") {
      revalidatePath("/");
    }
    if (collection === "blogs") {
      revalidatePath("/blogs");
      if (id) {
        revalidatePath(`/blogs/${id}`);
      }
    }

    if (returnTo) {
      redirect(returnTo);
    }

    return { success: true };
  } catch (error) {
    if (isNextRedirect(error)) {
      throw error;
    }
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Admin save error:", message);
    return { success: false };
  }
}

async function removeCatalog(collection, formData) {
  try {
    await requireAdminSession();
    const id = normalizeText(formData.get("id"));
    const returnTo = normalizeText(formData.get("returnTo"));
    if (!id) {
      return { success: false };
    }

    await deleteCatalogItem(collection, id);
    revalidatePath("/admin");
    if (collection === "consultations") {
      revalidatePath("/consultations");
    }
    if (collection === "courses") {
      revalidatePath("/courses");
    }
    if (collection === "healings") {
      revalidatePath("/healings");
    }
    if (collection === "workshops") {
      revalidatePath("/workshops");
      if (id) {
        revalidatePath(`/workshops/${id}`);
      }
    }
    if (collection === "music") {
      revalidatePath("/fhmusic");
    }
    if (collection === "spinwheel") {
      revalidatePath("/");
    }
    if (collection === "blogs") {
      revalidatePath("/blogs");
      if (id) {
        revalidatePath(`/blogs/${id}`);
      }
    }

    if (returnTo) {
      redirect(returnTo);
    }

    return { success: true };
  } catch (error) {
    if (isNextRedirect(error)) {
      throw error;
    }
    const message =
      error instanceof Error ? error.message : JSON.stringify(error);
    console.error("Admin delete error:", message);
    return { success: false };
  }
}

export async function upsertConsultation(formData) {
  const imageUpload = await storeUploadedImage(formData.get("imageFile"));
  const payload = {
    price: parseNumber(formData.get("price")),
    currency: normalizeCurrency(formData.get("currency")),
    durationMinutes: parseNumber(formData.get("durationMinutes")),
    description: normalizeText(formData.get("description")),
    modalities: parseList(formData.get("modalities")),
    image: imageUpload || normalizeText(formData.get("image")),
  };

  return upsertCatalog("consultations", formData, payload);
}

export async function deleteConsultation(formData) {
  return removeCatalog("consultations", formData);
}

export async function upsertCourse(formData) {
  const imageUpload = await storeUploadedImage(formData.get("imageFile"));
  const currency = normalizeCurrency(formData.get("currency"));
  const payload = {
    level: normalizeText(formData.get("level")),
    durationMonths: parseNumber(formData.get("durationMonths")),
    format: normalizeText(formData.get("format")),
    price: parseNumber(formData.get("price")),
    currency,
    description: normalizeText(formData.get("description")),
    headline: normalizeText(formData.get("headline")),
    modules: parseList(formData.get("modules")),
    outcomes: parseList(formData.get("outcomes")),
    summary: normalizeText(formData.get("summary")),
    courseCovers: parseList(formData.get("courseCovers")),
    intuitionTraining: parseList(formData.get("intuitionTraining")),
    realWorldSkills: parseList(formData.get("realWorldSkills")),
    tarotSpreads: parseList(formData.get("tarotSpreads")),
    handsOnTraining: parseList(formData.get("handsOnTraining")),
    certificationDetails: parseList(formData.get("certificationDetails")),
    whyStudentsLove: parseList(formData.get("whyStudentsLove")),
    formatDetails: parseList(formData.get("formatDetails")),
    whoCanJoin: parseList(formData.get("whoCanJoin")),
    durationDetails: parseList(formData.get("durationDetails")),
    feesDetails: parseList(formData.get("feesDetails")),
    ctaText: normalizeText(formData.get("ctaText")),
    priceTiers: parsePriceTiers(formData.get("priceTiers"), currency),
    faqs: parseFaqs(formData.get("faqs")),
    image: imageUpload || normalizeText(formData.get("image")),
  };

  return upsertCatalog("courses", formData, payload);
}

export async function deleteCourse(formData) {
  return removeCatalog("courses", formData);
}

export async function upsertHealing(formData) {
  const imageUpload = await storeUploadedImage(formData.get("imageFile"));
  const payload = {
    investment: parseNumber(formData.get("investment")),
    currency: normalizeCurrency(formData.get("currency")),
    durationMinutes: parseNumber(formData.get("durationMinutes")),
    description: normalizeText(formData.get("description")),
    benefits: parseList(formData.get("benefits")),
    image: imageUpload || normalizeText(formData.get("image")),
  };

  return upsertCatalog("healings", formData, payload);
}

export async function deleteHealing(formData) {
  return removeCatalog("healings", formData);
}

export async function upsertWorkshop(formData) {
  const imageUpload = await storeUploadedImage(formData.get("heroImageFile"));
  const payload = {
    subtitle: normalizeText(formData.get("subtitle")),
    heroImage: imageUpload || normalizeText(formData.get("heroImage")),
    teaser: normalizeText(formData.get("teaser")),
    description: normalizeText(formData.get("description")),
    offerBadge: normalizeText(formData.get("offerBadge")),
    offerTitle: normalizeText(formData.get("offerTitle")),
    offerDescription: normalizeText(formData.get("offerDescription")),
    price: parseNumber(formData.get("price")),
    currency: normalizeCurrency(formData.get("currency")),
    seats: parseNumber(formData.get("seats")),
    startDate: normalizeText(formData.get("startDate")),
    startTime: normalizeText(formData.get("startTime")),
    timezone: normalizeText(formData.get("timezone")),
    durationMinutes: parseNumber(formData.get("durationMinutes")),
    location: normalizeText(formData.get("location")),
    ctaLabel: normalizeText(formData.get("ctaLabel")),
    ctaLink: normalizeText(formData.get("ctaLink")),
    highlights: parseList(formData.get("highlights")),
    agenda: parseList(formData.get("agenda")),
    includes: parseList(formData.get("includes")),
    whoItsFor: parseList(formData.get("whoItsFor")),
    hostName: normalizeText(formData.get("hostName")),
    hostTitle: normalizeText(formData.get("hostTitle")),
    hostBio: normalizeText(formData.get("hostBio")),
    hostImage: normalizeText(formData.get("hostImage")),
    active: parseBoolean(formData.get("active")),
  };

  return upsertCatalog("workshops", formData, payload);
}

export async function deleteWorkshop(formData) {
  return removeCatalog("workshops", formData);
}

export async function upsertMusicTrack(formData) {
  const audioUpload = await storeUploadedAsset(formData.get("audioFile"));
  const coverUpload = await storeUploadedImage(formData.get("coverImageFile"));
  const payload = {
    artist: normalizeText(formData.get("artist")),
    description: normalizeText(formData.get("description")),
    audioUrl: audioUpload || normalizeText(formData.get("audioUrl")),
    coverImage: coverUpload || normalizeText(formData.get("coverImage")),
    active: parseBoolean(formData.get("active")),
  };

  return upsertCatalog("music", formData, payload);
}

export async function deleteMusicTrack(formData) {
  return removeCatalog("music", formData);
}

export async function upsertSpinWheelSettings(formData) {
  const payload = {
    winProbability: parseNumber(formData.get("winProbability")),
  };

  return upsertCatalog("spinwheel", formData, payload);
}

export async function upsertBlog(formData) {
  const imageUpload = await storeUploadedImage(formData.get("imageFile"));
  const payload = {
    excerpt: normalizeText(formData.get("excerpt")),
    content: normalizeText(formData.get("content")),
    author: normalizeText(formData.get("author")),
    publishDate: normalizeText(formData.get("publishDate")),
    image: imageUpload || normalizeText(formData.get("image")),
    active: parseBoolean(formData.get("active")),
  };

  return upsertCatalog("blogs", formData, payload);
}

export async function deleteBlog(formData) {
  return removeCatalog("blogs", formData);
}
