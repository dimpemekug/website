---
title: "Anteprima e conflitti"
description: "Come funziona l'anteprima in tempo reale di rName: rilevamento automatico dei conflitti, esclusione dei file problematici e modifica manuale riga per riga."
project: "rname"
order: 3
section: "Regole e Modifiche"
---

## Un'anteprima sempre aggiornata

Il problema principale delle utility di rinomina tradizionali è l'incertezza: un'impostazione sbagliata può rinominare centinaia di file in modo irreversibile prima che ci si accorga dell'errore.

In rName **nulla viene scritto sul disco in background**.

La tabella centrale mostra in tempo reale ogni file aggiunto, con il nome originale accanto a quello proposto dalla catena di regole. Cambiare un parametro, aggiungere una regola o invertirne due ricalcola all'istante tutta l'anteprima, senza toccare i file.

Con migliaia di file l'anteprima si calcola in background e la lista resta fluida. Anche le cartelle grandi si leggono in background: in fondo alla finestra compare _Lettura dei file…_, con _Annulla_ per interrompere l'importazione.

### Filtri e ricerca

Sopra la tabella, i pulsanti _Tutti_, _Da rinominare_, _Problemi_ e _Invariati_ mostrano solo i file in quello stato, con il loro numero accanto; il campo _Cerca nei nomi_ restringe la lista ai file che contengono un testo. Anche i contatori in fondo alla finestra sono filtri: fai clic su uno per vedere solo quei file. Filtri e ricerca cambiano solo cosa vedi: la rinomina riguarda sempre tutti i file pronti.

---

## Gli stati dell'anteprima

Ogni riga della tabella ha un'icona e uno stato:

| Icona | Stato | Significato |
| :---: | :--- | :--- |
| `checkmark.circle.fill` | **Pronto** | Il nuovo nome è valido, senza conflitti e diverso da quello attuale: il file verrà rinominato. |
| `equal.circle` | **Invariato** | Le regole non cambiano il nome di questo file, che viene semplicemente saltato. |
| `exclamationmark.triangle.fill` | **Nome vuoto** | La catena di regole ha tolto tutti i caratteri del nome. |
| `exclamationmark.triangle.fill` | **Nome duplicato** | Due o più file della lista finirebbero con lo stesso nome nella stessa cartella. |
| `exclamationmark.triangle.fill` | **Già esistente** | Nella cartella esiste già un altro file con il nome proposto. |
| `exclamationmark.triangle.fill` | **Caratteri non validi** | Il nome contiene caratteri non ammessi dal file system (`/`, `:`, carattere nullo). |
| `exclamationmark.triangle.fill` | **Nome troppo lungo** | Il nome supera il limite di macOS e del file system APFS (255 caratteri). |

---

## I conflitti non bloccano tutto

In molti programmi un solo nome duplicato o troppo lungo blocca l'intera rinomina con un errore generico, oppure sovrascrive i file esistenti.

rName invece **esclude in anticipo i file in conflitto**:

- i file con uno stato bloccante (nome vuoto, duplicato, già esistente, caratteri non validi, troppo lungo) sono evidenziati nella tabella e **lasciati fuori dall'operazione**;
- tutti gli altri vengono rinominati normalmente;
- nessun file viene mai sovrascritto.

---

## Rinominare a mano un singolo file

Può capitare che in un gruppo di 50 documenti rinominati con una regola un file richieda un nome diverso.

Invece di rinominarlo a parte nel Finder:

1. fai **doppio clic** sulla riga del file (oppure clic destro › _Modifica il nome_);
2. scrivi il nome che vuoi;
3. quel file smette di seguire la catena di regole ed è contrassegnato da una **matita**;
4. in qualsiasi momento, il pulsante accanto lo riporta al nome calcolato dalle regole. Dal menu _Rinomina_ puoi anche ripristinare in una volta tutti i nomi scritti a mano.
