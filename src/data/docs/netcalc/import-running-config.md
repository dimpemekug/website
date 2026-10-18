---
title: "Importazione Running-Config"
description: "Come importare e analizzare configurazioni reali o create in Cisco Packet Tracer tramite show running-config in NetCalc Pro."
project: "netcalc"
order: 5
section: "Integrazione Cisco IOS"
---

## Chiudere il Ciclo del Laboratorio

Nel flusso di lavoro tipico di uno studente o di un sistemista:

1. **Si progetta** il piano di indirizzamento in NetCalc Pro.
2. **Si generano** i comandi Cisco IOS e si incollano nel terminale o in **Cisco Packet Tracer**.
3. **Si apportano modifiche** direttamente sulla CLI durante il test (aggiunta di interfacce, correzione di route, abilitazione di NAT o ACL).
4. **Si manifestano problemi**: "il ping non passa", ma non si capisce perché.

Per non dover ricopiare a mano le modifiche apportate sul simulatore, NetCalc Pro include il modulo **RunningConfigParser**. Questo componente analizza il testo grezzo di una `show running-config` esportata o copiata dal terminale e ricostruisce fedelmente il modello del dispositivo all'interno del progetto.

Una volta importato, il dispositivo può essere immediatamente sottoposto al **Network Linter** di NetCalc Pro per individuare gli errori di configurazione.

---

## Come Eseguire l'Importazione

1. Nella CLI del router o switch (in Packet Tracer o console reale), digita:
   ```text
   enable
   show running-config
   ```
2. Seleziona e copia l'intero testo generato (inclusi i caratteri `!` e i blocchi di interfaccia).
3. In NetCalc Pro, apri il tuo progetto nella sidebar.
4. Premi il pulsante **Importa Running-Config** (oppure usa la voce dedicata dal menu contestuale del progetto).
5. Incolla il testo nell'area di acquisizione e conferma.
6. L'app creerà automaticamente un nuovo dispositivo (`CiscoDevice`) con l'hostname, le interfacce, i protocolli di routing e le impostazioni estratti.

---

## Architettura del Parser: Tolleranza ed Evidenza

Una `running-config` di produzione o di laboratorio contiene spesso centinaia di righe non rilevanti per la logica di livello 2/3 (es. `spanning-tree mode pvst`, `crypto pki trustpoint`, `line con 0` avanzate, timer interni).

Il parser di NetCalc Pro è progettato secondo due principi cardine:

### 1. Tolleranza ai Comandi non Modellate

Il parser **non fallisce mai** in presenza di comandi sconosciuti o direttive hardware non supportate. I blocchi vengono interpretati riconoscendo le parole chiave di apertura (`interface`, `router ospf`, `ip dhcp pool`, `vlan`) e il delimitatore standard di fine blocco (`!` oppure `exit`/`end`).

### 2. Trasparenza Totale (`unrecognizedLines`)

Le righe di configurazione non interpretate non vengono perse né ignorate silenziosamente: vengono raccolte nella lista `unrecognizedLines` e mostrate all'utente in una sezione dedicata di riepilogo. In questo modo saprai sempre con precisione quali parti della configurazione sono state tradotte in oggetti del modello e quali erano comandi ausiliari.

---

## Elementi Interpretati dal Parser

Il parser supporta la totalità dei comandi generati dal motore CLI dell'app:

| Ambito                           | Comandi e Blocchi Riconosciuti                                                                                                                                              |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Identità Dispositivo**         | `hostname <nome>`                                                                                                                                                           |
| **Interfacce Fisiche e Logiche** | `interface <nome>`, `description <testo>`, `ip address <ip> <maschera>`, `shutdown` / `no shutdown`                                                                         |
| **Sub-interfacce e Trunking**    | `encapsulation dot1Q <vlan_id>`, `switchport mode access`, `switchport mode trunk`, `switchport access vlan <id>`, `switchport trunk allowed vlan <elenco>`                 |
| **VLAN Database**                | `vlan <id>`, `name <nome>`                                                                                                                                                  |
| **Routing Statico**              | `ip route <rete_destinazione> <maschera> <next_hop>`                                                                                                                        |
| **OSPF**                         | `router ospf <process_id>`, comandi `network <rete> <wildcard> area <area_id>`                                                                                              |
| **RIPv2**                        | `router rip`, `version 2`, `no auto-summary`, `network <rete>`, `passive-interface <nome>`                                                                                  |
| **EIGRP**                        | `router eigrp <as_number>`, `no auto-summary`, `network <rete> [wildcard]`                                                                                                  |
| **DHCP Server**                  | `ip dhcp pool <nome>`, `network <rete> <maschera>`, `default-router <ip>`, `dns-server <ip>`, associazione automatica delle direttive precedenti `ip dhcp excluded-address` |
| **NAT / PAT**                    | `ip nat inside source list <acl> interface <wan> overload`, regole `ip nat inside source static`, tag di interfaccia `ip nat inside` e `ip nat outside`                     |
| **Access Control List**          | `access-list <id> permit/deny <protocollo> ...`, direttive `ip access-group <id> in/out`                                                                                    |
| **Hardening di Sicurezza**       | `enable secret <pass>`, `service password-encryption`, `banner motd #<messaggio>#`, `ip domain-name <dominio>`                                                              |

---

## Passaggio Immediato alla Diagnostica

Dopo l'importazione, il nuovo dispositivo entra a far parte della topologia del progetto. Aprendo la scheda **Verifica Laboratorio**, NetCalc Pro eseguirà immediatamente la scansione delle interfacce e delle route appena importate, evidenziando se nella configurazione incollata erano presenti subnet sovrapposte, errori di wildcard in OSPF o gateway errati.
