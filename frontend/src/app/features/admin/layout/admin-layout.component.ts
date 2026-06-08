import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, SidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  private router       = inject(Router);
  private themeService = inject(ThemeService);

  isDarkMode    = this.themeService.isDarkMode;
  isSidebarOpen = signal(true);
  pageTitle     = signal('Tableau de bord');

  private titleMap: Record<string, string> = {
    '/admin/dashboard':          'Tableau de bord',
    '/admin/products':           'Gestion des produits',
    '/admin/services':           'Gestion des services',
    '/admin/cooperatives':       'Gestion des coopératives',
    '/admin/annuaire':           'Gestion des annuaires',
    '/admin/users':              'Gestion des utilisateurs Pro',
    '/admin/payments':           'Gestion des paiements',
    '/admin/cms':                'Gestion de contenu',
    '/admin/events':             'Gestion des événements',
    '/admin/complaints':         'Réclamations'
  };

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      const url = e.urlAfterRedirects as string;
      const match = Object.keys(this.titleMap).find(k => url.startsWith(k));
      this.pageTitle.set(match ? this.titleMap[match] : 'Administration');
    });
  }

  toggleSidebar(): void { this.isSidebarOpen.update(v => !v); }
  toggleTheme():   void { this.themeService.toggle(); }
}
