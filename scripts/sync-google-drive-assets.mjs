import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";

const rootFolderId = process.argv[2] || "1J3nyYa50iHJCmnHVFHE8FcNkYaluPlp5";
const outputRoot = process.argv[3] || "public/assets/drive";
const mediaMimePattern = /^(image|video)\//;

const seenFolders = new Set();
const seenFiles = new Set();
const manifest = [];
const failures = [];

function runCurl(args, options = {}) {
  const result = spawnSync("curl", args, {
    encoding: options.encoding ?? "utf8",
    maxBuffer: options.maxBuffer ?? 200 * 1024 * 1024,
  });

  if (result.status !== 0) {
    const message = result.stderr || result.stdout || `curl failed with ${result.status}`;
    throw new Error(Buffer.isBuffer(message) ? message.toString("utf8").trim() : String(message).trim());
  }

  return result.stdout;
}

function fetchText(url) {
  return runCurl(["-L", "--fail", "--retry", "3", "--silent", "--show-error", url]);
}

function downloadFile(id, destination) {
  const tempFile = `${destination}.download`;
  const url = `https://drive.usercontent.google.com/download?id=${encodeURIComponent(id)}&export=download&confirm=t`;

  runCurl(["-L", "--fail", "--retry", "3", "--silent", "--show-error", url, "-o", tempFile], {
    encoding: "buffer",
    maxBuffer: 1024 * 1024,
  });

  if (!existsSync(tempFile) || statSync(tempFile).size === 0) {
    existsSync(tempFile) && unlinkSync(tempFile);
    throw new Error(`Downloaded empty file for ${id}`);
  }

  const firstBytes = readFileSync(tempFile, { encoding: "utf8", flag: "r" }).slice(0, 256);
  if (/^\s*<!doctype html|^\s*<html/i.test(firstBytes)) {
    unlinkSync(tempFile);
    throw new Error(`Google returned an HTML page instead of the file for ${id}`);
  }

  renameSync(tempFile, destination);
}

function decodeHtml(value) {
  return value
    .replace(/\\u003d/g, "=")
    .replace(/\\u0026/g, "&")
    .replace(/\\x22/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function safeName(value) {
  return decodeHtml(value)
    .replace(/[/:*?"<>|]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

function uniquePath(directory, filename) {
  const parsed = path.parse(filename);
  let candidate = path.join(directory, filename);
  let counter = 2;

  while (existsSync(candidate)) {
    candidate = path.join(directory, `${parsed.name} (${counter})${parsed.ext}`);
    counter += 1;
  }

  return candidate;
}

function extractTitle(html, fallback) {
  const title = html.match(/<title>(.*?)\s+[–-]\s+Google Drive<\/title>/i);
  return safeName(title?.[1] || fallback);
}

function extractRows(html) {
  const rows = new Map();
  const rowParts = html.split(/\]\s*,\s*\[\[null,"/);

  for (let index = 1; index < rowParts.length; index += 1) {
    const row = `[[null,"${rowParts[index]}`;
    const id = row.match(/\[\[null,"([A-Za-z0-9_-]{20,})"/);
    const mimeType = row.match(/"((?:image|video)\/[^"]+|application\/vnd\.google-apps\.folder)"/);
    const name = row.match(/\[\[\["([^"]+)",null,1\]\]/);

    if (!id || !mimeType || !name) continue;

    rows.set(id[1], {
      id: id[1],
      mimeType: mimeType[1],
      name: safeName(name[1]),
    });
  }

  return [...rows.values()];
}

function extractFolders(html) {
  return extractRows(html).filter((item) => item.mimeType === "application/vnd.google-apps.folder");
}

function extractFiles(html) {
  return extractRows(html).filter((item) => mediaMimePattern.test(item.mimeType));
}

async function syncFolder(folderId, localParent, fallbackName = folderId) {
  if (seenFolders.has(folderId)) return;
  seenFolders.add(folderId);

  const html = fetchText(`https://drive.google.com/drive/folders/${encodeURIComponent(folderId)}`);
  const folderName = extractTitle(html, fallbackName);
  const localFolder = path.join(localParent, folderName);
  mkdirSync(localFolder, { recursive: true });

  const folders = extractFolders(html).filter((folder) => folder.id !== folderId);
  const files = extractFiles(html).filter((file) => file.id !== folderId);

  console.log(`\n${folderName}`);
  console.log(`  folders: ${folders.length}, media files: ${files.length}`);

  for (const file of files) {
    if (seenFiles.has(file.id)) continue;
    seenFiles.add(file.id);

    const existingPath = path.join(localFolder, file.name);
    const localPath = existsSync(existingPath) ? existingPath : uniquePath(localFolder, file.name);

    try {
      if (!existsSync(localPath)) {
        console.log(`  download: ${file.name}`);
        downloadFile(file.id, localPath);
      } else {
        console.log(`  skip: ${file.name}`);
      }

      manifest.push({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        path: localPath,
        source: `https://drive.google.com/file/d/${file.id}/view`,
        status: "downloaded",
      });
    } catch (error) {
      console.warn(`  failed: ${file.name} (${error.message})`);
      failures.push({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        folder: localFolder,
        source: `https://drive.google.com/file/d/${file.id}/view`,
        status: "failed",
        error: error.message,
      });
    }
  }

  for (const folder of folders) {
    await syncFolder(folder.id, localFolder, folder.name);
  }
}

await syncFolder(rootFolderId, outputRoot);

const manifestPath = path.join(outputRoot, "_manifest.json");
mkdirSync(outputRoot, { recursive: true });
writeFileSync(manifestPath, `${JSON.stringify([...manifest, ...failures], null, 2)}\n`);

console.log(`\nSynced ${manifest.length} files into ${outputRoot}`);
console.log(`Failed ${failures.length} files`);
console.log(`Manifest: ${manifestPath}`);
