---
title: "Formati Supportati e Compatibilità"
description: "Elenco dettagliato dei formati gestiti da rZip: matrice tra libarchive e 7-Zip, formati creabili e ispezione pacchetti."
project: "rzip"
order: 6
section: "Formati & Compatibilità"
---

## Matrice Completa dei Motori di Lettura e Scrittura

rZip impiega il motore ideale per ciascun formato e scenario operativo:

| Formato Archivio | Estensioni | Motore di Lettura | Sfoglia / Anteprima RAM | Estrazione | Creazione | Cifratura Password |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **ZIP** | `.zip` | libarchive / 7-Zip | ✅ | ✅ | ✅ | ZipCrypto & AES-256 |
| **7-Zip** | `.7z` | libarchive / 7-Zip | ✅ | ✅ | ✅ | AES-256 (+ Header `-mhe`) |
| **RAR (v4 & v5)** | `.rar` | libarchive / 7-Zip | ✅ | ✅ | ❌ | Password e Nomi (`-hp`) |
| **TAR Unix** | `.tar` | libarchive | ✅ | ✅ | ✅ | Non supportata |
| **GZip** | `.gz`, `.tgz` | libarchive | ✅ | ✅ | ✅ | Non supportata |
| **BZip2** | `.bz2`, `.tbz2` | libarchive | ✅ | ✅ | ✅ | Non supportata |
| **XZ** | `.xz`, `.txz` | libarchive | ✅ | ✅ | ✅ | Non supportata |
| **Immagini ISO** | `.iso`, `.img` | libarchive | ✅ | ✅ | ❌ | Non supportata |
| **Apple Disk Image** | `.dmg` | libarchive | ✅ | ✅ | ❌ | HFS+/APFS non cifrati |
| **Windows Cabinet**| `.cab` | libarchive | ✅ | ✅ | ❌ | Non supportata |
| **XAR / pkg** | `.xar`, `.pkg` | libarchive | ✅ | ✅ | ❌ | Firme digitali lette |
| **LHA / LZH** | `.lha`, `.lzh` | libarchive | ✅ | ✅ | ❌ | Archivi legacy |
| **CPIO / AR** | `.cpio`, `.ar`, `.deb` | libarchive | ✅ | ✅ | ❌ | Pacchetti Linux/Unix |
| **Fumetti Digitali**| `.cbz`, `.cbr` | libarchive | ✅ | ✅ | ✅ (come CBZ) | Pagine lette in RAM |
| **eBook / Java** | `.epub`, `.jar`, `.apk`| libarchive | ✅ | ✅ | ✅ (come ZIP) | Contenitori standard |

> [!NOTE]
> **Perché il formato RAR non è creabile?**
> Il formato di compressione RAR è un algoritmo proprietario di RARLAB: le specifiche di compressione sono coperte da diritti commerciali ed è vietato includerle in software terzi senza licenze proprietarie. rZip ne supporta pienamente e legalmente la decompressione, lettura e decifrazione, e permette di convertire archivi RAR in aperti formati 7z o ZIP tramite la funzione *Converti in un altro formato...*.

## Ispezione Speciale di Bundle e Pacchetti

Oltre ai singoli file di dati, rZip riconosce la struttura logica di elementi complessi tipici dell'ecosistema Apple:
- **Applicazioni (`.app`)**: Icona, identificativo del bundle, versione e build, firma digitale, ticket di notarizzazione e architetture supportate (Apple Silicon ed Intel).
- **Pacchetti Installer (`.pkg`)**: Esame in memoria dei file `.pkg` e `.mpkg`, con elenco dei payload interni e percorsi di destinazione sul Mac.
- **Framework e Plug-in (`.framework`, `.plugin`, `.appex`)**: Informazioni su architettura binaria e compatibilità con macOS.
