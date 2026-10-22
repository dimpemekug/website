---
title: "Formati supportati e compatibilità"
description: "Elenco dei formati gestiti da rZip: lettura con libarchive e 7-Zip, formati creabili, cifratura e ispezione dei pacchetti."
project: "rzip"
order: 6
section: "Formati & Compatibilità"
---

## Tabella dei formati

| Formato | Estensioni | Motore di lettura | Sfoglia e anteprima | Estrazione | Creazione | Cifratura |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **ZIP** | `.zip` | libarchive / 7-Zip | ✅ | ✅ | ✅ | AES-256 (lettura anche ZipCrypto) |
| **7-Zip** | `.7z` | libarchive / 7-Zip | ✅ | ✅ | ✅ | AES-256, anche dei nomi (`-mhe`) |
| **RAR (v4 e v5)** | `.rar` | libarchive / 7-Zip | ✅ | ✅ | ❌ | Lettura, anche con nomi cifrati (`-hp`) |
| **TAR** | `.tar` | libarchive | ✅ | ✅ | ✅ | — |
| **GZip** | `.gz`, `.tgz` | libarchive | ✅ | ✅ | ✅ (TAR.GZ) | — |
| **BZip2** | `.bz2`, `.tbz`, `.tbz2` | libarchive | ✅ | ✅ | ✅ (TAR.BZ2) | — |
| **XZ / LZMA** | `.xz`, `.txz`, `.lzma`, `.tlz` | libarchive | ✅ | ✅ | ✅ (TAR.XZ) | — |
| **Immagini ISO** | `.iso` | libarchive | ✅ | ✅ | ❌ | — |
| **Windows Cabinet** | `.cab` | libarchive | ✅ | ✅ | ❌ | — |
| **XAR / pacchetti** | `.xar`, `.pkg` | libarchive | ✅ | ✅ | ❌ | — |
| **LHA / LZH** | `.lha`, `.lzh` | libarchive | ✅ | ✅ | ❌ | — |
| **CPIO, AR, pacchetti Linux** | `.cpio`, `.ar`, `.a`, `.deb`, `.rpm` | libarchive | ✅ | ✅ | ❌ | — |
| **Compress** | `.z` | libarchive | ✅ | ✅ | ❌ | — |
| **Fumetti** | `.cbz`, `.cbr` | libarchive | ✅ | ✅ | ❌ | — |
| **Contenitori ZIP** | `.epub`, `.jar`, `.war`, `.apk`, `.ipa` | libarchive | ✅ | ✅ | ❌ | — |

> [!NOTE]
> **Perché non si possono creare archivi RAR?**
> RAR è un formato proprietario di RARLAB: la compressione non può essere inclusa in altri programmi senza una licenza commerciale. rZip ne supporta la lettura, l'estrazione e la decifrazione, e con *Converti in un altro formato…* puoi trasformare un archivio RAR in 7z o ZIP.

## Ispezione di app e pacchetti

Oltre ai normali file, rZip riconosce la struttura dei pacchetti tipici di Apple:
- **App (`.app`)**: icona, bundle ID, versione e build, firma, ticket di notarizzazione, ricevuta del Mac App Store e architetture (Apple Silicon e Intel).
- **Pacchetti di installazione (`.pkg`, `.mpkg`)**: lettura in memoria dell'indice, con componenti, dimensione installata e percorso di installazione.
- **Framework, estensioni e plug-in** (`.framework`, `.appex`, `.plugin`, `.bundle` e simili): versione, architetture e compatibilità con macOS.
