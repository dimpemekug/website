---
title: "Progetti e Colori Automatici"
description: "Gestione dei progetti, tariffe orarie, aliquote IVA e l'algoritmo matematico deterministico FNV-1a per i colori dei progetti in Time Tracker."
project: "time-tracker"
order: 3
section: "Progetti"
---

## Creazione e Configurazione dei Progetti

La sezione **Progetti** è il cuore organizzativo di Time Tracker:

- **Nome e Descrizione**: assegna un titolo chiaro (es. *Restyling E-commerce*, *Consulenza Cloud AWS*, *Tesi Magistrale*).
- **Tariffa Oraria**: imposta il tuo compenso per ora lavorata (es. € 65,00/h). Se un progetto è personale o non retribuito, puoi impostare la tariffa a zero o deselezionare l'opzione fatturabile.
- **Aliquota IVA**: specifica la percentuale applicabile (es. 22%) per ottenere calcoli fiscali immediati.
- **Periodo di Validità e Archiviazione**: quando un progetto giunge al termine, puoi archiviarlo: non comparirà più nei selettori veloci delle nuove attività, ma il suo storico rimarrà intatto per statistiche e report.

---

## L'Algoritmo dei Colori: Nessun Colore Scelto a Mano

Scegliere manualmente un colore per ogni nuovo progetto da una palette di decine di pastiglie è un'operazione tediosa che porta spesso a contrasti sgradevoli o progetti con tinte identiche.

In Time Tracker, **il colore del progetto scaturisce direttamente dal suo nome**:

### Come Funziona l'Algoritmo
1. **Hashing Deterministico FNV-1a**: il nome del progetto viene elaborato da una funzione hash FNV-1a custom (non da `hashCode()`), garantendo che lo stesso nome generi esattamente la stessa tinta su iOS, Android e nei backup.
2. **Luminosità e Croma Fisse nello Spazio CIELAB**: la luminosità percettiva è bloccata a $L^* = 62$ e la croma a $C^* = 78$. Questo garantisce che nessun progetto risulti più sbiadito o accecante rispetto a quelli vicini nei grafici.
3. **Spaziatura con l'Angolo Aureo ($137{,}5^\circ$)**: se due progetti hanno nomi che generano una tonalità cromatica con una distanza angolare inferiore a $40^\circ$, l'algoritmo ruota l'angolo della sezione aurea fino a trovare il primo vuoto cromatico libero. In questo modo due progetti non avranno mai colori confondibili.
4. **Congelamento al Primo Salvataggio**: mentre digiti il titolo, la pastiglia cambia tonalità in tempo reale lettera per lettera; al salvataggio definitivo, il colore viene congelato nel database, così correggere un refuso successivo nel titolo non altera l'aspetto dei grafici storici.
