---
title: "Libreria Locale e Formati"
description: "Come importare manga locali tramite l'app File, supportare archivi CBZ, ZIP e cartelle di immagini in rManga."
project: "rmanga"
order: 2
section: "Libreria"
---

## Accesso tramite l'app File di Apple

La cartella *Documents* di rManga è esposta direttamente all'interno dell'app **File** di sistema. Puoi trovarla navigando in:

```text
File › Sul mio iPhone (o Sul mio iPad) › rManga
```

Puoi trasferire i tuoi file via AirDrop da Mac, scaricarli da browser Safari, oppure importarli collegando il dispositivo con cavo tramite il Finder di macOS o iTunes.

---

## Struttura delle Cartelle Supportata

rManga indicizza automaticamente i file seguendo queste semplici convenzioni:

### 1. Singolo Volume Autonomo
Se hai un volume unico o un one-shot, ti basta posizionare l'archivio direttamente nella cartella principale:
```text
rManga/
└── OnePiece_Vol01.cbz
```
rManga creerà una scheda intitolata `OnePiece_Vol01` contenente il volume come unico capitolo pronto per la lettura.

### 2. Serie con Più Capitoli (Archivi CBZ/ZIP)
Per organizzare una serie completa con più capitoli separati:
```text
rManga/
└── Berserk/
    ├── Capitolo 001.cbz
    ├── Capitolo 002.cbz
    └── Capitolo 003.zip
```
L'app creerà automaticamente la serie **Berserk**, ordinerà i capitoli in sequenza logica ed estrarrà la prima pagina del primo capitolo come copertina della serie.

### 3. Capitolo come Cartella di Immagini
Se possiedi immagini già estratte, puoi raggrupparle in una cartella:
```text
rManga/
└── Naruto/
    └── Capitolo 001/
        ├── 01.jpg
        ├── 02.jpg
        └── 03.png
```

---

## Formati Supportati
- **Archivi compressi**: `.cbz`, `.zip`.
- **Formati immagine interni**: JPEG, PNG, WebP e GIF (statiche).
- **Copertine personalizzate**: se inserisci nella cartella della serie un'immagine chiamata `cover.jpg` o `cover.png`, rManga la utilizzerà come copertina ufficiale della serie.
