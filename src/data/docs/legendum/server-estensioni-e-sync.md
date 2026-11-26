---
title: "Server, estensioni e sincronizzazione"
description: "Collegamento ai server Jellyfin, Suwayomi, Komga e Kavita, estensioni Aidoku e Paperback, migrazione delle serie, sincronizzazione iCloud e backup in Legendum."
project: "legendum"
order: 6
section: "Rete e Sync"
---

## Server personali

Legendum si collega ai principali server self-hosted (Impostazioni › Fonti › Aggiungi server):

### 1. Jellyfin (10.9+)
- Aggiungi il server con indirizzo, nome utente e password; il token di accesso resta nel Portachiavi di iOS.
- Esplora e cerca nelle librerie di film e serie e riproduci gli episodi.
- I progressi si leggono dal server e vengono inviati ogni minuto, a fine episodio e alla chiusura del player.
- Il file originale viene riprodotto così com'è (un MKV va in mpv, senza far lavorare il server); la versione convertita dal server resta come alternativa.

### 2. Server di fumetti ed ebook: Komga, Kavita e Suwayomi
- **Komga e Kavita (OPDS)**: sfoglia e cerca nei cataloghi di fumetti e libri, con le pagine in streaming (o scaricando il file) e il punto di lettura sincronizzato sia per i fumetti sia per gli ebook di testo. Per Kavita si incolla l'indirizzo OPDS con la chiave API.
- **Suwayomi (Mihon / Tachiyomi)**: le estensioni Android non possono girare su iOS, ma attraverso un server Suwayomi (API GraphQL) puoi usarne le fonti: popolari e recenti, ricerca con filtri, dettagli, capitoli, lettura, impostazioni delle fonti e gestione di estensioni e repository del server. L'autenticazione viene riconosciuta da sola.

---

## Estensioni Aidoku e Paperback

Legendum esegue al suo interno le estensioni di due ecosistemi. Nessun repository è incluso: li aggiungi tu, con un link o incollando l'indirizzo.
- **Aidoku (`.aix`)**: eseguite con un runtime WebAssembly (**WasmKit**), con home, liste, ricerca con filtri, dettagli, capitoli, impostazioni della fonte, login e ricomposizione delle pagine protette con CoreGraphics.
- **Paperback 0.9 (`index.js`)**: eseguite con **JavaScriptCore**, con sezioni della home, ricerca con ordinamenti, dettagli, capitoli, impostazioni della fonte e verifica Cloudflare.
- **Aggiornamenti**: estensioni e moduli video si aggiornano da soli (si può disattivare), e da *Impostazioni › Fonti* puoi controllare gli aggiornamenti quando vuoi.
- **Le mie estensioni**: le fonti che pubblico io, nei due formati, sono nella pagina [Estensioni manga](/progetti/manga-extensions/).

---

## Migrare una serie su un'altra fonte

Quando una fonte smette di funzionare, **Migra** sposta le sue serie su un'altra estensione installata senza perdere il segno.

- **Da dove**: dal menu "…" della pagina di una serie in libreria, dal menu della copertina in Libreria, oppure dal pulsante **Migra** della Libreria. Lì **Seleziona serie** permette di sceglierne più d'una (con **Seleziona tutto**), mentre **Migra tutte le serie** le prende tutte. Le serie locali non si migrano.
- **Destinazione**: le estensioni Aidoku e Paperback installate per i fumetti, i moduli video per gli episodi. Le fonti dei server (Suwayomi, Komga, Kavita, OPDS, Jellyfin) possono essere solo l'origine.
- **Ricerca**: Legendum cerca il titolo nella nuova fonte e propone il risultato più simile, con il numero di capitoli; puoi cercare un altro titolo o sceglierne un risultato diverso. Poi scegli **Sostituisci** (predefinito) o **Tieni entrambe** e confermi con **Migra**.
- **Più serie**: si passa da una all'altra dopo ogni conferma, o con **Salta questa serie**. **Sposta senza chiedere i titoli identici** sposta da sola una serie quando il titolo trovato è lo stesso. Alla fine un riepilogo dice quanti capitoli hanno preso il progresso e quanti capitoli letti mancano nella nuova fonte.
- **Progresso**: i capitoli si abbinano per numero, e per volume quando entrambe le fonti lo indicano. I capitoli che c'erano solo nella nuova fonte, prima dell'ultimo letto, diventano letti.
- **La vecchia voce** esce solo dalla libreria, come con **Rimuovi dalla libreria**: i suoi download restano finché non li elimini, e iCloud e backup seguono il cambiamento.

---

## Sincronizzazione iCloud, spazio e backup

- **iCloud**: libreria, progressi, impostazioni, repository ed estensioni installate si sincronizzano tra i dispositivi con lo stesso account iCloud; per ogni capitolo vince il punto più avanti. Non viaggiano i capitoli scaricati, le serie locali (sono file di quel dispositivo) e le password.
- **Spazio**: in *Impostazioni › Spazio* vedi quanto occupano download, copertine, libri convertiti, cache e file temporanei, e puoi svuotare ogni cache. Con **Elimina dopo la lettura** (mai, subito, dopo un giorno o dopo una settimana) i download dei capitoli letti e degli episodi visti vengono rimossi da soli.
- **Backup**: in *Impostazioni › Dati › Backup* crei, importi, condividi e ripristini backup `.lgbackup` con libreria, cronologia e progressi, repository, estensioni installate, server (senza password) e impostazioni. I file stanno in `Legendum/Backups` nell'app File. Al ripristino scegli cosa rimettere; la libreria viene sostituita, ma prima Legendum salva un backup di quella attuale. Si possono importare anche i backup di Aidoku (`.aib`).
