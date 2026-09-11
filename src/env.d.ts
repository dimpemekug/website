interface Window {
  theme?: {
    preference: "system" | "light" | "dark";
    themeValue: "light" | "dark";
    getTheme?: () => "light" | "dark";
    setTheme?: (preference: "system" | "light" | "dark") => void;
  };
}
