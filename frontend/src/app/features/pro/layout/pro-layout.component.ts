import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pro-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <div class="pro-shell">
      <nav class="pro-topbar">
        <img src="assets/logo.png" alt="KENZ BLADI" class="pro-logo" />
        <span class="pro-title">Espace Acteur Pro</span>
        <div class="pro-nav">
          <a routerLink="/pro/dashboard" routerLinkActive="active">Tableau de bord</a>
          <a routerLink="/pro/products"  routerLinkActive="active">Mes Produits</a>
          <a routerLink="/pro/annuaire"  routerLinkActive="active">Ma Fiche Annuaire</a>
          <a routerLink="/pro/profile"   routerLinkActive="active">Mon Profil</a>
        </div>
        <a routerLink="/auth/login" class="pro-logout">Déconnexion</a>
      </nav>
      <main class="pro-content">
        <router-outlet />
      </main>
    </div>`,
  styles: [`.pro-shell{min-height:100vh;background:var(--bg-secondary);} .pro-topbar{display:flex;align-items:center;gap:1rem;padding:.875rem 1.5rem;background:var(--card-bg);border-bottom:1px solid var(--card-border);position:sticky;top:0;z-index:50;} .pro-logo{width:36px;height:36px;object-fit:contain;} .pro-title{font-weight:700;font-size:.9rem;color:var(--text-primary);} .pro-nav{display:flex;gap:1.5rem;flex:1;justify-content:center;} .pro-nav a{font-size:.85rem;font-weight:500;color:var(--text-secondary);text-decoration:none;transition:color .2s;&:hover,.active{color:#8B4513;font-weight:700;}} .pro-logout{font-size:.8rem;color:var(--text-muted);text-decoration:none;&:hover{color:#e74c3c;}} .pro-content{padding:2rem;}`]
})
export class ProLayoutComponent {}
