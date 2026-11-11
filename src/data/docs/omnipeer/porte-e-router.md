---
title: "Porte e router"
description: "Le porte di OmniPeer per eD2k, Kad e BitTorrent, l'apertura automatica con PCP, NAT-PMP e UPnP, cosa vogliono dire porta chiusa, doppio NAT e CGNAT."
project: "omnipeer"
order: 6
section: "Reti"
---

Le reti P2P funzionano meglio se gli altri client possono collegarsi a te. Per questo il router deve inoltrare al Mac le porte che OmniPeer usa.

## Le porte

| Porta | Valore iniziale | Uso |
|---|---|---|
| Porta TCP eD2k | 4662 | connessioni con server e client eD2k |
| Porta UDP Kad | 4672 | rete Kad |
| Porta BitTorrent | 6881 | connessioni BitTorrent e DHT |

Si cambiano in **Impostazioni › Connessione & Porte**. Le nuove porte valgono dopo **Riavvia motore**: vedi [Impostazioni](/progetti/omnipeer/docs/impostazioni).

## Apertura automatica

Con **Usa UPnP, NAT-PMP o PCP per aprire automaticamente le porte sul router** attivo (lo è all'inizio), OmniPeer chiede al router di aprire le porte. Prova PCP, NAT-PMP e UPnP e usa il primo che il router accetta.

Il risultato è nel riquadro **Porte sul router**, in fondo alla pagina **Rete Kad**. Per ogni porta c'è uno stato:

- **Aperta con PCP / NAT-PMP / UPnP**;
- **Apertura in corso…**;
- **Già usata sul router da un altro dispositivo**: un altro computer della rete usa la stessa porta; scegline un'altra nelle Impostazioni;
- **Non aperta**, con il motivo quando il router lo comunica.

Sotto compare anche l'indirizzo esterno del router, quando il router lo comunica. Resta sul Mac.

Se l'apertura automatica è spenta, il riquadro lo dice: le porte vanno aperte a mano sul router.

## Quando le porte non si aprono

Il riquadro mostra un avviso nei casi più comuni:

- **Il router non risponde a PCP, NAT-PMP né UPnP**: attiva UPnP nelle impostazioni del router, o inoltra le porte a mano verso il Mac. OmniPeer riprova da solo.
- **Doppio NAT**: il router è collegato a un altro router (per esempio quello dell'operatore). Le porte vanno aperte anche su quello, oppure va messo in modalità bridge.
- **CGNAT**: l'operatore condivide lo stesso indirizzo pubblico tra più clienti. Aprire le porte sul router non basta: bisogna chiedere un IP pubblico all'operatore.

Anche con le porte chiuse OmniPeer scarica: su eD2k e Kad sarai «LowID» e alcune fonti non potranno raggiungerti, su BitTorrent ti collegherai solo ai peer che accettano connessioni.

## Firewall di macOS

Al primo avvio macOS può chiedere se permettere a OmniPeer di ricevere connessioni in entrata. Se hai rifiutato, puoi cambiare la scelta in **Impostazioni di Sistema › Rete › Firewall › Opzioni**.
