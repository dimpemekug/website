---
title: "Formato, tabelle e scrittura"
description: "I menu Formato e Inserisci, elenchi e rientri, i comandi delle tabelle, il testo incollato, l'obiettivo di parole, la Modalità Focus e la Macchina da scrivere."
project: "charta"
order: 4
section: "Scrittura"
---

Ogni comando scrive Markdown nel testo: puoi sempre vedere e correggere i segni nell'editor di codice o con il cursore nel WYSIWYG.

## Formato

Sul Mac nel menu **Formato** della barra dei menu e della barra della finestra, su iPhone e iPad nel menu **Formato** della barra e nella [barra sopra la tastiera](/progetti/charta/docs/iphone-e-ipad).

- **Grassetto**, **Corsivo**, **Barrato**, **Codice**, **Evidenziato**: con una selezione mettono o tolgono i segni attorno; senza selezione valgono per la parola sotto il cursore, o lasciano i segni vuoti con il cursore in mezzo.
- **Titolo**: da **Testo normale** a **Titolo 6**, sulle righe selezionate.
- **Elenco puntato**, **Elenco numerato**, **Voci da spuntare**, **Citazione**: mettono o tolgono il segno all'inizio di ogni riga selezionata.
- **Aumenta rientro** e **Riduci rientro** (<kbd>⌘</kbd> <kbd>]</kbd> e <kbd>⌘</kbd> <kbd>[</kbd>): rientrano le voci di elenco.

Le scorciatoie sono in [Scorciatoie da tastiera](/progetti/charta/docs/scorciatoie). Lo stesso menu di titoli ed elenchi si apre anche dal tipo di blocco a sinistra nella barra di stato.

## Inserisci

Sul Mac nel menu **Inserisci** (e nel menu **Formato** della barra), su iPhone e iPad nel menu **Formato** e nel pulsante **+** sopra la tastiera:

- **Link**: `[testo](url)`. Se hai selezionato un indirizzo, diventa la destinazione e il cursore va nel testo.
- **Collegamento a una nota**: `[[…]]`, con le proposte delle note della cartella.
- **Immagine**: `![descrizione](…)`.
- **Tabella**: tre colonne e due righe, con la prima intestazione selezionata.
- **Blocco di codice**, **Formula**, **Diagramma Mermaid**: attorno alle righe selezionate o vuoti al cursore.
- **Nota a piè di pagina**: il richiamo `[^n]` al cursore e la nota in fondo al documento, con il cursore nella nota.
- **Separatore**: una riga `---`.

## Il menu del tasto destro

Un clic con il tasto destro nel testo (su iPhone e iPad il menu che compare toccando il testo o selezionandolo) mostra prima i comandi di Charta per ciò che sta sotto il cursore, poi quelli del sistema:

- **su un collegamento `[[nota]]`**: **Apri «…»**, **Collegamenti in entrata** e **Rinomina la nota…** (nelle cartelle), sul Mac **Apri in una finestra a parte**; se la nota non esiste, **Crea la nota «…»**. Poi **Copia collegamento** e **Togli il collegamento**;
- **su un link**: **Apri link** (o **Vai al titolo** per un link interno), **Copia indirizzo**, **Modifica link…**, che seleziona l'indirizzo, e **Togli il collegamento**, che lascia il testo;
- **con del testo selezionato**, in una cartella: **Crea nota dalla selezione** sposta il testo in una nota nuova accanto e lascia al suo posto il collegamento; **Collega a una nota…** trasforma la selezione in `[[|testo]]` e propone le note; **Cerca nella cartella** la cerca in tutte le note;
- **in una tabella**: i sottomenu **Riga** (**Inserisci riga sopra**, **Inserisci riga sotto**, **Elimina riga**) e **Colonna** (inserisci a sinistra o a destra, elimina, allinea), e **Formatta tabella**;
- **in una voce da spuntare**: **Spunta** o **Togli la spunta**, **Spunta tutte** e **Togli tutte le spunte** (anche le voci annidate);
- **su un titolo**: **Copia collegamento al titolo** (un `[[nota#titolo]]` nelle cartelle, un link `#titolo` in un documento) e **Sposta la sezione in su** o **in giù**, che scambia il titolo e il suo testo con la sezione vicina dello stesso livello;
- **in un blocco di codice**: **Copia il codice** e il sottomenu **Lingua**; **in una formula o un diagramma**: **Copia il sorgente**; **su un richiamo di nota**: **Vai alla nota a piè di pagina**;
- **nel testo normale**: i sottomenu **Formato** e **Trasforma in** (testo, titoli, elenchi, citazione).

## Elenchi e citazioni

Invio in una voce di elenco o in una citazione continua il segno sulla riga nuova (i numeri crescono, le caselle ripartono vuote). Invio su una voce vuota toglie il segno ed esce dall'elenco. Tab e <kbd>⇧</kbd> Tab sulle voci di elenco rientrano e tolgono il rientro.

## Tabelle

Con il cursore in una tabella:

- **Tab** passa alla cella dopo, <kbd>⇧</kbd> Tab a quella prima;
- **Invio** va alla riga sotto e ne aggiunge una dopo l'ultima; Invio su un'ultima riga vuota esce dalla tabella;
- **Formatta tabella** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>F</kbd>) allinea le colonne nel testo;
- **Aggiungi riga**, **Aggiungi colonna**, **Elimina riga**, **Elimina colonna**;
- **Sposta riga in su/in giù** e **Sposta colonna a sinistra/a destra**, sul Mac con <kbd>⌥</kbd> <kbd>⌘</kbd> e le frecce;
- **Allinea a sinistra**, **al centro**, **a destra** per la colonna del cursore (dal menu della barra di stato; sul Mac anche in **Formato › Tabella**).

Sul Mac i comandi sono in **Formato › Tabella**, nel menu della barra di stato e nel tasto destro; su iPhone e iPad nel menu **Modifica tabella** sopra la tastiera, nel menu **Formato** della barra (con il cursore in una tabella), nel menu della barra di stato e nel menu del testo.

## Incollare

Il testo copiato da una pagina web o da un documento con formattazione (titoli, grassetto, link, elenchi, tabelle) diventa Markdown quando lo incolli. Il testo che viene da un editor di codice resta testo semplice, e nei blocchi di codice si incolla sempre il testo così com'è. Sul Mac **Composizione › Incolla e adatta stile** incolla sempre il testo semplice.

Le immagini incollate o trascinate nel testo si salvano come file accanto alla nota: vedi [Cartelle e note collegate](/progetti/charta/docs/cartelle-e-note-collegate).

## Obiettivo di parole

Nella barra di stato, il conteggio delle parole è anche un pulsante: un clic apre **Obiettivo di parole**, dove scrivi il numero e scegli **Imposta**. L'obiettivo si scrive nel front matter del documento (`goal: 1500`), così viaggia con il file; **Togli obiettivo** lo toglie (e il front matter, se restava vuoto). Con un obiettivo, la barra di stato mostra un anello e «135 di 600 parole».

## Modalità Focus e Macchina da scrivere (Mac)

Nel menu **Vista**:

- **Modalità Focus** (<kbd>⌃</kbd> <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>F</kbd>) mette in evidenza il blocco dove stai scrivendo e attenua il resto;
- **Macchina da scrivere** (<kbd>⌃</kbd> <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>T</kbd>) tiene la riga del cursore al centro della finestra.

**Ingrandisci testo** e **Riduci testo** (<kbd>⌘</kbd> <kbd>+</kbd> e <kbd>⌘</kbd> <kbd>-</kbd>) cambiano la dimensione del carattere del WYSIWYG e dell'editor di codice in tutte le finestre; **Dimensione originale** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>0</kbd>) torna ai valori predefiniti.

## Ortografia e punteggiatura

Il controllo ortografico è attivo all'inizio; **Virgolette e trattini tipografici** è spenta, perché nel Markdown le virgolette dritte e i trattini contano. Si cambiano in **Impostazioni › Editor › Scrittura**.
