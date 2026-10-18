---
title: "Scorciatoie, Didattica e Riferimenti"
description: "Modalità Principiante ed Esperto, guida alle reti in 21 capitoli, glossario interattivo, scorciatoie macOS e comandi rapidi Siri/Spotlight in NetCalc Pro."
project: "netcalc"
order: 8
section: "Riferimento"
---

## Didattica Integrata e Apprendimento Attivo

NetCalc Pro non è solo un calcolatore per professionisti, ma un vero e proprio strumento didattico progettato per accompagnare gli studenti durante la preparazione scolastica, universitaria o verso le certificazioni industriali come **Cisco CCNA (200-301)**.

---

## Modalità Principiante vs Modalità Esperto

Nelle preferenze dell'applicazione (o tramite il selettore rapido) è possibile alternare tra due modalità di fruizione:

### 1. Modalità Principiante

- **Spiegazioni Contestuali**: in ogni schermata di calcolo o pianificazione compaiono schede didattiche che spiegano il significato teorico di ciascun valore (perché il primo indirizzo è la rete, cosa fa la wildcard mask, perché le subnet VLSM vanno ordinate per capienza decrescente).
- **Aiuto Passo-Passo**: campi pre-popolati con valori didattici standard ed etichette descrittive estese per ogni parametro di configurazione Cisco.
- **Accesso Diretto ai Termini**: collegamenti ipertestuali interni che rimandano alle definizioni del glossario integrato.

### 2. Modalità Esperto

- **Massima Densità Informativa**: rimozione dei riquadri esplicativi introduttivi per concentrare lo spazio visivo su tabelle, mappe di indirizzamento e blocchi CLI.
- **Flusso di Lavoro Rapido**: comandi pronti per la copia istantanea e visualizzazione compatta delle interfacce.

---

## Guida Didattica alle Reti (21 Capitoli)

L'applicazione include un manuale completo di networking, consultabile offline sia su Mac che su iPad e iPhone (richiamabile da tastiera con `⌘?` o dal menu _Aiuto_):

|   N.   | Modulo e Argomento Trattato                                                                                      |
| :----: | :--------------------------------------------------------------------------------------------------------------- |
| **01** | **Reti e Topologie**: modelli di rete, topologie a stella/maglia, domini di collisione e broadcast.              |
| **02** | **Indirizzo IPv4**: struttura a 32 bit, notazione decimale puntata e conversione binaria.                        |
| **03** | **Maschera e CIDR**: subnet mask, prefissi barra `/n` e calcolo della capacità degli host.                       |
| **04** | **Classi di Indirizzi e Reti Private**: RFC 1918 (10.0.0.0, 172.16.0.0, 192.168.0.0) e indirizzi APIPA/Loopback. |
| **05** | **ARP e ICMP**: risoluzione indirizzi IP-MAC, funzionamento del ping e messaggi di controllo.                    |
| **06** | **Trasporto e Porte**: differenze tra TCP e UDP, porte ben note (HTTP, HTTPS, DNS, SSH, DHCP).                   |
| **07** | **Subnetting a Lunghezza Fissa (FLSM)**: suddivisione equa dello spazio di indirizzamento.                       |
| **08** | **VLSM**: calcolo efficiente a dimensione variabile ordinato per fabbisogno host.                                |
| **09** | **Supernetting e Aggregazione (CIDR)**: riassunto delle route per l'ottimizzazione delle tabelle.                |
| **10** | **Piano di Indirizzamento Completo**: metodologia professionale per la stesura di un piano di rete.              |
| **11** | **Tabella di Routing**: logica di lookup, longest prefix match e metrica di costo.                               |
| **12** | **Routing Statico**: sintassi `ip route`, default route `0.0.0.0/0` e gateway di uscita.                         |
| **13** | **Algoritmi di Routing**: differenze architetturali tra Distance Vector e Link State.                            |
| **14** | **Routing Dinamico**: protocolli OSPF a singola area, RIPv2 ed EIGRP.                                            |
| **15** | **VLAN e Trunking**: segmentazione di livello 2, incapsulamento standard 802.1Q e Inter-VLAN routing.            |
| **16** | **Servizi di Rete**: configurazione di server DHCP, relay agent e risoluzione DNS.                               |
| **17** | **Sicurezza Perimetrale**: configurazione di Access List (ACL), DMZ, NAT e PAT overload.                         |
| **18** | **IPv6**: indirizzi a 128 bit, compressione RFC 5952, prefissi `/64` e autoconfigurazione EUI-64.                |
| **19** | **CLI Cisco IOS Fondamentale**: modalità User EXEC, Privileged EXEC e Global Configuration.                      |
| **20** | **Checklist di Laboratorio**: sequenza metodologica per il troubleshooting di apparati simulati o fisici.        |
| **21** | **Progetto d'Esame Completo**: caso studio pratico con topologia mista router/switch, VLAN, OSPF e NAT.          |

---

## Glossario di Rete Integrato

Accessibile in qualsiasi momento dal menu _Aiuto → Glossario di Rete_, raccoglie oltre 40 definizioni essenziali spiegate con terminologia rigorosa ma accessibile:

- **Concetti Base**: _Indirizzo IP_, _CIDR_, _Subnet Mask_, _Wildcard Mask_, _Indirizzo di Rete_, _Broadcast_, _Host Utilizzabili_.
- **Routing e Switching**: _Default Gateway_, _Distanza Amministrativa_, _Metrica_, _Next-Hop_, _Trunk 802.1Q_, _Sub-interfaccia_, _SVI_.
- **Protocolli e Servizi**: _OSPF Area_, _Passive Interface_, _Pool DHCP_, _Indirizzi Esclusi_, _Access List Standard/Estesa_, _PAT Overload_, _EUI-64_.

---

## Scorciatoie da Tastiera macOS

NetCalc Pro è una vera applicazione desktop per Mac, controllabile integralmente da tastiera:

| Scorciatoia                            | Menu        | Azione                                                             |
| :------------------------------------- | :---------- | :----------------------------------------------------------------- |
| <kbd>⌘</kbd> <kbd>N</kbd>              | File        | Crea un nuovo progetto di laboratorio                              |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>D</kbd> | File        | Aggiunge un nuovo dispositivo (router/switch) al progetto corrente |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>C</kbd> | Finestra    | Apre la **Calcolatrice IP in una finestra indipendente separata**  |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Vista       | Mostra o nasconde l'ispettore laterale dei dettagli                |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>C</kbd> | Cisco       | Copia la configurazione CLI Cisco del dispositivo selezionato      |
| <kbd>⌘</kbd> <kbd>?</kbd>              | Aiuto       | Apre la Guida Didattica alle Reti in 21 capitoli                   |
| <kbd>⌘</kbd> <kbd>,</kbd>              | NetCalc Pro | Apre la finestra Impostazioni (Generali e Sincronizzazione iCloud) |
| <kbd>⌘</kbd> <kbd>Z</kbd>              | Modifica    | Annulla l'ultima modifica (progetti, porte, route, impostazioni)   |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Modifica    | Ripristina l'ultima operazione annullata                           |

> [!TIP]
> La combinazione <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>C</kbd> apre la calcolatrice in una finestra dedicata, permettendoti di affiancarla al progetto o alla finestra di Cisco Packet Tracer a tutto schermo.

---

## Integrazione con Siri, Spotlight e Comandi Rapidi (App Intents)

NetCalc Pro integra il framework **App Intents** di Apple, consentendoti di effettuare calcoli di rete al volo direttamente dalla barra di ricerca di **Spotlight** o tramite comandi vocali con **Siri**, senza nemmeno aprire la finestra dell'applicazione:

### 1. Calcola una Subnet

- **Frasi supportate**: _"Calcola una subnet con NetCalc Pro"_, _"Subnet con NetCalc Pro"_
- **Parametri**: Indirizzo IP e prefisso CIDR (es. `172.16.0.10/20`).
- **Risposta**: Rete calcolata, maschera decimale, broadcast, numero di host utilizzabili e intervallo assegnabile.

### 2. Trova il Prefisso per N Host

- **Frasi supportate**: _"Trova il prefisso con NetCalc Pro"_, _"Quale prefisso mi serve con NetCalc Pro"_
- **Parametri**: Numero di host desiderati (es. `120`).
- **Risposta**: Prefisso CIDR minimo (es. `/25`), maschera decimale associata e capacità effettiva del blocco.

### 3. Converti Subnet Mask

- **Frasi supportate**: _"Converti una subnet mask con NetCalc Pro"_
- **Parametri**: Maschera decimale (es. `255.255.240.0`) o prefisso CIDR (es. `20`).
- **Risposta**: Conversione bidirezionale immediata con il calcolo automatico della rispettiva wildcard mask Cisco.
