import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

interface AnnuaireRow {
  _id:           string;
  structureName: string;
  domain:        string;
  structureType: string;
  isActive:      boolean;
  isVerified:    boolean;
  isFeatured:    boolean;
  contact:       { city?: string; phone?: string; email?: string };
  createdAt:     string;
}

interface AnnuaireDetail extends AnnuaireRow {
  slogan:       { fr?: string; ar?: string };
  description:  { fr?: string; ar?: string };
  contact:      { city?: string; phone?: string; email?: string; address?: string; website?: string; region?: string };
  socialMedia:  { facebook?: string; instagram?: string; youtube?: string };
  proActor:     { email?: string; firstName?: string; lastName?: string };
  foundedYear?: number;
  employeeCount?: number;
  adminNotes?:  string;
}

const DOMAINS = [
  { id: 'artisanat_service',   label: 'Artisanat de Service' },
  { id: 'produits_mer',        label: 'Produits de la Mer' },
  { id: 'habillement_mode',    label: 'Habillement & Mode' },
  { id: 'tourisme_rural',      label: 'Tourisme Rural' },
  { id: 'artisanat_art',       label: "Artisanat d'art" },
  { id: 'agriculture_bio',     label: 'Agriculture Bio' },
  { id: 'soin_beaute',         label: 'Soin & Beauté' },
  { id: 'produit_terroir',     label: 'Produit de Terroir' },
  { id: 'artisanat_culinaire', label: 'Artisanat Culinaire' }
];

@Component({
  selector: 'app-annuaire-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<div class="annuaire-admin">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h2>Gestion des Annuaires</h2>
      <div class="kpis">
        <span class="kpi total">Total : {{ total() }}</span>
        <span class="kpi active">Actifs : {{ activeCount() }}</span>
        <span class="kpi pending">En attente : {{ pendingCount() }}</span>
      </div>
    </div>
    <div class="header-actions">
      <button class="btn-export" (click)="exportCsv()" title="Exporter CSV">📥 CSV</button>
      <button class="btn-add" (click)="openCreateForm()">+ Créer une fiche</button>
    </div>
  </div>

  <!-- Filters -->
  <div class="filter-bar">
    <select class="fs" (change)="filterDomain.set($any($event.target).value); load()">
      <option value="">Tous les domaines</option>
      @for (d of domains; track d.id) { <option [value]="d.id">{{ d.label }}</option> }
    </select>
    <select class="fs" (change)="filterActive.set($any($event.target).value); load()">
      <option value="">Tous les statuts</option>
      <option value="true">Actifs</option>
      <option value="false">En attente</option>
    </select>
    <input class="search-input" type="text" placeholder="🔍 Rechercher…"
           (keyup.enter)="filterSearch.set($any($event.target).value); load()"
           [value]="filterSearch()" />
  </div>

  @if (isLoading()) {
    <div class="loading">Chargement…</div>
  } @else {
    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th>Structure</th>
            <th>Domaine</th>
            <th>Type</th>
            <th>Ville</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (row of entries(); track row._id) {
            <tr>
              <td class="col-name">
                <div class="av">{{ row.structureName.charAt(0) }}</div>
                <div>
                  <div class="name">{{ row.structureName }}</div>
                  @if (row.isFeatured) { <span class="feat-badge">⭐ Mis en avant</span> }
                </div>
              </td>
              <td><span class="chip domain">{{ domainLabel(row.domain) }}</span></td>
              <td><span class="chip type">{{ row.structureType }}</span></td>
              <td>{{ row.contact.city || '—' }}</td>
              <td>
                <span class="badge" [class.active]="row.isActive" [class.pending]="!row.isActive">
                  {{ row.isActive ? 'Actif' : 'En attente' }}
                </span>
                @if (row.isVerified) { <span class="chip verified">✓ Vérifié</span> }
              </td>
              <td class="actions">
                <button class="act-btn detail" (click)="openDetail(row._id)" title="Voir détail">👁️</button>
                <button class="act-btn" [class.activate]="!row.isActive" [class.deactivate]="row.isActive"
                        (click)="toggle(row)">
                  {{ row.isActive ? 'Désactiver' : 'Activer' }}
                </button>
                <button class="act-btn feature" (click)="toggleFeature(row)" title="Mise en avant">
                  {{ row.isFeatured ? '★' : '☆' }}
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    @if (pages() > 1) {
      <div class="pagination">
        <button [disabled]="page() === 1" (click)="goTo(page() - 1)">‹</button>
        @for (_ of pagesArray(); track $index) {
          <button [class.cur]="$index + 1 === page()" (click)="goTo($index + 1)">{{ $index + 1 }}</button>
        }
        <button [disabled]="page() === pages()" (click)="goTo(page() + 1)">›</button>
      </div>
    }
  }

</div>

<!-- ── Detail Modal ───────────────────────────────────────── -->
@if (detailOpen()) {
  <div class="overlay" (click)="detailOpen.set(false)"></div>
  <div class="modal">
    @if (loadingDetail()) {
      <div class="modal-loading">Chargement…</div>
    } @else if (detail()) {
      <div class="modal-header">
        <h3>{{ detail()!.structureName }}</h3>
        <button class="close" (click)="detailOpen.set(false)">✕</button>
      </div>
      <div class="modal-body">
        <div class="detail-grid">
          <div class="detail-row"><span>Domaine</span><span>{{ domainLabel(detail()!.domain) }}</span></div>
          <div class="detail-row"><span>Type</span><span>{{ detail()!.structureType }}</span></div>
          <div class="detail-row"><span>Fondée en</span><span>{{ detail()!.foundedYear || '—' }}</span></div>
          <div class="detail-row"><span>Employés</span><span>{{ detail()!.employeeCount || '—' }}</span></div>
          <div class="detail-row"><span>Contact</span><span>{{ detail()!.contact.email || '—' }}</span></div>
          <div class="detail-row"><span>Téléphone</span><span>{{ detail()!.contact.phone || '—' }}</span></div>
          <div class="detail-row"><span>Ville</span><span>{{ detail()!.contact.city || '—' }}</span></div>
          <div class="detail-row"><span>Région</span><span>{{ detail()!.contact.region || '—' }}</span></div>
          <div class="detail-row"><span>Compte Pro</span><span>{{ detail()!.proActor.email || '—' }}</span></div>
        </div>
        @if (detail()!.description.fr) {
          <div class="detail-desc">
            <strong>Description (FR)</strong>
            <p>{{ detail()!.description.fr }}</p>
          </div>
        }
        @if (detail()!.slogan.fr) {
          <div class="detail-desc">
            <strong>Slogan</strong>
            <p>{{ detail()!.slogan.fr }}</p>
          </div>
        }
      </div>
      <div class="modal-footer">
        <button class="btn-ghost" (click)="detailOpen.set(false)">Fermer</button>
        <button class="btn-toggle" [class.activate]="!detail()!.isActive" [class.deactivate]="detail()!.isActive"
                (click)="toggleFromDetail()">
          {{ detail()!.isActive ? 'Désactiver la fiche' : 'Activer la fiche' }}
        </button>
      </div>
    }
  </div>
}

<!-- ── Create Form Modal ──────────────────────────────────── -->
@if (createOpen()) {
  <div class="overlay" (click)="createOpen.set(false)"></div>
  <div class="modal">
    <div class="modal-header">
      <h3>Créer une fiche manuellement</h3>
      <button class="close" (click)="createOpen.set(false)">✕</button>
    </div>
    <form [formGroup]="createForm" (ngSubmit)="submitCreate()" class="modal-form">
      <div class="field">
        <label>Nom de la structure *</label>
        <input formControlName="structureName" placeholder="Coopérative Argane de l'Atlas" />
      </div>
      <div class="row-2">
        <div class="field">
          <label>Domaine *</label>
          <select formControlName="domain">
            <option value="">— Choisir —</option>
            @for (d of domains; track d.id) { <option [value]="d.id">{{ d.label }}</option> }
          </select>
        </div>
        <div class="field">
          <label>Type *</label>
          <select formControlName="structureType">
            <option value="">— Choisir —</option>
            <option value="cooperative">Coopérative</option>
            <option value="sarl">SARL</option>
            <option value="association">Association</option>
            <option value="artisan_independant">Artisan indépendant</option>
            <option value="entreprise_individuelle">Entreprise individuelle</option>
            <option value="groupement_interet_economique">GIE</option>
          </select>
        </div>
      </div>
      <div class="row-2">
        <div class="field">
          <label>Email de contact</label>
          <input formControlName="email" type="email" placeholder="contact@structure.ma" />
        </div>
        <div class="field">
          <label>Téléphone</label>
          <input formControlName="phone" placeholder="+212 6XX XXX XXX" />
        </div>
      </div>
      <div class="field">
        <label>Ville</label>
        <input formControlName="city" placeholder="Marrakech" />
      </div>
      @if (createError()) { <div class="alert error">{{ createError() }}</div> }
      <div class="modal-footer">
        <button type="button" class="btn-ghost" (click)="createOpen.set(false)">Annuler</button>
        <button type="submit" class="btn-add" [disabled]="creating()">
          @if (creating()) { <span class="spinner"></span> } Créer la fiche
        </button>
      </div>
    </form>
  </div>
}
  `,
  styles: [`
    .annuaire-admin { display:flex; flex-direction:column; gap:1.25rem; }
    .page-header { display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:.75rem; }
    h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 .375rem; }
    .kpis { display:flex; gap:.5rem; flex-wrap:wrap; }
    .kpi { padding:.2rem .625rem; border-radius:12px; font-size:.72rem; font-weight:700; }
    .kpi.total   { background:rgba(139,69,19,.07);  color:#8B4513; }
    .kpi.active  { background:rgba(39,174,96,.07);  color:#27ae60; }
    .kpi.pending { background:rgba(243,156,18,.07); color:#d68910; }
    .header-actions { display:flex; gap:.5rem; }
    .btn-export { padding:.45rem .875rem; border:1px solid var(--card-border); background:var(--bg-secondary); color:var(--text-secondary); border-radius:8px; font-size:.82rem; font-weight:600; cursor:pointer; }
    .btn-add { padding:.45rem .875rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-size:.82rem; font-weight:600; cursor:pointer; white-space:nowrap; display:flex; align-items:center; gap:.25rem; }
    .filter-bar { display:flex; gap:.625rem; flex-wrap:wrap; }
    .fs { padding:.375rem .625rem; border:1px solid var(--card-border); border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .search-input { padding:.375rem .75rem; border:1px solid var(--card-border); border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; min-width:200px; }
    .loading { padding:2rem; text-align:center; color:var(--text-muted); font-size:.875rem; }
    .table-wrap { background:var(--card-bg); border:1px solid var(--card-border); border-radius:10px; overflow:hidden; }
    .table { width:100%; border-collapse:collapse; font-size:.82rem; }
    .table th { padding:.65rem 1rem; text-align:start; font-weight:600; color:var(--text-secondary); background:var(--bg-secondary); white-space:nowrap; }
    .table td { padding:.65rem 1rem; border-top:1px solid var(--card-border); vertical-align:middle; }
    .table tr:hover td { background:rgba(139,69,19,.02); }
    .col-name { display:flex; align-items:center; gap:.625rem; }
    .av { width:32px; height:32px; border-radius:8px; background:linear-gradient(135deg,#8B4513,#d4af6a); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.85rem; flex-shrink:0; }
    .name { font-weight:600; color:var(--text-primary); }
    .feat-badge { font-size:.65rem; color:#d4af6a; }
    .chip { padding:.18rem .5rem; border-radius:6px; font-size:.7rem; font-weight:600; white-space:nowrap; }
    .chip.domain   { background:rgba(139,69,19,.07); color:#8B4513; }
    .chip.type     { background:var(--bg-tertiary); color:var(--text-secondary); text-transform:capitalize; }
    .chip.verified { background:rgba(39,174,96,.08); color:#27ae60; }
    .badge { padding:.18rem .5rem; border-radius:10px; font-size:.7rem; font-weight:700; }
    .badge.active  { background:rgba(39,174,96,.1);  color:#27ae60; }
    .badge.pending { background:rgba(243,156,18,.1); color:#d68910; }
    .actions { display:flex; gap:.3rem; align-items:center; }
    .act-btn { padding:.25rem .6rem; border-radius:6px; border:1px solid; font-size:.75rem; font-weight:600; cursor:pointer; background:transparent; transition:background .15s; }
    .act-btn.detail    { border-color:rgba(52,152,219,.3); color:#3498db; }
    .act-btn.activate  { border-color:rgba(39,174,96,.3);  color:#27ae60; }
    .act-btn.deactivate{ border-color:rgba(231,76,60,.3);  color:#e74c3c; }
    .act-btn.feature   { border-color:rgba(212,175,106,.4); color:#d4af6a; font-size:.9rem; }
    .act-btn:hover { opacity:.8; }
    .pagination { display:flex; gap:.25rem; justify-content:center; }
    .pagination button { padding:.3rem .65rem; border:1px solid var(--card-border); background:var(--bg-secondary); color:var(--text-primary); border-radius:6px; cursor:pointer; font-size:.8rem; }
    .pagination button.cur { background:#8B4513; color:#fff; border-color:#8B4513; }
    .pagination button:disabled { opacity:.4; cursor:not-allowed; }
    /* Modal */
    .overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:50; }
    .modal { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); width:min(600px,95vw); max-height:85vh; overflow-y:auto; background:var(--card-bg); border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,.2); z-index:51; display:flex; flex-direction:column; }
    .modal-loading { padding:2rem; text-align:center; color:var(--text-muted); }
    .modal-header { display:flex; align-items:center; justify-content:space-between; padding:1.25rem 1.5rem; border-bottom:1px solid var(--card-border); }
    .modal-header h3 { font-size:1rem; font-weight:800; color:var(--text-primary); margin:0; }
    .close { background:none; border:none; font-size:1.1rem; cursor:pointer; color:var(--text-muted); }
    .modal-body { padding:1.5rem; display:flex; flex-direction:column; gap:1rem; }
    .detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:.5rem; }
    .detail-row { display:flex; flex-direction:column; gap:.15rem; padding:.5rem .75rem; background:var(--bg-secondary); border-radius:6px; font-size:.82rem; }
    .detail-row span:first-child { font-weight:600; color:var(--text-muted); font-size:.7rem; text-transform:uppercase; }
    .detail-row span:last-child  { color:var(--text-primary); }
    .detail-desc { display:flex; flex-direction:column; gap:.25rem; font-size:.85rem; }
    .detail-desc strong { color:var(--text-secondary); font-size:.78rem; }
    .detail-desc p { color:var(--text-primary); margin:0; line-height:1.6; }
    .modal-footer { padding:1rem 1.5rem; border-top:1px solid var(--card-border); display:flex; justify-content:flex-end; gap:.75rem; }
    .btn-ghost { padding:.5rem .875rem; background:var(--bg-secondary); border:1px solid var(--card-border); color:var(--text-secondary); border-radius:8px; font-size:.85rem; cursor:pointer; }
    .btn-toggle { padding:.5rem 1rem; border:none; border-radius:8px; font-size:.85rem; font-weight:700; cursor:pointer; }
    .btn-toggle.activate   { background:rgba(39,174,96,.1);  color:#27ae60; }
    .btn-toggle.deactivate { background:rgba(231,76,60,.1);  color:#e74c3c; }
    /* Create form */
    .modal-form { padding:1.5rem; display:flex; flex-direction:column; gap:1rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.875rem; }
    .field { display:flex; flex-direction:column; gap:.35rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    input, select { padding:.55rem .8rem; border:1.5px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; }
    input:focus, select:focus { border-color:#8B4513; }
    .alert.error { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; padding:.6rem .875rem; border-radius:8px; font-size:.84rem; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; display:inline-block; }
    @keyframes spin { to { transform:rotate(360deg); } }
  `]
})
export class AnnuaireAdminComponent implements OnInit {
  private api = inject(ApiService);
  private fb  = inject(FormBuilder);

  entries      = signal<AnnuaireRow[]>([]);
  isLoading    = signal(true);
  total        = signal(0);
  activeCount  = signal(0);
  pendingCount = signal(0);
  page         = signal(1);
  readonly limit = 20;

  filterDomain = signal('');
  filterActive = signal('');
  filterSearch = signal('');

  detailOpen    = signal(false);
  detail        = signal<AnnuaireDetail | null>(null);
  loadingDetail = signal(false);

  createOpen = signal(false);
  creating   = signal(false);
  createError = signal('');

  readonly domains = DOMAINS;
  pages     = signal(1);
  pagesArray = signal<number[]>([]);

  createForm = this.fb.group({
    structureName: ['', Validators.required],
    domain:        ['', Validators.required],
    structureType: ['', Validators.required],
    email:         ['', Validators.email],
    phone:         [''],
    city:          ['']
  });

  ngOnInit(): void { this.load(); }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = { page: this.page(), limit: this.limit };
    if (this.filterDomain()) params['domain']   = this.filterDomain();
    if (this.filterActive()) params['isActive'] = this.filterActive();
    if (this.filterSearch()) params['search']   = this.filterSearch();

    this.api.get<{ data: AnnuaireRow[]; pagination: { total: number; pages: number } }>('/admin/annuaire', params)
      .subscribe({
        next: res => {
          this.entries.set(res.data);
          this.total.set(res.pagination.total);
          const p = res.pagination.pages;
          this.pages.set(p);
          this.pagesArray.set(Array.from({ length: p }, (_, i) => i));
          this.activeCount.set(res.data.filter(e => e.isActive).length);
          this.pendingCount.set(res.data.filter(e => !e.isActive).length);
          this.isLoading.set(false);
        },
        error: () => this.isLoading.set(false)
      });
  }

  goTo(p: number): void { this.page.set(p); this.load(); }

  toggle(row: AnnuaireRow): void {
    this.api.patch<{ isActive: boolean }>(`/annuaire/${row._id}/toggle-active`).subscribe(res => {
      row.isActive = res.isActive;
    });
  }

  toggleFeature(row: AnnuaireRow): void {
    this.api.patch<{ isFeatured: boolean }>(`/admin/annuaire/${row._id}/feature`).subscribe(res => {
      row.isFeatured = res.isFeatured;
    });
  }

  openDetail(id: string): void {
    this.detailOpen.set(true);
    this.detail.set(null);
    this.loadingDetail.set(true);
    this.api.get<{ data: AnnuaireDetail }>(`/admin/annuaire/${id}`).subscribe({
      next: res => { this.detail.set(res.data); this.loadingDetail.set(false); },
      error: () => this.loadingDetail.set(false)
    });
  }

  toggleFromDetail(): void {
    const d = this.detail();
    if (!d) return;
    this.api.patch<{ isActive: boolean }>(`/annuaire/${d._id}/toggle-active`).subscribe(res => {
      this.detail.update(prev => prev ? { ...prev, isActive: res.isActive } : prev);
      this.entries.update(list => list.map(e => e._id === d._id ? { ...e, isActive: res.isActive } : e));
    });
  }

  openCreateForm(): void {
    this.createForm.reset();
    this.createError.set('');
    this.createOpen.set(true);
  }

  submitCreate(): void {
    if (this.createForm.invalid) { this.createForm.markAllAsTouched(); return; }
    this.creating.set(true);
    this.createError.set('');

    const v = this.createForm.getRawValue();
    const payload = {
      structureName: v.structureName,
      domain:        v.domain,
      structureType: v.structureType,
      contact: { email: v.email, phone: v.phone, city: v.city }
    };

    this.api.post('/annuaire', payload).subscribe({
      next: () => {
        this.creating.set(false);
        this.createOpen.set(false);
        this.load();
      },
      error: err => {
        this.creating.set(false);
        this.createError.set(err.error?.error || 'Erreur lors de la création');
      }
    });
  }

  domainLabel(id: string): string { return DOMAINS.find(d => d.id === id)?.label ?? id; }

  exportCsv(): void {
    const rows = this.entries();
    const header = 'Nom;Domaine;Type;Ville;Email;Téléphone;Statut';
    const lines = rows.map(r =>
      [r.structureName, this.domainLabel(r.domain), r.structureType,
       r.contact.city || '', r.contact.email || '', r.contact.phone || '',
       r.isActive ? 'Actif' : 'En attente'].join(';')
    );
    const csv  = [header, ...lines].join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'annuaire-kenzbladi.csv'; a.click();
    URL.revokeObjectURL(url);
  }
}
