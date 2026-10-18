---
title: "Revisioni, Giorni al Polso e Precisione"
description: "Tracciamento degli interventi di manutenzione tecnica, misurazione della precisione cronometrica e monitoraggio dell'utilizzo in Horologe."
project: "horologe"
order: 4
section: "Funzionalità"
---

## Registro delle Revisioni e Manutenzioni

Gli orologi meccanici richiedono lubrificazione periodica, sostituzione delle guarnizioni e regolazione del bilanciere. In Horologe ogni orologio dispone di una scheda manutenzioni:

- **Dati dell'Intervento**: data di esecuzione, tipologia di operazione (revisione ordinaria, riparazione straordinaria, sostituzione batteria, lucidatura o prova di impermeabilità subacquea).
- **Laboratorio e Costo**: centro assistenza autorizzato o orologiaio di fiducia e importo sostenuto.
- **Garanzia dell'Intervento**: durata della garanzia post-manutenzione e note tecniche sulle parti sostituite.
- **Promemoria Scadenze**: imposta un intervallo (es. 4 o 5 anni) per ricevere una notifica locale quando l'orologio si avvicina alla data raccomandata per il tagliando successivo.

---

## Giorni al Polso (Wrist Time)

Vuoi sapere quali orologi indossi davvero e quali restano nella scatola del tempo?
- **Registrazione Istantanea**: con un solo tocco sulla card dell'orologio o dalla vista rapida "Oggi al polso", registri la giornata di utilizzo.
- **Statistiche di Rotazione**: visualizza la classifica degli orologi più indossati nel mese o nell'anno corrente.
- **Costo per Utilizzo (*Cost per Wear*)**: confronta il valore di acquisto con i giorni effettivi di utilizzo per valutare l'ammortamento del segnatempo.

---

## Misurazioni di Precisione

Horologe include uno strumento per misurare la precisione del tuo calibro senza richiedere un cronocomparatore fisico professionale:

1. **Rilevazione Iniziale**: registra l'orario mostrato dall'orologio rispetto a un riferimento atomico (server NTP).
2. **Seconda Rilevazione**: a distanza di 24 o 48 ore, registra nuovamente l'ora indicata.
3. **Calcolo dello Scarto**: Horologe calcola la variazione media in **secondi al giorno** (+4 s/g, -2 s/g, ecc.), indicando se l'orologio rispetta i parametri di cronometria (es. standard COSC -4/+6 s/g).
