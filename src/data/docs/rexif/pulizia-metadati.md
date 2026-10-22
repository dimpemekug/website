---
title: "Pulizia e copie senza dati personali"
description: "Rimozione della posizione GPS e dei dati personali ed esportazione di copie da condividere in rExif."
project: "rexif"
order: 7
section: "Privacy & Sicurezza"
---

## Perché ripulire le foto

Le foto digitali contengono dati che possono rivelare informazioni personali:
- le coordinate GPS precise di casa, della scuola o dei luoghi che frequenti;
- il numero di serie della fotocamera e dell'obiettivo, che collega foto diverse alla stessa attrezzatura;
- il nome del fotografo o del proprietario della fotocamera.

rExif permette sia di togliere singoli campi dai file originali, sia di esportare copie già ripulite da condividere.

## Togliere campi dagli originali

Se vuoi ripulire direttamente i tuoi file:
- **Posizione**: seleziona le foto e scegli **Rimuovi posizione** dal menu contestuale (oppure usa il pulsante accanto alle coordinate nell'inspector). Latitudine, longitudine e altitudine vengono cancellate.
- **Autore e copyright**: seleziona gli elementi e cancella i campi nell'inspector o con la scheda Testo delle modifiche in blocco.
- **Nessuna sorpresa**: le rimozioni compaiono in arancione come qualsiasi altra modifica e diventano effettive solo quando premi **Salva** (`⌘S`).

## Esporta copie senza dati personali

Per condividere foto e video senza toccare i tuoi originali, usa **File** › **Esporta copie senza dati personali…**:

1. seleziona le foto o i video da condividere;
2. scegli **Esporta copie senza dati personali…**;
3. nella finestra che si apre scegli cosa tenere:
   - **Data e ora di scatto** (attiva di default);
   - **Autore e copyright** (attiva di default);
   - **Descrizione**;
   - **Fotocamera e obiettivo**;
4. scegli la cartella di destinazione.

Le copie vengono create:
- **senza posizione GPS**;
- **senza numeri di serie, MakerNote, software usato e cronologia delle modifiche**;
- con i soli campi che hai scelto di tenere, comprese le modifiche non ancora salvate;
- **senza ricompressione**: pixel e fotogrammi restano identici;
- **lasciando intatti gli originali** sul Mac.

> [!IMPORTANT]
> Tutto avviene sul tuo Mac, all'interno della sandbox: nessun file viene caricato su server esterni, al contrario dei servizi online che chiedono di caricare le foto.
