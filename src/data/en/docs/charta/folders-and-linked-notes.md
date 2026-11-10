---
title: "Folders and linked notes"
description: "Opening a folder as a project, the note tree, [[note]] links, backlinks, the graph, Go to Note, find and replace, images and project settings."
project: "charta"
order: 5
section: "Folders"
---

A folder opened in Charta becomes a **project**: a set of Markdown notes (with their subfolders) linked to each other. Notes stay `.md` files in the folder; Charta adds no files of its own, and project settings live in the app's preferences, not inside the folder.

## Opening a folder

- **Mac**: **File › Open Folder…** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd>). Each folder opens in its own window; the latest ones are in **File › Recent Folders**, emptied with **Clear List**.
- **iPhone and iPad**: **Open Folder** on the launch screen. On iPad the folder opens in its own window, on iPhone full screen.

On the left there's the folder sidebar with two sections:

- **Recent**: the latest notes you opened, from every project, with the project name below;
- **Projects**: pinned and recent projects, each a branch you can expand. The window's project shows its tree; a note from another project opens that project in the same window (or brings forward the window that already has it).

If a folder was moved or can no longer be reached, the window says so and offers **Open Another Project**.

## Notes and folders

The **+** button (**New**) creates a **New Note** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>N</kbd> on the Mac) or a **New Folder**, and has **Sort By** **Name** or **Date Modified**. The context menu of a note or folder has, on the Mac, **New Note Here**, **New Folder Here**, **Open in a Separate Window**, **Open with Project**, **Copy Link [[…]]**, **Rename…**, **Show in Finder** and **Move to Trash**; on iPhone and iPad **New Note Here**, **Open with Project**, **Rename** and **Delete**. Deleted notes go to the Trash when the system allows it.

Notes save themselves shortly after your last keystroke. If another app changes a note that has no unsaved changes, Charta reloads it (on the Mac you can turn this off in **Settings › General › Reload Notes Changed by Other Apps**).

## Links between notes

Type `[[` and a note's name: Charta suggests the folder's notes as you type (on the Mac in a list under the cursor, on iPhone and iPad in the bar above the keyboard). After `[[Note#` it suggests that note's headings. The `[[Note#Heading]]` and `[[Note|text]]` forms are explained in [Supported Markdown](/en/projects/charta/docs/supported-markdown).

Clicking a link, in WYSIWYG or in the preview, opens the note; if the note doesn't exist yet, Charta creates it next to the open one, with the name as its title.

### Backlinks

The **Backlinks** tab of the sidebar (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>B</kbd> on the Mac) lists the notes that link to the open one, with the sentence containing the link. Click to open the note at that point.

### Renaming a note

When you rename a note that others link to, Charta asks whether to update the links, with the number of links and notes: **Update** rewrites them with the new name, **Don't Update** leaves the other notes as they are. In the open note the change can be undone; other notes change on disk. Charta doesn't touch other files without this confirmation.

## Note graph

**Note Graph** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>G</kbd> on the Mac, **More** menu on iPhone and iPad) shows notes as dots and links as lines, colored by subfolder with a legend at the bottom.

- **All Notes** or **Open Note**: the second shows only the notes near the open one, within a **Distance** of 1 to 3 links.
- **Unlinked Notes**: shows or hides isolated notes.
- **Zoom Out**, **Zoom In** and **Fit**; click a note to open it.

## Go to Note

**Go to Note…** (<kbd>⌘</kbd> <kbd>T</kbd>, also on iPad with a keyboard) opens a field where you type part of the name: notes are filtered as you type, with the subfolder on the right. If no note matches, **Create "…"** creates one with that name.

## Find and replace

The **Search Notes** field at the top of the sidebar searches the text of every note and shows the matching lines, grouped by note. The options below the field:

- **Aa**: match case;
- **Word**: whole words only;
- **.\***: regular expression (in the replacement, `$1`, `$2`… are the groups).

**Replace** opens the field for the new text. What the search highlights is exactly what gets replaced. **All** asks for confirmation with the number of matches and notes: in the open note the replacement can be undone, in the others the file changes on disk.

## Images and dropped files

Images pasted or dropped into the text are saved in a folder next to the note, `assets` at first, and the text gets the `![](assets/…)` link. Change the folder in **Settings › Editor › Image folder** (empty: next to the note) or for a single project. An image already inside the project folder is linked where it is, without a copy; a dropped note becomes a `[[note]]` link.

On the Mac, a document opened on its own only gives access to that file: to show the images next to it, or save new ones, Charta asks to read its folder (**Allow…** or **Not Now**). On iPhone and iPad, images are saved only in the notes of an open folder.

## Pinned projects and project settings

From a project's context menu in the sidebar (or from **Edit Project List…** in the **+** menu):

- **Open Here**, **Open in New Window**, **Pin** / **Unpin**, **Show in Finder**;
- **Remove from List**: forgets the project and its settings; the folder stays where it is.
- **Project Settings…**: the name in the list (the folder on disk doesn't change), a color and a symbol, an **Own Image Folder**, the mode of the first note (**First Note Opens In**), the **Note Order** and the start note.

The start note is chosen from a note's context menu with **Open with Project**: it's the note that opens first when you open the project, and it follows the note if you rename it.

Pinned projects stay in the list even when the folder can't be reached; recent ones drop out. In the list editor, drag pinned projects to reorder them. Windows of documents opened on their own have a **Projects** button with projects and recent notes.
