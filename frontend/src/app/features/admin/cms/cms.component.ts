import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="cms-page">
      <h2>Gestion de Contenu (CMS)</h2>
      <div class="cms-grid">
        <div class="cms-card">
          <div class="cms-icon">📝</div>
          <h3>Articles / Blogs</h3>
          <p>Créer et gérer les articles multilingues (FR · AR · EN · Darija)</p>
          <a class="cms-link">Gérer les articles →</a>
        </div>
        <div class="cms-card">
          <div class="cms-icon">📢</div>
          <h3>Annonces</h3>
          <p>Bannières d'annonces affichées sur la page d'accueil</p>
          <a class="cms-link">Gérer les annonces →</a>
        </div>
        <div class="cms-card">
          <div class="cms-icon">💡</div>
          <h3>Conseils Pratiques</h3>
          <p>Fiches conseils pour les artisans et coopératives</p>
          <a class="cms-link">Gérer les conseils →</a>
        </div>
        <div class="cms-card">
          <div class="cms-icon">ℹ️</div>
          <h3>À Propos</h3>
          <p>Contenu de la page À propos multilingue</p>
          <a class="cms-link">Modifier →</a>
        </div>
      </div>
    </div>`,
  styles: [`.cms-page{display:flex;flex-direction:column;gap:1.5rem;} h2{font-size:1.1rem;font-weight:700;color:var(--text-primary);} .cms-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;} @media(max-width:640px){.cms-grid{grid-template-columns:1fr;}} .cms-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:1.25rem;} .cms-icon{font-size:1.75rem;margin-bottom:.5rem;} h3{font-size:.95rem;font-weight:700;margin-bottom:.375rem;color:var(--text-primary);} p{font-size:.82rem;color:var(--text-muted);line-height:1.6;margin-bottom:.75rem;} .cms-link{font-size:.8rem;font-weight:600;color:#8B4513;cursor:pointer;} .cms-link:hover{text-decoration:underline;}`]
})
export class CmsComponent {}
