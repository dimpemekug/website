---
title: "Sincronizzazione iCloud e Privacy"
description: "Sincronizzazione multi-dispositivo tramite Apple iCloud Key-Value Storage, backup dei dati e rispetto della privacy in ShowNest."
project: "shownest"
order: 4
section: "Dati e Privacy"
---

## Sincronizzazione con iCloud Key-Value Storage

ShowNest memorizza la tua watchlist e lo stato di ciascun episodio sfruttando il meccanismo nativo **iCloud Key-Value Storage** di Apple (`NSUbiquitousKeyValueStore`):

- **Sincronizzazione Trasparente**: se guardi un episodio sul divano con il tuo iPad e lo marchi come visto, lo ritroverai aggiornato anche sul tuo iPhone senza dover compiere alcuna azione manuale.
- **Sicurezza e Riservatezza**: il contenitore iCloud è strettamente personale e protetto dalla crittografia Apple. Nessun server terzo o sviluppatore ha accesso ai titoli delle serie che segui.
- **Nessun Impatto sulla Memoria**: i dati sincronizzati sono leggeri e non occupano spazio significativo nella quota del tuo abbonamento iCloud.

---

## Utilizzo delle API di The Movie Database (TMDB)

- **Accesso ai Metadati**: ShowNest interroga le API pubbliche di TMDB esclusivamente per recuperare informazioni oggettive su serie, cast, trame e locandine.
- **Nessuna Condivisione di Dati Personali**: durante le richieste a TMDB non vengono mai inviate informazioni sul tuo profilo, sui tuoi contatti o sulle tue abitudini di visione.
- **Caching Locale**: le locandine e i dettagli scaricati vengono memorizzati nella cache locale del dispositivo, riducendo al minimo il consumo di traffico dati cellulare.
