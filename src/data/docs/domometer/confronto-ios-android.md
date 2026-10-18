---
title: "Confronto iOS e Android"
description: "Differenze architetturali, tecnologie native, interfaccia e gestione dati tra la versione iOS e la versione Android di DomoMeter."
project: "domometer"
order: 2
section: "Piattaforme"
---

## Due Versioni Native a Confronto

Sebbene DomoMeter offra lo stesso modello di calcolo, la stessa precisione e un formato di backup condiviso, le implementazioni per **iOS** e **Android** sono state sviluppate ciascuna con il proprio stack nativo di riferimento per garantire la massima fedeltà alle linee guida di ciascuna piattaforma.

---

## Tabella Comparativa

| Caratteristica | DomoMeter per iOS | DomoMeter per Android |
| :--- | :--- | :--- |
| **Linguaggio e Framework** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design System** | Apple Human Interface Guidelines, sfocature dinamiche e stile retro opzionale | Material 3, Dynamic Color (Material You su Android 12+) |
| **Requisiti Minimi** | iOS 18.0 o successivo | Android 8.0 (API 26) o successivo |
| **Motore di Persistenza** | Documento JSON strutturato in *Application Support* | Database relazionale SQLite con **Room** |
| **Connessione a Internet** | **Facoltativa** (solo per CloudKit se abilitato) | **Assente** (nessun permesso `INTERNET` nel manifest) |
| **Sincronizzazione Cloud** | Apple CloudKit (container privato `DomometerSnapshot`) | Nessuna sincronizzazione cloud (rigorosamente offline) |
| **Dispositivi Pieghevoli** | Supporto standard iPadOS Split View | Adattamento cerniera (`FoldingFeature`) per pieghevoli |
| **Selettore Lingua** | Bundle interno indipendente dalla lingua di sistema | Integrazione per-app locale tramite Android AppCompat |
| **Formato Backup** | JSON `schemaVersion: 1` (`domometer-backup`) | JSON `schemaVersion: 1` (`domometer-backup`) |

---

## Dettagli Specifici per Piattaforma

### DomoMeter per iOS
- **Sincronizzazione iCloud CloudKit**: puoi abilitare la sincronizzazione automatica tra iPhone e iPad. Il backup viene inviato al container CloudKit personale (`DomometerSnapshot`/`primary`). Il meccanismo push/pull confronta i timestamp con risoluzione *last-write-wins*.
- **Stile Visivo Duplice**: include sia l'interfaccia moderna con componenti e animazioni native di iOS, sia un look alternativo monospaziato retrò ispirato ai display digitali dei contatori industriali.
- **Supporto Dark Mode**: entrambe le visuali si adattano istantaneamente al tema chiaro o scuro del sistema.

### DomoMeter per Android
- **Isolamento di Rete Rigoroso**: l'app per Android non dichiara il permesso di accesso a Internet nel file `AndroidManifest.xml`. È tecnicamente impossibile che qualsiasi dato esca dal telefono.
- **Material You Dinamico**: su dispositivi con Android 12 o successivo, i colori dell'interfaccia vengono estratti dinamicamente dallo sfondo impostato dall'utente sul dispositivo.
- **Layout Adattivo per Schermi Grandi e Pieghevoli**:
  - Sotto i **600dp** (telefoni compatti): barra di navigazione classica in basso.
  - Sopra i **600dp** (telefoni in orizzontale o tablet): barra laterale (*Navigation Rail*) con contenuti disposti su due colonne di card.
  - Sopra gli **840dp**: visualizzazione affiancata elenco + dettaglio.
  - Sui **telefoni pieghevoli** aperti a libro, la cerniera fisica viene rilevata tramite `FoldingFeature`, evitando che testo o pulsanti cadano sulla linea di piega.

---

## Interoperabilità Totale dei Backup

Grazie allo schema unificato dei dati, **un backup generato su iPhone può essere importato senza alcuna modifica su uno smartphone Android, e viceversa**. I file di backup contengono sia i profili abitativi che tutte le letture storiche memorizzate nelle unità base universali (litri per l'acqua, kWh per l'elettricità, Smc per il gas).
