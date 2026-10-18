---
title: "Confronto iOS e Android"
description: "Differenze architetturali, timer in background, Live Activities vs Foreground Service e design tra iOS e Android in Time Tracker."
project: "time-tracker"
order: 2
section: "Piattaforme"
---

## Due Versioni Native a Confronto

Time Tracker condivide tra **iOS** e **Android** lo stesso schema database (schema relazionale v18), lo stesso calcolo delle aggregazioni economiche e lo stesso algoritmo per i colori dei progetti. Ciononostante, le due edizioni sono state ingegnerizzate rispettando profondamente le convenzioni di ciascuna piattaforma.

---

## Tabella Comparativa

| Funzionalità | Time Tracker per iOS | Time Tracker per Android |
| :--- | :--- | :--- |
| **Linguaggio e UI** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design System** | Apple Human Interface Guidelines | Material 3, Material You Dynamic Color |
| **Timer Pomodoro Esterno** | **Live Activity** & **Dynamic Island** (WidgetKit) | **Foreground Service** con notifica continua persistente |
| **Pulsanti di Controllo Timer** | Interattivi nella Dynamic Island e Lock Screen | Azioni rapide Pausa, Riprendi e Stop nella notifica |
| **Architettura Schermate** | Fogli modali standard e navigazione a schede | **Niente modali**: schermate complete o pannelli affiancati |
| **Persistenza Dati** | SQLite nativo via storage documentale | SQLite relazionale nativo (`time_tracker.db` schema v18) |
| **Sincronizzazione Cloud** | Apple CloudKit (sincronizzazione automatica tra device) | Nessuna (rigorosamente offline-first, nessun permesso internet) |
| **Adattamento Tablet** | Barra laterale comprimibile `.sidebarAdaptable` su iPad | **Navigation Rail** laterale e layout adattivo a due colonne |
| **Formato Backup** | JSON unificato | JSON unificato |

---

## Dettagli Specifici per Piattaforma

### Time Tracker per iOS
- **Live Activity e Dynamic Island**:
  - Quando avvii una sessione Pomodoro, viene attivata una Live Activity gestita dall'estensione `TimeTrackerWidgets`.
  - Il tempo rimanente, il progetto attivo e la barra di avanzamento circolare sono visibili nella Dynamic Island di iPhone e sulla schermata di blocco, aggiornati in tempo reale dal sistema senza consumare batteria.
- **Sincronizzazione iCloud CloudKit**: progetti, tariffe e registrazioni orarie vengono sincronizzati tra iPhone e iPad sfruttando il database privato CloudKit personale dell'utente.

### Time Tracker per Android
- **Foreground Service con Notifica Continua**:
  - Android gestisce i timer in background tramite un Foreground Service di sistema, garantendo che il processo non venga terminato dalla gestione della memoria dell'OS.
  - La notifica include controlli diretti per mettere in pausa, riprendere o arrestare il cronometro senza dover aprire l'app.
- **Material 3 Puro e Palette CIELAB**:
  - Nessun colore cablato nel codice: l'app supporta la colorazione dinamica Material You su Android 12+ basata sullo sfondo, oppure sei tonalità armoniche calcolate in spazio colore CIELAB polare con contrasti superiori a 6:1 (ben oltre i requisiti WCAG AA).
- **Filosofia "Niente Modali"**:
  - Gli editor di attività e progetti sono pagine a schermo intero (o pannelli affiancati su schermi larghi e tablet), offrendo un'esperienza d'uso fluida e ordinata.
- **Rigorosamente Offline**: l'app per Android non dichiara il permesso di accesso a Internet nel manifest.

---

## Backup Condiviso e Compatibilità

Il file JSON generato dalla funzione **Esporta Backup** in Impostazioni utilizza la stessa struttura di campi e tipi sia su iOS che su Android. Puoi esportare il tuo database su iPhone e re-importarlo su un telefono Android (e viceversa) mantenendo intatte tutte le ore, le tariffe e i colori dei progetti.
