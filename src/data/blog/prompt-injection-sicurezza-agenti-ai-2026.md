---
title: "Prompt injection: la vulnerabilità degli agenti AI che non si chiude con una patch"
description: Quando un assistente legge email, pagine web e documenti, qualsiasi testo può trasformarsi in un ordine. Perché la prompt injection è diventata il problema di sicurezza principale dei sistemi basati su modelli linguistici, e come limitarne i danni.
pubDatetime: 2026-09-09T08:00:00Z
tags:
  - cybersecurity
  - llm
  - ai-agents
draft: false
---

Vent'anni fa l'informatica ha imparato una lezione a caro prezzo: mai mescolare dati e comandi. La SQL injection esisteva perché un campo di testo scritto da un utente poteva finire eseguito come istruzione dal database. I modelli linguistici hanno riportato quel problema al centro della scena, con una differenza scomoda: per un LLM istruzioni e dati sono, per costruzione, la stessa cosa. Sono tutto testo.

<figure>
  <img
    src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1200&q=80"
    alt="Persona con cuffie davanti a due monitor pieni di codice in una stanza buia"
  />
  <figcaption class="text-center">
    Per un modello linguistico non c'è un confine netto tra le istruzioni ricevute e il testo che legge mentre lavora.
  </figcaption>
</figure>

## Diretta e indiretta

La forma più nota è quella **diretta**: qualcuno scrive all'assistente "ignora le istruzioni precedenti" e prova a fargli fare ciò che non dovrebbe. È fastidiosa, ma chi la tenta sta parlando con il sistema e il danno di solito resta confinato alla sua conversazione.

Quella che preoccupa davvero è la forma **indiretta**. L'attaccante non parla mai con l'assistente: nasconde le sue istruzioni in una pagina web, in un'email, in un PDF, in un commento dentro un repository. Quando l'agente legge quel contenuto per svolgere un compito legittimo, le istruzioni entrano nel suo contesto con lo stesso peso di quelle dell'utente.

## Perché con gli agenti il rischio cresce

- **Accesso ai dati.** Un assistente che legge la tua posta, i tuoi documenti o il tuo codice ha a disposizione esattamente ciò che un attaccante vorrebbe rubare.
- **Capacità di agire.** Inviare email, chiamare API, modificare file, eseguire comandi: ogni strumento che l'agente può usare è anche uno strumento che un testo malevolo può provare a usare.
- **Canali di uscita.** Basta poco per far uscire un'informazione: un link da cliccare, un'immagine caricata da un indirizzo che contiene i dati nel percorso, una richiesta a un servizio esterno.

Quando tutti e tre gli elementi sono presenti insieme — dati privati, contenuti non fidati, un modo per comunicare con l'esterno — si ottiene quella che alcuni ricercatori hanno chiamato "triade letale". È la combinazione in cui una singola pagina web ben confezionata può trasformare un assistente in uno strumento di esfiltrazione.

## Perché non esiste una patch

I filtri che cercano frasi sospette si aggirano riformulando. I modelli addestrati a riconoscere le istruzioni iniettate migliorano, ma il loro comportamento resta probabilistico: una difesa che funziona nel 99% dei casi è un ottimo risultato in un benchmark e un pessimo risultato in sicurezza, dove l'attaccante ha bisogno di vincere una volta sola. Non a caso la prompt injection è al primo posto nella lista OWASP dei rischi per le applicazioni basate su LLM.

## Come limitare i danni

1. **Privilegio minimo.** Un agente che riassume pagine web non ha bisogno di poter inviare email. Ogni permesso in meno è un attacco in meno possibile.
2. **Conferma umana per le azioni irreversibili.** Pagamenti, invii, cancellazioni e pubblicazioni dovrebbero passare da un clic di chi usa il sistema, con un riepilogo chiaro di cosa sta per succedere.
3. **Separare i contesti.** Il componente che legge contenuti non fidati non dovrebbe avere, nello stesso momento, accesso ai dati sensibili e agli strumenti per comunicare verso l'esterno.
4. **Chiudere i canali di uscita.** Niente rendering automatico di immagini o link verso domini arbitrari, niente richieste di rete libere se il compito non le richiede.
5. **Registrare tutto.** Log leggibili delle azioni dell'agente non impediscono l'attacco, ma permettono di accorgersene e di capire cosa è successo.

> **Suggerimento:** per ogni agente che usi o sviluppi, fai tre domande. Cosa legge che non hai scritto tu? A quali dati ha accesso? In che modo può far uscire informazioni? Se la risposta a tutte e tre è "molto", togli almeno uno dei tre elementi prima di preoccuparti di qualsiasi filtro.

## Cosa aspettarsi da qui in avanti

La ricerca si sta spostando dal "rendere il modello più attento" al "progettare il sistema in modo che l'attenzione del modello non basti a fare danni": architetture in cui un modello privilegiato pianifica le azioni senza mai vedere i contenuti esterni, e un secondo modello isolato li legge senza poter agire. È la stessa lezione della SQL injection, applicata a un mondo nuovo: la soluzione non è insegnare al database a diffidare, è separare i dati dai comandi a monte.
