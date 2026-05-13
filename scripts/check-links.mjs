import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { resolve, dirname, extname } from "node:path";

const scanDirs = [
  "documentation",
  "playground",
  "exercises",
  "prompts",
  "workflow",
  "src/content",
];
const base = process.cwd();

// Patterns to find file references in markdown
// 1. Markdown link syntax: [text](path)
// 2. Bare path in backticks or text: `path/to/file.md` or path/to/file.md
const linkRegex = /\[([^\]]*)\]\(([^)]+)\)/g;
const barePathRegex = /`([^\s`]+\.(?:md|mjs|ts|tsx|json))`/g;
const externalProtocol = /^(https?:\/\/|mailto:)/i;
const anchorOnly = /^#/;
const templateVar = /\{\{/;

function isCodeBlock(text, index) {
  const before = text.slice(0, index);
  const fences = before.match(/```/g);
  return fences && fences.length % 2 === 1;
}

function couldBeFilePath(href) {
  if (externalProtocol.test(href)) return false;
  if (anchorOnly.test(href)) return false;
  if (templateVar.test(href)) return false;
  if (href.startsWith("/")) return false;
  if (!href.includes("/") && !href.includes(".")) return false;
  if (href.startsWith("npm ")) return false;
  if (href.startsWith(".") && !href.startsWith("..") && !href.startsWith("./")) return false;
  return true;
}

let exitCode = 0;
let totalLinks = 0;
let brokenLinks = 0;

function scanFile(filePath, relativePath) {
  if (extname(filePath) !== ".md") return;
  if (filePath.includes("node_modules")) return;

  try {
    const text = readFileSync(filePath, "utf8");
    const dir = dirname(filePath);
    let match;

    // Check markdown links [text](path)
    const linkRe = new RegExp(linkRegex.source, "g");
    while ((match = linkRe.exec(text)) !== null) {
      totalLinks++;
      const [, , href] = match;
      if (isCodeBlock(text, match.index)) continue;
      if (!couldBeFilePath(href)) continue;

      // Try resolving relative to file first, then to repo root
      const targetFromFile = resolve(dir, href);
      const targetFromRoot = resolve(base, href);
      if (existsSync(targetFromFile) || existsSync(targetFromRoot)) continue;

      console.error(`[check:links] BROKEN ref: ${relativePath} -> \`${href}\``);
      brokenLinks++;
      exitCode = 1;
    }

    // Check bare paths in backticks: `path/to/file.md`
    const bareRe = new RegExp(barePathRegex.source, "g");
    while ((match = bareRe.exec(text)) !== null) {
      totalLinks++;
      const [, href] = match;
      if (isCodeBlock(text, match.index)) continue;
      if (!couldBeFilePath(href)) continue;
      if (href.startsWith(".") && !href.startsWith("..") && !href.startsWith("./")) continue;

      const targetFromFile = resolve(dir, href);
      const targetFromRoot = resolve(base, href);
      if (existsSync(targetFromFile) || existsSync(targetFromRoot)) continue;

      console.error(`[check:links] BROKEN ref: ${relativePath} -> \`${href}\``);
      brokenLinks++;
      exitCode = 1;
    }
  } catch {
    // skip unreadable files
  }
}

function walkDir(dirPath) {
  let entries;
  try {
    entries = readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = resolve(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      walkDir(fullPath);
    } else if (entry.isFile()) {
      const relative = fullPath.startsWith(base) ? fullPath.slice(base.length + 1) : entry.name;
      scanFile(fullPath, relative);
    }
  }
}

for (const dir of scanDirs) {
  const dirPath = resolve(base, dir);
  if (existsSync(dirPath) && statSync(dirPath).isDirectory()) {
    walkDir(dirPath);
  }
}

if (exitCode === 0) {
  console.log(`[check:links] OK. ${brokenLinks} broken / ${totalLinks} total references.`);
}

process.exit(exitCode);
