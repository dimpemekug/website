---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - Horologe"
description: "Informativa completa sulla privacy dell'app Horologe: quali dati vengono trattati, dove sono salvati e come funziona la sincronizzazione iCloud opzionale."
---

Ultimo aggiornamento: 8 luglio 2026

Questa Informativa sulla Privacy descrive come **Horologe** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non raccoglie dati personali tramite server remoti dell'app
- La sincronizzazione iCloud, se attivata dall'utente su iOS, avviene direttamente tra il dispositivo e il proprio Account Apple e non passa dai server dello sviluppatore

## Dati trattati dall'app

L'app consente all'utente di salvare e gestire localmente informazioni relative alla propria collezione di orologi, tra cui:

- dati degli orologi inseriti dall'utente, come marca, modello, referenza, numero seriale, anno, prezzo, valuta, movimento, diametro, materiale della cassa, calibro, data di acquisto, corredo, documentazione e note
- stato dell'orologio (posseduto, venduto, in wishlist o in riparazione), con data e prezzo di vendita quando applicabile
- storico di assistenza o revisione, come data dell'intervento, tipo di servizio, note, costo e valuta, oltre all'intervallo di revisione consigliato usato per i promemoria
- un registro dei giorni in cui l'orologio è stato indossato ("Registro al polso")
- misurazioni di precisione di marcia inserite manualmente dall'utente (scarto giornaliero in secondi)
- documenti allegati dall'utente a un orologio, come garanzie, scontrini o certificati
- immagini selezionate dall'utente dalla libreria fotografica del dispositivo per copertina e galleria
- preferenze come lingua, tema, colore accento, impostazioni di testo, stato dell'onboarding e stato del blocco app e dei promemoria di revisione
- file di backup in formato ZIP o JSON generati o importati dall'utente
- file PDF generati dall'utente per esportare o condividere i dettagli di un orologio
- file CSV generati dall'utente per esportare l'elenco della propria collezione

Queste informazioni vengono salvate localmente sul dispositivo per consentire il funzionamento dell'app.

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide automaticamente dati dell'utente tramite server remoti attraverso l'app.

I dati restano normalmente nel database locale dell'app, nello storage locale per le immagini e i documenti allegati, e nelle preferenze locali del dispositivo.

Se l'utente sceglie di esportare, salvare o condividere un backup, un PDF o un file CSV, l'operazione viene avviata manualmente dall'utente tramite le funzionalità del sistema operativo. Eventuali trasferimenti successivi dipendono esclusivamente dalla destinazione scelta dall'utente.

Se l'utente attiva la sincronizzazione iCloud (vedi la sezione dedicata), un backup dei propri dati viene salvato automaticamente nel proprio spazio iCloud privato tramite Apple CloudKit: anche in questo caso lo sviluppatore non riceve né può accedere a tali dati.

## Sincronizzazione iCloud (solo iOS)

Su dispositivi iOS, Horologe offre una funzione facoltativa di sincronizzazione tramite iCloud, disattivata di default e attivabile dall'utente nelle Impostazioni dell'app.

Quando attivata:

- l'app salva una copia dei dati della collezione (equivalente al backup ZIP: orologi, storico, registro di utilizzo, misurazioni di precisione, documenti allegati e immagini) nel database privato di Apple CloudKit associato al proprio Account Apple
- la sincronizzazione avviene direttamente tra il dispositivo dell'utente e i server Apple; i dati non transitano né vengono salvati su server dello sviluppatore
- i dati sono accessibili solo dai dispositivi collegati con lo stesso Account Apple dell'utente
- la sincronizzazione può avvenire automaticamente in background dopo una modifica ai dati, all'avvio dell'app o al ritorno in primo piano, quando la funzione è attiva

L'utente può disattivare la sincronizzazione in qualsiasi momento dalle Impostazioni dell'app. Disattivarla interrompe le sincronizzazioni future ma non elimina automaticamente un'eventuale copia già presente nel proprio iCloud: per rimuoverla è possibile usare la gestione archiviazione iCloud del dispositivo (Impostazioni di sistema > nome utente > iCloud > Gestisci spazio).

## Notifiche

Horologe può inviare promemoria locali di revisione quando l'utente attiva questa funzione facoltativa nelle Impostazioni per un orologio con un intervallo di revisione impostato.

Le notifiche vengono generate e mostrate localmente sul dispositivo dal sistema operativo; non comportano alcuna trasmissione di dati a server esterni. Per attivarle, l'app richiede il permesso di sistema per l'invio di notifiche.

## Autenticazione biometrica

Horologe offre un blocco app facoltativo tramite Face ID, Touch ID o l'equivalente Android (impronta digitale o riconoscimento del volto), attivabile dall'utente nelle Impostazioni.

L'autenticazione è gestita interamente dal sistema operativo del dispositivo tramite le rispettive API biometriche. L'app non ha accesso ai dati biometrici dell'utente, non li riceve, non li salva e non li trasmette: riceve unicamente l'esito dell'autenticazione (riuscita o non riuscita) restituito dal sistema operativo.

## Permessi del dispositivo

Horologe può richiedere l'accesso a:

- foto e immagini del dispositivo, per consentire la selezione delle immagini da associare agli orologi
- file e documenti del sistema, per importare backup, allegare documenti agli orologi o salvare backup, PDF e file CSV
- notifiche, per i promemoria di revisione (facoltativo, se attivato dall'utente)
- autenticazione biometrica (Face ID, Touch ID o impronta digitale), per il blocco app (facoltativo, se attivato dall'utente)

Alla data dell'8 luglio 2026, il codice dell'app utilizza la selezione di immagini dalla libreria fotografica. Non risultano flussi applicativi attivi che usino la fotocamera per acquisire nuove foto direttamente dall'app.

Su iOS, il sistema operativo può richiedere anche la dichiarazione di un permesso di localizzazione (`NSLocationWhenInUseUsageDescription`), perché alcune librerie di sistema usate per l'accesso alla libreria foto fanno riferimento a tale permesso per gestire eventuali metadati di geolocalizzazione delle foto. Horologe non richiede né utilizza la posizione dell'utente per alcuna funzione.

## Condivisione dei dati

Horologe non condivide dati dell'utente con lo sviluppatore o con terze parti per finalità di analytics, pubblicità, profilazione o tracciamento.

Le uniche eccezioni sono: quando l'utente esporta, salva o condivide esplicitamente un file usando gli strumenti di condivisione o salvataggio della piattaforma, e la sincronizzazione automatica con il proprio Account Apple tramite iCloud, se attivata dall'utente (vedi sopra). In entrambi i casi i dati raggiungono solo la destinazione scelta o controllata dall'utente, non i server dello sviluppatore.

## Conservazione dei dati

I dati dell'app vengono salvati localmente sul dispositivo, tra cui:

- database locale SQLite per orologi, storico servizi, registro di utilizzo e misurazioni di precisione
- storage locale dell'app per immagini e documenti allegati
- preferenze locali per configurazione e impostazioni dell'interfaccia
- directory temporanee del dispositivo per alcune operazioni di esportazione

I file di backup, i PDF e i file CSV creati dall'utente vengono salvati solo nella posizione scelta dall'utente, oppure in una posizione temporanea usata per supportare le funzioni di esportazione o condivisione.

Se attivata dall'utente, una copia dei dati viene inoltre salvata nel database privato di Apple CloudKit, come descritto nella sezione "Sincronizzazione iCloud".

## Conservazione e cancellazione

I dati inseriti nell'app restano sul dispositivo finché l'utente non:

- modifica o elimina manualmente gli orologi, lo storico servizi, il registro di utilizzo, le misurazioni di precisione o i documenti allegati
- importa un backup che sostituisce i dati locali correnti
- esegue un reset del database locale
- elimina immagini o contenuti dall'app
- disinstalla l'app, nei limiti del comportamento del sistema operativo
- elimina manualmente i file di backup, i PDF o i file CSV esportati dalle proprie posizioni di archiviazione

Se la sincronizzazione iCloud è stata attivata, un'eventuale copia salvata nel proprio Account Apple resta nello spazio iCloud dell'utente anche dopo la disattivazione della funzione o la disinstallazione dell'app, finché non viene rimossa dall'utente tramite la gestione archiviazione iCloud del dispositivo.

Poiché lo sviluppatore non riceve né conserva i dati dell'app su server remoti, non può accedere, correggere o cancellare i dati locali o su iCloud dell'utente per suo conto.

## Minori

Horologe non è rivolta specificamente ai minori e non raccoglie consapevolmente dati personali di minori.

## Sicurezza

L'app si affida ai meccanismi di sicurezza forniti dal sistema operativo e dallo storage locale. Il blocco app facoltativo con Face ID, Touch ID o impronta digitale aggiunge un ulteriore livello di protezione per l'accesso ai dati sul dispositivo. Quando attiva, la sincronizzazione iCloud si affida ai meccanismi di sicurezza del proprio Account Apple.

Nessun metodo di archiviazione su dispositivo, sincronizzazione cloud o trasferimento file può essere garantito come completamente sicuro, in particolare dopo che l'utente esporta, salva o condivide un backup, un PDF o un file CSV al di fuori dell'app.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione è resa disponibile all'indirizzo pubblico della privacy policy usato in App Store Connect e Google Play Console.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
