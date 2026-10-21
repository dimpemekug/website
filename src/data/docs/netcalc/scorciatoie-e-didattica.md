---
title: "Didattica, Esercizi e Widget"
description: "Esercizi di subnetting interattivi a 9 tipologie, guida didattica alle reti in 21 capitoli, glossario ampliato, widget per iOS 18/macOS 15, controlli e scorciatoie."
project: "netcalc"
order: 9
section: "Riferimento e Didattica"
---

## Didattica Integrata e Apprendimento Attivo

NetCalc Pro non è solo un calcolatore per professionisti, ma un ambiente di apprendimento completo progettato per accompagnare studenti e docenti nella preparazione scolastica, universitaria e verso le certificazioni industriali come **Cisco CCNA (200-301)**.

---

## Esercizi di Subnetting Interattivi (`SubnetQuiz`)

**NetCalc Pro 1.1** introduce il modulo di autovalutazione interattivo **Esercizi di Subnetting** (disponibile nella sezione _Impara_ su iPhone/iPad e dal menu _Aiuto_ su macOS):

### 9 Tipologie di Domanda

Il generatore algoritmico crea quesiti casuali e realistici appartenenti alle classi di indirizzi privati e pubblici:

1. **Trova l'Indirizzo di Rete** (dato un host e il prefisso).
2. **Trova l'Indirizzo di Broadcast**.
3. **Determina il Primo Host Assegnabile**.
4. **Determina l'Ultimo Host Assegnabile**.
5. **Calcola la Maschera Minima per un Fabbisogno di Host**.
6. **Determina il Numero Totale di Host Utilizzabili**.
7. **Verifica l'Appartenenza di Due Host alla Stessa Subnet**.
8. **Converti tra Maschera di Sottorete e Wildcard Mask**.
9. **Identifica il Prefisso CIDR da una Maschera Decimale Puntata**.

### 3 Livelli di Difficoltà

- **Base**: prefissi compresi nel 4° ottetto (`/25` - `/30`), ideali per familiarizzare con il calcolo dei blocchi.
- **Intermedio**: prefissi a cavallo del 3° ottetto (`/17` - `/24`), con subnetting di classe B.
- **Avanzato**: prefissi estesi (`/9` - `/16`), maschere inconsuete e intervalli ampi.

### Correzione con Spiegazione Matematica Passo-Passo

A differenza dei comuni quiz a risposta multipla, NetCalc Pro non si limita a indicare se la risposta è giusta o sbagliata:
- Mostra la **spiegazione analitica dettagliata** impiegando esattamente i valori numerici della domanda.
- Illustra il passaggio binario, la grandezza del blocco incrementale ($256 - \text{maschera}$) e i confini della sottorete.
- Tiene traccia del **punteggio**, della **serie consecutiva di risposte esatte (Streak)** e del tuo **record personale**.

---

## Widget Interattivi e Integrazione iOS 18 / macOS 15+

NetCalc Pro sfrutta appieno le novità architetturali di WidgetKit e App Intents di Apple:

### 1. Widget "Esercizio del Giorno" (Daily Quiz Widget)
- Presenta ogni giorno un quesito di subnetting deterministico sulla schermata Home o sulla scrivania del Mac.
- **Interattività Diretta**: puoi riflettere sul calcolo e toccare il pulsante interattivo **"Mostra la risposta"** direttamente sulla superficie del widget senza dover aprire l'applicazione.
- Toccando il widget si apre l'app alla pagina degli esercizi per approfondire la spiegazione.

### 2. Widget "Tabella dei Prefissi CIDR"
- Prontuario tascabile sempre visibile con l'equivalenza tra prefissi `/n`, maschera decimale, wildcard e capacità host utili.

### 3. Controlli per il Centro di Controllo e Schermata di Blocco
- Pulsanti e interruttori dedicati per avviare istantaneamente la Calcolatrice o aprire l'Esercizio del giorno dal Centro di Controllo su iOS 18 e macOS 15+.

### 4. Deep Linking Universale (`netcalc://`)
- L'applicazione risponde allo schema di URL nativo `netcalc://` per navigare direttamente nelle sezioni desiderate da script o scorciatoie:
  - `netcalc://calculator`: apre la calcolatrice IPv4.
  - `netcalc://subnetting`: apre il subnetting a dimensione fissa.
  - `netcalc://vlsm`: apre il pianificatore VLSM.
  - `netcalc://ipv6`: apre la calcolatrice IPv6.
  - `netcalc://tools`: apre gli strumenti di rete (Summary, Range to CIDR, Wildcard, Compare).
  - `netcalc://quiz`: apre gli esercizi interattivi di subnetting.
  - `netcalc://projects`: apre l'elenco dei progetti di laboratorio.

---

## Modalità Principiante vs Modalità Esperto

Nelle preferenze dell'applicazione (o tramite il selettore rapido) è possibile alternare tra due modalità di fruizione:

- **Modalità Principiante**: schede didattiche contestuali con spiegazioni teoriche, aiuti passo-passo e collegamenti ipertestuali al glossario.
- **Modalità Esperto**: interfaccia minimale ad altissima densità informativa con tabelle, mappe e terminale CLI privi di testi introduttivi.

---

## Guida Didattica alle Reti (21 Capitoli)

L'applicazione include un manuale completo di networking, consultabile offline sia su Mac che su iPad e iPhone (richiamabile da tastiera con <kbd>⌘</kbd><kbd>?</kbd> o dal menu _Aiuto_):

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

## Glossario di Rete Integrato (55+ Definizioni)

Accessibile in qualsiasi momento dal menu _Aiuto → Glossario di Rete_, raccoglie oltre 55 voci con l'aggiunta di 15 nuovi concetti introdotti nella versione 1.1:

- **Concetti Base**: _Indirizzo IP_, _CIDR_, _Subnet Mask_, _Wildcard Mask_, _Indirizzo di Rete_, _Broadcast_, _Host Utilizzabili_.
- **Routing e Switching Avanzato**: _Default Gateway_, _Distanza Amministrativa_, _Metrica_, _Next-Hop_, _Trunk 802.1Q_, _Sub-interfaccia_, _SVI_, **_Spanning Tree Protocol (STP)_**, **_PortFast_**, **_BPDU Guard_**, **_EtherChannel (LACP/PAgP)_**, **_Port Security_**, **_HSRP (Hot Standby Router Protocol)_**, **_IP Helper-Address_**.
- **Protocolli e Servizi**: _OSPF Area_, **_OSPFv3_**, _Passive Interface_, _Pool DHCP_, _Indirizzi Esclusi_, _Access List Standard/Estesa_, _PAT Overload_, _EUI-64_, **_Supernetting / Route Summarization_**, **_Longest Prefix Match_**.

---

## Scorciatoie da Tastiera macOS

NetCalc Pro offre un controllo completo da tastiera per un flusso di lavoro efficiente:

| Scorciatoia                            | Menu        | Azione                                                             |
| :------------------------------------- | :---------- | :----------------------------------------------------------------- |
| <kbd>⌘</kbd> <kbd>N</kbd>              | File        | Crea un nuovo progetto di laboratorio                              |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>D</kbd> | File        | Aggiunge un nuovo dispositivo (router/switch) al progetto corrente |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>C</kbd> | Finestra    | Apre la **Calcolatrice IP in una finestra indipendente separata**  |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>I</kbd> | Vista       | Mostra o nasconde l'ispettore laterale dei dettagli                |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>C</kbd> | Cisco       | Copia la configurazione CLI Cisco del pannello in primo piano      |
| <kbd>⌘</kbd> <kbd>?</kbd>              | Aiuto       | Apre la Guida Didattica alle Reti in 21 capitoli                   |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>?</kbd> | Aiuto       | Apre il Glossario di Rete                                          |
| <kbd>⌘</kbd> <kbd>,</kbd>              | NetCalc Pro | Apre la finestra Impostazioni                                      |
| <kbd>⌘</kbd> <kbd>Z</kbd>              | Modifica    | Annulla l'ultima modifica                                          |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> | Modifica    | Ripristina l'ultima operazione annullata                           |
