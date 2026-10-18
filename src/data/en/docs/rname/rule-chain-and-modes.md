---
title: "Rule Chain and Modes"
description: "Comprehensive guide to all 8 renaming rules in rName: regex replacement with ReDoS safety, text insertion, removal, sequential numbering, letter case, dates, extensions, and name clean-up."
project: "rname"
order: 2
section: "Rules & Editing"
---

## The Rule Chain Architecture

In rName, a new filename is not produced by a single isolated command, but through a **sequential chain of rules**.

Rules are evaluated from top to bottom: each rule receives the output of the preceding rule and applies its own transformation. This pipeline architecture allows you to combine targeted operations without writing complex scripts. For instance, you can strip accented characters, convert names to lowercase, prepend a photo's capture date, and append clean sequential numbers.

### Fast Sidebar Management

- **Instant Toggle**: each rule row features an on/off switch to temporarily deactivate it without deleting or reconfiguring parameters.
- **Drag to Reorder**: grab and drag any rule up or down in the sidebar to change its position in the processing order.
- **One-Click Addition**: the upper _Add a Rule_ section displays all 8 available rule types; clicking one appends it to the bottom of the chain and immediately displays its inspector settings.

---

## Target Scope (`RuleScope`)

Every rule lets you select exactly which portion of the filename it acts upon:

1. **Name only (`baseName`)**: modifies the body of the filename while preserving the original extension intact (e.g., renames `document` without affecting `.pdf`).
2. **Extension only (`fileExtension`)**: restricts changes to the characters following the last period.
3. **Full name (`fullName`)**: operates across the entire string, including the extension.

---

## The 8 Rules in Detail

### 1. Replace (`replace`)

Finds a string of characters and replaces it with new text (or deletes it if the replacement field is left empty).

- **Case Sensitive**: matches exact upper or lower case characters.
- **First occurrence only**: limits replacement to the first match instead of all occurrences.
- **Regular Expressions (Regex)**: supports advanced regex patterns with capture groups `()` accessible in the replacement string as `$1`, `$2`, etc. (e.g., swapping author and title: `(.*) - (.*)` → `$2 - $1`).
- **Catastrophic Backtracking Protection**: nested quantifiers in regular expressions (such as `(a+)+` or `(.*)*`) can lock up a CPU for minutes or hours on non-matching strings. rName's engine performs static pattern inspection to identify and reject expressions prone to _catastrophic backtracking_, explaining in the inspector why the regex was refused.

### 2. Insert text (`insert`)

Adds specific text at a designated location:

- **At the start**: serves as a prefix (e.g., `Archive_`).
- **At the end**: serves as a suffix positioned immediately before the extension.
- **At position**: inserts characters at an exact 0-based character index.

### 3. Remove characters (`remove`)

Deletes portions of text using four distinct modes:

- **First characters**: removes a set number of characters from the beginning.
- **Last characters**: removes a set number of characters from the end.
- **Range**: begins at an exact character position and removes $N$ characters.
- **Text pattern**: searches for and deletes recurring words or characters.

### 4. Numbering (`sequence`)

Generates automated numerical sequences based on the current list order:

- **Start and Step**: sets the initial starting number (e.g., `1`) and increment step (e.g., `1` or `10`).
- **Zero Padding**: specifies minimum digit padding with leading zeros (e.g., with 3 digits: `001`, `002`, ..., `099`).
- **Position and Separator**: places the counter as a prefix, suffix, or at an index, connected by a custom separator (e.g., `_`, `-`, `-`).

### 5. Letter case (`changeCase`)

Normalizes text formatting across 8 distinct styles:

- `lower case`: converts all characters to lowercase.
- `UPPER CASE`: converts all characters to uppercase.
- `Title Case Of Each Word`: capitalizes the first letter of each word.
- `First letter capitalised`: capitalizes only the first letter of the sentence (_Sentence case_).
- `camelCase`: lowercases the first word and capitalizes subsequent words without spaces.
- `PascalCase`: capitalizes each word without spaces.
- `snake_case`: lowercases words separated by underscores `_`.
- `kebab-case`: lowercases words separated by hyphens `-`.

### 6. Date and time (`dateStamp`)

Appends timestamps to filenames:

- **Source**: Creation date from filesystem attributes, Last modification date, or Today's current date.
- **Custom Format**: supports standard ISO date tokens (e.g., `yyyy-MM-dd`, `yyyyMMdd`, `yyyy-MM-dd_HHmm`), ensuring consistent chronological sorting in Finder.
- **Position & Separator**: place the date string at the start or end of the filename.

### 7. Extension (`fileExtension`)

Dedicated extension management:

- **Set to**: forcibly modifies the file extension (e.g., from `jpeg` to `jpg`).
- **Make lower case**: standardizes mismatched extensions (e.g., `.PNG` and `.JPG` become `.png` and `.jpg`).
- **Make upper case**: converts extensions to uppercase.
- **Remove**: strips the extension entirely from the filename.

### 8. Clean up name (`cleanUp`)

Sanitizes filenames before web publishing or archival:

- **Trim edges**: removes leading and trailing whitespace.
- **Collapse spaces**: condenses double or multiple spaces into a single space.
- **Space replacement**: converts spaces to underscores (`_`), hyphens (`-`), or deletes them.
- **Remove accents and diacritics**: replaces accented characters with standard ASCII equivalents (e.g., `é` → `e`, `à` → `a`, `ü` → `u`).
- **Strip invalid characters**: removes characters prohibited by filesystems (`/`, `:`, null byte `\0`).
- **Strip emoji**: removes graphic emojis and decorative symbols.
