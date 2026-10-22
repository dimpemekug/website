---
title: "Sicurezza, biometria e Cestino"
description: "Blocco con Face ID e Touch ID, richiesta di sblocco dopo un intervallo a scelta e Cestino con ripristino per 30 giorni in CodeVault."
project: "codevault"
order: 3
section: "Sicurezza"
---

## Blocco biometrico (Face ID e Touch ID)

Snippet e note contengono spesso configurazioni, script di deploy o dati di sviluppo riservati. Per questo CodeVault offre un blocco opzionale basato su `LocalAuthentication`, da attivare in **Impostazioni › Sicurezza › Blocco biometrico**:

- **Su iPhone e iPad**: sblocco con Face ID o Touch ID all'apertura dell'app.
- **Su Mac**: sblocco con Touch ID o con Apple Watch.
- **Codice o password di riserva**: se la biometria non riesce, puoi sbloccare con il codice del dispositivo o la password del Mac.
- **Nuova richiesta dopo un intervallo**: scegli quando l'app deve chiedere di nuovo lo sblocco dopo essere passata in background: subito, dopo 1 minuto, dopo 5 minuti o dopo 15 minuti.

---

## Cestino con ripristino

Dalla versione 9 dello schema dati, CodeVault non cancella subito gli elementi ma li sposta nel **Cestino** (*soft delete*):

- **Nessuna perdita accidentale**: uno snippet o una nota eliminati non vengono rimossi dal database, ma contrassegnati con la data di eliminazione (campo `deletedAt`) e nascosti dalle liste.
- **Vista Cestino**: in **Impostazioni › Cestino** trovi tutti gli elementi eliminati e puoi ripristinarli con un clic.
- **Pulizia automatica dopo 30 giorni**: all'avvio dell'app, gli elementi nel Cestino da più di 30 giorni vengono eliminati in modo definitivo.
- **Svuotamento manuale**: con il pulsante **Svuota cestino** puoi eliminare tutto subito, dopo una conferma.
