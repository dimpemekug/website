---
title: "Introduzione a CodeVault"
description: "Panoramica di CodeVault: gestore moderno di frammenti di codice e note per iOS e macOS con SwiftData, sincronizzazione iCloud e sicurezza biometrica."
project: "codevault"
order: 1
section: "Iniziare"
---

## Cos'è CodeVault

**CodeVault** è un'applicazione nativa per **iOS 18+** e **macOS 15+** concepita per sviluppatori, sysadmin e studenti che desiderano organizzare la propria libreria di frammenti di codice (*snippet*) e note tecniche in un unico ambiente rapido, elegante e sicuro.

Sviluppata interamente in **Swift 6** con architettura moderna **MVVM + SwiftData**, CodeVault offre un'esperienza perfettamente integrata nell'ecosistema Apple: dall'interfaccia adattiva su iPhone, iPad e Mac alla sincronizzazione automatica dei dati tramite il tuo account privato iCloud.

---

## Principi Guida e Architettura

### 1. Privacy Assoluta e Architettura Zero-Knowledge
- **Nessun server proprietario**: i tuoi snippet e le tue note non transitano mai da server intermediari o database terzi.
- **iCloud Personale**: la sincronizzazione sfrutta il container privato CloudKit (`iCloud.com.dimpemekug.codevault`) del tuo account Apple personale.
- **Nessuna telemetria né tracciamento**: l'app non include analytics, crash reporter esterni né annunci pubblicitari.

### 2. Architettura Dati: SwiftData con Schema Versionato
La persistenza locale poggia su **SwiftData**, con uno schema rigorosamente migrato (`SnippetSchemaV1`–`SnippetSchemaV9`) tramite un piano di migrazione esplicito (`SnippetMigrationPlan`). Questo garantisce integrità strutturale e retrocompatibilità tra release dell'app, preservando ogni frammento e associazione a cartelle o tag.

### 3. Continuità Universale tra Mac, iPad e iPhone
L'app sfrutta layout reattivi in base al contesto operativo:
- **Su macOS**: vista suddivisa (*split-view*) a tre colonne (barra laterale delle collezioni, lista snippet, editor centrale), scorciatoie da tastiera native di sistema, integrazione con `NSPasteboard` e menu contestuali.
- **Su iPadOS**: supporto completo per Split View, Stage Manager e tastiere hardware.
- **Su iOS**: navigazione compatta fluida con feedback aptico, copia rapida e sblocco biometrico immediato.

---

## Flusso di Lavoro Rapido

1. **Crea un nuovo frammento**: premi <kbd>⌘</kbd> <kbd>N</kbd> (su Mac/iPad) o tocca il pulsante `+` per inserire un frammento di codice o una nota testuale.
2. **Seleziona il linguaggio**: specifica il linguaggio di programmazione tra gli oltre 20 supportati per abilitare la formattazione e l'evidenziazione sintattica.
3. **Organizza con cartelle e tag**: raggruppa frammenti correlati in collezioni logiche o applica etichette rapide per ritrovarli all'istante.
4. **Cerca in tempo reale**: digita nella barra di ricerca per filtrare simultaneamente su titolo, corpo del codice, note o etichette.
5. **Copia o esporta**: copia il codice con un tocco o esporta l'intera libreria in formato JSON o Markdown.
