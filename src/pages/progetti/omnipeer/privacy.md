---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - OmniPeer"
description: "Informativa sulla privacy di OmniPeer per Mac: nessun account e nessun dato allo sviluppatore, cosa vedono le reti eD2k, Kad e BitTorrent e cosa resta sul Mac."
---

Ultimo aggiornamento: 11 novembre 2026

Questa informativa descrive come **OmniPeer**, client per le reti eD2k, Kad e BitTorrent per macOS, tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono usati strumenti di analytics, SDK pubblicitari né tracciamento
- Lo sviluppatore non riceve alcun dato dall'app
- Per funzionare, OmniPeer si collega alle reti peer-to-peer: il tuo indirizzo IP è visibile agli altri partecipanti, come in ogni client P2P

## Dati che restano sul Mac

- le preferenze dell'app (cartella di download, porte, limiti di velocità, reti attive, tema, lingua)
- l'elenco dei trasferimenti e il loro avanzamento, e l'elenco dei server eD2k, nella cartella `~/Library/Application Support/OmniPeer`
- i file scaricati, nella cartella scelta dall'utente (predefinita: Download)

Le notifiche di download completato sono generate sul Mac e non passano da alcun server.

## Dati che escono dal Mac

OmniPeer usa reti decentralizzate gestite da terzi, su cui lo sviluppatore non ha alcun controllo:

- **Reti P2P (eD2k, Kad, BitTorrent, DHT, tracker)**: il tuo indirizzo IP, le porte in uso e gli identificativi (hash) dei file che scarichi o condividi sono visibili ai server eD2k, ai nodi Kad e DHT, ai tracker e agli altri peer. Le parti dei file già scaricate vengono condivise con gli altri peer finché il trasferimento resta nell'elenco.
- **Ricerca**: il testo che cerchi viene inviato ai server eD2k connessi, ai nodi della rete Kad e, per la ricerca BitTorrent, al servizio esterno apibay.org.
- **Liste di server e nodi**: quando le aggiorni, OmniPeer scarica i file `server.met` e `nodes.dat` dagli indirizzi indicati nell'app (predefinito: upd.emule-security.org).
- **Aggiornamenti**: con il controllo automatico attivo, OmniPeer scarica una volta al giorno da GitHub (raw.githubusercontent.com) l'elenco delle versioni pubblicate; con «Controlla aggiornamenti…» lo fa quando lo chiedi tu. Se installi una versione nuova, il file dell'app arriva da GitHub. GitHub vede il tuo indirizzo IP e la versione di OmniPeer; nessun altro dato del Mac viene inviato. Il controllo automatico si spegne in Impostazioni › Generale › Aggiornamenti.
- **PCP, NAT-PMP e UPnP**: se attivo, l'app chiede al router della rete locale di aprire le porte indicate nelle Impostazioni e di comunicarle il suo indirizzo esterno, che resta sul Mac.

Questi soggetti trattano i dati secondo le proprie regole. L'app e il suo motore interno comunicano tra loro solo sul Mac (indirizzo 127.0.0.1).

## Raccolta dei dati da parte dello sviluppatore

Lo sviluppatore non raccoglie, non riceve, non vende e non condivide dati dell'utente.

## Uso responsabile

I contenuti che scarichi e condividi sono sotto la tua responsabilità: usa OmniPeer solo per file che hai il diritto di scaricare e distribuire.

## Cancellazione dei dati

Per cancellare tutti i dati dell'app: elimina i trasferimenti dall'elenco, chiudi OmniPeer ed elimina la cartella `~/Library/Application Support/OmniPeer` e le preferenze `com.dimpemekug.omnipeer`. I file scaricati restano nella loro cartella finché non li elimini.

## Modifiche

Eventuali modifiche a questa informativa saranno pubblicate in questa pagina con la nuova data.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
