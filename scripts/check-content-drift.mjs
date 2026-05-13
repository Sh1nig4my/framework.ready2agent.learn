import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const base = process.cwd();
const manifestPath = resolve(base, "documentation/product-manifest.json");

if (!existsSync(manifestPath)) {
  console.error("[check:content-drift] MISSING: documentation/product-manifest.json");
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
let exitCode = 0;

// --- 1. Version consistency ---
const readmePath = resolve(base, "README.md");
const readme = readFileSync(readmePath, "utf8");
const versionRegex = /\*\*(v[\d.]+[^*]*)\*\*/;
const readmeVersion = readme.match(versionRegex);

if (!readmeVersion) {
  console.error("[check:content-drift] WARNING: Could not extract version from README.md");
} else if (!readmeVersion[1].startsWith(manifest.version)) {
  console.error(`[check:content-drift] VERSION DRIFT: README.md says "${readmeVersion[1]}", manifest says "${manifest.version}"`);
  exitCode = 1;
}

// --- 2. Quality gate consistency ---
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
  if (foundGates.length === 0) continue; // doc may reference only quality aggregate
  if (foundGates.length < expectedGates.length) {
    const missing = expectedGates.filter((g) => !foundGates.includes(g));
    console.error(`[check:content-drift] GATE DRIFT: ${doc.label} missing: ${missing.join(", ")}`);
    exitCode = 1;
  }
}

// --- 3. Boundary consistency ---
const agentsPath = resolve(base, "AGENTS.md");
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

if (exitCode === 0) {
  console.log("[check:content-drift] OK. Version, gates and boundaries are consistent.");
}

process.exit(exitCode);
