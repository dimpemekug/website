---
title: "Strumenti di Rete Avanzati"
description: "Guida ai quattro strumenti di NetCalc Pro: Route Summary con comandi Cisco, convertitore Intervallo a CIDR con ACL, simulatore Wildcard e ACL, e confronto reti con Longest Prefix Match."
project: "netcalc"
order: 4
section: "Strumenti e Calcolo"
---

## Una Suite di Strumenti Dedicata

Oltre alle calcolatrici e ai pianificatori di sottorete, **NetCalc Pro 1.1** introduce una sezione dedicata di **Strumenti** (accessibile dalla sidebar su Mac e iPad, dal menu del titolo su iPhone, o accanto al selettore segmentato della calcolatrice su macOS).

Questi quattro strumenti risolvono le problematiche operative più frequenti nella configurazione e nel troubleshooting delle reti aziendali e nei laboratori Cisco CCNA:

1. **Summary (Supernetting & Route Summarization)**
2. **Intervallo → CIDR (Range to CIDR)**
3. **Wildcard e ACL (Simulatore di pacchetti)**
4. **Confronta Reti (Same Subnet & Longest Prefix Match)**

---

## 1. Summary: Aggregazione Rotte e Supernetting

Quando una tabella di instradamento contiene decine o centinaia di rotte verso subnet contigue, i router spendono cicli di CPU e memoria preziosi per elaborare ogni singola voce. La **route summarization** (o supernetting) consente di collassare più sottoreti in un unico blocco riassuntivo.

```text
Sottoreti di ingresso:
192.168.0.0/24  ->  11000000.10101000.00000 000.00000000
192.168.1.0/24  ->  11000000.10101000.00000 001.00000000
192.168.2.0/24  ->  11000000.10101000.00000 010.00000000
192.168.3.0/24  ->  11000000.10101000.00000 011.00000000
                     ▲──────── 22 bit in comune ────────▲
Blocco Summary:     192.168.0.0/22 (255.255.252.0)
```

### Funzionalità del Pannello Summary

- **Incolla e Calcola**: incolla un elenco di indirizzi o reti in qualsiasi formato (con CIDR o maschera decimale).
- **Evidenziazione dei Bit Comuni**: visualizzazione grafica dei bit condivisi tra tutte le reti inserite, mostrando visivamente dove si attesta il confine del prefisso riassuntivo.
- **Rilevamento Indirizzi Extra (Spazio Non Allocato)**: NetCalc Pro calcola all'istante se il blocco riassuntivo copre esattamente solo le reti desiderate oppure se include indirizzi aggiuntivi non ancora allocati, quantificandoli chiaramente.
- **Aggregazione Esatta**: se l'elenco non forma una potenza di 2 perfetta, lo strumento propone sia il blocco riassuntivo minimo contenitore sia l'elenco delle subnet minime per un'aggregazione esatta al 100%.

### Comandi Cisco IOS Generati al Volo

NetCalc Pro genera direttamente i comandi pronti da incollare sulla CLI:

- **Route Statica di Summary**:
  ```text
  ip route 192.168.0.0 255.255.252.0 GigabitEthernet0/0/0
  ```
- **Rotta di Salvaguardia Null0** (best practice CCNA per prevenire loop di routing per gli indirizzi extra non assegnati):
  ```text
  ip route 192.168.0.0 255.255.252.0 Null0
  ```
- **OSPF ABR Area Range**:
  ```text
  router ospf 1
   area 1 range 192.168.0.0 255.255.252.0
  ```
- **EIGRP Summary Address**:
  ```text
  interface GigabitEthernet0/0/0
   ip summary-address eigrp 100 192.168.0.0 255.255.252.0
  ```

---

## 2. Intervallo → CIDR (Range to CIDR)

Nelle architetture di sicurezza e nella stesura di policy firewall, i requisiti di business impongono spesso di autorizzare o bloccare un intervallo arbitrario di indirizzi IP (es. da `10.0.1.50` a `10.0.1.180`). Tuttavia, i router e i firewall operano esclusivamente su blocchi di potenze di 2 definiti da prefissi CIDR o maschere wildcard.

### Come Funziona la Scomposizione Minima

Lo strumento scompone qualsiasi intervallo casuale nel **minor numero possibile di blocchi CIDR validi**:

1. Inserisci l'**IP Iniziale** e l'**IP Finale**.
2. NetCalc Pro applica l'algoritmo di partizione esponenziale: allinea i confini di bit e aggrega i blocchi più grandi possibili verso il centro dell'intervallo.
3. Restituisce la tabella con:
   - Ogni blocco CIDR calcolato (es. `/29`, `/27`, `/26`, ecc.).
   - La maschera decimale e la wildcard mask associata.
   - Il numero esatto di indirizzi coperti da ogni sotto-blocco.
4. **Righe ACL Cisco Pronte**: genera immediatamente le direttive di Access Control List corrispondenti (es. `permit ip 10.0.1.64 0.0.0.63 any`), pronte da copiare.

---

## 3. Wildcard e ACL: Simulatore di Pacchetti

Le maschere **Wildcard** (utilizzate da OSPF, EIGRP e dalle Access Control List Cisco) funzionano secondo la regola:
- Bit `0`: il bit del pacchetto **deve coincidere** esattamente con l'indirizzo indicato.
- Bit `1`: il bit del pacchetto **può essere qualsiasi** (condizione _don't care_).

### Analisi delle Wildcard Non Contigue

Oltre alle classiche wildcard inverse di subnet (es. `0.0.0.255`), lo strumento consente di inserire **wildcard non contigue** (es. `0.0.0.254`), spiegando visivamente quali indirizzi vengono selezionati (nell'esempio, solo gli indirizzi IP con l'ultimo bit a `0`, ossia tutti gli IP con ultimo ottetto pari).

### Simulatore ACL Riga per Riga

Il simulatore di Access List integrato elimina ogni dubbio sul comportamento di una policy di sicurezza:

1. **Definisci le Regole**: componi la lista di direttive `permit` o `deny` (specificando protocollo IP/TCP/UDP/ICMP, IP sorgente, IP destinazione e porte).
2. **Invia un Pacchetto di Test**: specifica i parametri del pacchetto da simulare (IP sorgente, IP destinazione, protocollo e porta applicativa).
3. **Tracciamento Visivo dell'Elaborazione**:
   - L'applicazione esamina le righe dell'ACL dall'alto verso il basso, simulando il comportamento esatto dell'ASIC Cisco.
   - Ogni riga mostra lo stato di confronto: **Non corrispondente** (si passa alla riga successiva) oppure **MATCH!**.
   - Alla prima regola corrispondente, l'elaborazione si arresta indicando l'azione finale (**PERMIT** in verde o **DENY** in rosso).
   - Se nessuna riga corrisponde, evidenzia l'intervento dell'**Implicit Deny** finale di Cisco IOS (`deny ip any any`).

---

## 4. Confronta Reti: Same Subnet & Longest Prefix Match

Questo strumento affronta due degli scenari diagnostici più insidiosi delle reti TCP/IP:

### Diagnosi "Stessa Subnet?" e Ping Asimmetrici

Spesso due host collegati allo stesso switch non riescono a comunicare: l'Host A riesce a raggiungere l'Host B, ma l'Host B non riesce a rispondere, oppure il comando `ping` fallisce inspiegabilmente.

La causa risiede quasi sempre in una **maschera disallineata** tra i due dispositivi:

- Inserisci IP e Maschera dell'**Host 1** (es. `192.168.1.100/24`).
- Inserisci IP e Maschera dell'**Host 2** (es. `192.168.1.200/25`).
- NetCalc Pro calcola la visione locale di ciascun host:
  - Per l'Host 1 (`/24`), la subnet si estende da `.1` a `.254`: l'Host 2 è considerato **locale** e viene contattato direttamente tramite ARP.
  - Per l'Host 2 (`/25`), la subnet termina a `.126`: l'Host 1 è considerato **remoto** e i pacchetti di risposta vengono inviati al default gateway (che se non esiste o non effettua routing blocca la comunicazione).
- Lo strumento evidenzia immediatamente l'asimmetria con un messaggio didattico chiaro.

### Rilevamento Sovrapposizioni (Subnet Overlap)

Incolla una lista di sottoreti del tuo piano di indirizzamento: NetCalc Pro scansiona tutte le coppie possibili e segnala all'istante eventuali sovrapposizioni parziali o inclusioni complete tra blocchi con prefissi diversi.

### Simulazione Longest Prefix Match (LPM)

Nel routing IP, quando un pacchetto deve essere inoltrato e nella tabella di instradamento sono presenti più rotte corrispondenti all'IP di destinazione, il router sceglie la rotta con il **prefisso più lungo e specifico** (Longest Prefix Match):

- Inserisci l'indirizzo IP di destinazione del pacchetto.
- Inserisci la tabella delle rotte attive (es. `0.0.0.0/0`, `10.0.0.0/8`, `10.1.0.0/16`, `10.1.4.0/24`).
- NetCalc Pro mostra graficamente quali rotte corrispondono all'indirizzo e contrassegna la rotta vincente selezionata dal router per l'inoltro, calcolando la metrica e l'interfaccia associata.
