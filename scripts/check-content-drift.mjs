import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const base = process.cwd();
const manifestPath = resolve(base, "documentation/product-manifest.json");

if (!existsSync(manifestPath)) {
  console.error("[check:content-drift] MISSING: documentation/product-manifest.json");
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
let exitCode = 0;

const manifestVersion = manifest.version;

// --- 1. Validate src/content/version.ts matches manifest ---
const versionTsPath = resolve(base, "src/content/version.ts");
if (!existsSync(versionTsPath)) {
  console.error(`[check:content-drift] MISSING: src/content/version.ts`);
  exitCode = 1;
} else {
  const versionTs = readFileSync(versionTsPath, "utf8");
  const tsVersion = versionTs.match(/APP_VERSION\s*=\s*"([^"]+)"/);
  if (!tsVersion) {
    console.error(`[check:content-drift] Could not extract APP_VERSION from src/content/version.ts`);
    exitCode = 1;
  } else if (tsVersion[1] !== manifestVersion) {
    console.error(`[check:content-drift] VERSION DRIFT: src/content/version.ts says "${tsVersion[1]}", manifest says "${manifestVersion}"`);
    exitCode = 1;
  }
}

// --- 2. Scan all .md files for VERSION: pattern ---
const versionRegex = /VERSION:\s*(v[\d.]+)/g;

function walkMdFiles(dirPath) {
  const results = [];
  try {
    const entries = readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = resolve(dirPath, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".git" || entry.name === ".next") continue;
        results.push(...walkMdFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        results.push(fullPath);
      }
    }
  } catch {
    // skip unreadable
  }
  return results;
}

const rootMds = resolve(base).split("\\").pop() === "framework.ready2agent.learn"
  ? [resolve(base, "README.md")]
  : [];

const allMdFiles = [...rootMds, ...walkMdFiles(resolve(base))];
const checkedMdFiles = new Set();

for (const filePath of allMdFiles) {
  const relative = filePath.startsWith(base) ? filePath.slice(base.length + 1) : filePath;
  if (relative.startsWith("node_modules") || relative.startsWith(".git") || relative.startsWith(".next")) continue;
  if (relative.startsWith("documentation/reports")) continue; // historical reports
  if (!existsSync(filePath)) continue;

  const content = readFileSync(filePath, "utf8");
  let match;
  versionRegex.lastIndex = 0;
  while ((match = versionRegex.exec(content)) !== null) {
    checkedMdFiles.add(relative);
    const foundVersion = match[1];
    if (foundVersion !== manifestVersion) {
      console.error(`[check:content-drift] VERSION DRIFT: ${relative} says "VERSION: ${foundVersion}", manifest says "${manifestVersion}"`);
      exitCode = 1;
    }
  }
}

// --- 3. Quality gate consistency (unchanged) ---
const gateDocs = [
  { path: resolve(base, "AGENTS.md"), label: "AGENTS.md" },
  { path: resolve(base, "documentation/R2A_LEARN_full-ai-context.md"), label: "R2A_LEARN_full-ai-context.md" },
  { path: resolve(base, "documentation/method/quality-gates.md"), label: "quality-gates.md" },
  { path: resolve(base, "documentation/quickstart/agent_start_here.md"), label: "agent_start_here.md" },
  { path: resolve(base, "README.md"), label: "README.md" },
];

const expectedGates = [
  "npm run lint",
  "npm run build",
  "npm run typecheck",
  "npm run check:structure",
  "npm run check:prompts",
  "npm run check:boundary",
  "npm run check:routes",
  "npm run check:links",
];

for (const doc of gateDocs) {
  if (!existsSync(doc.path)) {
    console.error(`[check:content-drift] MISSING: ${doc.label}`);
    exitCode = 1;
    continue;
  }
  const content = readFileSync(doc.path, "utf8");
  const foundGates = expectedGates.filter((gate) => content.includes(gate));
  if (foundGates.length === 0) continue;
  if (foundGates.length < expectedGates.length) {
    const missing = expectedGates.filter((g) => !foundGates.includes(g));
    console.error(`[check:content-drift] GATE DRIFT: ${doc.label} missing: ${missing.join(", ")}`);
    exitCode = 1;
  }
}

// --- 4. Boundary consistency (unchanged) ---
const agentsPath = resolve(base, "AGENTS.md");
if (existsSync(agentsPath)) {
  const agents = readFileSync(agentsPath, "utf8");
  const hardBoundariesSection = agents.split("## Hard boundaries")[1]?.split("##")[0] || "";
  if (hardBoundariesSection) {
    const manifestTerms = manifest.forbiddenEnterpriseTerms?.map((t) => t.label.toLowerCase()) || [];
    for (const term of manifestTerms) {
      if (!hardBoundariesSection.toLowerCase().includes(term)) {
        console.error(`[check:content-drift] BOUNDARY DRIFT: AGENTS.md missing term "${term}" from manifest`);
        exitCode = 1;
      }
    }
  }
}

if (exitCode === 0) {
  console.log("[check:content-drift] OK. Version, gates and boundaries are consistent.");
} else {
  console.error(`\n[check:content-drift] To update the version, edit documentation/product-manifest.json and src/content/version.ts, then update VERSION: markers in the files listed above.`);
}

process.exit(exitCode);
