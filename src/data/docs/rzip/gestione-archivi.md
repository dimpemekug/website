---
title: "Gestione ed Estrazione Selettiva"
description: "Navigazione ad albero, anteprima in memoria, ispezione app e pacchetti (BundleInspector) ed estrazione drag & drop."
project: "rzip"
order: 3
section: "Guide d'uso"
---

## Esplorazione Istantanea senza Estrazione

rZip elimina la necessità di decomprimere archivi giganti per accedere a singoli documenti:

- **Cartelle Espandibili**: Puoi aprire e chiudere le cartelle interne con un clic sul triangolo di espansione o usando i tasti freccia `→` / `←`. Tenendo premuto `⌥` (Option) e cliccando sul triangolo espandi o comprimi l'intero ramo ricorsivamente.
- **Espandi o Comprimi Tutto**: Con le scorciatoie `⌥⌘→` (Espandi tutto) e `⌥⌘←` (Comprimi tutto) puoi visualizzare l'intera struttura dell'archivio in un colpo solo.
- **Ordinamento Intelligente**: Ordinamento per Nome, Dimensione, Data o Tipo di file, con le cartelle mantenute sempre in cima per una navigazione ordinata.
- **Ricerca in Tempo Reale**: La barra di ricerca (`⌘F`) filtra istantaneamente decine di migliaia di voci interne in frazioni di millisecondo.
- **Barra del Percorso (PathBar)**: Mostra il percorso breadcrumb della cartella corrente con navigazione Indietro/Avanti.

## Anteprima Rapida in Memoria RAM (Quick Look)

Premendo la barra spaziatrice `Spazio` o `⌘Y` su qualsiasi file selezionato:
- rZip decodifica e legge il flusso di byte direttamente in memoria RAM (tramite libarchive o streaming `7zz e -so`).
- L'anteprima nativa Quick Look di macOS visualizza immagini ad alta risoluzione, documenti PDF, testi o codice sorgente senza scrivere file temporanei su disco.

## Ispezione di App e Pacchetti (`BundleInspector`)

Una delle caratteristiche più innovative di rZip è il modulo **BundleInspector**: quando un archivio contiene un'applicazione per Mac (`.app`), un'estensione (`.plugin`, `.appex`), un framework o un pacchetto di installazione (`.pkg`), rZip legge in memoria i file `Info.plist`, le icone e le intestazioni Mach-O dei binari, mostrando nell'Inspector:

- **Identità e Versioni**: Icona dell'app ad alta risoluzione, versione completa, numero di build, Bundle ID, categoria e requisiti minimi di sistema macOS.
- **Architetture Mach-O**: Rileva se il binario è compilato per *Apple Silicon* (`arm64`), *Intel* (`x86_64`) oppure se è un binario *Universale*.
- **Sicurezza e Firme**: Verifica la presenza della firma di codice digitale (`_CodeSignature`), del ticket di notarizzazione Apple (*Notarization Ticket*) e dello scontrino di acquisto Mac App Store (`_MASReceipt`).
- **Pacchetti Installer (`.pkg`)**: Esamina l'indice interno XAR del pacchetto senza estrarlo, mostrando i componenti inclusi, la dimensione installata stimata e il percorso di installazione designato.

## Estrazione tramite Drag & Drop nel Finder

rZip implementa il protocollo moderno `Transferable` con `FileRepresentation` di macOS:

1. Seleziona uno o più file nella lista (oppure trascina la grande icona dell'elemento dall'Inspector).
2. Trascinali direttamente in qualsiasi cartella del Finder o sulla Scrivania.
3. L'estrazione viene eseguita solo al momento del rilascio del cursore:
   - Se i file sono protetti da password, rZip mostra la richiesta di password al rilascio (e la richiede se errata).
   - Un banner di avanzamento dedicato mostra la velocità e i byte estratti in tempo reale.
   - I file estratti non sovrascrivono mai documenti omonimi già presenti nella destinazione.

## Estrazione su Comando (`⌘E` e `⇧⌘E`)

Dalla barra degli strumenti, dal menu File o dal menu contestuale:
- **Estrai selezione…** (`⌘E`): Estrae solo gli elementi correntemente selezionati.
- **Estrai tutto…** (`⇧⌘E`): Decomprime l'intero archivio.
- **Politica delle Cartelle**: Se l'archivio contiene un solo elemento alla radice, viene estratto direttamente; se contiene più file sparsi, rZip crea automaticamente una cartella con il nome dell'archivio per evitare disordine sul Mac.
- **Destinazione Flessibile**: Nelle Impostazioni puoi scegliere se chiedere la cartella ogni volta, estrarre accanto all'archivio, o utilizzare una cartella di destinazione fissa (es. `~/Downloads`).
