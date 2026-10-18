---
title: "Permessi Cartelle e App Sandbox"
description: "Come rName gestisce i permessi del filesystem dentro la sandbox di macOS: perché serve l'accesso alla cartella, segnalibri di sicurezza e gestione delle autorizzazioni."
project: "rname"
order: 5
section: "Sicurezza e Sistema"
---

## Perché rName Richiede l'Accesso alla Cartella

Chi usa macOS per la prima volta con un'applicazione protetta da **App Sandbox** (obbligatoria sul Mac App Store) potrebbe chiedersi per quale motivo, trascinando singoli file, l'app richieda l'autorizzazione per la cartella che li contiene.

La ragione è strettamente tecnica e legata al funzionamento dei sistemi operativi POSIX e del filesystem APFS:

> **Rinominare un file chiama la funzione di sistema `rename()`, la quale richiede i permessi di scrittura sulla cartella genitore che contiene il file, e non sul solo descrittore del file.**

Quando trascini o selezioni un singolo file tramite le normali finestre di dialogo, la sandbox di Apple concede all'applicazione il diritto di leggere e modificare quel solo file. Quel permesso **non è sufficiente per cambiargli nome**: tentare una rinomina diretta fallirebbe con l'errore di sistema:
_«Non hai i privilegi necessari per accedere alla cartella…»_.

---

## Le Due Modalità di Acquisizione

rName gestisce questa dinamica in modo trasparente e non invasivo:

### 1. Il Percorso Consigliato: Scegliere la Cartella

Se apri direttamente la cartella che contiene i tuoi file (tramite la scorciatoia <kbd>⌘</kbd> <kbd>O</kbd>, trascinando la cartella nella finestra o sull'icona dell'app nel Dock, oppure usando _Apri con…_ dal Finder):

- macOS concede immediatamente il permesso completo di lettura e scrittura sull'intera directory e sui suoi elementi.
- Tutti i file vengono caricati e risultano subito pronti per la rinomina, senza alcuna richiesta o passaggio intermedio.

### 2. Aggiunta di File Singoli e Segnalazione Visiva

Se invece trascini all'interno della finestra file sparsi provenienti da cartelle diverse non ancora autorizzate:

- Le righe dei file appartenenti a cartelle prive di permesso vengono contrassegnate dall'icona di un **lucchetto**.
- Compare un avviso chiaro che spiega la necessità del permesso genitore, accompagnato dal pulsante **Concedi accesso**.
- Con un singolo clic apri la finestra di autorizzazione del Finder e sblocchi la cartella per l'intera sessione.

---

## Segnalibri con Ambito di Sicurezza (Security-Scoped Bookmarks)

Per evitare che tu debba ri-autorizzare la stessa cartella di lavoro ad ogni riavvio dell'applicazione, rName implementa l'entitlement ufficiale Apple `com.apple.security.files.bookmarks.app-scope`:

1. All'atto della concessione dell'accesso, l'app genera un **segnalibro di sicurezza** cifrato per quella cartella.
2. Il segnalibro viene memorizzato in modo sicuro nelle preferenze dell'applicazione (`FolderAccess.swift`).
3. Ad ogni avvio successivo, rName ripristina automaticamente tutti i segnalibri attivi. Una cartella autorizzata una volta **non richiederà mai più alcuna conferma**.

---

## Controllo Totale: Ispezione e Revoca dei Permessi

Nelle applicazioni tradizionali, i permessi concessi rimangono spesso invisibili e impossibili da verificare.

In rName, aprendo la finestra **Impostazioni (<kbd>⌘</kbd> <kbd>,</kbd>) › Permessi**:

- Puoi visualizzare l'elenco alfabetico completo di tutte le cartelle attualmente autorizzate sul tuo Mac.
- Puoi verificare il percorso esatto di ciascuna cartella.
- Puoi **revocare singolarmente o totalmente** qualsiasi autorizzazione in qualsiasi momento.

> [!NOTE]
> La revoca di un permesso non tocca né altera alcun file presente sul disco: comporta semplicemente che, qualora decidessi in futuro di rinominare altri elementi all'interno di quella directory, l'applicazione ti chiederà nuovamente il consenso.
