---
title: "Gestione Snippet ed Editor"
description: "Come organizzare frammenti di codice, note markdown, evidenziazione sintattica, numeri di riga e categorizzazione con tag in CodeVault."
project: "codevault"
order: 2
section: "Funzionalità"
---

## Tipologie di Elementi

CodeVault gestisce due categorie principali di risorse:

1. **Code Snippet**: blocchi di codice sorgente associati a un linguaggio specifico, con evidenziazione sintattica personalizzata, font monospaziato e numerazione delle righe.
2. **Note Tecniche**: documenti di testo o promemoria con supporto alla formattazione Markdown, ideali per documentare architetture, procedure operative di terminale o appunti di studio.

---

## Editor di Codice e Linguaggi Supportati

L'editor nativo di CodeVault è ottimizzato per garantire reattività anche con file di grandi dimensioni:
- **Numerazione delle righe** attivabile o disattivabile a piacere.
- **Font Fira Code / System Monospaced** con spaziatura chiara per favorire la leggibilità di simboli e indentazioni.
- **Pulsante Copia Rapida**: copia l'intero blocco di codice negli appunti con un solo clic o tocco, senza dover selezionare manualmente il testo.

### Linguaggi Disponibili
L'enum `ProgrammingLanguage` include il supporto per i linguaggi più diffusi:
- **Sviluppo Apple**: Swift, Objective-C
- **Web & Backend**: TypeScript, JavaScript, HTML, CSS, PHP, Python, Ruby, Go, Rust, Java, Kotlin
- **Sistemi & Scripting**: C, C++, C#, Bash/Shell, PowerShell, SQL, Dockerfile, YAML, JSON, Markdown, Testo semplice

---

## Organizzazione: Cartelle, Tag e Preferiti

- **Collezioni e Cartelle**: raggruppa frammenti per progetto, cliente o stack tecnologico.
- **Tag Multivalore**: assegna una o più etichette a ciascun elemento per creare viste trasversali (es. `#network`, `#api`, `#auth`).
- **Preferiti**: contrassegna con una stella i frammenti usati più di frequente per accedervi direttamente dalla sezione dedicata nella barra laterale.
- **Filtri Combinati**: filtra istantaneamente per linguaggio, cartella o presenza di tag direttamente dalla vista principale.
