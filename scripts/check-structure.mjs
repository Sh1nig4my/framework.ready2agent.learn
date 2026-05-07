import { existsSync } from "node:fs";
import { resolve } from "node:path";

const required = [
  "README.md",
  "TEACHING_GUIDE.md",
  "documentation/R2A_LEARN_full-ai-context.md",
  "documentation/project-meta/public-private-boundary.md",
  "documentation/project-meta/release-definition-v1.md",
  "documentation/examples/README.md",
  "playground/README.md",
  "playground/01-company-to-landing-page.md",
  "exercises/README.md",
  "exercises/tracker.md",
  "exercises/level-01-foundations/01-vague-idea-to-requirement.md",
  "exercises/level-02-agent-workflow/01-review-incomplete-agent-output.md",
  "exercises/level-03-practical-builds/01-company-landing-page.md",
  "exercises/level-04-case-study/01-auth-iam-requirement-analysis.md",
  "workflow/trackers/auth-iam-case-study-tracker.md",
  "prompts/00-agent-onboarding.md",
  "prompts/06-documentation-alignment.md",
];

const missing = required.filter((item) => !existsSync(resolve(process.cwd(), item)));

if (missing.length > 0) {
  console.error("[check:structure] Missing required files:");
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`[check:structure] OK. Verified ${required.length} required paths.`);
process.exit(0);
