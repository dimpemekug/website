---
title: "Export, Queue, and Dock"
description: "Summary before exporting, estimated file size, speed and time left, a reorderable job queue, Dock progress, and notifications in rMux."
project: "rmux"
order: 6
section: "Productivity"
---

## Before You Export

Below the timeline, a row sums up what will come out: the format, whether the video is copied or re-encoded, the number of segments and filters and, when the settings allow it, the **estimated size** of the file. Next to it you pick the file format and start the export.

In the sidebar, each section (**Video**, **Dimensions**, **Subtitles**, **Audio**) shows a small badge when you have changed it from the opened file, such as the chosen codec or the number of active filters. The **Reset** button at the top of the settings panel puts that section back as it was.

---

## Export Now or Queue It

- **Export…** (<kbd>⌘</kbd> <kbd>↩</kbd>) starts the export right away. While it runs you see the percentage, the **speed** (for example 2.3×), and the **time left**. When it's done you can **open** the file or show it in Finder.
- **Add to Queue** lines the export up, so you can move on to the next video.
- **Multiple windows**: open several videos in separate windows and prepare different cuts in parallel.

---

## The Job Queue

In the **Job Queue** window (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>J</kbd>):
- each row shows its state (waiting, paused, completed, failed, canceled) and a progress bar; a failed job also shows the reason;
- drag rows to **reorder** the waiting jobs;
- with a secondary click you can **queue a job again**, show it in Finder, or remove it;
- at the bottom, **Start Queue**, **Stop queue** (stops the running export, the waiting ones stay), and **Remove Completed**.

The queue keeps going even if you close the video's window, and it is saved between launches.

---

## Dock and Notifications

- **Progress on the Dock**: while exports run, a progress bar appears on rMux's Dock icon.
- **Notification when done**: when rMux is in the background and an export, a merge, or the queue finishes, macOS shows a notification saying whether it succeeded. Turn it off in **Settings › Export**.
- **When Done**: also in **Settings › Export**, you can have rMux show the file in Finder or open it after an export from the main window.

Keyboard shortcuts are collected in [Preview, Keyboard, and Settings](/en/projects/rmux/docs/preview-keyboard-and-settings).
