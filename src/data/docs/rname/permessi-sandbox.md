---
title: "Permessi e App Sandbox"
description: "Come rName gestisce i permessi del file system nella sandbox di macOS: perché serve l'accesso alla cartella, segnalibri di sicurezza e revoca delle autorizzazioni."
project: "rname"
order: 5
section: "Sicurezza e Sistema"
---

## Perché rName chiede l'accesso alla cartella

Chi usa per la prima volta un'app con **App Sandbox** (obbligatoria sul Mac App Store) può chiedersi perché, trascinando singoli file, l'app chieda il permesso per la cartella che li contiene.

Il motivo è tecnico:

> **Rinominare un file usa la funzione di sistema `rename()`, che richiede il permesso di scrivere nella cartella che contiene il file, non solo nel file.**

Quando trascini o selezioni un singolo file, la sandbox concede all'app di leggere e modificare quel file. Quel permesso **non basta per cambiargli nome**: il tentativo fallirebbe con l'errore _«Non hai i privilegi necessari per accedere a…»_.

---

## Due modi di aggiungere i file

### 1. Consigliato: scegliere la cartella

Se apri direttamente la cartella che contiene i file (con <kbd>⌘</kbd> <kbd>O</kbd>, trascinandola nella finestra o sull'icona nel Dock, oppure con _Apri con…_ dal Finder):

- macOS concede subito il permesso di lettura e scrittura sulla cartella e sul suo contenuto;
- i file sono pronti da rinominare, senza richieste intermedie.

### 2. File singoli e lucchetto

Se invece trascini file sparsi da cartelle non ancora autorizzate:

- i file delle cartelle senza permesso sono segnati da un **lucchetto**;
- un avviso spiega perché serve il permesso sulla cartella, con il pulsante **Concedi accesso…**;
- con un clic si apre il pannello di sistema per autorizzare la cartella.

---

## Segnalibri con ambito di sicurezza

Per non doverti far autorizzare la stessa cartella a ogni avvio, rName usa l'entitlement di Apple `com.apple.security.files.bookmarks.app-scope`:

1. quando concedi l'accesso, l'app crea un **segnalibro di sicurezza** per quella cartella;
2. il segnalibro viene salvato nelle preferenze dell'app;
3. a ogni avvio rName ripristina i segnalibri salvati: per una cartella già autorizzata **non serve più alcuna conferma**.

---

## Controllo e revoca dei permessi

In molte app i permessi concessi restano invisibili e impossibili da controllare.

In rName, da **Impostazioni (<kbd>⌘</kbd> <kbd>,</kbd>) › Permessi**:

- vedi l'elenco di tutte le cartelle autorizzate, con il loro percorso;
- puoi **revocare** una singola autorizzazione o tutte insieme, in qualsiasi momento.

> [!NOTE]
> Revocare un permesso non tocca alcun file sul disco: semplicemente, la prossima volta che vorrai rinominare file in quella cartella, rName ti chiederà di nuovo il consenso.
