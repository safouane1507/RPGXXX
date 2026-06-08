import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pro-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pro-dash">
      <h2>Bienvenue dans votre Espace Pro</h2>
      <p>Gérez vos produits, votre fiche annuaire et vos informations de contact.</p>
      <div class="pro-cards">
        <a routerLink="/pro/products" class="pro-card">
          <div class="pc-icon">📦</div>
          <h3>Mes Produits</h3>
          <p>Ajouter, modifier et gérer vos produits</p>
        </a>
        <a routerLink="/pro/annuaire" class="pro-card">
          <div class="pc-icon">📖</div>
          <h3>Ma Fiche Annuaire</h3>
          <p>Mettre à jour votre fiche dans l'annuaire public</p>
        </a>
        <a routerLink="/pro/profile" class="pro-card">
          <div class="pc-icon">👤</div>
          <h3>Mon Profil</h3>
          <p>Gérer vos informations de contact</p>
        </a>
      </div>
    </div>`,
  styles: [`.pro-dash{display:flex;flex-direction:column;gap:1.5rem;} h2{font-size:1.2rem;font-weight:700;color:var(--text-primary);} p{font-size:.875rem;color:var(--text-secondary);} .pro-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;} @media(max-width:640px){.pro-cards{grid-template-columns:1fr;}} .pro-card{text-decoration:none;background:var(--card-bg);border:1px solid var(--card-border);border-radius:14px;padding:1.5rem;text-align:center;transition:transform .2s,box-shadow .2s;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.08);text-decoration:none;}} .pc-icon{font-size:2rem;margin-bottom:.75rem;} h3{font-size:.95rem;font-weight:700;color:var(--text-primary);margin-bottom:.375rem;} .pro-card p{font-size:.8rem;color:var(--text-muted);}`]
})
export class ProDashboardComponent {}
