---
title: "Server, Estensioni e Sincronizzazione"
description: "Collegamento a server domestici Jellyfin, Suwayomi, Komga e Kavita, estensioni Aidoku/Paperback e sincronizzazione iCloud in rManga."
project: "rmanga"
order: 6
section: "Rete e Sync"
---

## Connessione a Server Personali

rManga si integra con i principali server multimediali e di catalogazione self-hosted:

### 1. Jellyfin (10.9+)
- Collega il tuo server Jellyfin inserendo indirizzo IP e credenziali (salvate in modo sicuro nel Portachiavi di iOS).
- Esplora e riproduci film, serie e anime della tua rete locale o remota.
- Sincronizzazione automatica bidirezionale dei progressi di riproduzione al secondo sul server.
- Supporto a file originali non transcodificati tramite riproduzione diretta in mpv.

### 2. Server di Fumetti ed Ebook: Komga, Kavita e Suwayomi
- **Komga e Kavita (OPDS)**: sfoglia interi cataloghi di fumetti e libri, con streaming delle pagine e memorizzazione del punto esatto di lettura sia per i fumetti che per gli ebook di testo.
- **Suwayomi (Mihon / Tachiyomi)**: accesso tramite API GraphQL con supporto a tutti i filtri di ricerca, autenticazione e cataloghi remoti.

---

## Ecosistemi di Estensioni: Aidoku e Paperback

rManga implementa runtime nativi per eseguire estensioni di terze parti:
- **Estensioni Aidoku (`.aix`)**: eseguite in-app tramite WebAssembly (**WasmKit**), con supporto a filtri complessi, ricerca, login web e decifratura di immagini protette tramite CoreGraphics.
- **Estensioni Paperback 0.9 (`.js`)**: eseguite tramite runtime **JavaScriptCore** nativo con supporto a interceptor, sezioni dinamiche e risoluzione delle protezioni Cloudflare.
- **Aggiornamento Automatico**: puoi verificare gli aggiornamenti di tutte le estensioni e moduli video installati direttamente da *Impostazioni › Fonti*.

---

## Sincronizzazione iCloud e Backup

- **Sincronizzazione iCloud Personale**: progressi di lettura, segnalibri, stato dei capitoli e serie seguite si sincronizzano in tempo reale tra iPhone e iPad tramite il tuo account privato iCloud.
- **Gestione Spazio Intelligente**: nella sezione *Impostazioni › Spazio* puoi visualizzare lo spazio occupato da download, copertine, file temporanei e cache, con opzione per eliminare automaticamente i capitoli letti e gli episodi visti dopo un intervallo programmabile (es. 24 ore o 7 giorni).
- **Esportazione Backup Completo**: genera un archivio JSON con tutte le tue sorgenti, la cronologia e i progressi per esportarli o ripristinarli su un nuovo dispositivo in qualsiasi momento.
