---
title: "Documenti lunghi"
description: "Struttura, titoli compressi, Vai alla pagina, titoli numerati, sommario, didascalie, riferimenti incrociati e note in Documenta, per tesi e rapporti."
project: "documenta"
order: 5
section: "Scrittura"
---

## Struttura del documento

**Vista › Mostra struttura** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>O</kbd>) apre la barra laterale con i paragrafi in stile Titolo e Intestazione, rientrati per livello; la voce che contiene il cursore resta evidenziata. Con i titoli numerati ogni voce ha il suo numero; i titoli lunghi vanno a capo, e passando sopra una voce si legge intera. In cima alla barra si passa da **Struttura** a **Commenti**: vedi [Commenti e revisioni](/progetti/documenta/docs/commenti-e-revisioni).

- Un clic porta al titolo.
- Trascinando un titolo si sposta **il capitolo intero**: il titolo e tutto quello che segue fino al titolo successivo dello stesso livello o più alto.
- Il menu contestuale ha **Sposta su**, **Sposta giù**, **Alza di livello** e **Abbassa di livello**; cambiando livello si spostano anche i sottotitoli.

Ogni operazione si annulla in un solo passo.

## Comprimere i titoli

Nel menu contestuale della struttura, **Comprimi la sezione** nasconde tutto quello che segue un titolo fino al titolo successivo dello stesso livello o più alto; un'icona nella struttura segna le sezioni compresse ed **Espandi la sezione** le riapre. **Vista › Comprimi tutti i titoli** comprime le sezioni del livello più alto presente, **Espandi tutti i titoli** riapre tutto.

I titoli compressi valgono solo sullo schermo: file, stampa e PDF hanno sempre tutto il testo. Se il cursore entra in una sezione compressa, con le frecce, una ricerca o un link, la sezione si riapre.

## Spostarsi nel documento

- **Vista › Vai alla pagina…** (<kbd>⌃</kbd> <kbd>⌘</kbd> <kbd>G</kbd>), o un clic su «Pagina X di Y» nella barra di stato, porta il cursore all'inizio della pagina scelta.
- **Vai indietro** (<kbd>⌃</kbd> <kbd>⌘</kbd> <kbd>←</kbd>) e **Vai avanti** (<kbd>⌃</kbd> <kbd>⌘</kbd> <kbd>→</kbd>) funzionano come in un browser: riportano dove eri prima di un salto (un clic nella struttura o nell'elenco dei commenti, il commento o la revisione successivi, un segnalibro o un link interno, Vai alla pagina). Si ricordano fino a 50 posizioni; i normali spostamenti del cursore e le ricerche non contano.

## Titoli numerati

**Formato › Stile paragrafo › Numera i titoli** numera le intestazioni come 1, 1.1, 1.1.1. I numeri si aggiornano da soli quando aggiungi, togli o sposti un capitolo. Nei file Word e ODT diventano la numerazione degli stili, come in Word e LibreOffice; in HTML, Markdown, RTF, DOC e testo semplice restano scritti come testo.

## Sommario

**Inserisci › Sommario** mette nel punto del cursore un sommario con le intestazioni da 1 a 2, 3, 4 o 6 livelli. Ogni voce è un link al suo titolo, con il numero di pagina e i puntini. **Inserisci › Aggiorna sommario** lo rifà con gli stessi livelli o con livelli diversi. Gli stessi comandi sono nella sezione Titoli e indici della scheda Documento.

## Didascalie e indice delle figure

**Inserisci › Didascalia…** aggiunge una didascalia numerata sotto o sopra l'immagine o la tabella: l'etichetta è Figura, Tabella, Equazione o un nome scelto con Altra…, e il testo è facoltativo. Ogni etichetta si numera a parte e il numero si aggiorna da solo quando aggiungi o sposti altre didascalie.

**Inserisci › Indice delle figure** elenca le didascalie di un'etichetta con le loro pagine; **Aggiorna sommario** aggiorna anche questo indice.

## Riferimenti incrociati

**Inserisci › Riferimento incrociato…** apre l'elenco dei titoli e delle didascalie del documento. In **Mostra** scegli cosa scrivere nel testo:

- il testo del titolo, o etichetta e numero per una didascalia ("Figura 2");
- il numero del titolo, se i titoli sono numerati;
- il numero di pagina.

Il riferimento segue il suo bersaglio: se la figura 2 diventa la 3, il testo cambia.

## Segnalibri e link

**Inserisci › Segnalibro…** dà un nome al testo selezionato o alla parola del cursore. Un link `#nome` (**Inserisci › Link…**, <kbd>⌘</kbd> <kbd>K</kbd>) porta al segnalibro. I segnalibri si conservano in DOCX e ODT; nell'EPUB i link tra capitoli funzionano.

## Note

- **Nota a piè di pagina** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>F</kbd>) e **Nota di chiusura** dal menu Inserisci.
- Inserendo una nota si apre un riquadro in cui scriverla, anche formattata; un clic sul numero della nota lo riapre.
- Le note a piè di pagina vanno in fondo alla pagina del richiamo, al massimo per metà pagina; una nota troppo lunga continua sulla pagina seguente. Le note di chiusura vanno dopo il testo.
- I numeri si contano da soli.

## Conteggi e leggibilità

La barra di stato mostra parole e caratteri; con del testo selezionato, anche quelli della selezione («12 di 840 parole»). Un clic sull'obiettivo di parole permette di sceglierne uno (0 per non averlo) e ne mostra la percentuale raggiunta.

La sezione **Informazioni** della scheda Documento mostra parole, caratteri, pagine, **tempo di lettura**, parole per frase, frase più lunga, parole frequenti e **leggibilità**: l'indice Gulpease per l'italiano e Flesch per l'inglese. La velocità di lettura (230 parole al minuto all'inizio) si cambia in **Impostazioni › Scrittura**.
