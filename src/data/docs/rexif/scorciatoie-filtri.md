---
title: "Scorciatoie e Selezioni Rapide"
description: "Elenco completo delle scorciatoie da tastiera native di rExif e criteri di selezione rapida per velocizzare il lavoro."
project: "rexif"
order: 9
section: "Riferimento"
---

## Scorciatoie da Tastiera Complete

Tutte le funzioni principali di rExif sono accessibili tramite scorciatoie native di macOS:

### Gestione File e Sessione
| Azione | Scorciatoia | Descrizione |
| :--- | :--- | :--- |
| **Aggiungi foto e video…** | `⌘ + O` | Apre il pannello di selezione file e cartelle |
| **Aggiungi da libreria Foto…** | `⌥ + ⌘ + O` | Apre il selettore di sistema per modificare data/GPS in Foto |
| **Esporta originali da Foto…** | `⇧ + ⌘ + E` | Estrae gli originali per modificare tutti i campi |
| **Salva modifiche** | `⌘ + S` | Scrive su disco tutte le modifiche evidenziate in arancione |
| **Svuota lista** | `⇧⌘⌫` | Rimuove tutti gli elementi dalla finestra (i file su disco restano intatti, `⌘Z` ripristina la lista) |
| **Mostra nel Finder** | `⇧ + ⌘ + R` | Rivela i file selezionati all'interno della cartella del Finder |
| **Impostazioni** | `⌘ + ,` | Apre le preferenze (lingua, tema, aspetto miniature) |

### Modifiche e Metadati
| Azione | Scorciatoia | Descrizione |
| :--- | :--- | :--- |
| **Modifiche in blocco…** | `⇧ + ⌘ + D` | Apre il pannello batch con anteprima riga per riga |
| **Allinea date a data di scatto** | `⇧ + ⌘ + L` | Sincronizza digitalizzazione e timestamp filesystem con lo scatto |
| **Copia metadati** | `⌥ + ⌘ + C` | Copia i metadati della foto selezionata negli appunti |
| **Incolla metadati** | `⌥ + ⌘ + V` | Incolla i metadati copiati sulla selezione corrente |
| **Valutazione 1–5 stelle** | `⌘ + 1` … `⌘ + 5` | Assegna da 1 a 5 stelle all'elemento selezionato |
| **Rimuovi valutazione** | `⌘ + 0` | Elimina la valutazione a stelle |
| **Annulla modifica** | `⌘ + Z` | Annulla l'ultima operazione effettuata |
| **Ripristina modifica** | `⇧ + ⌘ + Z` | Ripete l'ultima operazione annullata |

### Visualizzazione e Navigazione
| Azione | Scorciatoia | Descrizione |
| :--- | :--- | :--- |
| **Vista Tabella** | `⌃ + ⌘ + 1` | Passa alla vista tabellare con colonne |
| **Vista Mappa** | `⌃ + ⌘ + 2` | Passa alla vista geografica interattiva Apple Maps |
| **Ingrandisci miniature** | `⌘ + +` | Aumenta la dimensione delle miniature nella tabella |
| **Riduci miniature** | `⌘ + -` | Riduce la dimensione delle miniature nella tabella |
| **Anteprima rapida** | `Spazio` | Visualizza in alta risoluzione l'anteprima Quick Look |
| **Cerca** | `⌘ + F` | Sposta il focus sul campo di ricerca nella toolbar |

## Menu Seleziona: Filtri Intelligenti

Il menu a comparsa **Seleziona** (nella toolbar e nella barra dei menu) permette di isolare con un clic gli elementi che richiedono attenzione:

- **Senza data di scatto**: Isola le immagini prive di `DateTimeOriginal`.
- **Date del file diverse dalla data di scatto**: Individua i file i cui timestamp del filesystem non coincidono con il momento dello scatto (ideale prima di premere `⇧⌘L`).
- **Senza posizione**: Seleziona tutte le foto prive di coordinate GPS per geolocalizzarle rapidamente.
- **Con posizione**: Isola i file georeferenziati (ad esempio per rimuovere la posizione o esportarli).
- **Per fotocamera**: Sottomenu dinamico che raggruppa le foto per corpo macchina o obiettivo rilevato.
- **Solo foto** / **Solo video** / **Elementi da Foto**: Filtra gli elementi in base al tipo di file o alla provenienza.
- **Con modifiche**: Seleziona unicamente gli elementi con modifiche in arancione in attesa di salvataggio.
- **Con errori**: Individua file protetti da scrittura o con permessi mancanti.
