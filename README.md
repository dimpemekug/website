# Devosfera

Codice sorgente del mio sito personale, **[dimpemekug.com](https://dimpemekug.com)**.

Blog, portfolio progetti e galleria fotografica in italiano e inglese, costruito con [Astro](https://astro.build).

## Cos'è

> App e siti web. Codice pulito, idee chiare.

Sono dimpemekug, sviluppatore di app mobile e siti web. Il sito raccoglie:

- **Blog** — articoli su intelligenza artificiale, sviluppo software e tecnologia
- **Progetti** — portfolio di app e siti realizzati (DomoMeter, Horologe, PT39 News, Time Tracker, WP PT39)
- **Galleria** — fotografia personale (al momento disattivata, vedi `src/config.ts`)
- **Archivio e tag** — navigazione per categoria e cronologia
- **Ricerca full-text** offline tramite [Pagefind](https://pagefind.app)

## Stack tecnico

- [Astro](https://astro.build) 6 (SSG) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [astro-expressive-code](https://expressive-code.com) per l'evidenziazione dei blocchi di codice
- [Satori](https://github.com/vercel/satori) + [resvg](https://github.com/RazrFalcon/resvg) per le immagini Open Graph generate dinamicamente
- [Pagefind](https://pagefind.app) per la ricerca statica
- i18n nativo di Astro (`it` predefinito, `en`)

## Tema

Il sito è basato sul tema open source **[Devosfera](https://github.com/0xdres/astro-devosfera)**, a cui sono state integrate alcune parti del tema **[navfolio](https://github.com/navfolio/astro-navfolio)** (sistema di font locali, alcune utility di layout). I componenti non utilizzati di entrambi i temi sono stati rimossi (vedi [Crediti](#crediti)).

Caratteristiche principali:

- Sistema di font locali via [Astro Fonts API](https://docs.astro.build/en/guides/fonts/): **Wotfard** (UI), **Sriracha** (corsivo/accenti), **Fira Code** e **Cascadia Code** (monospace)
- Palette colori con più varianti d'accento selezionabili a runtime (`AccentPicker.astro`) e tema chiaro/scuro persistente
- Sfondo decorativo con grana, griglia e bagliore che segue il cursore
- Generazione automatica delle immagini Open Graph per pagine, articoli e tag
- Heatmap stile "contributions" per la cronologia delle pubblicazioni
- Sezione progetti con campi dedicati a privacy, store e sito ufficiale

## Sviluppo

```bash
npm install
npm run dev       # avvia il dev server
npm run build     # type-check + build statico + indicizzazione Pagefind
npm run preview   # serve la build di produzione
npm run lint       # ESLint
npm run format     # Prettier
```

> Nota: il repo contiene sia `package-lock.json` che `bun.lock`; gli script in `.husky/pre-commit` usano `bun`.

### Variabili d'ambiente

Copia `.env.example` in `.env` e personalizza i link social, l'URL per il pulsante "modifica articolo" e (opzionale) il token di verifica Google Search Console. Il file `.env` non va mai commitato.

### Struttura dei contenuti

I contenuti vivono in `src/data/` come collezioni Astro:

| Collezione | Percorso |
|---|---|
| Articoli (IT) | `src/data/blog/` |
| Articoli (EN) | `src/data/en/blog/` |
| Progetti (IT) | `src/data/projects/` |
| Progetti (EN) | `src/data/en/projects/` |
| Galleria | `src/data/galleries/` |

La configurazione generale del sito (titolo, descrizione, feature flag come `showArchives`, `showGalleries`, effetti di sfondo, audio d'intro, ecc.) è centralizzata in [`src/config.ts`](src/config.ts).

## Deploy

Build statica pronta per qualsiasi hosting di file statici. Il workflow di build (`npm run build`) genera anche la sitemap, il feed RSS e l'indice di ricerca Pagefind.

## Crediti

Questo sito è una personalizzazione basata su due temi Astro open source:

- **[Devosfera](https://github.com/0xdres/astro-devosfera)** di [0xdres](https://github.com/0xdres) — tema di base (layout, struttura contenuti, stile).
- **[navfolio](https://github.com/navfolio/astro-navfolio)** — alcune parti (sistema di font locali, utility) integrate e adattate al tema.

Grazie agli autori originali per il lavoro open source.
