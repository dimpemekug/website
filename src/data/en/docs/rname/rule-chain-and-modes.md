---
title: "Rule Chain"
description: "rName's 8 renaming rules: replace, including regular expressions protected from catastrophic backtracking, insert, remove, numbering, letter case, dates, extensions and clean-up."
project: "rname"
order: 2
section: "Rules & Editing"
---

## How the Chain Works

In rName a file's new name doesn't come from a single command but from a **chain of rules** applied in sequence.

Rules run from top to bottom: each receives the result of the previous one and applies its own transformation. This lets you combine simple steps without writing complex formulas: for example, strip accents, convert everything to lower case, add the date in front and finally append a number.

### The Sidebar

- **Turn on and off**: every rule in the chain has a switch to disable it temporarily, without deleting or reconfiguring it.
- **Reorder**: drag a rule up or down to change the order in which it runs.
- **Add with one click**: the _Add a rule_ section shows the 8 available rules; a click adds one at the end of the chain and opens its settings. The section can be collapsed when the chain gets long.

---

## Scope

Each rule can act on a specific part of the name:

1. **Name only**: just the part before the extension (e.g. changes `document` without touching `.pdf`).
2. **Extension only**: just the characters after the last dot.
3. **Full name**: the whole name, extension included.

---

## The 8 Rules

### 1. Replace

Finds text and replaces it with something else (or deletes it, if you leave the replacement empty).

- **Case**: match upper and lower case exactly or not.
- **First occurrence only**: replaces only the first match instead of all of them.
- **Regular expressions**: supports capture groups `()`, which you can reference in the replacement with `$1`, `$2` and so on (for example, to swap author and title: `(.*) - (.*)` → `$2 - $1`).
- **Protection from catastrophic backtracking**: expressions with nested quantifiers (like `(a+)+` or `(.*)*`) can lock up the processor for minutes. rName recognizes them before running them, rejects them and explains why in the rule's settings.

### 2. Insert Text

Adds text:

- **at the start**, as a prefix (e.g. `Archive_`);
- **at the end**, as a suffix;
- **at a precise position**, counting characters from the start.

### 3. Remove Characters

Deletes parts of the name in four ways:

- **First characters**: a set number of leading characters.
- **Last characters**: a set number of trailing characters.
- **Range**: a number of characters starting from a position.
- **Text pattern**: a specific or recurring piece of text.

### 4. Numbering

Numbers files following the list order:

- **Start and step**: the starting value (e.g. `1`) and the increment (e.g. `1` or `10`).
- **Digits**: the minimum number of digits, with leading zeros (e.g. with 3 digits: `001`, `002`, … `099`).
- **Position and separator**: the number goes at the start, at the end or at a precise position, joined to the name by a separator of your choice (e.g. `_`, `-` or ` - `).

### 5. Letter Case

Standardizes capitalization with 8 styles:

- `lower case`: everything in lower case.
- `UPPER CASE`: everything in upper case.
- `Title Case Of Each Word`: title style.
- `First letter capitalised`: only the first character in upper case (_Sentence case_).
- `camelCase`: first word lower case, the following ones joined with a capital initial.
- `PascalCase`: every word joined with a capital initial.
- `snake_case`: lower-case words separated by underscores `_`.
- `kebab-case`: lower-case words separated by hyphens `-`.

### 6. Date and Time

Inserts a date into file names:

- **Source**: the file's creation date, last modification date or today's date.
- **Format**: a customizable format pattern (e.g. `yyyy-MM-dd`, `yyyyMMdd`, `yyyy-MM-dd_HHmm`); with year, month and day in that order, the Finder sorts files by date.
- **Position and separator**: at the start, at the end or at a precise position in the name.

### 7. Extension

Manages file extensions:

- **Set to**: changes the extension (e.g. from `jpeg` to `jpg`).
- **Make lower case**: standardizes mixed extensions (e.g. `.PNG` and `.JPG` become `.png` and `.jpg`).
- **Make upper case**: converts the extension to upper case.
- **Remove**: deletes the extension from the name.

### 8. Clean Up Name

Tidies names before publishing them on the web or archiving them:

- **Edge spaces**: removes spaces before and after the name.
- **Double spaces**: reduces runs of spaces to a single one.
- **Spaces**: leave them as they are, replace them with an underscore (`_`) or a hyphen (`-`), or delete them.
- **Accents**: turns accented letters into plain ones (e.g. `è` → `e`, `à` → `a`, `ü` → `u`).
- **Invalid characters**: removes characters the file system doesn't allow (`/`, `:`, null character).
- **Emoji**: removes emoji and graphic symbols.
