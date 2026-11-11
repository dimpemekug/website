---
title: "Impostazioni"
description: "Tutte le impostazioni di OmniPeer: tema e lingua, cartella di download, stop del Mac e notifiche, porte, apertura automatica, limiti di velocità e reti P2P."
project: "omnipeer"
order: 8
section: "Riferimento"
---

Le impostazioni si aprono con **OmniPeer › Impostazioni…** (<kbd>⌘</kbd> <kbd>,</kbd>) o dal riquadro della [barra dei menu](/progetti/omnipeer/docs/barra-dei-menu). Hanno quattro schede.

## Generale

| Impostazione | Valore iniziale | Note |
|---|---|---|
| Tema | Sistema | Sistema, Chiaro o Scuro |
| Lingua | Sistema | italiano o inglese; si applica riaprendo l'app, con **Riapri ora** |
| Cartella di Download | Download | **Scegli...** apre il Finder |
| Previeni lo stop/sleep del Mac durante i download attivi | attiva | il Mac non va in stop finché c'è un download in corso |
| Mostra notifica di sistema al completamento di un file | attiva | la notifica è generata sul Mac |

## Connessione & Porte

| Impostazione | Valore iniziale |
|---|---|
| Porta TCP eD2k | 4662 |
| Porta UDP Kad | 4672 |
| Porta BitTorrent | 6881 |
| Usa UPnP, NAT-PMP o PCP per aprire automaticamente le porte sul router | attiva |

Vedi [Porte e router](/progetti/omnipeer/docs/porte-e-router).

## Banda

**Velocità Massima Download** e **Velocità Massima Upload**, in KB/s; 0 vuol dire nessun limite (il valore iniziale). Il limite di download vale solo per BitTorrent: la rete eD2k non ne prevede uno. Il limite di upload vale per entrambe. I limiti si applicano subito.

## Reti P2P

| Impostazione | Valore iniziale |
|---|---|
| Abilita Rete Kademlia (Kad DHT) | attiva |
| Abilita BitTorrent DHT (Trackerless network) | attiva |
| Abilita Scambio Peer (PEX) | attiva |
| Preferisci connessioni cifrate (Anti-Throttling ISP) | attiva |

Le connessioni cifrate usano la cifratura del protocollo BitTorrent (MSE/PE): rendono più difficile per l'operatore riconoscere e rallentare il traffico, ma non nascondono il tuo indirizzo IP agli altri peer.

## Riavviare il motore

Cartella di download, porte, apertura automatica e reti valgono dall'avvio del motore `omnipeerd`. Quando ne cambi una, in fondo alla finestra compare la barra «Alcune modifiche si applicano riavviando il motore P2P» con il pulsante **Riavvia motore**. I trasferimenti riprendono da soli dopo il riavvio. I limiti di velocità, il tema e le notifiche non richiedono il riavvio.

## Dove sono i dati

- Preferenze: nel dominio `com.dimpemekug.omnipeer` delle preferenze di macOS.
- Trasferimenti, server e stato di Kad: nella cartella `~/Library/Application Support/OmniPeer`.
- File scaricati: nella cartella di download scelta.

Per cancellare tutto, elimina i trasferimenti dall'elenco, chiudi OmniPeer ed elimina la cartella e le preferenze. I file scaricati restano dove sono.
