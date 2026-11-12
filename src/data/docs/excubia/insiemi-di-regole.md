---
title: "Insiemi di regole"
description: "Gli insiemi di regole di Excubia, come Casa e Ufficio: regole che valgono solo mentre l'insieme è attivo, scelta a mano o automatica secondo la rete e l'orario."
project: "excubia"
order: 6
section: "Regole"
---

Un insieme di regole raggruppa regole che valgono solo in certe situazioni: a casa, al lavoro, sul Wi-Fi pubblico. Le regole di un insieme valgono solo mentre l'insieme è attivo; quelle senza insieme valgono sempre.

## Creare un insieme

In cima alla pagina **Regole**, nella barra **Insiemi di regole**, premi **Crea…** (o **Modifica…** se ne hai già). Nell'editor:

- l'elenco degli insiemi si ordina con **Sposta su** e **Sposta giù**: l'ordine conta per la scelta automatica;
- **Nome**;
- **Reti**: per ogni rete il **Collegamento** (**Wi-Fi** o **Via cavo**) e il **Router**. **Usa la rete attuale** compila i campi. La rete si riconosce dall'indirizzo del router; lasciandolo vuoto vale qualsiasi rete di quel tipo. Excubia non usa il nome della rete Wi-Fi;
- **Orari**: i giorni della settimana, **Dalle** e **Alle**. Un orario nuovo parte da lunedì a venerdì, dalle 9:00 alle 18:00. Un intervallo che passa la mezzanotte appartiene al giorno in cui comincia.

Per mettere una regola in un insieme, scegli l'insieme nel suo editor, alla voce **Insieme di regole**.

## Quale insieme è attivo

Il menu nella barra **Insiemi di regole** offre:

- **Automatico**: è attivo il primo insieme dell'elenco che corrisponde alla rete o all'orario; se nessuno corrisponde, nessun insieme. Il filtro ricontrolla quando cambia la rete e ogni 30 secondi, anche con l'app chiusa;
- **Nessun insieme**;
- uno degli insiemi, scelto a mano.

La stessa scelta è nel menu della modalità del pannello della barra dei menu, nei [Comandi rapidi e nei filtri Full immersion](/progetti/excubia/docs/comandi-rapidi-full-immersion-e-widget).

## Togliere un insieme

Togliendo un insieme si eliminano anche le sue regole: Excubia chiede conferma e dice quante sono.
