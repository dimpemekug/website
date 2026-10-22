---
title: "Sequenze sismiche e archivio"
description: "Come rQuake raggruppa le scosse in sequenze con il metodo di Gardner e Knopoff, e come usare l'archivio con gli eventi famosi e la ricerca per area, date e magnitudo."
project: "rquake"
order: 5
section: "Funzionalità"
---

## Sequenze sismiche

Una sequenza è un gruppo di terremoti vicini a uno più forte: una scossa principale con le sue repliche, o uno sciame. rQuake le cerca tra gli eventi caricati:

1. parte dall'evento più forte e raccoglie tutti quelli entro una distanza che cresce con la sua magnitudo, secondo le finestre di **Gardner e Knopoff** (1974): circa 17 km per M 2, 40 km per M 5, 70 km per M 7;
2. ripete con il più forte tra gli eventi rimasti;
3. tiene solo i gruppi di almeno **5 eventi**.

Il periodo considerato è quello scelto nei filtri, al massimo 30 giorni. Ogni evento appartiene al più a una sequenza, che prende il nome dal luogo dell'evento più forte.

Nella scheda **Terremoti** compaiono fino a tre **Sequenze in corso**, quelle con un evento negli ultimi tre giorni. La schermata di una sequenza mostra:

- il numero di eventi, la magnitudo massima, l'inizio e l'ultimo evento;
- la mappa degli eventi;
- il grafico **Magnitudo nel tempo**;
- l'elenco degli **Eventi**, con la distanza da quello più forte.

## Archivio

Il pulsante **Archivio**, in alto a sinistra nella scheda **Terremoti**, apre i dati del passato.

### Eventi famosi

Ricerche pronte sui grandi terremoti, con la zona, il periodo e la magnitudo minima già impostati. In Italia l'elenco contiene:

- **Italia centrale 2016** (Amatrice, Visso, Norcia, fino a Mw 6,5);
- **Campi Flegrei 2025** (bradisismo, fino a Md 4,6);
- **Emilia 2012** (20 e 29 maggio, ML 5,9 e 5,8);
- **L'Aquila 2009** (6 aprile, Mw 6,1);
- **Turchia e Siria 2023** e **Giappone 2011** (Tōhoku).

Fuori dall'Italia l'elenco mostra invece i grandi terremoti del mondo degli ultimi vent'anni: Kamčatka 2025, Myanmar 2025, Giappone 2024, Turchia e Siria 2023, California 2019, Nepal 2015, Giappone 2011, Cile 2010, Haiti 2010 e Sumatra 2004.

### Ricerca

Nella sezione **Ricerca** si sceglie:

- **Area**: Italia, Mondo o un luogo salvato (con il suo raggio);
- **Dal** e **Al**: le date di inizio e fine (all'apertura, l'ultimo mese);
- **Magnitudo minima**: le stesse scelte dell'elenco (all'apertura M ≥ 3 in Italia, M ≥ 4 altrove).

Poi si tocca **Cerca**. Per l'Italia i dati sono dell'INGV, per il resto del mondo della fonte scelta nelle impostazioni.

I risultati mostrano le sequenze trovate e gli eventi, ordinabili per **Più recenti** o **Magnitudo**. Ogni ricerca restituisce al massimo **2000 eventi**, i più recenti: se il limite viene raggiunto l'app lo segnala, e conviene accorciare il periodo o alzare la magnitudo minima.
