---
title: "Luoghi salvati e avvisi"
description: "Come aggiungere luoghi in rQuake, con raggio e avvisi propri, e come funzionano le notifiche dei nuovi terremoti: magnitudo, area, ore di silenzio, riepiloghi e limiti del controllo in background."
project: "rquake"
order: 6
section: "Funzionalità"
---

## Luoghi salvati

I luoghi sono punti da seguire oltre alla tua posizione: casa, lavoro, la famiglia. Si gestiscono in **Impostazioni › Luoghi**.

Con **Aggiungi un luogo** si apre **Nuovo luogo**:

- scrivi una città, un indirizzo o un luogo nel campo di ricerca (usa la ricerca di Apple Maps) e tocca il risultato;
- oppure tocca **Usa la posizione attuale**: il luogo viene salvato con il nome "Casa", che puoi cambiare.

Toccando un luogo si modificano:

- **Nome**;
- **Raggio**: 25, 50, 100, 200 o 500 km (predefinito 100 km), mostrato su una piccola mappa;
- **Avvisi per questo luogo**, attivi in partenza, con la loro **Magnitudo minima** (predefinita M ≥ 3);
- **Elimina luogo**. Si può eliminare anche scorrendo la riga verso sinistra.

Un luogo può essere:

- l'**area dell'elenco**, scelta nel filtro Area: compaiono gli eventi entro il suo raggio;
- l'area di una ricerca nell'[archivio](/progetti/rquake/docs/sequenze-e-archivio);
- un punto per l'[intensità stimata](/progetti/rquake/docs/scheda-evento-e-intensita), nella scheda di ogni evento entro 1000 km e negli avvisi.

Nome e coordinate restano sul dispositivo. Quando un luogo fa da centro di una ricerca, alla fonte arrivano solo le coordinate arrotondate a circa 1 km, mai il nome.

## Avvisi per i nuovi terremoti

In **Impostazioni › Notifiche** attiva **Avvisi per nuovi terremoti** e concedi il permesso. Poi scegli:

- **Magnitudo minima**: da M ≥ 2 a M ≥ 6 (all'inizio M ≥ 3,5 in Italia, M ≥ 5 altrove);
- **Area**: Italia, Mondo o Vicino a me (con il raggio di **Raggio «Vicino a me»**);
- **Ore di silenzio**, con l'ora di inizio (**Dalle**, predefinita 23:00) e di fine (**Alle**, predefinita 7:00).

I luoghi con gli avvisi attivi si aggiungono all'area scelta, ciascuno con la sua magnitudo minima. Funzionano solo se gli avvisi per nuovi terremoti sono accesi.

### Cosa contiene una notifica

- titolo **Terremoto M** con la magnitudo, e il luogo;
- ora e profondità;
- se il terremoto è stato probabilmente avvertito da te o in un tuo luogo, una riga come "A 23 km da Casa: Debole (III)".

Se a un controllo trova più di tre eventi nuovi, rQuake manda **un solo riepilogo** ("5 nuovi terremoti"), che indica il più forte. Toccando una notifica si apre l'evento.

Nelle **ore di silenzio** le notifiche arrivano senza suono, tranne quando il terremoto è stato probabilmente avvertito almeno di grado IV (leggero) da te o in un tuo luogo.

### Limiti

rQuake non ha un server: controlla i nuovi eventi in background quando iOS glielo concede, di solito ogni **15–30 minuti**, e crea le notifiche sul dispositivo. Per questo un avviso può arrivare con qualche decina di minuti di ritardo. Ogni controllo guarda anche 30 minuti indietro, per gli eventi pubblicati in ritardo, senza ripetere quelli già notificati. Attivando gli avvisi non arrivano notifiche per i terremoti già avvenuti.

Non è un sistema di allerta: per le emergenze segui le indicazioni della Protezione Civile.
