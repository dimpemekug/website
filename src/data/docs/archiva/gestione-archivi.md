---
title: "Esplorazione ed estrazione selettiva"
description: "Navigazione ad albero, anteprima, vista compatta, ispezione di app e pacchetti (BundleInspector) ed estrazione con il trascinamento in Archiva."
project: "archiva"
order: 3
section: "Guide d'uso"
---

## Esplorare senza estrarre

Con Archiva non serve decomprimere un archivio enorme per arrivare a un singolo documento:

- **Cartelle espandibili**: apri e chiudi le cartelle con il triangolo o con i tasti <kbd>→</kbd> / <kbd>←</kbd>. Con <kbd>⌥</kbd>-clic sul triangolo espandi o comprimi l'intero ramo.
- **Espandi o comprimi tutto**: <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>→</kbd> e <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>←</kbd> mostrano o richiudono tutta la struttura.
- **Ordinamento**: per nome, dimensione, data di modifica o tipo, in ordine crescente o decrescente; le cartelle restano in cima (si può cambiare nelle Impostazioni).
- **Ricerca**: il campo di ricerca (<kbd>⌘</kbd> <kbd>F</kbd>) filtra all'istante anche decine di migliaia di voci.
- **Navigazione**: Indietro (<kbd>⌘</kbd> <kbd>[</kbd>), Avanti (<kbd>⌘</kbd> <kbd>]</kbd>), Cartella superiore (<kbd>⌘</kbd> <kbd>↑</kbd>) e Inizio dell'archivio (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>H</kbd>); dal menu **Vai** puoi anche mostrare solo gli elementi protetti da password.

## Anteprima

Selezionando un file, il pannello informazioni ne mostra l'anteprima:
- immagini, documenti PDF, testi e codice sorgente vengono letti direttamente in memoria (con libarchive o con `7zz e -so`), senza scrivere file temporanei su disco;
- gli altri tipi (documenti, video, audio, font) passano da Quick Look, che apre solo file veri: Archiva ne scrive una copia in una cartella temporanea privata e la cancella quando l'anteprima non serve più.

Premendo <kbd>Spazio</kbd> o <kbd>⌘</kbd> <kbd>Y</kbd> si apre il pannello di Quick Look di macOS, sempre su una copia temporanea. Il limite di dimensione per immagini e PDF si regola nelle Impostazioni (da 10 a 250 MB).

## Vista compatta

Con <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>L</kbd> passi dalla vista completa a una finestra piccola, con l'elenco a righe e i comandi essenziali. Anche la creazione e la conversione hanno la loro versione compatta.

## Ispezione di app e pacchetti (`BundleInspector`)

Quando un archivio contiene un'app per Mac (`.app`), un'estensione (`.appex`), un plug-in, un framework o un pacchetto di installazione (`.pkg`), Archiva legge in memoria `Info.plist`, icone e intestazioni Mach-O e mostra nel pannello informazioni:

- **Identità e versione**: icona, versione, build, bundle ID, categoria e versione minima di macOS richiesta.
- **Architetture**: se il binario è per *Apple Silicon* (`arm64`), *Intel* (`x86_64`) o *universale*.
- **Firma**: presenza della firma del codice (`_CodeSignature`), del ticket di notarizzazione e della ricevuta del Mac App Store (`_MASReceipt`).
- **Pacchetti di installazione (`.pkg`)**: dall'indice XAR, senza estrarre nulla, titolo, versione, componenti inclusi, dimensione installata, percorso di installazione, presenza di script e firma.

## Estrazione con il trascinamento

Archiva usa `Transferable` con `FileRepresentation` di macOS:

1. Seleziona uno o più file nell'elenco (oppure trascina la grande icona dal pannello informazioni).
2. Trascinali in una cartella del Finder o sulla Scrivania.
3. L'estrazione avviene solo al rilascio:
   - per i file protetti, Archiva chiede la password al rilascio (e la richiede di nuovo se è sbagliata);
   - un banner mostra l'avanzamento dell'estrazione;
   - i file estratti non sovrascrivono mai quelli con lo stesso nome già presenti.

## Estrazione su comando (<kbd>⌘</kbd> <kbd>E</kbd> e <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>)

Dalla barra degli strumenti, dal menu File o dal menu contestuale:
- **Estrai selezione…** (<kbd>⌘</kbd> <kbd>E</kbd>): estrae solo gli elementi selezionati.
- **Estrai tutto…** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>): estrae l'intero archivio.
- **Cartelle**: se l'archivio ha un solo elemento alla radice viene estratto direttamente, altrimenti Archiva crea una cartella con il nome dell'archivio (nelle Impostazioni puoi chiedere di crearla sempre).
- **Destinazione**: nelle Impostazioni scegli se chiedere la cartella ogni volta, estrarre accanto all'archivio o usare sempre una cartella scelta, e se mostrare il risultato nel Finder al termine.
- **Sicurezza**: l'estrazione blocca i percorsi che uscirebbero dalla cartella di destinazione (`..`, link simbolici); in caso di errore o annullamento i file parziali vengono rimossi.
