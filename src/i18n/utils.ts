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
export function getAlternateUrl(url: URL | string, targetLang: Lang): string {
  const path = typeof url === "string" ? url : url.pathname;

  if (targetLang === "en") {
    // IT → EN: prepend /en, swap /progetti → /projects
    const enPath = path.replace(/^\/progetti(\/|$)/, "/projects$1");
    if (enPath === "" || enPath === "/") return "/en/";
    return `/en${enPath.startsWith("/") ? enPath : `/${enPath}`}`;
  } else {
    // EN → IT: strip /en prefix, swap /projects → /progetti
    let stripped = path.replace(/^\/en(\/|$)/, "/");
    if (!stripped.startsWith("/")) stripped = `/${stripped}`;
    const itPath = stripped.replace(/^\/projects(\/|$)/, "/progetti$1");
    return itPath === "" ? "/" : itPath;
  }
}

/** Returns the localized path for a given route key and lang. */
export function localePath(lang: Lang, route: string): string {
  const base = lang === "en" ? "/en" : "";
  return `${base}${route}`;
}
