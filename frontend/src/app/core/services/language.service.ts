import { Injectable, signal, computed } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type SupportedLang = 'fr' | 'ar' | 'en' | 'darija';

export interface Language {
  code: SupportedLang;
  label: string;
  nativeLabel: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly STORAGE_KEY = 'kenzbladi_lang';

  readonly languages: Language[] = [
    { code: 'fr',     label: 'Français', nativeLabel: 'FR',     flag: '🇫🇷', dir: 'ltr' },
    { code: 'ar',     label: 'العربية',   nativeLabel: 'AR',     flag: '🇲🇦', dir: 'rtl' },
    { code: 'en',     label: 'English',  nativeLabel: 'EN',     flag: '🇬🇧', dir: 'ltr' },
    { code: 'darija', label: 'Darija',   nativeLabel: 'دارجة', flag: '🇲🇦', dir: 'rtl' }
  ];

  current = signal<SupportedLang>('fr');
  isRTL = computed(() => ['ar', 'darija'].includes(this.current()));
  currentInfo = computed(() => this.languages.find(l => l.code === this.current())!);

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'ar', 'en', 'darija']);
    this.translate.setDefaultLang('fr');
    this.init();
  }

  private init(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY) as SupportedLang | null;
    const browser = this.translate.getBrowserLang() as SupportedLang;
    const lang = saved ?? (this.isSupported(browser) ? browser : 'fr');
    this.set(lang);
  }

  set(lang: SupportedLang): void {
    this.current.set(lang);
    this.translate.use(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', this.languages.find(l => l.code === lang)?.dir ?? 'ltr');
  }

  private isSupported(lang: string): lang is SupportedLang {
    return ['fr', 'ar', 'en', 'darija'].includes(lang);
  }
}
