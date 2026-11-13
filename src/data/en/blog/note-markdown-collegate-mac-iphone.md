---
title: "Linked Markdown notes: how to organize your notes on Mac and iPhone"
seoTitle: "Linked Markdown notes on Mac and iPhone: how to organize"
description: A folder of Markdown files and a few [[note]] links are enough for a notes archive that grows without getting lost and without tying you to one app. How to set it up, how to write notes you can find again and what to check before switching apps.
seoDescription: "How to organize notes in Markdown with [[note]] links on Mac, iPhone and iPad: folders, names, backlinks and compatibility between apps."
pubDatetime: 2026-11-13T09:00:00Z
related:
  - local-first-app-offline-sincronizzazione-2026
  - aprire-rar-protetto-mac
  - memoria-assistenti-ai-2026
relatedProjects:
  - charta
tags:
  - productivity
  - macos
  - mobile
  - privacy
draft: false
---

Notes have one flaw: they take a second to write and an age to find. The meeting notes end up in one app, the project idea in another, and a year later neither is where you would look for it. A simple method holds up better than almost any elaborate system: keep your notes as Markdown files in a folder and link them to each other, like the pages of a small personal wiki.

<figure>
  <img
    src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80"
    alt="Open lined notebook with the word Notes written on it, a fountain pen resting on top and a pair of glasses in the background"
  />
  <figcaption class="text-center">
    A notebook has a limit files don't: one page can't take you to another with a click.
  </figcaption>
</figure>

## Why Markdown

Markdown was created in 2004 by John Gruber with Aaron Swartz, as a way to write formatted text that stays readable as it is: an asterisk for italics, a hash for headings, a dash for list items. A Markdown note is an ordinary text file with a `.md` extension, and that has three practical consequences.

1. **It doesn't depend on an app.** The file opens in any text editor, today and twenty years from now. If the app you use shuts down or changes its price, your notes are still yours.
2. **It lives where you decide.** A folder on your Mac, in iCloud Drive or in another sync service: the files follow the rules of folders, not of an account.
3. **It's easy to search and copy.** Spotlight, the Finder, a script or a backup treat your notes like any other file.

It's the same principle as [local-first apps](/en/posts/local-first-app-offline-sincronizzazione-2026/): the data lives on your device and everything else comes after.

## The link that changes everything

A folder of files on its own is just an archive. It becomes a tool when notes refer to each other. The most common form is the double square bracket link, `[[Note name]]`, borrowed from wikis: you type the name of another note and the text becomes a link.

The idea is old. Between 1951 and 1996 the sociologist Niklas Luhmann built a card index of about 90,000 slips, now kept at Bielefeld University, in which each card pointed to others with a handwritten code. The principle is the same: small, connected ideas rather than long documents split by topic. With files, the cross-reference costs a couple of keystrokes.

## How to set up your archive

1. **One main folder, few subfolders.** Work, personal projects, reading: three or four branches are enough. Links do most of the organizing, not folders.
2. **One note, one idea.** A note on "Kitchen quote" and one on "Appliance suppliers" link together better than a single document about the whole house. If a note grows too long, split off a piece and leave a link behind.
3. **Clear, stable names.** The file name is what links point to: "Meeting 2026-11-13 budget" can be found again, "Note 47" can't. Dates written as year-month-day sort themselves.
4. **Link as you write.** Whenever you mention a person, a project or a concept that already has a note, wrap it in `[[` and `]]`. If the note doesn't exist yet, the link is a reminder to write it.
5. **Check the backlinks.** A good editor shows which notes mention the one you have open: that's where connections you didn't plan for show up.

> **Tip:** keep an "Index" note for each area, listing links to the most important notes. It's the way back in when you return to a project after months, and it costs less than reorganizing folders.

## On Mac, iPhone and iPad with Charta

Many apps read Markdown files, and Obsidian is the best known of those that link them. [Charta](/en/projects/charta/), a free editor for Mac, iPhone and iPad coming soon to the App Store, works the same way, with no account and no ads.

1. **Open the folder as a project.** On the Mac with **File › Open Folder…**, on iPhone and iPad with **Open Folder** on the launch screen. Notes stay as `.md` files in the folder: Charta doesn't add files of its own.
2. **Type `[[`.** Charta suggests the notes in the folder as you type; `[[Note#Heading]]` jumps to a specific heading, `[[Note|text]]` shows text other than the name. Clicking a link to a note that doesn't exist yet creates it.
3. **Rename without breaking anything.** When you rename a note that other notes mention, Charta asks whether to update the links and tells you how many there are.
4. **Look at the graph.** **Note Graph** shows notes as dots and links as lines: isolated notes are the ones worth linking or deleting.

On the Mac, **Go to Note** (<kbd>⌘</kbd> <kbd>T</kbd>) opens any note when you type part of its name. If another app or a sync service changes the open file, Charta tells you and asks which version to keep. The details are in the guide to [folders and linked notes](/en/projects/charta/docs/folders-and-linked-notes/).

## What to check before switching apps

Markdown is portable, but not all Markdown is equally portable.

1. **`[[note]]` links aren't part of the standard.** CommonMark, the specification that since 2014 has brought order to Markdown's variants, doesn't include them: they're an extension. Almost every notes app reads them, but a website, a documentation generator or a general-purpose editor may show them as plain text. Obsidian itself lets you use classic Markdown links instead, if compatibility matters more than convenience.
2. **App-specific extensions stay with the app.** References to single paragraphs, embeds or special commands only work in the app that invented them. Use them knowing they turn into plain text elsewhere.
3. **Settings don't travel with the files.** Colors, pinned notes and saved views usually live in the app's preferences. Notes don't: they're in the folder, and they're the part that matters.

## An archive that grows with you

A notes system works if it doesn't ask for upkeep. A folder, files with clear names and a few links written as you work are enough to find, a year from now, what seems obvious today. The rest (graphs, searches, templates) is convenience. It's worth getting it from an app that leaves your files as you wrote them, so that the day you try another one, your notes come with you.
