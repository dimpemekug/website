---
title: "Torrent sicuri su Mac nel 2026: file falsi, malware e cosa rischi davvero"
seoTitle: "Torrent sicuri su Mac: file falsi, malware e privacy"
seoDescription: "Come usare BitTorrent sul Mac senza brutte sorprese: chi vede il tuo IP, cosa dice la legge italiana e come riconoscere file falsi e app craccate."
description: BitTorrent è uno strumento legittimo, ma chi lo usa sul Mac incontra tre rischi concreti. Cosa vedono gli altri peer, cosa prevede la legge italiana e come riconoscere file falsi e app craccate prima di aprirli.
pubDatetime: 2026-11-12T08:00:00Z
related:
  - passkey-addio-password-2026
  - aprire-rar-protetto-mac
  - wifi-8-router-affidabilita-2026
relatedProjects:
  - omnipeer
tags:
  - cybersecurity
  - privacy
  - macos
  - networking
draft: false
---

BitTorrent non è sinonimo di pirateria: lo usano le distribuzioni Linux per far circolare le immagini di installazione, l'Internet Archive per le sue raccolte, chi deve passare file grandi senza un server. Il protocollo, però, ha regole che conviene conoscere prima di aprire il primo link magnet. Il tuo indirizzo IP è visibile a tutti, mentre scarichi stai anche condividendo, e una parte dei file in circolazione non è quello che dice di essere. Sul Mac il pericolo maggiore ha un nome preciso: le app craccate.

<figure>
  <img
    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80"
    alt="Pannello di rete con porte numerate e cavi Ethernet blu e grigi collegati"
  />
  <figcaption class="text-center">
    In una rete peer-to-peer ogni computer è un nodo raggiungibile, e quindi visibile.
  </figcaption>
</figure>

## Cosa vedono gli altri mentre scarichi

Un torrent non arriva da un server: arriva a pezzi da altri computer, lo *swarm*, e i pezzi che hai già scaricato li mandi a tua volta a chi ne ha bisogno. Per collegarsi a te, gli altri peer devono conoscere il tuo indirizzo IP, e lo trovano tramite tracker, DHT o scambio di peer (PEX). Chiunque entri nello stesso swarm vede quindi gli indirizzi di tutti i partecipanti, compresi i sistemi che le società di monitoraggio usano per raccogliere gli IP di chi condivide opere protette.

La cifratura del protocollo, che molti client offrono, rende il traffico meno riconoscibile per l'operatore, ma non nasconde l'indirizzo agli altri peer: per scambiarsi dati, due computer devono comunque sapere dove trovarsi.

## Cosa dice la legge in Italia

Scaricare un film, un disco o un programma tutelato senza averne il diritto è un illecito amministrativo: l'articolo 174-ter della legge sul diritto d'autore (633/1941), modificato dalla legge 93 del 14 luglio 2023, prevede una sanzione di 154 euro, che arriva fino a 5.000 euro in caso di recidiva o di fatti gravi per numero di opere o di copie. Non è una norma solo sulla carta: nel febbraio 2026 la Guardia di Finanza ha sanzionato circa 120 utenti di abbonamenti pirata in tutta Italia.

Con BitTorrent c'è un aspetto in più. Mentre scarichi metti i pezzi del file a disposizione degli altri, e mettere un'opera protetta a disposizione del pubblico su una rete telematica rientra nell'articolo 171 della stessa legge, che è un reato, punito con una multa da 51 a 2.065 euro. Non è una consulenza legale, ma la conclusione pratica è semplice: con un client P2P si scaricano solo contenuti che si ha il diritto di scaricare **e** di condividere.

Quelli leciti non mancano: distribuzioni Linux come Debian, che pubblicano i torrent ufficiali delle immagini di installazione, le raccolte dell'Internet Archive, opere di pubblico dominio o con licenze Creative Commons, file che chi li ha creati ha scelto di distribuire così.

## Come riconoscere un file falso

Anche partendo da un contenuto legittimo, nelle ricerche P2P compaiono copie falsificate: stesso nome, contenuto diverso. I segnali da guardare prima di scaricare sono pochi e ricorrenti.

1. **Un'estensione nascosta dietro un'altra.** `film.mp4.exe` o `documento.pdf.app` sono programmi travestiti. Sul Mac, attiva **Finder › Impostazioni › Avanzate › Mostra tutte le estensioni dei nomi file**.
2. **Il tipo sbagliato per il contenuto.** Un video o un disco non hanno bisogno di un'immagine disco (`.dmg`), di un pacchetto (`.pkg`) o di un'app per essere visti o ascoltati.
3. **Dimensioni che non tornano.** Un film in alta definizione da 20 MB, o un'immagine di sistema molto più piccola del normale, non sono quello che promettono.
4. **Archivi con password o «codec» da installare.** La password «da chiedere su un sito» e il lettore speciale da scaricare sono i trucchi più vecchi per farti installare qualcos'altro.
5. **Uno swarm che non convince.** Pochissime fonti per un file che dovrebbe essere diffusissimo sono un indizio; molte fonti invece non sono una garanzia, solo un segnale in meno di allarme.

## Il rischio più grande sul Mac: le app craccate

I file falsi si riconoscono, le app craccate sono più insidiose perché la vittima le installa volontariamente. Un'analisi di Gen Digital del 31 marzo 2026 racconta che, in sole 48 ore di osservazione di una singola ondata di app craccate, i suoi sistemi hanno bloccato circa 108.000 tentativi di avvio sui Mac. Dentro c'erano minatori di criptovalute, programmi che rubano password, cookie e portafogli (*infostealer*, come AMOS e MacSync, documentati da altri ricercatori nel 2026) e backdoor che si riattivano a ogni riavvio.

Il trucco è quasi sempre lo stesso: le istruzioni allegate chiedono di aggirare le difese di macOS. Da macOS 15 Sequoia non basta più il clic con il tasto Control per aprire un'app non verificata: bisogna passare da **Impostazioni di Sistema › Privacy e sicurezza › Apri comunque**. Se una guida ti chiede di farlo, di incollare un comando nel Terminale o di disattivare la protezione dell'integrità di sistema (SIP), il problema non è il Mac che fa i capricci: è la guida.

Se hai già installato qualcosa del genere, cambia subito le password importanti partendo dall'email, e valuta di passare alle [passkey](/posts/passkey-addio-password-2026/), che un infostealer non può copiare come copierebbe una password salvata.

## Come scaricare con meno rischi

Le precauzioni utili sono poche e valgono per qualsiasi client.

1. **Parti dalla fonte ufficiale.** Prendi il link magnet o il file `.torrent` dal sito di chi pubblica il contenuto, non da un motore di ricerca di torrent.
2. **Guarda nome, tipo e dimensione prima di scaricare.** Sono i segnali dell'elenco sopra, e nei risultati di ricerca si vedono già.
3. **Lascia attive le protezioni di macOS.** Gatekeeper e SIP fermano molto di quello che sfugge a tutto il resto.
4. **Controlla l'impronta del file.** Molti progetti pubblicano accanto al download un codice SHA-256: se coincide, hai esattamente il file originale.

Su Mac, [OmniPeer](/progetti/omnipeer/) aiuta in particolare con il secondo punto. Nei risultati delle ricerche dà a ogni file un'etichetta (Affidabile, Normale, Sospetto Fake o Rischio Malware) in base a segnali come estensioni doppie, eseguibili con nomi da video e dimensioni incoerenti, e di partenza nasconde quelli a rischio malware; i criteri sono spiegati nella guida a [ricerca e filtro anti-spam](/progetti/omnipeer/docs/ricerca-e-filtro-anti-spam/). È una stima basata su nomi e numeri, non un antivirus: non apre i file. L'app è gratuita, senza pubblicità né acquisti in-app, e richiede un Mac con chip Apple e macOS 14 o successivo.

> **Suggerimento:** per controllare l'impronta di un file scaricato apri il Terminale e scrivi `shasum -a 256 ` seguito dal percorso del file (puoi trascinarlo nella finestra). Confronta il risultato con quello pubblicato dal progetto: basta un carattere diverso per sapere che il file non è l'originale.

## Cosa tenere a mente

BitTorrent resta uno dei modi più efficienti per distribuire file grandi, e per molti progetti aperti è il canale principale. I rischi veri non stanno nel protocollo ma in quello che ci passa dentro: contenuti che non si ha il diritto di condividere, file travestiti, app craccate che chiedono di spegnere le difese del sistema. Chi parte da fonti ufficiali e guarda cosa scarica prima di aprirlo li evita quasi tutti.
