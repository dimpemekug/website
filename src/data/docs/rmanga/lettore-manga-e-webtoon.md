---
title: "Lettore Manga e Webtoon"
description: "Modalità di lettura per fumetti giapponesi e occidentali, scorrimento continuo Webtoon, upscaling Core ML e Live Text in rManga."
project: "rmanga"
order: 3
section: "Fumetti"
---

## Direzioni di Lettura e Paginazione

Il lettore visuale di rManga si adatta a qualsiasi stile editoriale:

### 1. Da Destra a Sinistra (Manga Tradizionale)
L'orientamento canonico per il fumetto giapponese. Un tocco sulla parte sinistra dello schermo o uno scorrimento verso destra fa avanzare la pagina, rispettando l'impaginazione originale dell'autore.

### 2. Da Sinistra a Destra (Fumetto Occidentale)
L'orientamento standard per graphic novel europee, comic book americani e album spillati.

### 3. Scorrimento Continuo Verticale (Webtoon / Manhwa)
Ottimizzato specificamente per fumetti verticali digitali:
- **Zero Interruzioni**: le tavole si susseguono a cascata senza bordi neri o cornici divisorie.
- **Memoria Dinamica a Viste Riciclate**: gestito con `UIScrollView` nativa in cui solo le immagini visibili a schermo vengono caricate in memoria, mantenendo l'esperienza a 120 Hz anche su capitoli lunghissimi composti da dozzine di megapixel.
- **Scorrimento Infinito**: al termine di un capitolo, il capitolo successivo si aggancia automaticamente in coda senza dover tornare all'elenco.

---

## Funzionalità Avanzate del Lettore

### Doppia Pagina e Divisione Pagine Larghe
- **Doppia Pagina su iPad**: quando impugni l'iPad in orizzontale (*landscape*), rManga affianca due pagine simulando la lettura di un volume cartaceo aperto, mantenendo la copertina singola.
- **Dividi Scansioni Doppie**: se una scansione contiene due pagine unite in un'unica immagine orizzontale, rManga può dividerla a metà e mostrarla ordinatamente in sequenza.

### Upscaling con Modelli Core ML
Puoi importare modelli di intelligenza artificiale Core ML (`.mlmodel` o `.mlpackage`) da applicare in tempo reale alle scansioni a bassa risoluzione. L'elaborazione sfrutta il Neural Engine del dispositivo Apple per aumentare la nitidezza di retini e tratti a matita senza sfocature.

### Testo Attivo (Apple Live Text)
Grazie all'integrazione di Live Text di iOS, puoi selezionare con il dito qualsiasi balloon di testo o onomatopea presente sulla pagina per:
- Copiare il testo negli appunti.
- Tradurre istantaneamente frasi in lingua straniera (giapponese, inglese, francese).
- Cercare definizioni o effettuare ricerche su Safari.

### Zone di Tocco e Gesti
- **Zone Personalizzabili**: scegli come suddividere i comandi a tocco (stile classico, stile Kindle, tocco a "L").
- **Chiusura Rapida**: trascina verso il basso una pagina non ingrandita per chiudere il lettore e tornare all'indice. Nel webtoon puoi utilizzare lo swipe dal bordo sinistro per uscire comodamente con una sola mano.
