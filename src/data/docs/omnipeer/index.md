---
title: "Introduzione a OmniPeer"
description: "Cos'è OmniPeer, il client eD2k, Kad e BitTorrent per Mac: come è fatta la finestra, cosa succede al primo avvio e dove trovare il resto della guida."
project: "omnipeer"
order: 1
section: "Iniziare"
---

OmniPeer è un client peer-to-peer per Mac che usa due reti nella stessa finestra: **eD2k** (con i suoi server e con la rete Kad) e **BitTorrent** (con tracker, DHT e scambio di peer). L'app è divisa in due parti: l'interfaccia, scritta in SwiftUI, e un motore, `omnipeerd`, che si collega alle reti. Il motore è incluso nell'app, parte e si chiude con lei e parla con l'interfaccia solo sul Mac, all'indirizzo `127.0.0.1`.

## La finestra

- **Barra laterale**: la sezione **Trasferimenti** (Tutti, In download, In condivisione, Completati, In pausa), con il numero di elementi accanto a ciascuna voce; la sezione **Reti**, con **Server eD2k**, **Rete Kad** e **DHT BitTorrent** e il loro stato scritto sotto il nome; la sezione **Strumenti** con **Cerca file**.
- **Barra degli strumenti**: il filtro per rete (Tutte le reti, BitTorrent, eD2k), il pulsante **Aggiungi**, la pausa o ripresa di tutti i trasferimenti e il pulsante **Dettagli**. Il campo di ricerca filtra l'elenco della sezione aperta; in **Cerca file** fa partire la ricerca sulle reti.
- **Barra di stato**, in fondo: velocità totale in download e in upload, stato di eD2k, Kad e DHT e gli eventuali limiti di velocità.

## Al primo avvio

- macOS chiede se permettere le connessioni in entrata (firewall) e le notifiche. Senza connessioni in entrata OmniPeer scarica lo stesso, ma meno fonti possono raggiungerti.
- Se l'elenco dei server eD2k è vuoto, OmniPeer scarica da solo il file `server.met` da `upd.emule-security.org`. Il collegamento a un server lo scegli tu: vedi [Server eD2k e rete Kad](/progetti/omnipeer/docs/server-ed2k-e-rete-kad).
- Kad parte da solo: riprende i contatti salvati e, se sono pochi, carica `nodes.dat`.
- Se l'apertura automatica delle porte è attiva (lo è all'inizio), OmniPeer chiede al router di aprirle. Lo stato si vede nella pagina **Rete Kad**: vedi [Porte e router](/progetti/omnipeer/docs/porte-e-router).

## Cosa trovi nella guida

- [Aggiungere un download](/progetti/omnipeer/docs/aggiungere-un-download): link magnet ed ed2k, file `.torrent`, appunti e browser
- [Trasferimenti e barra a blocchi](/progetti/omnipeer/docs/trasferimenti-e-barra-a-blocchi): elenco, stati, pezzi, dettagli e peer
- [Ricerca e filtro anti-spam](/progetti/omnipeer/docs/ricerca-e-filtro-anti-spam): cercare su eD2k, Kad e BitTorrent
- [Server eD2k e rete Kad](/progetti/omnipeer/docs/server-ed2k-e-rete-kad): elenco dei server, `server.met`, Kad e `nodes.dat`
- [Porte e router](/progetti/omnipeer/docs/porte-e-router): PCP, NAT-PMP, UPnP, porta chiusa, doppio NAT e CGNAT
- [Barra dei menu](/progetti/omnipeer/docs/barra-dei-menu), [Impostazioni](/progetti/omnipeer/docs/impostazioni) e [Scorciatoie da tastiera](/progetti/omnipeer/docs/scorciatoie)

## Requisiti

Mac con chip Apple (Apple silicon) e macOS 14 Sonoma o successivo. OmniPeer non è sul Mac App Store: si scarica come immagine disco (DMG) firmata con Developer ID e notarizzata da Apple dalla [pagina delle release su GitHub](https://github.com/dimpemekug/OmniPeer-releases/releases/latest); poi si aggiorna da sola (vedi [Impostazioni](/progetti/omnipeer/docs/impostazioni#aggiornamenti)). È gratuita, senza pubblicità né acquisti in-app, e non chiede account. L'interfaccia è in italiano e in inglese.

Come ogni client P2P, OmniPeer condivide con gli altri peer le parti dei file che scarichi e rende visibile il tuo indirizzo IP: usalo solo per contenuti che hai il diritto di scaricare e condividere. Dettagli nell'[informativa sulla privacy](/progetti/omnipeer/privacy/).
