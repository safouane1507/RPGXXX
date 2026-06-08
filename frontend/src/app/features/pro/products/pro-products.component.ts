import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pro-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stub-page">
      <h2>Mes Produits</h2>
      <p>Interface pour ajouter/modifier vos produits : description multilingue, prix, photos.</p>
      <p>Endpoint : <code>POST /api/products</code> · <code>PUT /api/products/:id</code></p>
    </div>`,
  styles: [`.stub-page{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:2rem;} h2{font-size:1.1rem;font-weight:700;margin-bottom:.75rem;color:var(--text-primary);} p{font-size:.875rem;color:var(--text-secondary);line-height:1.7;} code{background:var(--bg-tertiary);padding:.1rem .4rem;border-radius:4px;font-size:.8rem;}`]
})
export class ProProductsComponent {}
