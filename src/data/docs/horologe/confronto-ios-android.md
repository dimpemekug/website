---
title: "Confronto iOS e Android"
description: "Architettura, persistenza, design system e differenze tecniche tra Horologe per iOS e Horologe per Android."
project: "horologe"
order: 2
section: "Piattaforme"
---

## Due Versioni Native a Confronto

Horologe condivide tra **iOS** e **Android** lo stesso schema dati relazionale (schema v11), la stessa gestione delle cartelle immagini, lo stesso formato di backup compresso ZIP e la medesima precisione cronometrica. Ciascuna edizione sfrutta tuttavia le tecnologie e convenzioni più avanzate della rispettiva piattaforma.

---

## Tabella Comparativa

| Caratteristica | Horologe per iOS | Horologe per Android |
| :--- | :--- | :--- |
| **Linguaggio e UI** | Swift 6, SwiftUI + `@Observable` | Kotlin 2.4, Jetpack Compose |
| **Design System** | Apple HIG, layout adattivo iPhone & iPad | Material 3 (Palette Nera/Oro `#FFE600` e Material You) |
| **Libreria Database** | **GRDB.swift** su SQLite (schema v11) | SQLite diretto nativo (`WatchDatabase.kt`, schema v11) |
| **Foto e Allegati** | `Documents/watch_images/` con fallback path | `app_flutter/watch_images/` relativi |
| **Sincronizzazione Cloud** | Apple CloudKit (multi-record, deduplicazione SHA-256) | Nessuna (rigorosamente offline-first) |
| **Protezione App** | Sblocco biometrico Face ID / Touch ID | Sblocco biometrico tramite BiometricPrompt |
| **Export Scheda PDF** | Motore nativo SwiftUI / Core Graphics | Motore nativo Android `PdfDocument` con font di sistema |
| **Promemoria Revisioni** | Notifiche locali iOS via `UserNotifications` | `AlarmManager` con riprogrammazione al boot / aggiornamento |
| **Formato Backup** | Archivio ZIP (`manifest.json` v3 + cartella foto) | Archivio ZIP (`manifest.json` v3 + cartella foto) |

---

## Dettagli Specifici per Piattaforma

### Horologe per iOS
- **Sincronizzazione Intelligente su iCloud**:
  - Il record `primary-v2` sincronizza il manifest JSON compatto (orologi, revisioni, giorni al polso, precisione).
  - Le foto vengono caricate singolarmente con record `file-<sha256>`. Se una foto è già presente sul server, non viene ri-caricata (*content-addressable storage*).
  - Meccanismo di **auto-retry contro il throttling (HTTP 429)**: in collezioni con centinaia di orologi e foto in alta definizione, CloudKit può applicare limiti di frequenza. Horologe gestisce `withServerRetry` rispettando `CKErrorRetryAfterKey` per evitare interruzioni o blocchi.
- **Supporto iPad**: navigazione ottimizzata con barra laterale adattabile (`.sidebarAdaptable`) e visualizzazione a griglia espansa.

### Horologe per Android
- **Palette Brand e Material 3 Dinamico**:
  - Tema predefinito con elegante contrasto nero profondo e oro/giallo `#FFE600`.
  - Stile *Personalizzato*: estrazione automatica della tavolozza dallo sfondo del dispositivo (Android 12+) oppure scelta tra 8 semi colore calcolati con `material-color-utilities`.
- **Nessun Permesso di Rete**: l'app Android non richiede alcun permesso Internet: tutte le immagini e i database rimangono sigillati all'interno della sandbox del sistema operativo.
- **Ripristino Allarmi con `MY_PACKAGE_REPLACED`**: quando l'app viene aggiornata dal Play Store, un broadcast receiver dedicato ricalcola e riprogramma immediatamente tutte le scadenze e i promemoria delle revisioni.

---

## Interscambiabilità dei Backup ZIP

L'archivio `.zip` generato da Horologe include:
1. `manifest.json`: il dump completo della collezione in formato JSON versionato (versione 3).
2. La cartella con tutte le immagini nominate in modo deterministico (`watch_1_cover.jpg`, `watch_1_image_1.jpg`, ecc.).

**Puoi esportare la tua collezione da un iPhone e aprirla su un dispositivo Android, o viceversa, senza alcuna perdita di metadati, date, foto o storico interventi.**
