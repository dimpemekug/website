---
title: "Barra dei menu"
description: "L'icona di OmniPeer nella barra dei menu: velocità, download attivi, pausa e ripresa di tutti i trasferimenti, limiti di velocità rapidi e stato delle reti."
project: "omnipeer"
order: 7
section: "Mac"
---

OmniPeer mette un'icona nella barra dei menu di macOS. Quando ci sono download attivi, accanto all'icona compare la velocità di download totale.

Un clic sull'icona apre un riquadro con:

- lo stato delle reti: «Tutte le reti attive», «Nessuna rete attiva», l'elenco di quelle attive, o «Motore P2P non connesso» se il motore non risponde;
- la velocità totale di **Download** e **Upload**;
- i trasferimenti attivi, ciascuno con nome, percentuale, tempo stimato e barra di avanzamento (o «In condivisione» per i file già completi); senza download attivi, «Nessun download attivo»;
- **Pausa tutti** e **Riprendi tutti**;
- **Apri OmniPeer**, che riapre la finestra principale;
- **Limita la velocità**: un menu con alcuni limiti già pronti per il download e per l'upload, oppure **Nessun limite**. La voce diventa «Limita la velocità · attivo» quando c'è un limite. I limiti scelti qui sono gli stessi delle [Impostazioni](/progetti/omnipeer/docs/impostazioni) e valgono subito;
- **Impostazioni…** ed **Esci da OmniPeer**.

## Finestra chiusa, app aperta

Chiudere la finestra principale non chiude OmniPeer: i trasferimenti continuano e l'icona resta nella barra dei menu. Per fermare tutto usa **Esci da OmniPeer** nel riquadro o **OmniPeer › Esci** (<kbd>⌘</kbd> <kbd>Q</kbd>). All'uscita si ferma anche il motore `omnipeerd`; al prossimo avvio i trasferimenti riprendono.
