---
title: "Progetti e colori"
description: "Gestione dei progetti, tariffe orarie, IVA, archiviazione e il calcolo automatico dei colori dei progetti su Android in Time Tracker."
project: "time-tracker"
order: 3
section: "Progetti"
---

## Creare e configurare un progetto

La sezione **Progetti** è il centro organizzativo di Time Tracker:

- **Nome e note**: un titolo chiaro (es. *Restyling e-commerce*, *Consulenza cloud*, *Tesi magistrale*) e note facoltative.
- **Periodo**: date di inizio e fine del progetto, facoltative.
- **Fatturazione**: attivala per impostare la **tariffa oraria** (es. 65 € l'ora) e l'**aliquota IVA** (es. 22%). Per un progetto personale o non retribuito lasciala disattivata: le sue ore non entrano nella quota fatturabile.
- **Archiviazione**: un progetto concluso si può archiviare; non compare più tra quelli proposti per le nuove attività, ma il suo storico resta per statistiche ed esportazioni.
- **Eliminazione**: eliminando un progetto si eliminano anche le sue ore.

---

## Il colore di un progetto

Il colore serve a riconoscere un progetto a colpo d'occhio nelle liste e nei grafici.

- **Su iOS** lo scegli tu da una griglia di colori di sistema nell'editor del progetto.
- **Su Android** non c'è niente da scegliere: **il colore viene calcolato dal nome**.

### Come funziona su Android
1. **Hash FNV-1a**: il nome passa per una funzione FNV-1a scritta apposta (non `hashCode()`), così lo stesso nome dà sempre la stessa tinta.
2. **Luminosità e croma fisse nello spazio CIELAB**: la luminosità percettiva è fissata a L\* 62 e la croma a 78, così nessun progetto risulta più pallido o più acceso dei vicini nei grafici.
3. **Angolo aureo (137,5°)**: se la tinta suggerita dal nome dista meno di 40° da una già usata, viene ruotata dell'angolo aureo finché non trova uno spazio libero. Con molti progetti la soglia si riduce da sola fin dove il cerchio dei colori lo consente.
4. **Colore fissato al primo salvataggio**: mentre scrivi il nome, il pallino accanto al campo cambia colore lettera per lettera; una volta salvato, il colore resta quello. Correggere un refuso nel nome non cambia l'aspetto dei grafici passati.

I progetti già esistenti, compresi quelli importati da un backup, mantengono il colore che hanno.
