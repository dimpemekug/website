---
title: "Snippets, Notes and Editor"
description: "Snippets with several code blocks, syntax highlighting, categories, tags, search filters and the three Home views in CodeVault."
project: "codevault"
order: 2
section: "Features"
---

## Item Types

CodeVault handles two kinds of content:

1. **Snippets**: source code tied to a language, with a title, a description, syntax highlighting and line numbers. A snippet can hold **several code blocks**, each with its own title (for example "Model", "View" and "Tests" in the same snippet).
2. **Notes**: **plain text (.txt)** or **Markdown (.md)** documents, suited to documentation, checklists, procedures and study notes. Markdown notes are shown laid out, with the `</>` button to switch to the source text, and can be **exported to PDF**: see [Markdown Notes and Links](/en/projects/codevault/docs/markdown-notes-and-links).

---

## Editor and Supported Languages

The CodeVault editor offers:
- **Syntax highlighting** with six themes: Default, Monokai, GitHub, Dracula, Solarized and Xcode.
- **Line numbers** and **Wrap Long Lines**, with the numbers staying aligned; turn them on or off in **Settings › Editor**.
- **Brackets** `{`, `(` and `[` that close on their own on iPhone and iPad.
- **Copy button** in each block's header, which copies just that code.
- **Font size** adjustable from 11 to 28 points.
- **Language detection**: while you type or paste the code of a new snippet, the app tries to work out the language; if you pick one by hand, your choice sticks.
- **Paste from clipboard**: when you open the editor and the clipboard holds text, the app offers to paste it into the code field (turn it off with **Suggest Paste from Clipboard** in **Settings › Editor**).

### Available Languages
- **Apple**: Swift, SwiftUI, Objective-C
- **Mobile and JVM**: Kotlin, Java, Dart
- **Web**: JavaScript, TypeScript, PHP, HTML, CSS
- **Systems and data**: C, C++, C#, Python, SQL, Bash, JSON, YAML, Markdown

There is also **Plain Text** for anything else.

---

## Organization: Categories, Tags and Pinned Items

- **Categories**: every snippet or note belongs to a custom category (by project, client or technology). The Categories section gathers the items of each one.
- **Tags**: add one or more colored labels to each item to build cross-cutting groups (e.g. `network`, `api`, `auth`).
- **Pinned items**: pin the snippets and notes you use most so they stay at the top.
- **Sorting and grouping**: sort lists by modification date, creation date, title or language, and group them by language or category.
- **Home**: shows pinned items, recent items and your most used categories. The button at the top right picks how recent snippets are shown: **one line of code**, a **compact list**, or a third view of each style's own (*File list* in Terminal, a numbered *Index* in Typographic, *Tiles* in Glass). The choice applies to every style.

---

## Search Filters

Search looks at titles, descriptions, code, note text, categories and tags. You can narrow it with these filters, also combined:

| Filter | Example | Finds |
| :--- | :--- | :--- |
| `lang:` | `lang:swift` | snippets in a language |
| `tag:` | `tag:cache` | items with a tag |
| `cat:` | `cat:backend` | items in a category |
| `format:` | `format:markdown` | notes in a format |

For example, `actor lang:swift tag:cache` looks for the word *actor* in Swift snippets tagged *cache*.

Right-click (Mac) or long-press (iPhone and iPad) an item to pin, duplicate, copy, share or delete it.
