---
title: "Preset e impostazioni"
description: "I 4 preset predefiniti di rName, la creazione di preset personali e gli 8 pannelli delle Impostazioni (⌘,), dalle scorciatoie ai file da ignorare."
project: "rname"
order: 6
section: "Configurazione e Preset"
---

## Preset: catene di regole riutilizzabili

Ricomporre la stessa sequenza di regole per ogni cartella può diventare ripetitivo. In rName qualsiasi catena di regole si può salvare come **preset** e riapplicare con un clic.

Dal menu in fondo alla barra laterale puoi:

- applicare un preset;
- salvare la catena attuale con un nome (un preset con lo stesso nome viene aggiornato, non duplicato);
- eliminare un preset salvato.

---

## I 4 preset inclusi

### 1. Riordina i nomi

Per file scaricati dal web o ricevuti per email con nomi disordinati:

- toglie gli spazi all'inizio e alla fine del nome;
- riduce gli spazi doppi a uno solo;
- toglie i caratteri non ammessi dal file system.

### 2. Numerazione progressiva

Per mettere in ordine documenti, capitoli o fotografie:

- parte da `1`;
- usa tre cifre con zeri iniziali (`001`, `002`, `003`…);
- mette il numero all'inizio del nome, separato da ` - ` (es. `001 - relazione.pdf`).

### 3. Data come prefisso

Per scansioni, fatture, ricevute o foto:

- usa la data di ultima modifica del file;
- nel formato `yyyy-MM-dd`;
- all'inizio del nome, seguita da `_` (es. `2026-10-18_relazione.pdf`).

### 4. Nomi adatti al web

Per chi pubblica file su un sito o un server:

- toglie spazi alle estremità e spazi doppi;
- toglie accenti ed emoji;
- sostituisce gli spazi con un trattino (`-`);
- mette in minuscolo il nome e l'estensione.

---

## Impostazioni (<kbd>⌘</kbd> <kbd>,</kbd>)

Con <kbd>⌘</kbd> <kbd>,</kbd> (o dal menu _rName › Impostazioni…_) si aprono otto pannelli.

### 1. Generale

- **Aspetto**: _Sistema_, _Chiaro_ o _Scuro_, scelto da tre miniature della finestra. L'aspetto si applica subito a tutte le finestre dell'app, compresi avvisi e pannelli di apertura file.
- **Lingua**: _Sistema_, _Italiano_ o _Inglese_. Il cambio richiede il riavvio dell'app, che rName propone ed esegue da sé.
- **Ripristina le impostazioni predefinite**: riporta ai valori di fabbrica ogni opzione dei pannelli, scorciatoie comprese, senza toccare preset, permessi sulle cartelle e regole conservate.

### 2. File

- **Quando aggiungi file**: _Aggiungili alla lista_ (predefinito) o _Sostituisci la lista_.
- **Ordina la lista per**: _Ordine manuale_, _Nome_ (predefinito), _Data creazione_, _Data modifica_, _Dimensione_ o _Tipo_. L'ordine della lista decide la sequenza della numerazione.
- **Apertura di una cartella**:
  - _Includi le sottocartelle_: esplora anche le cartelle contenute nella cartella aperta (disattivata di default);
  - _Includi i file nascosti_: mostra e rinomina anche i file che iniziano con un punto (`.`) (disattivata di default);
  - _Rinomina anche le cartelle_: aggiunge alla lista anche le cartelle contenute nella cartella aperta (attivata di default). Quando rName visita le sottocartelle, le cartelle restano sempre intatte, perché rinominarle cambierebbe il percorso dei file che contengono.
- **Ignora**: estensioni o nomi di file da lasciare fuori quando apri una cartella, separati da virgole (per esempio `xmp, aae, Thumbs.db`). Serve per i file di accompagnamento che aggiungono alcune fotocamere e app. Un file scelto da solo viene sempre aggiunto.

### 3. Rinomina

- **Chiedi conferma prima di rinominare**: un passaggio in più prima di scrivere sul disco (disattivata di default; vale per il pulsante, il menu e la scorciatoia).
- **Poi**: cosa succede alla lista dopo la rinomina: _Lascia i file nella lista_ (predefinito), _Togli i file rinominati_ o _Svuota la lista_. <kbd>⌘</kbd> <kbd>Z</kbd> annulla una rinomina anche dopo che i file sono usciti dalla lista.
- **Riproduci un suono alla fine**: un suono di sistema quando la rinomina è finita.
- **Ricorda le regole alla chiusura**: la catena di regole torna al prossimo avvio. I file non vengono mai ricordati.

### 4. Regole

I valori iniziali usati quando aggiungi una nuova regola. Cambiarli non tocca le regole già nella catena né i preset salvati.

- **Separatore**: _Trattino basso_ (`_`, predefinito), _Trattino_ (`-`), _Spazio_ o _Nessuno_.
- **Numerazione**: valore di partenza (da 0 a 99.999), passo (da 1 a 1.000) e cifre (da 1 a 12; predefinite 2).
- **Formato data**: `yyyy-MM-dd` (predefinito), `yyyyMMdd`, `dd-MM-yyyy`, `yyyy-MM`, `yyyy-MM-dd HH.mm` o `HH.mm.ss`.

Un riquadro _Anteprima_ mostra come verrebbero un nome numerato e uno con la data.

### 5. Preset

L'elenco dei preset _Predefiniti_ e dei _Tuoi_. Con il clic destro su uno dei tuoi puoi rinominarlo, applicarlo o eliminarlo; trascinandoli ne cambi l'ordine.

### 6. Scorciatoie

Le scorciatoie dei comandi di rName, da cambiare: fai clic su una scorciatoia e premi i tasti nuovi. <kbd>Esc</kbd> annulla, <kbd>⌫</kbd> toglie la scorciatoia. Dettagli in [Scorciatoie e integrazione con macOS](/progetti/rname/docs/scorciatoie-e-finder).

### 7. Permessi

Le cartelle autorizzate, con la possibilità di revocare un permesso (_Revoca_) o tutti insieme (_Revoca tutte…_), e il pulsante _Autorizza cartelle o dischi…_ per concedere in anticipo l'accesso a una cartella superiore o a un disco intero. Dettagli in [Permessi e App Sandbox](/progetti/rname/docs/permessi-sandbox).

### 8. Informazioni

Versione dell'app, identificativo e una nota sulla privacy: rName non raccoglie alcun dato e non effettua connessioni di rete.
