---
title: "Preview, Keyboard, and Settings"
description: "Keys to play and move through a video, reassignable shortcuts, preview volume, recent videos, and the four Settings panes in rMux."
project: "rmux"
order: 7
section: "Productivity"
---

## Moving Through the Video with the Keyboard

These keys work in the video window when you aren't typing in a text field (a track title, a subtitle line), where keys type as usual.

| Key | Action |
| :--- | :--- |
| <kbd>Space</kbd> | Play or pause |
| <kbd>L</kbd> | Play |
| <kbd>K</kbd> | Pause |
| <kbd>J</kbd> | Jump back a few seconds (5 seconds, adjustable) |
| <kbd>←</kbd> / <kbd>→</kbd> | One frame back or forward |
| <kbd>⇧</kbd> <kbd>←</kbd> / <kbd>⇧</kbd> <kbd>→</kbd> | Jump back or forward (1 second, adjustable) |
| <kbd>Home</kbd> / <kbd>End</kbd> | Go to the start or end of the video |
| <kbd>M</kbd> | Mute or unmute |

Holding an arrow key steps one frame at a time. <kbd>J</kbd> is a jump, not reverse playback: if the video was playing, it keeps playing.

---

## Menu Shortcuts

| Shortcut | Action |
| :--- | :--- |
| <kbd>⌘</kbd> <kbd>I</kbd> | Set In point |
| <kbd>⌘</kbd> <kbd>O</kbd> | Set Out point |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd> | Clear marks |
| <kbd>⌥</kbd> <kbd>←</kbd> / <kbd>⌥</kbd> <kbd>→</kbd> | Go to previous or next keyframe |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>J</kbd> | Open the job queue |
| <kbd>⌘</kbd> <kbd>Z</kbd> / <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Undo or redo marks, segments, and resets |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Export |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Show or hide the settings panel |

The first five can be **reassigned** in **Settings › Shortcuts**: click a shortcut and press the new keys.

---

## Preview Volume

The volume control in the preview only sets how loud you hear the video while you work: exported files don't change. To change a track's volume in the file, see [Audio and Tracks](/en/projects/rmux/docs/audio-management-and-tracks).

---

## Recent Videos

The most recently opened videos (eight at most) appear in the empty window and in **File › Open Recent**, where one click reopens them. Empty the list with **Clear List** or **Clear Menu**; with **Remember opened videos** turned off, it no longer fills up.

---

## Settings

rMux's Settings (<kbd>⌘</kbd> <kbd>,</kbd>) have four panes.

**General**
- **App Language** (System, Italian, English), which changes at the next launch, and **Appearance** (System, Light, Dark);
- **Remember opened videos** and **Clear List** for recent videos;
- **Restore Default Settings…**, which puts every setting and shortcut back to its initial value, except the language and the recent videos list.

**Export**
- the **Format** suggested when you open a video (MP4 unless you change it) and the **Video Encoder** used when the track switches to **Transcode** (HEVC unless you change it);
- the destination **Folder** and a **Name Suffix** added to exported files, with an example of the resulting name;
- **When Done**: do nothing, show the file in Finder, or open it;
- **Notify when rMux is in the background**.

**Preview**
- the timeline **Time** as a clock or timecode, and **Frame under the pointer**;
- filter **Comparison**, side by side or with a slider;
- preview **Volume** and **Mute**;
- how far <kbd>J</kbd> jumps (2, 5, 10, 15, or 30 seconds) and <kbd>⇧</kbd> <kbd>←</kbd> / <kbd>⇧</kbd> <kbd>→</kbd> (1, 2, 5, or 10 seconds).

**Shortcuts**
- the reassignable shortcuts, grouped into **Mark**, **Navigate**, and **Tools**, and the list of **Fixed Keys**.
