---
title: "Local-first: le app che funzionano offline e sincronizzano dopo"
description: I dati sul dispositivo, il server come copia e non come padrone. Dopo anni di prototipi, nel 2026 il local-first ha librerie mature, motori di sincronizzazione in produzione e una track dedicata al FOSDEM. Cosa vuol dire, cosa si guadagna e dove fa ancora male.
pubDatetime: 2026-09-14T08:00:00Z
tags:
  - software-development
  - developer-tools
  - privacy
draft: false
---

Se il treno entra in galleria, quasi tutte le app che usi smettono di essere app e diventano schermate di errore. È una scelta di architettura, non una legge di natura: da quindici anni il modo normale di costruire software è mettere i dati su un server e dare al dispositivo una finestra da cui guardarli. Il movimento *local-first* propone di rovesciare quella relazione, e nel 2026 ha smesso di essere un discorso da convegno.

<figure>
  <img
    src="https://images.unsplash.com/photo-1777913308049-a2c79af7380a?w=1200&q=80"
    alt="Portatile aperto su un tavolo di legno sotto una tettoia di paglia, affacciato su una valle al tramonto"
  />
  <figcaption class="text-center">
    Il vero test di un'app local-first è banale: funziona anche dove la rete non arriva?
  </figcaption>
</figure>

## Cosa vuol dire, in pratica

L'idea nasce da un saggio del laboratorio Ink & Switch del 2019 e sta in una frase: **i dati vivono sul dispositivo dell'utente, e la rete serve a sincronizzarli, non a possederli**. Da lì discendono alcune proprietà che, messe in fila, descrivono bene il software che la gente rimpiange:

- l'app si apre subito, perché non aspetta nessuna risposta;
- funziona offline per intero, non in una «modalità ridotta»;
- la collaborazione resta possibile, con le modifiche che si fondono quando la rete torna;
- i dati restano leggibili anche se il servizio chiude;
- la privacy diventa una conseguenza dell'architettura, non una promessa scritta in una pagina.

## Come si fonde tutto quando la rete torna

Il pezzo tecnico che ha reso praticabile l'idea sono i **CRDT** (Conflict-free Replicated Data Types): strutture dati progettate perché due copie modificate separatamente possano essere unite senza un arbitro e arrivando allo stesso risultato, in qualunque ordine arrivino le modifiche.

Le librerie sono mature. **Yjs** è la più diffusa e sta dietro l'editing collaborativo di parecchi prodotti noti; **Automerge**, arrivato alla versione 3 alla fine del 2025, ha riscritto il formato di archiviazione riducendo di quasi la metà la dimensione dei documenti — che era il suo limite storico.

Accanto ai CRDT sono cresciuti i **motori di sincronizzazione**, che risolvono il problema un livello più in alto: ElectricSQL sincronizza Postgres con SQLite sul client, PowerSync fa qualcosa di simile per stack esistenti, Zero e Triplit puntano invece a gestire l'intera catena — archiviazione locale, sincronizzazione, conflitti, aggiornamenti in tempo reale — per chi parte da zero.

Che il tema sia uscito dalla fase sperimentale lo dicono due segnali di quest'anno: il FOSDEM 2026 ha avuto una track dedicata a local-first, motori di sincronizzazione e CRDT, e ad agosto Electric è entrata in Databricks.

## I problemi ancora aperti

1. **Le migrazioni di schema.** Se i dati stanno su mille dispositivi, cambiare la forma di un documento non è una `ALTER TABLE`: è una negoziazione con versioni vecchie che potrebbero tornare online fra sei mesi.
2. **I permessi.** I CRDT risolvono i conflitti, non l'autorizzazione. Decidere chi può leggere e scrivere cosa richiede comunque un server che faccia da guardiano, e progettarlo è meno divertente della parte offline.
3. **Il peso della storia.** Un documento che conserva tutte le modifiche cresce. Compattazione, potatura e snapshot sono lavoro vero, non un dettaglio.
4. **Scommettere su progetti giovani.** L'ecosistema si muove in fretta, i progetti vengono acquisiti e le API cambiano. Chi adotta oggi deve poter sostituire un pezzo domani.

> **Suggerimento:** non serve riscrivere tutto per guadagnare metà del beneficio. Prova a spostare lo stato dell'app in un database locale — SQLite, o anche solo un file — e a far diventare il server un sincronizzatore che gira in sottofondo. L'app diventa più veloce e più robusta ancora prima di chiamarla local-first.

## Cosa aspettarsi da qui in avanti

La direzione è quella di rendere la sincronizzazione un servizio dell'ambiente di sviluppo, come oggi lo sono l'autenticazione o le notifiche: qualcosa che si configura, non che si scrive. Quando succederà, la domanda «funziona offline?» smetterà di essere una funzione da spuntare e tornerà a essere un'aspettativa minima.

C'è anche un motivo meno tecnico per cui vale la pena guardarci. Un'app che tiene i dati sul dispositivo non ha bisogno di raccontare cosa fa con i tuoi dati sul suo server, perché non ce li ha. È una forma di rispetto che si vede nel codice prima ancora che nell'informativa sulla privacy — e per chi scrive software, la cosa più rassicurante è che è anche l'architettura che rende le app più veloci.
