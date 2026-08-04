import fs from "fs";
import path from "path";

const clientPages = [
  "app/about/page.tsx",
  "app/book/page.tsx",
  "app/pricing/page.tsx",
  "app/contact/page.tsx",
  "app/international/page.tsx",
  "app/courses/page.tsx",
];

let failed = false;
for (const file of clientPages) {
  const full = path.join(process.cwd(), file);
  if (!fs.existsSync(full)) continue;
  const content = fs.readFileSync(full, "utf8");
  if (content.includes('"use client"') && content.includes("export const metadata")) {
    console.error(`BLOCKED: ${file} is a client component but exports metadata`);
    failed = true;
  }
}

if (failed) {
  console.error("Remove the metadata export from client components before building.");
  process.exit(1);
}

console.log("SEO validation passed.");
