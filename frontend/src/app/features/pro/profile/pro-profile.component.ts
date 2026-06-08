import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pro-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stub-page">
      <h2>Mon Profil</h2>
      <p>Gérez vos informations de contact : téléphone, email, adresse, réseaux sociaux.</p>
    </div>`,
  styles: [`.stub-page{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:2rem;} h2{font-size:1.1rem;font-weight:700;margin-bottom:.75rem;color:var(--text-primary);} p{font-size:.875rem;color:var(--text-secondary);}`]
})
export class ProProfileComponent {}
