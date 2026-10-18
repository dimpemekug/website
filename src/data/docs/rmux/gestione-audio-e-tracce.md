---
title: "Gestione Audio e Tracce"
description: "Estrazione tracce audio, silenziamento filmati, sostituzione audio e supporto codec AAC, MP3, Opus e FLAC in rMux."
project: "rmux"
order: 4
section: "Audio"
---

## Ispezione e Configurazione delle Tracce Audio

Spesso un file video contiene flussi audio multipli (lingue differenti, commenti del regista, audio surround 5.1). L'Inspector Audio di rMux permette di analizzare ciascuna traccia separatamente:

- **Copia Senza Ricodifica (*Copy*)**: mantiene il flusso audio originale senza alcuna perdita di campionamento o bit rate.
- **Transcodifica Audio**: converte la traccia in un codec standard per garantire compatibilità con lettori multimediali specifici.
- **Selezione Canali**: mixa da audio surround 5.1 a stereo o preserva l'audio multicanale intatto.

---

## Estrazione Audio da un Video

Se hai una registrazione, una conferenza o un concerto e desideri conservare solo il file audio:

1. Apri il video in rMux.
2. Dal menu delle impostazioni di esportazione, seleziona **Solo Audio**.
3. Scegli il formato desiderato:
   - **AAC / M4A**: formato standard Apple ad alta fedeltà.
   - **MP3 (tramite LAME LGPL)**: formato universale per qualsiasi lettore.
   - **Opus (BSD)**: ideale per parlato e podcast a basso bitrate con resa cristallina.
   - **FLAC / WAV (PCM)**: formati non compressi o lossless per la massima fedeltà sonora.
4. Esporta: rMux genererà un file audio autonomo in una frazione di secondo.

---

## Silenziamento e Sostituzione Audio

- **Rimuovi Traccia Sonora (Mute)**: disattivando la traccia audio con un semplice clic, esporti un video completamente muto senza dover passare per programmi di editing complessi.
- **Sostituzione Traccia**: puoi caricare un nuovo file audio (es. una colonna sonora o una voce registrata a parte) per sostituire o affiancare l'audio originario del filmato.
