---
title: "Modalità e profili"
description: "Le quattro modalità di Excubia (Chiedi, Consenti in silenzio, Blocca in silenzio, Blocca tutto), il blocco a tempo e la differenza tra i profili Standard ed Esperto."
project: "excubia"
order: 4
section: "Funzionalità"
---

La **modalità** decide cosa succede alle connessioni senza regola; il **profilo** decide quanto spesso Excubia chiede e quante opzioni mostra.

## Le modalità

| Modalità | Cosa fa |
|---|---|
| **Chiedi** | chiede cosa fare quando un'app senza regola cerca di connettersi (predefinita) |
| **Consenti in silenzio** | consente le connessioni senza regola; le regole di blocco restano valide |
| **Blocca in silenzio** | blocca le connessioni senza regola; le regole che consentono restano valide |
| **Blocca tutto** | scollega il Mac da internet: ogni connessione è bloccata, regole comprese |

La modalità si sceglie nella **Panoramica**, in **Impostazioni › Protezione**, dal menu della modalità nel pannello della barra dei menu e con i [Comandi rapidi](/progetti/excubia/docs/comandi-rapidi-full-immersion-e-widget). In **Blocca tutto** lo scudo nella barra dei menu appare barrato.

## Blocco a tempo

Nel pannello della barra dei menu, accanto a **Blocca tutto**, il menu **Blocca tutto per un po'** offre 15 minuti, 30 minuti, 1 ora o 2 ore. Fino all'ora di fine vale Blocca tutto, poi torna la modalità di prima; il filtro lo fa scadere all'ora esatta anche con l'app chiusa. **Termina ora** lo ferma prima. Anche il widget e i Comandi rapidi possono avviare un blocco a tempo.

## I profili

Il profilo si sceglie in **Impostazioni › Profilo**.

- **Standard** (predefinito): chiede solo per le app di terze parti, una volta per app. macOS, il software Apple e le app del Mac App Store si connettono senza chiedere. Una regola su un'app vale anche per i suoi processi di supporto; le connessioni in entrata non si controllano.
- **Esperto**: avvisi per host e per processo di supporto, e in **Impostazioni › Protezione** cinque interruttori:

| Opzione | All'inizio |
|---|---|
| **Consenti il software Apple** | accesa |
| **Consenti le app firmate** (firmate con Developer ID) | spenta |
| **Controlla le connessioni in entrata** | spenta |
| **Consenti i componenti di macOS** (programmi in `/System`, `/usr`, `/bin`, `/sbin`, escluso `/usr/local`) | spenta |
| **Consenti le app del Mac App Store** | spenta |

Questi permessi valgono in modalità Chiedi; in Consenti o Blocca in silenzio decide prima la modalità. Le regole, comunque, vengono sempre prima: vedi [Regole](/progetti/excubia/docs/regole).
