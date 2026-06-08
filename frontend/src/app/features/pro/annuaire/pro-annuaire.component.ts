import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pro-annuaire',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stub-page">
      <h2>Ma Fiche Annuaire</h2>
      <p>Mettez à jour votre description pour l'Annuaire public. Votre fiche doit être validée par l'administrateur.</p>
      <p>Endpoint : <code>PUT /api/annuaire/:id</code></p>
    </div>`,
  styles: [`.stub-page{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:2rem;} h2{font-size:1.1rem;font-weight:700;margin-bottom:.75rem;color:var(--text-primary);} p{font-size:.875rem;color:var(--text-secondary);line-height:1.7;} code{background:var(--bg-tertiary);padding:.1rem .4rem;border-radius:4px;font-size:.8rem;}`]
})
export class ProAnnuaireComponent {}
