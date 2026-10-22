---
title: "Lettore di manga e webtoon"
description: "Modalità di lettura per manga e fumetti occidentali, scorrimento continuo dei webtoon, ingrandimento con Core ML e Testo attivo in rManga."
project: "rmanga"
order: 3
section: "Fumetti"
---

## Versi di lettura

Il lettore di rManga si adatta a ogni tipo di fumetto. In tutte le modalità puoi ingrandire con un pizzico o un doppio tocco, e un tocco singolo mostra o nasconde i controlli.

### 1. Da destra a sinistra (manga)
Il verso dei manga giapponesi: un tocco sul lato sinistro dello schermo o uno scorrimento verso destra porta alla pagina successiva, rispettando l'impaginazione originale.

### 2. Da sinistra a destra (fumetto occidentale)
Il verso di graphic novel europee e comic book americani.

### 3. Scorrimento verticale (webtoon e manhwa)
Pensato per i fumetti digitali verticali:
- **Nessuna interruzione**: le tavole si susseguono senza bordi né spazi tra una e l'altra.
- **Viste riciclate**: la striscia è una `UIScrollView` in cui solo le pagine vicine allo schermo hanno una vista, riciclata da pagina a pagina, così lo scorrimento resta fluido anche con capitoli lunghissimi e pagine molto alte.
- **Scorrimento infinito**: arrivando alla fine di un capitolo, il successivo si aggancia alla striscia e quello appena finito viene segnato come letto, senza tornare all'elenco.

---

## Funzioni del lettore

### Doppia pagina e pagine larghe
- **Doppia pagina su iPad**: con l'iPad in orizzontale, rManga affianca due pagine come in un volume aperto; la copertina resta da sola e, in modalità manga, la pagina successiva va a sinistra. Si disattiva dal menu del lettore o dalle Impostazioni.
- **Dividi le pagine larghe**: se una scansione contiene due pagine affiancate, rManga può mostrarne una metà alla volta, nel verso di lettura della serie.

### Ingrandimento con Core ML
Nessun modello è incluso, ma puoi importare il tuo modello Core ML (`.mlmodel` o `.mlpackage`) nelle impostazioni di lettura. Viene compilato all'importazione e applicato alle pagine con una risoluzione inferiore al limite scelto, per renderle più nitide.

### Testo attivo (Live Text)
Attivando Testo attivo nelle impostazioni, iOS riconosce il testo delle pagine e lo rende selezionabile, per:
- copiarlo negli appunti;
- tradurlo o cercarlo dal menu di selezione di sistema.

Le azioni rapide sono disattivate, perché si prenderebbero i tocchi che girano pagina. Sui dispositivi che non supportano Testo attivo l'opzione non compare.

### Zone di tocco e gesti
- **Zone di tocco**: scegli come dividere lo schermo per girare pagina (sinistra-destra, a elle, Kindle, bordi o disattivate), con i lati scambiabili e un'anteprima grafica.
- **Chiusura rapida**: nelle modalità a pagine, trascina in giù una pagina non ingrandita per chiudere il lettore. Nel webtoon si chiude con uno swipe dal bordo sinistro, e tirando la striscia in giù dalla cima si apre il capitolo precedente.
- **Pagine da precaricare**: da 1 a 10 pagine tenute pronte in anticipo.
