import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'kenzbladi_theme';

  isDarkMode = signal<boolean>(false);

  constructor() {
    this.init();
  }

  private init(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply(saved === 'dark' || (!saved && prefersDark));
  }

  toggle(): void {
    this.apply(!this.isDarkMode());
  }

  private apply(dark: boolean): void {
    this.isDarkMode.set(dark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme', dark);
    document.body.classList.toggle('light-theme', !dark);
    localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
  }
}
