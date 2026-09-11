// Constants
const THEME = "theme";
const SYSTEM = "system";
const LIGHT = "light";
const DARK = "dark";

type ThemePreference = typeof SYSTEM | typeof LIGHT | typeof DARK;
type ResolvedTheme = typeof LIGHT | typeof DARK;

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function isPreference(value: unknown): value is ThemePreference {
  return value === SYSTEM || value === LIGHT || value === DARK;
}

// User's explicit choice from local storage; anything else means "follow the system"
function getStoredPreference(): ThemePreference {
  const stored = localStorage.getItem(THEME);
  return isPreference(stored) ? stored : SYSTEM;
}

function resolveTheme(pref: ThemePreference): ResolvedTheme {
  if (pref !== SYSTEM) return pref;
  return darkQuery.matches ? DARK : LIGHT;
}

// Use existing preference from inline script if available, otherwise detect
let preference: ThemePreference = window.theme?.preference ?? getStoredPreference();
let themeValue: ResolvedTheme = resolveTheme(preference);

function reflectPreference(): void {
  document.firstElementChild?.setAttribute("data-theme", themeValue);

  if (window.theme) {
    window.theme.preference = preference;
    window.theme.themeValue = themeValue;
  }

  document
    .querySelectorAll<HTMLElement>("[data-theme-value]")
    .forEach(btn => {
      const isActive = btn.dataset.themeValue === preference;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

  // Sync <meta theme-color> with the body background
  const body = document.body;
  if (body) {
    const bgColor = window.getComputedStyle(body).backgroundColor;
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

function setPreference(value: ThemePreference): void {
  preference = value;
  themeValue = resolveTheme(preference);
  localStorage.setItem(THEME, preference);
  reflectPreference();
}

window.theme = {
  preference,
  themeValue,
  getTheme: () => themeValue,
  setTheme: setPreference,
};

// Ensure theme is reflected (in case body wasn't ready when inline script ran)
reflectPreference();

function setThemeFeature(): void {
  // set on load so screen readers can get the latest value on the buttons
  reflectPreference();

  // Replace buttons to drop stale listeners on view transitions
  document
    .querySelectorAll<HTMLElement>("[data-theme-value]")
    .forEach(btn => {
      const freshBtn = btn.cloneNode(true) as HTMLElement;
      btn.replaceWith(freshBtn);
      freshBtn.addEventListener("click", () => {
        const value = freshBtn.dataset.themeValue;
        if (isPreference(value)) setPreference(value);
      });
    });

  reflectPreference();
}

// Set up theme features after page load
setThemeFeature();

// Runs on view transitions navigation
document.addEventListener("astro:after-swap", setThemeFeature);

// Carry theme and theme-color into the incoming document before the swap
// to avoid flashes and navigation bar color flickering in Android dark mode
document.addEventListener("astro:before-swap", event => {
  event.newDocument.documentElement.setAttribute("data-theme", themeValue);

  const bgColor = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");

  if (bgColor) {
    event.newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
});

// Follow OS changes only while the user has chosen "system"
darkQuery.addEventListener("change", () => {
  if (preference !== SYSTEM) return;
  themeValue = resolveTheme(preference);
  reflectPreference();
});
