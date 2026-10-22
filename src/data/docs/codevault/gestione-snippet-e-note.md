---
title: "Snippet, note ed editor"
description: "Come funzionano snippet con più blocchi di codice, note in testo o Markdown, evidenziazione della sintassi, categorie, tag ed elementi fissati in CodeVault."
project: "codevault"
order: 2
section: "Funzionalità"
---

## Tipi di elemento

CodeVault gestisce due tipi di contenuto:

1. **Snippet**: codice sorgente associato a un linguaggio, con titolo, descrizione, evidenziazione della sintassi e numeri di riga. Uno snippet può contenere **più blocchi di codice**, ciascuno con il proprio titolo (per esempio "Modello", "Vista" e "Test" nello stesso snippet).
2. **Note**: testi in formato **testo semplice (.txt)** o **Markdown (.md)**, adatti a documentazione, checklist, procedure e appunti di studio. Le note Markdown hanno un'**anteprima formattata**, che si può mostrare o nascondere, e si possono **esportare in PDF** (pagine A4).

---

## Editor e linguaggi supportati

L'editor di CodeVault offre:
- **Evidenziazione della sintassi** con sei temi: Default, Monokai, GitHub, Dracula, Solarized e Xcode.
- **Numeri di riga**, attivabili o disattivabili dalle Impostazioni.
- **Dimensione del carattere** regolabile da 11 a 28 punti.
- **Riconoscimento del linguaggio**: mentre scrivi o incolli il codice di uno snippet nuovo, l'app prova a dedurre il linguaggio; se lo scegli tu a mano, la tua scelta resta.
- **Incolla dagli appunti**: aprendo l'editor, se negli appunti c'è del testo l'app propone di incollarlo nel campo del codice (si può disattivare dalle Impostazioni).

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
- **Home**: mostra a colpo d'occhio gli elementi recenti e le categorie più usate.

Con un clic destro (Mac) o una pressione prolungata (iPhone e iPad) su un elemento puoi fissarlo, duplicarlo, copiarlo, condividerlo o eliminarlo.
