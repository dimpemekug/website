---
title: "Lettore Ebook e Libri di Testo"
description: "Il motore di lettura testuale Readium per EPUB, PDF, FB2, DOCX e TXT: temi, caratteri, impaginazione, note, evidenziazioni e ricerca in rManga."
project: "rmanga"
order: 4
section: "Ebook"
---

## Il Motore di Lettura Testuale (Readium)

rManga integra al proprio interno il framework professionale open-source **Readium** (`EPUBNavigatorViewController`), lo standard industriale per la fruizione di libri digitali ed ebook.

A differenza dei semplici visualizzatori WebKit, Readium garantisce:
- Calcolo esatto delle posizioni (*locators*) indipendentemente dalle dimensioni dello schermo o dal font scelto.
- Impaginazione fluida a colonne con sillabazione (*hyphenation*) calcolata tramite il framework linguistico `NaturalLanguage` di Apple.
- Sincronizzazione precisa dei progressi di lettura anche con server remoti compatibili come Komga e Kavita.

---

## Conversione Trasparente dei Formati Testuali

Se importi documenti che non sono in formato EPUB nativo (come file **TXT, Markdown, DOCX di Microsoft Word, ODT di LibreOffice, RTF o FictionBook FB2**), rManga non richiede programmi di conversione esterni (come Calibre):

1. **Conversione Locale al Volo**: al primo tocco, il file sorgente viene analizzato e convertito istantaneamente in un perfetto pacchetto **EPUB 3** memorizzato nella cache locale (`Caches/TextBooks`).
2. **Struttura Intelligente dei Capitoli**:
   - I file di testo e Markdown riconoscono titoli, capitoli e sezioni analizzando intestazioni (`# Capitolo`, `## Paragrafo`).
   - I file Word DOCX e LibreOffice ODT conservano grassetti, corsivi, elenchi puntati, tabelle, immagini incorporate e note a piè di pagina.
   - I file FB2 preservano poesie, citazioni epigrafiche e immagini codificate in base64.
3. **Note a Piè di Pagina EPUB (`noteref`)**: toccando il numero di una nota a piè di pagina nel testo, rManga apre direttamente la spiegazione della nota senza costringerti a scorrere a fine libro.

---

## Personalizzazione Grafica e Tipografia

Toccando il menu delle opzioni nel lettore di libri puoi personalizzare ogni dettaglio della pagina:
- **Temi Cromatici**: Chiaro classico, Carta Seppia riposante, Scuro AMOLED profondo o Automatico (sincronizzato con il tema di iOS).
- **Tipografia**: seleziona caratteri con grazie (*serif*) editoriali, senza grazie (*sans-serif*) moderni, oppure font monospaziati.
- **Regolazione Testo**: cursore continuo per la dimensione del carattere, regolazione dell'interlinea e ampiezza dei margini laterali.
- **Impaginazione su iPad**: su schermi larghi puoi attivare la visualizzazione a **due colonne affiancate** per riprodurre la sensazione di un libro stampato.

---

## Segnalibri, Evidenziazioni e Ricerca

- **Evidenziazioni a Colori**: seleziona qualsiasi porzione di testo con il cursore per applicare un'evidenziazione. Puoi rivedere tutte le citazioni raccolte nella scheda dedicata del libro.
- **Segnalibri**: premi l'icona del segnalibro nella barra superiore per fissare la pagina corrente.
- **Ricerca nel Testo Intero**: lo strumento di ricerca analizza l'intero volume (fino a 300 occorrenze) mostrando frammenti di contesto prima e dopo il termine cercato, permettendo salti immediati al punto desiderato.
