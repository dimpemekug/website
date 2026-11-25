---
title: "Scheda tecnica e galleria fotografica"
description: "Come compilare la scheda di un orologio in Horologe: campi, valute, stato, campi personalizzati, galleria fotografica con zoom e documenti allegati."
project: "horologe"
order: 3
section: "Funzionalità"
---

## Creare la scheda di un orologio

Aggiungi un orologio dal pulsante **+** della Collezione. Obbligatori sono solo **Marca** e **Modello**; mentre scrivi la marca, Horologe propone fino a otto marche già presenti nella collezione, così ognuna si scrive sempre allo stesso modo.

I campi sono gli stessi su iOS e Android, in questo ordine.

### Foto di copertina
L'immagine che rappresenta l'orologio nella collezione. Puoi sceglierla dalla libreria oppure, su iOS, scattarla con la fotocamera.

### Informazioni
- **Marca** e **Modello**: es. *Omega Speedmaster Professional*, *Seiko SKX007*.
- **Referenza** e **Numero seriale**: i codici della manifattura.

### Dettagli
- **Movimento**: testo libero (es. automatico, carica manuale, quarzo).
- **Diametro**: es. *39 mm*.
- **Materiale cassa**: es. acciaio, titanio, oro, bronzo, ceramica.
- **Calibro**: es. *3861*, *7S26*.
- **Anno** di produzione e **Data acquisto**.

### Prezzo e valuta
Il prezzo d'acquisto con la sua valuta: €, $, £, CHF, ¥ oppure **Altra…**, per scrivere qualsiasi valuta fino a 5 caratteri (i codici in lettere diventano maiuscoli: `hkd` → `HKD`; simboli come `R$` restano come li scrivi). Ogni orologio può avere una valuta diversa. La voce **Altra…** c'è su Android dalla 2.2.0 e su iOS dall'aggiornamento successivo alla 1.3.0.

### Stato
**Posseduto**, **In riparazione**, **Venduto** o **Wishlist**. Per un orologio venduto si aggiungono **Data di vendita** e **Prezzo di vendita**, da cui le statistiche calcolano il guadagno o la perdita.

### Promemoria revisione
Un interruttore e l'intervallo tra una revisione e l'altra, da 1 a 10 anni (predefinito 2). Vedi [Revisioni, giorni al polso e precisione](/progetti/horologe/docs/revisioni-polso-e-precisione).

### Documentazione, scatola e note
Indica se hai i documenti e la scatola originali (insieme fanno un pezzo *full set*) e aggiungi note libere.

### Altri dettagli
Una sezione richiudibile con **Galleria**, **Allegati** e **Campi personalizzati**. Tutto ciò che non ha un campo dedicato (vetro, impermeabilità, riserva di carica, larghezza delle anse, cinturini…) si aggiunge come campo personalizzato, con un nome e un valore a tua scelta.

Se chiudi il modulo con modifiche non salvate, Horologe chiede se scartarle.

---

## Foto e documenti

1. **Galleria**: altre foto per quadrante, lunetta, fondello, movimento o corredo. A schermo intero si sfogliano scorrendo, con il contatore *n/N*; si ingrandiscono fino a 5× con due dita o a 2,5× con un doppio tocco (su iOS lo zoom arriva con l'aggiornamento successivo alla 1.3.0).
2. **Allegati**: garanzie, certificati, fatture e ricevute, in PDF o come immagini, ciascuno con un nome.

Prima di eliminare un allegato dalla pagina dell'orologio, Horologe chiede conferma.

### Dove restano i file
Foto e allegati vengono copiati nella memoria riservata dell'app, nella cartella `watch_images`. Horologe li ritrova per nome anche se il percorso della cartella dell'app cambia dopo un aggiornamento di sistema.
