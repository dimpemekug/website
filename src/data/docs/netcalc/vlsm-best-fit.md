---
title: "Pianificazione VLSM Best-Fit"
description: "Algoritmo best-fit descending in NetCalc Pro: pianificazione a lunghezza variabile, allocazione efficiente dello spazio IP, calcolo dello spreco, mappa scalabile e generazione automatica di topologie interconnesse."
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
3. **Ordinamento e Calcolo Reattivo**:
   - I calcoli si aggiornano in tempo reale mentre scrivi.
   - L'algoritmo ordina i requisiti in modo decrescente.
   - Calcola per ciascuno la potenza di due minima che soddisfa la formula $2^n - 2 \ge \text{host richiesti}$.
   - Assegna il prefisso corrispondente ($32 - n$) e fa avanzare il puntatore di base senza lasciare buchi inutilizzati.
   - Mostra lo stato dello spazio rimanente non allocato per future espansioni.

---

## Mappa Proporzionale dello Spazio con Zoom Automatico

NetCalc Pro include una visualizzazione grafica a barre proporzionali (`AddressSpaceMapView`) che mappa l'intero blocco padre:

```text
┌────────────────────────────────────── 192.168.10.0/24 ──────────────────────────────────────┐
│  Laboratorio (120)  │   Uffici (50)   │  Server (26)  │ Dir (10) │ WAN │    Spazio Libero   │
│        /25          │       /26       │      /27      │   /28    │ /30 │        /28         │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Scala Dinamica e Zoom Intelligente**: se il piano occupa meno di un quarto ($< 25\%$) dello spazio totale del blocco radice, la mappa si ingrandisce automaticamente sulla sola porzione utilizzata per mantenere perfettamente leggibili etichette, prefissi e segmenti più piccoli.
- **Evidenziazione Visiva**: densità di allocazione, indirizzi assegnati, indirizzi di overhead riservati e blocchi liberi.

---

## Metriche di Efficienza e Diagnostica

Per ciascun piano VLSM elaborato, NetCalc Pro calcola:

- **Efficienza Complessiva**: percentuale di indirizzi effettivamente utilizzati rispetto alla dimensione del blocco radice.
- **Indirizzi di Overhead e Riserva**: conteggio esatto degli indirizzi dedicati a network ID e broadcast per ciascun segmento.
- **Controllo di Capienza**: se la somma delle richieste supera lo spazio fornito dalla rete radice, l'app segnala immediatamente l'errore `Spazio insufficiente`, indicando quanti host mancano per completare la progettazione.

---

## Da Piano VLSM a Topologia Interconnessa (`PlanDeviceBuilder`)

Una volta terminata la pianificazione su NetCalc Pro, non serve trascrivere manualmente gli indirizzi né creare i singoli router a mano.

Premendo il pulsante **"Crea dispositivi dal piano"** nella toolbar:

1. **Scelta della Topologia di Interconnessione**:
   - **A Cascata / Fila (Chain)**: i router vengono collegati in sequenza lineare $R1 \leftrightarrow R2 \leftrightarrow R3$.
   - **A Stella (Star)**: un router centrale di core/aggregazione coordina tutti i router periferici dei dipartimenti.
   - **A Maglia (Mesh)**: interconnessione ridondata completa tra tutti i router per massima resilienza.
2. **Assegnazione Reti di Transito WAN**:
   - Scelta del prefisso per i collegamenti punto-punto: subnet standard `/30` (4 IP, 2 host) oppure subnet moderne `/31` RFC 3021 (2 IP per link seriali o Gigabit Ethernet dedicati).
   - Generazione automatica degli indirizzi IP per le interfacce di collegamento dei router.
3. **Configurazione Routing Dinamico OSPF**:
   - L'applicazione calcola e inserisce automaticamente le istruzioni `router ospf` e i comandi `network` con wildcard corrispondenti per annunciare sia le LAN locali sia i link punto-punto di transito.
4. **Assegnazione Gateway LAN**:
   - Le interfacce rivolte agli switch utente ricevono automaticamente il primo indirizzo utilizzabile (`.1`) come default gateway, con descrizione e stato abilitato.
