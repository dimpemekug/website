---
title: "Formati e compatibilità"
description: "I formati che Documenta apre e salva (DOCX, ODT, DOC, RTF, Markdown, testo semplice), l'avviso delle parti non tenute, le esportazioni e i limiti noti."
project: "documenta"
order: 2
section: "Iniziare"
---

## Formati dei documenti

| Formato | Apre | Salva | Come |
|---|---|---|---|
| Documento Word (`.docx`) | ✓ | ✓ | lettore e scrittore propri di Documenta |
| Testo OpenDocument (`.odt`) | ✓ | ✓ | lettore e scrittore propri di Documenta |
| Markdown (`.md`) | ✓ | ✓ | lettore e scrittore propri di Documenta |
| Documento Word 97-2004 (`.doc`) | ✓ | ✓ (Mac) | testo da macOS; pagina, sezioni, intestazioni, immagini e oggetti da Documenta |
| Testo formattato (`.rtf`) | ✓ | ✓ | Documenta, o macOS per i file più semplici |
| Testo formattato con allegati (`.rtfd`) | ✓ (Mac) | ✓ (Mac) | macOS, con le immagini |
| Testo semplice (`.txt`) | ✓ | ✓ | |

Un documento aperto si salva nel suo formato. Su iPhone e iPad i `.doc` si aprono in un documento Word nuovo (`.docx`) e non si salvano come `.doc`; vedi [iPhone e iPad](/progetti/documenta/docs/iphone-e-ipad). Per i documenti nuovi il formato proposto al primo salvataggio si sceglie in **Impostazioni › File › Formato predefinito per i nuovi documenti** (DOCX all'inizio).

## Cosa si conserva in DOCX e ODT

Stili di paragrafo e di carattere, elenchi su più livelli, tabelle (anche annidate, con celle unite, bordi e sfondi), immagini, link e segnalibri, note a piè di pagina e di chiusura, intestazioni e piè di pagina (anche diversi sulla prima pagina e sulle pagine pari), campi (numero di pagina, numero di pagine, data, riferimenti), sommario e indice delle figure, sezioni, colonne, bordo della pagina, filigrana, capolettera, oggetti sulla pagina, WordArt, equazioni, commenti (anche risolti) e revisioni, la lingua del testo.

La protezione dei documenti di Word (sola lettura, solo commenti…) resta nel file e torna nel DOCX salvato, ma Documenta non la applica: il documento si modifica come gli altri.

Se un documento usa font non installati, una barra sopra le pagine lo segnala: il testo usa un font simile e, salvando, il documento conserva i font originali. Quando macOS offre quei font, si scaricano con un clic. L'avviso si spegne in **Impostazioni › File**.

## Parti che Documenta non tiene

Aprendo un DOCX, un ODT o un Markdown che contiene parti che Documenta non gestisce, compare l'avviso **Documenta non può tenere tutto questo file**, con l'elenco delle parti; **Dettagli** spiega cosa succede a ognuna. Sul Mac è una barra sotto le pagine, su iPhone e iPad un avviso. Torna ogni volta che apri il file: per conservare quelle parti, tieni una copia del file originale.

| Parte | Cosa succede |
|---|---|
| Grafici di Word | si vedono come immagine dei valori salvati e restano un'immagine quando salvi |
| Grafici di LibreOffice | non si vedono e si perdono salvando |
| Diagrammi SmartArt | si vedono come forme con il loro testo e restano forme |
| Campi modulo | caselle di controllo ed elenchi a discesa restano testo semplice |
| Oggetti incorporati | resta solo l'immagine di anteprima, se c'è |
| Sezioni protette di ODT | non sono più protette dopo il salvataggio |
| Immagini collegate di Markdown | al loro posto resta il testo alternativo |

## Markdown

I file Markdown si aprono e si salvano come gli altri documenti, con titoli, elenchi, tabelle, link ed equazioni. Le immagini di un Markdown sono file separati: all'apertura al loro posto c'è il testo alternativo, e **Mostra immagini…** nell'avviso chiede la cartella che le contiene. Documenta ricorda la cartella e le carica da sola le volte seguenti. Salvando, le immagini prese dalla cartella tornano link al loro file; quelle aggiunte in Documenta finiscono dentro il file.

## RTF, DOC e testo semplice

Questi formati hanno meno strumenti di DOCX e ODT.

- **RTF**: quando il documento ha sezioni, immagini, equazioni, formule, commenti o revisioni, Documenta scrive e rilegge l'RTF da sé; gli altri file passano da macOS. Restano le sezioni, i commenti come annotazioni di Word (con le risposte e lo stato di risolto), inserimenti e cancellazioni come revisioni di Word, i campi e le formule come campi di Word, e caselle di testo, forme, immagini sulla pagina, gruppi e WordArt come forme di Word. Vale anche per gli RTF scritti da Word.
- **DOC** (salvato sul Mac): restano pagina, margini, bordo, colonne, sezioni, intestazioni e piè di pagina con i numeri di pagina, immagini e oggetti sulla pagina. Le revisioni si salvano accettate, i commenti si perdono, i campi nel testo restano come il loro testo.
- In RTF e DOC le equazioni diventano immagini.
- **Testo semplice**: resta il testo con le revisioni accettate; i commenti si perdono, le caselle di testo diventano testo, le forme si perdono e le equazioni restano come LaTeX tra `$`.

## Esportazioni

Dal menu **Archivio**:

- **Esporta come PDF…**, con le pagine come sullo schermo (anche di misure diverse, se il documento ha sezioni con carta diversa).
- **Esporta come pagina web…**: un solo file HTML con le immagini dentro, titoli dagli stili, tabelle (anche con celle unite), elenchi, equazioni e note in fondo.
- **Esporta come Markdown…**.
- **Esporta come EPUB…**: un EPUB 3 con un capitolo per ogni Titolo e Intestazione 1.
- **Stampa…** (<kbd>⌘</kbd> <kbd>P</kbd>) con il pannello di sistema.

Con commenti o revisioni nel documento, stampa e PDF chiedono se uscire in **copia pulita**, senza commenti e con le revisioni accettate, o come il documento appare; il documento non cambia. Vedi [Commenti e revisioni](/progetti/documenta/docs/commenti-e-revisioni).

**Riduci dimensione delle immagini…** ricampiona le immagini più grandi di come appaiono, a 150 ppi (schermo e posta) o 220 ppi (stampa); le foto diventano JPEG, le GIF restano come sono.

## Limiti noti

- Dei commenti si conserva il testo semplice, non la formattazione.
- Un cambio di formattazione registrato da LibreOffice si può solo accettare: ODF non salva la formattazione di prima.
- Oggetti: i gruppi dentro un gruppo diventano un gruppo solo; le forme libere si mostrano, ma le curve diventano segmenti fitti. Il WordArt ha sei forme del testo: le altre di Word diventano la più simile.
- Sezioni: nella stessa pagina cambiano solo le colonne; carta, margini e intestazioni cambiano dalla pagina seguente.
- Il controllo grammaticale di macOS non segue la lingua scelta per una parte del testo (l'ortografia sì).
