---
title: "Archivi protetti, cifratura e integrità"
description: "Cifratura AES-256 di ZIP e 7z, protezione dei nomi dei file, gestione delle password, archivi in più volumi e verifica dell'integrità in rZip."
project: "rzip"
order: 5
section: "Sicurezza"
---

## Cifratura supportata

rZip apre e crea archivi cifrati usando sia `libarchive` sia il `7zz` incluso (7-Zip 26.03):

- **7z con nomi cifrati (`-mhe`)**: oltre ai dati dei file puoi cifrare l'elenco dei nomi e delle cartelle. Senza la password, nessuno può sapere nemmeno quali file contiene l'archivio.
- **ZIP con AES-256**: la cifratura moderna a 256 bit per gli archivi `.zip`, la stessa usata da rZip quando crea uno ZIP protetto.
- **RAR protetti (v4 e v5)**: apertura di archivi RAR protetti da password, anche con l'elenco dei file cifrato (`-hp`).
- **ZipCrypto**: lettura dei vecchi ZIP protetti con la cifratura tradizionale.

## Password

> [!IMPORTANT]
> - Le password non vengono mai salvate su disco né scritte nei log: restano solo in memoria, per la finestra dell'archivio aperto, e vengono scartate quando la chiudi (<kbd>⌘</kbd> <kbd>W</kbd>).
> - Se trascini un file cifrato nel Finder, rZip chiede la password al rilascio e la richiede di nuovo se è sbagliata.

## Archivi in più volumi

rZip riconosce gli archivi divisi in più file:
- 7-Zip: `archivio.7z.001`, `archivio.7z.002`…
- RAR: `archivio.part1.rar`, `archivio.part2.rar` oppure `archivio.rar`, `archivio.r00`, `archivio.r01`…
- ZIP diviso: `archivio.zip`, `archivio.z01`, `archivio.z02`…
- TAR compressi divisi: `archivio.tar.gz.001`, `archivio.tar.gz.002`…

Puoi aprire l'archivio **partendo da qualsiasi volume**:
1. trascina uno dei volumi in rZip;
2. con il permesso sulla cartella (`FolderAccess`), rZip trova gli altri volumi nella stessa cartella e ricostruisce l'elenco completo dei contenuti.

## Verifica dell'integrità

Dal menu File puoi avviare **Verifica integrità**:
- rZip decomprime in memoria tutti i dati e ne controlla i CRC, senza scrivere nulla su disco. Per la verifica usa 7-Zip, che controlla sempre i CRC; libarchive solo per i formati che 7-Zip non apre.
- Un banner mostra l'avanzamento e, al termine, l'elenco dei file danneggiati o troncati, se ce ne sono.
