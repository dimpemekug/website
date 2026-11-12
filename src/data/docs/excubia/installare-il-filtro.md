---
title: "Installare il filtro"
description: "Come installare il filtro di rete di Excubia: i due permessi di macOS, gli stati del filtro, cosa succede quando chiudi l'app e come disinstallare il filtro."
project: "excubia"
order: 2
section: "Iniziare"
---

Excubia controlla le connessioni con un filtro di rete che macOS installa come estensione di sistema. Servono tre passi, e due permessi.

## I tre passi

1. **Installa il filtro di rete**: dall'ultima pagina della guida al primo avvio (**Installa il filtro**) o dalla **Panoramica**.
2. **Consentilo in Impostazioni di Sistema**: in **Generali › Elementi login ed estensioni › Estensioni di rete** attiva Excubia. Il pulsante **Apri Impostazioni di Sistema** porta direttamente lì.
3. **Consenti il filtro dei contenuti**: macOS chiede se Excubia può filtrare i contenuti di rete; scegli **Consenti**.

Perché macOS carichi il filtro, l'app deve stare nella cartella **Applicazioni**.

## Gli stati del filtro

La Panoramica, le Impostazioni e il pannello della barra dei menu mostrano lo stato:

| Stato | Cosa vuol dire |
|---|---|
| **Controllo…** | Excubia sta chiedendo lo stato a macOS |
| **Non installato** | il filtro non è ancora stato installato |
| **Installazione…** | l'installazione è in corso |
| **In attesa di approvazione** | manca il permesso in Impostazioni di Sistema |
| **Protezione spenta** | il filtro è installato ma spento: ogni app si connette liberamente |
| **Protezione attiva** | ogni connessione viene controllata |
| **Errore** | l'installazione o l'attivazione non è riuscita |

L'interruttore **Protezione** nella Panoramica e nel pannello accende e spegne il filtro. Quando l'app viene aggiornata macOS spegne il filtro: se lo avevi acceso, Excubia lo riaccende da sola.

## Finestra, uscita e avvio al login

- **Chiudere la finestra** non chiude Excubia, che resta nella barra dei menu. Anche <kbd>⌘</kbd> <kbd>Q</kbd> chiude solo la finestra.
- **Per uscire davvero** usa **Esci** nel pannello della barra dei menu. Regole e liste di blocco restano attive nel filtro. In modalità Chiedi, però, finché non riapri l'app le connessioni nuove passano senza avviso e il registro le segna come **App non aperta**.
- Con **Apri al login** (Impostazioni › Generali) Excubia parte all'accensione nella sola barra dei menu. Gli avvisi compaiono solo mentre l'app è aperta.

## Disinstallare il filtro

In **Impostazioni › Filtro di rete** ci sono **Reinstalla**, **Apri Impostazioni di Sistema** e **Disinstalla…**. Disinstallando, le connessioni non vengono più controllate, ma le regole restano salvate per quando reinstallerai il filtro.
