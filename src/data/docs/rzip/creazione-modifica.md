---
title: "Creazione, Modifica e Conversione"
description: "Creazione archivi, modifica diretta in-place con backup nel Cestino, esclusione automatica di file spazzatura e conversione formati."
project: "rzip"
order: 4
section: "Guide d'uso"
---

## Creazione di Nuovi Archivi (`⌘N`)

Dalla finestra di benvenuto, dal menu File o premendo `⌘N`, rZip apre la finestra di creazione (`CreateArchiveView`):

1. **Aggiunta Contenuti**: Trascina file o cartelle dal Finder direttamente nella finestra.
2. **Formato di Compressione**:
   - **7z**: Algoritmo LZMA2 con il più alto rapporto di compressione, supporto alla crittografia AES-256 e alla cifratura della tabella dei nomi dei file.
   - **ZIP**: Il formato universale compatibile con qualsiasi sistema operativo, con supporto opzionale per la crittografia moderna AES-256.
   - **TAR, TAR.GZ, TAR.XZ, TAR.BZ2**: I formati standard degli ambienti UNIX e server Linux.
   - *Nota importante*: Il formato **RAR non è creabile** da rZip poiché la compressione RAR è un algoritmo proprietario protetto da brevetto di RARLAB.
3. **Livello di Compressione**: Da *Nessuna* / *Rapido* (massima velocità) a *Ultra* (sfrutta tutti i core della CPU per massimizzare il risparmio di spazio).
4. **Suddivisione in Volumi**: Puoi dividere l'archivio in parti uguali per l'invio via email (es. 25 MB), storage cloud o supporti fisici.

## Esclusione Automatica File di Sistema macOS

Quando crei un archivio compresso su macOS, il Finder include comunemente file invisibili specifici del Mac:
- File `.DS_Store` (preferenze di visualizzazione della cartella nel Finder).
- Cartelle `__MACOSX` e file fork risorsa `._nomefile`.
- File di indicizzazione Spotlight (`.Spotlight-V100`) e cestino locale (`.Trashes`).

> [!NOTE]
> rZip esclude automaticamente tutti questi file spazzatura durante la creazione e l'aggiornamento degli archivi, generando archivi puliti e pronti per essere aperti su Windows o Linux senza errori. Durante la consultazione di un archivio, puoi premere `⇧⌘.` per mostrare o nascondere temporaneamente i file di sistema.

## Modifica di Archivi Esistenti (In-Place Editing)

Non occorre estrarre l'intero archivio per aggiungere o togliere file da archivi **ZIP**, **7z** o **TAR**:

- **Aggiungi File** (`⌥⌘A`): Trascina nuovi file nella finestra aperta oppure usa il comando *Aggiungi all'archivio...*.
- **Elimina File** (`⌘⌫`): Seleziona uno o più elementi interni e premi `⌘ + Backspace` per rimuoverli.
- **Rinomina**: Modifica il nome di file o cartelle direttamente nella lista.

### Protezione con Copia di Riserva nel Cestino

Per evitare qualsiasi perdita accidentale di dati durante le riscritture:
- Prima di applicare qualsiasi modifica distruttiva all'archivio sul disco, rZip deposita automaticamente una **copia di riserva dell'archivio originale nel Cestino del Mac** (`~/.Trash`).
- Se cambi idea o si verifica un problema, puoi ripristinare il file precedente dal Cestino con un clic su *Ripristina*.

## Conversione di Archivi tra Formati Diversi

Dal menu File o dal pulsante della barra degli strumenti puoi scegliere **Converti in un altro formato…**:

1. rZip estrae l'archivio corrente in una cartella temporanea privata e sicura (`ConversionStaging`).
2. Si apre direttamente la finestra di creazione configurata in modalità conversione.
3. Puoi scegliere un nuovo formato (ad esempio convertire un archivio proprietario **RAR** in un moderno **7z** o **ZIP** universale), reimpostare compressione, password o volumi.
4. Il nuovo archivio viene salvato accanto all'originale (che non viene toccato).
5. Se l'archivio di origine era protetto da password, rZip ripropone automaticamente la stessa password e le impostazioni di cifratura sul nuovo archivio.
6. La cartella temporanea di staging viene distrutta e ripulita istantaneamente al termine dell'operazione.
