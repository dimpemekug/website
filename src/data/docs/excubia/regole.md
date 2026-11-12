---
title: "Regole"
description: "Le regole di Excubia: per app, dominio, nome con asterisco, indirizzo, intervallo CIDR, rete locale e porta; quale regola vince, firma, regole temporanee, copie, esportazione e uso."
project: "excubia"
order: 5
section: "Regole"
---

Una regola dice se un'app può raggiungere una destinazione. Nasce da un avviso, dal menu di una connessione nel registro o da **Nuova regola** nella pagina **Regole**.

## La pagina Regole

Le regole sono raggruppate per app, in ordine alfabetico. In alto si filtrano (**Tutte**, **Consenti**, **Blocca**, **Temporanee**) e si cercano per app o host. Ogni riga ha l'interruttore **Attiva**, **Modifica** e il cestino; il menu del gruppo ha **Mostra nel Finder** ed **Elimina queste regole**.

## Cosa può dire una regola

- **App**: un'app (il bundle `.app` copre anche i processi che contiene), uno strumento da riga di comando scelto con **Scegli…**, oppure **Qualsiasi processo**.
- **Azione**: Consenti o Blocca.
- **Direzione**: **In uscita** o **In entrata**.
- **Destinazione**:
  - **Qualsiasi host**;
  - un nome host o un dominio, che comprende i sottodomini (`example.com` vale anche per `www.example.com`);
  - un nome con `*`, che sta per qualsiasi sequenza di caratteri (`*.cdn.example.com`);
  - un indirizzo IP o un intervallo in notazione CIDR (`10.0.0.0/8`), IPv4 o IPv6;
  - **Rete locale**: indirizzi privati, locali e multicast.
- **Porta**: da 1 a 65535, o qualsiasi porta. In entrata è la porta locale.
- **Durata**: **Per sempre** o **Per un'ora**.
- **Insieme di regole**: **Sempre** o uno degli [insiemi](/progetti/excubia/docs/insiemi-di-regole).

## Quale regola vince

Se più regole valgono per la stessa connessione, vince la più specifica:

1. app + destinazione + porta
2. app + destinazione
3. app + porta
4. solo app
5. qualsiasi processo + destinazione + porta
6. qualsiasi processo + destinazione
7. qualsiasi processo + porta
8. qualsiasi processo

A parità vince il blocco. Un dominio, un nome con `*`, un intervallo di indirizzi e la rete locale contano allo stesso modo: tra loro non c'è una gerarchia. Le regole spente, scadute o di un insieme non attivo non contano.

Le regole vengono prima di tutto il resto, tranne **Blocca tutto**: prima delle liste di blocco, della modalità e del software considerato fidato. L'ordine completo è nella pagina **Guida** dell'app, sotto «Come si decide una connessione».

## Firma dello sviluppatore

Una regola nata da un avviso o dal registro porta il Team ID dello sviluppatore e vale solo per il codice firmato dallo stesso team: se la firma cambia, Excubia chiede di nuovo. Una regola creata scegliendo l'app con **Scegli…** non porta la firma e vale per qualsiasi versione.

## Regole temporanee

Le regole **Per un'ora** e **Fino alla chiusura dell'app** si tolgono da sole e hanno un'etichetta con la scadenza. Quelle fino alla chiusura dell'app non si salvano su disco e non si esportano.

## Uso delle regole

Ogni riga dice quante volte è scattata la regola e quando l'ultima volta, oppure **Mai usata**. Se alcune regole non scattano da 90 giorni, un riquadro lo segnala e permette di rivederle ed eliminarle insieme.

## Copie, esportazione e importazione

Dal menu **⋯**:

- **Esporta regole…** salva un file JSON (`Excubia Rules.json`).
- **Importa regole…** aggiunge le regole di un file a quelle che hai, saltando quelle già presenti.
- **Ripristina da una copia…**: Excubia salva una copia di regole e insiemi quando cambiano, al massimo una volta all'ora, e tiene le ultime 20. Il ripristino sostituisce le regole attuali, dopo averne salvato una copia.
- **Elimina tutte le regole…**

Esportazione e importazione sono anche in **Impostazioni › Dati**.
