---
title: "Ridimensionamento, preset e qualità"
description: "Misure in pixel e in percentuale, avviso sugli ingrandimenti, preset predefiniti e personalizzati, formati di uscita, qualità JPEG e peso stimato in Resizo."
project: "resizo"
order: 2
section: "Funzionalità"
---

## Modalità di ridimensionamento

Nella sezione **Dimensioni** del pannello delle opzioni scegli tra **Pixel** e **Percentuale**. Sotto il titolo una frase riassume cosa succederà, per esempio "Larghezza fissa a 1920 px, altezza proporzionale".

### 1. In pixel
Tra i campi **Larghezza** e **Altezza** c'è un lucchetto. Con il lucchetto chiuso (**Proporzioni bloccate**, l'impostazione predefinita):
- **Solo larghezza**: imposta la larghezza (es. 1200 px) e lascia vuota l'altezza, che segue le proporzioni.
- **Solo altezza**: imposta l'altezza (es. 800 px); la larghezza segue le proporzioni.
- **Larghezza e altezza**: indichi un riquadro massimo (es. 1920×1080 px). Ogni immagine entra nel riquadro, senza deformarsi né essere ritagliata.

Con il lucchetto aperto (**Proporzioni libere**) ogni immagine diventa esattamente della misura indicata, anche a costo di deformarsi.

Nei campi, le frecce <kbd>↑</kbd> e <kbd>↓</kbd> cambiano la misura di 1 pixel, o di 10 tenendo premuto <kbd>⇧</kbd>. Il pulsante **Scambia larghezza e altezza** inverte le due misure.

### 2. In percentuale
Scala ogni immagine **dal 5% al 300%** della sua risoluzione. I pulsanti **25%**, **50%**, **75%** e **100%** impostano i valori più comuni; il cursore e il campo accanto accettano qualsiasi valore nell'intervallo.

### Nuova dimensione e ingrandimenti
La colonna **Nuova dimensione** dell'elenco mostra in anticipo la risoluzione finale di ogni immagine e di quanto cambia in percentuale. Le immagini che uscirebbero **più grandi dell'originale** sono in arancione e il pannello dice quante sono: ingrandendo, un'immagine può perdere nitidezza. Per sicurezza il lato lungo in uscita non supera i 16.384 pixel.

---

## Preset predefiniti e personalizzati

Al primo avvio la barra laterale propone quattro preset; un clic applica le misure e il preset in uso viene evidenziato:
- **Web**: 1920 px di larghezza, per siti, blog e presentazioni.
- **Social**: 1080 px di larghezza, per i post sui social network.
- **Icona**: 512×512 px, quadrato, per avatar e immagini del profilo.
- **Email**: 800 px di larghezza, immagini leggere da allegare.

### Creare e gestire i preset
- **Dalle opzioni**: il pulsante **Salva queste dimensioni come preset**, accanto al titolo della sezione Dimensioni, crea un preset con le misure correnti.
- **Gestisci preset…** (in fondo alla barra laterale, o in Impostazioni › Preset): i preset spuntati compaiono nella barra laterale, nell'ordine dell'elenco. Puoi trascinarli per riordinarli, crearne di nuovi con **Nuovo preset…** (nome, larghezza, altezza e **Adatta mantenendo le proporzioni**), rinominarli ed eliminarli.
- **Ripristina i preset predefiniti…** riporta Web, Social, Icona ed Email; i preset che hai creato vengono eliminati.

---

## Formato di uscita e qualità JPEG

Nella sezione **Formato e qualità**:
- **Originale**: cambia solo le dimensioni e mantiene il formato di partenza (con i JPEG vale la qualità scelta).
- **PNG**: compressione senza perdita che conserva la trasparenza, adatta a loghi, grafiche e screenshot.
- **JPEG**: compressione con un cursore di **Qualità** dal 10% al 100% (predefinito 85%; doppio clic sul cursore per tornarci). Un valore tra l'80% e l'85% riduce molto il peso senza differenze evidenti.

---

## Peso stimato

In fondo al pannello delle opzioni, **Peso stimato** indica quanto peseranno in tutto i file in uscita e di quanto scendono rispetto agli originali. Resizo lo calcola ridimensionando davvero, in memoria, alcune immagini di prova per ogni formato e proiettando il risultato sulle altre: è una stima, non il peso esatto. Si aggiorna quando cambi misure, formato o qualità.
