---
title: "Calcolatrice IPv4, IPv6 e Subnetting"
description: "Guida alle funzionalità di calcolo IP di NetCalc Pro: quattro modalità di inserimento, ispezione binaria a 32 bit, mappa proporzionale e calcolo IPv6 con EUI-64."
project: "netcalc"
order: 2
section: "Calcolo e Pianificazione"
---

## Calcolatrice IPv4 Avanzata

La calcolatrice IPv4 di **NetCalc Pro** è progettata per offrire un feedback visivo immediato su qualsiasi combinazione di indirizzo e maschera di sottorete, facilitando sia la comprensione concettuale che il lavoro operativo sui dispositivi.

### 4 Modalità di Input Flessibili

L'applicazione si adatta al modo in cui ricevi o memorizzi i dati di rete:

1. **Indirizzo / Prefisso CIDR** (es. `192.168.1.100/26`): la notazione più rapida e moderna, ideale per la maggior parte dei calcoli.
2. **Decimale Puntato** (es. IP `172.16.50.14`, Maschera `255.255.240.0`): utile quando si copiano parametri da schede di rete di sistemi operativi o vecchi manuali.
3. **Wildcard Mask Inversa** (es. IP `10.1.0.50`, Wildcard `0.0.3.255`): essenziale per verificare e comporre regole per access-list (ACL) e comandi `network` nel protocollo di routing OSPF.
4. **Dimensionamento per Numero di Host**: inserisci l'indirizzo di partenza e il numero di host che la rete deve contenere (es. 500 dispositivi); NetCalc Pro calcola all'istante la maschera minima efficiente (in questo caso `/23`), minimizzando lo spreco di indirizzi.

---

## Ispezione Binaria Interattiva (`BitBoundaryView`)

Uno degli strumenti più apprezzati per lo studio del networking è la **vista binaria a 32 bit**.

```text
Ottetto 1          Ottetto 2          Ottetto 3          Ottetto 4
11000000 (192)  .  10101000 (168)  .  00000001 (1)    .  01 | 100100 (100)
▲─────────────────────────── Rete (/26) ─────────────────────────▲ ▲── Host ──▲
```

- **Separazione Cromatica**: i bit appartenenti alla parte di rete e alla parte di host sono evidenziati con colori ad alto contrasto.
- **Cursore di Confine Interattivo**: puoi cliccare su un qualsiasi bit o trascinare il separatore per variare al volo la lunghezza del prefisso (da `/1` a `/32`), osservando in tempo reale come cambiano istantaneamente l'indirizzo di rete, il broadcast e gli host disponibili.
- **Rappresentazione Esadecimale**: conversione istantanea per l'analisi a basso livello dei pacchetti di rete e dei campi degli header IP.

---

## Parametri e Proprietà Calcolate

Per ogni combinazione di indirizzo e subnet inserita, NetCalc Pro genera una scheda dettagliata con valori copiabili con un singolo tocco o clic:

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

NetCalc Pro integra un modulo dedicato per il protocollo di nuova generazione IPv6 a 128 bit:

- **Compressione e Decompressione Standard (RFC 5952)**: inserisci qualsiasi indirizzo IPv6 con zeri iniziali o forma estesa; l'app mostra la corretta forma canonica compressa con il doppio due punti `::` e viceversa la rappresentazione estesa a 32 cifre esadecimali raggruppate in 8 hextet.
- **Analisi Prefissi**: verifica dello spazio globale di routing, del prefisso del fornitore (/48), del subnet ID (/64) e dell'Interface Identifier a 64 bit.
- **Calcolo EUI-64 da Indirizzo MAC**: inserisci l'indirizzo fisico Ethernet a 48 bit (es. `00:1A:2B:3C:4D:5E`); NetCalc Pro inverte il settimo bit (Universal/Local) e inserisce il pattern `FF:FE` al centro, calcolando l'indirizzo Link-Local o SLAAC risultante (`fe80::021a:2bff:fe3c:4d5e`).
- **Classificazione dell'Indirizzo**: identificazione istantanea tra Global Unicast (`2000::/3`), Link-Local (`fe80::/10`), Unique Local ULA (`fc00::/7`), Multicast (`ff00::/8`) e Loopback (`::1/128`).

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
