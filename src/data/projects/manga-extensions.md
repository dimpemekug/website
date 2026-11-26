---
title: "Estensioni manga"
seoTitle: "Estensioni manga: fonti per Legendum, Aidoku e Paperback"
applicationCategory: "EntertainmentApplication"
seoDescription: "Fonti italiane per leggere manga, manhwa e manhua in Legendum, Aidoku e Paperback su iPhone e iPad. Gratuite e senza pubblicità, nessun account."
description: "Fonti per i lettori di manga su iPhone e iPad: si aggiungono come repository in Legendum, Aidoku o Paperback. La prima è MangaWorld ITA, con manga, manhwa e manhua in italiano. Gratuite, senza pubblicità né acquisti in-app."
pubDatetime: 2026-11-23T00:00:00+01:00
draft: false
tags: ["iOS", "manga", "estensioni", "Legendum"]
repositories:
  - name: "Aidoku"
    page: "https://dimpemekug.github.io/Aidoku-Extensions/"
    address: "https://dimpemekug.github.io/Aidoku-Extensions/index.min.json"
  - name: "Paperback"
    page: "https://dimpemekug.github.io/Paperback-Extensions/"
    address: "https://dimpemekug.github.io/Paperback-Extensions/"
---

## Cosa sono

Le estensioni aggiungono una fonte a un lettore di manga: l'app ne legge il catalogo, le schede e i capitoli e li mostra nella sua libreria, con i progressi e i download che restano nell'app.

Le pubblico in due repository, uno nel formato di **Aidoku** e uno in quello di **Paperback 0.9**. [Legendum](/progetti/legendum/) li legge entrambi, quindi chi lo usa può scegliere l'uno o l'altro.

Le estensioni non ospitano contenuti: leggono solo le pagine pubbliche dei siti che rappresentano. Non sono affiliate a quei siti né ad Aidoku o Paperback.

## Fonti disponibili

### MangaWorld ITA

Manga, manhwa e manhua in italiano da [mangaworld.me](https://www.mangaworld.me).

- **Capitoli di tendenza** in primo piano nella home
- **Ultimi capitoli**, **Più letti**, **Più votati** e **Ultime aggiunte**, da scorrere senza fine
- **Ricerca** per titolo, con ordinamenti e filtri per genere (anche da escludere), tipologia e stato
- **Schede** con trama, autori, stato, generi e capitoli divisi per volume
- **Lettura giusta**: manhwa e manhua si aprono a scorrimento verticale
- **Contenuti per adulti segnati**: l'app li mostra solo se lo hai scelto tu
- **Dominio modificabile**: se il sito cambia indirizzo, scrivi quello nuovo nelle impostazioni della fonte
- **Nessun account**: non serve registrarsi su MangaWorld
- **Nessun abbonamento**: gratuita, senza pubblicità e senza acquisti in-app

Le due versioni non sono identiche:

| | Aidoku | Paperback |
|---|---|---|
| Ricerca per autore e artista | sì | no |
| Link di serie e capitoli di MangaWorld aperti nell'app | sì | no |
| Generi e tipologie nella home | no | sì |

## Installazione

Dall'iPhone o dall'iPad apri la pagina del repository con i pulsanti in cima a questa pagina e tocca **Aggiungi a Legendum**, **Aggiungi ad Aidoku** o **Aggiungi a Paperback**. In alternativa copia l'indirizzo e incollalo nell'app.

**Repository Aidoku**

```
https://dimpemekug.github.io/Aidoku-Extensions/index.min.json
```

**Repository Paperback**

```
https://dimpemekug.github.io/Paperback-Extensions/
```

| App | Dove incollare l'indirizzo |
|---|---|
| **Legendum** | *Impostazioni › Fonti › Aggiungi repository*, poi **Aidoku** o **Paperback** secondo il repository |
| **Aidoku** | *Impostazioni › Liste di fonti*, poi **+** (repository Aidoku) |
| **Paperback** | *Impostazioni › Estensioni › Repository*, poi **+** (repository Paperback) |

Poi installa la fonte dal repository. La [documentazione](/progetti/manga-extensions/docs/) spiega le impostazioni e cosa fare se qualcosa non si apre.

## Piattaforme

Per **iPhone** e **iPad**, dentro un lettore che le supporta: **Legendum** (iOS/iPadOS 26 o successivi), **Aidoku** 0.7.1 o successivo, **Paperback** 0.9.
