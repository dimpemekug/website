# dimpemekug.com

Codice sorgente del sito web personale, portfolio e blog tecnico di **dimpemekug**, consultabile online su **[dimpemekug.com](https://dimpemekug.com)**.

Costruito come generatore di siti statici (SSG) ad altissime prestazioni con **[Astro 6](https://astro.build)**, **Tailwind CSS v4** e **TypeScript**. Include supporto bilingue (italiano e inglese), portfolio completo delle applicazioni sviluppate con relative informative sulla privacy, sezione di documentazione e guide utente, blog di attualità tecnologica e ricerca full-text statica offline.

---

## Indice

- [Cos'è il progetto](#cosè-il-progetto)
- [Sezioni del sito](#sezioni-del-sito)
- [Portfolio applicazioni](#portfolio-applicazioni)
- [Stack tecnologico](#stack-tecnologico)
- [Caratteristiche e UI](#caratteristiche-e-ui)
- [Struttura dei contenuti](#struttura-dei-contenuti)
- [Architettura delle directory](#architettura-delle-directory)
- [Sviluppo locale](#sviluppo-locale)
- [Variabili d'ambiente](#variabili-dambiente)
- [Deploy e CI/CD](#deploy-e-cicd)
- [Crediti e ringraziamenti](#crediti-e-ringraziamenti)

---

## Cos'è il progetto

> _Codice pulito, idee chiare e rispetto per l'utente._

Questo repository contiene il codice e i contenuti del sito personale di dimpemekug, sviluppatore indipendente di applicazioni native per macOS, iOS, Android e soluzioni web su misura.

I principi guida del progetto e del software ospitato sono:

- **Privacy First & Local-First**: nessun tracciamento di terze parti, elaborazione dati in locale sul dispositivo o tramite database privato Apple CloudKit dell'utente.
- **Accessibilità & Trasparenza**: app gratuite, prive di paywall o pubblicità, con schede privacy dettagliate e conformi per ciascun progetto.
- **Prestazioni estreme**: architettura a isole di componenti, generazione completamente statica e caricamento istantaneo con zero JavaScript superfluo inviato al browser.

---

## Sezioni del sito

- **Blog (`/posts`, `/en/posts`)**: riflessioni, note tecniche e articoli di approfondimento su intelligenza artificiale, modelli on-device, cybersecurity, architetture local-first, sviluppo Apple e tendenze tecnologiche.
- **Progetti (`/progetti`, `/en/projects`)**: vetrina di tutte le applicazioni native e dei progetti web realizzati, con badge di disponibilità su App Store e Google Play Store, collegamenti alla documentazione e schede informative sulla privacy dedicate per ciascuna app (`/progetti/<app>/privacy/`).
- **Documentazione (`/docs`, `/en/docs`)**: manuali d'uso interattivi per le applicazioni più complesse (attualmente **rExif** e **rZip**), con navigazione a capitoli, scorciatoie da tastiera e guide passo-passo.
- **Chi sono (`/about`, `/en/about`)**: panoramica del profilo dello sviluppatore, tecnologie impiegate (Swift, SwiftUI, Flutter, Dart, Astro, PHP) e canali di contatto.
- **Archivio cronologico (`/archives`, `/en/archives`)**: indice temporale di tutti gli articoli pubblicati raggruppati per anno.
- **Esplorazione per Tag (`/tags`, `/en/tags`)**: navigazione trasversale per argomenti e parole chiave con conteggio e paginazione.
- **Ricerca offline (`/search`, `/en/search`)**: motore di ricerca full-text client-side istantaneo powered by Pagefind.
- **Galleria fotografica (`/galleries`)**: raccolta fotografica personale (gestibile via feature flag in configurazione).

---

## Portfolio applicazioni

Il sito documenta e ospita le schede ufficiali delle seguenti applicazioni:

| Applicazione                                          | Piattaforme        | Descrizione sintetica                                                                                                     | Docs |
| ----------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- | :--: |
| **[rExif](src/data/projects/rexif.md)**               | macOS              | Editor batch di metadati EXIF, IPTC, coordinate GPS e date per foto e video con anteprima in tempo reale.                 |  ✅  |
| **[rZip](src/data/projects/rzip.md)**                 | macOS              | Ispezione, estrazione e creazione di archivi compressi (ZIP, RAR, 7z) anche protetti o multi-volume.                      |  ✅  |
| **[rName](src/data/projects/rname.md)**               | macOS              | Ridenominazione in blocco di file e cartelle combinando regole modulari, anteprima dal vivo e storico annullamenti.       |  —   |
| **[rMux](src/data/projects/rmux.md)**                 | macOS              | Taglio, ritaglio, conversione e unione video senza ricodifica (stream copy via FFmpeg), gestione audio e sottotitoli.     |  —   |
| **[Resizo](src/data/projects/resizo.md)**             | macOS              | Ridimensionamento batch di immagini, conversione da formato HEIC e rimozione automatica dei metadati sensibili.           |  —   |
| **[CodeVault](src/data/projects/codevault.md)**       | iOS, iPadOS, macOS | Gestione di snippet di codice e note tecniche con syntax highlighting per 20+ linguaggi, blocco Face ID e sync iCloud.    |  —   |
| **[NetCalc Pro](src/data/projects/netcalc.md)**       | iOS, iPadOS, macOS | Calcolatore di reti IPv4/IPv6, subnetting VLSM, validazione laboratori e generazione comandi per switch/router Cisco IOS. |  —   |
| **[rManga](src/data/projects/rmanga.md)**             | iOS, iPadOS        | Lettore per manga, fumetti, libri e anime con supporto server Komga, Kavita, Suwayomi, Jellyfin e cataloghi OPDS.         |  —   |
| **[ShowNest](src/data/projects/shownest.md)**         | iOS                | Tracker per serie TV ed episodi basato su dati TMDB con notifiche uscite e sincronizzazione iCloud.                       |  —   |
| **[DomoMeter](src/data/projects/domometer.md)**       | iOS, Android       | Monitoraggio dei consumi domestici di luce, gas e acqua con statistiche storiche e dashboard locale.                      |  —   |
| **[Horologe](src/data/projects/horologe.md)**         | iOS, Android       | Gestione della propria collezione di orologi con storico manutenzioni, statistiche, wishlist e registro al polso.         |  —   |
| **[Time Tracker](src/data/projects/time-tracker.md)** | iOS, Android       | Tracciamento del tempo speso su attività e commesse con esportazione report PDF e backup locale in JSON.                  |  —   |
| **[PT39 News](src/data/projects/pt39-news.md)**       | iOS, Android       | Informazione locale e attualità per il comune di Bagnoli Irpino e l'Irpinia a cura del Circolo Palazzo Tenta 39.          |  —   |
| **[WP PT39](src/data/projects/wp-pt39.md)**           | WordPress / PHP    | Tema editoriale leggero in PHP puro per riviste e portali di news con dark mode e conformità GDPR cookie.                 |  —   |

---

## Stack tecnologico

- **Framework**: [Astro](https://astro.build) 6 (`astro: ^6.3.1`) in modalità SSG pura.
- **Tipizzazione**: [TypeScript](https://www.typescriptlang.org) 6 con type check rigoroso tramite `@astrojs/check`.
- **CSS & Stile**: [Tailwind CSS](https://tailwindcss.com) v4 con integrazione Vite `@tailwindcss/vite` e plugin `@tailwindcss/typography`.
- **Formattazione del codice**: [astro-expressive-code](https://expressive-code.com) con temi `github-dark` e `github-light` sincronizzati con il tema del sito.
- **Generazione Open Graph dinamica**: [Satori](https://github.com/vercel/satori) + [resvg-js](https://github.com/RazrFalcon/resvg) + [Sharp](https://github.com/lovell/sharp) per la generazione automatica delle copertine social `.png` per home, singoli articoli e tag.
- **Ricerca Full-Text**: [Pagefind](https://pagefind.app) con interfaccia modale e integrazione multilingua.
- **Internazionalizzazione (i18n)**: routing bilingue nativo Astro (`it` come lingua predefinita senza prefisso, `en` con prefisso URL).
- **SEO & Feed**: generazione automatica sitemap con `@astrojs/sitemap`, RSS feed con `@astrojs/rss` e gestione metadati Open Graph/Twitter Card.
- **Tooling di qualità del codice**: ESLint 10 (`eslint-plugin-astro`, `typescript-eslint`), Prettier 3 con plugin per Astro e Tailwind CSS, e Git hooks gestiti con Husky.

---

## Caratteristiche e UI

- **Font locali con Astro Fonts API**:
  - `Wotfard` per l'interfaccia utente (sans-serif)
  - `Fira Code` per codice sorgente, badge e frammenti tecnici (monospace)
- **Palette d'accento dinamica a runtime (`AccentPicker.astro`)**:
  - 6 varianti selezionabili dall'utente: **Indigo** (predefinito), **Cyan**, **Purple**, **Green**, **Rose**, **Orange**.
  - Valore persistito tramite attributo HTML `data-accent` e memorizzato in `localStorage`.
- **Tema Chiaro / Scuro**:
  - Commutazione nativa (Chiaro, Scuro, Sistema) con prevenzione del flash di stile non caricato (FOUC).
- **Effetti di sfondo moderni**:
  - Grana decorativa SVG (`grain`) e bagliore radiale che traccia la posizione del cursore (`cursorGlow`), configurabili tramite `SITE.backdropEffects`.
- **Open Graph Dinamico nativo**:
  - Endpoint dedicato ([`src/pages/og.png.ts`](src/pages/og.png.ts)) che genera copertine social `.png` personalizzate a 1200x630px per la home, i singoli articoli e le pagine tag tramite Satori e resvg-js.
- **Audio player d'intro opzionale (`IntroAudio.astro`)**:
  - Player integrato per musica di sottofondo o streaming Lo-Fi configurabile da `SITE.introAudio`.
- **Pagine Privacy conformi**:
  - Ogni applicazione dispone di una pagina privacy bilingue dedicata con dettagli sui dati raccolti, conservazione locale e contatti di supporto.

---

## Struttura dei contenuti

Tutti i contenuti sono gestiti con la nuova **Astro Content Layer API** in [`src/content.config.ts`](src/content.config.ts) mediante collezioni tipizzate con Zod:

| Collezione   | Percorso cartella       | Descrizione                                                |
| ------------ | ----------------------- | ---------------------------------------------------------- |
| `blog`       | `src/data/blog/`        | Articoli del blog in lingua italiana (Markdown/MDX)        |
| `blogEn`     | `src/data/en/blog/`     | Articoli del blog in lingua inglese (Markdown/MDX)         |
| `projects`   | `src/data/projects/`    | Schede dei progetti in italiano con link a store e privacy |
| `projectsEn` | `src/data/en/projects/` | Schede dei progetti in inglese                             |
| `docs`       | `src/data/docs/`        | Documentazione e manuali utente delle app in italiano      |
| `docsEn`     | `src/data/en/docs/`     | Documentazione e manuali utente delle app in inglese       |
| `galleries`  | `src/data/galleries/`   | Collezioni fotografiche con immagini WebP ottimizzate      |

La configurazione generale del sito (titolo, metadati, autore, impostazioni di paginazione, feature flags per archivi e gallerie) è raccolta in [`src/config.ts`](src/config.ts).

---

## Architettura delle directory

```text
├── .github/workflows/       # Workflow CI/CD per GitHub Actions
├── .husky/                  # Hook Git (pre-commit con astro check)
├── public/                  # Asset statici serviti alla radice (favicon, manifest, ecc.)
├── src/
│   ├── assets/              # Font Wotfard/FiraCode, loghi e icone SVG
│   ├── components/          # Componenti riutilizzabili Astro (Header, Footer, Card, ecc.)
│   ├── data/                # File Markdown/MDX delle collezioni di contenuti
│   │   ├── blog/            # Post del blog in italiano
│   │   ├── docs/            # Documentazione in italiano per app (rExif, rZip)
│   │   ├── en/              # Contenuti speculari in lingua inglese
│   │   ├── galleries/       # Gallerie fotografiche
│   │   └── projects/        # Schede dei progetti in italiano
│   ├── i18n/                # Traduzioni dell'interfaccia (ui.ts) e utility linguistiche
│   ├── layouts/             # Template di layout di pagina (Layout, DocLayout, PostDetails)
│   ├── pages/               # Routing del sito (IT alla radice, EN sotto /en/)
│   ├── scripts/             # Script client per gestione tema ed accento
│   ├── styles/              # Foglio di stile globale (global.css) e tipografia
│   ├── utils/               # Funzioni ausiliarie (ordinamento, OG image, slug, ecc.)
│   ├── config.ts            # Parametri e feature flags globali del sito
│   └── content.config.ts    # Definizione degli schemi delle collezioni Astro
├── astro.config.mjs         # Configurazione di Astro, integrazioni, font e i18n
├── pagefind.yml             # Configurazione indicizzatore Pagefind (root selector e filtri)
├── package.json             # Dipendenze e script npm del progetto (dimpemekug-website)
├── .prettierrc.mjs          # Configurazione Prettier con plugin Astro e Tailwind CSS v4
└── tsconfig.json            # Configurazione TypeScript con path alias (@/*)
```

---

## Sviluppo locale

### Prerequisiti

- **Node.js**: versione compatibile definita in [`.nvmrc`](.nvmrc) (Node `>= 22.12.0`).
- Gestore di pacchetti **npm**.

### Installazione ed esecuzione

```bash
# 1. Clona il repository
git clone https://github.com/dimpemekug/website.git
cd website

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo (normale o in background)
npm run dev
# oppure in modalità background: npx astro dev --background (stato con `npx astro dev status`, stop con `npx astro dev stop`)

# 4. Verifica tipi e sintassi dei contenuti
npm run sync
npx astro check

# 5. Compilazione completa di produzione (inclusa indicizzazione Pagefind)
npm run build

# 6. Anteprima locale del pacchetto compilato
npm run preview
```

### Qualità del codice e formattazione

```bash
# Controllo con ESLint
npm run lint

# Formattazione del codice con Prettier
npm run format

# Controllo formattazione
npm run format:check
```

> **Nota sul pre-commit**: Il file [`.husky/pre-commit`](.husky/pre-commit) esegue automaticamente `npx astro check` prima di ogni commit per impedire refusi nei tipi e nel frontmatter dei contenuti.

---

## Variabili d'ambiente

Il progetto definisce uno schema rigoroso delle variabili d'ambiente in [`astro.config.mjs`](astro.config.mjs). Per eseguire il sito con i propri collegamenti:

1. Crea un file `.env` copiando il template di esempio:
   ```bash
   cp .env.example .env
   ```
2. Modifica i valori in base alle tue preferenze:
   ```ini
   PUBLIC_SOCIAL_GITHUB=https://github.com/tuo-username
   PUBLIC_SOCIAL_X=https://x.com/tuo-handle
   PUBLIC_SOCIAL_LINKEDIN=https://www.linkedin.com/in/tuo-profilo
   PUBLIC_SOCIAL_EMAIL=tua@email.com
   PUBLIC_EDIT_POST_URL=https://github.com/tuo-username/tuo-repo/edit/main/
   PUBLIC_GOOGLE_SITE_VERIFICATION=tuo-token-opzionale
   ```

_Il file `.env` è inserito nel file `.gitignore` e non deve mai essere tracciato nel repository._

---

## Deploy e CI/CD

Il deployment su ambiente di produzione è interamente automatizzato tramite **GitHub Actions**:

- **Workflow**: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
- **Trigger**: push sul ramo `main` o avvio manuale (`workflow_dispatch`).
- **Destinazione**: **GitHub Pages** associato al dominio personalizzato [`https://dimpemekug.com`](https://dimpemekug.com).
- La pipeline installa i pacchetti, esegue `npm run build` iniettando i secret e pubblica la cartella `dist/`.

---

## Crediti e ringraziamenti

Questo sito è una personalizzazione evoluta basata su due progetti open source dell'ecosistema Astro:

- **[Devosfera](https://github.com/0xdres/astro-devosfera)** di [0xdres](https://github.com/0xdres) — base iniziale per architettura dei componenti, stili e layout.
- **[navfolio](https://github.com/navfolio/astro-navfolio)** — elementi di integrazione per font locali e utilità.

Tutti i loghi, i testi dei progetti e i contenuti degli articoli appartengono ai rispettivi proprietari.
