---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - Charta"
description: "Informativa sulla privacy di Charta per Mac, iPhone e iPad: nessun account e nessun dato raccolto, documenti Markdown sul dispositivo, formule e diagrammi senza rete."
---

Ultimo aggiornamento: 10 novembre 2026

Questa Informativa sulla Privacy descrive come **Charta**, per Mac, iPhone e iPad, tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di terze parti
- Non viene effettuato alcun tracciamento dell'utente
- Charta non invia dati allo sviluppatore né a terze parti
- I documenti vengono letti, modificati e salvati interamente sul dispositivo

## Dati trattati dall'app

Charta tratta esclusivamente:

- i documenti Markdown che l'utente apre o crea: dall'app File, dal Finder, con "Apri…", o all'interno di una cartella aperta come area di lavoro
- le cartelle che l'utente sceglie di aprire come aree di lavoro, con l'elenco dei file Markdown e delle immagini che contengono
- le immagini richiamate dai documenti, per mostrarle nell'editor e nell'anteprima
- i file che l'app crea su richiesta dell'utente: note e cartelle nuove, immagini incollate o trascinate in una nota, esportazioni in HTML, PDF, Word (DOCX) ed EPUB
- le preferenze dell'app (vedi "Conservazione dei dati")

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non trasmette, non vende e non condivide dati dell'utente. Charta non comunica con server dello sviluppatore o di terze parti.

## Connessioni a Internet

Charta non contiene codice che si connette a Internet. L'unica eccezione dipende dal contenuto dei documenti dell'utente: se un documento richiama un'immagine con un indirizzo web (per esempio `![](https://…)`), l'anteprima la scarica da quel sito, come farebbe un browser. Il sito dell'immagine riceve la richiesta con l'indirizzo IP del dispositivo, ma nessun dato del documento.

Le formule (KaTeX) e i diagrammi (Mermaid) sono disegnati con librerie incluse nell'app, senza connessione.

I file HTML esportati dall'utente, se contengono formule o diagrammi, richiamano KaTeX e Mermaid da una rete di distribuzione pubblica (jsDelivr) quando vengono aperti in un browser. Questo avviene nel browser e non nell'app.

## Documenti e file

I documenti vengono salvati dove si trovano: nella posizione scelta dall'utente o nella cartella aperta come area di lavoro. Nelle cartelle le note si salvano automaticamente poco dopo ogni modifica.

Per disegnare formule e diagrammi nell'editor, Charta usa una vista WebKit interna, nascosta, che lavora in memoria con i file inclusi nell'app.

Charta non modifica né riscrive i documenti oltre a ciò che l'utente scrive: il file resta un normale file di testo Markdown. Quando l'utente rinomina una nota citata da altre o sceglie «Sostituisci» in tutte le note, l'app chiede conferma prima di cambiare gli altri file.

Le esportazioni (HTML, PDF, Word ed EPUB) vengono create sul dispositivo. Sul Mac si salvano dove sceglie l'utente; su iPhone e iPad vengono preparate in una cartella temporanea dell'app e passano dal foglio di condivisione del sistema, da cui l'utente decide dove salvarle o a chi mandarle.

## Permessi del dispositivo

Sul Mac Charta funziona all'interno della sandbox di macOS e può accedere solo ai file e alle cartelle che l'utente sceglie esplicitamente.

- Per mostrare le immagini salvate accanto a un documento aperto da solo, Charta chiede l'accesso alla sua cartella con un pannello di sistema.
- Per riaprire le cartelle recenti e quelle autorizzate dopo un riavvio, l'app salva un riferimento di sicurezza (security-scoped bookmark).
- Charta dichiara il permesso di connessione in uscita solo per le immagini web descritte sopra.

Su iPhone e iPad Charta accede ai documenti aperti dall'app File e alle cartelle scelte con il selettore di sistema. I documenti nuovi creati senza iCloud vanno nella cartella Charta in «Sul mio iPhone» o «Sul mio iPad».

Charta non richiede l'accesso a fotocamera, microfono, contatti, calendari, posizione, libreria Foto o autenticazione biometrica.

## Appunti

Copia, Taglia e Incolla usano gli appunti del sistema solo quando l'utente li sceglie. Sul Mac, la voce "Copia collegamento [[…]]" del menu contestuale di una nota mette negli appunti il collegamento a quella nota.

## Condivisione dei dati

Charta non condivide dati dell'utente con lo sviluppatore o con terze parti, per nessuna finalità: analytics, pubblicità, profilazione o tracciamento.

## Conservazione dei dati

L'app salva localmente sul dispositivo, nel proprio contenitore:

- le preferenze (`UserDefaults`): modalità dell'editor, carattere e dimensioni, interlinea, larghezza del testo, numeri di riga, stile dell'anteprima, disposizione di editor e anteprima, aspetto, lingua, cartella delle immagini
- le impostazioni dei progetti: nome nell'elenco, colore, simbolo, cartella delle immagini, ordine delle note e nota iniziale
- l'elenco dei progetti fissati e delle cartelle aperte di recente e (sul Mac) delle cartelle autorizzate, come riferimenti di sicurezza
- l'elenco delle ultime note aperte nelle cartelle (nome e percorso del file, non il contenuto)

## Conservazione e cancellazione

- I documenti e le note fanno parte dei file dell'utente e restano anche dopo la disinstallazione dell'app.
- Le note eliminate da una cartella vanno nel Cestino quando il sistema lo consente.
- L'elenco delle cartelle recenti si cancella sul Mac con Archivio › Cartelle recenti › Cancella elenco, e su tutti i dispositivi con «Cancella i recenti» nell'elenco dei progetti. «Togli dall'elenco» dimentica un progetto e le sue impostazioni; la cartella resta dov'è.
- La disinstallazione dell'app rimuove preferenze e riferimenti, nei limiti del comportamento del sistema operativo.

Poiché lo sviluppatore non riceve né conserva alcun dato, non può accedere, correggere o cancellare i dati dell'utente per suo conto.

## Minori

Charta non è rivolta specificamente ai minori e non raccoglie dati personali di alcun utente, minori compresi.

## Sicurezza

L'app si affida ai meccanismi di sicurezza del sistema operativo: App Sandbox e Hardened Runtime sul Mac, isolamento delle app su iOS e iPadOS, e i permessi di accesso ai file concessi dall'utente. L'HTML scritto nei documenti viene mostrato nell'anteprima senza script.

Nessun metodo di archiviazione su dispositivo può essere garantito come completamente sicuro.

## Modifiche a questa informativa

Questa Informativa sulla Privacy può essere aggiornata nelle future versioni dell'app. L'ultima versione dovrebbe essere resa disponibile all'URL pubblico della privacy policy usato in App Store Connect.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
