---
title: "Confronto iOS e Android"
description: "Differenze tra la versione iOS e la versione Android di DomoMeter: tecnologie, funzioni disponibili, archiviazione dei dati e interfaccia."
project: "domometer"
order: 2
section: "Piattaforme"
---

## Due versioni native

DomoMeter usa lo stesso modello di calcolo e lo stesso formato di backup su entrambe le piattaforme, ma ciascuna versione è sviluppata con gli strumenti nativi del proprio sistema, per seguirne fedelmente le linee guida. La versione iOS ha alcune funzioni in più, indicate nella tabella.

---

## Tabella comparativa

| Caratteristica | DomoMeter per iOS | DomoMeter per Android |
| :--- | :--- | :--- |
| **Linguaggio e framework** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design** | Linee guida Apple, colore d'accento a scelta | Material 3, colori dinamici (Material You) su Android 12+ |
| **Requisiti minimi** | iOS/iPadOS 18.0 o successivo | Android 8.0 (API 26) o successivo |
| **Archiviazione** | Documento JSON in *Application Support* | Database SQLite con **Room** |
| **Connessione a Internet** | Solo per iCloud, se attivato | **Nessuna** (nessun permesso nel manifest) |
| **Sincronizzazione** | iCloud (CloudKit, database privato) | Nessuna, solo backup su file |
| **Letture, fasce F1/F2/F3, profili, limiti annui** | Sì | Sì |
| **Note e sostituzione del contatore** | Sì | No |
| **Tariffe e stima della bolletta** | Sì, con storico tariffe e budget | No |
| **Promemoria di lettura** | Sì | No |
| **Importazione ed esportazione CSV** | Sì | No |
| **Utenze personalizzate e stima CO₂** | Sì | No |
| **Schermi grandi** | iPad | Tablet, orizzontale e pieghevoli |
| **Lingua dell'app** | Scelta nell'app, indipendente dal sistema | Lingua per app (AppCompat) |
| **Formato di backup** | JSON `domometer-backup`, `schemaVersion: 1` | JSON `domometer-backup`, `schemaVersion: 1` |

Entrambe le versioni sono disponibili in sette lingue (italiano, inglese, spagnolo, portoghese, francese, tedesco e russo) e hanno tema chiaro, scuro o automatico.

---

## Dettagli per piattaforma

### DomoMeter per iOS
- **Sincronizzazione iCloud**: puoi attivare la sincronizzazione tra iPhone e iPad. L'intero archivio viene salvato come un unico record nel tuo database privato CloudKit; a ogni sincronizzazione vince la versione più recente. Una pagina dedicata mostra lo stato dell'account, l'ultima sincronizzazione ed eventuali errori, e permette di sincronizzare subito.
- **Costi e budget**: tariffa per ogni utenza (prezzo unitario e quota fissa mensile), fatturazione mensile, bimestrale o semestrale, storico delle tariffe e budget di spesa.
- **Promemoria**: una notifica per utenza nel giorno e all'ora che scegli, ogni mese, ogni pochi mesi o una volta l'anno.
- **Navigazione**: barra in basso o menu, sei colori d'accento.
- **Accessibilità**: supporto completo a VoiceOver e Dynamic Type.

### DomoMeter per Android
- **Nessun accesso alla rete**: l'app non dichiara alcun permesso, neppure quello per Internet. I dati non possono lasciare il telefono, se non tramite i backup che esporti tu.
- **Material You**: su Android 12 o successivo l'interfaccia può prendere i colori dallo sfondo del dispositivo.
- **Layout adattivo**:
  - sotto i **600 dp** (telefoni): barra di navigazione in basso e una colonna;
  - da **600 dp** in su, o con il telefono in orizzontale: barra laterale (*navigation rail*) e due colonne di card;
  - da **840 dp** in su: elenco e dettaglio affiancati;
  - sui **pieghevoli** aperti a libro, la divisione tra i due pannelli cade sulla cerniera (`FoldingFeature`), così nessun contenuto finisce sulla piega.

---

## Backup compatibili

Grazie al formato comune, **un backup creato su iPhone si importa senza modifiche su Android, e viceversa**. Il file contiene profili, letture e impostazioni, con i valori salvati nelle unità di base (litri per l'acqua, kWh per l'elettricità, Smc per il gas). I dati presenti solo su iOS, come le tariffe, vengono ignorati dalla versione Android.
