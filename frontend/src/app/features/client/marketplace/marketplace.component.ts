import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';

const DOMAINS = [
  { id: '',                    label: 'Tout',               icon: '🛍️',  color: '#8B4513' },
  { id: 'artisanat_art',       label: 'Artisanat d\'art',   icon: '🎨',  color: '#8E44AD' },
  { id: 'produit_terroir',     label: 'Produits du terroir',icon: '🌾',  color: '#F39C12' },
  { id: 'soin_beaute',         label: 'Soin & Beauté',      icon: '🌸',  color: '#E91E8C' },
  { id: 'habillement_mode',    label: 'Mode Marocaine',     icon: '👘',  color: '#C0392B' },
  { id: 'artisanat_culinaire', label: 'Artisanat Culinaire',icon: '🍯',  color: '#E74C3C' },
  { id: 'agriculture_bio',     label: 'Agriculture Bio',    icon: '🌿',  color: '#2ECC71' },
  { id: 'produits_mer',        label: 'Produits de la mer', icon: '🐟',  color: '#006994' },
  { id: 'artisanat_service',   label: 'Artisanat Service',  icon: '🛠️',  color: '#8B4513' },
  { id: 'tourisme_rural',      label: 'Tourisme Rural',     icon: '🌳',  color: '#27AE60' }
];

const MOROCCAN_REGIONS = [
  'Tanger-Tétouan-Al Hoceïma', 'Oriental', 'Fès-Meknès', 'Rabat-Salé-Kénitra',
  'Béni Mellal-Khénifra', 'Casablanca-Settat', 'Marrakech-Safi', 'Drâa-Tafilalet',
  'Souss-Massa', 'Guelmim-Oued Noun', 'Laâyoune-Sakia El Hamra', 'Dakhla-Oued Ed-Dahab'
];

const SORT_OPTIONS = [
  { value: '-isFeatured -createdAt', label: 'Mis en avant' },
  { value: '-createdAt',             label: 'Plus récents' },
  { value: 'price',                  label: 'Prix croissant' },
  { value: '-price',                 label: 'Prix décroissant' },
  { value: '-rating',                label: 'Mieux notés' }
];

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
  template: `
<section class="marketplace-page">

  <!-- Hero -->
  <div class="mp-hero">
    <div class="container">
      <h1>{{ 'HOME.MARKETPLACE_TITLE' | translate }}</h1>
      <p>{{ 'HOME.MARKETPLACE_SUBTITLE' | translate }}</p>
      <div class="hero-search">
        <input [(ngModel)]="searchInput" (keyup.enter)="doSearch()"
          placeholder="Rechercher un produit, artisan…" class="hero-input" />
        <button (click)="doSearch()" class="hero-btn">🔍 Rechercher</button>
      </div>
    </div>
  </div>

  <!-- Domain Tabs -->
  <div class="domain-tabs-wrap">
    <div class="container">
      <div class="domain-tabs">
        @for (d of domains; track d.id) {
          <button class="domain-tab" [class.active]="activeDomain() === d.id"
            (click)="setDomain(d.id)">
            <span class="tab-icon">{{ d.icon }}</span>
            <span class="tab-label">{{ d.label }}</span>
          </button>
        }
      </div>
    </div>
  </div>

  <div class="container mp-body">
    <div class="mp-layout">

      <!-- ── Sidebar ── -->
      <aside class="mp-sidebar">
        <div class="sidebar-section">
          <h4>Région</h4>
          <select [(ngModel)]="activeRegion" (ngModelChange)="applyFilters()">
            <option value="">Toutes les régions</option>
            @for (r of moroccanRegions; track r) { <option [value]="r">{{ r }}</option> }
          </select>
        </div>

        <div class="sidebar-section">
          <h4>Prix (MAD)</h4>
          <div class="price-inputs">
            <input type="number" [(ngModel)]="minPrice" placeholder="Min" min="0" (blur)="applyFilters()" />
            <span>—</span>
            <input type="number" [(ngModel)]="maxPrice" placeholder="Max" min="0" (blur)="applyFilters()" />
          </div>
        </div>

        <div class="sidebar-section">
          <h4>Labels</h4>
          <label class="check-label">
            <input type="checkbox" [(ngModel)]="filterOrganic" (ngModelChange)="applyFilters()" />
            🌿 Bio & Naturel
          </label>
          <label class="check-label">
            <input type="checkbox" [(ngModel)]="filterHandmade" (ngModelChange)="applyFilters()" />
            🤲 Fait main
          </label>
        </div>

        <button class="btn-reset-all" (click)="resetAll()">Réinitialiser les filtres</button>
      </aside>

      <!-- ── Main ── -->
      <div class="mp-main">

        <!-- Toolbar -->
        <div class="mp-toolbar">
          <p class="result-count">
            @if (total() > 0) {
              <strong>{{ total() }}</strong> produit(s)
              @if (activeDomain()) { — <em>{{ domainLabel(activeDomain()) }}</em> }
            } @else { Aucun produit }
          </p>
          <div class="toolbar-right">
            <select [(ngModel)]="activeSort" (ngModelChange)="applyFilters()">
              @for (s of sortOptions; track s.value) { <option [value]="s.value">{{ s.label }}</option> }
            </select>
            <div class="view-toggle">
              <button [class.active]="viewMode() === 'grid'" (click)="viewMode.set('grid')" title="Grille">⊞</button>
              <button [class.active]="viewMode() === 'list'" (click)="viewMode.set('list')" title="Liste">☰</button>
            </div>
          </div>
        </div>

        <!-- Products -->
        @if (isLoading()) {
          <div class="products-grid">
            @for (_ of [1,2,3,4,5,6,7,8]; track $index) { <div class="skeleton-card"></div> }
          </div>
        } @else if (products().length === 0) {
          <div class="empty-state">
            <div class="empty-icon">🛍️</div>
            <h3>Aucun produit trouvé</h3>
            <p>Essayez d'élargir votre recherche ou de modifier les filtres.</p>
            <button class="btn-reset" (click)="resetAll()">Réinitialiser les filtres</button>
          </div>
        } @else {
          <div [class]="viewMode() === 'grid' ? 'products-grid' : 'products-list'">
            @for (p of products(); track p._id) {

              @if (viewMode() === 'grid') {
                <a [routerLink]="['/marketplace', p.slug]" class="mp-card">
                  <div class="mp-thumb">
                    @if (p.coverImage) {
                      <img [src]="p.coverImage" [alt]="t(p.name)" loading="lazy" />
                    } @else {
                      <div class="mp-thumb-ph">{{ domainIcon(p.domain) }}</div>
                    }
                    @if (p.isFeatured) { <div class="mp-feat-badge">⭐</div> }
                    @if (p.isOrganic)  { <div class="mp-organic-badge">🌿 Bio</div> }
                    @if (p.priceDiscount) {
                      <div class="mp-discount-badge">-{{ discountPct(p) }}%</div>
                    }
                    <button class="mp-cart-btn" (click)="addToCart($event, p)" title="Ajouter au panier" aria-label="Ajouter au panier">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="21" r="1" stroke="currentColor" stroke-width="2"/>
                        <circle cx="20" cy="21" r="1" stroke="currentColor" stroke-width="2"/>
                        <path d="M1 1H5L7.68 14.39A2 2 0 0 0 9.66 16H19.4A2 2 0 0 0 21.38 14.39L23 6H6"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div class="mp-body">
                    <span class="mp-domain">{{ domainLabel(p.domain) }}</span>
                    <h3>{{ t(p.name) }}</h3>
                    @if (t(p.shortDescription)) {
                      <p class="mp-desc">{{ t(p.shortDescription) }}</p>
                    }
                    <div class="mp-footer">
                      <div class="mp-pricing">
                        @if (p.priceDiscount) {
                          <span class="mp-old-price">{{ p.price | number:'1.0-0' }} MAD</span>
                          <strong class="mp-price">{{ p.priceDiscount | number:'1.0-0' }} MAD</strong>
                        } @else {
                          <strong class="mp-price">{{ p.price | number:'1.0-0' }} MAD</strong>
                        }
                      </div>
                      @if (p.origin?.city || p.origin?.region) {
                        <span class="mp-origin">📍 {{ p.origin?.city || p.origin?.region }}</span>
                      }
                    </div>
                  </div>
                </a>
              } @else {
                <a [routerLink]="['/marketplace', p.slug]" class="mp-list-item">
                  <div class="mli-thumb">
                    @if (p.coverImage) { <img [src]="p.coverImage" [alt]="t(p.name)" loading="lazy" /> }
                    @else { <div class="mli-thumb-ph">{{ domainIcon(p.domain) }}</div> }
                  </div>
                  <div class="mli-body">
                    <span class="mp-domain">{{ domainLabel(p.domain) }}</span>
                    <h3>{{ t(p.name) }}</h3>
                    <p class="mp-desc">{{ t(p.shortDescription) || t(p.description) }}</p>
                    <div class="mli-meta">
                      @if (p.origin?.city || p.origin?.region) {
                        <span class="mp-origin">📍 {{ p.origin?.city || p.origin?.region }}</span>
                      }
                      @if (p.isOrganic)  { <span class="badge-sm green">🌿 Bio</span> }
                      @if (p.isHandmade) { <span class="badge-sm amber">🤲 Fait main</span> }
                    </div>
                  </div>
                  <div class="mli-price">
                    @if (p.priceDiscount) {
                      <span class="mp-old-price">{{ p.price | number:'1.0-0' }} MAD</span>
                      <strong class="mp-price">{{ p.priceDiscount | number:'1.0-0' }} MAD</strong>
                    } @else {
                      <strong class="mp-price">{{ p.price | number:'1.0-0' }} MAD</strong>
                    }
                    <button class="mli-cart-btn" (click)="addToCart($event, p)">🛒 Ajouter</button>
                    <span class="mli-voir">Voir le produit →</span>
                  </div>
                </a>
              }
            }
          </div>

          @if (pages() > 1) {
            <div class="pagination">
              <button [disabled]="page() === 1" (click)="goPage(page() - 1)">‹</button>
              @for (n of pagesArray(); track n) {
                <button [class.active]="n === page()" (click)="goPage(n)">{{ n }}</button>
              }
              <button [disabled]="page() === pages()" (click)="goPage(page() + 1)">›</button>
            </div>
          }
        }
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
    .mp-hero {
      position: relative; overflow: hidden;
      background: linear-gradient(135deg,#1a0a00,#3d1a00);
      padding: 3.5rem 0 2.5rem;
      color: #fff;

      &::before {
        content: ''; position: absolute; inset: 0;
        background-image: var(--zellige-pattern);
        background-repeat: repeat; background-size: 40px 12px;
        opacity: .15; pointer-events: none;
      }

      .container { position: relative; z-index: 1; }
    }
    .mp-hero h1 { font-size:1.9rem; font-weight:900; margin-bottom:.5rem; color:#f8f1e7 !important; }
    .mp-hero p  { opacity:.75; font-size:.95rem; margin-bottom:1.5rem; color:#f8f1e7 !important; }
    .hero-search { display:flex; gap:.5rem; max-width:520px; }
    .hero-input { flex:1; padding:.65rem 1rem; border:none; border-radius:10px; font-size:.9rem; outline:none; background:rgba(255,255,255,.12); color:#fff; }
    .hero-input::placeholder { color:rgba(255,255,255,.55); }
    .hero-btn { padding:.65rem 1.25rem; background:#8B4513; border:none; border-radius:10px; color:#fff; font-weight:700; font-size:.875rem; cursor:pointer; white-space:nowrap; }
    .domain-tabs-wrap { background:var(--card-bg); border-bottom:1px solid var(--card-border); position:sticky; top:0; z-index:10; }
    .domain-tabs { display:flex; gap:.25rem; overflow-x:auto; padding:.5rem 0; scrollbar-width:none; }
    .domain-tabs::-webkit-scrollbar { display:none; }
    .domain-tab { display:flex; align-items:center; gap:.35rem; padding:.38rem .8rem; border:none; border-radius:20px; background:transparent; color:var(--text-secondary); font-size:.8rem; font-weight:600; cursor:pointer; white-space:nowrap; transition:all .2s; }
    .domain-tab.active, .domain-tab:hover { background:#8B4513; color:#fff; }
    .tab-icon { font-size:.95rem; }
    .mp-body { padding:1.75rem 1.5rem 3rem; }
    .mp-layout { display:grid; grid-template-columns:220px 1fr; gap:1.75rem; align-items:start; }
    .mp-sidebar { background:var(--card-bg); border:1px solid var(--card-border); border-radius:14px; padding:1.25rem; display:flex; flex-direction:column; gap:1.25rem; position:sticky; top:60px; }
    .sidebar-section h4 { font-size:.78rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:.06em; margin:0 0 .625rem; }
    .sidebar-section select { width:100%; padding:.45rem .65rem; border:1px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .price-inputs { display:flex; align-items:center; gap:.4rem; }
    .price-inputs input { flex:1; min-width:0; padding:.42rem .6rem; border:1px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; width:100%; }
    .price-inputs span { color:var(--text-muted); font-size:.85rem; flex-shrink:0; }
    .check-label { display:flex; align-items:center; gap:.5rem; font-size:.84rem; color:var(--text-primary); cursor:pointer; padding:.25rem 0; }
    .check-label input { width:auto; cursor:pointer; }
    .btn-reset-all { padding:.45rem; background:var(--bg-tertiary); border:1px solid var(--card-border); border-radius:8px; color:var(--text-muted); font-size:.8rem; cursor:pointer; text-align:center; }
    .mp-toolbar { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.75rem; margin-bottom:1.25rem; }
    .result-count { font-size:.875rem; color:var(--text-muted); margin:0; }
    .result-count strong { color:var(--text-primary); }
    .result-count em { color:#8B4513; font-style:normal; font-weight:600; }
    .toolbar-right { display:flex; align-items:center; gap:.625rem; }
    .toolbar-right select { padding:.4rem .65rem; border:1px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .view-toggle { display:flex; border:1px solid var(--card-border); border-radius:8px; overflow:hidden; }
    .view-toggle button { padding:.38rem .65rem; background:transparent; border:none; cursor:pointer; color:var(--text-muted); font-size:1rem; transition:all .2s; }
    .view-toggle button.active { background:#8B4513; color:#fff; }
    .products-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(185px,1fr)); gap:1.125rem; }
    .skeleton-card { height:280px; background:linear-gradient(90deg,var(--bg-secondary) 25%,var(--bg-tertiary) 50%,var(--bg-secondary) 75%); background-size:200% 100%; border-radius:12px; animation:shimmer 1.5s infinite; }
    @keyframes shimmer { 0%{background-position:200%} 100%{background-position:-200%} }
    .empty-state { display:flex; flex-direction:column; align-items:center; gap:1rem; padding:4rem 1rem; text-align:center; }
    .empty-icon { font-size:3.5rem; }
    .empty-state h3 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0; }
    .empty-state p { color:var(--text-muted); font-size:.875rem; margin:0; }
    .btn-reset { padding:.5rem 1.25rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-weight:600; cursor:pointer; }
    .mp-card {
      background:var(--card-bg); border:1px solid var(--card-border); border-radius:12px; overflow:hidden; text-decoration:none; transition:transform .2s,box-shadow .2s,background .2s; display:flex; flex-direction:column;

      :root[data-theme='dark'] & {
        background: #24201d;
        border-color: rgba(255,255,255,.05);
        box-shadow: 0 2px 10px rgba(0,0,0,.35);
      }
    }
    .mp-card:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,.1); }
    .mp-thumb { height:165px; background:var(--bg-tertiary); overflow:hidden; position:relative; flex-shrink:0; }
    .mp-thumb img { width:100%; height:100%; object-fit:cover; transition:transform .35s; }
    .mp-card:hover .mp-thumb img { transform:scale(1.05); }
    .mp-thumb-ph { height:100%; display:flex; align-items:center; justify-content:center; font-size:2.5rem; background:linear-gradient(135deg,rgba(139,69,19,.06),rgba(212,175,106,.06)); }
    .mp-feat-badge    { position:absolute; top:.5rem; left:.5rem; background:rgba(0,0,0,.6); color:#ffd700; padding:.15rem .45rem; border-radius:5px; font-size:.68rem; }
    .mp-organic-badge { position:absolute; bottom:.5rem; left:.5rem; background:rgba(39,174,96,.8); color:#fff; padding:.15rem .45rem; border-radius:5px; font-size:.68rem; font-weight:700; }
    .mp-discount-badge{ position:absolute; top:.5rem; right:.5rem; background:#e74c3c; color:#fff; padding:.15rem .45rem; border-radius:5px; font-size:.7rem; font-weight:800; }
    .mp-cart-btn { position:absolute; bottom:.5rem; right:.5rem; width:34px; height:34px; border-radius:50%; border:none; background:var(--brand-gold,#d4af6a); color:#2c1a05; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,.25); transition:transform .2s, background .2s; opacity:0; transform:translateY(6px); }
    .mp-cart-btn svg { width:17px; height:17px; }
    .mp-cart-btn:hover { background:#c49a52; transform:translateY(0) scale(1.08); }
    .mp-card:hover .mp-cart-btn, .mp-cart-btn:focus-visible { opacity:1; transform:translateY(0); }
    @media(max-width:860px) { .mp-cart-btn { opacity:1; transform:translateY(0); } }
    .mp-body { padding:.875rem; flex:1; display:flex; flex-direction:column; gap:.3rem; }
    .mp-domain { font-size:.68rem; font-weight:700; color:#8B4513; text-transform:uppercase; letter-spacing:.04em; }
    h3 { font-size:.84rem; font-weight:700; color:var(--text-primary); margin:0; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    .mp-desc { font-size:.75rem; color:var(--text-muted); display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin:0; flex:1; }
    .mp-footer { display:flex; align-items:flex-end; justify-content:space-between; margin-top:.375rem; flex-wrap:wrap; gap:.25rem; }
    .mp-pricing { display:flex; flex-direction:column; gap:.1rem; }
    .mp-old-price { font-size:.72rem; color:var(--text-muted); text-decoration:line-through; }
    .mp-price { color:#8B4513; font-weight:800; font-size:.9rem; }
    .mp-origin { font-size:.7rem; color:var(--text-muted); }
    .products-list { display:flex; flex-direction:column; gap:.75rem; }
    .mp-list-item {
      display:flex; gap:1rem; background:var(--card-bg); border:1px solid var(--card-border); border-radius:12px; overflow:hidden; text-decoration:none; transition:box-shadow .2s,background .2s; align-items:stretch;

      :root[data-theme='dark'] & {
        background: #24201d;
        border-color: rgba(255,255,255,.05);
        box-shadow: 0 2px 10px rgba(0,0,0,.35);
      }
    }
    .mp-list-item:hover { box-shadow:0 4px 16px rgba(0,0,0,.08); }
    .mli-thumb { width:110px; flex-shrink:0; background:var(--bg-tertiary); overflow:hidden; }
    .mli-thumb img { width:100%; height:100%; object-fit:cover; }
    .mli-thumb-ph { width:100%; height:100%; min-height:90px; display:flex; align-items:center; justify-content:center; font-size:2rem; }
    .mli-body { flex:1; padding:.875rem .5rem .875rem 0; min-width:0; display:flex; flex-direction:column; gap:.3rem; }
    .mli-meta { display:flex; flex-wrap:wrap; gap:.375rem; margin-top:.25rem; }
    .badge-sm { padding:.15rem .5rem; border-radius:5px; font-size:.7rem; font-weight:600; }
    .badge-sm.green { background:rgba(39,174,96,.1); color:#27ae60; }
    .badge-sm.amber { background:rgba(243,156,18,.1); color:#f39c12; }
    .mli-price { padding:.875rem; display:flex; flex-direction:column; align-items:flex-end; justify-content:center; gap:.375rem; flex-shrink:0; }
    .mli-voir { font-size:.78rem; color:#8B4513; font-weight:600; white-space:nowrap; }
    .mli-cart-btn { padding:.32rem .75rem; background:var(--brand-gold,#d4af6a); color:#2c1a05; border:none; border-radius:8px; font-size:.78rem; font-weight:700; cursor:pointer; white-space:nowrap; transition:background .2s; }
    .mli-cart-btn:hover { background:#c49a52; }
    .pagination { display:flex; gap:.375rem; justify-content:center; margin-top:2rem; flex-wrap:wrap; }
    .pagination button { padding:.4rem .875rem; border:1px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); cursor:pointer; font-size:.82rem; }
    .pagination button.active { background:#8B4513; color:#fff; border-color:#8B4513; }
    .pagination button:disabled { opacity:.4; cursor:not-allowed; }
    @media(max-width:860px) { .mp-layout{grid-template-columns:1fr;} .mp-sidebar{position:relative;top:0;} }
    @media(max-width:540px) { .mp-hero h1{font-size:1.4rem;} .products-grid{grid-template-columns:repeat(2,1fr);} }
    @media(max-width:380px) { .products-grid{grid-template-columns:1fr;} }
  `]
})
export class MarketplaceComponent implements OnInit {
  private api    = inject(ApiService);
  private lang   = inject(LanguageService);
  private router = inject(Router);
  private auth   = inject(AuthService);
  private cart   = inject(CartService);

  products     = signal<any[]>([]);
  total        = signal(0);
  page         = signal(1);
  pages        = signal(1);
  pagesArray   = signal<number[]>([]);
  isLoading    = signal(true);
  activeDomain = signal('');
  viewMode     = signal<'grid' | 'list'>('grid');

  searchInput    = '';
  activeRegion   = '';
  activeSort     = '-isFeatured -createdAt';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  filterOrganic  = false;
  filterHandmade = false;

  domains         = DOMAINS;
  moroccanRegions = MOROCCAN_REGIONS;
  sortOptions     = SORT_OPTIONS;

  domainLabel(id: string): string { return DOMAINS.find(d => d.id === id)?.label || id; }
  domainIcon(id: string): string  { return DOMAINS.find(d => d.id === id)?.icon || '🛍️'; }
  discountPct(p: any): number { return Math.round((1 - p.priceDiscount / p.price) * 100); }

  addToCart(e: Event, p: any): void {
    e.preventDefault();
    e.stopPropagation();

    if (!this.auth.isLoggedIn() || this.auth.currentUser()?.role !== 'client') {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }

    this.cart.addToCart(p);
    this.cart.isCartOpen.set(true);
  }

  ngOnInit(): void { this.load(); }

  t(f: Record<string, string>): string {
    const l = this.lang.current();
    return f?.[l] || f?.['fr'] || '';
  }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = {
      page:  this.page(),
      limit: 16,
      sort:  this.activeSort
    };
    if (this.activeDomain()) params['domain']   = this.activeDomain();
    if (this.activeRegion)   params['region']   = this.activeRegion;
    if (this.searchInput)    params['search']   = this.searchInput;
    if (this.minPrice != null && this.minPrice > 0)  params['minPrice'] = this.minPrice;
    if (this.maxPrice != null && this.maxPrice > 0)  params['maxPrice'] = this.maxPrice;
    if (this.filterOrganic)  params['organic']  = true;
    if (this.filterHandmade) params['handmade'] = true;

    this.api.get<{ data: any[]; pagination: any }>('/products', params).subscribe({
      next: res => {
        this.products.set(res.data);
        this.total.set(res.pagination.total);
        this.pages.set(res.pagination.pages || 1);
        this.pagesArray.set(Array.from({ length: res.pagination.pages || 1 }, (_, i) => i + 1));
        this.isLoading.set(false);
      },
      error: () => { this.products.set([]); this.isLoading.set(false); }
    });
  }

  setDomain(id: string): void { this.activeDomain.set(id); this.page.set(1); this.load(); }
  applyFilters(): void         { this.page.set(1); this.load(); }
  doSearch(): void             { this.page.set(1); this.load(); }
  goPage(n: number): void      { this.page.set(n); this.load(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  resetAll(): void {
    this.activeDomain.set('');
    this.activeRegion   = '';
    this.searchInput    = '';
    this.activeSort     = '-isFeatured -createdAt';
    this.minPrice       = null;
    this.maxPrice       = null;
    this.filterOrganic  = false;
    this.filterHandmade = false;
    this.page.set(1);
    this.load();
  }
}
