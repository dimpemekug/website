---
title: "Manga Extensions"
seoTitle: "Manga Extensions: sources for Legendum, Aidoku, Paperback"
applicationCategory: "EntertainmentApplication"
seoDescription: "Sources for reading Italian manga, manhwa and manhua in Legendum, Aidoku and Paperback on iPhone and iPad. Free, with no ads and no account."
description: "Sources for manga readers on iPhone and iPad, added as a repository in Legendum, Aidoku or Paperback. The first one is MangaWorld ITA, with manga, manhwa and manhua in Italian. Free, with no ads or in-app purchases."
pubDatetime: 2026-11-23T00:00:00+01:00
draft: false
tags: ["iOS", "manga", "extensions", "Legendum"]
repositories:
  - name: "Aidoku"
    page: "https://dimpemekug.github.io/Aidoku-Extensions/"
    address: "https://dimpemekug.github.io/Aidoku-Extensions/index.min.json"
  - name: "Paperback"
    page: "https://dimpemekug.github.io/Paperback-Extensions/"
    address: "https://dimpemekug.github.io/Paperback-Extensions/"
---

## What are they?

An extension adds a source to a manga reader: the app reads its catalog, series pages and chapters and shows them in its own library, with progress and downloads kept in the app.

I publish them in two repositories, one in the **Aidoku** format and one in the **Paperback 0.9** format. [Legendum](/en/projects/legendum/) reads both, so its users can pick either one.

The extensions host no content: they only read the public pages of the sites they stand for. They are not affiliated with those sites, nor with Aidoku or Paperback.

## Available sources

### MangaWorld ITA

Manga, manhwa and manhua in Italian from [mangaworld.me](https://www.mangaworld.me). The source is in Italian.

- **Trending chapters** featured on the home page
- **Latest chapters**, **Most read**, **Top rated** and **Newest**, with endless scrolling
- **Search** by title, with sort orders and filters by genre (genres can be excluded too), type and status
- **Series pages** with synopsis, authors, status, genres and chapters grouped by volume
- **Right reading mode**: manhwa and manhua open in vertical scrolling
- **Adult content flagged**: the app only shows it if you chose to
- **Editable domain**: if the site moves, type the new address in the source settings
- **No account**: you don't need to sign up on MangaWorld
- **No subscription**: free, with no ads and no in-app purchases

The two versions are not identical:

| | Aidoku | Paperback |
|---|---|---|
| Search by author and artist | yes | no |
| MangaWorld series and chapter links open in the app | yes | no |
| Genres and types on the home page | no | yes |

## Installation

On your iPhone or iPad, open the repository page with the buttons at the top of this page and tap **Aggiungi a Legendum** (Add to Legendum), **Aggiungi ad Aidoku** or **Aggiungi a Paperback**: the page is in Italian. Or copy the address and paste it into the app.

**Aidoku repository**

```
https://dimpemekug.github.io/Aidoku-Extensions/index.min.json
```

**Paperback repository**

```
https://dimpemekug.github.io/Paperback-Extensions/
```

| App | Where to paste the address |
|---|---|
| **Legendum** | *Settings › Sources › Add Repository*, then **Aidoku** or **Paperback** to match the repository |
| **Aidoku** | *Settings › Source Lists*, then **+** (Aidoku repository) |
| **Paperback** | *Settings › Extensions › Repositories*, then **+** (Paperback repository) |

Then install the source from the repository. The [documentation](/en/projects/manga-extensions/docs/) covers the settings and what to do when something doesn't open.

## Platforms

For **iPhone** and **iPad**, inside a reader that supports them: **Legendum** (iOS/iPadOS 26 or later), **Aidoku** 0.7.1 or later, **Paperback** 0.9.
