---
title: "Verifica Laboratorio (Network Linter)"
description: "Diagnostica proattiva per laboratori CCNA: trova conflitti di IP, subnet sovrapposte, next-hop non raggiungibili, errori di wildcard OSPF e anomalie DHCP."
project: "netcalc"
order: 6
section: "Diagnostica e Verifica"
---

## Il Perché del Network Linter

Nei laboratori di networking come **Cisco Packet Tracer**, **GNS3** o banchi di prova fisici, l'errore più frustrante si manifesta come una mancata connettività: il comando `ping` fallisce, ma la CLI Cisco non fornisce spiegazioni sul perché i pacchetti vengano scartati.

Le cause tipiche sono sottili:

- Due interfacce su apparati diversi hanno ricevuto lo stesso IP per distrazione.
- Una subnet `/24` e una `/26` si sovrappongono parzialmente.
- Una route statica punta a un next-hop che non appartiene a nessuna rete direttamente connessa.
- Un comando OSPF `network` ha una wildcard errata (o usa per errore la subnet mask).
- Un'interfaccia ha come IP l'indirizzo di rete o di broadcast.
- Un pool DHCP distribuisce come default-router un IP appartenente a un'altra subnet.

Il **Network Linter** di NetCalc Pro è un motore diagnostico puramente funzionale (`NetworkLinter.analyze(devices:)`) che analizza l'intera topologia del progetto prima ancora di accendere gli apparati, evidenziando ogni incoerenza con spiegazioni didattiche e indicazioni di correzione.

---

## Livelli di Gravità

I rilievi diagnostici sono raggruppati e ordinati per gravità decrescente:

|              Icona              | Gravità    | Descrizione                                                                                                                   |
| :-----------------------------: | :--------- | :---------------------------------------------------------------------------------------------------------------------------- |
|      `xmark.octagon.fill`       | **Errore** | Blocca il funzionamento della rete. Comporta conflitti di instradamento, collisioni di indirizzi o pacchetti non inoltrabili. |
| `exclamationmark.triangle.fill` | **Avviso** | La rete potrebbe avviarsi, ma il comportamento sarà anomalo o incompleto (es. annunci OSPF mancanti, porte in shutdown).      |
|       `info.circle.fill`        | **Nota**   | Promemoria o indicazioni di completezza (es. apparati senza interfacce configurate).                                          |

---

## Le 10 Regole Diagnostiche

### 1. Indirizzi o Prefissi Non Validi

- **Gravità**: Errore
- **Controllo**: Verifica che ogni interfaccia con configurazione IP abbia ottetti compresi tra `0` e `255` e un prefisso CIDR compreso tra `/0` e `/32`.
- **Risoluzione**: Correggi il formato numerico dell'indirizzo o della subnet mask.

### 2. Indirizzi IP Duplicati

- **Gravità**: Errore
- **Controllo**: Ispeziona tutte le interfacce di tutti i router, switch e host del progetto per garantire che nessun indirizzo IP `x.x.x.x` sia assegnato a più di un'interfaccia contemporaneamente.
- **Risoluzione**: Assegna un indirizzo univoco a ciascuna porta di rete.

### 3. Subnet Sovrapposte Parzialmente (Overlapping Subnets)

- **Gravità**: Errore
- **Controllo**: Due interfacce con la stessa identica subnet appartengono allo stesso dominio broadcast (caso lecitissimo nei collegamenti punto-punto o switch condivisi). Se invece una subnet ha un CIDR diverso e include l'indirizzo di rete di un'altra (es. `192.168.1.0/24` e `192.168.1.0/26`), si crea un'ambiguità nell'albero di routing che provoca la perdita intermittente del traffico.
- **Risoluzione**: Riorganizza i blocchi assegnando intervalli disgiunti (ad esempio con l'ausilio del pianificatore VLSM).

### 4. Indirizzo Host Non Valido nella Subnet

- **Gravità**: Errore
- **Controllo**: Su tutte le reti standard (prefisso compreso tra `/1` e `/30`), il primo indirizzo è l'**indirizzo di rete** e l'ultimo è l'**indirizzo di broadcast**. Nessuno dei due può essere assegnato a un'interfaccia host o router. _(Le subnet speciali `/31` RFC 3021 e `/32` host puro sono esenti da questa regola)._
- **Risoluzione**: Imposta l'IP dell'interfaccia all'interno dell'intervallo host valido compreso tra `firstHost` e `lastHost`.

### 5. Coerenza e Copertura OSPF

- **Gravità**: Errore / Avviso
- **Controllo**:
  - Se la riga `network <rete> <wildcard>` contiene una sintassi non valida, viene sollevato un **Errore**.
  - Se la wildcard mask calcolata non copre alcuna interfaccia fisica o virtuale attiva sul dispositivo, viene sollevato un **Avviso**: quasi sempre l'utente ha inserito una subnet mask (es. `255.255.255.0`) invece della wildcard (`0.0.0.255`).
  - Se un'interfaccia ha un indirizzo IP valido ma non è annunciata da alcuna direttiva OSPF del dispositivo, viene segnalato un **Avviso** (la rete non verrà appresa dai router adiacenti).
- **Risoluzione**: Usa la funzione "Genera wildcard da interfaccia" o correggi la wildcard mask.

### 6. Next-Hop delle Route Statiche

- **Gravità**: Errore
- **Controllo**: Per poter instradare un pacchetto tramite una route statica (`ip route ... <next_hop>`), l'indirizzo del next-hop deve appartenere a una subnet direttamente connessa a una delle interfacce locali del router.
- **Risoluzione**: Modifica il next-hop inserendo l'IP assegnato all'interfaccia del router adiacente sul link punto-punto condiviso.

### 7. Interfacce Configurate Spente (`shutdown`)

- **Gravità**: Avviso
- **Controllo**: Rileva le interfacce con indirizzo IP configurato ma che risultano disabilitate (`isEnabled == false`). Su Cisco IOS le porte dei router nascono in stato di shutdown predefinito.
- **Risoluzione**: Attiva l'interfaccia nell'ispettore di NetCalc Pro per includere il comando `no shutdown` nello script CLI generato.

### 8. Coerenza del Server DHCP

- **Gravità**: Errore
- **Controllo**:
  - Verifica che rete e maschera del pool siano valide e contigue.
  - Verifica che l'indirizzo indicato come `default-router` appartenga rigorosamente alla stessa sottorete distribuita dal pool ai client.
- **Risoluzione**: Imposta come default-router l'indirizzo IP dell'interfaccia del router locale affacciata su quella LAN.

### 9. Riferimenti a Interfacce Inesistenti (NAT e ACL)

- **Gravità**: Avviso
- **Controllo**: Regole NAT (`ip nat inside`, `ip nat outside`, overload su interfaccia) o Access List applicate con `ip access-group` che fanno riferimento a nomi di interfaccia con refusi o non presenti sul dispositivo.
- **Risoluzione**: Controlla la nomenclatura esatta (es. `GigabitEthernet0/0/0` vs `GigabitEthernet0/0`).

### 10. Dispositivi Vuoti

- **Gravità**: Nota
- **Controllo**: Identifica router o switch creati nel progetto che non hanno ancora alcuna interfaccia o indirizzo configurato.
- **Risoluzione**: Aggiungi le porte e gli indirizzi necessari prima di procedere al test o all'esportazione.

---

## Integrazione nell'Interfaccia

Nella vista del progetto, il pulsante **Verifica Laboratorio** mostra un badge dinamico con il conteggio degli errori e avvisi rilevati. Cliccando su qualsiasi rilievo, l'interfaccia evidenzia il dispositivo o l'interfaccia incriminata nell'ispettore contestuale, consentendo una correzione immediata con un solo clic.
