import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
<div class="search-page">
  <div class="container">

    <!-- Header + barre -->
    <div class="search-header">
      <h1>Résultats de recherche</h1>
      <div class="search-bar">
        <input [(ngModel)]="query" (keyup.enter)="doSearch()"
          placeholder="Rechercher…" class="search-input" />
        <button (click)="doSearch()" class="search-btn">🔍 Rechercher</button>
      </div>
      @if (query && !isLoading()) {
        <p class="result-info">
          {{ totalCount() }} résultat(s) pour <strong>« {{ query }} »</strong>
        </p>
      }
    </div>

    @if (isLoading()) {
      <div class="loading">🔍 Recherche en cours…</div>
    } @else if (query && totalCount() === 0) {
      <div class="empty-state">
        <div class="es-icon">🔍</div>
        <h3>Aucun résultat trouvé</h3>
        <p>Essayez d'autres mots-clés ou vérifiez l'orthographe.</p>
      </div>
    } @else if (results()) {
      <div class="results-layout">

        <!-- ── Produits ── -->
        @if (results().products?.length > 0) {
          <section class="result-section">
            <h2>🛍️ Produits <span class="cnt">({{ results().products.length }})</span></h2>
            <div class="result-grid">
              @for (p of results().products; track p._id) {
                <a [routerLink]="['/marketplace', p.slug]" class="result-card">
                  <div class="rc-img">
                    @if (p.coverImage) { <img [src]="p.coverImage" [alt]="t(p.name)" loading="lazy" /> }
                    @else { <div class="rc-ph">🛍️</div> }
                  </div>
                  <div class="rc-body">
                    <span class="rc-type">{{ p.domain }}</span>
                    <h4>{{ t(p.name) }}</h4>
                    <strong class="rc-price">{{ p.price | number:'1.0-0' }} MAD</strong>
                  </div>
                </a>
              }
            </div>
          </section>
        }

        <!-- ── Annuaire ── -->
        @if (results().annuaire?.length > 0) {
          <section class="result-section">
            <h2>🏺 Annuaire <span class="cnt">({{ results().annuaire.length }})</span></h2>
            <div class="result-list">
              @for (a of results().annuaire; track a._id) {
                <a [routerLink]="['/annuaire', a.slug]" class="result-row">
                  <div class="rr-img">
                    @if (a.logo) { <img [src]="a.logo" [alt]="a.structureName" loading="lazy" /> }
                    @else { <div class="rr-ph">🏺</div> }
                  </div>
                  <div class="rr-body">
                    <strong>{{ a.structureName }}</strong>
                    <span>{{ a.domain }} · {{ a.contact?.city || '' }}</span>
                  </div>
                  <span class="rr-arrow">→</span>
                </a>
              }
            </div>
          </section>
        }

        <!-- ── Tourisme ── -->
        @if (results().tourism?.length > 0) {
          <section class="result-section">
            <h2>🌍 Destinations touristiques <span class="cnt">({{ results().tourism.length }})</span></h2>
            <div class="result-grid">
              @for (p of results().tourism; track p._id) {
                <a [routerLink]="['/tourism', p.slug]" class="result-card">
                  <div class="rc-img">
                    @if (p.coverImage) { <img [src]="p.coverImage" [alt]="t(p.name)" loading="lazy" /> }
                    @else { <div class="rc-ph">🌍</div> }
                  </div>
                  <div class="rc-body">
                    <span class="rc-type">{{ p.locationType }}</span>
                    <h4>{{ t(p.name) }}</h4>
                    <span class="rc-loc">📍 {{ p.location?.city || '' }}</span>
                  </div>
                </a>
              }
            </div>
          </section>
        }

        <!-- ── Articles ── -->
        @if (results().blogs?.length > 0) {
          <section class="result-section">
            <h2>📰 Articles <span class="cnt">({{ results().blogs.length }})</span></h2>
            <div class="result-list">
              @for (b of results().blogs; track b._id) {
                <a [routerLink]="['/blog', b.slug]" class="result-row">
                  <div class="rr-img">
                    @if (b.coverImage) { <img [src]="b.coverImage" [alt]="t(b.title)" loading="lazy" /> }
                    @else { <div class="rr-ph">📰</div> }
                  </div>
                  <div class="rr-body">
                    <strong>{{ t(b.title) }}</strong>
                    <span>{{ b.category }}</span>
                  </div>
                  <span class="rr-arrow">→</span>
                </a>
              }
            </div>
          </section>
        }
      </div>
    }
  </div>
</div>
  `,
  styles: [`
    .search-page { min-height:70vh; padding:2rem 0 4rem; }
    .search-header { margin-bottom:2.5rem; display:flex; flex-direction:column; gap:.875rem; }
    h1 { font-size:1.4rem; font-weight:900; color:var(--text-primary); margin:0; }
    .search-bar { display:flex; gap:.5rem; max-width:560px; }
    .search-input { flex:1; padding:.6rem 1rem; border:1.5px solid var(--card-border); border-radius:10px; background:var(--bg-secondary); color:var(--text-primary); font-size:.9rem; outline:none; }
    .search-input:focus { border-color:#8B4513; }
    .search-btn { padding:.6rem 1.25rem; background:#8B4513; color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; font-size:.875rem; white-space:nowrap; }
    .result-info { font-size:.875rem; color:var(--text-muted); margin:0; }
    .result-info strong { color:var(--text-primary); }
    .loading { padding:4rem; text-align:center; color:var(--text-muted); font-size:1rem; }
    .empty-state { display:flex; flex-direction:column; align-items:center; gap:1rem; padding:4rem; text-align:center; }
    .es-icon { font-size:3.5rem; }
    .empty-state h3 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0; }
    .empty-state p { color:var(--text-muted); }
    .results-layout { display:flex; flex-direction:column; gap:2.5rem; }
    .result-section h2 { font-size:1rem; font-weight:800; color:var(--text-primary); margin:0 0 1rem; display:flex; align-items:center; gap:.5rem; }
    .cnt { font-size:.78rem; font-weight:500; color:var(--text-muted); }
    /* Grid cards */
    .result-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(185px,1fr)); gap:1rem; }
    .result-card { text-decoration:none; background:var(--card-bg); border:1px solid var(--card-border); border-radius:12px; overflow:hidden; transition:transform .2s,box-shadow .2s; }
    .result-card:hover { transform:translateY(-2px); box-shadow:0 6px 18px rgba(0,0,0,.09); }
    .rc-img { height:130px; background:var(--bg-tertiary); overflow:hidden; }
    .rc-img img { width:100%; height:100%; object-fit:cover; }
    .rc-ph { height:100%; display:flex; align-items:center; justify-content:center; font-size:2.5rem; }
    .rc-body { padding:.75rem; display:flex; flex-direction:column; gap:.25rem; }
    .rc-type { font-size:.68rem; font-weight:700; color:#8B4513; text-transform:uppercase; }
    h4 { font-size:.82rem; font-weight:700; color:var(--text-primary); margin:0; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    .rc-price { font-size:.85rem; font-weight:800; color:#8B4513; }
    .rc-loc { font-size:.75rem; color:var(--text-muted); }
    /* List rows */
    .result-list { display:flex; flex-direction:column; gap:.5rem; }
    .result-row { display:flex; align-items:center; gap:.875rem; background:var(--card-bg); border:1px solid var(--card-border); border-radius:10px; padding:.75rem 1rem; text-decoration:none; transition:box-shadow .2s; }
    .result-row:hover { box-shadow:0 3px 12px rgba(0,0,0,.07); }
    .rr-img { width:44px; height:44px; border-radius:8px; overflow:hidden; background:var(--bg-tertiary); flex-shrink:0; }
    .rr-img img { width:100%; height:100%; object-fit:cover; }
    .rr-ph { width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:1.25rem; }
    .rr-body { flex:1; display:flex; flex-direction:column; gap:.2rem; }
    .rr-body strong { font-size:.875rem; font-weight:700; color:var(--text-primary); }
    .rr-body span { font-size:.75rem; color:var(--text-muted); }
    .rr-arrow { color:#8B4513; font-weight:700; }
  `]
})
export class SearchResultsComponent implements OnInit {
  private api   = inject(ApiService);
  private route = inject(ActivatedRoute);
  private lang  = inject(LanguageService);

  query      = '';
  results    = signal<any>(null);
  isLoading  = signal(false);
  totalCount = signal(0);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) this.doSearch();
    });
  }

  t(f: Record<string, string> | undefined): string {
    if (!f) return '';
    const l = this.lang.current();
    return f[l] || f['fr'] || '';
  }

  doSearch(): void {
    if (!this.query.trim()) return;
    this.isLoading.set(true);
    this.api.get<any>('/search', { q: this.query, limit: 8 }).subscribe({
      next: res => {
        this.results.set(res.data);
        const d = res.data;
        this.totalCount.set(
          (d.products?.length || 0) + (d.annuaire?.length || 0) +
          (d.tourism?.length  || 0) + (d.blogs?.length     || 0)
        );
        this.isLoading.set(false);
      },
      error: () => { this.isLoading.set(false); }
    });
  }
}
