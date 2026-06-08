import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="admin-page">
      <div class="page-header">
        <h2>Gestion des Utilisateurs Pro</h2>
        <button class="btn-add" (click)="showForm.set(true)">+ Créer un compte Pro</button>
      </div>
      @if (showForm()) {
        <div class="create-form-banner">
          <p>Formulaire de création d'un acteur Pro — l'admin définit l'email, le mot de passe et le domaine.</p>
          <button (click)="showForm.set(false)">Fermer</button>
        </div>
      }
      <div class="stub-info">
        <p>Ce composant gère la création/activation/désactivation des comptes <strong>Acteurs Pro</strong>.</p>
        <p>L'admin crée l'email, active/désactive les comptes et gère les droits.</p>
        <p>Endpoint : <code>GET /api/admin/users?role=pro</code></p>
      </div>
    </div>
  `,
  styles: [`.admin-page{display:flex;flex-direction:column;gap:1.25rem;} .page-header{display:flex;align-items:center;justify-content:space-between;} h2{font-size:1.1rem;font-weight:700;color:var(--text-primary);} .btn-add{padding:.5rem 1rem;background:#8B4513;color:#fff;border:none;border-radius:8px;font-weight:600;font-size:.85rem;cursor:pointer;} .create-form-banner{padding:1rem;background:rgba(139,69,19,.06);border:1px solid rgba(139,69,19,.2);border-radius:10px;display:flex;align-items:center;justify-content:space-between;font-size:.85rem;} .create-form-banner button{padding:.3rem .75rem;border:1px solid;border-radius:6px;cursor:pointer;background:transparent;} .stub-info{background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:1.5rem;font-size:.875rem;line-height:1.8;color:var(--text-secondary);} code{background:var(--bg-tertiary);padding:.1rem .4rem;border-radius:4px;font-size:.8rem;}`]
})
export class UsersListComponent implements OnInit {
  private api = inject(ApiService);
  showForm = signal(false);
  ngOnInit(): void {}
}
