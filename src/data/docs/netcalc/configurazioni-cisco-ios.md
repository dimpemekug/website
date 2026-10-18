---
title: "Generazione Configurazioni Cisco IOS"
description: "Generatore di comandi Cisco IOS in NetCalc Pro: interfacce, sub-interfacce dot1Q, VLAN, trunking, routing OSPF/RIP/EIGRP, DHCP, ACL, NAT/PAT e hardening."
project: "netcalc"
order: 4
section: "Integrazione Cisco IOS"
---

## Dal Progetto Logico alla CLI Reale

Nei laboratori di networking come **Cisco Packet Tracer**, **GNS3** o nelle esercitazioni per la certificazione **CCNA**, scrivere a mano decine di righe di configurazione per ciascun router e switch comporta spesso errori di sintassi, dimenticanze banali (come il mancato `no shutdown`) o discrepanze tra le maschere di subnet e le wildcard.

**NetCalc Pro** integra un motore di generazione di script in sintassi **Cisco IOS** conforme alle best practice Cisco, ordinato secondo la logica di dipendenza del sistema operativo:

1. Le VLAN vengono dichiarate prima di essere assegnate alle porte switch.
2. Le interfacce fisiche vengono indirizzate e attivate prima che i servizi DHCP o NAT le referenzino.
3. Le Access Control List (ACL) vengono definite prima di essere collegate a interfacce o traduzioni NAT.

---

## Moduli di Configurazione Supportati

### 1. Interfacce Fisiche e Sub-interfacce (`Router-on-a-Stick`)

- **Porte Ethernet e Seriali**: supporto per `GigabitEthernet`, `FastEthernet`, `Ethernet` e `Serial`.
- **Accensione Automatica**: inserimento del comando `no shutdown` (su Cisco le porte nascono spente per default).
- **Sub-interfacce per Inter-VLAN Routing**: configurazione automatica delle sub-interfacce virtuali (es. `GigabitEthernet0/0/0.10`) con incapsulamento standard IEEE 802.1Q (`encapsulation dot1Q 10`) prima dell'assegnazione dell'indirizzo IP.
- **Descrizioni**: ogni porta riceve una direttiva `description` descrittiva con il nome della sottorete associata.

### 2. VLAN e Trunking 802.1Q su Switch

- **Dichiarazione VLAN**: creazione dei database VLAN con ID e nome (`vlan 10`, `name Vendite`).
- **Porte Access**: assegnazione selettiva delle porte utente (`switchport mode access`, `switchport access vlan 10`).
- **Porte Trunk**: configurazione dei collegamenti dorsali tra switch o verso il router (`switchport mode trunk`, `switchport trunk allowed vlan ...`).

### 3. Routing Statico e Predefinito

- **Route Statiche**: calcolo della sintassi `ip route <rete_dest> <maschera> <next_hop>`.
- **Default Gateway / Default Route**: configurazione del gateway di default per l'inoltro di tutto il traffico verso Internet o firewall (`ip route 0.0.0.0 0.0.0.0 <ip_provider>`).

### 4. Protocolli di Routing Dinamico

- **OSPF (Open Shortest Path First)**:
  - Generazione del processo `router ospf <id_processo>`.
  - Configurazione automatica dei comandi `network <rete> <wildcard> area <area>` con calcolo esatto della **wildcard mask inversa**.
  - Dichiarazione delle interfacce passive (`passive-interface <interfaccia>`) per non propagare pacchetti Hello OSPF inutili verso le reti LAN degli utenti.
- **RIPv2**: `router rip`, `version 2`, disattivazione del riassunto automatico `no auto-summary` e annunci di rete.
- **EIGRP**: `router eigrp <as_number>`, `no auto-summary` e comandi `network` con wildcard.

### 5. Server DHCP per le LAN

- **Esclusione Indirizzi Riservati**: generazione preventiva di `ip dhcp excluded-address <da_ip> <a_ip>` per preservare gateway, server DNS e stampanti di rete.
- **Creazione Pool**: `ip dhcp pool <nome_pool>`, `network <rete> <maschera>`, `default-router <ip_gateway>`, `dns-server <ip_dns>`.

### 6. Controllo Accessi (ACL) e Sicurezza

- **ACL Standard (1-99 / 1300-1999)**: regole di filtraggio basate su indirizzo IP sorgente e wildcard.
- **ACL Estese (100-199 / 2000-2699)**: filtraggio granulare per protocollo (IP, TCP, UDP, ICMP), porte applicative (HTTP, HTTPS, SSH, DNS) e destinazione.
- **Applicazione alle Interfacce**: aggancio `ip access-group <id> in/out`.

### 7. Traduzione Indirizzi di Rete (NAT / PAT Overload)

- Identificazione delle interfacce interne (`ip nat inside`) ed esterne WAN (`ip nat outside`).
- Regole di traduzione dinamica con sovraccarico della singola interfaccia pubblica del provider (`ip nat inside source list <acl> interface <wan> overload`).

### 8. Hardening di Base del Dispositivo

- `enable secret <password>` per la cifratura robusta dell'accesso privilegiato.
- `service password-encryption` per nascondere le password in chiaro nella configurazione.
- Protezione della porta Console (`line con 0`) e delle linee terminali remote (`line vty 0 4`).
- Abilitazione esclusiva di SSH con disattivazione del vecchio protocollo Telnet (`transport input ssh`).
- Banner legale di benvenuto contro accessi non autorizzati (`banner motd #Accesso Riservato#`).

---

## Terminale Integrato ed Evidenziazione Sintattica (`CLISyntax`)

Sui dispositivi desktop (macOS e iPad in landscape) l'interfaccia affianca la scheda del dispositivo al terminale virtuale in tempo reale:

- **Codifica a Colori Contestuale**: commenti didattici in grigio desaturato, nomi di interfacce in blu/ciano, indirizzi IP e maschere in arancione caldo, parole chiave Cisco in evidenza.
- **Sincronizzazione della Selezione**: toccando una specifica interfaccia o servizio a sinistra, il terminale scorre automaticamente alla sezione corrispondente ed evidenzia l'intervallo di righe CLI interessato.
- **Pulsante "Copia Configurazione"**: copia con un clic l'intero script nella clipboard del sistema operativo, pronto per essere incollato direttamente nella finestra CLI di Packet Tracer o in una sessione di terminale seriale PuTTY / SecureCRT.
