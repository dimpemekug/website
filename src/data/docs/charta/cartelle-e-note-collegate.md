---
title: "Cartelle e note collegate"
description: "Aprire una cartella come progetto, l'albero delle note, i collegamenti [[nota]], i collegamenti in entrata, il grafo, Vai alla nota, trova e sostituisci, le immagini e le impostazioni dei progetti."
project: "charta"
order: 5
section: "Cartelle"
---

Una cartella aperta in Charta diventa un **progetto**: un insieme di note Markdown (con le loro sottocartelle) che si collegano tra loro. Le note restano file `.md` nella cartella; Charta non aggiunge file suoi e le impostazioni del progetto stanno nelle preferenze dell'app, non dentro la cartella.

## Aprire una cartella

- **Mac**: **Archivio › Apri cartella…** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd>). Ogni cartella si apre nella sua finestra; le ultime aperte sono in **Archivio › Cartelle recenti**, che si svuota con **Cancella elenco**.
- **iPhone e iPad**: **Apri cartella** nella schermata iniziale. Su iPad la cartella si apre in una finestra sua, su iPhone a schermo intero.

A sinistra c'è la barra delle cartelle con due sezioni:

- **Recenti**: le ultime note aperte, di tutti i progetti, con il nome del progetto sotto;
- **Progetti**: i progetti fissati e recenti, ciascuno un ramo da aprire. Il progetto della finestra mostra il suo albero; una nota di un altro progetto lo apre nella stessa finestra (o porta davanti la finestra che lo ha già aperto).

Se una cartella è stata spostata o non è più raggiungibile, la finestra lo dice e offre **Apri un altro progetto**.

## Note e cartelle

Il pulsante **+** (**Nuovo**) crea una **Nuova nota** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>N</kbd> sul Mac) o una **Nuova cartella**, e ha **Ordina per** **Nome** o **Data di modifica**. Nel testo, il tasto destro su un collegamento `[[nota]]` apre, rinomina o crea la nota e mostra i suoi collegamenti in entrata; su una selezione crea una nota nuova con quel testo (vedi [Formato, tabelle e scrittura](/progetti/charta/docs/formato-tabelle-e-scrittura)).

Il menu contestuale di una nota o di una cartella nella barra ha, sul Mac, **Nuova nota qui**, **Nuova cartella qui**, **Apri in una finestra a parte**, **Apri con il progetto**, **Copia collegamento [[…]]**, **Rinomina…**, **Mostra nel Finder** e **Sposta nel Cestino**; su iPhone e iPad **Nuova nota qui**, **Apri con il progetto**, **Rinomina** ed **Elimina**. Le note eliminate vanno nel Cestino quando il sistema lo consente.

Le note si salvano da sole poco dopo l'ultimo tasto.

### File cambiati da altre app

Se un'altra app (o un servizio di sincronizzazione) cambia il file aperto, Charta lo dice: «… è stato cambiato da un'altra app», con **Ricarica** per vedere la versione nuova o **Tieni questa versione** per riscrivere il file con il testo di Charta. Se hai modifiche non ancora salvate, l'avviso lo dice, e il salvataggio automatico della nota aspetta la tua risposta. La ricarica cambia solo il tratto diverso e si può annullare. Vale per le note delle cartelle e per i documenti aperti da soli, su Mac, iPhone e iPad.

Con **Impostazioni › Generali › Ricarica senza chiedere i file cambiati da altre app** (spenta all'inizio), un file senza modifiche da salvare si ricarica da solo; con modifiche da salvare Charta chiede sempre.

## Collegamenti tra le note

Scrivi `[[` e il nome di una nota: Charta propone le note della cartella mentre scrivi (sul Mac in un elenco sotto il cursore, su iPhone e iPad nella barra sopra la tastiera). Dopo `[[Nota#` propone i titoli di quella nota. Le forme `[[Nota#Titolo]]` e `[[Nota|testo]]` sono spiegate in [Markdown supportato](/progetti/charta/docs/markdown-supportato).

Un clic su un collegamento, nel WYSIWYG o nell'anteprima, apre la nota; se la nota non esiste ancora, Charta la crea accanto a quella aperta, con il nome come titolo.

### Collegamenti in entrata

La scheda **Collegamenti** della barra laterale (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>B</kbd> sul Mac) elenca le note che citano quella aperta, con la frase che contiene il collegamento. Un clic apre la nota a quel punto.

### Rinominare una nota

Quando rinomini una nota citata da altre, Charta chiede se aggiornare i collegamenti, con il numero di collegamenti e di note: **Aggiorna** li riscrive con il nome nuovo, **Non aggiornare** lascia le altre note come sono. Nella nota aperta la modifica si può annullare; le altre note cambiano su disco. Charta non tocca altri file senza questa conferma.

## Grafo delle note

**Grafo delle note** (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>G</kbd> sul Mac, menu **Altro** su iPhone e iPad) mostra le note come punti e i collegamenti come linee, con i colori delle sottocartelle e la legenda in basso.

- **Tutte le note** o **Nota aperta**: la seconda mostra solo le note vicine a quella aperta, entro una **Distanza** da 1 a 3 collegamenti.
- **Note senza collegamenti**: mostra o nasconde le note isolate.
- **Rimpicciolisci**, **Ingrandisci** e **Adatta**; un clic su una nota la apre.

## Vai alla nota

**Vai alla nota…** (<kbd>⌘</kbd> <kbd>T</kbd>, anche su iPad con la tastiera) apre un campo dove scrivi parte del nome: le note si filtrano mentre scrivi, con la sottocartella a destra. Se nessuna nota corrisponde, **Crea «…»** ne crea una con quel nome.

## Cercare e sostituire

Il campo **Cerca nelle note** in cima alla barra cerca nel testo di tutte le note e mostra le righe trovate, raggruppate per nota. Le opzioni sotto il campo:

- **Aa**: distingui maiuscole e minuscole;
- **Parola**: solo parole intere;
- **.\***: espressione regolare (nella sostituzione `$1`, `$2`… sono i gruppi).

**Sostituisci** apre il campo del testo nuovo. Ciò che la ricerca evidenzia è esattamente ciò che viene sostituito. **Tutto** chiede conferma con il numero di occorrenze e di note: nella nota aperta la sostituzione si annulla, nelle altre il file cambia su disco.

## Immagini e file trascinati

Le immagini incollate o trascinate nel testo si salvano in una cartella accanto alla nota, `assets` all'inizio, e il testo riceve il link `![](assets/…)`. La cartella si cambia in **Impostazioni › Editor › Cartella delle immagini** (vuota: accanto alla nota) o per un solo progetto. Un'immagine che sta già nella cartella del progetto si collega dove si trova, senza copia; una nota trascinata diventa un collegamento `[[nota]]`.

Sul Mac un documento aperto da solo dà accesso solo a quel file: per mostrare le immagini accanto, o salvarne di nuove, Charta chiede di poter leggere la sua cartella (**Consenti…** o **Non ora**). Su iPhone e iPad le immagini si salvano solo nelle note di una cartella aperta.

## Progetti fissati e impostazioni del progetto

Dal menu contestuale di un progetto nella barra (o da **Modifica elenco dei progetti…** nel menu **+**):

- **Apri qui**, **Apri in una nuova finestra**, **Fissa** / **Togli dai fissati**, **Mostra nel Finder**;
- **Togli dall'elenco**: dimentica il progetto e le sue impostazioni; la cartella resta dov'è.
- **Impostazioni del progetto…**: il nome nell'elenco (la cartella sul disco non cambia), un colore e un simbolo, una **Cartella delle immagini propria**, la modalità della prima nota (**Prima nota aperta in**), l'**Ordine delle note** e la nota iniziale.

La nota iniziale si sceglie dal menu contestuale di una nota con **Apri con il progetto**: è la nota che si apre per prima quando apri il progetto, e segue la nota se la rinomini.

I progetti fissati restano nell'elenco anche se la cartella non è raggiungibile; quelli recenti escono dall'elenco. Nell'elenco da modificare i fissati si riordinano trascinandoli. Le finestre dei documenti aperti da soli hanno un pulsante **Progetti** con i progetti e le note recenti.
