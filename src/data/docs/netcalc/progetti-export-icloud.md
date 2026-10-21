---
title: "Progetti, Topologia ed Esportazione"
description: "Gestione dei progetti di laboratorio in NetCalc Pro, diagramma di topologia automatico, report PDF con CoreGraphics, esportazione CSV/TXT e sincronizzazione CloudKit."
project: "netcalc"
order: 8
section: "Gestione e Condivisione"
---

## Gestione dei Progetti di Laboratorio

In NetCalc Pro, la progettazione di una topologia non si limita a calcoli isolati: ogni configurazione può essere salvata, organizzata e strutturata all'interno di **Progetti** persistenti.

Ogni progetto ospita un insieme completo di apparati (`CiscoDevice`):

- **Router e Switch**: con le rispettive porte fisiche (`GigabitEthernet`, `FastEthernet`, `Serial`) e logiche (sub-interfacce 802.1Q e SVI VLAN).
- **Tabelle di Routing**: route statiche e protocolli di routing dinamico (OSPF, RIPv2, EIGRP).
- **Servizi e Sicurezza**: server DHCP dedicati per le LAN, traduzioni NAT/PAT (con overload), Access Control List (standard ed estese) e parametri di hardening del sistema operativo.
- **Note di Laboratorio**: annotazioni testuali per documentare vincoli di progetto, compiti d'esame o specifiche della topologia.

---

## Schema della Rete e Diagramma di Topologia (`TopologyView`)

**NetCalc Pro 1.1** introduce il generatore automatico di topologia (`TopologyBuilder`), visualizzabile nel riepilogo del progetto:

- **Ricostruzione Automatica delle Connessioni**: analizzando gli indirizzi IP e le subnet mask assegnate a ciascuna interfaccia, l'algoritmo identifica autonomamente:
  - **Link Punto-Punto**: router interconnessi su subnet `/30`, `/31` o con subnet identiche.
  - **Segmenti LAN Multi-Accesso**: switch e router convergenti sullo stesso dominio di broadcast.
- **Diagramma Interattivo e Ingrandibile**: la mappa grafica evidenzia apparati, nomi delle interfacce, etichette delle sottoreti e default gateway, permettendo di zoomare e ispezionare visivamente l'intera architettura prima di procedere al deployment.
- **Integrazione Vettoriale nel PDF**: lo schema viene renderizzato in alta risoluzione come tavola grafica dedicata all'interno dei report stampabili.

---

## Architettura Local-First e Undo/Redo Completo

NetCalc Pro adotta un approccio rigorosamente **Local-First** basato su **SwiftData**:

### 1. Database Locale Dedicato

I dati risiedono in una cartella applicativa dedicata (`~/Library/Application Support/NetCalc Pro/NetCalc.store`). L'applicazione non dipende da connessioni di rete per avviarsi, leggere o modificare i progetti, garantendo reattività immediata anche in aule universitarie o laboratori privi di accesso a Internet.

### 2. Annullamento e Ripristino a Livello di Contesto (`UndoManager`)

Tutte le operazioni distruttive o di modifica (creazione o cancellazione di un progetto, aggiunta di dispositivi, modifica di interfacce o rimozione di route statiche) sono registrate nell'`UndoManager` collegato direttamente al `ModelContext` di SwiftData.

- Su **macOS**: usa le scorciatoie di sistema standard <kbd>⌘</kbd><kbd>Z</kbd> (Annulla) e <kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd> (Ripristina), oppure le voci nel menu _Modifica_.
- Su **iPad/iPhone**: supporta i gesti standard con tre dita e i pulsanti dedicati di navigazione.

---

## Opzioni di Esportazione

NetCalc Pro offre tre formati di esportazione progettati per diversi scopi didattici e professionali:

### 1. Documenti PDF Vettoriali (CoreGraphics e CoreText)

L'esportazione in PDF (`ProjectPDFExporter`) è implementata disegnando direttamente con i framework grafici a basso livello di Apple (**CoreGraphics** e **CoreText**), senza ricorrere a conversioni HTML/WebKit o librerie di terze parti:

- **Resa Tipografica Impeccabile**: formato standard _US Letter_, intestazioni ad alta leggibilità e tabelle con font monospazio perfettamente allineate.
- **Tavola Grafica della Topologia**: include una pagina dedicata con lo schema visuale della rete e delle interconnessioni.
- **Dati Inclusi**: per ogni dispositivo vengono stampati hostname, tipologia, interfacce configurate, indirizzi IPv4/IPv6, maschere decimali, indirizzo di rete e broadcast calcolati.
- **Esportazione Piani VLSM**: anche i piani di subnetting possono essere esportati in PDF con la stessa cura grafica, includendo l'elenco delle subnet ordinate e i parametri di capienza.

### 2. Tabella CSV per Inventario di Rete

Genera un file conforme allo standard RFC 4180 per l'importazione in fogli di calcolo (Microsoft Excel, Apple Numbers, Google Sheets):

```csv
IP,MASK,GATEWAY,DEVICE,INTERFACE
192.168.1.1,255.255.255.0,192.168.1.1,R1,GigabitEthernet0/0/0
192.168.2.1,255.255.255.0,192.168.2.1,R1,GigabitEthernet0/0/1
```

Il file gestisce automaticamente l'escaping delle virgolette e delle virgole per descrizioni complesse.

### 3. File TXT con Script Cisco IOS Completo

Genera un file di testo contenente i comandi di configurazione di tutti i dispositivi del progetto, ordinati alfabeticamente per hostname e separati da banner di commento formattati:

```text
! ============================================================
! Progetto: Laboratorio CCNA Modulo 3
! Esportato il 21 ott 2026, 11:30
! ============================================================

! --- Router R1 ---
hostname R1
...
```

Il file può essere salvato direttamente su disco o inviato tramite le app di sistema (Mail, AirDrop, Messaggi).

---

## Sincronizzazione Privata iCloud (CloudKit)

I tuoi progetti possono essere condivisi automaticamente tra tutti i dispositivi associati allo stesso ID Apple, senza richiedere registrazioni, account aggiuntivi o abbonamenti.

### 1. Database Privato Utente

La sincronizzazione avviene tramite **NSPersistentCloudKitContainer** sul container privato `iCloud.com.dimpemekug.netcalc`.

- I dati transitano esclusivamente attraverso l'infrastruttura cifrata di Apple.
- Nessun dato passa o viene salvato su server terzi: la privacy è totale.

### 2. Sincronizzazione delle Impostazioni

Le preferenze dell'app (lingua, tema chiaro/scuro, palette accento, tema del terminale Cisco e modalità Principiante) viaggiano in tempo reale tra Mac, iPad e iPhone tramite `NSUbiquitousKeyValueStore` (`PreferencesCloudSync`). Se preferisci configurazioni visive diverse tra dispositivi (es. tema scuro su Mac e chiaro su iPad), la sincronizzazione delle impostazioni può essere disattivata indipendentemente nelle preferenze dell'app.

### 3. Diagnostica in Tempo Reale (`CloudSyncMonitor`)

Nella schermata **Impostazioni → Sincronizzazione**, NetCalc Pro offre un monitor di diagnostica avanzato con stato del servizio, timestamp dell'ultimo scambio dati, conteggio dei record remoti e locali, e risoluzione guidata delle anomalie di rete.
