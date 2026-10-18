---
title: "Sincronizzazione e Backup"
description: "Sincronizzazione automatica tramite CloudKit, salvataggio preferenze con iCloud Key-Value Store ed esportazione in formato JSON o Markdown."
project: "codevault"
order: 4
section: "Dati e Backup"
---

## Sincronizzazione con Apple CloudKit

CodeVault sincronizza snippet e note tra tutti i tuoi dispositivi (Mac, iPhone, iPad) sfruttando l'infrastruttura nativa **Apple CloudKit**:

- **Database Privato**: i dati risiedono esclusivamente nel container privato dell'utente e sono inaccessibili a chiunque altro, inclusi gli sviluppatori dell'applicazione.
- **Funzionamento Offline-First**: se il dispositivo è offline o l'account iCloud non è configurato, `PersistenceController` commuta silenziosamente sulla modalità solo-locale senza mostrare blocchi o errori invadenti.
- **Risoluzione Automatica dei Conflitti**: le modifiche apportate su dispositivi diversi vengono riconciliate automaticamente in base al timestamp più recente.
- **Sincronizzazione Preferenze**: le impostazioni dell'app (tema, stile di evidenziazione, ordinamento preferito) viaggiano separatamente tramite `NSUbiquitousKeyValueStore` per una configurazione speculare immediata su ogni nuovo dispositivo.

---

## Esportazione e Ripristino

CodeVault garantisce che i tuoi dati rimangano sempre di tua proprietà, senza alcun tipo di vendor lock-in:

### Esportazione JSON
Permette di creare una copia di backup completa della libreria contenente:
- Tutti gli snippet con codice, linguaggio, data e descrizione.
- Tutte le note con corpo Markdown e metadati.
- Tutte le cartelle, le associazioni e i tag.

Questo archivio JSON può essere salvato su disco o re-importato su qualsiasi installazione di CodeVault per un ripristino immediato.

### Esportazione Markdown
Se preferisci consultare o archiviare le tue note all'interno di editor esterni (come Obsidian, VS Code o Logseq), puoi esportare frammenti e note come file singoli `.md` formattati con blocchi di codice recintati e metadati YAML frontmatter.
