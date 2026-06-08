import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-stub">
      <h2>Gestion des Événements</h2>
      <p>Créer des festivals, foires, ateliers, expositions. Gérer les réservations.</p>
      <p>Endpoints : <code>GET /api/events</code> · <code>POST /api/events</code></p>
    </div>`,
  styles: [`.admin-stub{background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:2rem;} h2{font-size:1.1rem;font-weight:700;margin-bottom:.75rem;color:var(--text-primary);} p{font-size:.875rem;color:var(--text-secondary);line-height:1.7;} code{background:var(--bg-tertiary);padding:.1rem .4rem;border-radius:4px;font-size:.8rem;}`]
})
export class EventsListComponent {}
