---
title: "Server eD2k e rete Kad"
description: "La rete eD2k in OmniPeer: elenco dei server, aggiornamento da server.met, connessione, e la rete Kad con stato, nodi, bootstrap da un nodo noto o da nodes.dat."
project: "omnipeer"
order: 5
section: "Reti"
---

La rete eD2k ha due parti che OmniPeer usa insieme: i **server**, a cui ci si collega uno alla volta per cercare file e trovare fonti, e **Kad**, una rete senza server in cui ogni client è un nodo. Un download eD2k trova fonti da entrambe.

## Server eD2k

Apri **Server eD2k** nella barra laterale. Sotto il nome della voce c'è lo stato: «Connesso · nome del server», «Connessione in corso…» o «Non connesso».

La tabella dei server ha le colonne **Stato**, **Nome Server**, **Indirizzo IP:Porta**, **Ping**, **Utenti Online**, **File Indicizzati** e **Descrizione**. Il campo di ricerca della barra degli strumenti filtra l'elenco.

- **Connettersi**: seleziona un server e premi **Connetti al Selezionato**, oppure usa **Connetti a questo server** nel menu contestuale. Si è connessi a un solo server alla volta. Se il server non risponde entro 20 secondi, il tentativo si annulla.
- **Disconnettersi**: **Disconnetti**.
- **Togliere un server**: menu contestuale › **Rimuovi dalla lista**.
- **Aggiungere un server a mano**: **Aggiungi Server**, poi nome, indirizzo IP o nome host e porta TCP.

### Aggiornare l'elenco

Nel campo **URL server.met** c'è l'indirizzo predefinito `https://upd.emule-security.org/server.met`. **Aggiorna server.met** scarica il file e aggiunge i server all'elenco. Puoi scrivere un altro indirizzo http(s) di un file `server.met` o un link `ed2k://|serverlist|…|/`. Se l'aggiornamento non riesce, un avviso dice perché.

Al primo avvio, con l'elenco vuoto, OmniPeer scarica da solo il `server.met` predefinito.

## Rete Kad

Apri **Rete Kad** nella barra laterale. In alto il pulsante **Connetti a Kad** (o **Disconnetti**) accende e spegne Kad: la scelta è la stessa di **Abilita Rete Kademlia** nelle [Impostazioni](/progetti/omnipeer/docs/impostazioni) e riavvia il motore.

La pagina mostra:

- **Stato Connessione**: Disconnesso, Connessione in corso..., Connesso (Firewalled / LowID) se la porta è chiusa, Connesso (Open / HighID) se è aperta;
- **Nodi Attivi**: quanti nodi Kad conosce OmniPeer;
- **Porta UDP Kad**: la porta in uso;
- **Indirizzo IP Pubblico**: noto solo con un server eD2k connesso e la porta aperta.

Con la porta chiusa Kad funziona lo stesso, ma alcune fonti non possono raggiungerti. Per aprirla vedi [Porte e router](/progetti/omnipeer/docs/porte-e-router); il riquadro **Porte sul router** è in fondo a questa pagina.

### Bootstrap

Per entrare in Kad servono dei nodi iniziali. OmniPeer salva quelli che conosce e al riavvio li riusa; se sono pochi carica un file `nodes.dat`. Nel riquadro **Inizializzazione (Bootstrap Kad)** puoi farlo anche a mano:

- **Bootstrap da nodo noto**: scrivi l'IP e la porta UDP di un client Kad e premi **Bootstrap**. I contatti arrivano nei secondi successivi.
- **Aggiorna nodi da URL (nodes.dat)**: l'indirizzo predefinito è `https://upd.emule-security.org/nodes.dat`; **Scarica** carica i contatti e dice quanti ne ha trovati.

## DHT BitTorrent

La voce **DHT BitTorrent** della barra laterale non apre una pagina: mostra quanti nodi DHT conosce OmniPeer, o «Spenta» se la DHT è disattivata nelle Impostazioni. La DHT permette di scaricare dai link magnet senza tracker; lo scambio di peer (PEX) fa conoscere altri peer dai peer già connessi.
