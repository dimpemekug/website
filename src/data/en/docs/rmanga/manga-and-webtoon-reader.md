---
title: "Manga and Webtoon Reader"
description: "Reading modes for manga and Western comics, continuous webtoon scrolling, Core ML upscaling and Live Text in rManga."
project: "rmanga"
order: 3
section: "Comics"
---

## Reading Directions

rManga's reader adapts to every kind of comic. In every mode you can zoom with a pinch or a double tap, and a single tap shows or hides the controls.

### 1. Right to Left (Manga)
The direction of Japanese manga: a tap on the left side of the screen or a swipe to the right goes to the next page, respecting the original layout.

### 2. Left to Right (Western Comics)
The direction of European graphic novels and American comic books.

### 3. Vertical Scrolling (Webtoons and Manhwa)
Designed for vertical digital comics:
- **No interruptions**: panels follow one another with no borders or gaps between them.
- **Recycled views**: the strip is a `UIScrollView` where only the pages near the screen have a view, recycled from page to page, so scrolling stays smooth even with very long chapters and very tall pages.
- **Infinite scrolling**: as you reach the end of a chapter, the next one is attached to the strip and the one you just finished is marked as read, without going back to the list.

---

## Reader Features

### Double Page and Wide Pages
- **Double page on iPad**: with the iPad in landscape, rManga shows two pages side by side like an open book; the cover stays on its own and, in manga mode, the next page goes on the left. Turn it off from the reader menu or Settings.
- **Split wide pages**: if a scan contains two pages side by side, rManga can show one half at a time, in the series' reading direction.

### Core ML Upscaling
No model is included, but you can import your own Core ML model (`.mlmodel` or `.mlpackage`) in the reading settings. It's compiled on import and applied to pages below the resolution limit you choose, to make them sharper.

### Live Text
With Live Text turned on in settings, iOS recognizes the text on the pages and makes it selectable, so you can:
- copy it to the clipboard;
- translate or look it up from the system selection menu.

Quick actions are disabled, because they would take over the taps that turn pages. On devices that don't support Live Text the option doesn't appear.

### Tap Zones and Gestures
- **Tap zones**: choose how the screen is divided for turning pages (left-right, L-shaped, Kindle, edges or off), with swappable sides and a visual preview.
- **Quick close**: in page modes, pull an unzoomed page down to close the reader. In webtoons you close it with a swipe from the left edge, and pulling the strip down from the top opens the previous chapter.
- **Pages to preload**: from 1 to 10 pages kept ready in advance.
