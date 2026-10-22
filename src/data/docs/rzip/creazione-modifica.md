---
title: "Creazione, modifica e conversione"
description: "Creazione di archivi, aggiunta ed eliminazione di file con copia di sicurezza nel Cestino, esclusione automatica dei file di sistema di macOS e conversione di formato in rZip."
project: "rzip"
order: 4
section: "Guide d'uso"
---

## Creare un nuovo archivio (<kbd>⌘</kbd> <kbd>N</kbd>)

Dalla finestra di benvenuto, dal menu File o con <kbd>⌘</kbd> <kbd>N</kbd>, rZip apre la finestra di creazione:

1. **Contenuti**: trascina file e cartelle dal Finder nella finestra.
2. **Formato**:
   - **7z**: compressione LZMA2 con il rapporto più alto, cifratura AES-256 e, se vuoi, cifratura dei nomi dei file.
   - **ZIP**: il formato universale, apribile su qualsiasi sistema, con cifratura AES-256 opzionale.
   - **TAR, TAR.GZ, TAR.XZ, TAR.BZ2**: i formati classici di Unix e Linux.
   - *Nota*: il formato **RAR non si può creare**, perché è un formato proprietario di RARLAB.
3. **Livello di compressione**: Nessuna, Rapidissima, Veloce, Normale, Massima o Ultra.
4. **Divisione in volumi**: puoi dividere l'archivio in parti di dimensione fissa (es. 25 MB per l'email) per l'invio o per supporti esterni.

Formato, livello, cifratura dei nomi ed esclusione dei file di sistema predefiniti si impostano nelle Impostazioni.

## Esclusione dei file di sistema di macOS

Gli archivi creati sul Mac includono spesso file invisibili tipici di macOS:
- `.DS_Store` (preferenze di visualizzazione delle cartelle nel Finder);
- cartelle `__MACOSX` e file `._nomefile` con le informazioni aggiuntive dei file;
- cartelle di Spotlight (`.Spotlight-V100`) e del cestino (`.Trashes`).

> [!NOTE]
> Di default rZip esclude questi file quando crea o aggiorna un archivio, così l'archivio si apre pulito anche su Windows o Linux. Mentre consulti un archivio, <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>.</kbd> mostra o nasconde i file di sistema.

## Modificare un archivio esistente

Puoi aggiungere o togliere file da archivi **ZIP**, **7z** e **TAR** (anche `.gz`, `.bz2`, `.xz`) senza estrarli:

- **Aggiungi** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>A</kbd>): trascina nuovi file nella finestra o usa *Aggiungi all'archivio…*.
- **Elimina** (<kbd>⌘</kbd> <kbd>⌫</kbd>): seleziona uno o più elementi (le cartelle vengono eliminate con tutto il contenuto) e usa *Elimina dall'archivio…*.

Il nuovo archivio viene scritto a parte e sostituisce l'originale solo se l'operazione riesce. Non si possono modificare gli archivi RAR né quelli divisi in più volumi.

### Copia di sicurezza nel Cestino

Con l'opzione **Conserva una copia dell'originale nel Cestino**, attiva di default nelle Impostazioni, prima di ogni modifica rZip mette nel Cestino del Mac una copia dell'archivio originale, chiamata per esempio `Foto (prima della modifica).zip`. Se cambi idea, la recuperi dal Cestino con **Rimetti**.

## Convertire un archivio in un altro formato

Dal menu File o dal menu Estrai della barra degli strumenti scegli **Converti in un altro formato…**:

1. rZip estrae l'archivio in una cartella temporanea privata (`ConversionStaging`).
2. Si apre la finestra di creazione in modalità conversione.
3. Scegli il nuovo formato (per esempio da **RAR** a **7z** o **ZIP**), la compressione, la password e i volumi.
4. Il nuovo archivio viene proposto con lo stesso nome accanto all'originale, che non viene toccato.
5. Se l'archivio di partenza era protetto, rZip ripropone la stessa password e la cifratura dei nomi.
6. La cartella temporanea viene eliminata al termine (e comunque all'avvio e all'uscita dall'app).
