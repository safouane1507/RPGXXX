import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-stub">
      <h2>Réclamations</h2>
      <p>Suivi et traitement des réclamations des clients et acteurs professionnels.</p>
    </div>`,
  styles: [`.admin-stub{background:var(--card-bg);border:1px solid var(--card-border);border-radius:10px;padding:2rem;} h2{font-size:1.1rem;font-weight:700;margin-bottom:.75rem;color:var(--text-primary);} p{font-size:.875rem;color:var(--text-secondary);}`]
})
export class ComplaintsComponent {}
