import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first === "en") return "en";
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/** Returns the equivalent URL in the other locale. */
export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const path = url.pathname;

  if (targetLang === "en") {
    // IT → EN: prepend /en, swap /progetti → /projects
    const enPath = path
      .replace(/^\/progetti(\/|$)/, "/projects$1");
    return `/en${enPath === "/" ? "" : enPath}`;
  } else {
    // EN → IT: strip /en prefix, swap /projects → /progetti
    const stripped = path.replace(/^\/en/, "") || "/";
    return stripped.replace(/^\/projects(\/|$)/, "/progetti$1");
  }
}

/** Returns the localized path for a given route key and lang. */
export function localePath(lang: Lang, route: string): string {
  const base = lang === "en" ? "/en" : "";
  return `${base}${route}`;
}
