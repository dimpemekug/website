import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const COLLECTIONS = [
  ["src/data/blog", "/posts/"],
  ["src/data/en/blog", "/en/posts/"],
] as const;

// Maps each post URL path to its last real change, for the sitemap
export function postLastmod() {
  const dates = new Map<string, string>();
  for (const [dir, route] of COLLECTIONS) {
    for (const file of readdirSync(dir)) {
      if (!/\.mdx?$/.test(file)) continue;
      const source = readFileSync(join(dir, file), "utf8");
      const date = /^modDatetime:\s*(\S+)/m.exec(source)?.[1] ?? /^pubDatetime:\s*(\S+)/m.exec(source)?.[1];
      if (date && !Number.isNaN(Date.parse(date))) {
        dates.set(`${route}${file.replace(/\.mdx?$/, "")}/`, new Date(date).toISOString());
      }
    }
  }
  return dates;
}
