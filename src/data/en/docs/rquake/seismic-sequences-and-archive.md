---
title: "Seismic sequences and archive"
description: "How rQuake groups shocks into sequences with the Gardner and Knopoff method, and how to use the archive with well-known earthquakes and the search by area, dates and magnitude."
project: "rquake"
order: 5
section: "Features"
---

## Seismic sequences

A sequence is a group of earthquakes close to a stronger one: a mainshock with its aftershocks, or a swarm. rQuake looks for them among the loaded events:

1. it starts from the strongest event and gathers all those within a distance that grows with its magnitude, following the **Gardner and Knopoff** (1974) windows: about 17 km at M 2, 40 km at M 5, 70 km at M 7;
2. it repeats with the strongest of the remaining events;
3. it keeps only groups of at least **5 events**.

The period considered is the one chosen in the filters, 30 days at most. Each event belongs to one sequence at most, named after the place of the strongest event.

The **Earthquakes** tab shows up to three **Ongoing sequences**, those with an event in the last three days. A sequence's screen shows:

- the number of events, the maximum magnitude, the start and the latest event;
- the map of the events;
- the **Magnitude over time** chart;
- the list of **Events**, with the distance from the strongest one.

## Archive

The **Archive** button, top left in the **Earthquakes** tab, opens the data of the past.

### Well-known earthquakes

Ready-made searches for great earthquakes, with area, period and minimum magnitude already set. In Italy the list contains:

- **Central Italy 2016** (Amatrice, Visso, Norcia, up to Mw 6.5);
- **Campi Flegrei 2025** (bradyseism, up to Md 4.6);
- **Emilia 2012** (20 and 29 May, ML 5.9 and 5.8);
- **L'Aquila 2009** (6 April, Mw 6.1);
- **Turkey and Syria 2023** and **Japan 2011** (Tōhoku).

Outside Italy the list shows the world's great earthquakes of the last twenty years instead: Kamchatka 2025, Myanmar 2025, Japan 2024, Turkey and Syria 2023, California 2019, Nepal 2015, Japan 2011, Chile 2010, Haiti 2010 and Sumatra 2004.

### Search

In the **Search** section you choose:

- **Area**: Italy, World or a saved place (with its radius);
- **Since** and **To**: the start and end dates (the last month when it opens);
- **Minimum magnitude**: the same choices as the list (M ≥ 3 in Italy, M ≥ 4 elsewhere when it opens).

Then tap **Search**. For Italy the data comes from INGV, for the rest of the world from the source chosen in Settings.

The results show the sequences found and the events, sortable by **Most recent** or **Magnitude**. Each search returns at most **2000 events**, the most recent ones: if the limit is reached the app says so, and it's worth shortening the period or raising the minimum magnitude.
