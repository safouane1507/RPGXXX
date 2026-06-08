import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <section class="marketplace-page">
      <div class="mp-hero">
        <div class="container">
          <h1>{{ 'HOME.MARKETPLACE_TITLE' | translate }}</h1>
          <p>{{ 'HOME.MARKETPLACE_SUBTITLE' | translate }}</p>
        </div>
      </div>
      <div class="container section-spacing">
        <div class="products-grid">
          @for (p of products(); track p._id) {
            <a class="mp-card">
              <div class="mp-thumb">
                @if (p.coverImage) { <img [src]="p.coverImage" [alt]="t(p.name)" loading="lazy" /> }
                @else { <div class="mp-thumb-ph"></div> }
              </div>
              <div class="mp-body">
                <h3>{{ t(p.name) }}</h3>
                <div class="mp-footer">
                  <strong class="mp-price">{{ p.price | number:'1.0-0' }} MAD</strong>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </section>`,
  styles: [`.mp-hero{background:linear-gradient(135deg,#1a0a00,#3d1a00);padding:3rem 0;color:#fff;} .mp-hero h1{font-size:1.75rem;font-weight:800;margin-bottom:.5rem;} .mp-hero p{opacity:.8;font-size:.95rem;} .products-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.25rem;} .mp-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;overflow:hidden;text-decoration:none;transition:transform .2s,box-shadow .2s;&:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.1);}} .mp-thumb{height:160px;background:var(--bg-tertiary);overflow:hidden;} .mp-thumb img{width:100%;height:100%;object-fit:cover;} .mp-thumb-ph{height:100%;background:linear-gradient(135deg,rgba(139,69,19,.06),rgba(212,175,106,.06));} .mp-body{padding:.875rem;} h3{font-size:.85rem;font-weight:600;color:var(--text-primary);margin-bottom:.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;} .mp-footer{display:flex;align-items:center;justify-content:space-between;} .mp-price{color:#8B4513;font-weight:800;font-size:.9rem;}`]
})
export class MarketplaceComponent implements OnInit {
  private api  = inject(ApiService);
  private lang = inject(LanguageService);
  products = signal<any[]>([]);

  ngOnInit(): void {
    this.api.get<{ data: any[] }>('/products', { limit: 24 }).subscribe({ next: r => this.products.set(r.data), error: () => {} });
  }
  t(f: Record<string, string>): string { const l = this.lang.current(); return f?.[l] || f?.['fr'] || ''; }
}
