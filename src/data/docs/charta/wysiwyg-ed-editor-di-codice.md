---
title: "WYSIWYG ed editor di codice"
description: "I due modi di scrivere in Charta, l'anteprima con lo scorrimento sincronizzato, la struttura dei titoli e la barra di stato."
project: "charta"
order: 2
section: "Scrittura"
---

Ogni documento si può scrivere in due modi. Il file è lo stesso: cambia solo come lo vedi.

## WYSIWYG

Nel WYSIWYG il testo si vede già formattato: titoli, grassetto, corsivo, link, elenchi e citazioni. I segni del Markdown compaiono solo nel tratto dove c'è il cursore, così puoi correggerli, e spariscono quando ti sposti. I `#` dei titoli stanno nel margine sinistro, quindi il titolo non si sposta quando ci arrivi.

Prendono il posto del loro testo, quando il cursore non è lì:

- **tabelle**, con le colonne allineate;
- **formule** e **diagrammi Mermaid**, disegnati come nell'anteprima;
- **immagini** da sole su una riga, se il file è sul disco (le immagini con un indirizzo web si vedono solo nell'anteprima).

Le caselle delle voci da spuntare si spuntano con un clic (o un tocco); il file cambia solo da `[ ]` a `[x]`.

Le formule e i diagrammi si possono spegnere in **Impostazioni › Editor**: con **Disegna le formule** o **Disegna i diagrammi Mermaid** spente resta il loro testo. Con **Mostra sempre il front matter** spenta, il front matter YAML in cima al file compare solo quando il cursore ci arriva.

## Editor di codice

L'editor di codice mostra il Markdown così com'è, in un carattere a spaziatura fissa, con:

- i colori della sintassi, anche dentro i blocchi di codice di una trentina di linguaggi;
- i numeri di riga e la riga corrente evidenziata (si spengono in **Impostazioni › Editor**);
- l'**anteprima**, che si dispone in tre modi: **Solo editor**, **Editor e anteprima** affiancati, **Solo anteprima**.

Sul Mac i comandi sono nel menu **Vista**: **Mostra anteprima affiancata** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>P</kbd>) e **Solo anteprima** (<kbd>⌥</kbd> <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>P</kbd>). Il divisore tra editor e anteprima si trascina. Su iPhone l'anteprima sta sotto il testo, su iPad accanto; la disposizione si sceglie dal pulsante con l'occhio nella barra.

Con **Scorrimento sincronizzato** attivo, testo e anteprima scorrono insieme in entrambe le direzioni. Sul Mac un doppio clic su un blocco dell'anteprima porta il cursore alla sua riga nel testo. Nell'anteprima si spuntano anche le caselle, e i collegamenti `[[nota]]` aprono la nota.

L'anteprima usa uno dei tre stili di **Impostazioni › Anteprima › Stile**: **GitHub**, **Carta** (con grazie, titoli centrati, per i testi lunghi) e **Compatto**. Lo stesso stile vale per l'esportazione in HTML e PDF. L'HTML scritto nei documenti viene mostrato senza script.

## Passare da un modo all'altro

<kbd>⌘</kbd> <kbd>E</kbd> (anche su iPad con la tastiera) o il pulsante dei due modi nella barra. Il cursore resta nello stesso punto del testo. Il modo predefinito si sceglie in **Impostazioni › Generali › Apri i documenti in**; in una cartella, le [impostazioni del progetto](/progetti/charta/docs/cartelle-e-note-collegate) possono sceglierne un altro per la prima nota.

## Struttura dei titoli e collegamenti in entrata

La barra laterale a destra ha due schede: **Struttura**, con i titoli del documento (quello al cursore è evidenziato, un clic ci porta), e **Collegamenti**, con le note che citano quella aperta (solo nelle cartelle). Sul Mac: **Vista › Mostra struttura** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>L</kbd>) e **Vista › Collegamenti in entrata** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>B</kbd>). Su iPad la barra è affiancata, su iPhone si apre in un foglio.

## Barra di stato

In fondo alla finestra:

- a sinistra il **tipo di blocco al cursore** (Testo, Titolo 2, Tabella, Codice…), con un menu che cambia: titoli, elenchi e citazione per il testo, i comandi per le tabelle, la lingua per i blocchi di codice;
- l'**obiettivo di parole** o il conteggio delle parole (vedi [Formato, tabelle e scrittura](/progetti/charta/docs/formato-tabelle-e-scrittura));
- caratteri, righe e minuti di lettura (su iPhone solo parole e tempo di lettura);
- nell'editor di codice con l'anteprima, l'interruttore dello scorrimento sincronizzato.
