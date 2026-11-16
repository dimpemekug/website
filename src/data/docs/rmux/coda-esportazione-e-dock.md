---
title: "Esportazione, coda e Dock"
description: "Riepilogo prima di esportare, dimensione stimata, velocità e tempo rimanente, coda di lavoro riordinabile, avanzamento nel Dock e notifiche in rMux."
project: "rmux"
order: 6
section: "Produttività"
---

## Prima di esportare

Sotto la timeline, una riga riassume cosa uscirà: il formato, se il video viene copiato o ricodificato, il numero di segmenti e di filtri e, quando le impostazioni lo permettono, la **dimensione stimata** del file. Accanto scegli il formato del file e avvii l'esportazione.

Nella barra laterale, ogni sezione (**Video**, **Dimensioni**, **Sottotitoli**, **Audio**) mostra un piccolo segno quando l'hai cambiata rispetto al file aperto, per esempio il codec scelto o il numero di filtri attivi. Il pulsante **Ripristina** in cima al pannello delle impostazioni riporta quella sezione com'era.

---

## Esportare subito o mettere in coda

- **Esporta…** (<kbd>⌘</kbd> <kbd>↩</kbd>) avvia subito l'esportazione. Durante il lavoro vedi la percentuale, la **velocità** (per esempio 2,3×) e il **tempo rimanente**. Al termine puoi **aprire** il file o mostrarlo nel Finder.
- **Aggiungi alla coda** mette l'esportazione in fila, così puoi passare al video successivo.
- **Più finestre**: puoi aprire più video in finestre diverse e preparare tagli diversi in parallelo.

---

## La coda di lavoro

Nella finestra **Coda di lavoro** (<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>J</kbd>):
- ogni riga mostra lo stato (in attesa, in pausa, completata, non riuscita, annullata) e una barra di avanzamento; per un lavoro non riuscito c'è anche il motivo;
- trascina le righe per **cambiare l'ordine** dei lavori in attesa;
- con il clic secondario puoi **rimettere in coda** un lavoro, mostrarlo nel Finder o rimuoverlo;
- in basso **Avvia coda**, **Interrompi coda** (ferma l'esportazione in corso, quelle in attesa restano) e **Rimuovi completati**.

La coda prosegue anche se chiudi la finestra del video, e viene salvata tra un avvio e l'altro.

---

## Dock e notifiche

- **Avanzamento sul Dock**: durante le esportazioni, sull'icona di rMux nel Dock compare una barra di avanzamento.
- **Notifica al termine**: quando rMux è in secondo piano e un'esportazione, un'unione o la coda finisce, macOS mostra una notifica che dice se è andata a buon fine. Si disattiva in **Impostazioni › Esportazione**.
- **Al termine**: sempre in **Impostazioni › Esportazione** puoi far sì che, finita un'esportazione dalla finestra principale, rMux mostri il file nel Finder o lo apra.

Le scorciatoie da tastiera sono raccolte in [Anteprima, tastiera e impostazioni](/progetti/rmux/docs/anteprima-tastiera-e-impostazioni).
