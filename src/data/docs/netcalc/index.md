---
title: "Introduzione a NetCalc Pro"
description: "Panoramica di NetCalc Pro per Mac, iPad e iPhone: calcolo IPv4/IPv6, pianificatore subnetting e VLSM, quattro strumenti di rete, generatore di configurazioni Cisco IOS, topologia e linter."
project: "netcalc"
order: 1
section: "Iniziare"
---

## Cos'è NetCalc Pro

**NetCalc Pro** è l'applicazione professionale sviluppata nativamente in Swift, SwiftUI e SwiftData per **macOS 14+ (Sonoma, Sequoia, Tahoe)**, **iPadOS 17+** e **iOS 17+**.

Progettata specificamente per studenti di reti informatiche (corsi scolastici, universitari o certificazioni **Cisco CCNA**), docenti, sistemisti e appassionati di telecomunicazioni, NetCalc Pro colma il divario tra il calcolo teorico su carta e la configurazione pratica degli apparati in ambienti come **Cisco Packet Tracer**, **GNS3**, **EVE-NG** o laboratori fisici.

L'applicazione consente di:

- **Calcolare ed esplorare indirizzi IPv4 e IPv6**: maschere, prefissi CIDR, wildcard mask, intervalli di host, notazione binaria a 32 bit con separazione interattiva e spiegazione algebrica passo-passo ("Come si calcola").
- **Pianificare il partizionamento delle reti**: subnetting a blocchi fissi e pianificazione avanzata **VLSM** (_Variable Length Subnet Masking_) ordinata per capienza decrescente (_best-fit descending_) con mappa proporzionale dello spazio di indirizzamento e zoom intelligente.
- **Accedere a Strumenti di Rete Avanzati**: route summarization/supernetting con comandi Cisco IOS e route Null0, convertitore da intervallo arbitrario a blocchi CIDR minimi con ACL, simulatore di wildcard e Access List su pacchetti di prova, e comparatore di reti con rilevamento ping asimmetrici e simulazione Longest Prefix Match.
- **Generare automaticamente comandi Cisco IOS**: sintassi completa e commentata per router e switch (interfacce, sub-interfacce 802.1Q dot1Q, IPv6 e OSPFv3, ridondanza HSRP, DHCP relay `ip helper-address`, Spanning Tree, EtherChannel, Port Security, DHCP, ACL standard ed estese, NAT/PAT e hardening).
- **Importare e confrontare configurazioni (Config Diff)**: parsing istantaneo di una `show running-config` e confronto bidirezionale blocco per blocco tra apparato reale e modello di progetto con copia dei soli comandi mancanti.
- **Visualizzare la Topologia di Rete**: diagramma grafico vettoriale interattivo derivato automaticamente dagli indirizzi e dai link punto-punto, stampabile in alta risoluzione nel report PDF.
- **Verificare la coerenza logica della topologia (Network Linter a 15 regole)**: diagnosi proattiva di errori di configurazione prima dell'avvio degli apparati (subnet sovrapposte, IP duplicati, next-hop irraggiungibili, OSPFv3 senza router-id, HSRP errati, port security su trunk).
- **Esercitarsi con Quiz Interattivi e Widget**: 9 tipologie di esercizi di subnetting con 3 livelli di difficoltà, correzione spiegata e tracciamento record/streak; widget interattivo "Esercizio del giorno" per iOS 18 e macOS 15.
- **Esportare e condividere**: reportistica professionale in PDF pixel-perfect disegnati con CoreGraphics/CoreText, esportazione tabellare CSV e testo puro.

---

## Architettura e Filosofia

NetCalc Pro è stata costruita seguendo rigorosi standard di ingegneria del software Apple:

### 1. Modello di Dominio Puro

Il Model Layer (`IPv4Address`, `IPv6Address`, `SubnetMask`, `SubnetPlan`, `CiscoDevice`, `NetworkLinter`, `RouteSummary`, `TopologyBuilder`, `SubnetQuiz`) è implementato con struct ed enum Swift puri, disaccoppiati sia da SwiftUI che dai framework di persistenza. Ogni algoritmo di calcolo e di parsing della CLI Cisco è completamente deterministico, privo di effetti collaterali e coperto da oltre 260 unit test.

### 2. Privacy Assoluta e Architettura Local-First

- **Zero tracciamento**: l'app non include analytics, tracker commerciali, SDK di terze parti o librerie di profilazione.
- **Funzionamento offline totale**: tutti i calcoli, le generazioni dei comandi e i controlli diagnostici avvengono interamente sulla CPU del dispositivo locale.
- **Sincronizzazione iCloud privata**: progetti, dispositivi e preferenze vengono sincronizzati facoltativamente tramite il database **privato** Apple CloudKit dell'utente (`iCloud.com.dimpemekug.netcalc`). I dati rimangono crittografati nell'account personale e non transitano mai da server intermediari.

### 3. Interfaccia Adattiva Universale

- **macOS e iPad in larghezza regolare**: navigazione a due pannelli tramite `NavigationSplitView` con sidebar (Strumenti e Progetti), area di lavoro centrale, terminale affiancato e ispettore contestuale a scomparsa. Finestra calcolatrice separata richiamabile con <kbd>⌥</kbd><kbd>⌘</kbd><kbd>C</kbd>.
- **iPhone e split compatto**: interfaccia a schede (`TabView`) ottimizzata con selettori dedicati per le modalità di calcolo e fogli modali nativi con gestione attenta della tastiera numerica e dei controlli monospazio.

---

## Mappa della Documentazione

Per padroneggiare ogni funzionalità dell'applicazione, consulta le guide dedicate:

- [Calcolatrice IPv4, IPv6 e Subnetting](/progetti/netcalc/docs/calcolatrice-ip-e-subnetting): Modalità di input, ispezione binaria, spiegazione passo-passo Come si calcola e cronologia recenti.
- [Pianificazione VLSM Best-Fit](/progetti/netcalc/docs/vlsm-best-fit): Progettazione gerarchica delle subnet, calcolo degli sprechi, mappa con zoom e generazione topologie interconnesse.
- [Strumenti di Rete Avanzati](/progetti/netcalc/docs/strumenti-di-rete): Route summary con comandi Cisco, convertitore Intervallo a CIDR con ACL, simulatore Wildcard e simulazione Longest Prefix Match.
- [Generazione Configurazioni Cisco IOS](/progetti/netcalc/docs/configurazioni-cisco-ios): Router, switch, IPv6/OSPFv3, Router-on-a-Stick, HSRP, Spanning Tree, EtherChannel e Port Security.
- [Importazione e Confronto Running-Config](/progetti/netcalc/docs/import-running-config): Analisi di configurazioni Cisco esistenti, parsing nel progetto e Config Diff con copia dei comandi mancanti.
- [Verifica del Laboratorio (Network Linter)](/progetti/netcalc/docs/linter-verifica-laboratorio): Diagnosi proattiva a 15 regole di anomalie, conflitti IP, errori OSPFv3 e incoerenze prima del test.
- [Progetti, Topologia ed Esportazione](/progetti/netcalc/docs/progetti-export-icloud): Gestione dei progetti, diagramma di topologia automatico, report PDF vettoriali e sincronizzazione CloudKit.
- [Didattica, Esercizi e Widget](/progetti/netcalc/docs/scorciatoie-e-didattica): Quiz interattivo a 9 tipologie con serie/record, 21 capitoli didattici, glossario ampliato a 55+ voci e widget per iOS 18/macOS 15.
