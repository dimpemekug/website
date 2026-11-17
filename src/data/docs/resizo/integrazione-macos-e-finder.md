---
title: "Integrazione con macOS e il Finder"
description: "Servizio del Finder, Dock, anteprima rapida, destinazione accanto all'originale, suffissi del nome e scorciatoie da tastiera di Resizo."
project: "resizo"
order: 4
section: "Funzionalità"
---

## Servizio del Finder

Resizo aggiunge una voce al menu contestuale del Finder:

- **Clic destro nel Finder**: seleziona una o più immagini, fai clic destro e scegli **Servizi › Ridimensiona con Resizo**.
- **Apertura immediata**: Resizo si apre con i file selezionati già in elenco, pronti da ridimensionare.

---

## Dock e trascinamento

- **Icona nel Dock**: trascina file o cartelle sull'icona di Resizo, anche ad app chiusa: l'app si avvia e li aggiunge all'elenco. Funziona anche **Apri con…** dal Finder.
- **Finestra principale**: trascina immagini o cartelle nella finestra in qualsiasi momento. Le cartelle vengono esplorate con le sottocartelle (si può disattivare nelle Impostazioni), saltando i file nascosti; le immagini già presenti non vengono aggiunte due volte.
- **Elenco**: per ogni immagine mostra miniatura, nome e formato, risoluzione e peso originali, nuova dimensione e stato.
- **Fine lavoro in secondo piano**: se stai usando un'altra app, alla fine Resizo mostra sull'icona del Dock il numero di immagini salvate (o un punto esclamativo se qualcuna non è riuscita), fa rimbalzare l'icona e invia una notifica. Il permesso per le notifiche viene chiesto la prima volta che serve.

---

## Anteprima rapida

Seleziona una o più immagini e premi la **barra spaziatrice** o <kbd>⌘</kbd> <kbd>Y</kbd>: si apre l'anteprima rapida di macOS, come nel Finder. Il **doppio clic** su una riga apre l'immagine nell'app predefinita; dopo il ridimensionamento apre il file nuovo.

---

## Destinazione e nome del file

Nella sezione **Salvataggio** del pannello delle opzioni, il menu **Destinazione** offre tre scelte:
- **~/Pictures/Resizo**: la cartella predefinita, `Immagini/Resizo`.
- **Accanto all'originale**: ogni immagine ridimensionata finisce nella cartella della sua foto. Per la sandbox di macOS serve il permesso di scrivere in quella cartella: la prima volta Resizo apre un pannello già posizionato lì e poi ricorda la scelta. Le cartelle autorizzate si gestiscono in Impostazioni › Permessi.
- **Scegli cartella…**: un'altra cartella per tutte le immagini, ricordata anche se la sposti o la rinomini.

Sotto, **Nome del file** contiene il suffisso aggiunto a ogni nome (predefinito `-resized`, es. `foto-resized.jpg`). Il menu **Suffissi pronti** propone `-resized`, `-small`, la misura impostata (es. `-1920`) e `@2x`, e sotto il campo compare l'esempio con il nome di un'immagine vera dell'elenco. Se esiste già un file con lo stesso nome, Resizo ne crea uno nuovo (con " 2", " 3"…) invece di sovrascriverlo.

---

## Scorciatoie da tastiera

| Scorciatoia | Funzione |
| :--- | :--- |
| <kbd>⌘</kbd> <kbd>O</kbd> | Aggiungi Immagini… |
| <kbd>⌘</kbd> <kbd>↩</kbd> | Ridimensiona e Salva |
| <kbd>⌘</kbd> <kbd>Y</kbd> o <kbd>Spazio</kbd> | Anteprima Rapida |
| <kbd>⌘</kbd> <kbd>⌫</kbd> | Rimuovi Selezionate |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>⌫</kbd> | Svuota l'Elenco |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Mostra o Nascondi Opzioni |
| <kbd>⌘</kbd> <kbd>,</kbd> | Impostazioni |

Tranne <kbd>⌘</kbd> <kbd>,</kbd> e la barra spaziatrice, le scorciatoie si possono cambiare in [Impostazioni › Scorciatoie](/progetti/resizo/docs/impostazioni). Rimuovere o svuotare l'elenco non tocca i file su disco; anche il pulsante **Svuota** in fondo alla finestra toglie tutte le immagini dall'elenco.
