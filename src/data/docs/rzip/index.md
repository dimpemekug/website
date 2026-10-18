---
title: "Introduzione a rZip"
description: "Panoramica di rZip per macOS: architettura a doppio motore (libarchive e 7-Zip), esplorazione in memoria RAM e filosofia zero-network."
project: "rzip"
order: 1
section: "Iniziare"
---

## Cos'è rZip

**rZip** è l'applicazione nativa per macOS (sviluppata in SwiftUI per macOS 26 Tahoe e macOS 15 Sequoia, con supporto universale per Apple Silicon e Intel) progettata per **esplorare, verificare e gestire archivi compressi senza estrarli**.

A differenza delle utility tradizionali che costringono a decomprimere l'intero archivio su disco per visualizzare anche un singolo file, rZip permette di:
- Sfogliare la gerarchia interna con cartelle espandibili.
- Ispezionare anteprime di foto, PDF, testi e codice sorgente direttamente in memoria RAM, senza creare file temporanei.
- Esaminare le informazioni interne di applicazioni Mac (`.app`), estensioni e pacchetti di installazione (`.pkg`) senza estrarli.
- Estrarre selettivamente solo i singoli file necessari trascinandoli direttamente nel Finder.
- Aprire archivi protetti da password o divisi in volumi numerati.
- Creare nuovi archivi compressi con crittografia AES-256 e convertire archivi esistenti tra formati diversi.

## Architettura a Doppio Motore

rZip combina due motori ad altissime prestazioni per garantire la massima compatibilità e velocità:

| Motore | Integrazione | Compiti e Formati Gestiti |
| :--- | :--- | :--- |
| **libarchive** | In-process (libreria di sistema) | Elenco, navigazione e anteprima in streaming RAM di ZIP, RAR/RAR5, 7z, TAR, GZ, BZ2, XZ, ISO, CAB, LHA, CPIO, XAR; archivi TAR compressi divisi in parti (`.tar.gz.001`…). |
| **7-Zip 26.03** | `7zz` integrato in `Contents/MacOS` (Sandbox con entitlement `inherit`) | Elenchi cifrati (7z `-mhe`, RAR `-hp`), contenuti protetti da password (7z, RAR, WinZip AES-256), archivi multi-volume (`.7z.001`, `.partN.rar`, `.rNN`, `.zNN`) e creazione di nuovi archivi. |

## Principi Fondamentali

1. **Zero Permessi di Rete (Strict Sandbox)**: L'app non possiede l'entitlement di rete (`com.apple.security.network.client`). Nessun file, nome o password lascia mai il Mac. Anche il processo `7zz` incluso gira all'interno della stessa sandbox protetta priva di connessione.
2. **Nessun File Temporaneo per la Sola Lettura**: L'apertura di un archivio non scrive nulla su disco: le anteprime leggono il contenuto direttamente nei flussi di byte in memoria RAM (tramite libarchive o `7zz e -so`).
3. **Estrazione Pulita e Anti-Sovrascrittura**: L'estrazione avviene solo su richiesta esplicita. I file già presenti nella cartella di destinazione non vengono mai sovrascritti (viene aggiunto un suffisso numerico progressivo come `Cartella 2`). Se l'archivio contiene un solo elemento alla radice viene estratto direttamente, altrimenti viene racchiuso in una cartella con il nome dell'archivio.

## Prossimi Passi

- [Installazione e Requisiti](/progetti/rzip/docs/installazione): Requisiti, Mac App Store, sandbox e permessi cartella (`FolderAccess`).
- [Gestione ed Estrazione Selettiva](/progetti/rzip/docs/gestione-archivi): Navigazione ad albero, anteprima RAM, BundleInspector ed estrazione drag & drop.
- [Creazione, Modifica e Conversione](/progetti/rzip/docs/creazione-modifica): Creazione archivi, modifica in-place con backup nel Cestino, esclusione file di sistema macOS e conversione formati.
- [Archivi Protetti, Cifratura e Integrità](/progetti/rzip/docs/archivi-protetti): Crittografia AES-256, nomi file cifrati, gestione password in RAM, volumi multipli e verifica archivio.
- [Formati Supportati e Compatibilità](/progetti/rzip/docs/formati-supportati): Matrice esaustiva dei formati archivio e pacchetti speciali.
- [Scorciatoie e Produttività](/progetti/rzip/docs/scorciatoie): Scorciatoie da tastiera native e gesture su macOS.
