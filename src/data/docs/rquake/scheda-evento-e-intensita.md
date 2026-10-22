---
title: "Scheda dell'evento e intensità stimata"
description: "Cosa mostra la scheda di un terremoto in rQuake: dati dell'evento, intensità stimata sulla scala Mercalli, confronto con le altre fonti, eventi vicini e collegamenti."
project: "rquake"
order: 3
section: "Guide d'uso"
---

## Dati dell'evento

Toccando un terremoto si apre la sua scheda. In alto ci sono la mappa della zona, la classe di magnitudo, il luogo e da quanto tempo è avvenuto. Poi una griglia con:

- **Data e ora** (locale) e **Ora UTC**;
- **Profondità**;
- **Magnitudo**, con il tipo usato dall'ente (per esempio `ML` o `Mw`);
- **Coordinate**;
- **Distanza da te**, se la distanza è attiva, altrimenti la **Fonte** che ha calcolato l'evento;
- **ID evento** e **Classe**.

In fondo alla scheda c'è la fonte del dato, con l'avviso che i dati più recenti possono essere rivisti.

## Intensità stimata

La sezione **Intensità stimata** dice come il terremoto è stato probabilmente avvertito nella tua posizione (se la distanza è attiva) e nei [luoghi salvati](/progetti/rquake/docs/luoghi-e-avvisi) entro 1000 km. Per ogni punto mostra il grado della **scala Mercalli modificata** in numeri romani, una parola e la distanza, con una frase sugli effetti per il valore più alto.

| Grado | Avvertito | Effetti tipici |
| :--- | :--- | :--- |
| I | Non avvertito | Probabilmente nessuno l'ha avvertito |
| II–III | Debole | Da poche persone a riposo, poi in casa come il passaggio di un camion |
| IV | Leggero | Da molti in casa; vibrano finestre e stoviglie |
| V | Moderato | Da quasi tutti; oggetti instabili possono cadere |
| VI | Forte | Da tutti, spavento; possibili lievi danni |
| VII | Molto forte | Danni moderati agli edifici meno resistenti |
| VIII | Severo | Danni notevoli agli edifici comuni |
| IX–X | Violento, Estremo | Danni gravi e diffusi |

La stima usa solo magnitudo, profondità e distanza, con l'equazione di Allen, Wald e Worden (2012), la stessa che lo USGS usa nelle ShakeMap per una sorgente puntiforme. Non conosce il terreno locale né la direzione della faglia, quindi un valore reale può differire di circa un grado. La stessa stima compare negli avvisi e nelle risposte di Siri.

## Altre fonti

La sezione **Altre fonti** chiede agli altri enti lo stesso terremoto: per ciascuno prende l'evento più vicino entro 90 secondi e 100 km. L'INGV viene interrogato solo per gli eventi nell'area italiana. Con stazioni e metodi diversi magnitudo e posizione possono differire un poco; gli enti che non conoscono l'evento non compaiono.

## Eventi vicini

**Altri eventi entro 50 km** elenca i terremoti del periodo caricato intorno a quello aperto, con la distanza da esso.

## Collegamenti e condivisione

Nella barra in alto:

- **Apri la scheda INGV** (o USGS, EMSC, GEOFON): la pagina ufficiale dell'evento sul sito dell'ente;
- **Apri in Mappe**: l'epicentro in Apple Mappe;
- **Condividi**: il collegamento alla pagina dell'ente, con magnitudo e luogo nel messaggio.

Il questionario macrosismico dell'INGV, **Hai sentito il terremoto? (HSIT)**, si apre da **Impostazioni › Informazioni**.
