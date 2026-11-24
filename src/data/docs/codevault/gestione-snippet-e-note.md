---
title: "Snippet, note ed editor"
description: "Snippet con più blocchi di codice, evidenziazione della sintassi, categorie, tag, ricerca con filtri e le tre viste della Home di CodeVault."
project: "codevault"
order: 2
section: "Funzionalità"
---

## Tipi di elemento

CodeVault gestisce due tipi di contenuto:

1. **Snippet**: codice sorgente associato a un linguaggio, con titolo, descrizione, evidenziazione della sintassi e numeri di riga. Uno snippet può contenere **più blocchi di codice**, ciascuno con il proprio titolo (per esempio "Modello", "Vista" e "Test" nello stesso snippet).
2. **Note**: testi in formato **testo semplice (.txt)** o **Markdown (.md)**, adatti a documentazione, checklist, procedure e appunti di studio. Le note Markdown si leggono impaginate, con il pulsante `</>` per passare al testo sorgente, e si possono **esportare in PDF**: tutto è spiegato in [Note Markdown e collegamenti](/progetti/codevault/docs/note-markdown-e-collegamenti).

---

## Editor e linguaggi supportati

L'editor di CodeVault offre:
- **Evidenziazione della sintassi** con sei temi: Default, Monokai, GitHub, Dracula, Solarized e Xcode.
- **Numeri di riga** e **A capo automatico** per le righe lunghe, con i numeri che restano allineati; si attivano o disattivano in **Impostazioni › Editor**.
- **Parentesi** `{`, `(` e `[` che si chiudono da sole su iPhone e iPad.
- **Pulsante Copia** nell'intestazione di ogni blocco, che copia solo quel codice.
- **Dimensione del carattere** regolabile da 11 a 28 punti.
- **Riconoscimento del linguaggio**: mentre scrivi o incolli il codice di uno snippet nuovo, l'app prova a dedurre il linguaggio; se lo scegli tu a mano, la tua scelta resta.
- **Incolla dagli appunti**: aprendo l'editor, se negli appunti c'è del testo l'app propone di incollarlo nel campo del codice (si disattiva con **Suggerisci incolla dagli appunti** in **Impostazioni › Editor**).

### Linguaggi disponibili
- **Apple**: Swift, SwiftUI, Objective-C
- **Mobile e JVM**: Kotlin, Java, Dart
- **Web**: JavaScript, TypeScript, PHP, HTML, CSS
- **Sistemi e dati**: C, C++, C#, Python, SQL, Bash, JSON, YAML, Markdown

C'è inoltre **Testo semplice** per tutto ciò che non rientra nell'elenco.

---

## Organizzazione: categorie, tag ed elementi fissati

- **Categorie**: ogni snippet o nota appartiene a una categoria personalizzata (per progetto, cliente o tecnologia). La sezione Categorie raccoglie gli elementi di ciascuna.
- **Tag**: assegna una o più etichette colorate a ogni elemento per creare raggruppamenti trasversali (es. `network`, `api`, `auth`).
- **Elementi fissati**: fissa in alto gli snippet e le note che usi più spesso.
- **Ordinamento e raggruppamento**: ordina le liste per data di modifica, data di creazione, titolo o linguaggio, e raggruppale per linguaggio o per categoria.
- **Home**: mostra gli elementi fissati, quelli recenti e le categorie più usate. Il pulsante in alto a destra sceglie come mostrare gli snippet recenti: **una riga di codice**, **elenco compatto** o una terza vista propria di ogni stile (*Elenco file* nel Terminale, *Indice* numerato nel Tipografico, *Riquadri* nel Vetro). La scelta vale per tutti gli stili.

---

## Ricerca con filtri

La ricerca guarda titoli, descrizioni, codice, testo delle note, categorie e tag. Puoi restringerla con questi filtri, anche insieme:

| Filtro | Esempio | Trova |
| :--- | :--- | :--- |
| `lang:` | `lang:swift` | gli snippet in un linguaggio |
| `tag:` | `tag:cache` | gli elementi con un tag |
| `cat:` | `cat:backend` | gli elementi di una categoria |
| `format:` | `format:markdown` | le note in un formato |

Per esempio `actor lang:swift tag:cache` cerca la parola *actor* negli snippet Swift con il tag *cache*.

Con un clic destro (Mac) o una pressione prolungata (iPhone e iPad) su un elemento puoi fissarlo, duplicarlo, copiarlo, condividerlo o eliminarlo.
