---
title: "NetCalc Pro"
description: "App per iPhone, iPad e Mac per le reti: calcolo IPv4/IPv6, quattro strumenti avanzati, subnetting e VLSM, comandi Cisco IOS con switching avanzato, schema di topologia e verifica di laboratorio. Gratuita, senza pubblicità né acquisti in-app."
pubDatetime: 2026-10-13T00:00:00+02:00
draft: false
tags: ["iOS", "macOS", "reti", "privacy"]
appStore: "https://apps.apple.com/app/netcalc-pro/id6823228406"
privacyDataTypes: "gli indirizzi e i valori che usi nei calcoli, i progetti con i loro dispositivi e configurazioni, e le preferenze dell'app"
privacyStorageNote: "Tutti i calcoli avvengono sul dispositivo. Con la sincronizzazione iCloud attiva (predefinita, disattivabile), progetti e preferenze passano tra i tuoi dispositivi tramite il database privato CloudKit del tuo account iCloud — mai dai nostri server. Senza iCloud restano sul tuo iPhone, iPad o Mac."
privacyUpdatedAt: "14 ottobre 2026"
privacyUrl: "/progetti/netcalc/privacy/"
---

## Cos'è NetCalc Pro

NetCalc Pro calcola il piano di indirizzamento di una rete, genera i comandi per configurare router e switch, offre strumenti di analisi per wildcard e ACL, disegna lo schema di topologia e controlla che tutto torni prima di accendere il laboratorio. È pensata per chi studia reti (preparazione CCNA) e per chi le configura ogni giorno.

## Funzionalità principali

- **Calcolatrice IPv4**: quattro modi di inserire l'indirizzo, vista binaria a colori interattiva con spostamento del confine, cronologia dei calcoli recenti e spiegazione dettagliata passo-passo *"Come si calcola"* con algebra booleana (AND per la rete, wildcard e OR per il broadcast).
- **Calcolatrice IPv6**: compressione RFC 5952, scomposizione prefissi, subnetting ed EUI-64 da indirizzo MAC.
- **Strumenti di Rete Avanzati**:
  - **Summary**: aggregazione rotte/supernetting con bit comuni, indirizzi extra e comandi Cisco (route statica, Null0, OSPF area range, EIGRP summary).
  - **Intervallo → CIDR**: scomposizione di range arbitrari nei blocchi minimi con righe ACL pronte.
  - **Wildcard e ACL**: analisi di qualsiasi wildcard (anche non contigua) e simulatore di Access List su pacchetto di prova con test riga per riga.
  - **Confronta Reti**: verifica "stessa subnet?" per diagnosticare ping asimmetrici, rilevamento sovrapposizioni e simulatore Longest Prefix Match.
- **Subnetting e VLSM**: blocchi uguali o su misura dal numero di host con ordinamento best-fit descending, mappa proporzionale con zoom automatico e creazione assistita di router interconnessi (in catena, a stella o a maglia con reti di transito /30 o /31 e OSPF).
- **Configurazioni Cisco IOS Complete**: comandi commentati per router e switch con interfacce IPv4/IPv6, OSPFv2, OSPFv3, Router-on-a-Stick dot1Q, HSRP, IP helper-address (DHCP relay), Spanning Tree (PVST+, Rapid-PVST, PortFast, BPDU Guard), EtherChannel (LACP/PAgP), Port Security (sticky MAC, violation modes), DHCP, ACL e NAT/PAT.
- **Importazione e Confronto Running-Config (Config Diff)**: importa configurazioni reali o confrontale blocco per blocco con il modello di progetto, con copia istantanea dei soli comandi mancanti.
- **Schema di Rete (Topologia)**: diagramma grafico vettoriale generato automaticamente dagli indirizzi e dai link punto-punto, ingrandibile a schermo e incluso nei report PDF.
- **Verifica del Laboratorio (Network Linter)**: 15 regole diagnostiche per scovare subnet sovrapposte, IP duplicati, next-hop irraggiungibili, OSPFv3 senza router-id, sub-interfacce errate, HSRP disallineati e port security su trunk.
- **Didattica ed Esercizi**: quiz interattivo di subnetting a 9 tipologie con 3 difficoltà, correzione spiegata con numeri reali, punteggio e serie vincente (streak); guida alle reti in 21 capitoli e glossario con oltre 100 voci.
- **Widget e Integrazione di Sistema**: widget interattivo *"Esercizio del Giorno"* con pulsante "Mostra la risposta", tabella prefissi CIDR, controlli per il Centro di Controllo (iOS 18 e macOS 26) e link `netcalc://`.
- **Esporta e Condividi**: report in PDF vettoriali con CoreGraphics/CoreText (inclusa tavola grafica della topologia), tabelle CSV e script di testo TXT.
- **Sincronizzazione iCloud Privata**: progetti, apparati e preferenze sempre sincronizzati via CloudKit privato tra iPhone, iPad e Mac, con fallback locale.
- **Nessun abbonamento**: gratuita, senza pubblicità e senza acquisti in-app.

Cisco e Cisco IOS sono marchi o marchi registrati di Cisco Systems, Inc. e/o delle sue affiliate negli Stati Uniti e in altri Paesi. NetCalc Pro genera comandi nella sintassi di Cisco IOS; non è sviluppata, sponsorizzata né approvata da Cisco e non è affiliata a Cisco. Gli altri marchi citati appartengono ai rispettivi proprietari.

## Piattaforme

Disponibile per **iPhone** e **iPad** con iOS/iPadOS 17 o successivi e per **Mac** con macOS 14 o successivi: un'unica app gratuita per tutti i tuoi dispositivi.
