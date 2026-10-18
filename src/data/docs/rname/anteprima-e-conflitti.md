---
title: "Anteprima e Risoluzione Conflitti"
description: "Come funziona l'anteprima in tempo reale di rName: rilevamento automatico dei conflitti, isolamento dei file bloccanti e modifica manuale riga per riga."
project: "rname"
order: 3
section: "Regole e Modifiche"
---

## Anteprima Reale e Continua

Uno dei problemi principali delle utility di rinomina tradizionali è l'incertezza: un'impostazione errata può rinominare centinaia di file sul disco in modo irreversibile prima ancora che l'utente possa rendersi conto dell'errore.

In rName, **nessuna scrittura sul filesystem avviene in background**.

La tabella centrale visualizza in tempo reale ogni file aggiunto, affiancando il nome originario al nome proposto dalla catena di regole attiva. Modificare un parametro, aggiungere una regola o invertire due passaggi ricalcola istantaneamente l'intera anteprima senza toccare alcun byte su disco.

---

## Gli Stati dell'Anteprima

Ogni riga della tabella è accompagnata da un'icona e da uno stato diagnostico chiaro:

|              Icona              | Stato                                          | Significato ed Effetto                                                                                                      |
| :-----------------------------: | :--------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
|     `checkmark.circle.fill`     | **Pronto (`ready`)**                           | Il nome calcolato è valido, privo di conflitti e diverso dal nome originale. Il file verrà rinominato all'avvio.            |
|         `equal.circle`          | **Invariato (`unchanged`)**                    | Le regole non modificano questo file (il nome risultante è identico a quello attuale). Il file viene ignorato senza errori. |
| `exclamationmark.triangle.fill` | **Nome vuoto (`emptyName`)**                   | La catena di regole ha rimosso tutti i caratteri del nome.                                                                  |
| `exclamationmark.triangle.fill` | **Nome duplicato (`duplicate`)**               | Due o più file diversi nella lista finirebbero per ricevere lo stesso identico nome nella stessa cartella.                  |
| `exclamationmark.triangle.fill` | **Già esistente (`alreadyExists`)**            | Nella cartella sul disco esiste già un file diverso con il nome proposto.                                                   |
| `exclamationmark.triangle.fill` | **Caratteri non validi (`illegalCharacters`)** | Il nome include caratteri vietati dal filesystem (`/`, `:`, byte nullo).                                                    |
| `exclamationmark.triangle.fill` | **Nome troppo lungo (`tooLong`)**              | Il nome risultante supera il limite massimo imposto da macOS e dal filesystem APFS (255 caratteri).                         |

---

## Isolamento dei Conflitti: Nessuna Interruzione

Negli strumenti standard, un singolo nome duplicato o troppo lungo blocca l'intero processo di rinomina con un errore generico, oppure sovrascrive file esistenti cancellandone i dati.

rName adotta la strategia dell'**isolamento preventivo dei conflitti**:

- Tutti i file che presentano uno stato bloccante (`emptyName`, `duplicate`, `alreadyExists`, `illegalCharacters`, `tooLong`) vengono evidenziati con chiarezza nella tabella e **lasciati fuori dall'operazione**.
- I file regolari e privi di conflitti vengono rinominati regolarmente.
- L'archivio non subisce mai perdite di dati accidentali né sovrascritture non autorizzate.

---

## Modifica Manuale del Singolo File

Può capitare che, all'interno di un gruppo di 50 documenti rinominati secondo una regola generale, un file specifico richieda un titolo d'eccezione.

Invece di dover rinominare quel file manualmente prima o dopo nel Finder:

1. Fai **doppio clic** sulla riga del file nella tabella (oppure tasto destro → _Modifica il nome_).
2. Digita direttamente il nome desiderato per quel documento specifico.
3. Quel file smetterà di seguire la catena delle regole generali e verrà contrassegnato con l'icona di una **matita**.
4. In qualsiasi momento, premendo il pulsante di ripristino accanto al campo, il file tornerà a seguire la catena di regole calcolata.
