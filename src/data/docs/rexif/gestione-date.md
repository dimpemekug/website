---
title: "Gestione e Correzione Date"
description: "Spostamento intervalli, correzione orologio fotocamera, estrazione da nomi file o Google Takeout e sincronizzazione filesystem."
project: "rexif"
order: 3
section: "Guide d'uso"
---

## Campi Data Supportati

rExif gestisce in modo separato e coordinato quattro distinte date per ciascun file:
1. **Data di scatto** (`DateTimeOriginal` / `QuickTime:CreateDate`): Il momento in cui il diaframma si è aperto o il video è stato registrato.
2. **Data di digitalizzazione** (`CreateDate`): Quando il segnale analogico o RAW è stato convertito in file digitale.
3. **Data di creazione del file**: Il timestamp registrato dal filesystem di macOS (APFS/HFS+).
4. **Data di modifica del file**: L'ultimo aggiornamento registrato sul disco dal filesystem.

> [!NOTE]
> Quando salvi modifiche ai soli metadati descrittivi o GPS, rExif preserva intatte le date originali del file sul disco, a meno che tu non scelga esplicitamente di allinearle.

## Modifiche Date in Blocco (`⇧⌘D`)

Attraverso la finestra **Modifiche in blocco** (richiamabile con `⇧⌘D` o dal menu *Metadati*), puoi applicare diverse modalità di calcolo:

### 1. Sposta Data di un Intervallo
Utile quando l'orologio della fotocamera era disallineato o impostato sull'ora solare anziché legale. Puoi inserire una variazione in giorni, ore, minuti e secondi (positiva o negativa). Ciascun elemento conserva la propria distanza temporale relativa.

### 2. Imposta la Stessa Data a Tutti
Assegna un timestamp fisso uniforme a tutti gli elementi selezionati.

### 3. Ricava da Fonti per Elemento
rExif esamina ogni singolo elemento e ricava la data dalla prima fonte disponibile tra:
- Un altro campo data esistente.
- **Nome del file**: Parser intelligente che riconosce automaticamente pattern come `IMG_20230514_123456`, `Screenshot 2024-05-10 at 14.30.00`, formati WhatsApp (`WhatsApp Image 2024-08-12 at 18.45.10`), formati Google Pixel (`PXL_...`) e timestamp UNIX in millisecondi.
- **Nome della cartella madre**: Se i file sono contenuti in cartelle del tipo `2023-08-15 Vacanze`, la data viene letta dal nome della cartella.
- **File JSON di Google Takeout**: Se accanto al file è presente il rispettivo `.json` esportato da Google Foto, la data reale (`photoTakenTime`) viene letta e incorporata.

### 4. Sequenza Temporale
Assegna una data di partenza al primo elemento della tabella e incrementa automaticamente ciascuna foto successiva di un intervallo prefissato (es. +5 secondi tra ogni scatto).

### 5. Riempi dai Vicini (Interpolazione)
Se in una serie di scatti consecutivi alcune foto hanno perso la data (ad esempio dopo una scansione o una conversione), rExif interpola linearmente la data corretta basandosi sui file cronologicamente adiacenti prima e dopo nella lista.

### 6. Gestione Fuso Orario
Consente di regolare il fuso orario scegliendo tra:
- *Mantieni l'ora mostrata*: Cambia il fuso orario senza alterare le cifre dell'orologio (es. 15:30 UTC+1 $\rightarrow$ 15:30 UTC+2).
- *Mantieni l'istante assoluto*: Modifica l'orario locale per rispecchiare il medesimo momento universale UTC.

## Allinea Tutte le Date alla Data di Scatto (`⇧⌘L`)

Con la scorciatoia `⇧⌘L` o dal menu *Metadati*:
- Legge la data di scatto autentica dell'immagine.
- Allinea in un solo passaggio la data di digitalizzazione e i timestamp di creazione e modifica del file system APFS.

## Correggi Orologio Fotocamera (`ClockCorrectionSheet`)

Se possiedi uno scatto di riferimento di cui conosci con certezza l'ora esatta (ad esempio una foto a un orologio atomico o a uno smartphone sincronizzato via rete):
1. Seleziona la foto di riferimento nella tabella.
2. Scegli **Metadati** > **Correggi orologio fotocamera...**.
3. Inserisci l'ora corretta dello scatto di riferimento: rExif calcola l'offset esatto al secondo e lo applica a tutte le foto scattate con quella medesima fotocamera.
