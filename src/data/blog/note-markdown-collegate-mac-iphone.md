---
title: "Note Markdown collegate: come organizzare gli appunti su Mac e iPhone"
seoTitle: "Note Markdown collegate su Mac e iPhone: come organizzarle"
description: Una cartella di file Markdown e qualche collegamento [[nota]] bastano per un archivio di appunti che cresce senza perdersi e senza legarti a un'app. Come impostarlo, come scrivere note che si ritrovano e cosa controllare prima di cambiare programma.
seoDescription: "Come organizzare appunti in Markdown con collegamenti [[nota]] su Mac, iPhone e iPad: cartelle, nomi, link in entrata e compatibilità tra app."
pubDatetime: 2026-11-13T09:00:00Z
related:
  - local-first-app-offline-sincronizzazione-2026
  - aprire-rar-protetto-mac
  - memoria-assistenti-ai-2026
relatedProjects:
  - charta
tags:
  - productivity
  - macos
  - mobile
  - privacy
draft: false
---

Gli appunti hanno un difetto: si scrivono in un attimo e si ritrovano a fatica. Una nota sulla riunione finisce in un'app, l'idea per un progetto in un'altra, e dopo un anno nessuna delle due è dove la cercheresti. Un metodo semplice regge meglio di quasi tutte le soluzioni complicate: tenere le note come file Markdown in una cartella e collegarle tra loro, come le pagine di un piccolo wiki personale.

<figure>
  <img
    src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80"
    alt="Quaderno a righe aperto con la scritta Notes, una penna stilografica appoggiata sopra e un paio di occhiali sullo sfondo"
  />
  <figcaption class="text-center">
    Il quaderno ha un limite che i file non hanno: una pagina non può rimandare a un'altra con un clic.
  </figcaption>
</figure>

## Perché proprio il Markdown

Il Markdown è nato nel 2004, ideato da John Gruber con Aaron Swartz, come un modo di scrivere testo formattato che resti leggibile anche così com'è: un asterisco per il corsivo, un cancelletto per i titoli, un trattino per gli elenchi. Una nota Markdown è un normale file di testo con estensione `.md`, e questo ha tre conseguenze pratiche.

1. **Non dipende da un'app.** Il file si apre con qualsiasi editor di testo, oggi e tra vent'anni. Se l'app che usi chiude o cambia prezzo, gli appunti restano tuoi.
2. **Sta dove decidi tu.** Una cartella sul Mac, in iCloud Drive o in un altro servizio di sincronizzazione: i file seguono le regole delle cartelle, non quelle di un account.
3. **Si cerca e si copia facilmente.** Spotlight, il Finder, uno script o un backup trattano le note come qualsiasi altro file.

È lo stesso principio delle [app local-first](/posts/local-first-app-offline-sincronizzazione-2026/): i dati stanno sul dispositivo e il resto viene dopo.

## Il collegamento che cambia tutto

Una cartella di file da sola resta un archivio. Diventa uno strumento quando le note si citano a vicenda. La forma più diffusa è il collegamento tra doppie parentesi quadre, `[[Nome della nota]]`, preso dai wiki: scrivi il nome di un'altra nota e il testo diventa un link.

L'idea è vecchia. Il sociologo Niklas Luhmann ha costruito tra il 1951 e il 1996 uno schedario di circa 90.000 foglietti, oggi conservato all'Università di Bielefeld, in cui ogni scheda rimandava ad altre con un codice scritto a mano. Il principio è quello: idee piccole e collegate, anziché documenti lunghi divisi per argomento. Con i file il rimando costa un paio di tasti.

## Come impostare l'archivio

1. **Una cartella principale, poche sottocartelle.** Lavoro, progetti personali, letture: tre o quattro rami bastano. Il grosso dell'ordine lo fanno i collegamenti, non le cartelle.
2. **Una nota, un'idea.** Una nota su «Preventivo cucina» e una su «Fornitori di elettrodomestici» si collegano meglio di un unico documento su tutta la casa. Se una nota cresce troppo, staccane un pezzo e lasciaci un collegamento.
3. **Nomi chiari e stabili.** Il nome del file è il bersaglio dei collegamenti: «Riunione 2026-11-13 budget» si ritrova, «Nota 47» no. Le date nel formato anno-mese-giorno si ordinano da sole.
4. **Collega mentre scrivi.** Ogni volta che citi una persona, un progetto o un concetto che ha già una nota, mettilo tra `[[` e `]]`. Se la nota non esiste ancora, il collegamento è un promemoria per scriverla.
5. **Guarda i collegamenti in entrata.** Un buon editor mostra quali note citano quella aperta: è lì che emergono legami che non avevi previsto.

> **Suggerimento:** tieni una nota «Indice» per ogni area, con l'elenco dei collegamenti alle note più importanti. È la porta d'ingresso quando torni su un progetto dopo mesi, e costa meno che riordinare le cartelle.

## Su Mac, iPhone e iPad con Charta

Molte app leggono i file Markdown, e Obsidian è la più nota tra quelle che li collegano. [Charta](/progetti/charta/), un editor gratuito per Mac, iPhone e iPad in arrivo sull'App Store, lavora allo stesso modo, senza account e senza pubblicità.

1. **Apri la cartella come progetto.** Sul Mac con **Archivio › Apri cartella…**, su iPhone e iPad con **Apri cartella** nella schermata iniziale. Le note restano file `.md` nella cartella: Charta non ci aggiunge file suoi.
2. **Scrivi `[[`.** Charta propone le note della cartella mentre scrivi; `[[Nota#Titolo]]` porta a un titolo preciso, `[[Nota|testo]]` mostra un testo diverso dal nome. Un clic su un collegamento a una nota che non esiste ancora la crea.
3. **Rinomina senza rompere niente.** Quando cambi il nome di una nota citata da altre, Charta chiede se aggiornare i collegamenti e dice quanti sono.
4. **Guarda il grafo.** **Grafo delle note** mostra le note come punti e i collegamenti come linee: le note isolate sono quelle che conviene collegare o eliminare.

Sul Mac **Vai alla nota** (<kbd>⌘</kbd> <kbd>T</kbd>) apre qualsiasi nota scrivendo parte del nome. Se un'altra app o un servizio di sincronizzazione cambia il file aperto, Charta avvisa e chiede quale versione tenere. I dettagli sono nella guida a [cartelle e note collegate](/progetti/charta/docs/cartelle-e-note-collegate/).

## Cosa controllare prima di cambiare app

Il Markdown è portabile, ma non tutto il Markdown lo è allo stesso modo.

1. **I collegamenti `[[nota]]` non fanno parte dello standard.** CommonMark, la specifica che dal 2014 mette ordine nelle varianti del Markdown, non li prevede: sono un'estensione. Le app per gli appunti li leggono quasi tutte, ma un sito, un generatore di documentazione o un editor generico possono mostrarli come testo. Obsidian stesso permette di usare i link Markdown classici al loro posto, se la compatibilità conta più della comodità.
2. **Le estensioni proprie di un'app restano lì.** Riferimenti a singoli paragrafi, incorporamenti o comandi speciali funzionano solo nell'app che li ha inventati. Usali sapendo che fuori diventano testo.
3. **Le impostazioni non viaggiano con i file.** Colori, note fissate e viste salvate stanno di solito nelle preferenze dell'app. Le note no: quelle sono nella cartella, e sono la parte che conta.

## Un archivio che cresce con te

Un sistema di appunti funziona se non chiede manutenzione. Una cartella, file con nomi chiari e qualche collegamento scritto mentre lavori bastano per trovare tra un anno quello che oggi ti sembra ovvio. Il resto (grafi, ricerche, modelli) è comodità. Conviene sceglierla in un'app che lasci i file come li hai scritti, così il giorno in cui ne proverai un'altra gli appunti verranno con te.
