---
title: "Agenti AI sul Mac: cosa cambia con macOS 27.3 per l'accesso ai tuoi dati"
seoTitle: "Agenti AI sul Mac: macOS 27.3 e l'accesso al disco"
description: Dal 16 novembre 2026 la seconda beta di macOS 27.3 cambia il modo in cui si concede l'Accesso completo al disco e il controllo di altre app, pensando agli agenti AI. Cosa cambia, cosa resta uguale e cosa controllare già oggi nelle impostazioni del Mac.
seoDescription: "Cosa cambia con macOS 27.3 per gli agenti AI che chiedono l'Accesso completo al disco, e quali permessi del Mac controllare già oggi per proteggere i dati."
pubDatetime: 2026-11-18T15:00:00Z
related:
  - prompt-injection-sicurezza-agenti-ai-2026
  - agenti-ai-colleghi-digitali-2026
  - macos-27-golden-gate-fine-intel-2026
tags:
  - macos
  - ai-agents
  - privacy
  - cybersecurity
draft: false
---

Un assistente AI che lavora sul Mac al posto tuo ha bisogno di vedere i file, leggere la posta, aprire le app e cliccare dove serve. Per farlo chiede permessi pensati per altri tipi di programmi, e il più potente, l'Accesso completo al disco, apre praticamente tutto. Apple ha deciso di rendere quella scelta più esplicita: le novità sono nella seconda beta di macOS 27.3, annunciata il 16 novembre 2026, e non hanno ancora una data di uscita. Nel frattempo, i permessi che hai già concesso restano dove sono, ed è il momento giusto per rivederli.

<figure>
  <img
    src="https://images.unsplash.com/photo-1654588831833-6658f38580dc?w=1200&q=80"
    alt="Lucchetto in rame aperto appoggiato sulla tastiera di un portatile, su sfondo scuro"
  />
  <figcaption class="text-center">
    L'Accesso completo al disco apre quasi tutte le porte del Mac: con gli agenti AI, Apple vuole che chi lo concede se ne accorga.
  </figcaption>
</figure>

## Il problema: un permesso pensato per i backup

macOS protegge con permessi separati le cartelle personali, la posta, i messaggi, le foto e la cronologia del browser: un'app deve chiedere, e tu puoi dire di no. L'Accesso completo al disco salta quasi tutti questi controlli. Esiste per un motivo concreto: un programma di backup deve poter copiare tutto.

Il 2 ottobre 2026 Apple ha scritto agli sviluppatori che alcuni lo usano in modi che mettono a rischio gli utenti, e che il rischio cresce man mano che gli agenti AI diventano più capaci e autonomi. Per le app di comunicazione, ha aggiunto, quel permesso tocca anche la privacy delle persone con cui scrivi. A settembre un giornalista di Inc. aveva raccontato che l'app per Mac di un assistente AI riusciva a leggere i suoi messaggi pur credendo di averle negato il permesso; l'azienda aveva risposto che l'accesso era stato concesso.

## Cosa cambia nella beta di macOS 27.3

1. **Un avviso esplicito per l'Accesso completo al disco.** Prima di concederlo compare un messaggio che dice che il Mac non potrà più proteggere i tuoi dati da quell'app, con l'elenco di cosa potrà fare: leggere, modificare, eliminare ed esportare tutti i dati, vedere le foto nascoste e quelle eliminate di recente, vedere la cronologia e l'attività del browser. Va letto e approvato voce per voce.
2. **Il controllo delle altre app diventa una categoria a sé.** La categoria che finora univa controllo del dispositivo e accesso ai dati viene divisa in due: da una parte l'Accessibilità, dall'altra una nuova voce, nella beta in inglese *System & App Protection Override*, dove scegli quali app un'altra app può comandare, chiedendo ogni volta o sempre.
3. **Un indicatore nella barra dei menu.** Quando un'app ne sta controllando un'altra, una spia lo segnala, come già succede per la fotocamera e il microfono.
4. **I permessi già concessi restano validi.** Le app che hanno già l'Accesso completo al disco lo mantengono; i programmi di backup e le tecnologie per l'accessibilità possono chiedere ad Apple di continuare a funzionare come prima.

Apple chiede inoltre agli sviluppatori di far funzionare le app anche con l'accesso a poche cartelle o a poche app. I nomi italiani delle nuove voci si vedranno con la versione definitiva, e fino all'uscita qualcosa può ancora cambiare.

## Cosa non cambia

Le nuove regole non impediscono di dare a un agente tutto l'accesso che vuoi: lo rendono solo più visibile. E non risolvono il problema principale degli agenti, la [prompt injection](/posts/prompt-injection-sicurezza-agenti-ai-2026/): un'email, una pagina web o un documento con istruzioni nascoste possono convincere l'agente a fare qualcosa che non gli hai chiesto, usando proprio i permessi che gli hai dato. Più ampi sono i permessi, più grande è il danno possibile.

## Cosa controllare oggi

Non serve aspettare macOS 27.3. In Impostazioni di Sistema › Privacy e sicurezza:

1. **Accesso completo al disco.** Guarda l'elenco e togli le app che non sono programmi di backup, antivirus o strumenti di cui sai esattamente perché ne hanno bisogno.
2. **Accessibilità.** Permette di leggere lo schermo e comandare il Mac con clic e tasti: è quello che usano gli agenti che lavorano nelle app. Lascialo solo a chi deve farlo.
3. **Automazione.** Mostra quali app possono comandarne altre, per esempio Mail o Finder. Togli le coppie che non riconosci.
4. **Registrazione schermo e audio.** Un agente che vede lo schermo vede anche le password e i messaggi che compaiono.

Quando un agente chiede l'accesso ai file, dagli una cartella di lavoro invece del disco intero, e tieni i documenti delicati altrove.

> **Suggerimento:** per provare un nuovo agente AI, crea un account utente separato sul Mac, senza la tua posta, i tuoi messaggi e le tue password. Se l'agente fa qualcosa di inatteso, lo fa in una stanza vuota.

## Cosa tenere a mente

Gli agenti AI sono utili proprio perché agiscono, e per agire hanno bisogno di accesso: il punto non è negarlo, ma concederlo sapendo cosa si concede. Le novità di macOS 27.3 vanno in questa direzione, con avvisi chiari e un indicatore visibile, ma lasciano la decisione a te. Rivedere oggi i permessi del Mac, e darne a ogni agente il minimo indispensabile, protegge i tuoi dati meglio di qualsiasi avviso futuro.
