---
title: "Introduzione a rName"
description: "Panoramica di rName per macOS: rinomina file e cartelle in blocco, catene di regole, anteprima in tempo reale, gestione dei conflitti e sicurezza atomica."
project: "rname"
order: 1
section: "Iniziare"
---

## Cos'è rName

**rName** è un'applicazione nativa per **macOS 26 o successivo** progettata per rinominare file singoli o intere collezioni di file in blocco, con totale prevedibilità, calma e assenza di sorprese.

Sviluppata interamente in **Swift 6 (concorrenza rigorosa)**, **SwiftUI** e **Observation**, rName adotta un approccio visivo immediato: trascinando una cartella nella finestra, componendo una catena di regole e osservando la tabella centrale, ogni nuovo nome appare a fianco di quello attuale in tempo reale. Nessun file viene rinominato, spostato o modificato sul disco finché l'utente non preme esplicitamente il pulsante **Rinomina** (o la scorciatoia <kbd>⌘</kbd> <kbd>↩</kbd>).

---

## Filosofia e Principi Architetturali

### 1. Niente Avviene alle Tue Spalle

La tabella di anteprima centrale confronta sempre il nome originale del file con il nome calcolato risultante dalla catena di regole. Se una regola produce un conflitto (un nome duplicato all'interno della lista, un file già esistente nella cartella sul disco, o un nome non valido per il filesystem), quel file viene automaticamente segnalato ed escluso dall'operazione, preservando l'integrità del tuo archivio.

### 2. Privacy Totale e Assenza di Rete

- **Nessuna chiamata di rete**: l'app non include `URLSession`, SDK di terze parti o librerie analitiche.
- **Nessun account richiesto**: non sono necessarie registrazioni, credenziali o abbonamenti.
- **Riservatezza dei contenuti**: rName non legge il contenuto interno dei file; interroga esclusivamente nome, percorso, dimensione e date di creazione/modifica fornite dal filesystem locale.

### 3. Operazione Atomica in Due Fasi

Rinominare file su un filesystem case-insensitive (come APFS o HFS+) presenta insidie note: cambiare solo le maiuscole di un file (es. `foto.jpg` → `Foto.jpg`) o scambiare i nomi di due file (`A` → `B` e `B` → `A`) fallirebbe su molte utility tradizionali. rName esegue ogni rinomina in **due fasi** transitando per file temporanei univoci nascosti (`.rname-<UUID>`). Se un imprevisto interrompe l'operazione a metà, il motore ripristina automaticamente i nomi originali senza lasciare file temporanei orfani.

### 4. Rispetto della Sandbox di macOS

Rinominare un file richiede a livello di sistema operativo il permesso di scrittura sulla **cartella contenitrice**, non solo sul file. rName gestisce questo requisito di sicurezza di Apple memorizzando i consensi in **segnalibri con ambito di sicurezza** (_security-scoped bookmarks_), richiedendo l'accesso una sola volta per cartella e consentendoti di ispezionare o revocare ogni permesso in qualsiasi momento da _Impostazioni › Permessi_.

---

## Flusso di Lavoro Rapido

1. **Aggiungi i file**: trascina una cartella o una selezione di file nella finestra, oppure premi <kbd>⌘</kbd> <kbd>O</kbd> per selezionare una cartella dal Finder.
2. **Componi la catena di regole**: fai clic su una o più delle 8 regole disponibili nella barra laterale sinistra (es. _Numerazione_, _Maiuscole/minuscole_, _Sostituisci_), oppure scegli un preset già pronto dal menu a tendina.
3. **Controlla l'anteprima**: la tabella mostra in verde i file pronti per la rinomina, con il nuovo nome a fronte del vecchio. Se necessario, fai doppio clic su un file specifico per personalizzarne il nome manualmente.
4. **Applica e Rinomina**: premi <kbd>⌘</kbd> <kbd>↩</kbd> per applicare le modifiche sul disco.
5. **Annulla se hai cambiato idea**: hai commesso un errore? Premi <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> per riportare immediatamente tutti i file dell'ultima sessione ai rispettivi nomi di partenza.

---

## Mappa della Documentazione

- [Catena di Regole e Modalità](/progetti/rname/docs/catena-di-regole): Guida dettagliata alle 8 regole disponibili, ambiti di applicazione ed espressioni regolari.
- [Anteprima e Risoluzione Conflitti](/progetti/rname/docs/anteprima-e-conflitti): Stati dell'anteprima, protezione dai duplicati e modifica manuale riga per riga.
- [Motore e Sicurezza Atomica](/progetti/rname/docs/motore-e-sicurezza): Rinomina in due fasi, gestione di scambi/maiuscole su APFS e storico Annulla.
- [Permessi Cartelle e App Sandbox](/progetti/rname/docs/permessi-sandbox): Come funziona l'accesso alle cartelle genitore, segnalibri di sicurezza e revoca dei permessi.
- [Preset e Impostazioni](/progetti/rname/docs/preset-e-impostazioni): Preset predefiniti, salvataggio di catene personalizzate e opzioni di configurazione (⌘,).
- [Scorciatoie e Integrazione macOS](/progetti/rname/docs/scorciatoie-e-finder): Scorciatoie da tastiera, trascinamento nel Dock e menu contestuali del Finder.
