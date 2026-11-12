---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - Excubia"
description: "Informativa completa sulla privacy dell'app Excubia: quali dati delle connessioni tratta il filtro, perché restano sul Mac e quando l'app si collega a internet."
---

Ultimo aggiornamento: 7 novembre 2026

Questa Informativa sulla Privacy descrive come **Excubia** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di terze parti
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non riceve alcun dato: l'app non comunica con server dello sviluppatore
- Regole, impostazioni, liste di blocco e registro delle connessioni restano sul Mac; il registro, salvo tua scelta, è tenuto solo in memoria

## Che cosa fa l'app

Excubia è un firewall per le app del Mac. Comprende un'estensione di sistema (un filtro dei
contenuti di rete di macOS) che, per ogni nuova connessione, vede quale app la apre e verso
quale destinazione, e decide se lasciarla passare o bloccarla, secondo le regole dell'utente o
chiedendoglielo con un avviso.

## Dati trattati dall'app

Per funzionare, Excubia tratta sul Mac:

- **dati delle connessioni**: l'app che apre la connessione (percorso, nome, identificativo e
  firma del codice), l'indirizzo e la porta di destinazione, il protocollo, la direzione, l'ora
  e l'esito (consentita o bloccata);
- **nomi host**: per mostrare il nome della destinazione invece del solo indirizzo, il filtro
  legge le risposte DNS che passano dal Mac, senza modificarle;
- **regole e impostazioni** create dall'utente;
- **liste di blocco** aggiunte dall'utente (elenchi di domini).

Il filtro decide solo se consentire o bloccare una connessione: **non legge, non salva e non
trasmette il contenuto delle connessioni** (pagine, messaggi, file o altro traffico).

## Dove restano i dati

- Regole, impostazioni e liste di blocco sono salvate nel contenitore protetto dell'estensione,
  sul Mac.
- Il registro delle connessioni è tenuto solo in memoria (al massimo le ultime migliaia di
  connessioni) e si cancella quando il filtro o l'app si riavviano, o con «Svuota registro».
  Se in Impostazioni scegli di conservarlo (1, 7 o 30 giorni), viene salvato anche in un
  database nel contenitore protetto dell'estensione, sul Mac: app, destinazione, porta, esito
  e ora di ogni connessione, mai il contenuto. Le connessioni più vecchie della durata scelta
  si cancellano da sole; «Svuota registro» o «Fino al riavvio» cancellano il file. Puoi
  esportarlo tu in un file CSV; Excubia non lo invia a nessuno.
  Lo stesso vale per i dati scambiati da ogni app: Excubia conta solo i byte, non legge i
  contenuti delle connessioni.
- Le preferenze dell'app (aspetto, lingua, pagina aperta, notifiche) sono salvate nelle
  preferenze locali dell'app.

Lo sviluppatore non raccoglie, non riceve, non vende e non condivide nessuno di questi dati.

## Connessioni a internet dell'app

L'app si collega a internet solo per scaricare le liste di blocco che l'utente sceglie di
aggiungere, dagli indirizzi indicati dall'utente o tra quelli suggeriti (per esempio
GitHub). Le liste remote si aggiornano una volta al giorno. In queste richieste non viene
inviato alcun dato dell'utente; come per ogni richiesta su internet, il server che ospita la
lista riceve l'indirizzo IP del Mac, secondo le proprie regole sulla privacy.

## Notifiche

Se l'utente le attiva, l'app mostra notifiche locali per le connessioni bloccate. Le
notifiche sono generate sul Mac e non passano da server dello sviluppatore.

## Esportazione delle regole

L'utente può esportare le regole in un file JSON e importarle da un file. I file vengono
scritti e letti solo nella posizione scelta dall'utente.

## Servizi di terze parti

Excubia non integra servizi di terze parti. Le uniche terze parti coinvolte sono i server
che ospitano le liste di blocco scelte dall'utente.

## Minori

L'app non raccoglie dati personali e non è rivolta in modo specifico ai minori.

## Modifiche a questa informativa

Eventuali modifiche verranno pubblicate in questa pagina, con la data di aggiornamento.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
