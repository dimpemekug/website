---
title: "Introduzione a rManga"
description: "Panoramica di rManga: lettore manga nativo per iPhone e iPad con supporto per file locali CBZ/ZIP, repository esterni e modalità Webtoon."
project: "rmanga"
order: 1
section: "Iniziare"
---

## Cos'è rManga

**rManga** è un'applicazione nativa per **iOS e iPadOS** progettata per offrire un'esperienza di lettura di manga, fumetti occidentali e webtoon fluida, elegante e completamente personalizzabile.

Sviluppata in **SwiftUI** e **SwiftData** con design *Liquid Glass*, rManga coniuga un lettore reattivo con il supporto ai file locali presenti nell'app File e l'integrazione di repository esterni per la lettura online e offline.

---

## Punti di Forza

### 1. Libreria Locale Integrata con l'app File
Puoi inserire i tuoi archivi di fumetti direttamente nella cartella di rManga tramite l'app File di iOS o collegando il dispositivo a un Mac. L'app rileva e cataloga automaticamente:
- Archivi compressi **`.cbz`** e **`.zip`**.
- Cartelle gerarchiche di capitoli con immagini JPEG, PNG o WebP.

### 2. Motore di Lettura Flessibile
- **Da Destra a Sinistra (Manga giapponese)**: sfogliamento tradizionale orientale.
- **Da Sinistra a Destra (Fumetto occidentale)**: lettura classica per comic book e graphic novel.
- **Scorrimento Continuo Verticale (Webtoon / Manhwa)**: lettura verticale continua a cascata ottimizzata per lo schermo di iPhone e iPad, senza interruzioni visive tra le pagine.

### 3. Integrazione Fonti e Server Remoti
Oltre ai file locali, rManga supporta l'aggiunta di sorgenti esterne tramite repository di estensioni compatibili con il formato Aidoku, client Paperback e connessioni a server remoti Suwayomi.

### 4. Griglia Fluida e Prestazioni al Vertice
La griglia delle copertine e il conteggio dei capitoli non letti sono ottimizzati attraverso query unificate in SwiftData, garantendo uno scorrimento a 120 fps su schermi ProMotion anche con collezioni di centinaia di serie e migliaia di capitoli.
