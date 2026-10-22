---
title: "Sincronizzazione e backup"
description: "Sincronizzazione automatica tramite CloudKit, preferenze sincronizzate con l'archivio chiave-valore di iCloud, backup JSON ed esportazione Markdown e PDF."
project: "codevault"
order: 4
section: "Dati e Backup"
---

## Sincronizzazione con iCloud

CodeVault sincronizza snippet e note tra Mac, iPhone e iPad usando **SwiftData con CloudKit**:

- **Database privato**: i dati stanno solo nel database privato del tuo account iCloud e non sono accessibili a nessun altro, sviluppatore compreso.
- **Funziona anche offline**: se iCloud non è disponibile o non è configurato, `PersistenceController` passa senza avvisi invadenti all'archivio locale. La sincronizzazione si può anche disattivare in **Impostazioni › Sincronizzazione**.
- **Modifiche riconciliate da iCloud**: le modifiche fatte su dispositivi diversi vengono unite da CloudKit appena i dispositivi tornano online.
- **Preferenze sincronizzate**: le impostazioni (stile, tema, colore d'accento, lingua, tema dell'editor, dimensione del carattere, numeri di riga, blocco biometrico) viaggiano separatamente tramite `NSUbiquitousKeyValueStore`, così ritrovi la stessa configurazione su ogni dispositivo. Lo stile grafico può anche restare legato al singolo dispositivo.

---

## Backup, importazione ed esportazione

I tuoi dati restano sempre tuoi, senza vincoli. Tutto si trova in **Impostazioni › Backup e importazione** e, su Mac, anche nel menu **File**.

### Backup JSON
Crea una copia completa della libreria in un unico file JSON, con:
- tutti gli snippet, con blocchi di codice e relativi titoli, linguaggio, descrizione, categoria, tag e date;
- tutte le note, con contenuto, formato, descrizione, categoria, tag e date.

Il file si può reimportare su qualsiasi installazione di CodeVault. L'importazione aggiunge solo gli elementi che non ci sono già (il confronto avviene per identificativo), così non crea doppioni; un elemento che si trova nel Cestino viene ripristinato.

### Esportazione Markdown
Esporta l'intera libreria in un unico file `.md`: ogni snippet e ogni nota diventa una sezione con titolo, descrizione, linguaggio o formato, categoria e tag, e il codice è racchiuso in blocchi recintati con il nome del linguaggio. È comodo per consultare i contenuti in editor come Obsidian o VS Code.

### Condivisione e PDF
Ogni snippet o nota si può condividere in Markdown con il foglio di condivisione di sistema (Mail, Messaggi, Note e altre app). Le note Markdown si possono anche esportare in **PDF**.

### Dati di esempio
Da **Backup e importazione** puoi caricare una serie di snippet e note di esempio per provare l'app; caricarli di nuovo non li duplica.
