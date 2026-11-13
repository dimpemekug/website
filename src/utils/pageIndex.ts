import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Plain Node module (no astro:* imports) so it also runs inside astro.config.mjs,
// where the sitemap needs the same IT/EN pairs and dates as the pages.

type Lang = "it" | "en";
type Pair = { it: string; en: string };

const DOCS_DIRS: Record<Lang, string> = { it: "src/data/docs", en: "src/data/en/docs" };
const PROJECTS_DIRS: Record<Lang, string> = { it: "src/data/projects", en: "src/data/en/projects" };
const PAGES_DIRS: Record<Lang, string> = { it: "src/pages/progetti", en: "src/pages/en/projects" };
const PROJECTS_ROUTE: Record<Lang, string> = { it: "/progetti/", en: "/en/projects/" };

const isContent = (file: string) => /\.mdx?$/.test(file) && !file.startsWith("_");

function walk(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap(name => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return walk(path);
    return isContent(name) ? [path] : [];
  });
}

const frontmatterValue = (source: string, key: string) =>
  new RegExp(`^${key}:\\s*["']?([^"'\\n]+?)["']?\\s*$`, "m").exec(source)?.[1];

const isDraft = (source: string) => frontmatterValue(source, "draft") === "true";

/** Same rule as the docs routes: `<project>/index` is the docs root. */
function docSubSlug(id: string, project: string) {
  if (id === project || id === `${project}/index` || id === "index" || id.endsWith("/index")) return "";
  return id.startsWith(`${project}/`) ? id.slice(project.length + 1) : id;
}

type DocFile = { file: string; path: string; key: string };

function docFiles(lang: Lang): DocFile[] {
  const base = DOCS_DIRS[lang];
  return walk(base).flatMap(file => {
    const source = readFileSync(file, "utf8");
    if (isDraft(source)) return [];
    const id = relative(base, file).replace(/\.mdx?$/, "");
    const project = frontmatterValue(source, "project") ?? id.split("/")[0];
    const order = Number(frontmatterValue(source, "order") ?? 0);
    const sub = docSubSlug(id, project);
    const path = `${PROJECTS_ROUTE[lang]}${project}/docs/${sub ? `${sub}/` : ""}`;
    return [{ file, path, key: `${project}#${order}` }];
  });
}

/** Last commit date of every tracked file, newest first (one git call). */
function gitDates(paths: string[]) {
  const dates = new Map<string, string>();
  try {
    const log = execFileSync("git", ["log", "--format=__%cI", "--name-only", "--", ...paths], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
    let current = "";
    for (const line of log.split("\n")) {
      if (line.startsWith("__")) current = line.slice(2);
      else if (line && !dates.has(line)) dates.set(line, new Date(current).toISOString());
    }
  } catch {
    // No git (or a shallow clone without history): pages simply get no lastmod
  }
  return dates;
}

export type PageIndex = {
  /** IT/EN counterparts for pages whose slugs differ between languages. */
  alternates: Map<string, Pair>;
  /** Last real change of each page, keyed by URL path with trailing slash. */
  lastmod: Map<string, string>;
};

let cached: PageIndex | undefined;

export function pageIndex(): PageIndex {
  if (cached) return cached;
  const alternates = new Map<string, Pair>();
  const sources = new Map<string, string>(); // URL path → source file

  // Docs: the two languages use translated slugs, paired by project + order
  const docs = { it: docFiles("it"), en: docFiles("en") };
  const enByKey = new Map(docs.en.map(d => [d.key, d]));
  for (const it of docs.it) {
    const en = enByKey.get(it.key);
    if (!en) continue;
    const pair = { it: it.path, en: en.path };
    alternates.set(it.path, pair);
    alternates.set(en.path, pair);
  }
  for (const d of [...docs.it, ...docs.en]) sources.set(d.path, d.file);

  // Project pages and their privacy pages: /progetti/<id>/ ↔ /en/projects/<id>/
  for (const lang of ["it", "en"] as const) {
    for (const file of walk(PROJECTS_DIRS[lang])) {
      if (isDraft(readFileSync(file, "utf8"))) continue;
      const id = relative(PROJECTS_DIRS[lang], file).replace(/\.mdx?$/, "");
      sources.set(`${PROJECTS_ROUTE[lang]}${id}/`, file);
    }
    for (const file of walk(PAGES_DIRS[lang])) {
      const route = relative(PAGES_DIRS[lang], file).replace(/\.mdx?$/, "");
      if (route.includes("[")) continue;
      sources.set(`${PROJECTS_ROUTE[lang]}${route}/`, file);
    }
  }
  for (const path of sources.keys()) {
    if (!path.startsWith(PROJECTS_ROUTE.it) || alternates.has(path)) continue;
    const en = path.replace(PROJECTS_ROUTE.it, PROJECTS_ROUTE.en);
    if (sources.has(en)) {
      const pair = { it: path, en };
      alternates.set(path, pair);
      alternates.set(en, pair);
    }
  }

  // Top-level Markdown pages (privacy)
  for (const [file, path] of [
    ["src/pages/privacy.md", "/privacy/"],
    ["src/pages/en/privacy.md", "/en/privacy/"],
  ]) {
    if (existsSync(file)) sources.set(path, file);
  }

  const dates = gitDates([...new Set([...sources.values()].map(f => f.split("/").slice(0, 3).join("/")))]);
  const lastmod = new Map<string, string>();
  for (const [path, file] of sources) {
    const explicit = frontmatterValue(readFileSync(file, "utf8"), "lastModified");
    const date = explicit && !Number.isNaN(Date.parse(explicit)) ? new Date(explicit).toISOString() : dates.get(file);
    if (date) lastmod.set(path, date);
  }

  cached = { alternates, lastmod };
  return cached;
}

/** Counterpart of `path` in `lang`, when the slugs differ between languages. */
export function pairedPath(path: string, lang: Lang) {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return pageIndex().alternates.get(normalized)?.[lang];
}
