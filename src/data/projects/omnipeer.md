---
title: "OmniPeer"
seoTitle: "OmniPeer: client eD2k, Kad e BitTorrent per Mac"
applicationCategory: "UtilitiesApplication"
seoDescription: "Client eD2k, Kad e BitTorrent per Mac: link magnet ed ed2k, barra a blocchi, ricerca su più reti. Gratuita e senza pubblicità."
description: "Client per Mac che unisce le reti eD2k, Kad e BitTorrent: incolli un link magnet o ed2k, scegli dove salvare e segui il download pezzo per pezzo, con ricerca su più reti e filtro anti-spam. Gratuita, senza pubblicità né acquisti in-app."
pubDatetime: 2026-11-11T00:00:00+01:00
draft: false
tags: ["macOS", "rete", "P2P", "privacy"]
download: "https://github.com/dimpemekug/OmniPeer-releases/releases/latest"
privacyDataTypes: "le preferenze dell'app, l'elenco dei trasferimenti e dei server eD2k, i file scaricati e, per far funzionare le reti P2P, l'indirizzo IP e gli identificativi dei file visibili agli altri partecipanti"
privacyStorageNote: "Preferenze, trasferimenti e file scaricati restano sul Mac e nessun dato arriva allo sviluppatore. Come ogni client P2P, OmniPeer rende visibile il tuo indirizzo IP a peer, server e nodi delle reti; il testo delle ricerche va ai server eD2k, ai nodi Kad e, per BitTorrent, ad apibay.org."
privacyUpdatedAt: "11 novembre 2026"
privacyUrl: "/progetti/omnipeer/privacy/"
---

## Cos'è OmniPeer

OmniPeer è un client peer-to-peer per Mac che mette insieme la rete **eD2k** (server e Kad) e la rete **BitTorrent** in un'unica finestra. Incolli un link magnet o ed2k, oppure scegli un file `.torrent`, e OmniPeer riconosce da solo la rete. Il download si segue pezzo per pezzo su una barra a blocchi: parti scaricate, in arrivo, mancanti e senza fonti. Il lavoro sulle reti lo fa un motore separato, `omnipeerd`, incluso nell'app, con cui l'interfaccia parla solo sul Mac.

## Funzionalità principali

- **Un link, qualsiasi rete**: link magnet, link ed2k e file `.torrent`, riconosciuti da soli; i link aperti dal browser arrivano direttamente nell'app, i file `.torrent` si trascinano nella finestra, e se negli appunti c'è un link OmniPeer lo propone
- **Barra a blocchi**: nei dettagli di ogni trasferimento, i pezzi completati, in arrivo, mancanti e quelli che nessuna fonte ha
- **Dettagli del trasferimento**: griglia di tutti i pezzi, statistiche, peer connessi con il loro client e la loro velocità; per eD2k gli hash MD4 e AICH, da copiare con un clic
- **Elenco ordinato**: sezioni per stato (in download, in condivisione, completati, in pausa), filtro per rete, pausa e ripresa di uno o di tutti i trasferimenti
- **Ricerca su più reti**: un solo campo cerca sui server eD2k, su Kad e su BitTorrent, con filtri per tipo, dimensione e numero di fonti
- **Filtro anti-spam**: nasconde i risultati con segni di file falsi o pericolosi (estensioni doppie, eseguibili con nomi da video, video troppo piccoli) o li mostra con un'etichetta di rischio
- **Server eD2k e rete Kad**: elenco dei server con ping, utenti e file indicizzati, aggiornato da un file `server.met`; stato di Kad, numero di nodi, avvio da un nodo noto o da `nodes.dat`
- **Porte sul router**: aperte da sole con PCP, NAT-PMP o UPnP, con lo stato di ogni porta e gli avvisi per doppio NAT e CGNAT
- **BitTorrent senza tracker**: DHT e scambio di peer (PEX), connessioni cifrate
- **Barra dei menu**: velocità, download attivi, pausa di tutto e limiti di velocità a portata di clic
- **Fatto per il Mac**: notifica a download completato, Mac che non va in stop mentre scarichi, tema chiaro o scuro, interfaccia in italiano e in inglese
- **Privata**: nessun account e nessun dato inviato allo sviluppatore
- **Nessun abbonamento**: gratuita, senza pubblicità e senza acquisti in-app

Come ogni client P2P, OmniPeer condivide con gli altri peer le parti dei file che scarichi: usalo solo per contenuti che hai il diritto di scaricare e condividere.

## Piattaforme

**Mac** con chip Apple (Apple silicon) e macOS 14 Sonoma o successivo; non funziona sui Mac con processore Intel. OmniPeer non è sul Mac App Store: si scarica come immagine disco (DMG) firmata con Developer ID e notarizzata da Apple dalla [pagina delle release su GitHub](https://github.com/dimpemekug/OmniPeer-releases/releases/latest).
