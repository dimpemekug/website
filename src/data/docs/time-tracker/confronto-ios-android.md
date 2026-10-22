---
title: "Confronto iOS e Android"
description: "Differenze tra Time Tracker per iOS e per Android: timer fuori dall'app, colori dei progetti, archiviazione, sincronizzazione e interfaccia."
project: "time-tracker"
order: 2
section: "Piattaforme"
---

## Due versioni native

Le due versioni di Time Tracker hanno le stesse funzioni, lo stesso calcolo di ore, tariffe e IVA e lo stesso formato di backup. Ciascuna però segue da vicino le convenzioni della propria piattaforma.

---

## Tabella comparativa

| Funzionalità | Time Tracker per iOS | Time Tracker per Android |
| :--- | :--- | :--- |
| **Linguaggio e UI** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design** | Linee guida Apple, colore d'accento a scelta | Material 3, colori dinamici (Material You) o sei accenti |
| **Requisiti minimi** | iOS/iPadOS 18.0 o successivo | Android 7.0 (API 24) o successivo |
| **Timer fuori dall'app** | **Live Activity** nella Dynamic Island e sulla schermata di blocco | **Notifica continua** con Pausa, Riprendi e Stop |
| **Colore dei progetti** | Scelto da una griglia di colori di sistema | Calcolato automaticamente dal nome |
| **Editor** | Fogli modali | **Niente modali**: pagine intere o riquadri affiancati |
| **Database** | SQLite (`Documents/time_tracker.db`, schema v9) | SQLite (`app_flutter/time_tracker.db`, schema v18) |
| **Sincronizzazione** | iCloud (CloudKit, database privato) | Nessuna, solo backup su file |
| **Schermi grandi** | Barra laterale comprimibile su iPad (`.sidebarAdaptable`) | Barra laterale (*navigation rail*) e riquadri affiancati |
| **Formato di backup** | JSON comune | JSON comune |

---

## Dettagli per piattaforma

### Time Tracker per iOS
- **Live Activity e Dynamic Island**: quando avvii il timer, l'estensione `TimeTrackerWidgets` mostra attività, progetto e tempo trascorso nella Dynamic Island e sulla schermata di blocco. Il tempo scorre da solo e l'app aggiorna la Live Activity solo quando cambia qualcosa (pausa, ripresa, attività o progetto), senza consumare batteria.
- **Sincronizzazione iCloud**: progetti e attività si sincronizzano tra iPhone e iPad tramite il tuo database privato CloudKit. Una pagina nelle Impostazioni mostra lo stato della sincronizzazione e l'ultimo errore.
- **iPad**: barra laterale che si può comprimere in una barra flottante in alto; le schede della dashboard si dispongono su più colonne.

### Time Tracker per Android
- **Notifica continua**: mentre il timer è attivo, una notifica di sistema mostra la sessione con i pulsanti *Pausa*, *Riprendi* e *Stop*, senza dover aprire l'app.
- **Colore dal nome del progetto**: non c'è una tavolozza da cui scegliere; il colore viene calcolato dal nome (vedi [Progetti e colori](/progetti/time-tracker/docs/progetti-e-colori-automatici)).
- **Material 3**: con l'accento "Sistema" su Android 12+ i colori arrivano dallo sfondo del dispositivo; in alternativa ci sono sei accenti, con tavolozze calcolate nello spazio colore CIELAB e contrasti superiori a 6:1, oltre il 4,5:1 richiesto da WCAG AA.
- **Niente modali**: gli editor di attività e progetto sono pagine intere (o riquadri accanto all'elenco sugli schermi larghi); data e ora si scelgono dentro la riga, e le eliminazioni si annullano da una snackbar invece di chiedere conferma.
- **Aggiunta rapida** in cima al riepilogo: titolo, progetto e via.
- **Solo notifiche**: l'unico permesso richiesto è quello delle notifiche; l'app non accede a Internet.

---

## Backup compatibili

Il file JSON creato da **Esporta backup** nelle Impostazioni usa gli stessi campi e tipi su iOS e Android (e nella vecchia versione Flutter). Puoi esportare i dati da un iPhone e importarli su Android, e viceversa, mantenendo ore, tariffe e colori dei progetti.
