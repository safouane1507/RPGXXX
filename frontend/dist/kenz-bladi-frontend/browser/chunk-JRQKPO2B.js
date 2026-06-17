import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-4ELZIBL4.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.STORAGE_KEY = "kenzbladi_theme";
    this.isDarkMode = signal(false);
    this.init();
  }
  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.apply(saved === "dark" || !saved && prefersDark);
  }
  toggle() {
    this.apply(!this.isDarkMode());
  }
  apply(dark) {
    this.isDarkMode.set(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    document.body.classList.toggle("dark-theme", dark);
    document.body.classList.toggle("light-theme", !dark);
    localStorage.setItem(this.STORAGE_KEY, dark ? "dark" : "light");
  }
  static {
    this.\u0275fac = function ThemeService_Factory(t) {
      return new (t || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

export {
  ThemeService
};
//# sourceMappingURL=chunk-JRQKPO2B.js.map
