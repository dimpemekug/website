---
title: "Gestione e correzione delle date"
description: "Spostamento di intervalli, correzione dell'orologio della fotocamera, date dai nomi dei file o da Google Takeout e allineamento delle date del file system in rExif."
project: "rexif"
order: 3
section: "Guide d'uso"
---

## Le date di ogni file

rExif gestisce separatamente quattro date per ciascun file:
1. **Data di scatto** (`DateTimeOriginal` / `QuickTime:CreateDate`): il momento in cui è stata scattata la foto o registrato il video.
2. **Data di digitalizzazione** (`CreateDate`): quando l'immagine è stata convertita in file digitale (per esempio con una scansione).
3. **Data di creazione del file**: quella registrata dal file system di macOS.
4. **Data di modifica del file**: l'ultimo aggiornamento del file su disco.

> [!NOTE]
> Quando salvi modifiche ai metadati, rExif conserva le date di creazione e modifica del file, a meno che tu non le abbia cambiate esplicitamente.

## Modifiche in blocco delle date (`⇧⌘D`)

Nella finestra **Modifiche in blocco** (`⇧⌘D` o menu *Metadati*), la scheda delle date offre diverse modalità. Ogni elemento riceve un valore calcolato dai propri dati, con anteprima riga per riga.

### 1. Sposta di un intervallo
Utile quando l'orologio della fotocamera era sbagliato o non era passato all'ora legale. Indica una variazione in giorni, ore, minuti e secondi, positiva o negativa: ogni elemento mantiene la sua distanza dagli altri.

### 2. Imposta la stessa data a tutti
Assegna la stessa data e ora a tutti gli elementi selezionati.

### 3. Da fonti per elemento
rExif ricava la data di ogni elemento dalla prima fonte disponibile tra:
- **un altro campo data** dello stesso file;
- **il nome del file**: riconosce formati come `IMG_20230514_123456`, `VID_20230514_123456`, `PXL_20230514_123456789` (Google Pixel), `2023-05-14 12.34.56`, `Screenshot 2023-05-14 at 12.34.56` o `Istantanea 2023-05-14 alle 12.34.56`, e `IMG-20230514-WA0001` di WhatsApp (solo la data);
- **il nome della cartella**: per file contenuti in cartelle come `2019-07-04 Mare`;
- **il JSON di Google Takeout**: se accanto al file c'è il `.json` esportato da Google Foto, viene letta la data reale dello scatto (`photoTakenTime`).

### 4. Sequenza
Assegna una data di partenza al primo elemento e aumenta quella dei successivi di un intervallo fisso (es. +5 secondi), nell'ordine della tabella.

### 5. Riempi dai vicini
Se in una serie alcune foto non hanno la data (per esempio dopo una scansione o una conversione), rExif la calcola per interpolazione lineare dalle date degli elementi che le precedono e le seguono nella tabella.

### 6. Fuso orario
Per cambiare il fuso orario puoi scegliere tra:
- *mantenere l'ora mostrata*: cambia il fuso senza toccare le cifre dell'orologio (es. 15:30 UTC+1 → 15:30 UTC+2);
- *mantenere l'istante*: modifica l'ora locale perché corrisponda allo stesso momento in UTC.

Con l'opzione **Solo se il campo è vuoto**, la modifica riguarda solo gli elementi che non hanno ancora quella data.

## Allinea tutte le date alla data di scatto (`⇧⌘L`)

Con `⇧⌘L` o dal menu *Metadati*, rExif legge la data di scatto e la copia in un solo passaggio nella data di digitalizzazione e nelle date di creazione e modifica del file.

## Correggi orologio fotocamera

Se hai una foto di cui conosci l'ora esatta (per esempio la foto di un orologio sincronizzato o dello schermo di uno smartphone):
1. seleziona la foto di riferimento nella tabella;
2. scegli **Metadati** › **Correggi orologio fotocamera…**;
3. inserisci l'ora giusta di quello scatto: rExif calcola lo scarto al secondo e lo applica alle foto scattate con la stessa fotocamera (o, se preferisci, a tutte).
