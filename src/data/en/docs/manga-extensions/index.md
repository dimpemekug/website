---
title: "Installation and settings"
description: "How to add the manga extension repositories in Legendum, Aidoku and Paperback, change a source's domain and fix the most common problems."
project: "manga-extensions"
order: 1
section: "Getting Started"
---

## Which repository to choose

Every source is published in two formats, with the same content:

- **Aidoku repository** (`index.min.json`): for Aidoku and Legendum.
- **Paperback repository** (folder with `versioning.json`): for Paperback 0.9 and Legendum.

In Legendum you can add both, but one is usually enough. The differences between the versions of each source are on the [project page](/en/projects/manga-extensions/).

## Adding a repository

### With one tap

On your iPhone or iPad, open the repository page (it is in Italian):

- [Aidoku repository](https://dimpemekug.github.io/Aidoku-Extensions/): buttons **Aggiungi ad Aidoku** (Add to Aidoku) and **Aggiungi a Legendum** (Add to Legendum)
- [Paperback repository](https://dimpemekug.github.io/Paperback-Extensions/): buttons **Aggiungi a Paperback** (Add to Paperback) and **Aggiungi a Legendum**

The button opens the app with the address already filled in. The same page has **Copia indirizzo** (Copy address).

### By hand

Copy the address:

```
https://dimpemekug.github.io/Aidoku-Extensions/index.min.json
```

```
https://dimpemekug.github.io/Paperback-Extensions/
```

and paste it into the app:

| App | Where |
|---|---|
| **Legendum** | *Settings › Sources › Add Repository*: it takes both the Aidoku list and the Paperback repository |
| **Aidoku** | *Settings › Source Lists*, then **+** |
| **Paperback** | *Settings › Extensions › Repositories*, then **+** |

Then open the repository and install the source. Updates come from the same repository.

## Source settings

### Domain

Manga sites often change address. Every source has a **Dominio** (Domain) field in its settings:

- leave it empty to use the default address (for MangaWorld ITA, `https://www.mangaworld.me`);
- if the site moves, type the new address and keep reading, without waiting for an update.

The Paperback version also has **Ripristina il dominio predefinito** (Restore the default domain) and an **In uso** (In use) row showing the current address.

### Adult content

Series with adult or mature genres are flagged as such: the app only shows them if you chose to in its settings.

## When something goes wrong

- **A series doesn't open or chapters are missing**: try opening it on the site. If it works there, open an issue in the GitHub repository ([Aidoku](https://github.com/dimpemekug/Aidoku-Extensions/issues), [Paperback](https://github.com/dimpemekug/Paperback-Extensions/issues)) with the series title.
- **Nothing opens anymore**: check whether the site changed domain and update it in the source settings.
- **In Legendum, the Paperback version asks for a Cloudflare check that fails**: Legendum doesn't handle every Cloudflare check of Paperback extensions yet. Use the Aidoku version of the same source.

## Account and privacy

You don't need an account on the site: the sources only read public pages. Library, progress and downloads stay in the app you use. The extensions collect no data and show no ads.
