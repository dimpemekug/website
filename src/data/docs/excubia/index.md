---
title: "Introduzione a Excubia"
description: "Cos'è Excubia, il firewall per le app del Mac: come funziona il filtro di rete, com'è fatta la finestra e cosa succede al primo avvio."
project: "excubia"
order: 1
section: "Iniziare"
---

Excubia è un firewall per le app del Mac. Per ogni nuova connessione vede quale app la apre e verso quale destinazione, e decide se lasciarla passare: secondo le tue regole o, se l'app non ne ha ancora una, chiedendotelo con un avviso. Il lavoro lo fa un **filtro di rete** di macOS, installato come estensione di sistema, che decide solo se consentire o bloccare: non legge il contenuto delle connessioni.

## Le parti dell'app

- **Il filtro** decide per ogni connessione, tiene le regole e le liste di blocco e continua a lavorare anche quando chiudi la finestra o esci dall'app.
- **L'app** mostra gli avvisi, il registro e le impostazioni. Vive nella barra dei menu: l'icona nel Dock compare solo mentre la finestra è aperta.
- **Il widget**, i **Comandi rapidi** e il **filtro Full immersion** permettono di cambiare modalità senza aprire la finestra.

## La finestra

La barra laterale ha due sezioni:

- **Firewall**: **Panoramica** (stato, contatori, dati scambiati, modalità), **Connessioni** (il registro), **Regole** (con il numero di regole accanto) e **Liste di blocco** (con il numero di liste attive).
- **App**: **Guida**, **Impostazioni** e **Informazioni**.

La pagina aperta si ricorda tra un avvio e l'altro.

## Al primo avvio

Una guida in cinque pagine spiega cos'è Excubia, i due permessi che macOS chiede, la modalità con cui cominciare (Chiedi, consigliata, Consenti in silenzio o Blocca in silenzio) e come si risponde a un avviso. L'ultima pagina installa il filtro: vedi [Installare il filtro](/progetti/excubia/docs/installare-il-filtro). La guida si riapre da **Guida › Mostra di nuovo** o dal menu **Aiuto › Mostra l'introduzione**.

## Cosa trovi nella guida

- [Installare il filtro](/progetti/excubia/docs/installare-il-filtro): permessi di macOS, stati del filtro, disinstallazione e uscita dall'app
- [Rispondere agli avvisi](/progetti/excubia/docs/rispondere-agli-avvisi): cosa mostra un avviso, ambito, durata e tempo limite
- [Modalità e profili](/progetti/excubia/docs/modalita-e-profili): Chiedi, Consenti e Blocca in silenzio, Blocca tutto; Standard ed Esperto
- [Regole](/progetti/excubia/docs/regole), [Insiemi di regole](/progetti/excubia/docs/insiemi-di-regole) e [Modalità apprendimento](/progetti/excubia/docs/modalita-apprendimento)
- [Liste di blocco e DNS cifrato](/progetti/excubia/docs/liste-di-blocco-e-dns-cifrato) e [Registro delle connessioni](/progetti/excubia/docs/registro-delle-connessioni)
- [Barra dei menu e Mac sveglio](/progetti/excubia/docs/barra-dei-menu-e-mac-sveglio) e [Comandi rapidi, Full immersion e widget](/progetti/excubia/docs/comandi-rapidi-full-immersion-e-widget)
- [Impostazioni](/progetti/excubia/docs/impostazioni) e [Scorciatoie da tastiera](/progetti/excubia/docs/scorciatoie)

## Requisiti

Mac con chip Apple (Apple silicon) e macOS 15 Sequoia o successivo. L'app deve stare nella cartella **Applicazioni**: macOS carica il filtro solo da lì. Excubia è gratuita, senza pubblicità né acquisti in-app, non chiede account e non manda dati allo sviluppatore: vedi l'[informativa sulla privacy](/progetti/excubia/privacy/). L'interfaccia è in italiano e in inglese.
