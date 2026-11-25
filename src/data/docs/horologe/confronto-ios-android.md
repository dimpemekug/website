---
title: "Confronto iOS e Android"
description: "Cosa hanno in comune e in cosa differiscono Horologe per iOS e per Android: dati, sincronizzazione, fotocamera, aspetto, blocco e backup."
project: "horologe"
order: 2
section: "Piattaforme"
---

## Due versioni native, le stesse funzioni

Horologe per **iOS** (1.3.0) e per **Android** (2.2.0) hanno quasi le stesse funzioni: scheda dell'orologio, galleria, allegati, revisioni con promemoria, assistente di precisione, diario al polso, statistiche, dieci ordinamenti, PDF per l'assicurazione, CSV e backup ZIP. Usano lo stesso database SQLite (schema versione 11), la stessa cartella delle immagini e lo stesso formato di backup, quindi una collezione passa da un sistema all'altro senza perdite.

Le differenze sono poche e riguardano soprattutto ciò che ciascun sistema offre.

---

## Tabella comparativa

| Caratteristica | Horologe per iOS | Horologe per Android |
| :--- | :--- | :--- |
| **Dispositivi e requisiti** | iPhone e iPad con iOS/iPadOS 17 o successivo | Telefoni, tablet e pieghevoli con Android 7.0 (API 24) o successivo |
| **Linguaggio e interfaccia** | Swift 6, SwiftUI | Kotlin, Jetpack Compose (Material 3) |
| **Database** | GRDB su SQLite (`Documents/horologe.db`) | SQLite (`app_flutter/horologe.db`) |
| **Sincronizzazione** | iCloud (CloudKit, database privato), facoltativa | Nessuna; i dati possono finire nel backup di Android, se attivo |
| **Accesso a Internet** | Solo tramite iCloud, se attivi la sincronizzazione | Nessuno: l'app non ha il permesso di rete |
| **Foto** | Libreria Foto o **fotocamera** | Selettore di foto di Android |
| **Aspetto** | Tema Sistema, Chiaro o Scuro | Stile **Horologe** (nero e giallo `#FFE600`) oppure **Personalizzato**: tema Sistema, Chiaro o Scuro e colore d'accento |
| **Blocco dell'app** | Face ID, Touch ID o codice del dispositivo | Impronta, volto o PIN del dispositivo |
| **Grafico della precisione** | Con la fascia verde della tolleranza COSC (−4/+6 s/g) | Le ultime 12 misure, con **Ultima** e **Media** |
| **Promemoria delle revisioni** | Notifiche locali | `AlarmManager`, riprogrammati dopo un riavvio o un aggiornamento |
| **Esportazione** | Condivisione | Condivisione oppure salvataggio in una cartella scelta da te |
| **Importazione** | Backup ZIP | Backup ZIP e vecchi backup JSON |
| **Formato di backup** | ZIP con `manifest.json` (versione 3) e foto | Uguale |

---

## Dettagli per piattaforma

### Solo su iOS
- **Sincronizzazione iCloud** tra iPhone e iPad: vedi [Backup, sincronizzazione ed esportazione](/progetti/horologe/docs/backup-e-sincronizzazione).
- **Fotocamera** per la copertina e la galleria.
- **iPad**: barra laterale, griglia sempre attiva, pagina dell'orologio e statistiche su due colonne.
- Su iOS 26, l'aspetto Liquid Glass; transizione con zoom dalla collezione alla pagina dell'orologio; rispetto di «Riduci movimento».

### Solo su Android
- **Stile grafico**: lo stile **Horologe** è sempre scuro, nero con il giallo `#FFE600`. Con **Personalizzato** scegli il tema e uno di otto colori d'accento (giallo, blu, viola, verde acqua, verde, arancione, rosso, rosa) oppure, da Android 12, i colori dello sfondo.
- **Nessun accesso a Internet**: dati e foto restano nella memoria riservata dell'app.
- **Salvataggio su file**: backup, CSV e PDF si possono condividere oppure salvare in una cartella.
- **Tablet e pieghevoli**: barra di navigazione laterale, griglia adattiva e pagina dell'orologio su due colonne sugli schermi larghi.

### In arrivo su iOS
Alcune funzioni nate su Android 2.2.0 arrivano su iOS con l'aggiornamento successivo alla 1.3.0: valute scritte a mano con **Altra…**, zoom nella galleria a schermo intero e notifica del promemoria nella lingua dell'app.

---

## Backup intercambiabili

L'archivio `.zip` di Horologe contiene `manifest.json` (tutta la collezione, versione 3) e le foto e gli allegati con nomi prevedibili (`watch_1_cover.jpg`, `watch_1_gallery_1.jpg`, `watch_1_att_1.pdf`…).

**Puoi esportare la collezione da un iPhone e importarla su Android, o viceversa, con foto, revisioni, giorni al polso e misurazioni.**
