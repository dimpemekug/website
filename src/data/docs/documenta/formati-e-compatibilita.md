---
title: "Formati e compatibilità"
description: "I formati che Documenta apre e salva (DOCX, ODT, DOC, RTF, testo semplice), le esportazioni in PDF, EPUB, HTML e Markdown e i limiti noti."
project: "documenta"
order: 2
section: "Iniziare"
---

## Formati dei documenti

| Formato | Apre | Salva | Come |
|---|---|---|---|
| Documento Word (`.docx`) | ✓ | ✓ | lettore e scrittore propri di Documenta |
| Testo OpenDocument (`.odt`) | ✓ | ✓ | lettore e scrittore propri di Documenta |
| Documento Word 97-2004 (`.doc`) | ✓ | ✓ | testo da macOS, pagina, intestazioni e immagini da Documenta |
| Testo formattato (`.rtf`) | ✓ | ✓ | macOS |
| Testo formattato con allegati (`.rtfd`) | ✓ | — | macOS, con le immagini |
| Testo semplice (`.txt`) | ✓ | ✓ | macOS |

Un documento aperto si salva nel suo formato. Per i documenti nuovi il formato proposto al primo salvataggio si sceglie in **Impostazioni › File › Formato predefinito per i nuovi documenti** (DOCX all'inizio).

## Cosa si conserva in DOCX e ODT

Stili di paragrafo e di carattere, elenchi su più livelli, tabelle (anche annidate, con celle unite, bordi e sfondi), immagini, link e segnalibri, note a piè di pagina e di chiusura, intestazioni e piè di pagina (anche diversi sulla prima pagina e sulle pagine pari), campi (numero di pagina, numero di pagine, data, riferimenti), sommario e indice delle figure, sezioni, colonne, bordo della pagina, filigrana, capolettera, oggetti sulla pagina, WordArt, commenti e revisioni, la lingua del testo.

Se un documento usa font non installati, una barra sopra le pagine lo segnala: il testo usa un font simile e, salvando, il documento conserva i font originali. Quando macOS offre quei font, si scaricano con un clic. L'avviso si spegne in **Impostazioni › File**.

## RTF, DOC e testo semplice

Questi formati hanno meno strumenti di DOCX e ODT. Salvando in RTF, DOC o testo semplice:

- le caselle di testo diventano testo e le forme si perdono;
- i commenti si perdono e delle revisioni resta il testo accettato;
- le sezioni diventano interruzioni di pagina;
- i campi e le formule delle tabelle restano come il loro testo di oggi.

## Esportazioni

Dal menu **Archivio**:

- **Esporta come PDF…**, con le pagine come sullo schermo (anche di misure diverse, se il documento ha sezioni con carta diversa).
- **Esporta come pagina web…**: un solo file HTML con le immagini dentro, titoli dagli stili, tabelle (anche con celle unite), elenchi e note in fondo.
- **Esporta come Markdown…**.
- **Esporta come EPUB…**: un EPUB 3 con un capitolo per ogni Titolo e Intestazione 1.
- **Stampa…** (<kbd>⌘</kbd> <kbd>P</kbd>) con il pannello di sistema.

**Riduci dimensione delle immagini…** ricampiona le immagini più grandi di come appaiono, a 150 ppi (schermo e posta) o 220 ppi (stampa); le foto diventano JPEG, le GIF restano come sono.

## Limiti noti

- Dei commenti si conserva il testo semplice, non la formattazione né le risposte.
- Un cambio di formattazione registrato da LibreOffice si può solo accettare: ODF non salva la formattazione di prima.
- Oggetti: i gruppi dentro un gruppo diventano un gruppo solo; le forme libere si mostrano, ma le curve diventano segmenti fitti. Il WordArt ha sei curve: le altre forme di Word diventano la più simile.
- Sezioni: nella stessa pagina cambiano solo le colonne; carta, margini e intestazioni cambiano dalla pagina seguente.
- Il controllo grammaticale di macOS non segue la lingua scelta per una parte del testo (l'ortografia sì).
