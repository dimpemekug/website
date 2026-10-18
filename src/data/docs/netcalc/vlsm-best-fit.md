---
title: "Pianificazione VLSM Best-Fit"
description: "Algoritmo best-fit descending in NetCalc Pro: pianificazione a lunghezza variabile, allocazione efficiente dello spazio IP, calcolo dello spreco e visualizzazione ad albero."
project: "netcalc"
order: 3
section: "Calcolo e Pianificazione"
---

## Il Problema del Subnetting Tradizionale

Nel subnetting classico a dimensione fissa, ogni sottorete riceve la stessa maschera. Questo approccio genera enormi sprechi: assegnare una subnet `/24` (254 host) a un collegamento punto-punto seriale tra due router (che necessita solo di 2 indirizzi) spreca 252 indirizzi IP, pari al 99.2% dell'intero blocco.

Il **VLSM** (_Variable Length Subnet Masking_) risolve questo problema permettendo di assegnare a ciascuna subnet una maschera calibrata sulle sue effettive necessità.

---

## L'Algoritmo Best-Fit Descending di NetCalc Pro

Per evitare sovrapposizioni e frammentazione dello spazio di indirizzamento, la regola d'oro del networking è: **allocare sempre per prime le subnet più grandi**.

NetCalc Pro automatizza l'intero processo:

1. **Inserimento del Blocco Radice**: definisci la rete principale a tua disposizione (es. `172.16.0.0/20` o `192.168.10.0/24`).
2. **Definizione delle Esigenze**: aggiungi ogni ramo o dipartimento specificando un nome e il numero di host richiesti:
   - _Laboratorio Scientifico_: 120 host
   - _Uffici Amministrativi_: 50 host
   - _Server Farm_: 26 host
   - _Ufficio Direzione_: 10 host
   - _Link Punto-Punto WAN Router1 ↔ Router2_: 2 host
3. **Ordinamento e Calcolo**:
   - L'algoritmo ordina i requisiti in modo decrescente.
   - Calcola per ciascuno la potenza di due minima che soddisfa la formula $2^n - 2 \ge \text{host richiesti}$.
   - Assegna il prefisso corrispondente ($32 - n$) e fa avanzare il puntatore di base senza lasciare buchi inutilizzati.
   - Mostra lo stato dello spazio rimanente non allocato per future espansioni.

---

## Mappa Proporzionale dello Spazio (`AddressSpaceMapView`)

NetCalc Pro include una visualizzazione grafica a barre proporzionali che mappa l'intero blocco padre:

```text
┌────────────────────────────────────── 192.168.10.0/24 ──────────────────────────────────────┐
│  Laboratorio (120)  │   Uffici (50)   │  Server (26)  │ Dir (10) │ WAN │    Spazio Libero   │
│        /25          │       /26       │      /27      │   /28    │ /30 │        /28         │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

- Ogni blocco ha una larghezza percentuale esattamente corrispondente alla frazione dello spazio di indirizzamento occupato.
- I blocchi evidenziano con chiarezza la densità di allocazione, la quota di indirizzi assegnati, gli indirizzi riservati (network/broadcast) e gli indirizzi non ancora allocati.

---

## Metriche di Efficienza e Diagnostica

Per ciascun piano VLSM elaborato, NetCalc Pro calcola:

- **Efficienza Complessiva**: percentuale di indirizzi effettivamente utilizzati rispetto alla dimensione del blocco radice.
- **Indirizzi di Overhead e Riserva**: conteggio esatto degli indirizzi dedicati a network ID e broadcast per ciascun segmento.
- **Controllo di Capienza**: se la somma delle richieste supera lo spazio fornito dalla rete radice, l'app segnala immediatamente l'errore `Spazio insufficiente`, indicando quanti host mancano per completare la progettazione.

---

## Da Piano VLSM a Dispositivi Reali (`PlanDeviceBuilder`)

Una volta terminata la pianificazione su NetCalc Pro, non serve trascrivere manualmente gli indirizzi uno ad uno.

Premendo il pulsante **"Crea dispositivi dal piano"** nella barra delle azioni:

1. L'app analizza ogni sottorete calcolata.
2. Identifica i collegamenti WAN (subnet `/30` o `/31`) e le LAN dei dipartimenti.
3. Genera automaticamente all'interno del progetto i dispositivi router e switch corrispondenti.
4. Assegna alle interfacce del router il primo indirizzo utilizzabile (`.1`) come default gateway, con la corretta subnet mask e la descrizione della rete già compilata.
