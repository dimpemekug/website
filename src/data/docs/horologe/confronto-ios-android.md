---
title: "Confronto iOS e Android"
description: "Tecnologie, archiviazione dei dati, sincronizzazione, aspetto e differenze tra Horologe per iOS e Horologe per Android."
project: "horologe"
order: 2
section: "Piattaforme"
---

## Due versioni native

Horologe usa su **iOS** e **Android** lo stesso database SQLite (schema versione 11), la stessa cartella delle immagini e lo stesso formato di backup ZIP. Ciascuna versione segue però le tecnologie e le convenzioni della propria piattaforma.

---

## Tabella comparativa

| Caratteristica | Horologe per iOS | Horologe per Android |
| :--- | :--- | :--- |
| **Linguaggio e UI** | Swift 6, SwiftUI con `@Observable` | Kotlin 2.4, Jetpack Compose |
| **Design** | Linee guida Apple, layout adattivo per iPhone e iPad | Material 3: tema nero e giallo `#FFE600`, colori dinamici o un colore a scelta |
| **Requisiti minimi** | iOS/iPadOS 17.0 o successivo | Android 7.0 (API 24) o successivo |
| **Database** | **GRDB.swift** su SQLite (`Documents/horologe.db`) | SQLite nativo (`WatchDatabase.kt`, `app_flutter/horologe.db`) |
| **Foto e allegati** | `Documents/watch_images/` | `app_flutter/watch_images/` |
| **Sincronizzazione** | iCloud (CloudKit, database privato) | Nessuna, solo backup su file |
| **Blocco dell'app** | Face ID / Touch ID | Impronta, volto o PIN (BiometricPrompt) |
| **PDF** | Scheda del singolo orologio e inventario della collezione per l'assicurazione | Scheda del singolo orologio |
| **Misura della precisione** | Assistente guidato in due letture o inserimento manuale | Inserimento manuale dello scarto |
| **Promemoria revisioni** | Notifiche locali (`UserNotifications`) | `AlarmManager`, riprogrammati al riavvio e dopo ogni aggiornamento |
| **Formato di backup** | ZIP con `manifest.json` (versione 3) e foto | ZIP con `manifest.json` (versione 3) e foto |

---

## Dettagli per piattaforma

### Horologe per iOS
- **Sincronizzazione iCloud**:
  - il record `primary-v2` contiene un manifest JSON compatto con orologi, revisioni, giorni al polso e misurazioni;
  - foto e allegati viaggiano come record separati `file-<sha256>`, identificati dal loro contenuto: un file già presente in iCloud non viene caricato di nuovo, e uno già presente sul dispositivo non viene riscaricato;
  - con collezioni molto grandi CloudKit può limitare le richieste (HTTP 429): Horologe rispetta i tempi di attesa indicati dal server (`CKErrorRetryAfterKey`) e fa una pausa tra un gruppo di file e il successivo, così il primo caricamento arriva in fondo.
- **iPad**: barra laterale adattiva e griglia più ampia.
- **Diario al polso** con calendario mensile.

### Horologe per Android
- **Colori**: tema predefinito nero con il giallo `#FFE600`; in alternativa i colori dinamici presi dallo sfondo (Android 12+) o uno tra otto colori di base, da cui Material 3 ricava l'intera tavolozza.
- **Nessun accesso a Internet**: l'app non chiede il permesso di rete; dati e foto restano nella memoria riservata dell'app.
- **Promemoria affidabili**: dopo un riavvio del telefono o un aggiornamento dell'app (`MY_PACKAGE_REPLACED`), un ricevitore dedicato riprogramma tutti i promemoria delle revisioni.
- **Schermi grandi**: layout per tablet e pieghevoli.

---

## Backup intercambiabili

L'archivio `.zip` di Horologe contiene:
1. `manifest.json`: tutta la collezione in formato JSON (versione 3), con revisioni, giorni al polso e misurazioni di precisione;
2. le foto e gli allegati, con nomi prevedibili (`watch_1_cover.jpg`, `watch_1_gallery_1.jpg`, `watch_1_att_1.pdf`…).

**Puoi esportare la collezione da un iPhone e importarla su Android, o viceversa, senza perdere dati, date, foto o storico degli interventi.**
