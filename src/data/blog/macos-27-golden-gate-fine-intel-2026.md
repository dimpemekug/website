---
title: "macOS Golden Gate: il primo Mac senza Intel"
description: Con la versione 27, uscita il 14 settembre, macOS gira solo su Apple silicon. I Mac Intel restano a Tahoe, Rosetta 2 ha le settimane contate e chi distribuisce app ha un controllo da fare adesso. Cosa cambia, per chi usa un Mac e per chi ci sviluppa sopra.
pubDatetime: 2026-09-16T08:00:00Z
tags:
  - macos
  - operating-systems
  - software-development
featured: true
draft: false
---

Il 14 settembre Apple ha rilasciato macOS 27, Golden Gate, e con lui ha chiuso una transizione iniziata nel giugno 2020. È il primo macOS che gira esclusivamente su Mac con Apple silicon: nessun Mac Intel lo può installare, nemmeno il Mac Pro del 2019. Sei anni tondi dall'annuncio, che per un cambio di architettura sono pochissimi.

<figure>
  <img
    src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1200&q=80"
    alt="iMac argentato con lo schermo spento su una scrivania bianca, con tastiera e trackpad davanti"
  />
  <figcaption class="text-center">
    I Mac Intel non spariscono: restano su Tahoe, che continuerà a ricevere aggiornamenti di sicurezza.
  </figcaption>
</figure>

## Cosa cambia se hai un Mac Intel

Niente, oggi. Il Mac continua a funzionare esattamente come prima: resta su macOS 26 Tahoe, che è stata l'ultima versione a supportare l'architettura Intel e che, seguendo la prassi di Apple sulle due versioni precedenti, riceverà aggiornamenti di sicurezza ancora per un paio d'anni.

Quello che cambia è il futuro: niente nuove funzioni di sistema, e soprattutto un divario che si allarga con le app. Gli sviluppatori alzano il requisito minimo quando la maggioranza degli utenti si è spostata, e da oggi quella maggioranza ha una ragione in più per farlo. Nell'arco di un anno o due, le versioni nuove di molte app diranno «richiede macOS 27».

## Cosa cambia se sviluppi

Qui il pezzo interessante è Rosetta 2, il traduttore che ha permesso alle app Intel di girare su Apple silicon. Golden Gate è **l'ultima versione con Rosetta 2 completo**: da macOS 28, atteso nel 2027, resterà solo in forma ridotta, pensata per i vecchi giochi che dipendono da framework Intel. Apple lo sta dicendo da tempo, e già con macOS 26.4, a febbraio, il sistema ha iniziato a mostrare avvisi sulle app installate che smetteranno di funzionare.

Il controllo da fare è di due minuti. Su un binario o dentro un bundle:

```sh file=controlla-architettura.sh
file /Applications/UnaApp.app/Contents/MacOS/UnaApp
lipo -archs /Applications/UnaApp.app/Contents/MacOS/UnaApp
```

Se la risposta contiene solo `x86_64`, quell'app vive di Rosetta e ha una scadenza. Se contiene `arm64` da solo o insieme a `x86_64` (un binario universale), è a posto.

Per chi distribuisce, vale la pena controllare anche quello che sta *dentro* l'app e che spesso si dimentica: helper a riga di comando, framework di terze parti, plugin, librerie precompilate. Un'app nativa che carica una dylib solo Intel non è un'app nativa.

## I problemi ancora aperti

1. **Le dipendenze precompilate.** Le librerie che arrivano come binario già pronto sono il punto in cui la transizione si blocca: se il progetto a monte non pubblica una versione arm64, il problema non è tuo ma lo subisci tu.
2. **Il software che nessuno mantiene più.** Utility professionali, plugin audio, strumenti aziendali interni: molto software funzionante non ha più nessuno che lo aggiorni. Per quel codice macOS 28 sarà la fine.
3. **Le macchine virtuali x86.** Con la fine di Boot Camp e senza Rosetta completo, chi deve far girare Windows o Linux a 32/64 bit x86 dovrà passare dall'emulazione, con le prestazioni che comporta.
4. **Il parco installato in azienda.** Un Mac Intel del 2020 ha cinque anni: in molte flotte è ancora perfettamente operativo, e la pianificazione della sostituzione ora ha una data.

> **Suggerimento:** apri il Monitoraggio Attività, aggiungi la colonna «Tipo» e ordina per quella. Vedi in un colpo solo quali app in esecuzione sono ancora Intel. È il modo più rapido per sapere cosa ti aspetta, e in genere la lista è più corta di quanto temevi.

## Cosa aspettarsi da qui in avanti

La transizione Intel → Apple silicon finirà davvero con macOS 28, quando Rosetta 2 si ridurrà a un residuo per i giochi. Da lì in poi il Mac sarà una piattaforma a un'architettura sola, con i vantaggi che si vedono già: binari più piccoli, meno casi da testare, prestazioni prevedibili.

Per chi scrive app per Mac la conseguenza pratica è semplice e quasi liberatoria: si può smettere di costruire binari universali e di ragionare su due architetture. Vale la pena farlo con un po' di attenzione, però, perché il momento in cui alzi il requisito minimo è anche il momento in cui decidi quali utenti lasci indietro — e su un Mac che funziona benissimo quella scelta pesa.
