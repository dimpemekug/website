---
title: "Data Act: da settembre i dispositivi connessi devono aprire i loro dati"
description: Dal 12 settembre 2026 l'obbligo di accesso «by design» del regolamento europeo sui dati si applica ai prodotti connessi immessi sul mercato. Auto, elettrodomestici, macchinari e app collegate devono rendere i dati disponibili a chi li usa, in un formato leggibile da una macchina. Cosa cambia per chi compra e per chi sviluppa.
pubDatetime: 2026-09-18T08:00:00Z
tags:
  - compliance
  - iot
  - cloud-computing
featured: true
draft: false
---

Un'auto moderna produce centinaia di parametri al secondo, una caldaia connessa sa esattamente quante ore ha lavorato, una macchina agricola registra consumi e guasti prima ancora che l'operatore se ne accorga. Fino a ieri quei dati erano quasi sempre di chi aveva costruito il dispositivo: l'utente li vedeva solo nella misura in cui l'app ufficiale glieli mostrava. Dal 12 settembre 2026 non è più così, almeno in Europa.

<figure>
  <img
    src="https://images.unsplash.com/photo-1585014165903-6d6c6ebad3e9?w=1200&q=80"
    alt="Cruscotto digitale di un'auto visto dal posto di guida, con la strada al tramonto oltre il parabrezza"
  />
  <figcaption class="text-center">
    I dati generati dai prodotti connessi devono essere accessibili a chi li usa, non solo a chi li ha costruiti.
  </figcaption>
</figure>

## Cosa è cambiato il 12 settembre

Il Data Act (Regolamento UE 2023/2854) si applica già dal settembre 2025, ma il pezzo più impegnativo è scattato adesso: l'**accesso by design** dell'articolo 3. I prodotti connessi e i servizi correlati immessi sul mercato dopo il 12 settembre 2026 devono essere progettati in modo che i dati che generano siano accessibili all'utente **per impostazione predefinita**, in modo facile, sicuro, gratuito, in un formato completo, strutturato, di uso comune e leggibile da un dispositivo automatico. Dove è tecnicamente possibile, l'accesso dev'essere diretto: dal dispositivo, senza passare per il produttore.

La differenza rispetto al passato è sottile ma decisiva. Prima l'accesso ai dati era una questione contrattuale, da negoziare caso per caso. Ora è un requisito di progetto: se il dispositivo non è stato pensato per esporre i suoi dati, non lo si sistema con una clausola.

L'obbligo non è retroattivo. Riguarda i prodotti immessi sul mercato dopo quella data, non l'intero catalogo già in circolazione — il che significa che per anni convivranno due generazioni di dispositivi con regole diverse.

## Quali dati, e a chi

Il regolamento parla dei **dati del prodotto e del servizio correlato**, compresi i metadati necessari a interpretarli: letture dei sensori, stati di funzionamento, eventi, diagnostica. Non riguarda le elaborazioni frutto di algoritmi proprietari, che restano del produttore.

L'utente — che sia un privato o un'azienda — può ottenerli per sé, ma anche chiedere che vengano condivisi con un **terzo di sua scelta**: un'officina indipendente, un manutentore, un fornitore di servizi alternativo. È qui che il regolamento morde davvero, perché smonta il meccanismo per cui solo la rete ufficiale può leggere i dati della macchina che hai comprato.

Restano fuori dal perimetro alcuni casi: i dati che rivelerebbero segreti commerciali possono essere protetti con misure concordate, e microimprese e piccole imprese godono di esenzioni.

## Cosa significa per chi sviluppa

Per chi costruisce hardware connesso o le app che lo accompagnano, il lavoro è concreto:

- **Un canale di accesso ai dati.** Un'API documentata, un'esportazione in un formato standard, o entrambe. "Si vede nella nostra app" non è più una risposta sufficiente.
- **Informazioni prima dell'acquisto.** Il regolamento chiede di dire in anticipo quali dati il prodotto genera, in che formato, con che frequenza, come si ottengono e se sono conservati in modo continuativo.
- **Gestione delle autorizzazioni.** Se l'utente può far arrivare i suoi dati a un terzo, serve un modo per concedere e revocare quell'accesso in modo verificabile.
- **Formati leggibili da una macchina.** Un PDF non è un formato strutturato. Un CSV o un JSON documentato sì.

## I problemi ancora aperti

1. **Il confine dei segreti commerciali.** La calibrazione di un sensore o la logica di un algoritmo di consumo sono know-how o dato grezzo? La linea è ancora sfumata, e sarà la pratica a definirla.
2. **La sicurezza dell'accesso diretto.** Aprire un canale sui dati di un dispositivo significa aprire una superficie d'attacco. Autenticazione, limiti di frequenza e log diventano parte del requisito, non un di più.
3. **Il costo per i piccoli produttori.** Le esenzioni per le imprese più piccole aiutano, ma chi le supera di poco si trova a progettare un'infrastruttura dati completa per volumi ridotti.
4. **Dati "generati" contro dati "derivati".** Un contatore che misura i kWh produce un dato grezzo; la stima del costo mensile è un'elaborazione. Molte controversie si giocheranno esattamente su questo confine.

> **Suggerimento:** se stai progettando un dispositivo connesso o l'app che lo comanda, scrivi adesso una pagina che elenchi i dati che genera, il formato in cui si possono esportare e chi può autorizzarne la condivisione. Serve per legge, ma soprattutto è il documento che ti obbliga a scoprire cosa raccogli davvero — che è spesso più di quanto ricordavi.

## Cosa aspettarsi da qui in avanti

La prossima scadenza è il **12 gennaio 2027**: da quel giorno i fornitori di servizi cloud non potranno più applicare corrispettivi per il passaggio a un altro fornitore, dopo la riduzione graduale iniziata nel 2025. È l'altra metà del Data Act, quella che punta al lock-in dei servizi invece che a quello dei dispositivi.

Messe insieme, le due parti raccontano la stessa idea: i dati che produci usando un prodotto o un servizio non sono un sottoprodotto che spetta a chi te lo ha venduto. Per chi sviluppa, la conseguenza pratica è che l'esportazione dei dati smette di essere una funzione da mettere in fondo alla lista e diventa parte della progettazione — che, va detto, è anche il modo in cui si costruiscono app di cui gli utenti si fidano.
