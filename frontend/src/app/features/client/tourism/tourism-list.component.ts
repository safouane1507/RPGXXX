import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

const LOCATION_TYPES = [
  { id: '',             label: { fr: 'Tout voir', ar: 'الكل', en: 'All' } },
  { id: 'city',         label: { fr: 'Villes',    ar: 'مدن',  en: 'Cities' } },
  { id: 'medina',       label: { fr: 'Médinas',   ar: 'مدينة قديمة', en: 'Medinas' } },
  { id: 'monument',     label: { fr: 'Monuments', ar: 'معالم', en: 'Monuments' } },
  { id: 'nature',       label: { fr: 'Nature',    ar: 'طبيعة', en: 'Nature' } },
  { id: 'beach',        label: { fr: 'Plages',    ar: 'شواطئ', en: 'Beaches' } },
  { id: 'mountain',     label: { fr: 'Montagnes', ar: 'جبال',  en: 'Mountains' } },
  { id: 'oasis',        label: { fr: 'Oasis',     ar: 'واحة', en: 'Oases' } },
  { id: 'souk',         label: { fr: 'Souks',     ar: 'أسواق', en: 'Souks' } },
  { id: 'rural_region', label: { fr: 'Régions Rurales', ar: 'المناطق القروية', en: 'Rural Regions' } },
  { id: 'museum',       label: { fr: 'Musées',    ar: 'متاحف', en: 'Museums' } },
  { id: 'festival',     label: { fr: 'Festivals', ar: 'مهرجانات', en: 'Festivals' } }
];

const MOROCCAN_REGIONS = [
  'Tanger-Tétouan-Al Hoceïma', 'Oriental', 'Fès-Meknès', 'Rabat-Salé-Kénitra',
  'Béni Mellal-Khénifra', 'Casablanca-Settat', 'Marrakech-Safi', 'Drâa-Tafilalet',
  'Souss-Massa', 'Guelmim-Oued Noun', 'Laâyoune-Sakia El Hamra', 'Dakhla-Oued Ed-Dahab'
];

@Component({
  selector: 'app-tourism-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
  template: `
<section class="tourism-page">

  <!-- Hero -->
  <div class="tourism-hero">
    <div class="container">
      <h1>{{ 'TOURISM.TITLE' | translate }}</h1>
      <p>{{ 'TOURISM.SUBTITLE' | translate }}</p>
      <!-- Search bar -->
      <div class="hero-search">
        <input [(ngModel)]="searchInput" (keyup.enter)="doSearch()"
          placeholder="Rechercher une destination…" class="hero-input" />
        <button (click)="doSearch()" class="hero-btn">🔍</button>
      </div>
    </div>
  </div>

  <!-- Type Tabs -->
  <div class="type-tabs-wrap">
    <div class="container">
      <div class="type-tabs">
        @for (tab of locationTypes; track tab.id) {
          <button class="type-tab"
            [class.active]="activeType() === tab.id"
            (click)="setType(tab.id)">
            {{ t(tab.label) }}
          </button>
        }
      </div>
    </div>
  </div>

  <div class="container section-spacing">

    <!-- Region filter + count -->
    <div class="list-toolbar">
      <p class="result-count">
        @if (total() > 0) { <strong>{{ total() }}</strong> destination(s) }
        @else { Aucune destination trouvée }
      </p>
      <select class="region-select" [(ngModel)]="activeRegion" (ngModelChange)="onRegionChange()">
        <option value="">Toutes les régions</option>
        @for (r of moroccanRegions; track r) { <option [value]="r">{{ r }}</option> }
      </select>
    </div>

    <!-- Grid -->
    @if (isLoading()) {
      <div class="loading-grid">
        @for (_ of [1,2,3,4,5,6]; track $index) { <div class="skeleton-card"></div> }
      </div>
    } @else if (places().length === 0) {
      <div class="empty-state">
        <div class="empty-icon">🌍</div>
        <p>Aucune destination ne correspond à votre recherche.</p>
        <button class="btn-reset" (click)="resetFilters()">Réinitialiser les filtres</button>
      </div>
    } @else {
      <div class="tourism-grid">
        @for (place of places(); track place._id) {
          <a [routerLink]="['/tourism', place.slug]" class="tourism-card">
            <div class="tc-cover">
              @if (place.coverImage) {
                <img [src]="place.coverImage" [alt]="t(place.name)" loading="lazy" />
              } @else {
                <div class="tc-cover-ph"></div>
              }
              @if (place.isFeatured) {
                <div class="featured-badge">⭐ Coup de cœur</div>
              }
              <div class="tc-type-pill">{{ typeLabel(place.locationType) }}</div>
            </div>
            <div class="tc-body">
              <h3>{{ t(place.name) }}</h3>
              <p>{{ t(place.shortDescription) }}</p>
              @if (place.location?.city || place.location?.region) {
                <span class="tc-loc">
                  📍 {{ place.location?.city || place.location?.region }}
                  @if (place.location?.city && place.location?.region) {
                    <span class="tc-region">, {{ place.location.region }}</span>
                  }
                </span>
              }
            </div>
          </a>
        }
      </div>

      <!-- Pagination -->
      @if (pages() > 1) {
        <div class="pagination">
          <button [disabled]="page() === 1" (click)="goPage(page() - 1)">‹ Précédent</button>
          @for (n of pagesArray(); track n) {
            <button [class.active]="n === page()" (click)="goPage(n)">{{ n }}</button>
          }
          <button [disabled]="page() === pages()" (click)="goPage(page() + 1)">Suivant ›</button>
        </div>
      }
    }
  </div>
</section>
  `,
  styles: [`
    .tourism-page { min-height:70vh; }
    .tourism-hero { background:linear-gradient(135deg,#0d2818,#1a4731); padding:3.5rem 0 2.5rem; color:#fff; }
    .tourism-hero h1 { font-size:1.9rem; font-weight:900; margin-bottom:.5rem; }
    .tourism-hero p { opacity:.75; font-size:.95rem; margin-bottom:1.5rem; }
    .hero-search { display:flex; gap:.5rem; max-width:480px; }
    .hero-input { flex:1; padding:.65rem 1rem; border:none; border-radius:10px; font-size:.9rem; outline:none; background:rgba(255,255,255,.15); color:#fff; backdrop-filter:blur(4px); }
    .hero-input::placeholder { color:rgba(255,255,255,.6); }
    .hero-btn { padding:.65rem 1.1rem; background:#27ae60; border:none; border-radius:10px; cursor:pointer; font-size:1rem; }
    .type-tabs-wrap { background:var(--card-bg); border-bottom:1px solid var(--card-border); position:sticky; top:0; z-index:10; }
    .type-tabs { display:flex; gap:.25rem; overflow-x:auto; padding:.5rem 0; scrollbar-width:none; }
    .type-tabs::-webkit-scrollbar { display:none; }
    .type-tab { padding:.4rem .875rem; border:none; border-radius:20px; background:transparent; color:var(--text-secondary); font-size:.82rem; font-weight:600; cursor:pointer; white-space:nowrap; transition:all .2s; }
    .type-tab.active, .type-tab:hover { background:#27ae60; color:#fff; }
    .section-spacing { padding-top:1.75rem; padding-bottom:3rem; }
    .list-toolbar { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.75rem; margin-bottom:1.25rem; }
    .result-count { font-size:.875rem; color:var(--text-muted); margin:0; }
    .result-count strong { color:var(--text-primary); }
    .region-select { padding:.4rem .75rem; border:1px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .loading-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.25rem; }
    .skeleton-card { height:300px; background:linear-gradient(90deg,var(--bg-secondary) 25%,var(--bg-tertiary) 50%,var(--bg-secondary) 75%); background-size:200% 100%; border-radius:14px; animation:shimmer 1.5s infinite; }
    @keyframes shimmer { 0%{background-position:200%} 100%{background-position:-200%} }
    .empty-state { display:flex; flex-direction:column; align-items:center; gap:1rem; padding:4rem 1rem; text-align:center; }
    .empty-icon { font-size:3rem; }
    .empty-state p { color:var(--text-muted); font-size:.925rem; }
    .btn-reset { padding:.5rem 1.25rem; background:#27ae60; color:#fff; border:none; border-radius:8px; font-weight:600; cursor:pointer; }
    .tourism-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.25rem; }
    .tourism-card { text-decoration:none; background:var(--card-bg); border:1px solid var(--card-border); border-radius:14px; overflow:hidden; transition:transform .2s,box-shadow .2s; display:flex; flex-direction:column; }
    .tourism-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,.1); }
    .tc-cover { height:200px; background:var(--bg-tertiary); overflow:hidden; position:relative; flex-shrink:0; }
    .tc-cover img { width:100%; height:100%; object-fit:cover; transition:transform .4s; }
    .tourism-card:hover .tc-cover img { transform:scale(1.04); }
    .tc-cover-ph { height:100%; background:linear-gradient(135deg,rgba(39,174,96,.08),rgba(39,77,22,.12)); display:flex; align-items:center; justify-content:center; font-size:3rem; }
    .tc-cover-ph::after { content:"🌍"; }
    .featured-badge { position:absolute; top:.625rem; left:.625rem; background:rgba(0,0,0,.65); color:#ffd700; padding:.2rem .6rem; border-radius:6px; font-size:.7rem; font-weight:700; backdrop-filter:blur(4px); }
    .tc-type-pill { position:absolute; bottom:.625rem; right:.625rem; background:rgba(39,174,96,.85); color:#fff; padding:.2rem .6rem; border-radius:6px; font-size:.7rem; font-weight:700; backdrop-filter:blur(4px); }
    .tc-body { padding:1rem; flex:1; display:flex; flex-direction:column; gap:.375rem; }
    h3 { font-size:.975rem; font-weight:700; color:var(--text-primary); margin:0; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden; }
    p { font-size:.8rem; color:var(--text-muted); display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; margin:0; flex:1; }
    .tc-loc { font-size:.75rem; color:var(--text-muted); margin-top:.25rem; }
    .tc-region { opacity:.7; }
    .pagination { display:flex; gap:.375rem; justify-content:center; margin-top:2rem; flex-wrap:wrap; }
    .pagination button { padding:.4rem .875rem; border:1px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); cursor:pointer; font-size:.82rem; font-weight:500; }
    .pagination button.active { background:#27ae60; color:#fff; border-color:#27ae60; }
    .pagination button:disabled { opacity:.4; cursor:not-allowed; }
    @media(max-width:640px) { .tourism-hero h1{font-size:1.4rem;} .tourism-grid{grid-template-columns:1fr 1fr;} }
    @media(max-width:420px) { .tourism-grid{grid-template-columns:1fr;} }
  `]
})
export class TourismListComponent implements OnInit {
  private api  = inject(ApiService);
  private lang = inject(LanguageService);

  places      = signal<any[]>([]);
  total       = signal(0);
  page        = signal(1);
  pages       = signal(1);
  pagesArray  = signal<number[]>([]);
  isLoading   = signal(true);
  activeType  = signal('');

  searchInput  = '';
  activeRegion = '';

  locationTypes   = LOCATION_TYPES;
  moroccanRegions = MOROCCAN_REGIONS;

  typeLabel(id: string): string {
    const l = this.lang.current();
    const found = LOCATION_TYPES.find(t => t.id === id);
    return found ? (found.label as any)[l] || found.label.fr : id;
  }

  ngOnInit(): void { this.load(); }

  t(f: Record<string, string>): string {
    const l = this.lang.current();
    return f?.[l] || f?.['fr'] || '';
  }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = { page: this.page(), limit: 12 };
    if (this.activeType())  params['locationType'] = this.activeType();
    if (this.activeRegion) params['region']       = this.activeRegion;
    if (this.searchInput)  params['search']       = this.searchInput;

    this.api.get<{ data: any[]; pagination: any }>('/tourism', params).subscribe({
      next: res => {
        this.places.set(res.data);
        this.total.set(res.pagination.total);
        this.pages.set(res.pagination.pages || 1);
        this.pagesArray.set(Array.from({ length: res.pagination.pages || 1 }, (_, i) => i + 1));
        this.isLoading.set(false);
      },
      error: () => { this.places.set([]); this.isLoading.set(false); }
    });
  }

  setType(id: string): void { this.activeType.set(id); this.page.set(1); this.load(); }
  onRegionChange(): void    { this.page.set(1); this.load(); }
  doSearch(): void          { this.page.set(1); this.load(); }
  goPage(n: number): void   { this.page.set(n); this.load(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  resetFilters(): void {
    this.activeType.set('');
    this.activeRegion = '';
    this.searchInput  = '';
    this.page.set(1);
    this.load();
  }
}
