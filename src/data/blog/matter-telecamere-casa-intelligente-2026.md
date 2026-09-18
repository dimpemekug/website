---
title: "Matter e le telecamere: l'ultimo silo della casa intelligente sta cedendo"
description: Con Matter 1.5 le telecamere e i videocitofoni entrano finalmente nello standard comune della casa connessa. Cosa significa per chi ha già lampadine e termostati di marche diverse, perché il video resta il pezzo più difficile e cosa conviene controllare prima di comprare.
pubDatetime: 2026-09-17T08:00:00Z
tags:
  - smart-home
  - iot
  - privacy
draft: false
---

Chi ha messo insieme una casa connessa un pezzo alla volta conosce il problema: le lampadine di una marca, il termostato di un'altra, le prese di una terza, e tre app diverse per accenderle. Matter è nato nel 2022 proprio per questo, e negli anni ha assorbito luci, prese, sensori, serrature, elettrodomestici. Un pezzo però era rimasto fuori, ed era il più delicato: le telecamere.

<figure>
  <img
    src="https://images.unsplash.com/photo-1752262167753-37a0ec83f614?w=1200&q=80"
    alt="Hub bianco per la casa intelligente appoggiato su un tavolino di legno accanto a un telecomando e a una pianta"
  />
  <figcaption class="text-center">
    L'hub è il punto in cui gli standard si incontrano: se parlano la stessa lingua, le app diventano una sola.
  </figcaption>
</figure>

## Cosa aggiunge Matter 1.5

La versione 1.5 dello standard, pubblicata dalla Connectivity Standards Alliance a novembre 2025, introduce il tipo di dispositivo **telecamera**: videocitofoni, telecamere di sicurezza, baby monitor. Non solo il comando di accensione, ma il flusso video vero e proprio, gli eventi di movimento, i controlli di brandeggio e zoom, gli scatti.

Il video non viaggia su Thread, che è pensato per messaggi piccoli e consumi bassi: passa da Wi-Fi o Ethernet usando WebRTC, lo stesso meccanismo delle videochiamate nel browser. L'aggiornamento 1.5.1 dello scorso 31 marzo ha limato proprio questa parte, migliorando la gestione di più flussi audio e video insieme.

Nella stessa versione sono entrate anche le **chiusure** — tende, tapparelle, cancelli — e una gestione dell'energia più ricca, con la possibilità di descrivere tariffe e fasce orarie ai dispositivi che consumano di più.

## Perché le telecamere erano il pezzo difficile

Una lampadina ha tre informazioni da scambiare: accesa, spenta, quanto luminosa. Una telecamera ha un flusso continuo, una latenza da rispettare, una codifica da negoziare, una registrazione da conservare da qualche parte e, soprattutto, un livello di riservatezza che nessun altro dispositivo di casa raggiunge.

È anche il settore dove il modello commerciale spinge più forte nella direzione opposta allo standard: molte telecamere economiche si sostengono con l'abbonamento al cloud, e un formato comune rende più facile cambiare fornitore. Non stupisce che l'adozione stia andando più a rilento del resto: a giugno 2026 SmartThings era l'unica piattaforma importante con il supporto alle telecamere Matter effettivamente attivo, mentre Apple, Google e Amazon lo hanno annunciato senza ancora abilitarlo.

## Cosa serve per usarlo davvero

- **Un hub aggiornato.** Il supporto non dipende solo dalla telecamera, ma dal controller: HomePod, Echo, Nest Hub o SmartThings devono essere compatibili con la versione 1.5.
- **Una rete che regge.** Il video locale non consuma banda internet, ma consuma banda Wi-Fi. Una telecamera in 2K su una rete satura si nota subito.
- **Attenzione alla dicitura.** "Compatibile con Matter" su una confezione può voler dire moltissime cose. Conta la versione, e conta quale tipo di dispositivo è certificato.

## I problemi ancora aperti

1. **Lo standard copre le funzioni comuni, non tutte.** Riconoscimento dei volti, zone di rilevamento, registrazione intelligente restano spesso nell'app del produttore: con Matter vedi il flusso, non necessariamente tutto il resto.
2. **Dove finiscono le registrazioni.** Che il protocollo sia aperto non dice dove viene conservato il video. Il cloud del produttore resta il default di molti modelli, con tutto quello che comporta.
3. **Il passato non si aggiorna.** Le telecamere già in casa quasi mai diventano Matter con un aggiornamento firmware: serve hardware nuovo, o un ponte software che aggiunge un pezzo in mezzo.
4. **La certificazione arriva prima dell'implementazione.** Uno standard pubblicato non è uno standard funzionante finché le piattaforme non lo attivano, e i tempi li decidono loro.

> **Suggerimento:** prima di comprare una telecamera "compatibile Matter", cerca sulla scheda tecnica due cose: la versione di Matter certificata e se il dispositivo funziona **senza account cloud**. La seconda risposta dice molto più della prima su cosa succede ai tuoi video.

## Cosa aspettarsi da qui in avanti

Il percorso è quello già visto con le luci: prima lo standard, poi due anni di implementazioni parziali, poi il momento in cui smetti di chiederti se un dispositivo funzionerà con quello che hai già. Per le telecamere quel momento arriverà quando le tre piattaforme più diffuse attiveranno il supporto e i produttori smetteranno di considerare l'abbonamento l'unico modo per rientrare dei costi.

Nel frattempo vale la pena notare cosa significa uno standard comune per la privacy domestica: un protocollo che funziona in locale rende possibile una casa connessa che non manda un fotogramma fuori dalle mura. Possibile, non automatico — ma prima non lo era nemmeno in teoria.
