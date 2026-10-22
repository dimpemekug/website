---
title: "Transcodifica e codec video"
description: "Encoder hardware VideoToolbox per H.264 e HEVC, AV1, VP9, Apple ProRes, contenitori e controllo della qualità in rMux."
project: "rmux"
order: 3
section: "Conversione"
---

## Copy o Transcode

Nell'**Inspector Video** scegli per la traccia video:
- **Copy**: il video viene copiato senza ricodifica (cambia solo il contenitore o la durata).
- **Transcode**: il video viene ricodificato con l'encoder e le impostazioni che scegli.

Il formato del file (**MP4, MOV, MKV, WebM o AVI**) si sceglie accanto al pulsante di esportazione. Se un contenitore non supporta un codec, rMux te lo segnala prima di esportare.

Tutti i codec inclusi sono compilati senza componenti GPL o non liberi (licenze LGPL e BSD), come richiesto per il Mac App Store.

---

## Codec video disponibili

### 1. H.264 e HEVC/H.265 con VideoToolbox
- **Accelerazione hardware**: usa il Media Engine dei chip Apple per codificare molto più velocemente che via software.
- **Profili**: per H.264 baseline, main e high; per HEVC main e main10 (10 bit), oppure scelta automatica.

### 2. Apple ProRes
Profili **422 Proxy, 422 LT, 422, 422 HQ, 4444 e 4444 XQ**, per chi vuole un formato intermedio fluido da usare nel montaggio.

### 3. AV1 e VP9
- **AV1 (con SVT-AV1)**: compressione di nuova generazione ad alta efficienza, adatta allo streaming e al web.
- **VP9 (con libvpx)**: diffuso sul web, ideale con il contenitore WebM.

rMux sa anche **leggere** video AV1 grazie al decoder dav1d.

---

## Controllo della qualità

Nel pannello di codifica puoi scegliere:
- **Qualità (CRF)**: qualità visiva costante; l'encoder assegna il bitrate necessario scena per scena.
- **Bitrate medio**: un bitrate fisso in kbps, con l'opzione della **codifica a 2 passaggi** per una distribuzione migliore.
- **Dimensione file**: indichi i megabyte desiderati e rMux calcola il bitrate per raggiungerli.

Altre opzioni:
- **Velocità** di codifica, da "Molto lento (qualità migliore)" a "Molto veloce (file più grande)";
- **Frequenza fotogrammi**: come la sorgente oppure 23,976, 24, 25, 29,97, 30, 48, 50, 59,94 o 60 fps;
- **Opzioni avanzate**: livello, intervallo tra i keyframe, numero di B-frame e titolo della traccia.

Risoluzione, ritaglio e rotazione si regolano nella sezione dei filtri (vedi [Filtri, sottotitoli e unione](/progetti/rmux/docs/filtri-sottotitoli-e-unione)).
