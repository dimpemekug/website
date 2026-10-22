---
title: "Scorciatoie e selezioni rapide"
description: "Elenco completo delle scorciatoie da tastiera di rExif e dei criteri del menu Seleziona per lavorare più in fretta."
project: "rexif"
order: 9
section: "Riferimento"
---

## Scorciatoie da tastiera

Le funzioni principali di rExif hanno una scorciatoia da tastiera:

### File e sessione
| Azione | Scorciatoia | Descrizione |
| :--- | :--- | :--- |
| **Aggiungi foto e video…** | `⌘ + O` | Apre il pannello per scegliere file e cartelle |
| **Aggiungi dalla libreria Foto…** | `⌥ + ⌘ + O` | Apre il selettore di sistema per modificare data e posizione in Foto |
| **Esporta originali da Foto…** | `⇧ + ⌘ + E` | Estrae gli originali per modificare tutti i campi |
| **Salva modifiche** | `⌘ + S` | Scrive su disco tutte le modifiche evidenziate in arancione |
| **Svuota lista** | `⇧ + ⌘ + ⌫` | Toglie tutti gli elementi dalla finestra (i file su disco restano intatti, `⌘Z` li rimette) |
| **Mostra nel Finder** | `⇧ + ⌘ + R` | Mostra i file selezionati nella loro cartella del Finder |
| **Impostazioni** | `⌘ + ,` | Apre le impostazioni (lingua, aspetto, miniature, sessione) |

### Modifiche e metadati
| Azione | Scorciatoia | Descrizione |
| :--- | :--- | :--- |
| **Modifiche in blocco…** | `⇧ + ⌘ + D` | Apre il pannello batch con anteprima riga per riga |
| **Allinea tutte le date alla data di scatto** | `⇧ + ⌘ + L` | Copia la data di scatto nella data di digitalizzazione e nelle date del file |
| **Copia metadati** | `⌥ + ⌘ + C` | Copia i metadati della foto selezionata negli appunti |
| **Incolla metadati** | `⌥ + ⌘ + V` | Incolla tutti i metadati copiati sulla selezione (dal menu puoi incollarne anche solo una parte) |
| **Valutazione 1–5 stelle** | `⌘ + 1` … `⌘ + 5` | Assegna da 1 a 5 stelle agli elementi selezionati |
| **Rimuovi valutazione** | `⌘ + 0` | Elimina la valutazione a stelle |
| **Annulla** | `⌘ + Z` | Annulla l'ultima operazione |
| **Ripeti** | `⇧ + ⌘ + Z` | Ripete l'ultima operazione annullata |

### Visualizzazione
| Azione | Scorciatoia | Descrizione |
| :--- | :--- | :--- |
| **Come tabella** | `⌃ + ⌘ + 1` | Passa alla vista a tabella |
| **Come mappa** | `⌃ + ⌘ + 2` | Passa alla vista su mappa (Apple Maps) |
| **Ingrandisci miniature** | `⌘ + +` | Aumenta la dimensione delle miniature nella tabella |
| **Riduci miniature** | `⌘ + -` | Riduce la dimensione delle miniature nella tabella |
| **Anteprima rapida** | `Spazio` | Mostra l'anteprima Quick Look degli elementi selezionati |

## Il menu Seleziona

Il menu **Seleziona** (nella barra degli strumenti e nella barra dei menu) seleziona con un clic gli elementi che richiedono attenzione:

- **Senza data di scatto**: gli elementi senza `DateTimeOriginal`.
- **Date sospette**: date di scatto precedenti al 1990 o nel futuro.
- **Date del file diverse dalla data di scatto**: i file le cui date di creazione o modifica non coincidono con lo scatto (utile prima di `⇧⌘L`).
- **Senza posizione**: le foto senza coordinate GPS, da geolocalizzare.
- **Con posizione**: i file con una posizione (per esempio per toglierla prima di condividerli).
- **Per fotocamera**: un sottomenu con le fotocamere trovate negli elementi.
- **Solo foto** / **Solo video** / **Solo libreria Foto**: in base al tipo di file o alla provenienza.
- **Con modifiche non salvate**: gli elementi con modifiche in arancione in attesa di salvataggio.
- **Con errori**: i file che non è stato possibile leggere o salvare (es. protetti da scrittura o senza permessi).

Ci sono anche **Tutti** e **Inverti selezione**.
