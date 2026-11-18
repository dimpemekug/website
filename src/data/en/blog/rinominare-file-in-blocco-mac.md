---
title: "How to rename many files at once on a Mac"
description: Photos called IMG_4821, documents with unreadable names, folders to tidy up. What the Finder can do, when Shortcuts or a dedicated app is the better choice, and how to pick names that stay useful for years.
seoDescription: "How to rename many files at once on a Mac: the Finder's three options, Shortcuts, rules based on capture date and how to avoid mistakes and duplicates."
pubDatetime: 2026-11-18T12:00:00Z
related:
  - data-scatto-sbagliata-foto-mac
  - convertire-heic-jpeg-mac-iphone
  - aprire-rar-protetto-mac
relatedProjects:
  - rname
tags:
  - macos
  - productivity
  - automation
draft: false
---

Three hundred wedding photos named `IMG_4821.HEIC`, `IMG_4822.HEIC` and so on, a folder of invoices downloaded with names like `document (3).pdf`, an archive of scans to number. Renaming them one by one is slow and error-prone; doing it in bulk takes seconds, if you know which tool to use. The Mac already has one in the Finder, and for trickier cases there are more powerful options.

<figure>
  <img
    src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=1200&q=80"
    alt="Wooden shelving with rows of colourful ring binders, each with a label on its spine"
  />
  <figcaption class="text-center">
    A good file name is like the label on a binder's spine: it tells you what's inside without opening it.
  </figcaption>
</figure>

## With the Finder

The Finder has been able to rename several files at once for years, but the feature isn't very visible. Select the files, right-click one of them and choose **Rename**. The window that opens offers three modes:

1. **Replace Text.** It looks for some text in the names and swaps it for something else: `IMG_` becomes `Wedding_`, `document` becomes `invoice`.
2. **Add Text.** It puts some text before or after the current name, for example `2026-` at the start or `_final` at the end.
3. **Format.** It replaces the name with text of your choice followed by a sequential number or the date, starting from the number you give: `Wedding 1`, `Wedding 2`…

For many jobs that's enough. The limits show up when you need several operations together, when files need sorting in a particular way before numbering, or when the name should contain information stored inside the file, such as the date a photo was taken.

## With Shortcuts

The Shortcuts app on the Mac has an action for renaming files. Combined with others, it lets you build a flow that runs the same way every time: take the files selected in the Finder, read a date, put a name together and save it. It's a good option for a recurring task, such as tidying the bank statements you download every month, but you have to build it by hand and, if something goes wrong halfway, it doesn't show you the result first.

## With a dedicated app

When there are lots of files and more than one rule, an app built for the job saves time and mistakes. [rName](/en/projects/rname/), free on the Mac App Store, works with a chain of rules applied in order:

1. **Rules you can combine.** Replace (regular expressions included), insert, remove, number, change case, add a date, fix the extension and clean the name of accents, emoji and invalid characters.
2. **Photo data.** The name can include the capture date, camera or lens read from the EXIF metadata. If a photo doesn't have them, it stays as it is or uses a fallback you choose.
3. **Live preview.** Next to each current name you see the new one while you change the rules, before anything touches the disk.
4. **Conflicts set aside.** Files that would end up with the same name, or with a name that already exists, are left out of the operation instead of breaking it.
5. **Undo.** With <kbd>⌘</kbd> <kbd>Z</kbd> files go back to their previous names, even after several operations in a row.

Rules can be saved as presets, and four come ready-made, including date as prefix and web-friendly names. The guide to the [rule chain](/en/projects/rname/docs/rule-chain-and-modes/) shows how to combine them.

## Names that last

The naming scheme matters more than the tool. A few rules that work everywhere:

1. **Date first, as year-month-day.** `2026-11-18` sorts itself chronologically, while `18-11-2026` mixes up months and years.
2. **Numbers with leading zeros.** `001`, `002`… `120` stay in order; `1`, `2`… `120` are sorted as text by many programs, and `10` ends up before `2`.
3. **No special characters.** Slashes, colons, asterisks and accents cause trouble on Windows, on websites and in compressed archives. Hyphens and underscores work everywhere.
4. **Descriptive but short.** `2026-11-18_electricity_bill.pdf` says it all; a name as long as a line gets cut off by many programs and by some backup systems.

> **Tip:** before renaming an important folder, try it on a copy of a few files. With photos, if the name should contain the capture date, check that the dates are right first: [fixing the capture date](/en/posts/data-scatto-sbagliata-foto-mac/) comes before renaming.

## What to keep in mind

Renaming files looks like a small job, until you need to find an invoice from three years ago or sort an archive of thousands of photos. The Finder is enough for simple cases, Shortcuts for recurring jobs, an app with preview and undo for the big ones. Whatever tool you use, a consistent scheme decided once saves you time every time you look for something.
