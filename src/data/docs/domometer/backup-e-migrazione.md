---
title: "Backup, CSV e migrazione"
description: "Backup JSON, esportazione e importazione CSV, sincronizzazione iCloud, migrazione dalla versione Flutter e passaggio dei dati tra iOS e Android in DomoMeter."
project: "domometer"
order: 5
section: "Dati e Backup"
---

## Dove si trovano

Backup e CSV sono nella sezione **Dati** delle Impostazioni:
- su iOS, in **Impostazioni › Dati › Backup e importazione**; nella stessa sezione c'è anche **Sincronizzazione**, per iCloud;
- su Android, in **Impostazioni › Dati › Esporta dati**.

---

## Un formato di backup comune

DomoMeter usa un formato di backup JSON aperto (`format: domometer-backup`, `schemaVersion: 1`):

- **Compatibile tra piattaforme**: un backup esportato da iOS si importa su Android e viceversa, con tutti i dati: utenze personalizzate, note, contatori sostituiti, tariffe, budget, fattori di CO₂ e valuta. Puoi passare da iPhone ad Android (e ritorno) senza perdere niente.
- **Unità di base**: nel backup i valori sono sempre salvati nelle unità di base (litri per l'acqua, kWh per l'elettricità, Smc per il gas). Cambiare l'unità mostrata, per esempio da litri a metri cubi, non modifica né arrotonda i dati salvati.
- **Fuori dal backup**: i promemoria restano sul dispositivo e vanno riattivati dopo un ripristino.

---

## Esportare un backup

1. Apri la pagina dei backup (vedi sopra).
2. Tocca **Esporta backup**: viene creato un file `.json` con profili, letture e impostazioni. Su Android c'è anche **Condividi backup**, per mandarlo a un'altra app.
3. Salvalo nei file del dispositivo, condividilo o conservalo dove preferisci.

---

## Ripristinare un backup

1. Nella stessa pagina tocca **Importa backup**.
2. Scegli un file JSON creato da qualsiasi versione di DomoMeter, anche dalla vecchia app.
3. Conferma: **l'importazione sostituisce completamente** i dati, i profili e le impostazioni attuali con quelli del backup.

Dalla stessa pagina puoi anche **resettare il database**, cancellando tutti i dati locali, o caricare dei dati di esempio.

---

## Esportare e importare in CSV

- **Esporta CSV** crea un file per foglio di calcolo con tutte le letture di tutti i profili, dalla più recente: profilo, abitazione, utenza, fascia, data, valore nell'unità mostrata, unità e nota. Dove la lingua scrive i decimali con la virgola, le colonne sono separate da punto e virgola. Su iOS il file passa al foglio di condivisione; su Android lo salvi in una cartella che scegli.
- **Importa CSV** aggiunge letture a un'utenza da un file esterno. Scegli l'utenza (e la fascia, se attive), poi il file: una riga per lettura, con data e valore separati da virgola o punto e virgola e, se vuoi, una terza colonna con la nota. Separatore, decimali, formato della data e riga di intestazione vengono riconosciuti da soli.

Prima di importare, un riepilogo mostra le **letture pronte** e le **righe escluse** con il motivo (riga illeggibile, giorno già presente, valore più basso del precedente). Niente viene salvato finché non confermi, e l'importazione aggiunge letture senza sostituire quelle esistenti.

---

## Sincronizzazione iCloud (iOS)

Su iOS puoi attivare la sincronizzazione con iCloud da **Impostazioni › Dati › Sincronizzazione**: l'archivio viene salvato nel tuo database privato CloudKit e confrontato tra i dispositivi, mantenendo la versione più recente. La pagina mostra lo stato dell'account e l'ultima sincronizzazione, e con **Sincronizza ora** puoi forzarla. Le copie in iCloud usano lo stesso formato dei backup.

---

## Migrazione dalla versione precedente

Se avevi installato la vecchia versione di DomoMeter sviluppata in Flutter, il passaggio alle versioni native avviene da solo al primo avvio:

- **Su iOS**: l'app trova il vecchio archivio `domometer.db` e lo importa nel nuovo documento JSON in *Application Support*.
- **Su Android**: `LegacySembastMigrator` legge il vecchio archivio `filesDir/domometer.db`, copia ogni record nel database Room mantenendo le stesse chiavi e rinomina il vecchio file in `domometer.db.flutter-migrated`, senza cancellarlo. Al termine un messaggio conferma la migrazione.

Nessun dato viene cancellato o perso.
