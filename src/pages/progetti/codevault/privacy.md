---
layout: ../../../layouts/LegalLayout.astro
title: "Informativa sulla Privacy - CodeVault"
description: "Informativa completa sulla privacy dell'app CodeVault: quali dati vengono trattati, come funziona la sincronizzazione iCloud e perché lo sviluppatore non riceve alcun dato."
---

Ultimo aggiornamento: 12 settembre 2026

Questa Informativa sulla Privacy descrive come **CodeVault** tratta i dati.

## Sintesi

- Non è richiesto alcun account
- Non vengono utilizzati strumenti di analytics
- Non vengono utilizzati SDK pubblicitari né SDK di tracciamento
- Non viene effettuato alcun tracciamento dell'utente
- Lo sviluppatore non ha server e non riceve alcun dato
- Snippet e note restano sui dispositivi dell'utente e, se la sincronizzazione è attiva, nel suo account iCloud privato

## Dati trattati dall'app

CodeVault tratta esclusivamente i contenuti che l'utente crea o importa:

- snippet di codice (titolo, descrizione, codice, linguaggio, categoria, tag)
- note (titolo, descrizione, contenuto, formato, categoria, tag)
- elementi nel cestino, conservati per 30 giorni e poi eliminati definitivamente
- le preferenze dell'app: tema, colore di accento, lingua, impostazioni dell'editor, blocco biometrico, sincronizzazione iCloud

## Raccolta dei dati

Lo sviluppatore non raccoglie, non riceve, non vende e non condivide dati dell'utente.

## Sincronizzazione iCloud

La sincronizzazione iCloud è attiva per impostazione predefinita e può essere disattivata in Impostazioni › Backup e importazione.

Quando è attiva, snippet e note vengono sincronizzati tra i dispositivi dell'utente tramite il **database privato CloudKit** del suo account iCloud, e le preferenze tramite l'archivio chiave-valore di iCloud. Questi dati sono gestiti da Apple secondo la propria informativa sulla privacy e non sono accessibili allo sviluppatore.

Se iCloud non è disponibile, l'app funziona in sola modalità locale.

## Blocco biometrico

Il blocco con Face ID o Touch ID è facoltativo. L'autenticazione è gestita interamente dal sistema operativo: CodeVault riceve solo l'esito (riuscita o non riuscita) e non ha mai accesso a dati biometrici.

## Appunti

Se l'opzione "Suggerisci incolla dagli appunti" è attiva, alla creazione di un nuovo snippet CodeVault può leggere gli appunti per proporre di incollare il codice copiato. Il contenuto degli appunti resta sul dispositivo. L'opzione può essere disattivata nelle impostazioni dell'editor.

## Esportazione e importazione

Backup JSON, esportazioni Markdown e PDF vengono creati solo su richiesta dell'utente e salvati nella posizione che l'utente sceglie. L'importazione legge solo il file selezionato dall'utente.

## Servizi di terze parti

CodeVault non contiene SDK di analytics, pubblicità, crash reporting o tracciamento. L'unico servizio esterno utilizzato è iCloud di Apple, per la sincronizzazione descritta sopra.

## Eliminazione dei dati

- Gli elementi eliminati finiscono nel cestino e vengono rimossi definitivamente dopo 30 giorni, o subito con "Svuota cestino".
- Eliminando l'app vengono rimossi i dati locali.
- I dati sincronizzati in iCloud possono essere eliminati da Impostazioni › [nome utente] › iCloud › Gestisci spazio › CodeVault (iPhone/iPad) o da Impostazioni di Sistema › [nome utente] › iCloud (Mac).

## Minori

CodeVault non raccoglie dati di alcun utente, inclusi i minori.

## Contatti

Sviluppatore / Editore: `dimpemekug`

Email di supporto: `dimpemekug.app@gmail.com`
