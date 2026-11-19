---
title: "Confronto iOS e Android"
description: "Differenze tra la versione iOS e la versione Android di DomoMeter: tecnologie, funzioni, archiviazione dei dati, permessi e interfaccia."
project: "domometer"
order: 2
section: "Piattaforme"
---

## Due versioni native

DomoMeter usa lo stesso modello di calcolo e lo stesso formato di backup su entrambe le piattaforme, ma ciascuna versione è sviluppata con gli strumenti nativi del proprio sistema, per seguirne le linee guida. Le funzioni sono quasi tutte le stesse: le differenze riguardano la sincronizzazione, l'aspetto e alcuni dettagli, indicati nella tabella.

---

## Tabella comparativa

| Caratteristica | DomoMeter per iOS | DomoMeter per Android |
| :--- | :--- | :--- |
| **Linguaggio e framework** | Swift 6, SwiftUI | Kotlin 2.4, Jetpack Compose |
| **Design** | Linee guida Apple, colore d'accento a scelta | Material 3, stile Moderno o Retrò, colori dinamici (Material You) su Android 12+ |
| **Requisiti minimi** | iOS/iPadOS 18.0 o successivo | Android 8.0 (API 26) o successivo |
| **Archiviazione** | Documento JSON in *Application Support* | Database SQLite con **Room** |
| **Connessione a Internet** | Solo per iCloud, se attivato | **Nessuna** (nessun permesso Internet nel manifest) |
| **Permessi** | Notifiche, solo per i promemoria | Notifiche, solo per i promemoria |
| **Sincronizzazione** | iCloud (CloudKit, database privato) | Nessuna, solo backup su file |
| **Letture, fasce F1/F2/F3, profili, limiti annui** | Sì | Sì |
| **Utenze personalizzate, fino a 10** | Sì | Sì |
| **Note e contatore sostituito** | Sì | Sì |
| **Tariffe con storico, bolletta, budget, valuta, CO₂** | Sì | Sì |
| **Promemoria di lettura** | Sì | Sì |
| **Calendario toccabile e previsione con confronto annuale** | Sì | Sì |
| **Lettura rapida dalla riga di un'utenza** | Tenendo premuto o, su iPhone, scorrendo verso destra | Tenendo premuto |
| **Esportazione CSV** | Con il foglio di condivisione | In un file scelto |
| **Eliminare un'utenza** | Con **Annulla** subito dopo | Con una conferma prima |
| **Schermi grandi** | iPad | Tablet, orizzontale e pieghevoli |
| **Lingua dell'app** | Scelta nell'app, indipendente dal sistema | Scelta nell'app, indipendente dal sistema |
| **Formato di backup** | JSON `domometer-backup`, `schemaVersion: 1` | JSON `domometer-backup`, `schemaVersion: 1` |

Entrambe le versioni sono disponibili in sette lingue (italiano, inglese, spagnolo, portoghese, francese, tedesco e russo) e hanno tema chiaro, scuro o automatico.

---

## Dettagli per piattaforma

### DomoMeter per iOS
- **Sincronizzazione iCloud**: puoi attivare la sincronizzazione tra iPhone e iPad. L'intero archivio viene salvato come un unico record nel tuo database privato CloudKit; a ogni sincronizzazione vince la versione più recente. Una pagina dedicata mostra lo stato dell'account, l'ultima sincronizzazione ed eventuali errori, e permette di sincronizzare subito.
- **Navigazione**: barra in basso o menu, sei colori d'accento.
- **Grafico della spesa**: i mesi senza una tariffa sono segnati come senza prezzo, invece di comparire come spesa zero.
- **Accessibilità**: supporto a VoiceOver e Dynamic Type.

### DomoMeter per Android
- **Nessun accesso alla rete**: l'app non ha il permesso per Internet. I dati non possono lasciare il telefono, se non tramite i backup che esporti tu. Gli unici permessi sono quello delle notifiche, chiesto solo quando accendi un promemoria, e quello per rimettere in calendario i promemoria dopo un riavvio.
- **Stile e colori**: nelle Impostazioni scegli lo stile grafico Moderno o Retrò; su Android 12 o successivo l'interfaccia può prendere i colori dallo sfondo del dispositivo (Material You).
- **Layout adattivo**:
  - sotto i **600 dp** (telefoni): barra di navigazione in basso e una colonna;
  - da **600 dp** in su, o con il telefono in orizzontale: barra laterale (*navigation rail*) e due colonne di card;
  - da **840 dp** in su: elenco e dettaglio affiancati;
  - sui **pieghevoli** aperti a libro, la divisione tra i due pannelli cade sulla cerniera (`FoldingFeature`), così nessun contenuto finisce sulla piega.

---

## Backup compatibili

Grazie al formato comune, **un backup creato su iPhone si importa senza modifiche su Android, e viceversa**, con tutti i dati: letture, utenze personalizzate, tariffe, budget e impostazioni. I valori sono salvati nelle unità di base (litri per l'acqua, kWh per l'elettricità, Smc per il gas). I promemoria non fanno parte del backup su nessuna delle due piattaforme. Dettagli in [Backup, CSV e migrazione](/progetti/domometer/docs/backup-e-migrazione).
