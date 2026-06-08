import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cooperatives-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-stub">
      <h2>Gestion des Coopératives & Acteurs Pro</h2>
      <ul>
        <li>E-Boutiques — boutiques en ligne des coopératives</li>
        <li>Annuaires — fiches annuaire (voir onglet dédié)</li>
        <li>Fournisseurs — gestion des fournisseurs</li>
        <li>Instances FAQ — FAQ spécifique par domaine</li>
      </ul>
    </div>`,
  styles: [`.admin-stub{background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:2rem;} h2{font-size:1.1rem;font-weight:700;margin-bottom:1rem;color:var(--text-primary);} ul{padding-inline-start:1.25rem;font-size:.875rem;color:var(--text-secondary);line-height:2;}`]
})
export class CooperativesListComponent {}
