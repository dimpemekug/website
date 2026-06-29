declare module "@pagefind/default-ui" {
  export class PagefindUI {
    constructor(options: {
      element: string;
      showSubResults?: boolean;
      showImages?: boolean;
      [key: string]: unknown;
    });
    triggerSearch(query: string): void;
  }
}
