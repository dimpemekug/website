---
title: "Cyber Resilience Act: da oggi le vulnerabilità sfruttate vanno segnalate entro 24 ore"
description: Dall'11 settembre 2026 scattano i primi obblighi del regolamento europeo sulla cybersicurezza dei prodotti digitali. Chi vende software o dispositivi connessi nell'Unione deve segnalare vulnerabilità sfruttate e incidenti gravi con tempi precisi. Cosa cambia e come prepararsi.
pubDatetime: 2026-09-11T08:00:00Z
tags:
  - cybersecurity
  - compliance
  - open-source
featured: true
draft: false
---

Per anni la sicurezza di un'app o di un dispositivo connesso è stata soprattutto una questione di buona volontà: chi era scrupoloso pubblicava patch e avvisi, chi non lo era poteva tacere e sperare che nessuno se ne accorgesse. Con il Cyber Resilience Act (Regolamento UE 2024/2847) quella scelta non esiste più. Il regolamento è in vigore da dicembre 2024 ma si applica per gradi: la maggior parte degli obblighi arriverà a dicembre 2027, mentre oggi, 11 settembre 2026, parte il primo pezzo. Forse il più concreto di tutti: l'obbligo di segnalare.

<figure>
  <img
    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
    alt="Circuito elettronico illuminato su una superficie scura"
  />
  <figcaption class="text-center">
    Il Cyber Resilience Act tratta software e dispositivi connessi allo stesso modo: prodotti che devono restare sicuri per tutta la loro vita.
  </figcaption>
</figure>

## Cosa scatta oggi

Da oggi chi produce "prodotti con elementi digitali" — software, app, dispositivi connessi, componenti — messi a disposizione sul mercato europeo deve notificare due cose: le **vulnerabilità attivamente sfruttate** e gli **incidenti gravi** che incidono sulla sicurezza del prodotto. Le notifiche passano da una piattaforma unica gestita da ENISA e arrivano al CSIRT nazionale del paese in cui il produttore ha la sede principale: in Italia, il CSIRT Italia dell'Agenzia per la cybersicurezza nazionale.

Il dettaglio che molti sottovalutano: l'obbligo non riguarda solo i prodotti nuovi. Vale anche per quelli già in commercio, compresi quelli usciti prima dell'entrata in vigore del regolamento.

## Le scadenze da ricordare

- **24 ore: il preallarme.** Dal momento in cui il produttore viene a sapere che una vulnerabilità è sfruttata, ha un giorno per una prima segnalazione. Non serve avere già la soluzione, serve dire che il problema esiste.
- **72 ore: la notifica vera e propria.** Una descrizione più completa del problema, della sua gravità e delle misure correttive o delle mitigazioni già disponibili.
- **Il rapporto finale.** Entro 14 giorni da quando è disponibile una correzione, per le vulnerabilità; entro un mese dalla notifica, per gli incidenti gravi.
- **Informare gli utenti.** Oltre alle autorità, il produttore deve avvisare chi usa il prodotto e indicare cosa può fare per proteggersi.

## Chi è coinvolto (e chi no)

Il regolamento non guarda alle dimensioni: ricade nell'ambito anche lo sviluppatore indipendente che vende un'app o il piccolo produttore di dispositivi smart. Restano fuori i prodotti già coperti da norme di settore, come i dispositivi medici e le auto, e i servizi cloud puri, regolati da un'altra direttiva, la NIS2.

Per l'open source il confine passa dall'attività commerciale: il progetto sviluppato e distribuito senza scopo di lucro è escluso, mentre le fondazioni e le organizzazioni che sostengono stabilmente progetti usati in prodotti commerciali — gli "steward", nel linguaggio del regolamento — hanno un regime più leggero, ma non nullo.

## I problemi ancora aperti

1. **Accorgersi di essere sotto attacco.** Le 24 ore partono da quando si viene a conoscenza della vulnerabilità sfruttata. Senza log, monitoraggio e un canale per ricevere segnalazioni esterne, il rischio non è sforare la scadenza: è non sapere mai che è partita.
2. **Le dipendenze.** Spesso la falla non sta nel codice scritto da te, ma in una libreria di terzi. Il regolamento chiede di sapere cosa c'è dentro il proprio prodotto e, se si trova un problema in un componente open source, di segnalarlo anche a chi lo mantiene.
3. **Chi è di turno.** Nei team piccoli nessuno è reperibile il sabato sera. Una scadenza di un giorno obbliga a decidere in anticipo chi valuta una segnalazione e chi la invia.
4. **Il confine del "commerciale".** Donazioni, sponsorizzazioni, versioni a pagamento di un progetto gratuito: capire quando un progetto open source diventa commerciale è ancora terreno di interpretazione, e le linee guida della Commissione conteranno molto.

> **Suggerimento:** scrivi oggi una pagina con tre risposte: dove arrivano le segnalazioni di sicurezza (un indirizzo dedicato o un file `security.txt` sul sito), chi decide se una vulnerabilità è davvero sfruttata e chi ha le credenziali per inviare la notifica. È un lavoro di un'ora che evita di improvvisare quando il tempo stringe.

## Cosa aspettarsi da qui in avanti

Le segnalazioni sono solo l'inizio. Da dicembre 2027 arriveranno i requisiti essenziali: sicurezza fin dalla progettazione, aggiornamenti di sicurezza garantiti per tutto il periodo di supporto dichiarato, documentazione tecnica con l'elenco dei componenti e marcatura CE. Chi usa questi quindici mesi per costruire il processo di gestione delle vulnerabilità arriverà alla scadenza con metà del lavoro già fatto. Chi aspetta scoprirà che la parte difficile non è la burocrazia, ma sapere in ogni momento cosa sta girando nei propri prodotti.
