---
title: "Commenti e revisioni"
description: "Commenti nel margine e registrazione delle modifiche in Documenta: aggiungere, modificare ed eliminare commenti, accettare o rifiutare le revisioni, compatibilità con Word e LibreOffice."
project: "documenta"
order: 8
section: "Revisione"
---

## Commenti

- **Inserisci › Commento** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd>) mette un commento sul testo selezionato.
- Il testo commentato è evidenziato in giallo (solo sullo schermo) e un segno nel margine destro della pagina apre il riquadro del commento, con autore, data e testo. Lì si modifica o si elimina.
- L'autore è il nome dell'utente del Mac.

I commenti si conservano in DOCX e ODT e si leggono da quelli scritti in Word e LibreOffice. Si conserva il testo semplice del commento, non la sua formattazione né le risposte. In RTF, DOC e testo semplice i commenti si perdono.

## Registrare le modifiche

**Modifica › Revisioni › Registra le modifiche** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>) accende la registrazione per il documento; la barra di stato lo segnala e un clic sull'avviso la spegne.

Con la registrazione attiva:

- il testo scritto, incollato o trascinato è un **inserimento**, sottolineato nel colore dell'autore;
- il testo cancellato o sostituito resta, **barrato**;
- un cambio di formattazione (grassetto, carattere, colore, stile…) si segna con la formattazione di prima;
- si registrano anche le cancellazioni di paragrafi interi e di righe di tabella.

Cancellare il proprio testo appena inserito lo toglie davvero. Le modifiche che l'app fa da sé, come l'aggiornamento di un sommario, non si registrano. Passando con il puntatore su una revisione si vede chi l'ha fatta e quando; i segni si vedono anche in stampa, come in Word.

## Accettare e rifiutare

Dal menu **Modifica › Revisioni** o dal menu contestuale:

- **Accetta revisione** e **Rifiuta revisione**: quelle nella selezione, o quella del cursore;
- **Accetta tutte le revisioni** e **Rifiuta tutte le revisioni**;
- **Revisione successiva** e **Revisione precedente** per scorrerle.

Ogni comando si annulla in un solo passo.

## Compatibilità

- In **DOCX** le revisioni si leggono e si scrivono come quelle di Word.
- In **ODT**, un cambio di formattazione salvato da LibreOffice si può solo accettare, perché ODF non salva la formattazione di prima (Documenta la aggiunge ai suoi file). I cambi di paragrafo salvati in ODT si riaprono in Documenta, mentre LibreOffice li mostra come cambi di formattazione; una cancellazione su più paragrafi diventa un paragrafo solo.
- In RTF, DOC, testo semplice e nelle esportazioni resta il testo con tutte le revisioni accettate.
