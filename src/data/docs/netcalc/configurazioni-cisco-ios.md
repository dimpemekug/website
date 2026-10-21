---
title: "Generazione Configurazioni Cisco IOS"
description: "Motore di generazione CLI Cisco IOS in NetCalc Pro: interfacce IPv4/IPv6, OSPFv3, Router-on-a-Stick, HSRP, Spanning Tree, EtherChannel, Port Security, DHCP, ACL e NAT."
project: "netcalc"
order: 5
section: "Integrazione Cisco IOS"
---

## Dal Progetto Logico alla CLI Reale

Nei laboratori di networking come **Cisco Packet Tracer**, **GNS3**, **EVE-NG** o su banchi di prova fisici, scrivere a mano centinaia di righe di comandi comporta frequentemente errori di battitura, incoerenze nelle wildcard o dimenticanze critiche (come il mancato `no shutdown` o l'assenza del comando globale `ipv6 unicast-routing`).

**NetCalc Pro 1.1** integra un motore avanzato di generazione di script in sintassi **Cisco IOS** conforme alle best practice industriali e didattiche, strutturato secondo la rigorosa sequenza di dipendenza del sistema operativo:

1. Le direttive globali (`hostname`, `ipv6 unicast-routing`, sicurezza) vengono poste in testa.
2. I database VLAN vengono creati prima dell'assegnazione alle porte access/trunk degli switch.
3. Le interfacce fisiche e le sub-interfacce 802.1Q vengono configurate e accese prima che i protocolli di routing o i servizi di rete le referenzino.
4. I protocolli di ridondanza (HSRP), aggregazione link (EtherChannel) e spanning tree vengono applicati coerentemente.
5. I servizi applicativi (DHCP Server, IP Helper, ACL, NAT/PAT) completano la configurazione.

---

## Moduli di Configurazione Supportati

### 1. Interfacce Fisiche, Sub-interfacce e Modifica Interattiva

- **Tipologie di Porta**: supporto nativo per `GigabitEthernet`, `FastEthernet`, `Ethernet` e interfacce seriali `Serial`.
- **Accensione Automatica**: inserimento del comando `no shutdown` per ciascuna porta attiva.
- **Modifica Diretta delle Interfacce**: con NetCalc Pro 1.1 puoi modificare qualsiasi interfaccia già creata (doppio clic su Mac, menu contestuale o tap su iPhone/iPad) per aggiornare IP, maschera, descrizioni o funzionalità avanzate senza dover ricreare la porta.

### 2. Router-on-a-Stick Builder (Inter-VLAN Routing)

NetCalc Pro include un builder guidato per implementare l'inter-VLAN routing tramite un singolo router collegato a uno switch trunk:

- **Riconoscimento Automatico delle VLAN**: il builder legge le VLAN configurate sugli switch del progetto e propone la creazione delle corrispondenti sub-interfacce virtuali (es. `GigabitEthernet0/0/0.10`, `GigabitEthernet0/0/0.20`).
- **Incapsulamento Standard 802.1Q**: inserimento automatico del comando `encapsulation dot1Q <vlan_id>` prima dell'assegnazione dell'indirizzo IP del gateway.
- **Opzioni DHCP**: possibilità di abbinare a ogni sub-interfaccia un pool DHCP dedicato oppure la direttiva `ip helper-address` verso un server centralizzato.

### 3. IPv6 Completo sui Dispositivi e OSPFv3

NetCalc Pro supporta nativamente la configurazione dual-stack IPv4/IPv6:

- **Indirizzi Globali e Link-Local**: per ogni interfaccia puoi impostare l'indirizzo Global Unicast (`ipv6 address 2001:db8:1::1/64`) e l'indirizzo Link-Local personalizzato (`ipv6 address fe80::1 link-local`).
- **Abilitazione Automatica Routing**: include la direttiva globale `ipv6 unicast-routing` in cima alla configurazione di tutti i router con porte IPv6 attive.
- **OSPFv3 Dinamico**:
  - Dichiarazione del processo `ipv6 router ospf <id>`.
  - Impostazione obbligatoria del `router-id <A.B.C.D>` a 32 bit (essenziale per OSPFv3 anche in ambienti IPv6 puri).
  - Associazione dell'area direttamente sulle interfacce (`ipv6 ospf <id> area <area>`).
- **Route Statiche IPv6**: generazione di comandi `ipv6 route <prefisso/lunghezza> <next_hop>`.

### 4. Ridondanza Gateway (HSRP) e IP Helper-Address

- **Hot Standby Router Protocol (HSRP)**:
  - Generazione dei comandi `standby <gruppo> ip <ip_virtuale>` per condividere il default gateway tra due router ridondati.
  - Gestione della priorità (`standby <gruppo> priority <valore>`) e del preempt automatico (`standby <gruppo> preempt`).
- **DHCP Relay (IP Helper-Address)**:
  - Inserimento del comando `ip helper-address <ip_server_dhcp>` sull'interfaccia LAN per inoltrare i pacchetti DHCP broadcast (porta UDP 67) a server collocati in segmenti di rete remoti.

### 5. Switching Avanzato: Spanning Tree, EtherChannel e Port Security

NetCalc Pro 1.1 supporta la suite completa di funzionalità di switching di livello 2 richieste dalla certificazione CCNA:

- **Spanning Tree Protocol (STP)**:
  - Modalità operativa globale: `spanning-tree mode pvst`, `rapid-pvst` o `mst`.
  - Configurazione dello switch come Root Bridge primario o secondario (`spanning-tree vlan <id> root primary/secondary`).
  - Protezione delle porte di accesso utente con **PortFast** (`spanning-tree portfast`) e **BPDU Guard** (`spanning-tree bpduguard enable`).
- **Aggregazione di Porte (EtherChannel)**:
  - Protocollo standard LACP (`channel-group <id> mode active/passive`).
  - Protocollo Cisco proprietario PAgP (`channel-group <id> mode desirable/auto`).
  - Modalità statica forzata (`channel-group <id> mode on`).
  - Configurazione automatica dell'interfaccia logica aggregata `interface Port-channel <id>` (con relative impostazioni trunk).
- **Port Security (Sicurezza delle Porte Switch)**:
  - Attivazione su porte access: `switchport port-security`.
  - Limite di indirizzi MAC ammessi: `switchport port-security maximum <n>`.
  - Apprendimento dinamico persistente: `switchport port-security mac-address sticky`.
  - Azione alla violazione: `violation protect`, `violation restrict` o `violation shutdown` con spegnimento della porta e notifica SNMP.

### 6. Routing Statico e Routing Dinamico IPv4

- **Route Statiche e Default Route**: `ip route <rete> <maschera> <next_hop>` e rotta di default `ip route 0.0.0.0 0.0.0.0 <gateway>`.
- **OSPF a Singola e Multipla Area**: processo `router ospf <id>`, calcolo matematico delle wildcard inverse, e direttive `passive-interface` automatiche sulle interfacce rivolte agli host.
- **RIPv2 ed EIGRP**: `router rip` (con `version 2` e `no auto-summary`) e `router eigrp <as_number>`.

### 7. Servizi di Rete e Hardening

- **DHCP Server Integrato**: esclusione preventiva `ip dhcp excluded-address`, pool dedicati con rete, maschera, default-router e dns-server.
- **Access Control List (ACL)**: regole numerate standard (1-99) ed estese (100-199).
- **Traduzione Indirizzi (NAT/PAT Overload)**: definizione `ip nat inside`/`outside` e overloading su interfaccia WAN.
- **Hardening di Sicurezza**: `enable secret`, `service password-encryption`, cifratura sessioni con SSH (`transport input ssh`), protezione linea console (`line con 0`) e banner d'accesso (`banner motd`).

---

## Terminale Integrato con Temi e Sincronizzazione Selezione

Nei layout desktop (macOS e iPad), l'interfaccia affianca il pannello di configurazione del dispositivo al terminale Cisco in tempo reale:

- **Tema Grafite con Colori per Tipo**: commenti didattici in grigio desaturato, nomi delle interfacce in giallo brillante, indirizzi IP e maschere in azzurro/ciano, e parole chiave Cisco in evidenza. (Temi alternativi disponibili: verde fosfori, ambra e bianco classico).
- **Sincronizzazione della Selezione**: toccando un'interfaccia o un protocollo a sinistra, il terminale scorre automaticamente alla sezione corrispondente ed evidenzia le righe di configurazione interessate.
- **Copia Configurazione Intelligente (<kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd>)**: copia con un clic l'intero script nella clipboard del sistema operativo, pronto per essere incollato direttamente in Cisco Packet Tracer, PuTTY o SecureCRT.
