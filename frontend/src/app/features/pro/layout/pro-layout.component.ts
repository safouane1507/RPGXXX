import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-pro-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="pro-shell">
      <nav class="pro-topbar">
        <a routerLink="/pro/dashboard" class="pro-brand">
          <img src="assets/logo/logo1-1.png" alt="KENZ BLADI" class="pro-logo" />
          <div class="pro-brand-text">
            <span class="pro-brand-name">KENZ BLADI</span>
            <span class="pro-brand-sub">Espace Acteur Pro</span>
          </div>
        </a>

        <div class="pro-nav">
          <a routerLink="/pro/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
            <span class="nav-icon">🏠</span> Tableau de bord
          </a>
          <a routerLink="/pro/products" routerLinkActive="active">
            <span class="nav-icon">📦</span> Mes Produits
          </a>
          <a routerLink="/pro/annuaire" routerLinkActive="active">
            <span class="nav-icon">📖</span> Ma Fiche Annuaire
          </a>
          <a routerLink="/pro/profile" routerLinkActive="active">
            <span class="nav-icon">👤</span> Mon Profil
          </a>
        </div>

        <button class="pro-logout" (click)="auth.logout()">
          <span class="nav-icon">🚪</span> Déconnexion
        </button>
      </nav>
      <main class="pro-content">
        <router-outlet />
      </main>
    </div>`,
  styles: [`
    .pro-shell { min-height: 100vh; background: var(--bg-secondary); }

    .pro-topbar {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--card-bg);
      border-bottom: 1px solid var(--card-border);
      box-shadow: var(--shadow-sm);
      position: sticky;
      top: 0;
      z-index: 50;
      flex-wrap: wrap;
    }

    .pro-brand {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      text-decoration: none;
    }
    .pro-logo { width: 40px; height: 40px; object-fit: contain; }
    .pro-brand-text { display: flex; flex-direction: column; line-height: 1.2; }
    .pro-brand-name {
      font-size: 0.85rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      color: var(--brand-primary);
    }
    .pro-brand-sub { font-size: 0.72rem; color: var(--text-muted); }

    .pro-nav {
      display: flex;
      gap: 0.375rem;
      flex: 1;
      justify-content: center;
      flex-wrap: wrap;
    }
    .pro-nav a {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 0.875rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-secondary);
      text-decoration: none;
      border-radius: var(--radius-md);
      transition: background 0.2s ease, color 0.2s ease;
    }
    .pro-nav a:hover { background: var(--bg-secondary); color: var(--brand-primary); }
    .pro-nav a.active { background: rgba(139,69,19,0.08); color: var(--brand-primary); }

    .nav-icon { font-size: 1rem; }

    .pro-logout {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-muted);
      background: transparent;
      border: 1px solid var(--card-border);
      border-radius: var(--radius-md);
      padding: 0.5rem 0.875rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .pro-logout:hover { color: var(--brand-red); border-color: var(--brand-red); background: rgba(192,57,43,0.06); }

    .pro-content { padding: 2rem; max-width: 1280px; margin: 0 auto; }

    @media (max-width: 900px) {
      .pro-nav { order: 3; width: 100%; justify-content: flex-start; }
    }
  `]
})
export class ProLayoutComponent {
  auth = inject(AuthService);
}
