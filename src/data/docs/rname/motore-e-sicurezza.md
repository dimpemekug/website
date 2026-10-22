---
title: "Motore e sicurezza"
description: "Come funziona il motore di rinomina di rName: operazione in due fasi con nomi temporanei, cambi di maiuscole su APFS, ripristino automatico e annullamento."
project: "rname"
order: 4
section: "Sicurezza e Sistema"
---

## I rischi della rinomina

Rinominare file è un'operazione delicata. Se un'utility rinomina i file direttamente, in un solo passaggio (`rename(origine, destinazione)`), capitano spesso tre tipi di problemi:

1. **Scambi di nomi**: scambiare due file (`A` → `B` e `B` → `A`) fallisce subito, perché la destinazione `B` è ancora occupata.
2. **Cambi di sole maiuscole**: sul file system predefinito del Mac (**APFS** o **HFS+** senza distinzione tra maiuscole e minuscole), rinominare `archivio.zip` in `Archivio.zip` fallisce o viene ignorato, perché per il file system i due nomi sono lo stesso file.
3. **Interruzioni a metà**: se un'operazione su 500 file si ferma al file 250 (per esempio per un permesso revocato o un disco scollegato), ti ritrovi con l'archivio a metà, senza sapere quali file sono stati toccati.

rName evita tutti questi casi con il suo motore di rinomina (`RenameExecutor`).

---

## Rinomina in due fasi

Le operazioni sul disco avvengono in background, fuori dal thread principale, in due fasi:

```
[File originale] ──(fase 1)──> [.rname-<UUID> temporaneo] ──(fase 2)──> [Nome finale]
```

### Fase 1: nomi temporanei

Ogni file da rinominare riceve prima un nome temporaneo nascosto e univoco, nella stessa cartella:

```
foto.jpg  ──>  .rname-9B2A3D1E-548B-4FA3-88B1-9C3E14B82811
```

Così il nome originale si libera subito, e scambi (`A` → `B` e `B` → `A`) o cicli più lunghi avvengono senza collisioni.

### Fase 2: nomi definitivi

Poi ogni file temporaneo riceve il nome finale:

```
.rname-9B2A3D1E-548B-4FA3-88B1-9C3E14B82811  ──>  Foto.jpg
```

Ora il file system accetta il nuovo nome, anche quando cambiano solo le maiuscole, perché la destinazione è libera.

---

## Ripristino automatico

Se nella seconda fase uno spostamento fallisce (per esempio perché un disco esterno è diventato di sola lettura):

- il motore intercetta subito l'errore;
- il file temporaneo **torna al suo nome originale**;
- nessun file resta sul disco con il nome temporaneo `.rname-`;
- ricevi un riepilogo con il motivo dell'errore.

---

## Annullare l'ultima rinomina (<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd>)

Ogni rinomina riuscita viene ricordata, con il nome di arrivo e quello di partenza di ciascun file.

- Se ti accorgi di aver applicato le regole sbagliate, premi <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> (oppure scegli _Rinomina › Annulla ultima rinomina_).
- rName esegue l'operazione inversa, sempre in due fasi, e riporta tutti i file al nome che avevano prima.
