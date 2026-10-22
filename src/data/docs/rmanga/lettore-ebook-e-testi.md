---
title: "Lettore di ebook e libri di testo"
description: "Il lettore di testo basato su Readium per EPUB, FB2, DOCX, ODT, RTF, HTML, TXT e Markdown: temi, caratteri, impaginazione, segnalibri, evidenziazioni e ricerca in rManga."
project: "rmanga"
order: 4
section: "Ebook"
---

## Il lettore di testo (Readium)

Per i libri fatti di testo rManga usa **Readium** (`EPUBNavigatorViewController`), il toolkit open source di riferimento per gli ebook. I PDF e gli EPUB fatti di immagini si sfogliano invece con il lettore dei fumetti.

Con Readium:
- le posizioni nel libro (circa una ogni mille caratteri) sono le stesse su ogni dispositivo, qualunque sia lo schermo o il carattere scelto;
- il testo è impaginato con la sillabazione nella lingua del libro, riconosciuta con il framework `NaturalLanguage` di Apple;
- il punto di lettura si sincronizza anche con i server Komga e Kavita.

---

## Conversione automatica degli altri formati

Per i documenti che non sono EPUB (**TXT, Markdown, DOCX di Word, ODT di LibreOffice, RTF, HTML o FB2**) non servono programmi esterni come Calibre:

1. **Conversione sul dispositivo**: alla prima apertura il file viene convertito in un **EPUB 3** salvato nella cache (`Caches/TextBooks`), che viene rifatto se il file cambia.
2. **Capitoli riconosciuti automaticamente**:
   - nel Markdown ogni titolo di livello 1 o 2 apre un capitolo; nei TXT lo aprono i paragrafi brevi che cominciano con parole come "Capitolo", "Parte" o "Prologo" (ma non le righe di un indice);
   - DOCX e ODT conservano grassetto, corsivo, sottolineato, titoli, elenchi, tabelle, immagini, link e note a piè di pagina (raccolte in fondo al capitolo), ma non caratteri, dimensioni e colori, che lascerebbero fuori i temi del lettore;
   - gli FB2 conservano sezioni, note, poesie, epigrafi, citazioni e immagini incorporate.
3. **Formati non supportati**: i vecchi `.doc` di Word 97 (un formato binario che iOS non sa aprire) e gli FB2 compressi (`.fb2.zip`).

---

## Aspetto e tipografia

Dal menu del lettore (o da Impostazioni › Lettore libri) puoi regolare:
- **Tema**: automatico (segue iOS), chiaro, seppia o scuro.
- **Carattere** e **dimensione del testo**.
- **Interlinea** e **scorrimento continuo** al posto delle pagine.
- **Due colonne su iPad**: in orizzontale il testo si dispone su due colonne affiancate, come un libro aperto.

---

## Segnalibri, evidenziazioni e ricerca

- **Evidenziazioni**: seleziona un passaggio e scegli "Evidenzia"; tocca un'evidenziazione per toglierla. Le ritrovi tutte nella scheda Evidenziazioni dell'indice.
- **Segnalibri**: il pulsante del segnalibro nella barra in alto mette o toglie un segnalibro sulla pagina corrente.
- **Cerca nel libro**: cerca in tutto il volume (fino a 300 risultati), mostra ogni risultato con il testo attorno e porta al punto scelto, che resta sottolineato.

Segnalibri ed evidenziazioni restano su questo dispositivo: non vanno in iCloud né nei backup.
