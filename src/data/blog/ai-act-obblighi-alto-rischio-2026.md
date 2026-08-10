---
title: "AI Act, agosto 2026: cosa cambia davvero per chi sviluppa software"
description: Da questo mese gli obblighi per i sistemi AI ad alto rischio diventano pienamente applicabili nell'Unione Europea. Non è solo un problema legale — è un problema di architettura, documentazione e processo.
pubDatetime: 2026-08-10T08:00:00Z
tags:
  - ai-regulation
  - compliance
  - enterprise
draft: false
---

Per due anni l'AI Act è stato soprattutto un argomento da conferenza: scadenze lontane, obblighi generici, un regolamento che si sapeva sarebbe arrivato ma che nella pratica quotidiana di chi scrive software toccava in pochi. Questo mese cambia lo status: gli obblighi per i sistemi ad alto rischio diventano pienamente applicabili, e "alto rischio" nel testo copre più cose di quanto ci si aspetti — non solo diagnosi mediche o veicoli autonomi, ma anche selezione del personale, valutazione del credito, gestione di infrastrutture critiche. Se il tuo prodotto tocca una di queste aree, la conformità non è più un esercizio teorico.

<figure>
  <img
    src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1200&q=80"
    alt="Vista dal basso del frontone e delle colonne di un edificio istituzionale"
  />
  <figcaption class="text-center">
    Il testo del regolamento è arrivato anni fa. Quello che arriva ora sono le conseguenze pratiche di ignorarlo.
  </figcaption>
</figure>

## Cosa significa "alto rischio" nella pratica

La classificazione non riguarda il modello in sé, ma l'uso che se ne fa. Lo stesso modello linguistico può essere a rischio minimo se genera bozze di email interne, e ad alto rischio se decide chi viene scartato in una selezione del personale. È l'applicazione a determinare gli obblighi, non la tecnologia sottostante — un dettaglio che sfugge spesso a chi pensa alla conformità come a una proprietà del modello che si acquista o si addestra.

Per i sistemi che rientrano nella categoria, gli obblighi principali sono concreti e verificabili:

- **Tracciabilità delle decisioni.** Serve poter ricostruire perché il sistema ha prodotto un certo output per un certo input, non solo dimostrare l'accuratezza media su un dataset di test.
- **Supervisione umana effettiva.** Non un pulsante di override mai usato, ma un processo in cui una persona ha davvero la possibilità e il tempo di intervenire prima che la decisione produca effetti.
- **Documentazione tecnica mantenuta nel tempo.** Non un PDF scritto una volta al lancio, ma un artefatto che riflette il sistema come si comporta oggi, versione dopo versione.
- **Gestione del rischio come processo continuo.** Valutare i rischi prima del rilascio non basta: va ripetuto quando il modello, i dati o il contesto d'uso cambiano.

## Perché è un problema di architettura, non solo legale

La tentazione naturale è trattare la conformità come un compito da affidare all'ufficio legale a valle, quando il sistema è già pronto. Non funziona: la tracciabilità delle decisioni va progettata nel sistema di logging fin dall'inizio, perché ricostruirla a posteriori su un sistema già in produzione è spesso impossibile senza i dati giusti già raccolti. Lo stesso vale per la supervisione umana — se l'interfaccia non è pensata perché una persona possa davvero valutare una decisione in tempo utile, il requisito resta sulla carta.

Il risultato pratico è che i requisiti normativi stanno diventando input di design al pari dei requisiti funzionali: cosa loggare, quali metriche esporre, dove inserire un punto di verifica umano, non sono più decisioni rimandabili a fine progetto.

## I compromessi da mettere in conto

1. **Costo di sviluppo più alto, non solo di conformità.** Logging strutturato, versionamento dei modelli, interfacce di supervisione: sono lavoro ingegneristico reale, non moduli da spuntare in un questionario.
2. **Ambiguità sulla classificazione.** Molti prodotti si trovano al confine tra categorie di rischio, e la linea non è sempre netta: la prudenza spinge spesso a trattare come alto rischio anche ciò che potrebbe non esserlo, con relativo aumento di costi.
3. **Fornitori terzi come punto cieco.** Un sistema che integra un modello o un servizio esterno eredita parte degli obblighi, ma ha meno controllo sulla documentazione e sulla tracciabilità di quel componente.
4. **Il rischio di conformità decorativa.** È possibile produrre documentazione formalmente corretta che non riflette il comportamento reale del sistema — soddisfa un audit, non riduce il rischio effettivo.

> **Suggerimento:** prima di rincorrere la conformità come adempimento, fai l'inventario dei sistemi che prendono o influenzano decisioni su persone — assunzioni, credito, accesso a servizi. È una lista più corta di quanto si tema, ed è da lì che partono davvero gli obblighi, non da tutto ciò che genera testo.

## Cosa aspettarsi da qui in avanti

Le prime applicazioni concrete del regolamento arriveranno probabilmente da casi limite — un sistema di selezione automatizzata contestato, una decisione di credito impugnata — più che da controlli sistematici su ogni prodotto. Ma la direzione è segnata: la documentazione tecnica e la tracciabilità delle decisioni stanno diventando parte del lavoro di chi costruisce questi sistemi, non un allegato prodotto da altri alla fine. Chi ha già progettato per la trasparenza scoprirà di essere pronto in anticipo; chi l'ha rimandata scoprirà quanto costa ricostruirla dopo.
