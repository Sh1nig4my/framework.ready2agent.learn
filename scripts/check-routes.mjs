import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const manifestPath = resolve(process.cwd(), "documentation/product-manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const wikiSections = manifest.wikiSections;

let exitCode = 0;

for (const section of wikiSections) {
  const pagePath = section.href.replace("/wiki", "");
  const fullPath = resolve(process.cwd(), `src/app/wiki${pagePath}/page.tsx`);

  if (!existsSync(fullPath)) {
    console.error(`[check:routes] MISSING: ${section.href} -> src/app/wiki${pagePath}/page.tsx`);
    exitCode = 1;
  } else {
    console.log(`[check:routes] OK: ${section.href}`);
  }
}

if (exitCode === 0) {
  console.log(`[check:routes] All ${wikiSections.length} wiki routes verified.`);
}

process.exit(exitCode);
