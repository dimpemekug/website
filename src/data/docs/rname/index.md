---
title: "Introduzione a rName"
description: "Panoramica di rName per macOS: rinomina di file e cartelle in blocco, catene di regole, anteprima in tempo reale, gestione dei conflitti e operazioni sicure."
project: "rname"
order: 1
section: "Iniziare"
---

## Cos'è rName

**rName** è un'app nativa per **macOS 26 o successivo** pensata per rinominare file singoli o intere raccolte di file in blocco, in modo prevedibile e senza sorprese.

È scritta in **Swift 6** (con i controlli rigorosi sulla concorrenza), **SwiftUI** e **Observation**, e ha un approccio visivo: trascini una cartella nella finestra, componi una catena di regole e nella tabella centrale vedi, in tempo reale, ogni nuovo nome accanto a quello attuale. Nessun file viene rinominato, spostato o modificato finché non premi **Rinomina** (o <kbd>⌘</kbd> <kbd>↩</kbd>).

L'interfaccia è disponibile in italiano e in inglese.

---

## Principi

### 1. Niente avviene alle tue spalle

La tabella di anteprima confronta sempre il nome originale di ogni file con quello calcolato dalla catena di regole. Se una regola produce un conflitto (un nome duplicato nella lista, un file già esistente nella cartella o un nome non valido), quel file viene segnalato ed escluso dall'operazione, così l'archivio resta integro.

### 2. Privacy e nessuna connessione

- **Nessuna connessione di rete**: l'app non usa `URLSession`, SDK di terze parti o librerie di analisi.
- **Nessun account**: niente registrazioni, credenziali o abbonamenti.
- **Contenuti al sicuro**: rName non modifica il contenuto dei file. Usa nome, percorso, dimensione e date di creazione e modifica forniti dal file system; per le immagini mostra la miniatura che prepara macOS e, solo quando nella catena c'è la regola _Metadati foto_, ne legge i metadati EXIF. Tutto resta sul Mac.

### 3. Rinomina in due fasi

Rinominare file su un file system che non distingue maiuscole e minuscole (come APFS e HFS+ nella configurazione predefinita del Mac) ha insidie note: cambiare solo le maiuscole (`foto.jpg` → `Foto.jpg`) o scambiare i nomi di due file (`A` → `B` e `B` → `A`) fallirebbe con molte utility. rName esegue ogni rinomina in **due fasi**, passando da nomi temporanei nascosti e univoci (`.rname-<UUID>`). Se qualcosa si interrompe a metà, i file tornano al nome originale e non restano file temporanei.

### 4. Rispetto della sandbox di macOS

Per rinominare un file serve il permesso di scrittura sulla **cartella che lo contiene**, non solo sul file. rName ricorda i permessi concessi con **segnalibri con ambito di sicurezza** (_security-scoped bookmarks_): l'accesso si chiede una volta sola per cartella e puoi controllarlo o revocarlo in qualsiasi momento da _Impostazioni › Permessi_.

---

## Come si usa

1. **Aggiungi i file**: trascina una cartella o alcuni file nella finestra, oppure premi <kbd>⌘</kbd> <kbd>O</kbd> per scegliere una cartella.
2. **Componi la catena di regole**: fai clic su una o più delle 9 regole nella barra laterale (es. _Numerazione_, _Metadati foto_, _Sostituisci_), oppure scegli un preset dal menu in fondo alla barra.
3. **Controlla l'anteprima**: i file pronti sono segnati in verde, con il nuovo nome accanto al vecchio. Se serve, fai doppio clic su un file per scriverne il nome a mano.
4. **Rinomina**: premi <kbd>⌘</kbd> <kbd>↩</kbd> per applicare le modifiche sul disco.
5. **Annulla se cambi idea**: premi <kbd>⌘</kbd> <kbd>Z</kbd> per riportare tutti i file dell'ultima operazione al nome di prima, e <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> per rinominarli di nuovo.

Al primo avvio un'introduzione in quattro pagine riassume questi passi. Puoi riaprirla da _Aiuto › Mostra l'introduzione_, e la guida completa è in _Aiuto › Guida di rName_ (<kbd>⌘</kbd> <kbd>?</kbd>).

---

## Mappa della documentazione

- [Catena di regole](/progetti/rname/docs/catena-di-regole): le 9 regole, l'ambito di applicazione, le espressioni regolari e i metadati delle foto.
- [Anteprima e conflitti](/progetti/rname/docs/anteprima-e-conflitti): stati dell'anteprima, protezione dai duplicati e modifica manuale riga per riga.
- [Motore e sicurezza](/progetti/rname/docs/motore-e-sicurezza): rinomina in due fasi, scambi e maiuscole su APFS, annulla e ripeti.
- [Permessi e App Sandbox](/progetti/rname/docs/permessi-sandbox): perché serve l'accesso alla cartella, segnalibri di sicurezza e revoca dei permessi.
- [Preset e impostazioni](/progetti/rname/docs/preset-e-impostazioni): preset predefiniti, preset personali e gli otto pannelli delle Impostazioni (<kbd>⌘</kbd> <kbd>,</kbd>).
- [Scorciatoie e integrazione con macOS](/progetti/rname/docs/scorciatoie-e-finder): scorciatoie da tastiera personalizzabili, Dock, «Apri con» e guida.
