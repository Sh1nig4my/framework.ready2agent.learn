import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const manifestPath = resolve(process.cwd(), "documentation/product-manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const forbiddenPatterns = manifest.forbiddenEnterpriseTerms.map((entry) => ({
  pattern: new RegExp(entry.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"),
  label: entry.label,
}));

const scanDirs = ["src", "documentation", "prompts", "playground", "exercises", "workflow"];
const allowedExts = [".md", ".ts", ".tsx"];

function isCodeBlock(text, index) {
  const before = text.slice(0, index);
  const fences = before.match(/```/g);
  return fences && fences.length % 2 === 1;
}

function isUrl(text, index) {
  const lineStart = text.lastIndexOf("\n", index);
  const lineEnd = text.indexOf("\n", index);
  const lineText = text.slice(lineStart + 1, lineEnd > 0 ? lineEnd : undefined);
  return /https?:\/\//.test(lineText);
}

function isDocumentationMention(text, index) {
  const before = text.slice(Math.max(0, index - 400), index + 60).toLowerCase();
  const allowedSignals = [
    "non ", "no ", "nessun", "senza ", "evitare", "vietat",
    "not includ", "out-of-scope", "out of scope",
    "stop condition", "non includere", "non introdurre",
    "in scope di learn", "diviet",
  ];

  if (allowedSignals.some((signal) => before.includes(signal))) return true;

  const headingStart = text.lastIndexOf("\n## ", index);
  if (headingStart >= 0) {
    const headingLine = text.slice(headingStart, index).toLowerCase();
    const headingSignals = ["not includ", "non ", "out-of-scope", "out of scope", "stop condition", "diviet", "avvertenz", "hard boundar", "errori comuni"];
    return headingSignals.some((signal) => headingLine.includes(signal));
  }

  return false;
}

let exitCode = 0;

function scanFile(filePath, relativePath) {
  const ext = filePath.slice(filePath.lastIndexOf("."));
  if (!allowedExts.includes(ext)) return;
  if (filePath.includes("node_modules")) return;

  try {
    const text = readFileSync(filePath, "utf8");

    for (const { pattern, label } of forbiddenPatterns) {
      let match;
      const re = new RegExp(pattern.source, "gi");
      while ((match = re.exec(text)) !== null) {
        if (isCodeBlock(text, match.index)) continue;
        if (isUrl(text, match.index)) continue;
        if (ext === ".md" && isDocumentationMention(text, match.index)) continue;
        console.error(`[check:boundary] ${relativePath}:${getLineNumber(text, match.index)} - "${label}" found: "${match[0].trim()}"`);
        exitCode = 1;
      }
    }
  } catch {
    // skip unreadable files
  }
}

function getLineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

function walkDir(dirPath, basePath) {
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
      walkDir(fullPath, basePath);
    } else if (entry.isFile()) {
      const relative = fullPath.startsWith(basePath) ? fullPath.slice(basePath.length + 1) : entry.name;
      scanFile(fullPath, relative);
    }
  }
}

const base = process.cwd();
for (const dir of scanDirs) {
  const dirPath = resolve(base, dir);
  if (existsSync(dirPath) && statSync(dirPath).isDirectory()) {
    walkDir(dirPath, base);
  }
}

if (exitCode === 0) {
  console.log("[check:boundary] OK. No forbidden enterprise terms detected.");
}

process.exit(exitCode);
