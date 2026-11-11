---
title: "Esportazione e stampa"
description: "Esportare un documento di Charta in HTML, PDF, Word (DOCX) ed EPUB e stamparlo, su Mac, iPhone e iPad."
project: "charta"
order: 6
section: "Condividere"
---

Il documento resta in Markdown; le esportazioni sono file nuovi, scritti dove scegli tu.

- **Mac**: **Archivio › Esporta come HTML…**, **Esporta come PDF…**, **Esporta come Word (DOCX)…**, **Esporta come EPUB…** e **Stampa…** (<kbd>⌘</kbd> <kbd>P</kbd>). Il file si salva con il pannello di salvataggio.
- **iPhone e iPad**: le stesse voci nel menu **Altro** (…) della barra. Il file passa dal foglio di condivisione: lo salvi in File, lo mandi con AirDrop o Mail, o lo apri in un'altra app.

## HTML

Una pagina sola con lo stile dell'anteprima (**GitHub**, **Carta** o **Compatto**, da **Impostazioni › Anteprima › Stile**) e il codice colorato. Se il documento ha formule o diagrammi, la pagina carica KaTeX e Mermaid da jsDelivr quando la apri in un browser: per vederli serve la rete in quel momento. Lo fa il browser, non Charta.

## PDF e stampa

Il PDF e la stampa usano lo stile dell'anteprima, sempre nei colori chiari anche con il tema scuro, con formule, diagrammi e lo sfondo dei blocchi di codice. Sul Mac le pagine sono A4, o il foglio scelto nelle impostazioni di stampa, con margini di mezzo pollice; su iPhone e iPad il PDF è in A4.

## Word (DOCX)

Un documento Word vero, non una pagina web rinominata:

- titoli con gli stili **Heading 1**…**6**, così il sommario di Word li riconosce;
- elenchi puntati e numerati di Word, ciascuno con la sua numerazione;
- note a piè di pagina di Word;
- tabelle, codice, citazioni, link e immagini;
- formule e diagrammi come immagini;
- pagine A4.

## EPUB

Un libro elettronico con un capitolo per ogni titolo di primo livello (`#`). I link tra i titoli funzionano anche da un capitolo all'altro. Formule e diagrammi diventano immagini, e le immagini del documento entrano nel libro.

## Titolo, autore e lingua

Per Word ed EPUB Charta legge dal front matter `title`, `author` (o `autore`) e `lang` (o `language`, `lingua`). Senza `title` usa il nome del file; senza lingua quella del dispositivo.

```markdown
---
title: Il faro
author: Mario Rossi
lang: it
---
```

## Formule, diagrammi e immagini nei file esportati

In Word ed EPUB Charta disegna formule e diagrammi in colori chiari prima di scriverli. Ognuno ha fino a 8 secondi: se non ci riesce, nel file resta il testo della formula o del diagramma. Le immagini con un percorso relativo si leggono dalla cartella della nota: sul Mac, per un documento aperto da solo, Charta deve avere l'accesso alla sua cartella (vedi [Cartelle e note collegate](/progetti/charta/docs/cartelle-e-note-collegate)).
