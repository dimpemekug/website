---
title: "Catena di regole"
description: "Le 8 regole di rinomina di rName: sostituzione anche con espressioni regolari (protette dal backtracking catastrofico), inserimento, rimozione, numerazione, maiuscole, date, estensioni e pulizia."
project: "rname"
order: 2
section: "Regole e Modifiche"
---

## Come funziona la catena

In rName il nuovo nome di un file non nasce da un singolo comando, ma da una **catena di regole** applicate in sequenza.

Le regole vengono eseguite dall'alto verso il basso: ciascuna riceve il risultato della precedente e applica la propria trasformazione. Così puoi combinare interventi semplici senza scrivere formule complesse: per esempio togliere gli accenti, passare tutto in minuscolo, anteporre la data e infine aggiungere una numerazione.

### La barra laterale

- **Attiva e disattiva**: ogni regola della catena ha un interruttore per spegnerla temporaneamente, senza eliminarla né riconfigurarla.
- **Riordina**: trascina una regola in alto o in basso per cambiarne l'ordine di esecuzione.
- **Aggiungi con un clic**: la sezione _Aggiungi una regola_ mostra le 8 regole disponibili; un clic ne aggiunge una in fondo alla catena e ne apre le impostazioni. La sezione si può richiudere quando la catena si allunga.

---

## Ambito di applicazione

Ogni regola può agire su una parte precisa del nome:

1. **Solo nome**: solo la parte prima dell'estensione (es. modifica `documento` senza toccare `.pdf`).
2. **Solo estensione**: solo i caratteri dopo l'ultimo punto.
3. **Nome completo**: tutto il nome, estensione compresa.

---

## Le 8 regole

### 1. Sostituisci

Cerca un testo e lo sostituisce con un altro (o lo cancella, se lasci vuoto il campo di sostituzione).

- **Maiuscole/minuscole**: puoi distinguere o no tra lettere maiuscole e minuscole.
- **Solo la prima occorrenza**: sostituisce solo la prima corrispondenza invece di tutte.
- **Espressioni regolari**: supporta i gruppi di cattura `()`, richiamabili nel testo di sostituzione con `$1`, `$2` e così via (per esempio, per invertire autore e titolo: `(.*) - (.*)` → `$2 - $1`).
- **Protezione dal backtracking catastrofico**: le espressioni con quantificatori annidati (come `(a+)+` o `(.*)*`) possono bloccare il processore per minuti. rName le riconosce prima di eseguirle, le rifiuta e spiega il motivo nelle impostazioni della regola.

### 2. Inserisci testo

Aggiunge un testo:

- **all'inizio**, come prefisso (es. `Archivio_`);
- **alla fine**, come suffisso;
- **in una posizione precisa**, contando i caratteri dall'inizio.

### 3. Rimuovi caratteri

Elimina parti del nome in quattro modi:

- **Primi caratteri**: un numero stabilito di caratteri iniziali.
- **Ultimi caratteri**: un numero stabilito di caratteri finali.
- **Intervallo**: un certo numero di caratteri a partire da una posizione.
- **Motivo di testo**: un testo specifico o ricorrente.

### 4. Numerazione

Numera i file seguendo l'ordine della lista:

- **Inizio e passo**: il valore di partenza (es. `1`) e l'incremento (es. `1` o `10`).
- **Cifre**: il numero minimo di cifre, con zeri iniziali (es. con 3 cifre: `001`, `002`, … `099`).
- **Posizione e separatore**: il numero va all'inizio, alla fine o in una posizione precisa, unito al nome da un separatore a scelta (es. `_`, `-` o ` - `).

### 5. Maiuscole/minuscole

Uniforma l'uso delle maiuscole con 8 stili:

- `minuscolo`: tutto in minuscolo.
- `MAIUSCOLO`: tutto in maiuscolo.
- `Iniziali Maiuscole Di Ogni Parola`: lo stile dei titoli inglesi (_Title Case_).
- `Prima lettera maiuscola`: solo il primo carattere maiuscolo (_Sentence case_).
- `camelCase`: prima parola minuscola, le successive unite e con l'iniziale maiuscola.
- `PascalCase`: tutte le parole unite e con l'iniziale maiuscola.
- `snake_case`: parole minuscole separate da trattino basso `_`.
- `kebab-case`: parole minuscole separate da trattino `-`.

### 6. Data e ora

Inserisce una data nel nome dei file:

- **Fonte**: data di creazione del file, data di ultima modifica oppure data di oggi.
- **Formato**: uno schema di formato personalizzabile (es. `yyyy-MM-dd`, `yyyyMMdd`, `yyyy-MM-dd_HHmm`); con anno, mese e giorno in quest'ordine, il Finder ordina i file per data.
- **Posizione e separatore**: all'inizio, alla fine o in una posizione precisa del nome.

### 7. Estensione

Gestisce l'estensione dei file:

- **Imposta**: cambia l'estensione (es. da `jpeg` a `jpg`).
- **Rendi minuscola**: uniforma estensioni miste (es. `.PNG` e `.JPG` diventano `.png` e `.jpg`).
- **Rendi maiuscola**: converte l'estensione in maiuscolo.
- **Rimuovi**: elimina l'estensione dal nome.

### 8. Pulizia nome

Ripulisce i nomi prima di pubblicarli sul web o di archiviarli:

- **Spazi alle estremità**: toglie gli spazi prima e dopo il nome.
- **Spazi doppi**: riduce le sequenze di spazi a uno solo.
- **Spazi**: lasciali come sono, sostituiscili con un trattino basso (`_`) o un trattino (`-`), oppure eliminali.
- **Accenti**: converte le lettere accentate nella lettera semplice (es. `è` → `e`, `à` → `a`, `ü` → `u`).
- **Caratteri non validi**: toglie i caratteri non ammessi dal file system (`/`, `:`, carattere nullo).
- **Emoji**: toglie emoji e simboli grafici.
