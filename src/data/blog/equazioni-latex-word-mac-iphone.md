---
title: "Equazioni in LaTeX nei documenti Word, su Mac, iPhone e iPad"
description: Scrivi le formule in LaTeX ma devi consegnare un file .docx? Come Word, Pages e LibreOffice trattano le equazioni, perché un'immagine non basta e come ottenere equazioni che il destinatario può ancora modificare.
seoTitle: "Equazioni LaTeX in Word su Mac, iPhone e iPad"
seoDescription: "Come scrivere equazioni in LaTeX e salvarle come vere equazioni di Word o LibreOffice su Mac, iPhone e iPad, e quali errori evitare nello scambio dei file."
pubDatetime: 2026-11-27T08:00:00Z
related:
  - note-markdown-collegate-mac-iphone
  - local-first-app-offline-sincronizzazione-2026
  - convertire-heic-jpeg-mac-iphone
relatedProjects:
  - documenta
tags:
  - macos
  - productivity
  - mobile
draft: false
---

Una tesi con trenta formule, una relazione di laboratorio, gli esercizi da mandare al professore: chi studia o lavora con la matematica scrive spesso le equazioni in LaTeX, perché è veloce e preciso. Poi però arriva la richiesta di consegnare un file Word, e lì cominciano i problemi: formule incollate come immagini che nessuno può correggere, simboli che spariscono aprendo il file su un altro computer, matrici che diventano testo. Il punto è capire come i programmi di videoscrittura salvano le equazioni, e scegliere una strada che le lasci modificabili.

<figure>
  <img
    src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&q=80"
    alt="Primo piano di un foglio stampato con un sistema di quattro equazioni lineari, con le ultime righe a fuoco"
  />
  <figcaption class="text-center">
    Un sistema di equazioni stampato: perché resti modificabile, nel file deve essere un'equazione, non un'immagine.
  </figcaption>
</figure>

## Come un documento conserva un'equazione

LaTeX è un modo di scrivere le formule, non il formato in cui un documento le salva. Ogni programma traduce quello che scrivi nel suo formato:

1. **Word (.docx)** salva le equazioni in Office Math (OMML), il formato dell'editor di equazioni di Word. Un'equazione così si apre, si ingrandisce e si corregge in Word come quelle scritte a mano.
2. **LibreOffice (.odt)** salva le formule in MathML, lo standard del web per la matematica.
3. **Un'immagine** di una formula, invece, è solo un disegno: si vede, ma non si cerca, non si corregge e spesso esce sfocata in stampa o ingrandita.

Quindi la domanda giusta non è "posso scrivere in LaTeX?", ma "il file che consegno contiene equazioni vere?".

## In Word

Nelle versioni di Word per Microsoft 365 l'editor di equazioni accetta il LaTeX. Si inserisce un'equazione con **Inserisci › Equazione** (o <kbd>Alt</kbd> <kbd>=</kbd> su Windows, <kbd>Ctrl</kbd> <kbd>=</kbd> su Mac), si sceglie il formato LaTeX nella scheda **Equazione** e si scrive la formula; il comando di conversione (<kbd>Ctrl</kbd> <kbd>=</kbd> su Windows, <kbd>⌘</kbd> <kbd>=</kbd> su Mac) la trasforma nella versione impaginata.

I limiti da conoscere:

1. **Niente ambienti.** Word non accetta `\begin{...}` ed `\end{...}`: le matrici si scrivono con la sua sintassi, come `\matrix{...}`, non con `pmatrix`.
2. **Non tutto il LaTeX.** Alcuni comandi non sono riconosciuti e non si possono definire macro proprie.
3. **Nessuna conversione automatica.** La formula resta in forma lineare finché non chiedi la conversione: con molte equazioni conviene imparare la scorciatoia.

## In Pages

Pages per Mac ha **Inserisci › Equazione**, dove si scrive in LaTeX o in MathML; un doppio clic sull'equazione la riapre per modificarla. Accetta però solo una parte dei comandi LaTeX. Pages esporta in Word, ma per le equazioni Apple non dice come vengono convertite: prima di consegnare un documento importante, apri il file esportato in Word e controlla le formule più complesse.

## In LibreOffice

LibreOffice Math non usa il LaTeX: ha una sua sintassi (per esempio `a over b` per una frazione). Per portare dentro formule scritte in LaTeX serve un passaggio intermedio: convertirle in MathML con uno strumento esterno e importarle con il comando di Math che legge il MathML dagli appunti (nel menu Strumenti), oppure usare un'estensione come TexMaths, che però inserisce le formule come immagini. Il risultato dell'importazione va ricontrollato, perché MathML e la sintassi di LibreOffice non coincidono del tutto.

## Su Mac, iPhone e iPad con Documenta

[Documenta](/progetti/documenta/), l'elaboratore di testi gratuito per Mac, iPhone e iPad, ha un editor di equazioni pensato per chi scrive già in LaTeX:

1. **LaTeX con anteprima.** Scrivi la formula e vedi subito il risultato; i modelli (frazione, radice, somma, integrale, matrice, casi…) inseriscono lo scheletro da completare.
2. **Ambienti compresi.** `pmatrix`, `bmatrix`, `cases` e `align*` funzionano come in LaTeX.
3. **Equazioni vere nei file.** Nel .docx diventano equazioni di Word, nel .odt formule di LibreOffice, nel Markdown restano LaTeX tra `$`; anche le equazioni dei documenti ricevuti si aprono e si correggono.
4. **Nel testo o su una riga da sola.** Una formula può stare nella riga come una parola o, più grande, su una riga sua.

La [guida alle equazioni](/progetti/documenta/docs/equazioni/) elenca i comandi riconosciuti e cosa succede in ogni formato. Come in ogni programma, nei formati che non hanno le equazioni (RTF, il vecchio .doc) le formule diventano immagini.

> **Suggerimento:** tieni il sorgente LaTeX delle formule più lunghe in un file di testo a parte. Se un passaggio tra programmi rovina un'equazione, la riscrivi in pochi secondi invece di ricostruirla simbolo per simbolo.

## Prima di consegnare il file

Qualche controllo che evita brutte sorprese:

1. **Apri il file dove lo aprirà il destinatario.** Un .docx con le equazioni va provato in Word, un .odt in LibreOffice: è lì che si vede se le formule sono rimaste equazioni.
2. **Evita i formati che non hanno le equazioni.** RTF e .doc le trasformano in immagini, il testo semplice in codice.
3. **Diffida delle formule incollate da siti e chat.** Spesso arrivano come immagini o come caratteri Unicode sparsi: meglio riscriverle in LaTeX.
4. **Controlla matrici e sistemi.** Sono le parti che si rompono più spesso nel passaggio tra un programma e l'altro.

## Cosa tenere a mente

Il LaTeX resta il modo più rapido di scrivere matematica, e i programmi di videoscrittura hanno smesso di ignorarlo: Word lo accetta nel suo editor, Pages lo usa per le equazioni, altre app lo traducono direttamente nei formati di Word e LibreOffice. Quello che conta è il file finale: se dentro ci sono equazioni vere, chi lo riceve può leggerle, correggerle e continuare il lavoro.
