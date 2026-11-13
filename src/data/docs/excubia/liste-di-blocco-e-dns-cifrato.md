---
title: "Liste di blocco e DNS cifrato"
description: "Le liste di blocco di Excubia: formati, liste consigliate, aggiornamento quotidiano, sblocco di un dominio dal registro e blocco del DNS cifrato."
project: "excubia"
order: 8
section: "Rete"
---

Le liste di blocco fermano pubblicità, tracciamento e malware in tutte le app, senza una regola per ciascuna. Un dominio della lista blocca anche i suoi sottodomini. Le liste valgono solo per le connessioni in uscita, e le tue regole vincono sempre su una lista.

## Aggiungere una lista

Nella pagina **Liste di blocco** premi **Aggiungi lista**. Il foglio **Aggiungi una lista di blocco** ha tre strade:

- **Liste consigliate**:
  - **StevenBlack Unified**: pubblicità e malware, unendo diverse fonti note;
  - **HaGeZi Multi Normal**: pubblicità, tracciamento, metriche e malware, con pochi falsi positivi;
  - **Peter Lowe's Ad Servers**: una lista piccola e prudente di server pubblicitari e di tracciamento.
- **Da un indirizzo**: un indirizzo `http` o `https`.
- **Importa file…**: un file sul Mac.

Sono supportati i file hosts, gli elenchi di domini e le regole AdBlock semplici (`||example.com^`). Le righe AdBlock con un percorso o con opzioni si scartano, come i commenti, i nomi locali e gli indirizzi IP. Una lista può avere al massimo 2.000.000 di domini.

## Aggiornamento

Le liste da un indirizzo si scaricano di nuovo una volta al giorno, mentre Excubia è aperta. **Aggiorna** lo fa subito; per una lista importata da file, rilegge il file dal suo percorso. Ogni lista ha un interruttore per spegnerla senza toglierla e mostra quanti domini contiene e quando è stata aggiornata.

## Sbloccare un dominio

Se un sito smette di funzionare, guarda nelle **Connessioni**: una connessione bloccata da una lista ha come motivo il nome della lista e, nel suggerimento, la voce che l'ha bloccata. Con il clic destro, **Non bloccare … in nessuna app** crea una regola che consente quel dominio, sottodomini compresi, a qualsiasi processo. Una regola di blocco più precisa per una singola app resta valida.

## DNS cifrato

Alcune app risolvono i nomi con un proprio DNS cifrato (DNS su HTTPS o su TLS) invece del DNS di sistema. In quel caso Excubia può non vedere i nomi host che raggiungono, e le liste di blocco funzionano meno. Il registro segna queste connessioni con **DNS cifrato**: le riconosce dalla porta 853 o dai resolver noti sulla porta 443 (Google, Cloudflare, Quad9, OpenDNS, NextDNS, AdGuard, Mullvad e altri).

L'opzione **Blocca il DNS cifrato delle app**, in **Impostazioni › Avvisi**, le blocca, così le app tornano al DNS di sistema. All'inizio è spenta. Non tocca macOS e il software Apple, e un'app con una regola che consente il suo DNS lo tiene.
