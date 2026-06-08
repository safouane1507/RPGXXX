import {
  Component, OnInit, inject, HostListener, signal, computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../../../core/services/theme.service';
import { LanguageService, SupportedLang } from '../../../../core/services/language.service';

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
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private themeService    = inject(ThemeService);
  private langService     = inject(LanguageService);
  private router          = inject(Router);

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
    });
    this.currentUrl.set(this.router.url);
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
    if (!target.closest('.lang-selector'))  this.isLangOpen.set(false);
    if (!target.closest('.navbar') && this.isMobileOpen()) this.isMobileOpen.set(false);
  }

  // ── Public actions ────────────────────────────────────────
  toggleTheme():    void { this.themeService.toggle(); }
  toggleMobile():   void { this.isMobileOpen.update(v => !v); }
  toggleLang(e: MouseEvent): void { e.stopPropagation(); this.isLangOpen.update(v => !v); }

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
