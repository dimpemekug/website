---
title: "EUDI Wallet: il portafoglio d'identità europeo arriva alla scadenza in ordine sparso"
description: "Entro il 24 dicembre 2026 ogni Stato dell'Unione deve offrire un portafoglio digitale per identità e documenti. L'Italia con IT-Wallet è tra i più avanti, molti altri arriveranno in ritardo. Cosa fa, cosa garantisce e cosa cambia per chi sviluppa."
pubDatetime: 2026-10-22T08:00:00Z
tags:
  - digital-identity
  - privacy
  - compliance
  - mobile
draft: false
---

Mancano due mesi alla data che il regolamento europeo sull'identità digitale ha fissato da tempo: entro il 24 dicembre 2026 ogni Stato membro deve mettere a disposizione dei propri cittadini almeno un **portafoglio europeo di identità digitale**, l'EUDI Wallet. Un'app sul telefono che contiene documenti d'identità, patente, titoli di studio e certificati, e che permette di dimostrare chi sei — online e di persona — mostrando solo quello che serve. Sulla carta è uno dei progetti digitali più ambiziosi dell'Unione. Nella pratica, la scadenza arriva con i Paesi in ordine molto sparso.

<figure>
  <img
    src="https://images.unsplash.com/photo-1614260938313-a7fc1a7ad0d2?w=1200&q=80"
    alt="Due mani aprono un portafoglio di pelle marrone vuoto, con uno smartphone infilato in una delle tasche"
  />
  <figcaption class="text-center">
    I documenti escono dal portafoglio di pelle e finiscono nel telefono: la scommessa è farlo senza perdere il controllo dei propri dati.
  </figcaption>
</figure>

## Cosa prevede il regolamento

L'obbligo nasce dal regolamento (UE) 2024/1183, la revisione del regolamento eIDAS entrata in vigore a maggio 2024. Il conto alla rovescia di 24 mesi è partito il 24 dicembre 2024, quando sono entrati in vigore i primi atti di esecuzione con le specifiche tecniche del wallet.

Alcuni principi sono scritti nel testo e valgono per tutti i Paesi:

- **È gratuito.** Rilascio, uso e revoca del wallet non costano nulla alle persone fisiche.
- **È volontario.** Nessuno è obbligato a usarlo, e chi sceglie di non farlo non può essere svantaggiato nell'accesso ai servizi: devono restare disponibili altri modi per identificarsi.
- **Si mostra solo il necessario.** Per dimostrare di essere maggiorenne non serve condividere la data di nascita, né tanto meno l'indirizzo: il wallet è pensato per la **divulgazione selettiva** dei singoli attributi.
- **Serve anche per firmare.** Oltre a identificarsi, il wallet permette di apporre firme elettroniche con valore legale.

## A che punto sono i Paesi

Il quadro, a poche settimane dalla scadenza, è disomogeneo. Secondo quanto riportato da Euronews a settembre, la grande maggioranza degli Stati membri non aveva ancora reso disponibile un wallet ai cittadini e si prevede che mancherà la data di dicembre. La Germania ha fissato il lancio del suo wallet, d-you, al 2 gennaio 2027; i Paesi Bassi hanno spostato il debutto alla fine del 2027; altri Stati stanno ancora scrivendo le norme nazionali necessarie per rilasciarlo.

L'Italia è nel gruppo di testa. **IT-Wallet**, integrato nell'app IO, a febbraio 2026 aveva superato i 10 milioni di attivazioni, con 17,3 milioni di documenti caricati: patente di guida, tessera sanitaria e Carta europea della disabilità, disponibili anche offline. Nel corso dell'anno sono arrivati i decreti attuativi che rendono il sistema pienamente operativo sul piano normativo, ed è previsto l'arrivo progressivo di altri documenti della pubblica amministrazione, a partire dalla tessera elettorale. IT-Wallet però non è ancora, a tutti gli effetti, un EUDI Wallet certificato: il passaggio richiede di allinearsi alle specifiche europee e di superare la certificazione, che al momento nessun Paese ha completato per un wallet in produzione.

## Le questioni di privacy ancora aperte

1. **Il collegamento tra un uso e l'altro.** Il regolamento chiede che chi verifica un'identità non possa ricostruire, mettendo insieme più verifiche, il profilo di chi l'ha mostrata. Le organizzazioni per i diritti digitali, come EDRi ed epicenter.works, sostengono che negli atti di esecuzione alcune garanzie si siano indebolite: certi meccanismi di revoca, per esempio, devono solo "ostacolare" il collegamento invece di impedirlo.
2. **La foto del volto.** Tra i dati minimi di identificazione è stata aggiunta l'immagine del viso. A giugno gli Stati membri hanno concordato che le autorità nazionali possano renderla facoltativa, ma niente le obbliga a farlo.
3. **Chi chiede cosa.** Ogni servizio che vuole leggere i dati del wallet deve registrarsi e dichiarare quali attributi intende chiedere. È una tutela importante, ma funziona solo se il wallet mostra all'utente, in modo chiaro, quando una richiesta va oltre quanto dichiarato.
4. **La frammentazione.** Se ogni Paese arriva con tempi e implementazioni diversi, il valore principale del progetto — usare lo stesso wallet in tutta l'Unione — si sposta in avanti di anni.

> **Suggerimento:** se usi già IT-Wallet, apri la sezione dei documenti e controlla cosa hai caricato e con quale scadenza. E quando un servizio ti chiede di identificarti con il wallet, guarda la schermata di consenso prima di confermare: dice esattamente quali dati stai per condividere, ed è lì che si vede se ti chiedono più del necessario.

## Cosa cambia per chi sviluppa

La scadenza di dicembre riguarda gli Stati, ma il conto alla rovescia vero per le imprese è un altro. Dal **24 dicembre 2027** i soggetti privati che per legge o per contratto devono usare un'autenticazione forte — banche, servizi finanziari, trasporti, energia, sanità, telecomunicazioni — dovranno accettare il wallet quando l'utente lo chiede, con l'esclusione di micro e piccole imprese. Le grandi piattaforme online soggette al Digital Services Act che richiedono un login sono coinvolte allo stesso modo. Prima ancora, da luglio 2027, le nuove regole antiriciclaggio permetteranno di usare l'identità digitale per l'identificazione dei clienti.

Per chi costruisce app e servizi significa prepararsi a tre cose: registrarsi come *relying party* nel Paese in cui si ha sede, integrare i protocolli di presentazione delle credenziali previsti dalle specifiche europee e, soprattutto, ripensare cosa si chiede davvero all'utente. Un servizio che oggi raccoglie la scansione di un documento intero per verificare un'età avrà a disposizione un'alternativa che restituisce solo un sì o un no.

## Cosa aspettarsi da qui in avanti

Dicembre non sarà il giorno in cui tutti gli europei avranno un'identità digitale in tasca, e probabilmente nemmeno il 2027 lo sarà. L'obiettivo dichiarato dalla Commissione è che entro il 2030 l'80% dei cittadini usi una soluzione di identità digitale. La strada per arrivarci passa dai Paesi che, come l'Italia, hanno già milioni di utenti, e dall'app europea per la verifica dell'età, pensata per confluire nei wallet nazionali.

La partita vera, però, si gioca sulla fiducia. Un portafoglio che contiene tutti i nostri documenti è utile solo se siamo sicuri che non diventi uno strumento per seguirci da un servizio all'altro. Le scelte tecniche dei prossimi mesi — come si revoca una credenziale, quali dati sono obbligatori, cosa vede chi verifica — conteranno più della data di lancio.
