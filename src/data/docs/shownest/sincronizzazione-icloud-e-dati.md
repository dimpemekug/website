---
title: "Sincronizzazione iCloud e privacy"
description: "Sincronizzazione tra iPhone e iPad tramite l'archivio chiave-valore di iCloud, uso delle API di TMDB e consultazione senza connessione in ShowNest."
project: "shownest"
order: 4
section: "Dati e Privacy"
---

## Sincronizzazione con iCloud

ShowNest può sincronizzare la libreria e gli episodi visti con l'**archivio chiave-valore di iCloud** (`NSUbiquitousKeyValueStore`). La sincronizzazione è facoltativa e disattivata di default: si attiva nelle Impostazioni.

- **Automatica, una volta attivata**: se segni un episodio come visto sull'iPad, lo ritrovi aggiornato anche sull'iPhone, senza fare nulla.
- **Conflitti risolti serie per serie**: se modifichi la stessa serie su due dispositivi, vince la modifica più recente; le serie rimosse vengono eliminate anche dagli altri dispositivi.
- **Privata**: i dati restano nel tuo account iCloud; lo sviluppatore non ha accesso alle serie che segui.
- **Leggera**: la libreria viaggia compressa e occupa pochissimo spazio.
- **Stato visibile**: nelle Impostazioni una pagina mostra lo stato della sincronizzazione, la data dell'ultimo aggiornamento ed eventuali problemi (per esempio iCloud non disponibile). Da lì la sincronizzazione si attiva e si disattiva.

---

## Uso delle API di TMDB

- **Solo metadati**: ShowNest interroga le API di TMDB esclusivamente per scaricare informazioni su serie, stagioni, episodi, trame e poster.
- **Nessun dato personale**: alle richieste a TMDB non vengono aggiunte informazioni su di te o sulle tue abitudini di visione.
- **Cache locale**: le risposte scaricate vengono conservate sul dispositivo, così le serie che hai già aperto restano consultabili anche senza connessione e il traffico dati si riduce.

*Dati forniti da The Movie Database (TMDB). ShowNest utilizza le API di TMDB ma non è approvata né certificata da TMDB.*
