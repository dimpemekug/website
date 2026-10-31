import { SITE } from "@/config";

type Crumb = { name: string; href?: string | null };

// JSON-LD counterpart of the visible breadcrumb; the last item is the current page
export function breadcrumbStructuredData(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, href }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      ...(href && { item: new URL(href.endsWith("/") ? href : `${href}/`, SITE.website).href }),
    })),
  };
}
