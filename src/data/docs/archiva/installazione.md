---
title: "Installazione e requisiti"
description: "Requisiti di sistema, distribuzione sul Mac App Store, sandbox di macOS e gestione delle cartelle autorizzate (FolderAccess) in Archiva."
project: "archiva"
order: 2
section: "Iniziare"
---

## Requisiti di sistema

- **Sistema operativo**: macOS 26 Tahoe o successivo.
- **Processore**: binario universale per Mac con Apple Silicon e con processore Intel a 64 bit. Anche il `7zz` incluso nel pacchetto dell'app è universale.

## Mac App Store

Archiva si scarica dal [Mac App Store](https://apps.apple.com/it/app/archiva-gestore-di-archivi/id6829807401):
- bundle ID `com.dimpemekug.archiva`;
- categoria Utility;
- gratuita, senza pubblicità, senza account e senza tracciamento.

L'interfaccia è disponibile in italiano e in inglese e segue la lingua del sistema.

## Sandbox e cartelle autorizzate (`FolderAccess`)

Archiva lavora all'interno della **sandbox** di macOS:

- **File singoli**: archivi e file aperti con doppio clic nel Finder, trascinamento o con il pannello Apri (<kbd>⌘</kbd> <kbd>O</kbd>) vengono autorizzati automaticamente dal sistema.
- **Cartelle autorizzate**: quando un'operazione ha bisogno di una cartella intera (per trovare tutti i volumi di un archivio diviso, `.001`, `.002`…, per estrarre accanto all'archivio o per creare un archivio in più parti), Archiva mostra il pannello di sistema per chiederne l'accesso una volta sola.
- **Segnalibri sicuri**: le cartelle autorizzate e gli archivi recenti vengono ricordati come segnalibri *security-scoped*. Puoi vedere e revocare l'elenco delle cartelle autorizzate in **Impostazioni** (<kbd>⌘</kbd> <kbd>,</kbd>) › **Avanzate**.

## Aprire gli archivi con Archiva nel Finder

Per aprire con un doppio clic tutti gli archivi `.zip`, `.7z` o `.rar` in Archiva:

1. Fai clic destro su un archivio nel Finder e scegli **Ottieni informazioni** (<kbd>⌘</kbd> <kbd>I</kbd>).
2. Espandi la sezione **Apri con**.
3. Scegli **Archiva** dal menu a comparsa.
4. Fai clic su **Modifica tutto…** e conferma, per associare a Archiva tutti i file con quell'estensione.
