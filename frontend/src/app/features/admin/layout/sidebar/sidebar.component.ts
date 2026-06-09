import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

interface SubItem {
  label: string;
  route: string;
  icon?: string;
}

interface MenuItem {
  id:        string;
  label:     string;
  route?:    string;
  icon:      string;
  badge?:    number;
  children?: SubItem[];
}

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  router = inject(Router);

  openGroup = signal<string | null>(null);

  readonly menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      route: '/admin/dashboard',
      icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'products',
      label: 'Gestion des produits',
      route: '/admin/products',
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="2"/><polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" stroke-width="2"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'services',
      label: 'Gestion des services',
      route: '/admin/services',
      icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'cooperatives',
      label: 'Gestion des coopératives',
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2"/></svg>`,
      children: [
        { label: 'E-Boutiques',          route: '/admin/cooperatives/boutiques' },
        { label: 'Annuaires',            route: '/admin/annuaire' },
        { label: 'Fournisseurs',         route: '/admin/cooperatives/fournisseurs' },
        { label: 'Instances Annuaire',   route: '/admin/cooperatives/instances' },
        { label: 'FAQ Coopératives',     route: '/admin/cooperatives/faq' }
      ]
    },
    {
      id: 'users',
      label: 'Gestion des utilisateurs Pro',
      route: '/admin/users',
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'payments',
      label: 'Gestion des paiements',
      route: '/admin/payments',
      icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'cms',
      label: 'Gestion de contenu (CMS)',
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2"/></svg>`,
      children: [
        { label: 'Conseils pratiques', route: '/admin/cms/conseils' },
        { label: 'À propos',           route: '/admin/cms/about' },
        { label: 'Annonces',           route: '/admin/cms/annonces' },
        { label: 'Articles / Blogs',   route: '/admin/cms' }
      ]
    },
    {
      id: 'events',
      label: 'Gestion des événements',
      route: '/admin/events',
      icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'tourism',
      label: 'Gestion du Tourisme',
      route: '/admin/tourism',
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/></svg>`
    },
    {
      id: 'complaints',
      label: 'Réclamations',
      route: '/admin/complaints',
      icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2"/></svg>`
    }
  ];

  toggleGroup(id: string): void {
    this.openGroup.update(v => v === id ? null : id);
  }

  isGroupOpen(id: string): boolean {
    return this.openGroup() === id;
  }

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }
}
