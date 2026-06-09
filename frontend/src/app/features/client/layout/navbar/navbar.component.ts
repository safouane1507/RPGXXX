import {
  Component, OnInit, inject, HostListener, signal, computed, ElementRef, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged, Subject, switchMap, of } from 'rxjs';
import { ThemeService } from '../../../../core/services/theme.service';
import { LanguageService, SupportedLang } from '../../../../core/services/language.service';
import { ApiService } from '../../../../core/services/api.service';
import { AuthService } from '../../../../core/services/auth.service';

interface NavLink {
  key:          string;
  i18nKey:      string;
  route:        string;
  exact:        boolean;
  openNewTab:   boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private themeService    = inject(ThemeService);
  private langService     = inject(LanguageService);
  private router          = inject(Router);
  private api             = inject(ApiService);
  auth                    = inject(AuthService);

  // ── Reactive state ────────────────────────────────────────
  isDarkMode   = this.themeService.isDarkMode;
  currentLang  = this.langService.current;
  langInfo     = this.langService.currentInfo;
  languages    = this.langService.languages;
  isRTL        = this.langService.isRTL;

  isScrolled        = signal(false);
  isMobileOpen      = signal(false);
  isLangOpen        = signal(false);
  currentUrl        = signal('');

  // ── Search ────────────────────────────────────────────────
  isSearchOpen      = signal(false);
  isUserMenuOpen    = signal(false);
  searchQuery       = '';
  searchResults     = signal<any>(null);
  searchLoading     = signal(false);
  private search$   = new Subject<string>();

  // ── Navigation Links ─────────────────────────────────────
  readonly navLinks: NavLink[] = [
    { key: 'home',        i18nKey: 'NAV.HOME',        route: '/',           exact: true,  openNewTab: false },
    { key: 'about',       i18nKey: 'NAV.ABOUT',       route: '/about',      exact: false, openNewTab: false },
    { key: 'services',    i18nKey: 'NAV.SERVICES',    route: '/services',   exact: false, openNewTab: false },
    { key: 'blog',        i18nKey: 'NAV.BLOG',        route: '/blog',       exact: false, openNewTab: false },
    // Boutique & Tourisme s'ouvrent dans un nouvel onglet
    { key: 'marketplace', i18nKey: 'NAV.MARKETPLACE', route: '/marketplace',exact: false, openNewTab: true  },
    { key: 'tourism',     i18nKey: 'NAV.TOURISM',     route: '/tourism',    exact: false, openNewTab: true  },
    { key: 'faq',         i18nKey: 'NAV.FAQ',         route: '/faq',        exact: false, openNewTab: false }
  ];

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.currentUrl.set(e.urlAfterRedirects);
      this.isMobileOpen.set(false);
      this.closeSearch();
    });
    this.currentUrl.set(this.router.url);

    // Autocomplete : debounce 350 ms
    this.search$.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      switchMap(q => {
        if (q.length < 2) { this.searchResults.set(null); return of(null); }
        this.searchLoading.set(true);
        return this.api.get<any>('/search', { q, limit: 4 });
      })
    ).subscribe({
      next: res => { this.searchLoading.set(false); if (res) this.searchResults.set(res.data); },
      error: ()  => { this.searchLoading.set(false); }
    });
  }

  // ── Scroll listener ──────────────────────────────────────
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  // ── Close on outside click ───────────────────────────────
  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!target.closest('.lang-selector'))   this.isLangOpen.set(false);
    if (!target.closest('.search-wrapper'))  { this.searchResults.set(null); }
    if (!target.closest('.auth-user'))        this.isUserMenuOpen.set(false);
    if (!target.closest('.navbar') && this.isMobileOpen()) this.isMobileOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.closeSearch(); }

  // ── Public actions ────────────────────────────────────────
  toggleTheme():    void { this.themeService.toggle(); }
  toggleMobile():   void { this.isMobileOpen.update(v => !v); }
  toggleLang(e: MouseEvent): void { e.stopPropagation(); this.isLangOpen.update(v => !v); }
  toggleUserMenu(e: MouseEvent): void { e.stopPropagation(); this.isUserMenuOpen.update(v => !v); }

  userInitials(): string {
    const u = this.auth.currentUser();
    if (!u) return '?';
    const parts = (u.fullName || '').trim().split(' ');
    return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || u.email?.[0]?.toUpperCase() || '?';
  }

  // ── Search actions ────────────────────────────────────────
  openSearch():  void { this.isSearchOpen.set(true); }
  closeSearch(): void { this.isSearchOpen.set(false); this.searchQuery = ''; this.searchResults.set(null); }

  onSearchInput(): void { this.search$.next(this.searchQuery); }

  goSearch(): void {
    if (!this.searchQuery.trim()) return;
    this.router.navigate(['/search'], { queryParams: { q: this.searchQuery.trim() } });
    this.closeSearch();
  }

  t(f: Record<string, string> | undefined): string {
    if (!f) return '';
    const l = this.langService.current();
    return f[l] || f['fr'] || '';
  }

  selectLang(lang: SupportedLang): void {
    this.langService.set(lang);
    this.isLangOpen.set(false);
  }

  handleNavClick(link: NavLink, e: MouseEvent): void {
    if (link.openNewTab) {
      e.preventDefault();
      window.open(link.route, '_blank', 'noopener,noreferrer');
    } else {
      this.router.navigateByUrl(link.route);
    }
    this.isMobileOpen.set(false);
  }

  isActive(link: NavLink): boolean {
    const url = this.currentUrl();
    return link.exact
      ? url === link.route
      : url.startsWith(link.route) && link.route !== '/';
  }
}
