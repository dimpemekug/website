---
title: "Come rinominare tanti file insieme su Mac"
description: Foto che si chiamano IMG_4821, documenti con nomi illeggibili, cartelle da mettere in ordine. Cosa sa fare il Finder, quando servono Comandi Rapidi o un'app dedicata, e come scegliere nomi che restino utili negli anni.
seoDescription: "Come rinominare tanti file insieme su Mac: le tre opzioni del Finder, Comandi Rapidi, le regole con la data di scatto e come evitare errori e nomi doppi."
pubDatetime: 2026-11-18T12:00:00Z
related:
  - data-scatto-sbagliata-foto-mac
  - convertire-heic-jpeg-mac-iphone
  - aprire-rar-protetto-mac
relatedProjects:
  - rname
tags:
  - macos
  - productivity
  - automation
draft: false
---

Trecento foto di un matrimonio che si chiamano `IMG_4821.HEIC`, `IMG_4822.HEIC` e così via, una cartella di fatture scaricate con nomi come `document (3).pdf`, le scansioni di un archivio da numerare. Rinominarle una per una è lento e porta a errori; farlo in blocco richiede pochi secondi, se sai quale strumento usare. Il Mac ne ha già uno nel Finder, e per i casi più complicati esistono strade più potenti.

<figure>
  <img
    src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=1200&q=80"
    alt="Scaffale di legno con file di raccoglitori ad anelli colorati, ognuno con un'etichetta sul dorso"
  />
  <figcaption class="text-center">
    Un buon nome è come l'etichetta sul dorso di un raccoglitore: dice cosa c'è dentro senza doverlo aprire.
  </figcaption>
</figure>

## Con il Finder

Il Finder sa rinominare più file in una volta da molti anni, ma la funzione è poco visibile. Seleziona i file, fai clic con il tasto destro su uno di essi e scegli **Rinomina**. Nella finestra che si apre trovi tre modalità:

1. **Sostituisci testo.** Cerca un testo nei nomi e lo cambia con un altro: `IMG_` diventa `Matrimonio_`, `document` diventa `fattura`.
2. **Aggiungi testo.** Mette un testo prima o dopo il nome attuale, per esempio `2026-` all'inizio o `_def` alla fine.
3. **Formato.** Sostituisce il nome con un testo a tua scelta seguito da un numero progressivo o dalla data, partendo dal numero che indichi: `Matrimonio 1`, `Matrimonio 2`…

Per molti lavori basta. I limiti arrivano quando servono più operazioni insieme, quando i file vanno ordinati in un certo modo prima di numerarli o quando il nome deve contenere un'informazione che sta dentro il file, come la data in cui è stata scattata una foto.

## Con Comandi Rapidi

L'app Comandi Rapidi, presente sul Mac, ha un'azione per rinominare i file. Unita alle altre, permette di costruire un flusso che si ripete sempre uguale: prendere i file selezionati nel Finder, leggere una data, comporre un nome e salvarlo. È una buona strada per un lavoro ricorrente, come sistemare ogni mese gli estratti conto scaricati, ma va costruita a mano e, se qualcosa va storto a metà, non mostra prima il risultato.

## Con un'app dedicata

Quando i file sono tanti e le regole più d'una, un'app pensata per questo fa risparmiare tempo ed errori. [rName](/progetti/rname/), gratuita sul Mac App Store, lavora con una catena di regole applicate in ordine:

1. **Regole da combinare.** Sostituisci (anche con le espressioni regolari), inserisci, rimuovi, numera, cambia maiuscole, aggiungi una data, sistema l'estensione e pulisci il nome da accenti, emoji e caratteri non validi.
2. **Dati delle foto.** Il nome può contenere la data di scatto, la fotocamera o l'obiettivo letti dai metadati EXIF. Se una foto non li ha, resta com'è o usa un'alternativa che scegli tu.
3. **Anteprima continua.** Accanto a ogni nome attuale vedi quello nuovo mentre cambi le regole, prima di toccare il disco.
4. **Conflitti messi da parte.** I file che finirebbero con lo stesso nome, o con un nome che esiste già, restano fuori dall'operazione invece di romperla.
5. **Annulla.** Con <kbd>⌘</kbd> <kbd>Z</kbd> i file tornano al nome di prima, anche dopo più operazioni di seguito.

Le regole si salvano come preset, e quattro sono già pronti: tra questi la data come prefisso e i nomi adatti al web. La guida alla [catena di regole](/progetti/rname/docs/catena-di-regole/) mostra come combinarle.

## Nomi che durano

Più dello strumento conta lo schema. Qualche regola che vale ovunque:

1. **La data all'inizio, nel formato anno-mese-giorno.** `2026-11-18` si ordina da solo in ordine cronologico, mentre `18-11-2026` mescola i mesi e gli anni.
2. **Numeri con gli zeri davanti.** `001`, `002`… `120` restano in ordine; `1`, `2`… `120` vengono ordinati come testo da molti programmi, e `10` finisce prima di `2`.
3. **Niente caratteri speciali.** Barre, due punti, asterischi e accenti creano problemi su Windows, nei siti e negli archivi compressi. Trattini e trattini bassi vanno bene ovunque.
4. **Nomi descrittivi ma brevi.** `2026-11-18_fattura_luce.pdf` dice tutto; un nome lungo una riga viene tagliato da molti programmi e da alcuni sistemi di backup.

> **Suggerimento:** prima di rinominare una cartella importante, fai una prova su una copia di pochi file. Con le foto, se il nome deve contenere la data di scatto, controlla prima che le date siano giuste: [correggere la data di scatto](/posts/data-scatto-sbagliata-foto-mac/) viene prima di rinominare.

## Cosa tenere a mente

Rinominare file sembra un lavoro da poco, finché non devi ritrovare una fattura di tre anni fa o mettere in ordine un archivio di migliaia di foto. Il Finder basta per i casi semplici, Comandi Rapidi per i lavori che si ripetono, un'app con anteprima e annullamento per quelli grandi. Qualunque strumento usi, uno schema coerente deciso una volta ti fa risparmiare tempo ogni volta che cerchi qualcosa.
