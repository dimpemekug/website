---
title: "Calcolatrice IPv4, IPv6 e Subnetting"
description: "Guida alle funzionalità di calcolo IP di NetCalc Pro: quattro modalità di inserimento, ispezione binaria a 32 bit, spiegazione passo-passo Come si calcola, cronologia recenti e modulo IPv6."
project: "netcalc"
order: 2
section: "Calcolo e Pianificazione"
---

## Calcolatrice IPv4 Ridisegnata

La calcolatrice IPv4 di **NetCalc Pro** offre un'esperienza fluida e immediata per esplorare qualsiasi combinazione di indirizzo IP e maschera di sottorete, unendo la precisione algebrica alla massima chiarezza visiva.

Su macOS e iPad, tutti i dati essenziali e i controlli risiedono in una singola schermata senza scorrimento; su iPhone, l'interfaccia si adatta dinamicamente per mostrare indirizzi completi, slider di prefisso e menu contestuali rapidi.

### 4 Modalità di Input Flessibili

L'applicazione si adatta al tuo modo di operare:

1. **Indirizzo / Prefisso CIDR** (es. `192.168.1.100/26`): la notazione più rapida, dotata di tasti di incremento/decremento rapido `−` e `+` (o slider continuo su iPhone).
2. **Decimale Puntato** (es. IP `172.16.50.14`, Maschera `255.255.240.0`): ideale per copiare al volo configurazioni da schede di rete e tabelle d'esame.
3. **Wildcard Mask Inversa** (es. IP `10.1.0.50`, Wildcard `0.0.3.255`): essenziale per verificare e comporre regole per Access Control List (ACL) e direttive `network` in OSPF ed EIGRP.
4. **Dimensionamento per Numero di Host**: inserisci l'indirizzo base e la quantità di dispositivi da ospitare (es. 500 host); NetCalc Pro calcola la maschera minima efficiente (es. `/23`), minimizzando lo spreco di indirizzi.

---

## Ispezione Binaria Interattiva (`BitBoundaryView`)

Al centro della calcolatrice IPv4 risiede la **rappresentazione binaria a 32 bit** dell'indirizzo:

```text
Ottetto 1          Ottetto 2          Ottetto 3          Ottetto 4
11000000 (192)  .  10101000 (168)  .  00000001 (1)    .  01 | 100100 (100)
▲─────────────────────────── Rete (/26) ─────────────────────────▲ ▲── Host ──▲
```

- **Separazione Cromatica Ad Alto Contrasto**: i bit della porzione di rete e quelli della porzione di host sono evidenziati con colori distinti e conformi alle linee guida di accessibilità.
- **Spostamento Interattivo del Confine**: su Mac e iPad puoi cliccare direttamente su un qualsiasi bit per spostare all'istante il confine tra rete e host (da `/1` a `/32`), osservando in tempo reale l'aggiornamento simultaneo di maschera, wildcard, indirizzo di rete e broadcast.
- **Formato Esadecimale**: conversione esadecimale istantanea a 8 cifre per l'analisi a basso livello dei pacchetti di rete e dei campi degli header IP.

---

## "Come si Calcola": Spiegazione Passo-Passo

Sotto i risultati principali, la sezione **"Come si calcola"** scompone l'algebra booleana eseguita dal motore di calcolo, utilizzando esattamente i numeri inseriti dall'utente:

```text
Indirizzo IP:    192.168.1.100    -> 11000000.10101000.00000001.01100100
Subnet Mask:     255.255.255.192  -> 11111111.11111111.11111111.11000000
-------------------------------------------------------------------------
AND Bit a Bit:   192.168.1.64     -> 11000000.10101000.00000001.01000000 (Rete)

Wildcard Mask:   0.0.0.63         -> 00000000.00000000.00000000.00111111
OR Bit a Bit:    192.168.1.127    -> 11000000.10101000.00000001.01111111 (Broadcast)

Host Formula:    2^(32 - 26) - 2  =  2^6 - 2 = 64 - 2 = 62 host utilizzabili
```

1. **AND Logico per l'Indirizzo di Rete**: confronta ogni bit dell'IP con il corrispondente bit della maschera. Poiché $1 \text{ AND } 1 = 1$ e qualsiasi bit con $0$ diventa $0$, tutti i bit host vengono azzerati, isolando l'identificativo di rete.
2. **Wildcard Mask per Inversione**: la maschera inversa sostituisce gli `1` con gli `0` e viceversa.
3. **OR Logico per il Broadcast**: eseguendo l'OR tra l'indirizzo di rete e la wildcard, tutti i bit della porzione host vengono forzati a `1`, identificando l'indirizzo di broadcast.
4. **Capienza Host**: calcolo del numero totale di indirizzi ($2^H$) e sottrazione dei due indirizzi riservati (rete e broadcast).

---

## Cronologia e Menu "Recenti"

NetCalc Pro memorizza automaticamente gli **ultimi 15 calcoli effettuati**:

- La registrazione avviene in background ogni volta che ti soffermi su un risultato valido per qualche istante.
- Aprendo il menu **Recenti** nella toolbar della calcolatrice, puoi richiamare immediatamente qualsiasi calcolo passato con un clic, ripristinando all'istante l'indirizzo e la maschera associati.

---

## Parametri e Proprietà Calcolate

Per ogni combinazione inserita, NetCalc Pro compila una scheda completa con valori copiabili con un singolo tocco:

| Parametro                       | Descrizione                                                                                                            | Esempio (`192.168.1.100/26`)     |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **Network Address**             | Indirizzo identificativo della sottorete (bit host a `0`)                                                              | `192.168.1.64`                   |
| **Broadcast Address**           | Indirizzo di trasmissione a tutti gli host (bit host a `1`)                                                            | `192.168.1.127`                  |
| **Host Intervallo Assegnabile** | Primo e ultimo indirizzo configurabili su PC, server e interfacce                                                      | `192.168.1.65` — `192.168.1.126` |
| **Host Totali / Utilizzabili**  | Totale indirizzi nel blocco ($2^{32 - \text{prefisso}}$) e utilizzabili (meno network e broadcast)                     | 64 totali / **62 utilizzabili**  |
| **Subnet Mask Decimale**        | Maschera standard in quattro ottetti                                                                                   | `255.255.255.192`                |
| **Wildcard Mask**               | Maschera inversa per ACL e OSPF (bit invertiti rispetto alla subnet mask)                                              | `0.0.0.63`                       |
| **Classe e Ambito RFC**         | Identificazione della classe storica (A, B, C, D, E) e conformità RFC                                                  | Classe C · Privato (RFC 1918)    |
| **Indirizzi Speciali**          | Riconoscimento automatico di Link-Local APIPA (`169.254.0.0/16`), Loopback (`127.0.0.0/8`) o Multicast (`224.0.0.0/4`) | —                                |

---

## Calcolatrice IPv6

NetCalc Pro integra un modulo dedicato per il protocollo IPv6 a 128 bit:

- **Compressione e Decompressione Standard (RFC 5952)**: inserisci qualsiasi indirizzo IPv6 con zeri iniziali o forma estesa; l'app mostra la corretta forma canonica compressa con il doppio due punti `::` e viceversa la rappresentazione estesa a 32 cifre esadecimali raggruppate in 8 hextet.
- **Analisi Prefissi**: verifica dello spazio globale di routing, del prefisso del fornitore (/48), del subnet ID (/64) e dell'Interface Identifier a 64 bit.
- **Calcolo EUI-64 da Indirizzo MAC**: inserisci l'indirizzo fisico Ethernet a 48 bit (es. `00:1A:2B:3C:4D:5E`); NetCalc Pro inverte il settimo bit (Universal/Local) e inserisce il pattern `FF:FE` al centro, calcolando l'indirizzo Link-Local o SLAAC risultante (`fe80::021a:2bff:fe3c:4d5e`).
- **Classificazione dell'Indirizzo**: identificazione istantanea tra Global Unicast (`2000::/3`), Link-Local (`fe80::/10`), Unique Local ULA (`fc00::/7`), Multicast (`ff00::/8`) e Loopback (`::1/128`).
- **Comandi Cisco IOS per IPv6**: generazione istantanea dei comandi `ipv6 address` ed `ipv6 address ... eui-64`.

---

## Subnetting a Blocchi Fissi

Quando occorre suddividere una rete aziendale o accademica in sottoreti tutte della medesima dimensione:

1. Inserisci il blocco radice di partenza (es. `10.10.0.0/16`).
2. Scegli il criterio di partizionamento:
   - **Per numero di sottoreti richieste** (es. 8 dipartimenti uguali).
   - **Per nuovo prefisso di subnet** (es. trasforma la `/16` in tante sottoreti `/20`).
3. NetCalc Pro calcola la tabella complessiva con:
   - Indice numerico della subnet.
   - Network address.
   - Range del gateway e degli host utilizzabili.
   - Broadcast address.
   - Quantità di host per ciascun segmento.
4. Dalla barra delle azioni puoi premere **"Crea dispositivi dal piano"** per esportare direttamente la tabella nei tuoi progetti di laboratorio.
