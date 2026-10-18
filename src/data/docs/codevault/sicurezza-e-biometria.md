---
title: "Sicurezza, Biometria e Cestino"
description: "Blocco biometrico con Face ID e Touch ID, protezione dei dati sensibili e gestione del cestino soft-delete a 30 giorni in CodeVault."
project: "codevault"
order: 3
section: "Sicurezza"
---

## Protezione con Biometria (Face ID e Touch ID)

Spesso gli snippet e le note contengono configurazioni d'ambiente, script di deployment o credenziali di sviluppo. CodeVault integra una protezione biometrica basata su `LocalAuthentication`:

- **Su iPhone e iPad**: sblocco sicuro con Face ID o Touch ID all'apertura dell'app o dopo un periodo di inattività personalizzabile.
- **Su Mac**: supporto completo per Touch ID e per l'autenticazione tramite Apple Watch.
- **Blocco Immediato al Cambio Finestra**: quando l'app passa in background, i contenuti a schermo vengono immediatamente sfocati per proteggere le informazioni da sguardi indiscreti nell'App Switcher.

---

## Cestino Soft-Delete e Ripristino

A partire dallo schema V9, CodeVault adotta una politica di cancellazione morbida (*soft-delete*):

- **Nessuna perdita accidentale**: quando elimini uno snippet o una nota, l'elemento non viene rimosso fisicamente dal database ma marcato con il campo `deletedAt`.
- **Vista Cestino**: puoi visualizzare tutti gli elementi eliminati, ispezionarne il contenuto e ripristinarli con un clic nella loro posizione originale.
- **Pulizia Automatica a 30 Giorni**: gli elementi presenti nel cestino da più di 30 giorni vengono eliminati in modo definitivo e irreversibile all'avvio dell'applicazione, mantenendo pulito il database.
- **Svuotamento Manuale**: puoi forzare l'eliminazione definitiva immediata in qualsiasi momento tramite il pulsante "Svuota Cestino".
