---
title: "Backup, sincronizzazione ed esportazione"
description: "Archivio ZIP con foto, copia di sicurezza, sincronizzazione CloudKit su iOS, schede PDF, inventario per l'assicurazione ed esportazione CSV in Horologe."
project: "horologe"
order: 5
section: "Dati e Backup"
---

## Il backup ZIP

Molte app di catalogazione esportano solo testo e perdono le immagini. Horologe crea invece un **archivio `.zip` completo**:

```text
Backup_Horologe.zip
├── manifest.json            ← orologi, revisioni, giorni al polso, precisione
├── watch_1_cover.jpg        ← foto di copertina
├── watch_1_gallery_1.jpg    ← foto della galleria
├── watch_1_att_1.pdf        ← allegati
├── watch_2_cover.jpg
└── ...
```

Il formato è lo stesso su iOS e Android: esportando l'archivio da un iPhone puoi importarlo su Android (e viceversa) e ritrovare ogni foto e dato al suo posto.

### Importare un backup
L'importazione **sostituisce** la collezione attuale con quella del backup. Su iOS, prima di farlo, Horologe salva automaticamente una **copia di sicurezza** della collezione corrente: se cambi idea, puoi tornare indietro con **Ripristina collezione precedente**. La stessa copia viene creata prima di un reset o del caricamento dei dati di esempio.

---

## Sincronizzazione iCloud (solo iOS)

Su iPhone e iPad Horologe può sincronizzare la collezione tramite **CloudKit**, nel tuo database privato:
- **Dati**: un manifest compatto nel record `primary-v2`.
- **Foto e allegati senza doppioni**: ogni file è un record `file-<sha256>` identificato dal suo contenuto; se è già in iCloud non viene caricato di nuovo.
- **Collezioni grandi**: le richieste vengono distribuite nel tempo e, se CloudKit chiede di rallentare (HTTP 429), l'app attende e riprova invece di interrompersi.
- **Chi vince**: se la collezione è cambiata su più dispositivi, prevale la modifica più recente.

---

## PDF e CSV

- **Scheda PDF dell'orologio**: un documento con foto, dati tecnici, storico delle revisioni e misurazioni di precisione, da condividere o allegare a una vendita.
- **PDF per l'assicurazione** (iOS): un inventario della collezione in formato A4 con riepilogo (numero di pezzi, valore d'acquisto per valuta, corredi completi), una tabella di tutti gli orologi e una scheda per ciascuno con foto, referenza, numero di serie, dati d'acquisto e documenti.
- **CSV**: l'intera collezione in formato tabellare, da aprire in Excel, Numbers o Fogli Google.
