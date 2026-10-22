---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - rQuake"
description: "Informativa completa sulla privacy dell'app rQuake: quali dati invia alle fonti sismologiche, perché posizione e luoghi salvati restano sul dispositivo e cosa non viene raccolto."
---

Ultimo aggiornamento: 20 ottobre 2026

Questa Informativa sulla Privacy descrive come **rQuake** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non raccoglie dati personali tramite l'app
- L'app scarica i dati sui terremoti dai servizi pubblici dell'INGV (Italia) e, per il resto del mondo,
  dello USGS, dell'EMSC o del GFZ GEOFON, a scelta dell'utente

## Dati sui terremoti

Per l'Italia `rQuake` mostra i terremoti pubblicati dall'Istituto Nazionale di Geofisica e
Vulcanologia (INGV) tramite il servizio web pubblico `webservices.ingv.it`. Per ottenerli l'app invia
all'INGV i filtri scelti dall'utente (area, magnitudo minima, periodo, e nell'archivio le date della
ricerca).

Per il resto del mondo l'utente sceglie nelle impostazioni una di queste fonti:

- **U.S. Geological Survey (USGS)**, `earthquake.usgs.gov`: di solito l'app scarica gli
  elenchi pubblici degli ultimi terremoti e applica i filtri sul dispositivo, quindi allo USGS non
  invia né i filtri né la posizione. Fanno eccezione le ricerche nell'archivio e quelle intorno a un
  punto («Vicino a me» o un luogo salvato) con magnitudo minima sotto 2,5: per queste l'app invia i
  filtri e il centro della ricerca, come per l'INGV
- **Centro Sismologico Euro-Mediterraneo (EMSC)**, `www.seismicportal.eu`, e **GFZ GEOFON**,
  `geofon.gfz.de`: l'app invia i filtri scelti, come per l'INGV

All'inizio la fonte è l'EMSC se la regione del dispositivo, impostata in iOS, è in Europa o nel
Mediterraneo, altrimenti lo USGS; la regione serve anche a scegliere l'area iniziale (Italia o Mondo).
La regione viene letta sul dispositivo e non viene inviata a nessuno. I widget hanno una scelta
propria, nelle loro opzioni.

Come per qualsiasi richiesta su Internet, il server della fonte usata riceve l'indirizzo IP del
dispositivo; il trattamento da parte di ciascun ente è regolato dalla sua informativa sulla privacy.

I dati ricevuti vengono conservati in una cache locale sul dispositivo, per mostrarli subito
all'apertura successiva.

`rQuake` non è un'app ufficiale di nessuno di questi enti. I dati dell'INGV sono pubblicati con
licenza CC BY 4.0, quelli dello USGS sono di pubblico dominio; la fonte di ogni evento è indicata
nella sua scheda.

## Posizione

L'accesso alla posizione è facoltativo e viene richiesto solo se l'utente attiva «Mostra la distanza
da me», l'area «Vicino a me» o gli avvisi per i terremoti vicini.

- La posizione serve a calcolare sul dispositivo la distanza dai terremoti e l'intensità stimata con
  cui un terremoto è stato probabilmente avvertito
- Con l'area «Vicino a me», con gli avvisi per i terremoti vicini e con il comando Siri «Terremoti
  vicino a me» le coordinate, arrotondate a circa 1 km, vengono inviate come centro della ricerca,
  insieme al raggio scelto, all'INGV se la posizione è in Italia, altrimenti alla fonte scelta per il
  resto del mondo (con lo USGS solo nei casi descritti sopra)
- L'ultima posizione nota viene salvata sul dispositivo per gli avvisi in background e per Siri
- La posizione non viene mai inviata allo sviluppatore né ad altri soggetti

L'autorizzazione può essere revocata in qualsiasi momento dalle impostazioni di sistema.

## Luoghi salvati

L'utente può salvare dei luoghi (per esempio casa o lavoro) con un nome, un raggio e i loro avvisi.

- Nome e coordinate dei luoghi restano sul dispositivo; il nome non viene mai inviato
- Quando un luogo è l'area dell'elenco, ha gli avvisi attivi o è l'area di una ricerca nell'archivio,
  le sue coordinate, arrotondate a circa 1 km, vengono inviate come centro della ricerca, con gli
  stessi criteri della posizione
- L'intensità stimata nei luoghi è calcolata sul dispositivo
- Per trovare un nuovo luogo l'app usa il servizio di ricerca di Apple Maps (MapKit): il testo
  digitato viene inviato ad Apple, secondo l'informativa sulla privacy di Apple. In alternativa si può
  usare la posizione attuale, senza ricerca

## Notifiche

Gli avvisi per i nuovi terremoti sono notifiche locali: l'app controlla periodicamente in background
i servizi dell'INGV o della fonte scelta per il resto del mondo, per l'area degli avvisi e per i
luoghi salvati con gli avvisi attivi, quando iOS lo consente, e crea la notifica sul dispositivo.
Non esiste un server dello sviluppatore e non viene registrato alcun token di notifica. Le notifiche richiedono
l'autorizzazione dell'utente, revocabile dalle impostazioni di sistema.

## Siri e Comandi rapidi

I comandi «Ultimo terremoto» e «Terremoti vicino a me» funzionano con Siri, Spotlight e l'app
Comandi. Le richieste vocali sono gestite da Apple secondo la sua informativa; per rispondere `rQuake`
scarica i dati con gli stessi criteri dell'app.

## Mappa di faglie e placche

I confini delle placche (PB2002) e le faglie attive (GEM Global Active Faults) sono inclusi nell'app:
mostrarli sulla mappa non richiede alcuna connessione.

## Widget

I widget scaricano i dati dall'INGV o dalla fonte scelta nelle loro opzioni, con gli stessi criteri
dell'app, e non usano la posizione.

## Dati salvati sul dispositivo

- preferenze dell'utente (area, magnitudo, periodo, raggio, avvisi, ore di silenzio)
- luoghi salvati (nome, coordinate, raggio, avvisi)
- ultima posizione nota, se l'utente ha concesso l'accesso
- cache degli ultimi terremoti scaricati
- identificativi dei terremoti già notificati negli ultimi due giorni, per non ripetere gli avvisi

Questi dati restano sul dispositivo e vengono eliminati disinstallando l'app.

## Condivisione dei dati

`rQuake` non condivide dati dell'utente con lo sviluppatore o con terze parti per finalità di
analytics, pubblicità, profilazione o tracciamento. Quando l'utente condivide un terremoto con il
pulsante di condivisione, il collegamento viene inviato solo alla destinazione scelta dall'utente.

## Minori

L'app non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente.

## Modifiche

Eventuali modifiche a questa informativa saranno pubblicate su questa pagina, con la data di
aggiornamento.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
