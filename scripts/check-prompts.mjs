import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const requiredSections = [
  "## Purpose",
  "## When to use",
  "## Required context",
  "## Role",
  "## Task",
  "## Inputs",
  "## Output contract",
  "## Quality bar",
  "## Anti-drift rules",
  "## Stop conditions",
  "## Self-check",
  "## Human review checklist",
  "## Next step",
];

const promptFiles = [
  "prompts/00-agent-onboarding.md",
  "prompts/01-requirement-analysis.md",
  "prompts/02-architecture-planning.md",
  "prompts/03-task-breakdown.md",
  "prompts/04-implementation-start.md",
  "prompts/05-quality-gate.md",
  "prompts/06-documentation-alignment.md",
];

let exitCode = 0;

for (const file of promptFiles) {
  const fullPath = resolve(process.cwd(), file);
  if (!existsSync(fullPath)) {
    console.error(`[check:prompts] MISSING: ${file}`);
    exitCode = 1;
    continue;
  }

  const content = readFileSync(fullPath, "utf8");
  const missing = requiredSections.filter((section) => !content.includes(section));

  if (missing.length > 0) {
    console.error(`[check:prompts] ${file} - missing sections:`);
    for (const section of missing) {
      console.error(`  - ${section}`);
    }
    exitCode = 1;
  } else {
    console.log(`[check:prompts] OK: ${file}`);
  }
}

if (exitCode === 0) {
  console.log(`[check:prompts] All ${promptFiles.length} prompts verified.`);
}

process.exit(exitCode);
