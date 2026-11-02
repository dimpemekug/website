---
title: "Introduzione a Archiva"
description: "Panoramica di Archiva per macOS: doppio motore (libarchive e 7-Zip), anteprima dei contenuti in memoria e nessuna connessione a Internet."
project: "archiva"
order: 1
section: "Iniziare"
---

## Cos'è Archiva

**Archiva** è un'app nativa per **macOS 26 Tahoe o successivo** (sviluppata in SwiftUI, per Mac con Apple Silicon e Intel) pensata per **esplorare, verificare e gestire archivi compressi senza estrarli**.

Al contrario delle utility tradizionali, che costringono a decomprimere tutto l'archivio su disco anche per vedere un solo file, Archiva permette di:
- sfogliare la struttura interna con cartelle espandibili;
- vedere l'anteprima di immagini, PDF, testi e codice sorgente direttamente in memoria e, con Quick Look, anche di documenti, video e audio;
- esaminare le informazioni di app per Mac (`.app`), estensioni e pacchetti di installazione (`.pkg`) senza estrarli;
- estrarre solo i file che servono, trascinandoli nel Finder;
- aprire archivi protetti da password o divisi in più volumi;
- creare nuovi archivi, anche cifrati con AES-256, e convertire quelli esistenti in un altro formato.

## Due motori

Archiva combina due motori per offrire compatibilità e velocità:

| Motore | Integrazione | Compiti e formati |
| :--- | :--- | :--- |
| **libarchive** | Libreria di sistema, nello stesso processo dell'app | Elenco, navigazione e anteprima in memoria di ZIP, RAR/RAR5, 7z, TAR, GZ, BZ2, XZ, ISO, CAB, LHA, CPIO e XAR; archivi TAR compressi divisi in parti (`.tar.gz.001`…). |
| **7-Zip 26.03** | `7zz` incluso in `Contents/MacOS` (in sandbox, con entitlement `inherit`) | Elenchi cifrati (7z `-mhe`, RAR `-hp`), contenuti protetti da password (7z, RAR, ZIP AES), archivi in più volumi (`.7z.001`, `.partN.rar`, `.rNN`, `.zNN`) e creazione di nuovi archivi. |

## Principi

1. **Nessuna connessione a Internet**: Archiva non contiene codice di rete e non comunica con alcun server. L'entitlement `com.apple.security.network.client` c'è solo perché, in sandbox, Quick Look lo richiede per mostrare documenti come Word, Excel e RTF. Nessun file, nome o password lascia il Mac, e anche il `7zz` incluso, che gira nella stessa sandbox, non si connette.
2. **Nessun file temporaneo per la sola lettura**: aprire un archivio non scrive nulla su disco; le anteprime di immagini, PDF e testi nel pannello informazioni leggono il contenuto in memoria (con libarchive o `7zz e -so`). Quick Look apre solo file veri: per il file che scegli di vedere, Archiva ne scrive una copia in una cartella temporanea privata e la cancella quando l'anteprima non serve più.
3. **Estrazione solo su richiesta, senza sovrascrivere**: i file già presenti nella destinazione non vengono mai sovrascritti (il nuovo prende un numero, es. `Cartella 2`). Se l'archivio contiene un solo elemento alla radice viene estratto direttamente, altrimenti in una cartella con il nome dell'archivio.

## Prossimi passi

- [Installazione e requisiti](/progetti/archiva/docs/installazione): requisiti, Mac App Store, sandbox e cartelle autorizzate (`FolderAccess`).
- [Esplorazione ed estrazione selettiva](/progetti/archiva/docs/gestione-archivi): navigazione ad albero, anteprima, vista compatta, ispezione di app e pacchetti, estrazione con il trascinamento.
- [Creazione, modifica e conversione](/progetti/archiva/docs/creazione-modifica): nuovi archivi, aggiunta ed eliminazione di file con copia di sicurezza nel Cestino, esclusione dei file di sistema di macOS e conversione di formato.
- [Archivi protetti, cifratura e integrità](/progetti/archiva/docs/archivi-protetti): AES-256, nomi dei file cifrati, password, volumi multipli e verifica dell'archivio.
- [Formati supportati](/progetti/archiva/docs/formati-supportati): tabella completa dei formati.
- [Scorciatoie e produttività](/progetti/archiva/docs/scorciatoie): scorciatoie da tastiera e trascinamento sul Dock.
