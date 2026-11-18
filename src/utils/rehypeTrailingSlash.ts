type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

// Internal links written as "/progetti/charta/docs/x" make GitHub Pages answer with a 301 to
// ".../x/": add the slash here so every page links straight to its canonical URL.
// Files (with an extension), anchors-only and external links are left as they are.
export const withTrailingSlash = (href: string) => {
  const match = href.match(/^(\/[^?#]*)([?#].*)?$/);
  if (!match || href.startsWith("//")) return href;
  const [, path, rest = ""] = match;
  if (path.endsWith("/") || /\.[a-z0-9]+$/i.test(path)) return href;
  return `${path}/${rest}`;
};

export default function rehypeTrailingSlash() {
  const visit = (node: HastNode) => {
    if (node.tagName === "a" && typeof node.properties?.href === "string") {
      node.properties.href = withTrailingSlash(node.properties.href);
    }
    node.children?.forEach(visit);
  };
  return visit;
}
