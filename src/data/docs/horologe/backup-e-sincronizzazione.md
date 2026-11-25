---
title: "Backup, sincronizzazione ed esportazione"
description: "Backup ZIP con foto, copia di sicurezza da ripristinare, sincronizzazione iCloud su iOS, schede PDF, inventario per l'assicurazione e CSV in Horologe."
project: "horologe"
order: 6
section: "Dati e Backup"
---

## Il backup ZIP

Horologe crea un **archivio `.zip` completo**, con i dati e i file:

```text
Backup Horologe 2026-11-25 10-30.zip
├── manifest.json            ← orologi, revisioni, giorni al polso, precisione
├── watch_1_cover.jpg        ← foto di copertina
├── watch_1_gallery_1.jpg    ← foto della galleria
├── watch_1_att_1.pdf        ← allegati
├── watch_2_cover.jpg
└── ...
```

Il formato è lo stesso su iOS e Android: esportando l'archivio da un iPhone puoi importarlo su Android (e viceversa) e ritrovare ogni foto e dato al suo posto. Su Android puoi condividere il backup oppure salvarlo in una cartella; Android importa anche i vecchi backup in JSON.

### Importare un backup
L'importazione **sostituisce** la collezione attuale con quella del backup, dopo una conferma.

### Copia di sicurezza
Prima di un'importazione, di un azzeramento o del caricamento dei dati di esempio, Horologe salva sul dispositivo una **copia di sicurezza** della collezione attuale, su iOS e su Android. Se cambi idea, nelle Impostazioni tocca **Ripristina collezione precedente**: la copia prende il posto della collezione attuale, che a sua volta diventa la nuova copia, così puoi sempre tornare indietro.

La copia resta nello spazio dell'app ed è esclusa dal backup del dispositivo.

---

## Sincronizzazione iCloud (solo iOS)

Su iPhone e iPad puoi attivare la sincronizzazione nelle Impostazioni, alla voce **Dati**. Horologe usa **CloudKit**, nel database privato del tuo account iCloud:
- **Cosa viaggia**: orologi, foto, allegati, revisioni, misurazioni e giorni al polso. Le impostazioni restano su ogni dispositivo.
- **Foto e allegati senza doppioni**: ogni file è identificato dal suo contenuto; se è già in iCloud non viene caricato di nuovo, e se è già sul dispositivo non viene riscaricato.
- **Collezioni grandi**: se CloudKit chiede di rallentare, l'app attende e riprova invece di interrompersi.
- **Chi vince**: se la collezione è cambiata su più dispositivi, prevale la modifica più recente.

Su Android non c'è sincronizzazione: l'app non si collega a Internet. Il backup di Android, se attivo, può includere i dati dell'app.

---

## PDF e CSV

- **Scheda PDF dell'orologio**: un documento con foto, dati tecnici, storico delle revisioni e misurazioni di precisione, dal menu della pagina dell'orologio.
- **PDF per l'assicurazione**: un inventario A4 degli orologi in collezione (posseduti e in riparazione), con un riepilogo e una scheda per ciascuno con foto, referenza, numero di serie, dati d'acquisto e documenti. Si crea dalle Impostazioni, su iOS e su Android.
- **CSV**: l'intera collezione in formato tabellare, con il punto e virgola come separatore e le intestazioni nella lingua dell'app, da aprire in Excel, Numbers o Fogli Google.
