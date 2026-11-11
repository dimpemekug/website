---
title: "Aggiungere un download"
description: "Come aggiungere un download in OmniPeer: link magnet ed ed2k, file .torrent, appunti, browser e trascinamento, con il nome e la cartella di destinazione."
project: "omnipeer"
order: 2
section: "Iniziare"
---

OmniPeer accetta tre tipi di sorgente e riconosce da solo la rete:

| Sorgente | Esempio | Rete |
|---|---|---|
| Link magnet | `magnet:?xt=urn:btih:…` | BitTorrent |
| Link ed2k | `ed2k://\|file\|nome\|dimensione\|hash\|/` | eD2k e Kad |
| File `.torrent` | un file sul Mac | BitTorrent |

Nei link magnet l'hash può essere in esadecimale (40 caratteri) o in Base32 (32 caratteri). Nei link ed2k l'hash MD4 deve avere 32 caratteri esadecimali; se il link contiene anche l'hash AICH (`h=…`) o delle fonti (`sources,IP:porta`), OmniPeer li usa.

## Il pannello Aggiungi

Si apre con **File › Aggiungi Link o Torrent…** (<kbd>⌘</kbd> <kbd>N</kbd>) o con il pulsante **Aggiungi** nella barra degli strumenti.

1. Nel campo **Link o URI** incolla il link, oppure usa **Incolla dagli Appunti**. Se negli appunti c'è già un link magnet o ed2k, il campo è compilato all'apertura.
2. Quando il link è valido compare **Link Riconosciuto!** con il nome, la dimensione (per i magnet senza dimensione: «Da metadati swarm») e l'inizio dell'hash. Se il link non è valido, sotto il campo c'è il motivo.
3. In **Nome File** puoi cambiare il nome proposto.
4. **Salva in** mostra la cartella di download delle Impostazioni; con **Scegli...** ne scegli un'altra solo per questo file.
5. **Aggiungi Download** (<kbd>↩</kbd>) avvia il trasferimento; **Annulla** (<kbd>esc</kbd>) chiude il pannello.

Per un file `.torrent` usa **Sfoglia File .torrent...** nello stesso pannello.

Un link già presente nell'elenco non viene aggiunto due volte: OmniPeer seleziona il trasferimento esistente.

## Altri modi

- **Dal browser**: OmniPeer si registra per i link `magnet:` e `ed2k://`. Un clic su uno di questi link in una pagina web apre OmniPeer e aggiunge il download.
- **Incolla nell'elenco**: con l'elenco dei trasferimenti attivo, <kbd>⌘</kbd> <kbd>V</kbd> aggiunge il link negli appunti senza aprire il pannello, nella cartella di download predefinita.
- **Trascina**: trascina un file `.torrent` sull'elenco dei trasferimenti.
- **Dal Finder e dal Dock**: fai doppio clic su un file `.torrent` nel Finder, o trascinalo sull'icona di OmniPeer nel Dock. Il download compare nella finestra già aperta; se OmniPeer è chiusa, si apre e lo aggiunge. Se un'altra app apre i `.torrent` con il doppio clic, scegli OmniPeer con **Archivio › Ottieni informazioni › Apri con › Modifica tutto**.
- **Elenco vuoto**: finché non ci sono trasferimenti, la finestra mostra i pulsanti **Incolla link** e **Scegli file .torrent…**; se negli appunti c'è un link, compare un riquadro con il suo nome e il pulsante **Aggiungi**.
- **Dalla ricerca**: vedi [Ricerca e filtro anti-spam](/progetti/omnipeer/docs/ricerca-e-filtro-anti-spam).

## Dopo l'aggiunta

Il trasferimento compare in cima all'elenco. Finché i peer non mandano i metadati (succede con i link magnet), dimensione e pezzi non sono noti e la riga dice «In attesa dei metadati…». Vedi [Trasferimenti e barra a blocchi](/progetti/omnipeer/docs/trasferimenti-e-barra-a-blocchi).
