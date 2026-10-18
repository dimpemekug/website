---
title: "Introduzione a NetCalc Pro"
description: "Panoramica di NetCalc Pro per Mac, iPad e iPhone: calcolo IPv4/IPv6, pianificatore subnetting e VLSM, generatore di configurazioni Cisco IOS e linter di rete per laboratori CCNA."
project: "netcalc"
order: 1
section: "Iniziare"
---

## Cos'è NetCalc Pro

**NetCalc Pro** è l'applicazione professionale sviluppata nativamente in Swift, SwiftUI e SwiftData per **macOS 14+ (Sonoma, Sequoia, Tahoe)**, **iPadOS 17+** e **iOS 17+**.

Progettata specificamente per studenti di reti informatiche (corsi scolastici, universitari o certificazioni **Cisco CCNA**), docenti, sistemisti e appassionati di telecomunicazioni, NetCalc Pro colma il divario tra il calcolo teorico su carta e la configurazione pratica degli apparati in ambienti come **Cisco Packet Tracer**, **GNS3**, **EVE-NG** o laboratori fisici.

L'applicazione consente di:

- **Calcolare ed esplorare indirizzi IPv4 e IPv6**: maschere, prefissi CIDR, wildcard mask, intervalli di host e notazione binaria a 32 bit con separazione visiva dinamica tra parte rete e parte host.
- **Pianificare il partizionamento delle reti**: subnetting a blocchi fissi e pianificazione avanzata **VLSM** (_Variable Length Subnet Masking_) ordinata per capienza decrescente (_best-fit descending_) con mappa proporzionale dello spazio di indirizzamento.
- **Generare automaticamente comandi Cisco IOS**: sintassi completa e commentata per router e switch (interfacce, sub-interfacce 802.1Q, route statiche, OSPF, RIPv2, EIGRP, server DHCP con pool dedicati, ACL standard ed estese, NAT/PAT e hardening di base).
- **Importare una configurazione reale**: parsing istantaneo di file o testi copiati da una `show running-config` per ricreare l'albero del laboratorio in un clic.
- **Verificare la coerenza logica della topologia (Network Linter)**: diagnosi proattiva di errori di configurazione prima dell'avvio degli apparati (subnet sovrapposte, IP duplicati, next-hop irraggiungibili, gateway errati).
- **Esportare e condividere**: reportistica professionale in PDF pixel-perfect disegnati con CoreGraphics/CoreText, esportazione tabellare CSV e testo puro.

---

## Architettura e Filosofia

NetCalc Pro è stata costruita seguendo rigorosi standard di ingegneria del software Apple:

### 1. Modello di Dominio Puro

Il Model Layer (`IPv4Address`, `IPv6Address`, `SubnetMask`, `SubnetPlan`, `CiscoDevice`, `NetworkLinter`) è implementato con struct ed enum Swift puri, disaccoppiati sia da SwiftUI che dai framework di persistenza. Ogni algoritmo di calcolo e di parsing della CLI Cisco è completamente deterministico, privo di effetti collaterali e coperto da suite esaustive di unit test.

### 2. Privacy Assoluta e Architettura Local-First

- **Zero tracciamento**: l'app non include analytics, tracker commerciali, SDK di terze parti o librerie di profilazione.
- **Funzionamento offline totale**: tutti i calcoli, le generazioni dei comandi e i controlli diagnostici avvengono interamente sulla CPU del dispositivo locale.
- **Sincronizzazione iCloud privata**: progetti, dispositivi e preferenze vengono sincronizzati facoltativamente tramite il database **privato** Apple CloudKit dell'utente (`iCloud.com.dimpemekug.netcalc`). I dati rimangono crittografati nell'account personale e non transitano mai da server intermediari.

### 3. Interfaccia Adattiva Universale

- **macOS e iPad in larghezza regolare**: navigazione a tre colonne tramite `NavigationSplitView` con sidebar (Strumenti e Progetti), area di lavoro centrale ed ispettore contestuale a scomparsa.
- **iPhone e split compatto**: interfaccia a schede (`TabView`) ottimizzata con selettori dedicati per le modalità di calcolo e fogli modali nativi con gestione attenta della tastiera numerica e dei controlli monospazio.

---

## Mappa della Documentazione

Per padroneggiare ogni funzionalità dell'applicazione, consulta le guide dedicate:

- [Calcolatrice IPv4, IPv6 e Subnetting](/progetti/netcalc/docs/calcolatrice-ip-e-subnetting): Modalità di input, ispezione binaria e subnetting a dimensione fissa.
- [Pianificazione VLSM Best-Fit](/progetti/netcalc/docs/vlsm-best-fit): Progettazione gerarchica delle subnet, calcolo degli sprechi e trasformazione automatica in apparati.
- [Generazione Configurazioni Cisco IOS](/progetti/netcalc/docs/configurazioni-cisco-ios): Router, switch, VLAN, trunking, routing dinamico OSPF/EIGRP/RIP, DHCP, ACL e NAT.
- [Importazione Running-Config](/progetti/netcalc/docs/import-running-config): Analisi di configurazioni Cisco esistenti e parsing automatico nel progetto.
- [Verifica del Laboratorio (Network Linter)](/progetti/netcalc/docs/linter-verifica-laboratorio): Rilevamento automatico di anomalie, conflitti IP e incoerenze di routing prima del test.
- [Progetti, Esportazione e iCloud](/progetti/netcalc/docs/progetti-export-icloud): Gestione dei progetti di laboratorio, report PDF con CoreGraphics e sincronizzazione multi-dispositivo.
- [Scorciatoie, Didattica e Riferimenti](/progetti/netcalc/docs/scorciatoie-e-didattica): 21 capitoli didattici integrati, glossario delle reti, modalità Principiante/Esperto e scorciatoie macOS.
