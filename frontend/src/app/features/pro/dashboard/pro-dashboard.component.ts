import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-pro-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pro-dash">

      <!-- Welcome card -->
      <div class="welcome-card">
        <div>
          <h2>Bienvenue, {{ auth.currentUser()?.proProfile?.companyName || auth.currentUser()?.fullName }} 👋</h2>
          <p>Gérez vos produits, votre fiche annuaire et vos informations de contact depuis votre espace.</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon products">📦</div>
          <div>
            <span class="stat-value">{{ productsCount() }}</span>
            <span class="stat-label">Produits</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon annuaire" [class.active]="annuaireStatus() === 'active'">📖</div>
          <div>
            <span class="stat-value">{{ annuaireStatusLabel() }}</span>
            <span class="stat-label">Fiche Annuaire</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon domain">🏷️</div>
          <div>
            <span class="stat-value">{{ auth.currentUser()?.proProfile?.domain || '—' }}</span>
            <span class="stat-label">Domaine d'activité</span>
          </div>
        </div>
      </div>

      <!-- Quick actions -->
      <h3 class="section-title">Accès rapide</h3>
      <div class="pro-cards">
        <a routerLink="/pro/products" class="pro-card">
          <div class="pc-icon">📦</div>
          <h3>Mes Produits</h3>
          <p>Ajouter, modifier et gérer vos produits</p>
          <span class="pc-arrow">→</span>
        </a>
        <a routerLink="/pro/annuaire" class="pro-card">
          <div class="pc-icon">📖</div>
          <h3>Ma Fiche Annuaire</h3>
          <p>Mettre à jour votre fiche dans l'annuaire public</p>
          <span class="pc-arrow">→</span>
        </a>
        <a routerLink="/pro/profile" class="pro-card">
          <div class="pc-icon">👤</div>
          <h3>Mon Profil</h3>
          <p>Gérer vos informations de contact</p>
          <span class="pc-arrow">→</span>
        </a>
      </div>
    </div>`,
  styles: [`
    .pro-dash { display: flex; flex-direction: column; gap: 1.75rem; }

    .welcome-card {
      background: linear-gradient(135deg, var(--brand-primary), var(--brand-gold));
      border-radius: var(--radius-lg);
      padding: 1.75rem;
      box-shadow: var(--shadow-md);
      color: #fff;
    }
    .welcome-card h2 { font-size: 1.25rem; font-weight: 800; margin: 0 0 0.4rem; }
    .welcome-card p { font-size: 0.875rem; margin: 0; opacity: 0.92; max-width: 560px; }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    @media (max-width: 700px) { .stats-grid { grid-template-columns: 1fr; } }

    .stat-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      box-shadow: var(--shadow-sm);
    }
    .stat-icon {
      width: 48px; height: 48px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.4rem;
      border-radius: var(--radius-md);
      background: rgba(139,69,19,0.08);
      flex-shrink: 0;
    }
    .stat-icon.annuaire.active { background: rgba(39,174,96,0.1); }
    .stat-value { display: block; font-size: 1.05rem; font-weight: 800; color: var(--text-primary); text-transform: capitalize; }
    .stat-label { display: block; font-size: 0.78rem; color: var(--text-muted); }

    .section-title { font-size: 1rem; font-weight: 800; color: var(--text-primary); margin: 0; }

    .pro-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    @media (max-width: 640px) { .pro-cards { grid-template-columns: 1fr; } }

    .pro-card {
      position: relative;
      text-decoration: none;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      box-shadow: var(--shadow-sm);
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }
    .pro-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--brand-primary);
      text-decoration: none;
    }
    .pc-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
    .pro-card h3 { font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.375rem; }
    .pro-card p { font-size: 0.8rem; color: var(--text-muted); margin: 0; }
    .pc-arrow {
      position: absolute;
      top: 1.5rem; inset-inline-end: 1.5rem;
      color: var(--brand-primary);
      font-weight: 700;
      opacity: 0;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .pro-card:hover .pc-arrow { opacity: 1; transform: translateX(4px); }
  `]
})
export class ProDashboardComponent implements OnInit {
  private api = inject(ApiService);
  auth = inject(AuthService);

  productsCount  = signal(0);
  annuaireStatus = signal<'none' | 'pending' | 'active'>('none');

  ngOnInit(): void {
    this.api.get<{ pagination: { total: number } }>('/products/my').subscribe({
      next:  res => this.productsCount.set(res.pagination?.total || 0),
      error: () => {}
    });

    this.api.get<{ data: { isActive: boolean } }>('/annuaire/my').subscribe({
      next:  res => this.annuaireStatus.set(res.data?.isActive ? 'active' : 'pending'),
      error: () => this.annuaireStatus.set('none')
    });
  }

  annuaireStatusLabel(): string {
    switch (this.annuaireStatus()) {
      case 'active':  return 'Active';
      case 'pending': return 'En attente';
      default:        return 'Non créée';
    }
  }
}
