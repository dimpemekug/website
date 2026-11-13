---
title: "Comandi rapidi, Full immersion e widget"
description: "Excubia in Comandi rapidi e Siri, il filtro Full immersion che cambia modalità e regole, il widget, i link excubia:// e le notifiche dei blocchi."
project: "excubia"
order: 11
section: "Mac"
---

Excubia si comanda anche senza aprire la finestra: con Comandi rapidi e Siri, con le modalità Full immersion e dal widget.

## Comandi rapidi e Siri

| Azione | Cosa fa |
|---|---|
| **Imposta la modalità di Excubia** | passa a una delle quattro modalità |
| **Blocca tutto per un po'** | blocca tutto per un numero di minuti, da 1 a 1440 (30 all'inizio), poi torna la modalità di prima |
| **Attiva insieme di regole** | attiva un insieme, o nessuno, e spegne la scelta automatica |
| **Cambia insieme automaticamente** | torna alla scelta automatica dell'insieme |
| **Stato di Excubia** | restituisce la modalità e l'insieme attivo |

A Siri e in Spotlight puoi dire, per esempio, «Blocca tutto con Excubia», «Stacca internet con Excubia», «Cambia la modalità di Excubia» o «Stato di Excubia». Se il filtro non è attivo, l'azione risponde con un errore che chiede di aprire Excubia e accendere la protezione.

## Full immersion

In **Impostazioni di Sistema › Full immersion**, scegli una modalità e aggiungi il filtro **Imposta modalità e insieme di Excubia**: modalità e insieme di regole sono facoltativi. Mentre quella modalità Full immersion è attiva, Excubia usa la modalità e l'insieme che hai scelto; quando finisce tornano quelli di prima.

## Widget

Il widget **Excubia**, in versione piccola o media, mostra la modalità (o **Protezione spenta**), il blocco a tempo, l'insieme attivo o l'apprendimento, e il numero di connessioni bloccate. La versione media aggiunge le quattro app che scambiano più dati.

Il pulsante **Blocca tutto 30 min** avvia un blocco a tempo; durante il blocco diventa **Termina blocco**. Il widget rilegge i dati ogni 15 minuti.

## Link excubia://

Il widget usa questi link, che puoi usare anche tu, per esempio in un comando rapido:

| Link | Cosa fa |
|---|---|
| `excubia://open` | apre la finestra |
| `excubia://block?minutes=30` | blocca tutto per i minuti indicati (da 1 a 1440) |
| `excubia://unblock` | termina un blocco a tempo |

Nessun link spegne la protezione o consente tutto.

## Notifiche

Con **Notifica le connessioni bloccate** (Impostazioni › Avvisi) arriva una notifica quando una regola, una lista o la modalità blocca un'app, al massimo una al minuto per app. Non arrivano per i blocchi che hai deciso tu rispondendo a un avviso.
