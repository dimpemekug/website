type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

// Wraps Markdown tables so that wide ones scroll instead of splitting words
export default function rehypeTableScroll() {
  const visit = (node: HastNode) => {
    node.children = node.children?.map(child => {
      if (child.tagName !== "table") {
        visit(child);
        return child;
      }
      return {
        type: "element",
        tagName: "div",
        properties: { className: ["table-scroll"], tabIndex: 0 },
        children: [child],
      };
    });
  };
  return visit;
}
