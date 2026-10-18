---
title: "Backup, Ripristino e Migrazione"
description: "Formato backup JSON standard, migrazione da versioni precedenti e trasferimento dati tra iOS e Android in DomoMeter."
project: "domometer"
order: 5
section: "Dati e Backup"
---

## Il Formato di Backup Universale

DomoMeter impiega un formato di backup JSON aperto e documentato (`format: domometer-backup`, `schemaVersion: 1`):

- **Interoperabilità Totale**: il file esportato da iOS è identico a quello esportato da Android. Puoi passare da un iPhone a uno smartphone Android (e viceversa) in qualsiasi momento senza perdere neanche una lettura.
- **Unità Base Standard**: all'interno del backup, i dati sono sempre salvati nelle unità fondamentali (litri per l'acqua, kWh per l'elettricità, Smc per il gas). Questo significa che se cambi la preferenza di visualizzazione da litri a metri cubi, il database sottostante non viene mai alterato o degradato da conversioni con arrotondamento.

---

## Come Eseguire un Backup Manuale

1. Apri **Impostazioni** all'interno dell'app.
2. Scorri fino alla sezione **Backup e Ripristino**.
3. Tocca **Esporta Backup**: verrà generato un file con estensione `.json` contenente tutte le utenze e lo storico.
4. Salva il file nella memoria del dispositivo, invialo via messaggio o conservalo su un supporto esterno.

---

## Come Ripristinare un Backup

1. In **Impostazioni › Backup e Ripristino**, tocca **Importa Backup**.
2. Seleziona il file JSON generato in precedenza da qualsiasi versione di DomoMeter.
3. Conferma l'operazione: i dati verranno integrati e le statistiche ricalcolate all'istante.

---

## Migrazione Automatica dalle Versioni Precedenti

Se avevi già installato la precedente versione dell'app sviluppata in Flutter, il passaggio alle nuove versioni native avviene in modo completamente trasparente:

- **Su iOS**: l'app individua automaticamente il database storico `domometer.db` al primo avvio ed esegue la migrazione immediata verso il nuovo archivio JSON in *Application Support*.
- **Su Android**: il componente `LegacySembastMigrator` legge il vecchio archivio `filesDir/domometer.db`, trasferisce ogni record nel database SQLite Room preservando le medesime chiavi, e rinomina il vecchio file in `domometer.db.flutter-migrated` a scopo di sicurezza. Nessun dato viene cancellato o perso.
