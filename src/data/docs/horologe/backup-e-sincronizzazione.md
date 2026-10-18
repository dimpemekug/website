---
title: "Backup, Sincronizzazione ed Export"
description: "Archivio ZIP universale con foto, sincronizzazione CloudKit multi-tier su iOS, esportazione schede PDF e tabelle CSV in Horologe."
project: "horologe"
order: 5
section: "Dati e Backup"
---

## Il Formato di Backup ZIP

A differenza delle normali applicazioni di catalogazione che esportano solo file di testo perdendo le immagini, Horologe genera un **archivio compresso `.zip` completo e autosufficiente**:

```text
Backup_Horologe_2026-10-18.zip
├── manifest.json            ← Dump SQLite completo (orologi, revisioni, polso, precisione)
└── watch_images/            ← Tutte le fotografie ad alta risoluzione
    ├── watch_1_cover.jpg
    ├── watch_1_image_1.jpg
    ├── watch_2_cover.jpg
    └── ...
```

Questo formato è condiviso al 100% tra le build iOS e Android: esportando l'archivio da un iPhone puoi importarlo direttamente in Android (e viceversa), ritrovando ogni foto e specifica tecnica al suo posto.

---

## Sincronizzazione iCloud (Esclusiva iOS)

Sui dispositivi Apple, Horologe integra una sincronizzazione sofisticata tramite **CloudKit**:
- **Dati strutturati**: sincronizzati nel record privato `primary-v2`.
- **Foto sincronizzate con deduplicazione**: ciascuna foto viene archiviata con un record `file-<sha256>`. Se un'immagine è già presente sul cloud, il client evita di consumare banda e spazio ri-trasferendola.
- **Protezione Anti-Throttling**: in collezioni importanti con migliaia di scatti, le chiamate di rete vengono distribuite a scaglioni con backoff esponenziale per prevenire blocchi server HTTP 429.

---

## Esportazione PDF e Tabelle CSV

- **Scheda Orologio in PDF**: genera un documento elegante in formato A4 con copertina, specifiche tecniche, storico delle revisioni e valori stimati, ideale per perizie assicurative o per la vendita a terzi.
- **Esportazione CSV**: scarica l'intera collezione in formato tabellare per aprirla in Excel, Numbers o Google Fogli.
