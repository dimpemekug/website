---
title: "Anime e video"
description: "Il player video di rManga: due motori (AVPlayer e libmpv per MKV), moduli Sora, Jellyfin, salto delle sigle con AniSkip, sottotitoli ASS e Picture in Picture."
project: "rmanga"
order: 5
section: "Anime e Video"
---

## Il player

rManga ha un player video suo, pensato per anime, serie e film, che supera i limiti del player di sistema di iOS:

- **Due motori**:
  - **AVPlayer di Apple**: per HLS (`.m3u8`), MP4 e MOV, con Picture in Picture (che parte da solo andando alla schermata Home), AirPlay e audio in background con i controlli sulla schermata di blocco e nel Centro di Controllo.
  - **libmpv** (via MoltenVK su Metal): per **MKV, WebM, AVI, TS** e per i file che AVPlayer non riesce a leggere, con decodifica hardware VideoToolbox. L'episodio passa da solo a mpv dallo stesso punto; puoi anche scegliere il motore a mano o usare sempre mpv (Impostazioni › Video). Picture in Picture e AirPlay restano di AVPlayer.
- **Controlli**: su iPhone il player resta in orizzontale; un lucchetto blocca i tocchi involontari. Velocità, riempi/adatta, server, lingua dell'audio e sottotitoli sono in un foglio di opzioni.

---

## Moduli video Sora

Puoi aggiungere fonti video con i **moduli Sora**:
- **Aggiunta**: incolla l'indirizzo del JSON del modulo in *Esplora › Altro › Ottieni estensioni › Sora*, oppure apri un link `rmanga://add-module?url=…`. Dallo stesso menu, **Riproduci indirizzo video** apre un qualsiasi `.m3u8` o `.mp4`.
- **Più server**: il modulo propone i server disponibili, con gli header necessari; il server scelto viene ricordato per la serie e, se uno stream non parte, puoi passare a un altro.
- **Episodi in libreria**: le serie stanno in libreria come i manga. Ogni episodio ha un fotogramma 16:9, la barra di quanto hai visto, la durata e il titolo; per gli anime titoli e immagini mancanti vengono completati da Anira (o Kitsu).
- **Download**: gli episodi si scaricano in background (HLS come `.movpkg`, oppure il file `.mp4`) per guardarli senza connessione; per le playlist HLS scegli la qualità massima (1080p, 720p o 480p) in Impostazioni › Video.
- **Altri player**: se installati, gli episodi in streaming si possono aprire anche in VLC, Infuse, Outplayer, nPlayer o SenPlayer.

---

## Salto delle sigle con AniSkip e AniList

Niente più avanti veloce a mano all'inizio di ogni episodio:
1. **Riconoscimento della serie**: rManga trova l'ID MyAnimeList della serie cercando il titolo su AniList, una volta per serie.
2. **Tempi da AniSkip**: recupera i tempi, segnati dagli utenti, di:
   - **sigla iniziale**;
   - **riassunto**;
   - **titoli di coda**.
3. **"Salta sigla" o salto automatico**: durante il tratto compare un pulsante sopra la barra del tempo, anche con i controlli nascosti; con **Salta automaticamente** (Impostazioni › Video) il salto avviene da solo.

Se il titolo porta alla serie sbagliata (un'altra stagione, uno speciale), con **Serie per saltare sigle** nel menu della serie puoi sceglierla a mano o disattivare i salti.

---

## Sottotitoli e audio

- **ASS/SSA**: con mpv i sottotitoli ASS, dentro il file o importati, mantengono caratteri, colori e posizioni originali.
- **Sottotitoli esterni**: importa file `.srt`, `.vtt` o `.ass`, regola dimensione, colore, riquadro e altezza, e allineali con il ritardo.
- **Tracce audio**: scegli la lingua dell'audio (es. doppiaggio o originale giapponese); la scelta viene ricordata per la serie, e in Impostazioni › Video puoi preferire l'audio giapponese per le serie nuove.

---

## Gesti nel player
- **Doppio tocco a sinistra o a destra**: indietro o avanti di 10 secondi (i tocchi di fila si sommano).
- **Pressione prolungata**: velocità **2×** finché tieni il dito premuto.
- **Trascinamento orizzontale**: spostamento nel video, con il tempo di arrivo e lo scarto mostrati al centro.
- **Trascinamento verticale**: a sinistra la luminosità, a destra il volume.
