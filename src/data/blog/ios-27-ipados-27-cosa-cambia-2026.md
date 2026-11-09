---
title: "iOS 27 e iPadOS 27: cosa cambia in Europa e per chi sviluppa"
description: iOS 27 e iPadOS 27 sono usciti il 14 settembre 2026, ma la novità principale, Siri AI, in Europa non c'è. Cosa arriva davvero su iPhone e iPad italiani, e cosa devono controllare gli sviluppatori prima di compilare con il nuovo SDK.
seoDescription: "iOS 27 è uscito il 14 settembre 2026 senza Siri AI in Europa: cosa arriva su iPhone e iPad italiani e cosa devono controllare gli sviluppatori."
pubDatetime: 2026-11-09T08:00:00Z
related:
  - macos-27-golden-gate-fine-intel-2026
  - prompt-injection-sicurezza-agenti-ai-2026
  - modelli-ai-on-device-2026
tags:
  - operating-systems
  - mobile
  - software-development
  - ai
draft: true
---

Il 14 settembre 2026 Apple ha rilasciato iOS 27 e iPadOS 27, insieme a [macOS 27 Golden Gate](/posts/macos-27-golden-gate-fine-intel-2026/). La novità su cui Apple ha costruito tutta la presentazione è Siri AI, un assistente riscritto da capo e capace di conversare. Chi legge dall'Italia, però, deve partire da un dettaglio: su iPhone e iPad venduti nell'Unione Europea Siri AI non è disponibile, e Apple non ha dato una data. Il resto dell'aggiornamento c'è, ed è più utile di quanto il silenzio sulla parte europea faccia pensare.

<figure>
  <img
    src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80"
    alt="iPhone con custodia in pelle marrone e schermata di blocco accesa, appoggiato su un tavolo di legno accanto a un paio di AirPods Pro"
  />
  <figcaption class="text-center">
    Per installare iOS 27 basta un iPhone 11; per Siri AI serve almeno un iPhone 15 Pro, e fuori dall'Unione Europea.
  </figcaption>
</figure>

## Quali iPhone e iPad lo ricevono

iOS 27 richiede un chip A13 Bionic o successivo: in pratica tutti gli iPhone che avevano iOS 26, dall'iPhone 11 e dall'iPhone SE di seconda generazione in poi. Nessun modello perde il supporto quest'anno.

Per iPadOS 27 la lista parte dall'iPad di nona generazione, dall'iPad mini di sesta generazione, dall'iPad Air di quarta generazione e dagli iPad Pro 11 pollici di seconda generazione e 12,9 pollici di quarta.

Il confine vero sta altrove, nelle funzioni di Apple Intelligence:

1. **Siri AI su iPhone** richiede un iPhone 15 Pro o 15 Pro Max, o un qualsiasi iPhone 16 o successivo.
2. **Siri AI su iPad** richiede un iPad con chip M1 o successivo, o l'iPad mini con A17 Pro.
3. **Le voci espressive e la dettatura migliorata su iPad** richiedono un chip M4 o successivo con almeno 12 GB di memoria.
4. **Le funzioni più pesanti**, come la generazione di immagini, hanno limiti giornalieri che Apple non pubblica, più alti per chi paga iCloud+.

## Siri AI e l'Europa

Apple ha annunciato il ritardo europeo l'8 giugno 2026, il giorno stesso della presentazione, attribuendolo al Digital Markets Act. Secondo Apple, le autorità europee leggono il regolamento come un obbligo di dare a qualsiasi sistema di intelligenza artificiale un accesso ampio al dispositivo e la possibilità di agire da solo, senza che l'utente veda o controlli cosa succede. Apple sostiene che sia un rischio per sicurezza e privacy, citando le ricerche sugli agenti che si possono dirottare per rubare dati: è lo stesso problema della [prompt injection](/posts/prompt-injection-sicurezza-agenti-ai-2026/). Le proposte alternative di Apple, tra cui un intermediario di sistema e un'introduzione graduale in 18 mesi, non sono state accettate.

Il risultato pratico, verificato all'uscita di iOS 27.2 il 26 ottobre:

1. **Su iPhone, iPad e Apple Watch** Siri AI non c'è: niente app Siri per riprendere le conversazioni, niente modalità Siri nella Fotocamera, niente strumenti di scrittura integrati in Siri. Apple Watch è escluso perché dipende dall'iPhone abbinato.
2. **Su Mac e Apple Vision Pro** Siri AI funziona anche in Europa, purché il dispositivo sia impostato su una lingua supportata.
3. **L'italiano non è ancora tra le lingue.** Siri AI è partita solo in inglese, in versione beta e con una lista d'attesa; con la 27.2 sono arrivati francese, giapponese, coreano, portoghese e spagnolo.
4. **Gli sviluppatori europei** non possono provare né usare le nuove funzioni di Siri AI nelle loro app su iOS, iPadOS e watchOS.

## Cosa arriva comunque su iPhone e iPad

Tolta Siri AI, iOS 27 resta un aggiornamento con parecchie cose concrete:

1. **Liquid Glass regolabile.** In Impostazioni c'è un cursore che porta l'aspetto del sistema da trasparente a completamente colorato: la risposta di Apple alle critiche sulla leggibilità di iOS 26.
2. **Prestazioni.** Apple dichiara app che si aprono più in fretta, foto appena scattate che si caricano prima e trasferimenti AirDrop più veloci.
3. **Controlli parentali.** Con «Chiedi per navigare» un bambino deve chiedere il permesso per i siti nuovi; si aggiungono orari per le app e tempi giornalieri per categoria.
4. **Volumi separati** per sveglie e timer, e un equalizzatore personalizzato per gli AirPods.
5. **Safari** raggruppa le schede per argomento e può avvisarti quando una pagina cambia, per esempio se un prezzo scende.
6. **Su iPad**, le app per iPhone si possono ridimensionare come le altre finestre e i trasferimenti da e verso un disco esterno sono più veloci.

## Cosa cambia per chi sviluppa

Xcode 27 porta Swift 6.4 e l'SDK di iOS 27. Ricompilare un'app con il nuovo SDK non è indolore, per due motivi che Apple aveva annunciato con un anno di anticipo:

1. **Il ciclo di vita a scene è obbligatorio.** La nota tecnica TN3187 lo dice chiaramente: dalla versione principale successiva a iOS 26, un'app compilata con l'SDK più recente che non adotta `UIScene` non si avvia. Chi ha ancora tutto in `UIApplicationDelegate` deve aggiungere un `UIWindowSceneDelegate` e spostarci la gestione della finestra e degli stati attiva/sospesa. Non serve supportare più finestre: basta adottare le scene.
2. **Liquid Glass non si può più rimandare.** La chiave `UIDesignRequiresCompatibility` di `Info.plist`, che con iOS 26 permetteva di mantenere il vecchio aspetto, viene ignorata quando si compila per iOS 27 o successivo. Un'app che la usava cambia aspetto alla prima build con Xcode 27, anche se nel codice non è cambiato nulla.
3. **Le schermate non hanno più una forma fissa.** Le app per iPhone ridimensionabili su iPad e l'iPhone Duo, il primo iPhone pieghevole, in vendita dal 23 ottobre con uno schermo interno da 7,6 pollici e uno esterno da 5,4, premiano i layout adattivi e puniscono quelli pensati per una sola misura. L'iPhone Duo usa Touch ID: un testo che dice «usa Face ID» lì è sbagliato.

> **Suggerimento:** per sapere se un'app è a rischio senza installare Xcode 27, avviala su iOS 26 e guarda la console: se compare «UIScene lifecycle will soon be required», con il nuovo SDK non partirà. Poi cerca `UIDesignRequiresCompatibility` nei file `Info.plist` del progetto, compresi quelli delle estensioni.

Per ora Apple non ha pubblicato una data da cui App Store Connect accetterà solo app compilate con l'SDK di iOS 27: il requisito in vigore, dal 28 aprile 2026, è ancora Xcode 26. Negli anni passati la soglia si è alzata ad aprile, ma finché Apple non la annuncia è una previsione. Il momento giusto per fare la migrazione resta comunque adesso, con calma, invece che a ridosso della scadenza.

## Cosa aspettarsi da qui in avanti

iOS 27.3 è in beta dal 3 novembre e Apple continua ad aggiungere lingue a Siri AI, ma il nodo europeo non è tecnico: dipende da un accordo con la Commissione che oggi non ha una scadenza. Anche quando l'italiano entrerà tra le lingue, sugli iPhone venduti in Italia servirà comunque quell'accordo.

Nel frattempo, per chi usa iPhone e iPad in Italia iOS 27 è soprattutto un aggiornamento di rifinitura: più leggibile, più veloce, con controlli parentali finalmente seri. Per chi sviluppa è l'anno in cui due rinvii comodi, il vecchio ciclo di vita e il vecchio aspetto, smettono di funzionare: meglio scoprirlo su una build di prova che dalle recensioni.
