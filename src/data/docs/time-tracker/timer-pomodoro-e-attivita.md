---
title: "Timer Pomodoro e registro attività"
description: "Il timer di concentrazione ancorato all'orologio di sistema, la Live Activity, la registrazione delle attività e i suggerimenti dei titoli in Time Tracker."
project: "time-tracker"
order: 4
section: "Produttività"
---

## Il timer di concentrazione

Il pannello **Pomodoro** di Time Tracker è un cronometro per le sessioni di lavoro concentrato:

- **Attività e progetto**: scegli l'attività (le attività sono pastiglie che puoi aggiungere e togliere, es. *Focus*, *Code review*, *Studio*) e il progetto a cui assegnare il tempo.
- **Avvio, pausa e stop**: avvia il cronometro, mettilo in pausa quando serve e fermalo a fine sessione.
- **Ancorato all'orologio di sistema**: il tempo trascorso non dipende da un conteggio in memoria ma dall'istante di avvio salvato, quindi resta corretto anche se l'app viene sospesa o chiusa.
- **Salvataggio come attività**: quando fermi il timer, la sessione viene registrata come attività del progetto scelto, con il nome dell'attività come titolo. Le sessioni sotto il minuto non vengono salvate.
- **Anello del ciclo**: un anello nel colore del progetto si riempie verso la fine di ogni ciclo, e sotto il tempo compare il ciclo in corso con quanto manca (es. *Pomodoro 1 · mancano 06:31*). Il timer resta un cronometro: registra tutto il tempo trascorso, i cicli servono solo da traguardo. Il ciclo dura 25 minuti; su Android puoi cambiarlo nelle Impostazioni, alla voce **Durata del Pomodoro**: 15, 20, 25, 30, 45, 50, 60 o 90 minuti.
- **Annulla**: dopo lo stop il pannello mostra *Salvata in* e il nome del progetto, con il pulsante **Annulla**, che elimina l'attività appena salvata.

---

## Sempre visibile

Finché una sessione è in corso:
- **dentro l'app**, una barra compatta sopra la navigazione, in tutte le schede, mostra attività, progetto e tempo, con la pausa rapida; toccandola si riapre il pannello;
- **su iOS**, una **Live Activity** nella Dynamic Island e sulla schermata di blocco, e una notifica con le azioni rapide di pausa e stop;
- **su Android**, una **notifica continua** con i pulsanti *Pausa*, *Riprendi* e *Stop*.

Le notifiche del timer si possono disattivare dalle Impostazioni.

---

## Registrare un'attività a mano

Per le ore registrate a posteriori apri l'editor dell'attività e indica:
- **titolo**, **progetto** e **note**;
- la **data** e l'**orario di inizio e fine**, oppure attiva il **totale giornaliero** e scrivi direttamente la durata.

La nuova attività parte dal progetto dell'ultima attività registrata, se è ancora attivo; altrimenti dal primo progetto attivo.

Su Android, in cima al riepilogo c'è anche un'**aggiunta rapida** con solo titolo e progetto.

---

## Riprendere e duplicare un'attività

Nell'elenco **Attività**:
- scorrendo una riga verso destra compaiono **Riprendi** e **Modifica**; con uno scorrimento completo parte subito **Riprendi**, che avvia il timer con titolo e progetto dell'attività e apre il pannello Pomodoro. Se un timer è già in corso, Riprendi non c'è (su Android lo scorrimento apre allora la modifica);
- tenendo premuta una riga si apre un menu con **Modifica**, **Riprendi**, **Duplica su oggi** ed **Elimina**. *Duplica su oggi* crea una copia con lo stesso orario e la stessa durata sulla data di oggi;
- scorrendo verso sinistra c'è **Elimina**; su Android l'eliminazione si annulla dalla barra in basso.

---

## Ricerca e calendario attività

- **Ricerca**: il campo *Cerca tra le voci* cerca il testo in titolo, note e nome del progetto. Mentre cerchi, l'app propone i progetti attivi come filtri: sceglierne uno o più mostra solo le loro attività.
- **Calendario attività**: in cima all'elenco, un anno di lavoro in una griglia con un quadrato per giorno, più scuro quando le ore sono di più. Toccando un giorno compaiono la data, le ore e il numero di attività; **Mostra** lascia nell'elenco solo quel giorno, e **Mostra tutti i giorni** toglie il filtro.

---

## Suggerimenti dei titoli

Scrivere ogni giorno gli stessi titoli (*Daily standup*, *Code review*, *Documentazione*) fa perdere tempo. Mentre scrivi, Time Tracker propone i titoli che hai già usato:
- la classifica tiene conto di quanto spesso e quanto di recente hai usato ogni titolo;
- toccando un suggerimento il campo si compila all'istante.
