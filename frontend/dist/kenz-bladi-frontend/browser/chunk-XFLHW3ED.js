import {
  TranslateService
} from "./chunk-AJRT7THN.js";
import {
  computed,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4ELZIBL4.js";

// src/app/core/services/language.service.ts
var LanguageService = class _LanguageService {
  constructor(translate) {
    this.translate = translate;
    this.STORAGE_KEY = "kenzbladi_lang";
    this.languages = [
      { code: "fr", label: "Fran\xE7ais", nativeLabel: "FR", flag: "\u{1F1EB}\u{1F1F7}", dir: "ltr" },
      { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", nativeLabel: "AR", flag: "\u{1F1F2}\u{1F1E6}", dir: "rtl" },
      { code: "en", label: "English", nativeLabel: "EN", flag: "\u{1F1EC}\u{1F1E7}", dir: "ltr" },
      { code: "darija", label: "Darija", nativeLabel: "\u062F\u0627\u0631\u062C\u0629", flag: "\u{1F1F2}\u{1F1E6}", dir: "rtl" }
    ];
    this.current = signal("fr");
    this.isRTL = computed(() => ["ar", "darija"].includes(this.current()));
    this.currentInfo = computed(() => this.languages.find((l) => l.code === this.current()));
    this.translate.addLangs(["fr", "ar", "en", "darija"]);
    this.translate.setDefaultLang("fr");
    this.init();
  }
  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const browser = this.translate.getBrowserLang();
    const lang = saved ?? (this.isSupported(browser) ? browser : "fr");
    this.set(lang);
  }
  set(lang) {
    this.current.set(lang);
    this.translate.use(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", this.languages.find((l) => l.code === lang)?.dir ?? "ltr");
  }
  isSupported(lang) {
    return ["fr", "ar", "en", "darija"].includes(lang);
  }
  static {
    this.\u0275fac = function LanguageService_Factory(t) {
      return new (t || _LanguageService)(\u0275\u0275inject(TranslateService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
  }
};

export {
  LanguageService
};
//# sourceMappingURL=chunk-XFLHW3ED.js.map
