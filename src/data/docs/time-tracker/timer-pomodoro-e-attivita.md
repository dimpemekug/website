---
title: "Timer Pomodoro e Registro Attività"
description: "Tecnica Pomodoro, timer ancorato all'orologio di sistema, registrazione rapida tramite chip e log delle attività in Time Tracker."
project: "time-tracker"
order: 4
section: "Produttività"
---

## Il Timer Pomodoro

La tecnica Pomodoro scandisce il lavoro in sessioni di concentrazione profonda alternate a pause rigeneranti. In Time Tracker:

- **Durata Personalizzabile**: intervallo di lavoro (di default 25 minuti), pausa breve (5 minuti) e pausa lunga (15 minuti).
- **Ancoraggio all'Orologio di Sistema**: il timer non si affida a banali cicli di polling o timer software in memoria che rischiano di sfasarsi se il sistema va in standby: calcola la differenza temporale esatta rispetto al timestamp di fine previsto.
- **Associazione Immediata al Progetto**: ogni sessione Pomodoro è associata direttamente a un progetto e a un'etichetta di attività.

---

## Integrazione con Live Activity e Notifiche

Durante una sessione di lavoro:
- **Su iOS**: la sessione è visibile nella **Dynamic Island** e sulla schermata di blocco come Live Activity, con anello di progressione e conto alla rovescia.
- **Su Android**: un **Foreground Service** mantiene attiva una notifica di sistema con i pulsanti *Pausa*, *Riprendi* e *Fine sessione*.
- **Al Termine del Timer**: una notifica locale avvisa con un suono discreto e una vibrazione che la sessione è conclusa, proponendo di registrare le ore o avviare la pausa.

---

## Registrazione Rapida tramite Suggerimenti (Chip)

Inserire manualmente le stesse attività ogni giorno (es. *Daily Standup*, *Code Review*, *Stesura documentazione*) richiede tempo.

Time Tracker propone una fila di **pastiglie intelligenti (*chips*)**:
- La classifica dei suggerimenti pesa le attività svolte di recente e la loro frequenza d'uso per il progetto selezionato.
- Toccando un chip, il campo del titolo viene precompilato all'istante, permettendoti di registrare un'attività in meno di due secondi.
