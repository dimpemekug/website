---
title: "Quali app del Mac si collegano a internet, e come bloccarle"
description: Ogni app installata può parlare con un server, anche quando non te ne accorgi. Come scoprire chi si collega e quanto scambia, perché il firewall di macOS non basta e come decidere app per app chi passa.
seoDescription: "Come scoprire quali app del Mac si collegano a internet, perché il firewall di macOS non le ferma e come bloccare le connessioni in uscita app per app."
pubDatetime: 2026-11-18T13:00:00Z
related:
  - torrent-sicuri-mac-2026
  - agenti-ai-mac-accesso-completo-disco-macos-27-3
  - aprire-rar-protetto-mac
relatedProjects:
  - excubia
tags:
  - macos
  - cybersecurity
  - networking
  - privacy
draft: false
---

Un editor di testo che controlla gli aggiornamenti, un'utility che manda statistiche d'uso, un programma che verifica la licenza ogni volta che lo apri, un componente installato anni fa di cui non ricordi nemmeno il nome. Sul Mac molte app si collegano a internet senza mostrarlo, e la maggior parte lo fa per ragioni innocue. Il punto è un altro: di solito non lo sai, e non hai modo di decidere. Vederlo è facile; scegliere chi passa richiede uno strumento in più.

<figure>
  <img
    src="https://images.unsplash.com/photo-1516044734145-07ca8eef8731?w=1200&q=80"
    alt="Spie verdi accese su un router con due antenne, con una decorazione natalizia sfocata in primo piano"
  />
  <figcaption class="text-center">
    Le luci del router lampeggiano anche quando non stai facendo niente: qualche app sta parlando con un server.
  </figcaption>
</figure>

## Vedere chi si collega

Il Mac ha già due strumenti per farsi un'idea.

1. **Monitoraggio Attività.** Nella scheda **Rete** trovi l'elenco dei processi con i dati inviati e ricevuti da ciascuno. Ordinando per byte ricevuti o inviati vedi subito chi scambia di più; un nome sconosciuto si cerca facilmente.
2. **Il Terminale.** Il comando `nettop` mostra le connessioni attive processo per processo, aggiornate in tempo reale, con l'indirizzo di destinazione.

Entrambi però mostrano cosa sta succedendo, non permettono di fermarlo, e non dicono nulla delle connessioni di ieri o di quelle durate un secondo.

## Perché il firewall di macOS non basta

In Impostazioni di Sistema › Rete › Firewall c'è un firewall vero, ma guarda in una sola direzione: blocca le connessioni **in entrata**, cioè i tentativi di altri computer di collegarsi al tuo Mac. Serve soprattutto sulle reti pubbliche e va tenuto attivo.

Le connessioni **in uscita**, quelle che le tue app aprono verso internet, non le controlla. Per quelle serve un firewall applicativo: un programma che si mette in mezzo, vede ogni nuova connessione e, se l'app non ha ancora una regola, chiede cosa fare. Su macOS questi programmi usano un'estensione di rete di sistema, e al primo avvio macOS chiede il permesso di installarla e di filtrare il traffico.

## Cosa è normale e cosa no

Non ogni connessione è sospetta, e bloccare tutto rende il Mac inutilizzabile. Qualche criterio aiuta.

1. **Normale.** Aggiornamenti, sincronizzazione con il cloud, verifica della licenza, mappe, meteo e tutto ciò che un'app fa per funzionare. I servizi di Apple fanno parte del sistema.
2. **Da valutare.** Statistiche d'uso, segnalazioni di errori e telemetria: spesso utili allo sviluppatore, quasi sempre bloccabili senza conseguenze.
3. **Da bloccare.** Un'app che non dovrebbe usare la rete, come un convertitore o un editor offline, e si collega di continuo; destinazioni legate a pubblicità o tracciamento; un processo che non sai cosa sia e non ha una firma riconoscibile.

Un buon firewall applicativo mostra, accanto all'avviso, chi ha firmato il programma e verso quale dominio vuole andare: due informazioni che bastano a decidere nella maggior parte dei casi.

## Gli strumenti

Per il Mac esistono diversi firewall applicativi. LuLu di Objective-See è gratuito e open source, Little Snitch è lo storico a pagamento con funzioni avanzate. [Excubia](/progetti/excubia/), gratuita e in arrivo sul Mac App Store, ferma ogni app senza regola al primo tentativo e chiede se lasciarla passare, con l'ambito (solo quel dominio o tutto) e la durata (una volta, un'ora, per sempre).

1. **Due profili.** Il profilo Standard chiede solo per le app di terze parti, una volta per app, e lascia passare il sistema e le app del Mac App Store; quello Esperto avvisa per ogni destinazione.
2. **Firma controllata.** Una regola vale solo per il codice firmato dallo stesso sviluppatore: se un'app cambia firma, Excubia lo segnala.
3. **Liste di blocco.** Pubblicità, tracciamento e malware fermati in tutte le app con elenchi aggiornati ogni giorno.
4. **Registro e dati scambiati.** Ogni decisione con il suo motivo, e quanto ha inviato e ricevuto ogni app.

Excubia funziona sui Mac con chip Apple e macOS 15 o successivo. La guida a [rispondere agli avvisi](/progetti/excubia/docs/rispondere-agli-avvisi/) spiega cosa scegliere nei casi più comuni.

> **Suggerimento:** i primi giorni con un firewall applicativo arrivano molti avvisi, perché ogni app chiede la prima volta. Se lo strumento ha una modalità di apprendimento, usala: per qualche giorno le app passano senza chiedere, poi rivedi tutte le regole in una volta, con calma.

## Cosa tenere a mente

Sapere quali app si collegano a internet è il primo passo per capire cosa succede sul proprio Mac, e spesso basta per scoprire un programma dimenticato o una telemetria inutile. Il firewall di sistema protegge dall'esterno; per le app che escono serve uno strumento che chieda e ricordi le tue scelte. Il risultato non è un Mac isolato, ma uno in cui ogni connessione ha un motivo che conosci.
