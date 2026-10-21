---
title: "Verifica Laboratorio (Network Linter)"
description: "Diagnostica proattiva per laboratori CCNA: trova conflitti di IP, subnet sovrapposte, next-hop non raggiungibili, errori OSPFv3, HSRP, sub-interfacce e anomalie DHCP."
project: "netcalc"
order: 7
section: "Diagnostica e Verifica"
---

## Il Perché del Network Linter

Nei laboratori di networking come **Cisco Packet Tracer**, **GNS3** o banchi di prova fisici, l'errore più frustrante si manifesta come una mancata connettività: il comando `ping` fallisce, ma la CLI Cisco non fornisce spiegazioni sul perché i pacchetti vengano scartati.

Le cause tipiche sono sottili:

- Due interfacce su apparati diversi hanno ricevuto lo stesso IP per distrazione.
- Una subnet `/24` e una `/26` si sovrappongono parzialmente.
- Una route statica punta a un next-hop che non appartiene a nessuna rete direttamente connessa.
- Un comando OSPF `network` ha una wildcard errata (o usa per errore la subnet mask).
- Un processo OSPFv3 non si avvia perché manca un `router-id` valido.
- Una sub-interfaccia 802.1Q è stata configurata senza comando di incapsulamento o su una porta fisica spenta.
- Un IP virtuale HSRP non fa parte della stessa subnet dell'interfaccia.
- Una porta switch in modalità trunk ha la port security abilitata (configurazione non supportata da Cisco IOS).

Il **Network Linter** di NetCalc Pro (`NetworkLinter.analyze(devices:)`) è un motore diagnostico puramente funzionale che esamina l'intera topologia prima ancora di accendere gli apparati, evidenziando ogni incoerenza con spiegazioni didattiche e indicazioni di correzione.

---

## Livelli di Gravità

I rilievi diagnostici sono raggruppati e ordinati per gravità decrescente:

|              Icona              | Gravità    | Descrizione                                                                                                                   |
| :-----------------------------: | :--------- | :---------------------------------------------------------------------------------------------------------------------------- |
|      `xmark.octagon.fill`       | **Errore** | Blocca il funzionamento della rete. Comporta conflitti di instradamento, collisioni di indirizzi o pacchetti non inoltrabili. |
| `exclamationmark.triangle.fill` | **Avviso** | La rete potrebbe avviarsi, ma il comportamento sarà anomalo o incompleto (es. annunci OSPF mancanti, porte in shutdown).      |
|       `info.circle.fill`        | **Nota**   | Promemoria o indicazioni di completezza (es. apparati senza interfacce configurate).                                          |

---

## Le 15 Regole Diagnostiche

### 1. Indirizzi o Prefissi Non Validi
- **Gravità**: Errore
- **Controllo**: Verifica che ogni interfaccia con configurazione IP abbia ottetti compresi tra `0` e `255` e un prefisso CIDR compreso tra `/0` e `/32`.

### 2. Indirizzi IP Duplicati
- **Gravità**: Errore
- **Controllo**: Ispeziona tutte le interfacce di tutti i router, switch e host del progetto per garantire che nessun indirizzo IP `x.x.x.x` sia assegnato a più di un'interfaccia contemporaneamente.

### 3. Subnet Sovrapposte Parzialmente (Overlapping Subnets)
- **Gravità**: Errore
- **Controllo**: Se una subnet ha un CIDR diverso e include l'indirizzo di rete di un'altra (es. `192.168.1.0/24` e `192.168.1.0/26`), si crea un'ambiguità nell'albero di routing che provoca la perdita intermittente del traffico.

### 4. Indirizzo Host Non Valido nella Subnet
- **Gravità**: Errore
- **Controllo**: Su tutte le reti standard (prefisso compreso tra `/1` e `/30`), il primo indirizzo è l'**indirizzo di rete** e l'ultimo è l'**indirizzo di broadcast**. Nessuno dei due può essere assegnato a un'interfaccia host o router. _(Le subnet speciali `/31` RFC 3021 e `/32` host puro sono esenti da questa regola)._

### 5. Coerenza e Copertura OSPFv2
- **Gravità**: Errore / Avviso
- **Controllo**:
  - Sintassi non valida della riga `network <rete> <wildcard>`.
  - Wildcard mask che non copre alcuna interfaccia fisica o virtuale attiva sul dispositivo (quasi sempre l'utente ha inserito una subnet mask invece della wildcard).
  - Interfaccia con indirizzo IP valido non annunciata da alcuna direttiva OSPF del dispositivo.

### 6. Next-Hop delle Route Statiche
- **Gravità**: Errore
- **Controllo**: Per poter instradare un pacchetto tramite una route statica (`ip route ... <next_hop>`), l'indirizzo del next-hop deve appartenere a una subnet direttamente connessa a una delle interfacce locali del router.

### 7. Interfacce Configurate Spente (`shutdown`)
- **Gravità**: Avviso
- **Controllo**: Rileva le interfacce con indirizzo IP configurato ma che risultano disabilitate (`isEnabled == false`). Su Cisco IOS le porte dei router nascono in stato di shutdown predefinito.

### 8. Coerenza del Server DHCP
- **Gravità**: Errore
- **Controllo**:
  - Verifica che rete e maschera del pool siano valide e contigue.
  - Verifica che l'indirizzo indicato come `default-router` appartenga rigorosamente alla stessa sottorete distribuita dal pool ai client.

### 9. Riferimenti a Interfacce Inesistenti (NAT e ACL)
- **Gravità**: Avviso
- **Controllo**: Regole NAT o Access List applicate con `ip access-group` che fanno riferimento a nomi di interfaccia non presenti sul dispositivo o con refusi.

### 10. Dispositivi Vuoti
- **Gravità**: Nota
- **Controllo**: Identifica router o switch creati nel progetto che non hanno ancora alcuna interfaccia o indirizzo configurato.

### 11. Indirizzi IPv6 Non Validi o Duplicati
- **Gravità**: Errore
- **Controllo**: Ispezione rigorosa della sintassi IPv6 (lunghezza hextet, uso univoco del compressore `::`, prefissi compresi tra `/0` e `/128`) e controllo di non-duplicazione per indirizzi Global Unicast e Link-Local.

### 12. OSPFv3 Senza Router-ID
- **Gravità**: Errore
- **Controllo**: In OSPFv3 il protocollo richiede obbligatoriamente un identificativo a 32 bit in formato decimale puntato (`router-id <A.B.C.D>`). In assenza di interfacce IPv4 configurate sul router, il motore di routing non è in grado di auto-assegnarsi un ID e il processo OSPFv3 non si avvia.
- **Risoluzione**: Aggiungi la direttiva `router-id 1.1.1.1` all'interno del processo OSPFv3.

### 13. Sub-interfacce Senza Incapsulamento o con Porta Fisica Spenta
- **Gravità**: Errore / Avviso
- **Controllo**:
  - Se una sub-interfaccia virtuale (es. `GigabitEthernet0/0.10`) possiede un indirizzo IP ma non la clausola `encapsulation dot1Q <vlan>`, i pacchetti non possono essere taggati e la comunicazione inter-VLAN fallisce.
  - Se la porta fisica genitore è disattivata (`shutdown`), tutte le sub-interfacce figlie rimangono inattive indipendentemente dal loro stato logico.

### 14. Incoerenze di Gateway Ridondato HSRP
- **Gravità**: Errore
- **Controllo**: L'indirizzo IP virtuale configurato con `standby <gruppo> ip <ip_virtuale>` deve obbligatoriamente risiedere all'interno della stessa sottorete IP assegnata all'interfaccia fisica o virtuale di appartenenza.

### 15. Port Security su Porte Trunk
- **Gravità**: Errore
- **Controllo**: Cisco IOS vieta l'abilitazione di `switchport port-security` sulle interfacce configurate come trunk 802.1Q (`switchport mode trunk`). La port security è supportata unicamente su porte di accesso o su porte 802.1Q tunnel speciali.
- **Risoluzione**: Disabilita la port security sulla porta trunk oppure imposta la modalità su `access`.

---

## Integrazione nell'Interfaccia

Nella vista del progetto, il pulsante **Verifica Laboratorio** mostra un badge dinamico con il conteggio degli errori e avvisi rilevati. Cliccando su qualsiasi rilievo, l'interfaccia evidenzia il dispositivo o l'interfaccia incriminata nell'ispettore contestuale, consentendo una correzione immediata con un solo clic.
