---
title: "Introduzione a rManga"
description: "Panoramica di rManga per iPhone e iPad: un'unica app per leggere manga, fumetti ed ebook e guardare anime, senza tracciamento."
project: "rmanga"
order: 1
section: "Iniziare"
---

## Cos'è rManga

**rManga** è un'app nativa per **iPhone e iPad (iOS/iPadOS 26+)**, in italiano e in inglese, che riunisce in un'unica libreria tre mondi:

1. **Manga e fumetti**: manga, fumetti occidentali e webtoon a scorrimento verticale, da file locali, estensioni e server.
2. **Ebook e libri di testo**: un lettore di testo basato su Readium per EPUB, FB2, DOCX, ODT, RTF, HTML, TXT e Markdown, con impaginazione, segnalibri, evidenziazioni e ricerca; i PDF e gli EPUB illustrati si sfogliano come fumetti.
3. **Anime e video**: un player con due motori (AVPlayer di Apple e libmpv su Metal per MKV e simili), moduli video Sora, server Jellyfin, salto delle sigle con AniSkip e sottotitoli ASS/SSA con il loro stile.

Sviluppata in **SwiftUI e SwiftData** con il design *Liquid Glass*, rManga non ospita né distribuisce contenuti: legge i tuoi file e si collega alle fonti che scegli tu.

---

## Architettura e punti di forza

### 1. Privacy e nessun account obbligatorio
- **Nessuna profilazione**: l'app non include analytics, tracker né pubblicità.
- **I tuoi dati sul tuo dispositivo**: libreria, cronologia e progressi restano sul dispositivo e, solo se attivi la sincronizzazione, nel tuo **iCloud personale**.
- **Credenziali nel Portachiavi**: password e token dei server (Jellyfin, Suwayomi, Komga, Kavita) restano nel Portachiavi di iOS e non finiscono né nei backup né in iCloud.

### 2. Un solo modello per media diversi
In rManga ogni opera è un `Manga` e i suoi contenuti (capitoli di fumetti, volumi di libri o episodi) sono `Chapter`:
- Per i **fumetti**, il progresso corrisponde alla pagina letta.
- Per gli **ebook**, il progresso usa le posizioni di Readium (circa una ogni mille caratteri), uguali su ogni dispositivo.
- Per i **video**, la posizione è salvata al secondo, e un episodio conta come visto oltre il 90% della durata.
- Così cronologia, riga "Continua", backup e sincronizzazione funzionano allo stesso modo per tutti.

### 3. Prestazioni e schermi ProMotion a 120 Hz
Le schermate sono state misurate e ottimizzate per evitare gli scatti (*animation hitches*):
- in Libreria i capitoli si contano con **una sola query** per disegno;
- nei webtoon solo le pagine vicine allo schermo hanno una vista, riciclata da pagina a pagina;
- il video è decodificato in hardware con VideoToolbox.

---

## Per iniziare

1. **Importa i tuoi file**: copia archivi di manga, libri o video nella cartella `rManga` dell'app **File**.
2. **Collega le tue fonti**: aggiungi repository di estensioni Aidoku o Paperback, moduli video Sora o il tuo server (Komga, Kavita, Suwayomi o Jellyfin). Nessun repository è incluso nell'app.
3. **Leggi o guarda**: sfoglia un manga da destra a sinistra, scorri un webtoon in verticale, evidenzia un passaggio in un ebook o avvia un episodio con sottotitoli e Picture in Picture.
