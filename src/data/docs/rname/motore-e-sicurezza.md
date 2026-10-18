---
title: "Motore e Sicurezza Atomica"
description: "L'architettura del motore di rinomina di rName: operazione in due fasi con file temporanei, gestione di maiuscole su APFS, rollback automatico e storico Annulla."
project: "rname"
order: 4
section: "Sicurezza e Sistema"
---

## Il Rischio delle Operazioni di File System

La manipolazione dei nomi dei file a livello di sistema operativo è un'operazione delicata. Se un'utility esegue le rinomine direttamente in un unico passaggio (`rename(sorgente, destinazione)`), si verificano con frequenza tre categorie di guasti critici:

1. **Scambi circolari**: voler scambiare due file tra loro (`A` → `B` e `B` → `A`) fallisce al primo tentativo, poiché la destinazione `B` risulta già occupata da un file esistente.
2. **Cambiamento di sole maiuscole**: sul filesystem predefinito del Mac (**APFS** o **HFS+** formattati come _Case-Insensitive_), rinominare `archivio.zip` in `Archivio.zip` fallisce o viene ignorato perché per il filesystem i due nomi corrispondono allo stesso nodo.
3. **Interruzioni a metà batch**: se un'operazione su 500 file si arresta al file numero 250 (ad esempio per un permesso revocato o un disco disconnesso), l'utente si ritrova con l'archivio diviso a metà, senza sapere quali file siano stati toccati e quali no.

rName risolve alla radice tutti questi scenari attraverso il motore transazionale **RenameExecutor**.

---

## Esecuzione Atomica in Due Fasi

Tutte le operazioni sul disco vengono eseguite in background fuori dal _main actor_, seguendo una procedura rigorosa in due fasi:

```
[File Originale] ──(Fase 1)──> [.rname-<UUID> Temporaneo] ──(Fase 2)──> [Nome Finale Destinazione]
```

### Fase 1 — Staging su Nomi Temporanei Univoci

Ciascun file sorgente valido viene innanzitutto spostato su un nome temporaneo nascosto, generato con un identificatore univoco globale all'interno della medesima cartella:

```
foto.jpg  ──>  .rname-9B2A3D1E-548B-4FA3-88B1-9C3E14B82811
```

In questo modo, il nome originale viene liberato immediatamente dal filesystem. Scambi complessi di nomi (`A` → `B` e `B` → `A`) e cicli multipli possono così avvenire senza alcuna collisione.

### Fase 2 — Spostamento verso il Nome Definitivo

Tutti i file temporanei vengono rinominati nella loro destinazione finale:

```
.rname-9B2A3D1E-548B-4FA3-88B1-9C3E14B82811  ──>  Foto.jpg
```

Il filesystem accetta ora il nuovo nome (anche nel caso di sole lettere maiuscole) poiché la destinazione risulta libera da conflitti di binding.

---

## Ripristino di Emergenza (Rollback Automatico)

Se durante la seconda fase uno spostamento fallisce (ad esempio a causa di un file system esterno improvvisamente in sola lettura):

- Il motore intercetta immediatamente l'errore.
- Il file temporaneo viene **immediatamente ripristinato al suo nome originale di partenza**.
- Nessun file resta mai abbandonato sul disco con l'estensione o il prefisso temporaneo `.rname-`.
- L'utente riceve un riepilogo dettagliato con la spiegazione del fallimento.

---

## Storico delle Operazioni e Funzione Annulla (⌥⌘Z)

Ogni sessione di rinomina andata a buon fine viene salvata in memoria all'interno di una struttura `RenameOperation`. Questa traccia registra la coppia esatta tra la posizione finale raggiunta e il nome originale di ciascun file coinvolto.

- Se ti accorgi di aver applicato le regole sbagliate, premi la scorciatoia di sistema <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> (oppure scegli dal menu _Modifica › Annulla rinomina_).
- rName esegue istantaneamente il piano inverso in due fasi, riportando tutti i file della cartella al loro stato originario.
