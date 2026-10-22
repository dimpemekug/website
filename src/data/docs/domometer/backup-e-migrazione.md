---
title: "Backup, ripristino e migrazione"
description: "Formato di backup JSON, ripristino, sincronizzazione iCloud, migrazione dalla vecchia versione Flutter e trasferimento dei dati tra iOS e Android in DomoMeter."
project: "domometer"
order: 5
section: "Dati e Backup"
---

## Un formato di backup comune

DomoMeter usa un formato di backup JSON aperto (`format: domometer-backup`, `schemaVersion: 1`):

- **Compatibile tra piattaforme**: un backup esportato da iOS si importa su Android e viceversa. Puoi passare da iPhone ad Android (e ritorno) senza perdere letture.
- **Unità di base**: nel backup i valori sono sempre salvati nelle unità di base (litri per l'acqua, kWh per l'elettricità, Smc per il gas). Cambiare l'unità mostrata, per esempio da litri a metri cubi, non modifica né arrotonda i dati salvati.

---

## Esportare un backup

1. Apri le **Impostazioni** dell'app.
2. Vai a **Backup e importazione**.
3. Tocca **Esporta backup**: viene creato un file `.json` con profili, letture e impostazioni.
4. Salvalo nei file del dispositivo, condividilo o conservalo dove preferisci.

---

## Ripristinare un backup

1. In **Impostazioni › Backup e importazione** tocca **Importa backup**.
2. Scegli un file JSON creato da qualsiasi versione di DomoMeter, anche dalla vecchia app.
3. Conferma: **l'importazione sostituisce completamente** i dati, i profili e le impostazioni attuali con quelli del backup.

Dalla stessa sezione puoi anche **resettare il database**, cancellando tutti i dati locali, o caricare dei dati di esempio.

---

## Sincronizzazione iCloud (iOS)

Su iOS puoi attivare la sincronizzazione con iCloud: l'archivio viene salvato nel tuo database privato CloudKit e confrontato tra i dispositivi, mantenendo la versione più recente. Le copie in iCloud usano lo stesso formato dei backup.

---

## Migrazione dalla versione precedente

Se avevi installato la vecchia versione di DomoMeter sviluppata in Flutter, il passaggio alle versioni native avviene da solo al primo avvio:

- **Su iOS**: l'app trova il vecchio archivio `domometer.db` e lo importa nel nuovo documento JSON in *Application Support*.
- **Su Android**: `LegacySembastMigrator` legge il vecchio archivio `filesDir/domometer.db`, copia ogni record nel database Room mantenendo le stesse chiavi e rinomina il vecchio file in `domometer.db.flutter-migrated`, senza cancellarlo. Al termine un messaggio conferma la migrazione.

Nessun dato viene cancellato o perso.
