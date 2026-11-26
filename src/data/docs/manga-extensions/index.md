---
title: "Installazione e impostazioni"
description: "Come aggiungere i repository delle estensioni manga in Legendum, Aidoku e Paperback, cambiare il dominio di una fonte e risolvere i problemi più comuni."
project: "manga-extensions"
order: 1
section: "Iniziare"
---

## Quale repository scegliere

Ogni fonte è pubblicata in due formati, con gli stessi contenuti:

- **Repository Aidoku** (`index.min.json`): per Aidoku e per Legendum.
- **Repository Paperback** (cartella con `versioning.json`): per Paperback 0.9 e per Legendum.

In Legendum puoi aggiungerli tutti e due, ma di solito ne basta uno. Le differenze tra le versioni di ogni fonte sono nella [pagina del progetto](/progetti/manga-extensions/).

## Aggiungere un repository

### Con un tocco

Dall'iPhone o dall'iPad apri la pagina del repository:

- [Repository Aidoku](https://dimpemekug.github.io/Aidoku-Extensions/): pulsanti **Aggiungi ad Aidoku** e **Aggiungi a Legendum**
- [Repository Paperback](https://dimpemekug.github.io/Paperback-Extensions/): pulsanti **Aggiungi a Paperback** e **Aggiungi a Legendum**

Il pulsante apre l'app con l'indirizzo già compilato. Sulla stessa pagina c'è **Copia indirizzo**.

### A mano

Copia l'indirizzo:

```
https://dimpemekug.github.io/Aidoku-Extensions/index.min.json
```

```
https://dimpemekug.github.io/Paperback-Extensions/
```

e incollalo nell'app:

| App | Dove |
|---|---|
| **Legendum** | *Impostazioni › Fonti › Aggiungi repository*: accetta sia la lista Aidoku sia il repository Paperback |
| **Aidoku** | *Impostazioni › Liste di fonti*, poi **+** |
| **Paperback** | *Impostazioni › Estensioni › Repository*, poi **+** |

Poi apri il repository e installa la fonte. Gli aggiornamenti arrivano dallo stesso repository.

## Impostazioni della fonte

### Dominio

I siti di manga cambiano spesso indirizzo. Ogni fonte ha nelle sue impostazioni il campo **Dominio**:

- lascialo vuoto per usare l'indirizzo predefinito (per MangaWorld ITA `https://www.mangaworld.me`);
- se il sito si sposta, scrivi il nuovo indirizzo e continua a leggere, senza aspettare un aggiornamento.

Nella versione Paperback trovi anche **Ripristina il dominio predefinito** e la riga **In uso**, che mostra l'indirizzo attuale.

### Contenuti per adulti

Le serie con generi per adulti o maturi sono segnate come tali: l'app le mostra solo se lo hai scelto nelle sue impostazioni.

## Se qualcosa non va

- **Una serie non si apre o mancano capitoli**: prova ad aprirla sul sito. Se lì funziona, apri una segnalazione nel repository su GitHub ([Aidoku](https://github.com/dimpemekug/Aidoku-Extensions/issues), [Paperback](https://github.com/dimpemekug/Paperback-Extensions/issues)) con il titolo della serie.
- **Non si apre più niente**: controlla se il sito ha cambiato dominio e aggiornalo nelle impostazioni della fonte.
- **In Legendum la versione Paperback chiede una verifica Cloudflare che non riesce**: Legendum non gestisce ancora tutte le verifiche Cloudflare delle estensioni Paperback. Usa la versione Aidoku della stessa fonte.

## Account e privacy

Non serve un account sul sito: le fonti leggono solo le pagine pubbliche. Libreria, progressi e download restano nell'app che usi. Le estensioni non raccolgono dati e non hanno pubblicità.
