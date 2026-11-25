---
title: "Tag, comandi e sezioni ripiegate"
description: "I tag #nome nelle note, il riquadro dei comandi, le sezioni ripiegabili e l'anteprima dei collegamenti di Charta, su Mac, iPhone e iPad."
project: "charta"
order: 6
section: "Cartelle"
---

Quattro strumenti per orientarsi in note lunghe o numerose, arrivati con Charta 1.1.

## Tag

Un tag è una parola preceduta da `#`, scritta nel testo o nella chiave `tags:` del front matter:

```markdown
---
tags: [meteo, hardware]
---

Da verificare prima dell'inverno. #idea #progetto/charta
```

- Il tag comincia all'inizio della riga o dopo uno spazio o una parentesi, e contiene lettere (anche accentate), cifre, `_`, `-` e `/`. Deve avere almeno un carattere che non sia una cifra, così `#1` resta testo.
- La `/` crea tag annidati: `#progetto/charta` sta sotto `#progetto`.
- Nel testo i tag si colorano su uno sfondo arrotondato, come il codice in linea, e nell'anteprima allo stesso modo. Dopo `#` Charta propone i tag già usati nella cartella.

Nelle cartelle la barra laterale ha la sezione **Tag**: un ramo per tag, con i tag annidati dentro e le note che li hanno. **Cerca #… nelle note** cerca il tag in tutte le note. Nel testo, <kbd>⌘</kbd>-clic su un tag o **Note con #…** nel menu del tasto destro fanno la stessa ricerca.

## Riquadro dei comandi

**Vista › Comandi…** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>P</kbd>; su iPhone e iPad nel menu **Altro**, e <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>P</kbd> con la tastiera) apre un campo dove scrivi parte del nome di un comando:

- i comandi di formato, inserimento, tabella, vista, sezioni ed esportazione, con la loro scorciatoia;
- i titoli del documento, per andarci;
- nelle cartelle, anche le note e i tag.

Senza testo compaiono prima i comandi usati di recente. I comandi si trovano anche con parole diverse dal nome, per esempio «h1» per **Titolo 1** o «bold» per **Grassetto**.

## Sezioni ripiegate

Una sezione va da un titolo al titolo successivo dello stesso livello o più alto. Ripiegarla nasconde il suo testo e lascia il titolo con «…»; il file non cambia.

- Una freccia accanto ai titoli ripiega e riapre la sezione. Sul Mac compare passando con il puntatore nel margine; su iPhone e nelle colonne strette sta dopo il testo del titolo dove c'è il cursore.
- Sul Mac, nel menu **Vista**: **Ripiega la sezione** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>[</kbd>), **Espandi la sezione** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>]</kbd>), **Ripiega tutte le sezioni** (<kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>[</kbd>) ed **Espandi tutte le sezioni** (<kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>]</kbd>). Gli stessi comandi sono nel tasto destro su un titolo e nel riquadro dei comandi.
- Nella **Struttura** i titoli hanno le stesse frecce, e il menu contestuale ha **Ripiega i titoli di livello N**. Trascinando un titolo nella Struttura sposti tutta la sua sezione; le righe vuote tra le sezioni restano al loro posto.
- Scrivere dentro il tratto nascosto o andare a capo alla fine del titolo riapre la sezione. Il cursore non resta nascosto: la freccia → alla fine del titolo salta la sezione.

Charta ricorda le sezioni ripiegate di ogni file e le ripiega di nuovo quando lo riapri o lo ricarichi. Funziona nel WYSIWYG e nell'editor di codice.

## Anteprima dei collegamenti

Fermando il puntatore su un collegamento `[[nota]]` o su un richiamo `[^1]` (su iPhone e iPad tenendolo premuto), compare un riquadro con:

- l'inizio della nota, senza il front matter;
- la sezione, se il collegamento punta a un titolo (`[[nota#titolo]]`);
- il testo della nota a piè di pagina.

Il testo è formattato e si ferma alla fine di un blocco, entro circa 1200 caratteri. Il riquadro si chiude quando riprendi a scrivere.

## Collegamenti rotti e note orfane

Nelle cartelle, **Archivio › Collegamenti rotti e note orfane…** (sul Mac anche nel menu **+**, su iPhone e iPad nel menu **Altro**, e nel riquadro dei comandi) apre due elenchi:

- **Collegamenti rotti**: i collegamenti che non portano a nessuna nota della cartella, raggruppati per nome cercato. **Crea nota** crea la nota mancante; un clic su un collegamento apre la nota che lo contiene in quel punto.
- **Note orfane**: le note che nessun'altra nota collega, con `[[…]]` o con un link Markdown. Un collegamento di una nota a sé stessa non conta.

Gli elenchi si aggiornano a ogni salvataggio.
