#!/usr/bin/env node
// scripts/check-no-emoji.mjs
// Walks src/, public/, index.html, api/ and README.md.
// Lines with emoji inside src/components/blogs/ or src/data/blogsData.js
// are reported under "blog (left untouched)" and do NOT fail the script.
// Any other emoji hit prints file:line and the script exits with code 1.

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

// Regex matches Extended_Pictographic / Emoji_Presentation / VS16 / ZWJ / enclosing keycap
// but NOT copyright ©, registered ®, trademark ™, or plain arrows ←→↑↓
const EMOJI_RE =
  /(?![\u00A9\u00AE\u2122\u2190-\u2199])\p{Extended_Pictographic}|\p{Emoji_Presentation}|\uFE0F|\u200D|\u20E3/u;

const SCAN_ROOTS = ["src", "public", "api"];
const SCAN_SINGLES = ["index.html", "README.md"];

const BLOG_PATHS = [
  path.join(ROOT, "src", "components", "blogs"),
  path.join(ROOT, "src", "data", "blogsData.js"),
];

function isBlog(filePath) {
  return BLOG_PATHS.some((bp) => filePath.startsWith(bp));
}

const ALLOWED_EXTS = new Set([
  ".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs",
  ".html", ".css", ".svg", ".txt", ".md", ".json",
]);

function* walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // skip node_modules, .git, dist
      if (["node_modules", ".git", "dist"].includes(entry.name)) continue;
      yield* walkDir(full);
    } else if (entry.isFile() && ALLOWED_EXTS.has(path.extname(entry.name))) {
      yield full;
    }
  }
}

function* collectFiles() {
  for (const r of SCAN_ROOTS) {
    yield* walkDir(path.join(ROOT, r));
  }
  for (const s of SCAN_SINGLES) {
    const full = path.join(ROOT, s);
    if (fs.existsSync(full)) yield full;
  }
}

const hits = [];      // { file, line, text } — will fail
const blogHits = [];  // { file, line, text } — informational only

for (const file of collectFiles()) {
  // Skip this script itself
  if (file === path.join(ROOT, "scripts", "check-no-emoji.mjs")) continue;

  let lines;
  try {
    lines = fs.readFileSync(file, "utf8").split("\n");
  } catch {
    continue;
  }

  for (let i = 0; i < lines.length; i++) {
    if (EMOJI_RE.test(lines[i])) {
      const rel = path.relative(ROOT, file).replace(/\\/g, "/");
      const entry = { file: rel, line: i + 1, text: lines[i].trim() };
      if (isBlog(file)) {
        blogHits.push(entry);
      } else {
        hits.push(entry);
      }
    }
  }
}

// ---- Output ----
if (blogHits.length > 0) {
  console.log("\n=== blog (left untouched) ===");
  for (const h of blogHits) {
    console.log(`  ${h.file}:${h.line}  ${h.text}`);
  }
}

if (hits.length > 0) {
  console.log("\n=== EMOJI VIOLATIONS (must fix) ===");
  for (const h of hits) {
    console.log(`  ${h.file}:${h.line}  ${h.text}`);
  }
  console.log(`\n✗ ${hits.length} violation(s) found. Fix them and re-run.\n`);
  process.exit(1);
} else {
  console.log("\n✓ No emoji violations found outside blog files.\n");
  process.exit(0);
}
