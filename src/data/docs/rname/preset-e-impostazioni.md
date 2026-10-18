---
title: "Preset e Impostazioni"
description: "I 4 preset predefiniti di rName, creazione di preset personalizzati e configurazione dettagliata dei 6 pannelli delle Impostazioni (⌘,)."
project: "rname"
order: 6
section: "Configurazione e Preset"
---

## Preset: Catene di Regole Riutilizzabili

Comporre manualmente una sequenza di regole per ogni singola cartella può diventare ripetitivo. In rName, qualsiasi combinazione di regole può essere salvata come **Preset** e riapplicata all'istante con un solo clic.

Nel menu a tendina situato in fondo alla barra laterale sinistra puoi:

- Selezionare e applicare un preset salvato.
- Salvare l'attuale catena di regole con un nuovo nome personalizzato.
- Gestire la libreria dei preset esistenti.

---

## I 4 Preset Inclusi Pronti all'Uso

rName include 4 configurazioni tipiche predefinite, studiate per risolvere le esigenze più comuni:

### 1. Riordina i nomi (_Tidy up names_)

Ideale per file scaricati dal web o scambiati via email che presentano caratteri spuri o formattazioni disordinate:

- Elimina spazi superflui all'inizio e alla fine del nome (`trimEdges`).
- Comprime spazi doppi o multipli consecutivi in un singolo spazio (`collapseSpaces`).
- Rimuove caratteri incompatibili con il filesystem (`stripIllegalCharacters`).

### 2. Numerazione progressiva (_Number in sequence_)

Pensato per ordinare sequenze di documenti, capitoli o fotografie:

- Inizia da `1` con incremento di `1`.
- Imposta una spaziatura a tre cifre con zeri iniziali (`001`, `002`, `003`...).
- Inserisce il numero all'inizio del nome con il separatore `-`.

### 3. Data come prefisso (_Date prefix_)

Perfetto per organizzare scansioni, fatture, ricevute o foto di viaggio:

- Legge la data di ultima modifica o di scatto del file.
- Applica il formato standard ISO `yyyy-MM-dd`.
- Colloca la data all'inizio del nome seguita dal separatore `_` (es. `2026-10-18_relazione.pdf`).

### 4. Nomi adatti al web (_Web-friendly names_)

Indispensabile per sviluppatori, web designer o gestori di siti web prima dell'upload su server Linux o CMS:

- Rimuove accenti e segni diacritici (es. `è` → `e`, `à` → `a`).
- Rimuove emoji e caratteri speciali non-ASCII.
- Sostituisce ogni spazio con un trattino (`-`).
- Converte l'intero nome e l'estensione in minuscolo (`kebab-case`).

---

## Finestra Impostazioni (<kbd>⌘</kbd> <kbd>,</kbd>)

Premendo <kbd>⌘</kbd> <kbd>,</kbd> (oppure dal menu _rName › Impostazioni…_) accedi a sei pannelli di configurazione progettati secondo gli standard di usabilità macOS:

### 1. Generale

- **Aspetto**: scegli tra _Sistema_, _Chiaro_ e _Scuro_. L'applicazione utilizza `NSApp.appearance`, estendendo la palette a tutte le finestre, finestre modali e pannelli di apertura.
- **Lingua**: seleziona _Sistema_, _Italiano_ o _Inglese_. La modifica imposta `AppleLanguages` e richiede un riavvio rapido dell'app per caricare le tabelle corrette.
- **Ripristina valori di fabbrica**: riporta le preferenze visive e comportamentali ai default originali, senza toccare preset e permessi.

### 2. File

- **Ordinamento predefinito**: scegli come ordinare i file al momento del caricamento (per Nome, Data di modifica o Dimensione).
- **Includi sottocartelle**: se attivato, scansiona ricorsivamente tutte le directory interne alla cartella aperta.
- **Includi file nascosti**: mostra e rinomina anche i file che iniziano con un punto (`.`).
- **Rinomina anche le cartelle**: estende le regole di rinomina sia ai file che alle cartelle aperte.
- **Conferma prima di rinominare**: mostra una richiesta di conferma esplicita prima di procedere con le scritture su disco.
- **Ricorda le regole alla chiusura**: preserva la catena di regole attiva tra una sessione e l'altra dell'applicazione.

### 3. Regole

Configura i valori iniziali predefiniti utilizzati ogni volta che aggiungi una nuova regola:

- Separatore predefinito (es. `_` o `-`).
- Cifre di riempimento iniziali per la numerazione (es. 2 o 3 cifre).
- Formato predefinito per data e ora, con anteprima del risultato in tempo reale.

### 4. Preset

Elenco completo di tutti i preset predefiniti e creati dall'utente:

- Rinomina i tuoi preset personali.
- Elimina preset obsoleti.
- Visualizza le regole contenute in ciascun modello.

### 5. Permessi

Monitoraggio e gestione dei permessi di scrittura concessi per le cartelle del Mac:

- Elenco dettagliato dei percorsi autorizzati.
- Revoca selettiva o totale dei segnalibri di sicurezza con un solo clic.

### 6. Informazioni

Versione e build dell'applicazione, identificativo di bundle, copyright e riepilogo delle garanzie sulla privacy (funzionamento offline al 100%).
