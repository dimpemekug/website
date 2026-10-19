---
title: "Introduzione a rManga"
description: "Panoramica di rManga per iPhone e iPad: suite multimediale per la lettura di manga, fumetti ed ebook e la visione di anime, con zero tracciamento e massima fluidità."
project: "rmanga"
order: 1
section: "Iniziare"
---

## Cos'è rManga

**rManga** è un'applicazione nativa per **iPhone e iPad (iOS/iPadOS 26+)** che unisce in un'unica libreria elegante e scattante tre grandi mondi dell'intrattenimento multimediale:

1. **Manga e Fumetti**: lettura di fumetti giapponesi, comic book occidentali e webtoon a scorrimento verticale, con supporto a file locali e repository di estensioni.
2. **Ebook e Libri di Testo**: lettore avanzato di libri digitali (EPUB, PDF, FB2, DOCX, TXT e Markdown) con motore Readium, impaginazione fluida, evidenziazioni e note.
3. **Anime e Serie Animate**: riproduttore video con doppio motore (AVPlayer nativo e libmpv via Metal per file MKV), moduli di streaming Sora, integrazione con server Jellyfin, salto automatico delle sigle tramite AniSkip e supporto a sottotitoli stilizzati ASS/SSA.

Sviluppata interamente in **SwiftUI e SwiftData** con design *Liquid Glass*, rManga non ospita né distribuisce contenuti: è un contenitore universale raffinato progettato per riprodurre i tuoi file personali e collegarsi alle tue sorgenti preferite.

---

## Architettura e Punti di Forza

### 1. Privacy Assoluta e Nessun Account Obbligatorio
- **Nessuna profilazione**: l'app non include analytics, tracker commerciali né annunci pubblicitari.
- **I tuoi dati sul tuo dispositivo**: la libreria, la cronologia, i segnalibri e i progressi risiedono nella memoria locale protetta e, solo se decidi di attivare la sincronizzazione, nel tuo **iCloud personale**.
- **Credenziali al sicuro nel Portachiavi**: password dei server Jellyfin, Suwayomi e token API rimangono cifrati nel Keychain di sistema.

### 2. Gestione Unificata di Media Differenti
In rManga ogni opera è rappresentata dal modello unificato `Manga` e i suoi contenuti (capitoli di fumetti, tomi di libri o episodi video) dal modello `Chapter`:
- Per i **fumetti**, il progresso corrisponde alla pagina letta.
- Per gli **ebook**, il progresso memorizza la posizione esatta (*locator*) nel testo.
- Per gli **anime e video**, la posizione è tracciata al secondo esatto, segnando l'episodio come completato una volta superato il 90% della durata.
- In questo modo cronologia, riga "Continua a guardare/leggere" e sincronizzazione funzionano con coerenza e senza duplicazioni.

### 3. Prestazioni al Vertice e Display ProMotion a 120 Hz
Tutte le schermate sono ottimizzate per eliminare gli scatti (*animation hitches*):
- Conteggio capitoli calcolato in una **singola query aggregata** in memoria.
- Memoria riciclata per le strisce verticali dei webtoon.
- Decodifica video accelerata su hardware Apple Silicon tramite VideoToolbox.

---

## Flusso di Avvio Rapido

1. **Importa i tuoi file**: copia archivi di manga o libri digitali nella cartella `rManga` dell'app **File**.
2. **Collega le tue fonti**: aggiungi repository di estensioni Aidoku/Paperback, moduli video Sora o connettiti al tuo server domestico (Komga, Kavita, Suwayomi o Jellyfin).
3. **Scegli l'esperienza di fruizione**: apri un manga per sfogliarlo da destra a sinistra, un webtoon per scorrere verticalmente, un ebook per evidenziare citazioni, oppure avvia un episodio anime con sottotitoli e Picture in Picture.
