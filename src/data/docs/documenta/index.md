---
title: "Introduzione a Documenta"
description: "Cos'è Documenta, l'elaboratore di testi per Mac: requisiti, finestra del documento, inspector, barra di stato e principi dell'app."
project: "documenta"
order: 1
section: "Iniziare"
---

## Cos'è Documenta

**Documenta** è un elaboratore di testi nativo per Mac, scritto in SwiftUI e AppKit. Si scrive su pagine impaginate come sulla carta e si aprono, modificano e salvano i documenti nel loro formato: Word (`.docx` e `.doc`), OpenDocument (`.odt`), RTF e testo semplice.

**Requisiti**: macOS 15 Sequoia o successivo, Mac con Apple silicon o Intel. L'interfaccia è in italiano e in inglese; la lingua si sceglie in **Impostazioni › Generali › Lingua dell'app** (serve riavviare l'app).

## Principi

1. **Il file resta nel suo formato.** DOCX e ODT hanno un lettore e uno scrittore propri: non passano dagli importatori di macOS, che perdono immagini, link e tabelle. Un documento aperto si salva nello stesso formato. Cosa si conserva formato per formato è in [Formati e compatibilità](/progetti/documenta/docs/formati-e-compatibilita).
2. **Niente rete.** L'app gira nella sandbox di macOS senza il permesso di collegarsi a Internet: niente account, analytics o SDK di terze parti. I documenti restano sul Mac o nel servizio cloud che scegli tu, come iCloud Drive.
3. **Sempre annullabile.** Annulla e ripristina non hanno limiti; anche le operazioni su tabelle, oggetti e capitoli si annullano in un solo passo.

## La finestra del documento

- **Barra degli strumenti**: stile di paragrafo, font e dimensione, grassetto, corsivo, sottolineato, colore ed evidenziazione, allineamento, elenchi, tabella, casella di testo, forme e il pulsante <kbd>+</kbd> per gli altri inserimenti.
- **Struttura** (a sinistra, <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>O</kbd>): i titoli del documento, rientrati per livello. Vedi [Documenti lunghi](/progetti/documenta/docs/documenti-lunghi).
- **Inspector** (a destra, <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd>): raccoglie testo, paragrafo, pagina, documento e l'oggetto o la tabella selezionati. In **Impostazioni › Aspetto › Disposizione dell'inspector** si sceglie come mostrarlo:
  - **Schede**: Stile, Pagina e Documento, come in Pages, più una scheda per la tabella o l'oggetto selezionato;
  - **Sezioni**: una colonna di sezioni da aprire e chiudere;
  - **Icone**: una barra con un'icona per categoria; il pannello Tabella compare quando il cursore è in una tabella.
- **Barra di stato** (in basso): pagina corrente e totale, parole e caratteri, l'obiettivo di parole, l'avviso quando la registrazione delle modifiche è attiva, i pulsanti Pagina singola e Due pagine e lo zoom.

## Vista

Dal menu **Vista**:

- **Zoom** dal 25% al 400%: Ingrandisci (<kbd>⌘</kbd> <kbd>></kbd>), Riduci (<kbd>⌘</kbd> <kbd><</kbd>), Dimensione reale (<kbd>⌘</kbd> <kbd>0</kbd>) e Adatta alla larghezza.
- **Disposizione delle pagine**: pagina singola, due pagine affiancate o automatico, che le affianca quando la finestra è abbastanza larga.
- **Senza pagina** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>P</kbd>): un foglio continuo. Stampa e PDF restano divisi in pagine.
- **Aspetto della pagina**: chiaro, scuro o automatico. La pagina scura vale solo sullo schermo: stampa e file restano in nero su bianco.
- **Modalità Focus** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>F</kbd>): i pannelli si nascondono e il testo fuori dal paragrafo del cursore si schiarisce, note e immagini comprese.
- **Mostra righello** (<kbd>⌘</kbd> <kbd>R</kbd>) e **Mostra conteggio parole**.

Il documento più lungo che si impagina è di 2000 pagine: oltre, una barra lo segnala e il testo dopo l'ultima pagina si vede solo nella vista Senza pagina. Il testo resta comunque nel documento e si salva.

## Prossimi passi

- [Formati e compatibilità](/progetti/documenta/docs/formati-e-compatibilita): cosa si apre, cosa si salva e cosa si perde.
- [Pagine, intestazioni e sezioni](/progetti/documenta/docs/pagine-intestazioni-e-sezioni): carta, margini, colonne, piè di pagina.
- [Formattazione e stili](/progetti/documenta/docs/formattazione-e-stili): carattere, paragrafo, elenchi, stili.
- [Documenti lunghi](/progetti/documenta/docs/documenti-lunghi): titoli numerati, sommario, didascalie, note.
- [Tabelle](/progetti/documenta/docs/tabelle) e [Oggetti sulla pagina](/progetti/documenta/docs/oggetti-sulla-pagina).
- [Commenti e revisioni](/progetti/documenta/docs/commenti-e-revisioni).
- [Modelli, salvataggio e impostazioni](/progetti/documenta/docs/modelli-esportazione-e-impostazioni).
- [Scorciatoie da tastiera](/progetti/documenta/docs/scorciatoie).
