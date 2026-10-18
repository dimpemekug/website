---
title: "Pulizia e Copie Sanificate"
description: "Rimozione sicura di coordinate GPS e dati identificativi ed esportazione di copie sanificate per la condivisione."
project: "rexif"
order: 7
section: "Privacy & Sicurezza"
---

## Tutela della Privacy Fotografica

Le foto digitali moderne incorporano dati che possono rivelare informazioni sensibili:
- Coordinate GPS millimetriche della propria abitazione, scuola o luoghi abituali.
- Numero di serie del corpo macchina e dell'ottica (che collegano in modo univoco scatti diversi alla stessa attrezzatura).
- Nome del fotografo o dell'account computer registrato nei metadati IPTC.

rExif offre sia la rimozione mirata di singoli campi, sia la generazione automatica di copie sanificate prima della pubblicazione sul web.

## Rimozione Mirata nei File Originali

Se desideri igienizzare direttamente i tuoi file:
- **Rimozione Posizione GPS**: Seleziona le foto, fai clic destro e scegli **Rimuovi posizione** (oppure clicca sul pulsante elimina accanto alle coordinate nell'Inspector). I tag `GPSLatitude`, `GPSLongitude`, `GPSAltitude` e i toponimi derivati vengono azzerati.
- **Rimozione Autore e Copyright**: Seleziona gli elementi e cancella il contenuto dei campi nell'Inspector o tramite la scheda di modifica in blocco.
- **Conferma non distruttiva**: Le rimozioni compaiono in arancione come qualsiasi altra modifica e diventano effettive solo premendo **Salva** (`⌘S`).

## Esporta Copie Senza Dati Personali (`CleanExportSheet`)

Per non rischiare di perdere i metadati storici dai tuoi archivi originali, rExif include la funzione dedicata **Esporta copie senza dati personali...**:

1. Seleziona le foto o i video che intendi condividere.
2. Dal menu principale o dalla barra degli strumenti scegli **Esporta copie senza dati personali...**.
3. Si aprirà la finestra di configurazione dell'esportazione pulita (`CleanExportSheet`), dove potrai indicare la cartella di destinazione.
4. rExif genera nuove copie dei file con le seguenti caratteristiche:
   - **Coordinate geografiche GPS rimosse al 100%**.
   - **Autore, proprietario e dati personali rimossi**.
   - **Numero di serie del dispositivo e MakerNotes rimossi**.
   - **Qualità visiva dei pixel preservata**: la matrice grafica dell'immagine o del video non subisce alcuna ricompressione o transcodifica.
   - **I tuoi file master originali restano intatti e completi sul Mac**.

> [!IMPORTANT]
> L'intero processo di sanificazione avviene localmente all'interno della Sandbox di macOS: nessun byte lascia il tuo computer, a differenza dei servizi online gratuiti che richiedono l'upload dei file su server remoti.
