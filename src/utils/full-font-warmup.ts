type NetworkInformation = {
  effectiveType?: string;
  saveData?: boolean;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
};

type WindowWithFullFontWarmup = Window & {
  __navfolioFullFontWarmupInitialized?: boolean;
};

type WarmupRel = 'prefetch' | 'preload';

const FULL_FONT_TYPE = 'font/ttf';
const FULL_FONT_FORMAT = 'truetype';
const UI_SUBSET_FONT_FAMILY = 'LXGW UI Subset';
const WARMUP_FONT_FAMILY = 'LXGW WenKai Full Warmup';
const WARMED_KEY = 'navfolio:full-font-warmed:v2';

function getConnection() {
  const navigatorWithConnection = navigator as NavigatorWithConnection;

  return (
    navigatorWithConnection.connection ??
    navigatorWithConnection.mozConnection ??
    navigatorWithConnection.webkitConnection
  );
}

function readWarmed() {
  try {
    return sessionStorage.getItem(WARMED_KEY) === '1';
  } catch {
    return false;
  }
}

function markWarmed() {
  try {
    sessionStorage.setItem(WARMED_KEY, '1');
  } catch {}
}

function shouldSkipWarmup() {
  const connection = getConnection();

  if (connection?.saveData) return true;
  if (connection?.effectiveType && /(^|-)2g$/.test(connection.effectiveType)) return true;

  return false;
}

function scheduleIdle(callback: IdleRequestCallback) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 3000 });
    return;
  }

  globalThis.setTimeout(callback, 1500);
}

export function initFullFontWarmup(baseUrl: string) {
  const windowWithWarmup = window as WindowWithFullFontWarmup;
  const fullFontUrl = `${baseUrl}fonts/LXGWWenKai-Regular.ttf`;

  if (windowWithWarmup.__navfolioFullFontWarmupInitialized) return;

  windowWithWarmup.__navfolioFullFontWarmupInitialized = true;

  const hasWarmupLink = () =>
    Boolean(document.querySelector(`link[data-navfolio-full-font][href="${fullFontUrl}"]`));

  const warmupFullFontWithLink = (rel: WarmupRel = 'preload') => {
    if (readWarmed()) return;
    if (shouldSkipWarmup()) return;
    if (hasWarmupLink()) return;

    const link = document.createElement('link');
    link.dataset.navfolioFullFont = 'true';
    link.rel = rel;
    link.as = 'font';
    link.type = FULL_FONT_TYPE;
    link.href = fullFontUrl;
    link.crossOrigin = 'anonymous';

    if (rel === 'preload' && 'fetchPriority' in link) {
      link.fetchPriority = 'low';
    }

    document.head.appendChild(link);
    markWarmed();
  };

  const warmupFullFont = () => {
    if (readWarmed()) return;
    if (shouldSkipWarmup()) return;

    if ('FontFace' in window && document.fonts) {
      const font = new FontFace(
        WARMUP_FONT_FAMILY,
        `url("${fullFontUrl}") format("${FULL_FONT_FORMAT}")`,
        {
          display: 'swap',
          style: 'normal',
          weight: '400',
        },
      );

      font
        .load()
        .then((loadedFont) => {
          document.fonts.add(loadedFont);
          markWarmed();
        })
        .catch(() => warmupFullFontWithLink('preload'));
      return;
    }

    warmupFullFontWithLink('preload');
  };

  const waitForUiSubsetFont = () => {
    if (!document.fonts) return Promise.resolve();

    return document.fonts.load(`1em "${UI_SUBSET_FONT_FAMILY}"`).then(() => undefined);
  };

  const scheduleAfterFirstLoad = () => {
    const run = () => {
      waitForUiSubsetFont()
        .catch(() => undefined)
        .then(() => scheduleIdle(warmupFullFont));
    };

    if (document.readyState === 'complete') {
      run();
      return;
    }

    window.addEventListener('load', run, { once: true });
  };

  const warmupFromIntent = (event: Event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest('a[href*="/blog/"], a[href*="/projects/"]');
    if (link) warmupFullFont();
  };

  scheduleAfterFirstLoad();
  document.addEventListener('pointerover', warmupFromIntent, { passive: true });
  document.addEventListener('focusin', warmupFromIntent);
}
