---
title: "Archivi Protetti, Cifratura e Integrità"
description: "Crittografia AES-256 su ZIP e 7z, protezione dei nomi dei file, gestione password in RAM, volumi multipli e verifica integrità."
project: "rzip"
order: 5
section: "Sicurezza"
---

## Crittografia Forte e Standard Supportati

rZip supporta l'apertura e la generazione di archivi cifrati ad alto grado di sicurezza, integrando sia il motore `libarchive` sia il processo protetto `7zz` (7-Zip 26.03):

- **7z con Cifratura dei Nomi (`-mhe`)**: Nel formato 7z, oltre a cifrare i dati di ciascun file, puoi cifrare l'intera tabella dei nomi e della gerarchia. Senza inserire la password corretta, un osservatore esterno non può nemmeno scoprire quali file siano contenuti nell'archivio.
- **ZIP con WinZip AES-256**: Lo standard moderno di crittografia a 256 bit per gli archivi `.zip`, universalmente supportato su Mac, Windows e Linux.
- **RAR protetti (v4 e v5)**: Apertura e decifrazione di archivi RAR protetti da password, inclusi quelli con elenco dei file cifrato (`-hp`).
- **Legacy ZipCrypto**: Supporto in lettura per la compatibilità con vecchi archivi generati da sistemi obsoleti.

## Gestione Sicura delle Password in Memoria Volatile

> [!IMPORTANT]
> A tutela della massima riservatezza:
> - Le password digitate non vengono mai salvate su disco o memorizzate in file di log.
> - La chiave simmetrica derivata risiede unicamente nella memoria RAM volatile associata alla sessione della finestra aperta e viene azzerata istantaneamente quando la finestra viene chiusa (`⌘W`).
> - Se trascini un file cifrato verso il Finder, rZip richiede la password direttamente al momento del rilascio e la richiede nuovamente se errata.

## Archivi Multi-Volume (Divisi in Più Parti)

Quando un archivio compresso di grandi dimensioni è suddiviso in molteplici file:
- Standard 7-Zip: `archivio.7z.001`, `archivio.7z.002`...
- Standard RAR: `archivio.part1.rar`, `archivio.part2.rar` oppure `archivio.r00`, `archivio.r01`...
- Standard ZIP splittato: `archivio.zip`, `archivio.z01`, `archivio.z02`...
- Archivi TAR compressi divisi: `archivio.tar.gz.001`, `archivio.tar.gz.002`...

rZip permette di aprire l'archivio **partendo da qualsiasi volume della sequenza**:
1. Trascina un volume qualsiasi nella finestra di rZip.
2. Tramite il sistema protetto `FolderAccess`, rZip individua automaticamente tutti i volumi collegati presenti nella stessa cartella e ricostruisce l'albero completo dei contenuti.

## Verifica dell'Integrità dell'Archivio

Dal menu principale o dalla barra degli strumenti puoi avviare il comando **Verifica integrità**:
- rZip controlla la coerenza strutturale di ogni singolo file e ne verifica i checksum CRC/SHA senza estrarre nulla su disco.
- Un banner dedicato di avanzamento (`VerificationBanner`) mostra la percentuale di verifica in tempo reale e segnala tempestivamente se uno o più blocchi risultano corrotti o troncati.
