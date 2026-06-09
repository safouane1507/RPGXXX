import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

const LOCATION_TYPES = [
  { id: 'city',         label: 'Ville' },
  { id: 'medina',       label: 'Médina' },
  { id: 'rural_region', label: 'Région Rurale' },
  { id: 'monument',     label: 'Monument' },
  { id: 'nature',       label: 'Nature' },
  { id: 'beach',        label: 'Plage' },
  { id: 'mountain',     label: 'Montagne' },
  { id: 'oasis',        label: 'Oasis' },
  { id: 'souk',         label: 'Souk' },
  { id: 'museum',       label: 'Musée' },
  { id: 'festival',     label: 'Festival' }
];

const MOROCCAN_REGIONS = [
  'Tanger-Tétouan-Al Hoceïma', 'Oriental', 'Fès-Meknès', 'Rabat-Salé-Kénitra',
  'Béni Mellal-Khénifra', 'Casablanca-Settat', 'Marrakech-Safi', 'Drâa-Tafilalet',
  'Souss-Massa', 'Guelmim-Oued Noun', 'Laâyoune-Sakia El Hamra', 'Dakhla-Oued Ed-Dahab'
];

@Component({
  selector: 'app-tourism-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<div class="tourism-admin">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h2>Gestion du Tourisme</h2>
      <p class="sub">{{ total() }} lieu(x) au total</p>
    </div>
    <button class="btn-add" (click)="openForm()">+ Nouveau lieu</button>
  </div>

  <!-- Filters -->
  <div class="filter-bar">
    <select class="fs" (change)="filterType.set($any($event.target).value); load()">
      <option value="">Tous les types</option>
      @for (t of locationTypes; track t.id) { <option [value]="t.id">{{ t.label }}</option> }
    </select>
    <input class="fs search-in" type="text" placeholder="Rechercher…"
      (input)="searchTerm.set($any($event.target).value)"
      (keyup.enter)="load()" />
    <button class="btn-search" (click)="load()">🔍</button>
  </div>

  @if (successMsg()) { <div class="alert success">✓ {{ successMsg() }}</div> }

  <!-- Table -->
  @if (isLoading()) {
    <div class="loading">Chargement…</div>
  } @else if (places().length === 0) {
    <div class="empty">Aucun lieu trouvé. Ajoutez le premier !</div>
  } @else {
    <div class="table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Photo</th><th>Nom</th><th>Type</th><th>Lieu</th>
            <th>Statut</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (p of places(); track p._id) {
            <tr>
              <td class="td-thumb">
                @if (p.coverImage) {
                  <img [src]="p.coverImage" [alt]="p.name?.fr" />
                } @else {
                  <div class="thumb-ph">🗺️</div>
                }
              </td>
              <td>
                <strong>{{ p.name?.fr || '—' }}</strong>
                @if (p.name?.ar) { <small class="ar-name">{{ p.name.ar }}</small> }
                @if (p.isFeatured) { <span class="feat-tag">★ Mis en avant</span> }
              </td>
              <td><span class="type-chip" [attr.data-type]="p.locationType">{{ typeLabel(p.locationType) }}</span></td>
              <td class="td-loc">
                {{ p.location?.city || '—' }}
                @if (p.location?.region) { <small>{{ p.location.region }}</small> }
              </td>
              <td>
                <span class="status-dot" [class.active]="p.isActive" [class.inactive]="!p.isActive">
                  {{ p.isActive ? 'Actif' : 'Inactif' }}
                </span>
              </td>
              <td class="td-actions">
                <button class="act edit" title="Modifier" (click)="openForm(p)">✏️</button>
                <button class="act toggle" [title]="p.isActive ? 'Désactiver' : 'Activer'"
                  (click)="toggleActive(p)">{{ p.isActive ? '🔴' : '🟢' }}</button>
                <button class="act feat" [title]="p.isFeatured ? 'Retirer vedette' : 'Mettre en avant'"
                  (click)="toggleFeatured(p)">{{ p.isFeatured ? '⭐' : '☆' }}</button>
                <button class="act del" title="Supprimer" (click)="deletePlace(p._id)">🗑️</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
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

<!-- ── Form Modal ──────────────────────────────────────────────── -->
@if (formOpen()) {
  <div class="overlay" (click)="closeForm()"></div>
  <div class="modal">
    <div class="modal-header">
      <h3>{{ editId() ? 'Modifier le lieu' : 'Nouveau lieu touristique' }}</h3>
      <button class="close" (click)="closeForm()">✕</button>
    </div>
    <form [formGroup]="form" (ngSubmit)="submit()" class="modal-form">

      <!-- Noms -->
      <div class="section-title">Nom du lieu</div>
      <div class="row-2">
        <div class="field">
          <label>Nom (FR) *</label>
          <input formControlName="nameFr" placeholder="Médina de Fès…" />
        </div>
        <div class="field">
          <label>الاسم (AR)</label>
          <input formControlName="nameAr" placeholder="مدينة فاس…" dir="rtl" />
        </div>
      </div>

      <!-- Type + Région -->
      <div class="row-2">
        <div class="field">
          <label>Type de lieu *</label>
          <select formControlName="locationType">
            <option value="">— Choisir —</option>
            @for (t of locationTypes; track t.id) { <option [value]="t.id">{{ t.label }}</option> }
          </select>
        </div>
        <div class="field">
          <label>Région *</label>
          <select formControlName="region">
            <option value="">— Région —</option>
            @for (r of moroccanRegions; track r) { <option [value]="r">{{ r }}</option> }
          </select>
        </div>
      </div>

      <!-- Ville -->
      <div class="field">
        <label>Ville</label>
        <input formControlName="city" placeholder="Marrakech, Chefchaouen…" />
      </div>

      <!-- Image de couverture -->
      <div class="field">
        <label>Image de couverture (URL)</label>
        <input formControlName="coverImage" placeholder="https://…/photo.jpg" />
        @if (form.value.coverImage) {
          <div class="img-preview"><img [src]="form.value.coverImage" alt="preview" /></div>
        }
      </div>

      <!-- Descriptions -->
      <div class="section-title">Descriptions</div>
      <div class="field">
        <label>Description courte (FR) *</label>
        <textarea formControlName="shortDescFr" rows="2" placeholder="Courte présentation du lieu…"></textarea>
      </div>
      <div class="field">
        <label>وصف مختصر (AR)</label>
        <textarea formControlName="shortDescAr" rows="2" placeholder="وصف مختصر…" dir="rtl"></textarea>
      </div>
      <div class="field">
        <label>Article complet (FR)</label>
        <textarea formControlName="fullArticleFr" rows="5" placeholder="Article détaillé sur le lieu…"></textarea>
      </div>

      <!-- Infos pratiques -->
      <div class="section-title">Informations pratiques</div>
      <div class="row-2">
        <div class="field">
          <label>Meilleure saison (FR)</label>
          <input formControlName="bestSeasonFr" placeholder="Printemps, Automne…" />
        </div>
        <div class="field">
          <label>Droits d'entrée (FR)</label>
          <input formControlName="entryFeeFr" placeholder="Gratuit / 20 MAD…" />
        </div>
      </div>
      <div class="field">
        <label>Comment y accéder (FR)</label>
        <textarea formControlName="howToGetFr" rows="2" placeholder="Bus n°7 depuis Bab Doukala…"></textarea>
      </div>

      <!-- Coordonnées GPS -->
      <div class="section-title">Coordonnées GPS (optionnel)</div>
      <div class="row-2">
        <div class="field">
          <label>Latitude</label>
          <input formControlName="lat" type="number" step="0.000001" placeholder="31.6295" />
        </div>
        <div class="field">
          <label>Longitude</label>
          <input formControlName="lng" type="number" step="0.000001" placeholder="-7.9811" />
        </div>
      </div>

      <!-- Statut -->
      <div class="field">
        <label>Activer immédiatement</label>
        <div class="toggle-row">
          <input type="checkbox" formControlName="isActive" id="isActiveChk" />
          <label for="isActiveChk" class="toggle-label">Lieu visible sur le site public</label>
        </div>
      </div>

      @if (formError()) { <div class="alert error">{{ formError() }}</div> }

      <div class="modal-footer">
        <button type="button" class="btn-ghost" (click)="closeForm()">Annuler</button>
        <button type="submit" class="btn-save" [disabled]="saving()">
          @if (saving()) { <span class="spinner"></span> }
          {{ editId() ? 'Mettre à jour' : 'Créer le lieu' }}
        </button>
      </div>
    </form>
  </div>
}
  `,
  styles: [`
    .tourism-admin { display:flex; flex-direction:column; gap:1.25rem; }
    .page-header { display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:.75rem; }
    h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 .2rem; }
    .sub { font-size:.8rem; color:var(--text-muted); margin:0; }
    .btn-add { padding:.5rem 1rem; background:#27ae60; color:#fff; border:none; border-radius:8px; font-weight:600; font-size:.85rem; cursor:pointer; white-space:nowrap; }
    .filter-bar { display:flex; gap:.625rem; flex-wrap:wrap; align-items:center; }
    .fs { padding:.375rem .625rem; border:1px solid var(--card-border); border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .search-in { min-width:180px; }
    .btn-search { padding:.375rem .75rem; background:var(--bg-tertiary); border:1px solid var(--card-border); border-radius:6px; cursor:pointer; font-size:.85rem; }
    .alert { padding:.6rem .875rem; border-radius:8px; font-size:.84rem; font-weight:500; }
    .alert.success { background:rgba(39,174,96,.08); border:1px solid rgba(39,174,96,.2); color:#27ae60; }
    .alert.error   { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; }
    .loading,.empty { padding:2rem; text-align:center; color:var(--text-muted); font-size:.875rem; }
    .table-wrap { overflow-x:auto; }
    .admin-table { width:100%; border-collapse:collapse; font-size:.82rem; }
    .admin-table thead th { padding:.6rem .875rem; text-align:left; font-size:.72rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:.05em; border-bottom:2px solid var(--card-border); white-space:nowrap; }
    .admin-table tbody tr { border-bottom:1px solid var(--card-border); transition:background .15s; }
    .admin-table tbody tr:hover { background:var(--bg-secondary); }
    .admin-table td { padding:.6rem .875rem; color:var(--text-primary); vertical-align:middle; }
    .td-thumb { width:60px; }
    .td-thumb img { width:52px; height:40px; object-fit:cover; border-radius:6px; display:block; }
    .thumb-ph { width:52px; height:40px; background:var(--bg-tertiary); border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:1.25rem; }
    .ar-name { display:block; font-size:.73rem; color:var(--text-muted); direction:rtl; }
    .feat-tag { display:inline-block; margin-left:.4rem; padding:.1rem .4rem; background:rgba(243,156,18,.1); color:#f39c12; border-radius:4px; font-size:.68rem; font-weight:700; }
    .type-chip { padding:.18rem .5rem; border-radius:5px; font-size:.7rem; font-weight:600; background:rgba(39,174,96,.08); color:#27ae60; }
    .td-loc small { display:block; font-size:.72rem; color:var(--text-muted); }
    .status-dot { padding:.2rem .55rem; border-radius:10px; font-size:.7rem; font-weight:700; }
    .status-dot.active   { background:rgba(39,174,96,.1); color:#27ae60; }
    .status-dot.inactive { background:var(--bg-tertiary); color:var(--text-muted); }
    .td-actions { display:flex; gap:.3rem; }
    .act { background:none; border:none; cursor:pointer; padding:.25rem .4rem; border-radius:5px; font-size:.9rem; transition:background .15s; }
    .act:hover { background:var(--bg-tertiary); }
    .pagination { display:flex; gap:.375rem; justify-content:center; flex-wrap:wrap; }
    .pagination button { padding:.3rem .7rem; border:1px solid var(--card-border); border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); cursor:pointer; font-size:.8rem; }
    .pagination button.active { background:#27ae60; color:#fff; border-color:#27ae60; }
    .pagination button:disabled { opacity:.4; cursor:not-allowed; }
    /* Modal */
    .overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:50; }
    .modal { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); width:min(640px,96vw); max-height:90vh; overflow-y:auto; background:var(--card-bg); border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,.22); z-index:51; }
    .modal-header { display:flex; align-items:center; justify-content:space-between; padding:1.25rem 1.5rem; border-bottom:1px solid var(--card-border); position:sticky; top:0; background:var(--card-bg); z-index:1; }
    .modal-header h3 { font-size:1rem; font-weight:800; color:var(--text-primary); margin:0; }
    .close { background:none; border:none; font-size:1.1rem; cursor:pointer; color:var(--text-muted); }
    .modal-form { padding:1.5rem; display:flex; flex-direction:column; gap:.875rem; }
    .section-title { font-size:.75rem; font-weight:700; color:#27ae60; text-transform:uppercase; letter-spacing:.06em; padding-bottom:.25rem; border-bottom:1px solid var(--card-border); margin-top:.25rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.875rem; }
    .field { display:flex; flex-direction:column; gap:.35rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    input, select, textarea { padding:.55rem .8rem; border:1.5px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; font-family:inherit; }
    input:focus, select:focus, textarea:focus { border-color:#27ae60; }
    textarea { resize:vertical; }
    .img-preview { margin-top:.375rem; } .img-preview img { max-height:100px; border-radius:8px; object-fit:cover; }
    .toggle-row { display:flex; align-items:center; gap:.5rem; }
    .toggle-row input[type=checkbox] { width:auto; }
    .toggle-label { font-size:.82rem; font-weight:500; color:var(--text-primary); cursor:pointer; }
    .modal-footer { display:flex; justify-content:flex-end; gap:.75rem; padding-top:.5rem; border-top:1px solid var(--card-border); }
    .btn-ghost { padding:.5rem .875rem; background:var(--bg-secondary); border:1px solid var(--card-border); color:var(--text-secondary); border-radius:8px; font-size:.875rem; cursor:pointer; }
    .btn-save { padding:.5rem 1.25rem; background:#27ae60; color:#fff; border:none; border-radius:8px; font-size:.875rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:.375rem; }
    .btn-save:disabled { opacity:.65; cursor:not-allowed; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; display:inline-block; }
    @keyframes spin { to { transform:rotate(360deg); } }
    @media(max-width:520px) { .row-2 { grid-template-columns:1fr; } }
  `]
})
export class TourismAdminComponent implements OnInit {
  private api = inject(ApiService);
  private fb  = inject(FormBuilder);

  places      = signal<any[]>([]);
  total       = signal(0);
  page        = signal(1);
  pages       = signal(1);
  pagesArray  = signal<number[]>([]);
  isLoading   = signal(true);
  filterType  = signal('');
  searchTerm  = signal('');
  formOpen    = signal(false);
  editId      = signal<string | null>(null);
  saving      = signal(false);
  successMsg  = signal('');
  formError   = signal('');

  locationTypes  = LOCATION_TYPES;
  moroccanRegions = MOROCCAN_REGIONS;

  typeLabel(id: string): string {
    return LOCATION_TYPES.find(t => t.id === id)?.label || id;
  }

  form = this.fb.group({
    nameFr:        ['', Validators.required],
    nameAr:        [''],
    locationType:  ['', Validators.required],
    region:        ['', Validators.required],
    city:          [''],
    coverImage:    [''],
    shortDescFr:   ['', Validators.required],
    shortDescAr:   [''],
    fullArticleFr: [''],
    bestSeasonFr:  [''],
    entryFeeFr:    [''],
    howToGetFr:    [''],
    lat:           [null as number | null],
    lng:           [null as number | null],
    isActive:      [false]
  });

  ngOnInit(): void { this.load(); }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = { page: this.page(), limit: 20 };
    if (this.filterType()) params['locationType'] = this.filterType();
    if (this.searchTerm()) params['search'] = this.searchTerm();

    this.api.get<{ data: any[]; pagination: any }>('/tourism/admin-all', params).subscribe({
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

  goPage(n: number): void { this.page.set(n); this.load(); }

  openForm(place?: any): void {
    this.formError.set('');
    if (place) {
      this.editId.set(place._id);
      const lat = place.location?.coordinates?.coordinates?.[1] ?? null;
      const lng = place.location?.coordinates?.coordinates?.[0] ?? null;
      this.form.patchValue({
        nameFr:        place.name?.fr || '',
        nameAr:        place.name?.ar || '',
        locationType:  place.locationType || '',
        region:        place.location?.region || '',
        city:          place.location?.city || '',
        coverImage:    place.coverImage || '',
        shortDescFr:   place.shortDescription?.fr || '',
        shortDescAr:   place.shortDescription?.ar || '',
        fullArticleFr: place.fullArticle?.fr || '',
        bestSeasonFr:  place.practicalInfo?.bestSeason?.fr || '',
        entryFeeFr:    place.practicalInfo?.entryFee?.fr || '',
        howToGetFr:    place.practicalInfo?.howToGet?.fr || '',
        lat, lng,
        isActive:      place.isActive ?? false
      });
    } else {
      this.editId.set(null);
      this.form.reset({ isActive: false });
    }
    this.formOpen.set(true);
  }

  closeForm(): void { this.formOpen.set(false); }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.formError.set('');

    const v = this.form.getRawValue();
    const payload: any = {
      name:             { fr: v.nameFr, ar: v.nameAr },
      locationType:     v.locationType,
      coverImage:       v.coverImage || null,
      shortDescription: { fr: v.shortDescFr, ar: v.shortDescAr },
      fullArticle:      { fr: v.fullArticleFr },
      location: {
        region: v.region,
        city:   v.city
      },
      practicalInfo: {
        bestSeason: { fr: v.bestSeasonFr },
        entryFee:   { fr: v.entryFeeFr },
        howToGet:   { fr: v.howToGetFr }
      },
      isActive: v.isActive
    };

    if (v.lat && v.lng) {
      payload.location.coordinates = {
        type:        'Point',
        coordinates: [Number(v.lng), Number(v.lat)]
      };
    }

    const req = this.editId()
      ? this.api.put(`/tourism/${this.editId()}`, payload)
      : this.api.post('/tourism', payload);

    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.successMsg.set(this.editId() ? 'Lieu mis à jour !' : 'Lieu créé avec succès !');
        this.closeForm();
        this.load();
        setTimeout(() => this.successMsg.set(''), 4000);
      },
      error: err => {
        this.saving.set(false);
        this.formError.set(err.error?.error || 'Erreur lors de l\'enregistrement');
      }
    });
  }

  toggleActive(place: any): void {
    this.api.patch(`/tourism/${place._id}/toggle`, {}).subscribe({
      next: (res: any) => {
        const updated = res.data;
        this.places.update(list => list.map(p => p._id === updated._id ? { ...p, isActive: updated.isActive } : p));
        this.successMsg.set(updated.isActive ? 'Lieu activé.' : 'Lieu désactivé.');
        setTimeout(() => this.successMsg.set(''), 3000);
      }
    });
  }

  toggleFeatured(place: any): void {
    this.api.patch(`/tourism/${place._id}/feature`, {}).subscribe({
      next: (res: any) => {
        const updated = res.data;
        this.places.update(list => list.map(p => p._id === updated._id ? { ...p, isFeatured: updated.isFeatured } : p));
        this.successMsg.set(updated.isFeatured ? '★ Mis en avant.' : 'Retiré de la vedette.');
        setTimeout(() => this.successMsg.set(''), 3000);
      }
    });
  }

  deletePlace(id: string): void {
    if (!confirm('Supprimer ce lieu touristique ?')) return;
    this.api.delete(`/tourism/${id}`).subscribe({
      next: () => {
        this.places.update(list => list.filter(p => p._id !== id));
        this.total.update(n => n - 1);
        this.successMsg.set('Lieu supprimé.');
        setTimeout(() => this.successMsg.set(''), 3000);
      }
    });
  }
}
