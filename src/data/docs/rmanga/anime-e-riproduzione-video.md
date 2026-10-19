---
title: "Anime e Riproduzione Video"
description: "Riproduttore video nativo per anime: doppio motore AVPlayer + libmpv per MKV, moduli Sora, Jellyfin, salto sigla AniSkip, sottotitoli ASS e PiP in rManga."
project: "rmanga"
order: 5
section: "Anime e Video"
---

## Il Riproduttore Video Nativo

rManga integra un riproduttore video completo dedicato alle serie animate e ai contenuti cinematografici, progettato su misura per superare le limitazioni dei player di sistema iOS:

- **Doppio Motore di Rendering**:
  - **AVPlayer nativo di Apple**: utilizzato per flussi di streaming HLS (`.m3u8`), file MP4 e MOV. Supporta pienamente Picture in Picture (PiP) automatico, AirPlay su Apple TV e audio continuo in background con controlli in blocco schermo (*NowPlaying*).
  - **MPVEngine (libmpv tramite Metal)**: impiegato per contenitori complessi come **MKV, WebM, AVI e TS**, con decodifica hardware VideoToolbox su un layer Metal dedicato (`CAMetalLayer`). Permette di riprodurre video in alta definizione senza costringere il server a transcodificare.
- **Interfaccia a Vetro**: controlli su misura con orientamento orizzontale automatico su iPhone e pulsante di blocco (*lucchetto*) per evitare tocchi involontari durante la visione.

---

## Moduli Video Sora e Streaming Anime

Puoi collegare sorgenti anime esterne tramite i **moduli video Sora**:
- **Aggiunta Rapida**: incolla l'URL del manifest JSON del modulo in *Esplora › Altro › Ottieni estensioni › Sora*, oppure apri un link diretto con schema `rmanga://add-module?url=...`.
- **Estrazione Stream Multi-Server**: il modulo recupera automaticamente server alternativi, risoluzioni (1080p, 720p, 480p) e header di rete necessari per lo streaming.
- **Episodi Integrati nella Libreria**: le serie anime appaiono nella tua libreria con le stesse card dei manga: le puntate sono numerate per stagione, arricchite da fotogrammi 16:9 e sinossi fornite dal database Anira/Kitsu.
- **Download Offline**: puoi scaricare gli episodi in background tramite sessioni HLS resilienti (`.movpkg` o `.mp4`) per guardarli in aereo o fuori casa senza connessione.

---

## Salto Automatico Sigle con AniSkip e AniList

Dimentica il fastidio di dover avanzare a mano di un minuto e mezzo all'inizio di ogni episodio:
1. **Riconoscimento Automatico**: rManga individua l'ID MyAnimeList della serie interrogando in background il catalogo di AniList.
2. **Integrazione con AniSkip**: recupera i timestamp precisi di:
   - **Sigla Iniziale (Opening)**
   - **Riassunto Episodio Precedente (Recap)**
   - **Sigla Finale (Ending / Outro)**
3. **Pulsante "Salta Sigla" o Salto Automatico**: durante i secondi della sigla compare una pillola interattiva sopra la barra del tempo. Puoi premere per saltare all'istante, oppure attivare l'opzione **Salta automaticamente** in *Impostazioni › Video*.

---

## Sottotitoli Stilizzati ASS/SSA e Multilingua

- **Sottotitoli Avanzati Anime (ASS/SSA)**: con il motore mpv, i sottotitoli complessi mantengono i font originali, i colori distintivi per personaggio, gli effetti di posizionamento dinamico e il karaoke.
- **Sottotitoli Esterni**: puoi importare file di sottotitoli `.srt` o `.vtt` direttamente dal tuo dispositivo e sincronizzarli tramite il cursore di ritardo temporale (*offset delay*).
- **Tracce Audio Multiple**: seleziona la lingua del parlato desiderata (es. doppiaggio italiano o audio originale giapponese) con salvataggio automatico della preferenza per l'intera serie.

---

## Gesti Touch sul Player
- **Doppio Tocco a Sinistra/Destra**: salta indietro o avanti di 10 secondi (cumulativo).
- **Pressione Prolungata (Long Press)**: accelera la riproduzione a velocità **2x** finché tieni il dito premuto.
- **Scorrimento Orizzontale**: scrub temporale fluido con indicatore dello scarto in secondi al centro.
- **Scorrimento Verticale**: la metà sinistra dello schermo regola la luminosità, la metà destra il volume di sistema.
