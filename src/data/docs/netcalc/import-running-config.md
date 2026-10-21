---
title: "Importazione e Confronto Running-Config"
description: "Come importare, analizzare e confrontare configurazioni Cisco IOS reali con NetCalc Pro: ricostruzione apparati, Config Diff blocco per blocco e copia dei comandi mancanti."
project: "netcalc"
order: 6
section: "Integrazione Cisco IOS"
---

## Chiudere il Ciclo del Laboratorio

Nel flusso di lavoro tipico di uno studente, di un docente o di un ingegnere di rete:

1. **Si progetta** il piano di indirizzamento in NetCalc Pro.
2. **Si generano** i comandi Cisco IOS e si incollano nel simulatore (**Cisco Packet Tracer**, **GNS3**, **EVE-NG**) o sugli apparati fisici.
3. **Si effettuano modifiche e prove** direttamente sulla console CLI durante il troubleshooting (aggiunta di rotte, abilitazione di porte, modifica di ACL).
4. **Si creano discrepanze**: l'apparato reale non rispecchia più il progetto originale o si manifestano problemi di connettività.

Per risolvere questo problema bidirezionale, NetCalc Pro include due strumenti complementari:
- **Importazione Running-Config**: analizza una configurazione esistente e ricrea il dispositivo all'interno del progetto.
- **Confronto con la Running-Config (Config Diff)**: confronta la configurazione reale con il modello teorico, indicando cosa manca e cosa c'è in più.

---

## 1. Come Eseguire l'Importazione

1. Nella CLI del router o dello switch (in Packet Tracer o console seriale), digita:
   ```text
   enable
   show running-config
   ```
2. Seleziona e copia l'intero testo generato (inclusi i caratteri `!` e i blocchi di interfaccia).
3. In NetCalc Pro, apri il tuo progetto nella sidebar.
4. Premi il pulsante **Importa Running-Config** (oppure usa la voce dedicata dal menu contestuale del progetto o dalla toolbar).
5. Incolla il testo nell'area di acquisizione e conferma.
6. L'app creerà automaticamente un nuovo dispositivo (`CiscoDevice`) con l'hostname, le interfacce fisiche e virtuali, i protocolli di routing e i servizi estratti.

---

## 2. Architettura del Parser: Tolleranza ed Evidenza

Una `running-config` di produzione o di laboratorio contiene spesso centinaia di righe non rilevanti per la logica di livello 2/3 (es. `crypto pki trustpoint`, certificati digitali, timer interni, direttive hardware proprietary).

Il parser di NetCalc Pro opera secondo due principi fondamentali:

### Tolleranza ai Comandi non Modellati

Il parser **non fallisce mai** in presenza di comandi sconosciuti o direttive hardware non supportate. I blocchi vengono interpretati riconoscendo le parole chiave di apertura (`interface`, `router ospf`, `ipv6 router ospf`, `ip dhcp pool`, `vlan`) e il delimitatore standard di fine blocco (`!` oppure `exit`/`end`).

### Trasparenza Totale (`unrecognizedLines`)

Le righe di configurazione non interpretate non vengono perse né ignorate silenziosamente: vengono raccolte nella lista `unrecognizedLines` e mostrate all'utente in una sezione dedicata di riepilogo. In questo modo saprai sempre con precisione quali parti della configurazione sono state tradotte in oggetti del modello e quali erano comandi ausiliari.

---

## 3. Elementi Interpretati dal Parser (Versione 1.1)

Il parser supporta la totalità dei comandi generati dal motore CLI dell'app:

| Ambito                           | Comandi e Blocchi Riconosciuti                                                                                                                                              |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Identità Dispositivo**         | `hostname <nome>`, abilitazione routing globale `ipv6 unicast-routing`                                                                                                      |
| **Interfacce Fisiche e Logiche** | `interface <nome>`, `description <testo>`, `ip address <ip> <maschera>`, `ipv6 address <ip/prefisso>`, `shutdown` / `no shutdown`                                          |
| **Sub-interfacce e Trunking**    | `encapsulation dot1Q <vlan_id>`, `switchport mode access`, `switchport mode trunk`, `switchport access vlan <id>`, `switchport trunk allowed vlan <elenco>`                 |
| **Switching Avanzato**           | `spanning-tree mode ...`, `spanning-tree vlan ... root ...`, `channel-group <id> mode ...`, `switchport port-security`, `switchport port-security mac-address sticky`      |
| **Ridondanza e Relay**           | `standby <gruppo> ip <ip_virtuale>`, `standby priority`, `standby preempt`, `ip helper-address <server>`                                                                   |
| **VLAN Database**                | `vlan <id>`, `name <nome>`                                                                                                                                                  |
| **Routing Statico**              | `ip route <rete> <maschera> <next_hop>`, `ipv6 route <prefisso> <next_hop>`                                                                                                 |
| **OSPFv2 e OSPFv3**              | `router ospf <id>`, `network <rete> <wildcard> area <id>`, `ipv6 router ospf <id>`, `router-id <id>`, `ipv6 ospf <id> area <area>`                                        |
| **RIPv2 ed EIGRP**               | `router rip`, `version 2`, `no auto-summary`, `network <rete>`, `router eigrp <as>`, `network <rete> [wildcard]`                                                            |
| **DHCP Server**                  | `ip dhcp pool <nome>`, `network <rete> <maschera>`, `default-router <ip>`, `dns-server <ip>`, direttive `ip dhcp excluded-address`                                          |
| **NAT / PAT**                    | `ip nat inside source list <acl> interface <wan> overload`, regole `ip nat inside source static`, tag di interfaccia `ip nat inside` e `ip nat outside`                     |
| **Access Control List**          | `access-list <id> permit/deny <protocollo> ...`, direttive `ip access-group <id> in/out`                                                                                    |
| **Hardening di Sicurezza**       | `enable secret <pass>`, `service password-encryption`, `banner motd #<messaggio>#`, `transport input ssh`, configurazione `line con 0` e `line vty 0 4`                    |

---

## 4. "Confronta con la Running-Config" (Config Diff)

Una delle novità più apprezzate di **NetCalc Pro 1.1** è il pannello **Confronta con la running-config** (`ConfigCompareSheet`), accessibile dalla scheda di ciascun dispositivo del progetto.

### Come Funziona il Diff

Quando incolli l'output di `show running-config` di un apparato reale:

1. **Analisi Strutturale Blocco per Blocco**: l'algoritmo non fa un semplice diff testuale riga per riga, ma confronta logicamente ogni sezione (interfaccia per interfaccia, processo per processo).
2. **Evidenziazione Comandi Mancanti**: identifica quali comandi previsti dal modello di NetCalc Pro non sono ancora stati applicati sul dispositivo reale (es. `no shutdown` dimenticato, mancata assegnazione della VLAN alla porta trunk, route statica mancante).
3. **Evidenziazione Comandi Extra**: segnala eventuali comandi presenti sull'apparato reale che non fanno parte del modello di progetto.
4. **Pulsante "Copia Comandi Mancanti"**: con un clic, NetCalc Pro isola e copia negli appunti esclusivamente la sequenza minima di comandi Cisco IOS necessari per allineare l'apparato fisico al progetto, pronta da incollare nel terminale senza dover riconfigurare l'intero switch o router.
