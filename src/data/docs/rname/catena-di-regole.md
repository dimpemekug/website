---
title: "Catena di Regole e Modalità"
description: "Guida esaustiva alle 8 regole di rinomina in rName: sostituzione con regex protetta da ReDoS, inserimento, rimozione, numerazione progressiva, maiuscole, date, estensioni e pulizia."
project: "rname"
order: 2
section: "Regole e Modifiche"
---

## Il Concetto di Catena di Regole

In rName, il nuovo nome di un file non viene prodotto da un singolo comando isolato, ma attraverso una **catena sequenziale di regole**.

Le regole vengono elaborate dall'alto verso il basso: ciascuna regola riceve il testo elaborato dalla precedente e vi applica la propria trasformazione. Questa architettura consente di combinare interventi mirati senza dover scrivere formule complesse. Ad esempio, è possibile pulire gli accenti, convertire il testo in minuscolo, anteporre la data di scatto e infine aggiungere una numerazione progressiva ordinata.

### Gestione Rapida nella Barra Laterale

- **Attivazione/Disattivazione Istantanea**: ogni riga della catena dispone di un interruttore per spegnere temporaneamente la regola senza doverla eliminare o riconfigurare.
- **Riordino tramite Trascinamento**: puoi afferrare e trascinare qualsiasi regola verso l'alto o verso il basso per mutarne l'ordine di esecuzione.
- **Aggiunta in un Clic**: la sezione superiore _Aggiungi una regola_ elenca le 8 tipologie disponibili; premendone una, essa viene inserita in fondo alla catena aprendone subito l'ispettore delle impostazioni.

---

## Ambito di Applicazione (`RuleScope`)

Ciascuna regola permette di selezionare con precisione la porzione di nome su cui deve operare:

1. **Solo nome (`baseName`)**: agisce esclusivamente sul corpo del nome, preservando l'estensione originale (es. modifica `documento` senza toccare `.pdf`).
2. **Solo estensione (`fileExtension`)**: applica le modifiche esclusivamente ai caratteri dopo l'ultimo punto.
3. **Nome completo (`fullName`)**: opera sull'intera stringa comprensiva di nome ed estensione.

---

## Le 8 Regole nel Dettaglio

### 1. Sostituisci (`replace`)

Cerca una sequenza di caratteri e la rimpiazza con un nuovo testo (o la cancella lasciando il campo di sostituzione vuoto).

- **Maiuscole/minuscole**: opzione per distinguere tra lettere maiuscole e minuscole (_case sensitive_).
- **Solo prima occorrenza**: limita la sostituzione alla prima corrispondenza trovata invece che a tutte.
- **Espressioni Regolari (Regex)**: supporta pattern avanzati con gruppi di cattura `()` richiamabili nella stringa di destinazione tramite `$1`, `$2`, ecc. (ad esempio per invertire autore e titolo: `(.*) - (.*)` → `$2 - $1`).
- **Protezione Anti-Blocco (Catastrophic Backtracking)**: le espressioni regolari con quantificatori annidati (come `(a+)+` o `(.*)*`) possono bloccare la CPU per minuti o ore. Il motore di rName esegue un controllo sintattico preventivo immediato e rifiuta i pattern a rischio di _catastrophic backtracking_, spiegando nell'ispettore il motivo per cui l'espressione non viene eseguita.

### 2. Inserisci testo (`insert`)

Aggiunge una stringa specifica:

- **All'inizio**: funge da prefisso (es. `Archivio_`).
- **Alla fine**: funge da suffisso prima dell'estensione.
- **In posizione esatta**: inserisce i caratteri a un indice numerico prefissato partendo dall'inizio della stringa.

### 3. Rimuovi caratteri (`remove`)

Elimina porzioni di testo secondo quattro modalità:

- **Primi caratteri**: cancella un numero stabilito di caratteri iniziali.
- **Ultimi caratteri**: cancella un numero stabilito di caratteri finali.
- **Intervallo**: parte da una posizione definita ed elimina un numero specificato di caratteri.
- **Motivo di testo**: cerca ed elimina un testo specifico o ricorrente.

### 4. Numerazione progressiva (`sequence`)

Genera sequenze numeriche automatiche basate sull'ordinamento attuale dei file nella lista:

- **Inizio e Passo**: imposta il valore di partenza (es. `1`) e l'incremento per ciascun elemento (es. `1` o `10`).
- **Cifre di riempimento (Padding)**: stabilisce il numero minimo di cifre inserendo zeri iniziali (es. con 3 cifre: `001`, `002`, ..., `099`).
- **Posizione e Separatore**: colloca il contatore a prefisso, suffisso o indice, unendolo con un separatore personalizzato (es. `_`, `-`, `-`).

### 5. Maiuscole/minuscole (`changeCase`)

Normalizza lo stile tipografico dei nomi scegliendo tra 8 stili:

- `minuscolo`: trasforma tutto in lettere minuscole.
- `MAIUSCOLO`: converte tutto in lettere maiuscole.
- `Iniziali Maiuscole Di Ciascuna Parola`: stile titolo inglese (_Title Case_).
- `Prima lettera maiuscola`: capitalizza solo il primo carattere della frase (_Sentence case_).
- `camelCase`: prima parola minuscola, parole successive unite con iniziale maiuscola.
- `PascalCase`: tutte le parole unite con iniziale maiuscola.
- `snake_case`: parole minuscole separate da trattino basso `_`.
- `kebab-case`: parole minuscole separate da trattino `-`.

### 6. Data e ora (`dateStamp`)

Inserisce timestamp temporali nel nome dei file:

- **Sorgente**: Data di creazione file sul disco, Data di ultima modifica, oppure Data odierna.
- **Formato Personalizzabile**: accetta stringhe standard ISO (es. `yyyy-MM-dd`, `yyyyMMdd`, `yyyy-MM-dd_HHmm`), consentendo l'ordinamento cronologico automatico nel Finder.
- **Posizione e Separatore**: applicabile all'inizio o alla fine del nome.

### 7. Estensione (`fileExtension`)

Gestisce in modo dedicato l'estensione dei file:

- **Imposta a**: cambia forzatamente l'estensione (es. da `jpeg` a `jpg`).
- **Rendi minuscola**: normalizza estensioni eterogenee (es. `.PNG` o `.JPG` diventano `.png` e `.jpg`).
- **Rendi maiuscola**: converte le estensioni in maiuscolo.
- **Rimuovi**: elimina completamente l'estensione dal nome del file.

### 8. Pulizia nome (`cleanUp`)

Sanifica i nomi prima della pubblicazione sul web o dell'archiviazione:

- **Rimuovi spazi alle estremità**: elimina spazi bianchi superflui prima o dopo il nome.
- **Comprimi spazi**: riduce sequenze di spazi doppi o multipli a uno spazio singolo.
- **Conversione spazi**: sostituisce ogni spazio con un trattino basso (`_`), un trattino (`-`) o lo elimina del tutto.
- **Rimuovi accenti e diacritici**: converte lettere accentate nei corrispettivi caratteri ASCII (es. `è` → `e`, `à` → `a`, `ü` → `u`).
- **Rimuovi caratteri non validi**: elimina simboli incompatibili con il filesystem (`/`, `:`, `\0`).
- **Rimuovi emoji**: elimina caratteri grafici ed emoticon decorative dai file di lavoro.
