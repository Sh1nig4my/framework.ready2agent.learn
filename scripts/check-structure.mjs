import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const required = [
  "README.md",
  "AGENTS.md",
  "TEACHING_GUIDE.md",
  "documentation/R2A_LEARN_full-ai-context.md",
  "documentation/quickstart/agent_start_here.md",
  "documentation/project-meta/public-private-boundary.md",
  "documentation/project-meta/release-definition-v1.md",
  "documentation/project-meta/release-definition-v1.1.2.md",
  "documentation/project-meta/editorial-style-guide.md",
  "documentation/examples/README.md",
  "documentation/first-mission/README.md",
  "documentation/first-mission/first-mission-dossier-template.md",
  "playground/README.md",
  "playground/01-company-to-landing-page.md",
  "playground/02-chaotic-idea-to-requirement.md",
  "playground/03-feature-to-codex-plan.md",
  "exercises/README.md",
  "exercises/tracker.md",
  "exercises/rubrics/standard-rubric.md",
  "exercises/rubrics/scorecard-template.md",
  "exercises/templates/retrospective-template.md",
  "exercises/examples/README.md",
  "workflow/README.md",
  "workflow/requirements/r2a-learn-auth-iam-case-study/00-master-requirement.md",
  "workflow/trackers/auth-iam-case-study-tracker.md",
  "prompts/README.md",
  "prompts/00-agent-onboarding.md",
  "prompts/01-requirement-analysis.md",
  "prompts/02-architecture-planning.md",
  "prompts/03-task-breakdown.md",
  "prompts/04-implementation-start.md",
  "prompts/05-quality-gate.md",
  "prompts/06-documentation-alignment.md",
  "src/app/page.tsx",
  "src/content/landing.ts",
  "src/app/wiki/page.tsx",
  "src/app/wiki/first-mission/page.tsx",
  "src/app/wiki/start-here/page.tsx",
  "src/app/wiki/method/page.tsx",
  "src/app/wiki/playground/page.tsx",
  "src/app/wiki/prompts/page.tsx",
  "src/app/wiki/workflow/page.tsx",
  "src/app/wiki/exercises/page.tsx",
  "src/app/wiki/case-study/page.tsx",
  "src/app/wiki/quality-gates/page.tsx",
  "src/app/wiki/agent-guide/page.tsx",
  "src/app/wiki/repository-map/page.tsx",
  "src/app/wiki/public-private-boundary/page.tsx",
  "scripts/check-prompts.mjs",
  "scripts/check-boundary.mjs",
  "scripts/check-routes.mjs",
  "scripts/check-links.mjs",
  "scripts/check-content-drift.mjs",
];

const missing = required.filter((item) => !existsSync(resolve(process.cwd(), item)));

const contentMarkers = [
  {
    file: "README.md",
    mustInclude: ["AGENTS.md", "/wiki"],
  },
  {
    file: "documentation/R2A_LEARN_full-ai-context.md",
    mustInclude: ["AGENTS.md"],
  },
  {
    file: "documentation/quickstart/agent_start_here.md",
    mustInclude: ["npm run lint", "npm run build", "npm run typecheck", "npm run check:structure", "npm run quality"],
  },
  {
    file: "documentation/project-meta/release-definition-v1.1.2.md",
    mustInclude: ["Definition of Done"],
  },
];

const missingMarkers = [];

for (const marker of contentMarkers) {
  const fullPath = resolve(process.cwd(), marker.file);
  if (!existsSync(fullPath)) continue;
  const content = readFileSync(fullPath, "utf8");
  for (const token of marker.mustInclude) {
    if (!content.includes(token)) {
      missingMarkers.push(`${marker.file} -> ${token}`);
    }
  }
}

if (missing.length > 0) {
  console.error("[check:structure] Missing required files:");
  for (const item of missing) console.error(`- ${item}`);
  console.error("");
}

if (missingMarkers.length > 0) {
  console.error("[check:structure] Missing required content markers:");
  for (const item of missingMarkers) console.error(`- ${item}`);
  console.error("");
}

if (missing.length > 0 || missingMarkers.length > 0) {
  process.exit(1);
}

console.log(`[check:structure] OK. Verified ${required.length} required paths.`);
console.log("[check:structure] OK. Verified key content markers.");
process.exit(0);
