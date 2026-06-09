import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

interface ProUser {
  _id:       string;
  email:     string;
  firstName: string;
  lastName:  string;
  isActive:  boolean;
  lastLogin: string | null;
  createdAt: string;
  proProfile?: {
    companyName:     string;
    domain:          string;
    structureType:   string;
    isVerified:      boolean;
    subscriptionPlan:string;
  };
}

const DOMAINS = [
  { value: 'artisanat_service',   label: 'Artisanat de Service' },
  { value: 'produits_mer',        label: 'Produits de la Mer' },
  { value: 'habillement_mode',    label: 'Habillement & Mode' },
  { value: 'tourisme_rural',      label: 'Tourisme Rural' },
  { value: 'artisanat_art',       label: "Artisanat d'art" },
  { value: 'agriculture_bio',     label: 'Agriculture Bio' },
  { value: 'soin_beaute',         label: 'Soin & Beauté' },
  { value: 'produit_terroir',     label: 'Produit de Terroir' },
  { value: 'artisanat_culinaire', label: 'Artisanat Culinaire' }
];

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<div class="users-page">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h2>Gestion des Acteurs Pro</h2>
      <p class="sub">{{ total() }} compte(s) Pro enregistré(s)</p>
    </div>
    <button class="btn-add" (click)="openCreate()">+ Créer un compte Pro</button>
  </div>

  <!-- Filters -->
  <div class="filter-bar">
    <select class="fs" (change)="filterActive.set($any($event.target).value); load()">
      <option value="">Tous les statuts</option>
      <option value="true">Actifs</option>
      <option value="false">Désactivés</option>
    </select>
    <select class="fs" (change)="filterDomain.set($any($event.target).value); load()">
      <option value="">Tous les domaines</option>
      @for (d of domains; track d.value) { <option [value]="d.value">{{ d.label }}</option> }
    </select>
  </div>

  @if (successMsg()) { <div class="alert success">✓ {{ successMsg() }}</div> }

  @if (isLoading()) {
    <div class="loading">Chargement…</div>
  } @else {
    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th>Acteur</th>
            <th>Structure</th>
            <th>Domaine</th>
            <th>Abonnement</th>
            <th>Dernière connexion</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (u of users(); track u._id) {
            <tr>
              <td class="col-user">
                <div class="av">{{ u.email.charAt(0).toUpperCase() }}</div>
                <div>
                  <div class="name">{{ u.firstName }} {{ u.lastName }}</div>
                  <div class="email">{{ u.email }}</div>
                </div>
              </td>
              <td>{{ u.proProfile?.companyName || '—' }}</td>
              <td>
                @if (u.proProfile?.domain) {
                  <span class="chip domain">{{ domainLabel(u.proProfile!.domain) }}</span>
                }
              </td>
              <td>
                <span class="chip sub" [class]="u.proProfile?.subscriptionPlan || 'gratuit'">
                  {{ u.proProfile?.subscriptionPlan || 'gratuit' }}
                </span>
              </td>
              <td class="date">{{ u.lastLogin ? (u.lastLogin | date:'dd/MM/yy HH:mm') : 'Jamais' }}</td>
              <td>
                <span class="badge" [class.on]="u.isActive" [class.off]="!u.isActive">
                  {{ u.isActive ? 'Actif' : 'Désactivé' }}
                </span>
                @if (u.proProfile?.isVerified) { <span class="chip verified">✓</span> }
              </td>
              <td class="actions">
                <button class="act-btn" [class.activate]="!u.isActive" [class.deactivate]="u.isActive"
                        (click)="toggleUser(u)">
                  {{ u.isActive ? 'Désactiver' : 'Activer' }}
                </button>
                <button class="act-btn detail" (click)="openDetail(u)">Voir</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    @if (pages() > 1) {
      <div class="pagination">
        <button [disabled]="page() === 1" (click)="goTo(page() - 1)">‹</button>
        @for (_ of pagesArr(); track $index) {
          <button [class.cur]="$index + 1 === page()" (click)="goTo($index + 1)">{{ $index + 1 }}</button>
        }
        <button [disabled]="page() === pages()" (click)="goTo(page() + 1)">›</button>
      </div>
    }
  }

</div>

<!-- ── Create Modal ───────────────────────────────────────── -->
@if (createOpen()) {
  <div class="overlay" (click)="createOpen.set(false)"></div>
  <div class="modal">
    <div class="modal-header">
      <h3>Créer un compte Acteur Pro</h3>
      <button class="close" (click)="createOpen.set(false)">✕</button>
    </div>
    <form [formGroup]="createForm" (ngSubmit)="submitCreate()" class="modal-form">
      <div class="row-2">
        <div class="field">
          <label>Prénom</label>
          <input formControlName="firstName" placeholder="Prénom" />
        </div>
        <div class="field">
          <label>Nom</label>
          <input formControlName="lastName" placeholder="Nom" />
        </div>
      </div>
      <div class="field">
        <label>Email *</label>
        <input formControlName="email" type="email" placeholder="acteur@structure.ma" />
        @if (cf('email')?.invalid && cf('email')?.touched) {
          <span class="err">Email valide requis</span>
        }
      </div>
      <div class="field">
        <label>Mot de passe *</label>
        <input formControlName="password" type="password" placeholder="8 caractères minimum" />
        @if (cf('password')?.invalid && cf('password')?.touched) {
          <span class="err">8 caractères minimum</span>
        }
      </div>
      <div class="field">
        <label>Nom de la structure</label>
        <input formControlName="companyName" placeholder="Coopérative / Entreprise…" />
      </div>
      <div class="row-2">
        <div class="field">
          <label>Domaine</label>
          <select formControlName="domain">
            <option value="">— Sélectionner —</option>
            @for (d of domains; track d.value) { <option [value]="d.value">{{ d.label }}</option> }
          </select>
        </div>
        <div class="field">
          <label>Type de structure</label>
          <select formControlName="structureType">
            <option value="">— Type —</option>
            <option value="cooperative">Coopérative</option>
            <option value="sarl">SARL</option>
            <option value="association">Association</option>
            <option value="artisan_independant">Artisan indépendant</option>
            <option value="entreprise_individuelle">Entreprise individuelle</option>
            <option value="groupement_interet_economique">GIE</option>
          </select>
        </div>
      </div>
      @if (createError()) { <div class="alert error">{{ createError() }}</div> }
      <div class="modal-footer">
        <button type="button" class="btn-ghost" (click)="createOpen.set(false)">Annuler</button>
        <button type="submit" class="btn-save" [disabled]="creating()">
          @if (creating()) { <span class="spinner"></span> } Créer le compte
        </button>
      </div>
    </form>
  </div>
}

<!-- ── Detail Modal ───────────────────────────────────────── -->
@if (detailUser()) {
  <div class="overlay" (click)="detailUser.set(null)"></div>
  <div class="modal">
    <div class="modal-header">
      <h3>{{ detailUser()!.email }}</h3>
      <button class="close" (click)="detailUser.set(null)">✕</button>
    </div>
    <div class="modal-body">
      <div class="detail-grid">
        <div class="detail-row"><span>Prénom</span><span>{{ detailUser()!.firstName || '—' }}</span></div>
        <div class="detail-row"><span>Nom</span><span>{{ detailUser()!.lastName || '—' }}</span></div>
        <div class="detail-row"><span>Email</span><span>{{ detailUser()!.email }}</span></div>
        <div class="detail-row"><span>Structure</span><span>{{ detailUser()!.proProfile?.companyName || '—' }}</span></div>
        <div class="detail-row"><span>Domaine</span><span>{{ domainLabel(detailUser()!.proProfile?.domain || '') }}</span></div>
        <div class="detail-row"><span>Type</span><span>{{ detailUser()!.proProfile?.structureType || '—' }}</span></div>
        <div class="detail-row"><span>Abonnement</span><span>{{ detailUser()!.proProfile?.subscriptionPlan || 'gratuit' }}</span></div>
        <div class="detail-row"><span>Vérifié</span><span>{{ detailUser()!.proProfile?.isVerified ? 'Oui' : 'Non' }}</span></div>
        <div class="detail-row"><span>Inscrit le</span><span>{{ detailUser()!.createdAt | date:'dd/MM/yyyy' }}</span></div>
        <div class="detail-row"><span>Dernière connexion</span><span>{{ detailUser()!.lastLogin ? (detailUser()!.lastLogin | date:'dd/MM/yy HH:mm') : 'Jamais' }}</span></div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-ghost" (click)="detailUser.set(null)">Fermer</button>
      <button class="btn-toggle" [class.activate]="!detailUser()!.isActive" [class.deactivate]="detailUser()!.isActive"
              (click)="toggleUser(detailUser()!)">
        {{ detailUser()!.isActive ? 'Désactiver le compte' : 'Activer le compte' }}
      </button>
    </div>
  </div>
}
  `,
  styles: [`
    .users-page { display:flex; flex-direction:column; gap:1.25rem; }
    .page-header { display:flex; align-items:flex-start; justify-content:space-between; }
    h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 .2rem; }
    .sub { font-size:.8rem; color:var(--text-muted); margin:0; }
    .btn-add { padding:.5rem 1rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-weight:600; font-size:.85rem; cursor:pointer; white-space:nowrap; }
    .filter-bar { display:flex; gap:.625rem; flex-wrap:wrap; }
    .fs { padding:.375rem .625rem; border:1px solid var(--card-border); border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .alert { padding:.6rem .875rem; border-radius:8px; font-size:.84rem; font-weight:500; }
    .alert.success { background:rgba(39,174,96,.08); border:1px solid rgba(39,174,96,.2); color:#27ae60; }
    .alert.error   { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; }
    .loading { padding:2rem; text-align:center; color:var(--text-muted); font-size:.875rem; }
    .table-wrap { background:var(--card-bg); border:1px solid var(--card-border); border-radius:10px; overflow:hidden; }
    .table { width:100%; border-collapse:collapse; font-size:.82rem; }
    .table th { padding:.65rem 1rem; text-align:start; font-weight:600; color:var(--text-secondary); background:var(--bg-secondary); white-space:nowrap; }
    .table td { padding:.65rem 1rem; border-top:1px solid var(--card-border); vertical-align:middle; }
    .col-user { display:flex; align-items:center; gap:.625rem; }
    .av { width:32px; height:32px; border-radius:8px; background:linear-gradient(135deg,#8B4513,#d4af6a); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.85rem; flex-shrink:0; }
    .name { font-weight:600; color:var(--text-primary); font-size:.82rem; }
    .email { font-size:.72rem; color:var(--text-muted); }
    .chip { padding:.18rem .5rem; border-radius:6px; font-size:.7rem; font-weight:600; white-space:nowrap; }
    .chip.domain   { background:rgba(139,69,19,.07); color:#8B4513; }
    .chip.verified { background:rgba(39,174,96,.08); color:#27ae60; margin-left:.25rem; }
    .chip.sub      { background:var(--bg-tertiary); color:var(--text-secondary); text-transform:capitalize; }
    .chip.sub.premium   { background:rgba(212,175,106,.12); color:#d4af6a; }
    .chip.sub.basic     { background:rgba(52,152,219,.08);  color:#3498db; }
    .badge { padding:.18rem .55rem; border-radius:10px; font-size:.7rem; font-weight:700; }
    .badge.on  { background:rgba(39,174,96,.1);  color:#27ae60; }
    .badge.off { background:rgba(231,76,60,.08); color:#e74c3c; }
    .date { font-size:.75rem; color:var(--text-muted); }
    .actions { display:flex; gap:.3rem; }
    .act-btn { padding:.25rem .6rem; border-radius:6px; border:1px solid; font-size:.75rem; font-weight:600; cursor:pointer; background:transparent; }
    .act-btn.activate   { border-color:rgba(39,174,96,.3);  color:#27ae60; }
    .act-btn.deactivate { border-color:rgba(231,76,60,.3);  color:#e74c3c; }
    .act-btn.detail     { border-color:rgba(52,152,219,.3); color:#3498db; }
    .pagination { display:flex; gap:.25rem; justify-content:center; }
    .pagination button { padding:.3rem .65rem; border:1px solid var(--card-border); background:var(--bg-secondary); color:var(--text-primary); border-radius:6px; cursor:pointer; font-size:.8rem; }
    .pagination button.cur { background:#8B4513; color:#fff; border-color:#8B4513; }
    .pagination button:disabled { opacity:.4; cursor:not-allowed; }
    /* Modal */
    .overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:50; }
    .modal { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); width:min(560px,95vw); max-height:85vh; overflow-y:auto; background:var(--card-bg); border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,.2); z-index:51; }
    .modal-header { display:flex; align-items:center; justify-content:space-between; padding:1.25rem 1.5rem; border-bottom:1px solid var(--card-border); }
    .modal-header h3 { font-size:1rem; font-weight:800; color:var(--text-primary); margin:0; }
    .close { background:none; border:none; font-size:1.1rem; cursor:pointer; color:var(--text-muted); }
    .modal-form { padding:1.5rem; display:flex; flex-direction:column; gap:1rem; }
    .modal-body { padding:1.5rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.875rem; }
    .field { display:flex; flex-direction:column; gap:.35rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    input, select { padding:.55rem .8rem; border:1.5px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; }
    input:focus, select:focus { border-color:#8B4513; }
    .err { font-size:.72rem; color:#e74c3c; }
    .detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:.5rem; }
    .detail-row { display:flex; flex-direction:column; gap:.15rem; padding:.5rem .75rem; background:var(--bg-secondary); border-radius:6px; font-size:.82rem; }
    .detail-row span:first-child { font-weight:600; color:var(--text-muted); font-size:.7rem; text-transform:uppercase; }
    .detail-row span:last-child  { color:var(--text-primary); }
    .modal-footer { padding:1rem 1.5rem; border-top:1px solid var(--card-border); display:flex; justify-content:flex-end; gap:.75rem; }
    .btn-ghost { padding:.5rem .875rem; background:var(--bg-secondary); border:1px solid var(--card-border); color:var(--text-secondary); border-radius:8px; font-size:.85rem; cursor:pointer; }
    .btn-save { padding:.5rem 1.25rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-size:.875rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:.375rem; }
    .btn-save:disabled { opacity:.65; cursor:not-allowed; }
    .btn-toggle { padding:.5rem 1rem; border:none; border-radius:8px; font-size:.85rem; font-weight:700; cursor:pointer; }
    .btn-toggle.activate   { background:rgba(39,174,96,.1);  color:#27ae60; }
    .btn-toggle.deactivate { background:rgba(231,76,60,.1);  color:#e74c3c; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; display:inline-block; }
    @keyframes spin { to { transform:rotate(360deg); } }
  `]
})
export class UsersListComponent implements OnInit {
  private api = inject(ApiService);
  private fb  = inject(FormBuilder);

  users       = signal<ProUser[]>([]);
  total       = signal(0);
  isLoading   = signal(true);
  page        = signal(1);
  pages       = signal(1);
  pagesArr    = signal<number[]>([]);
  filterActive = signal('');
  filterDomain = signal('');
  successMsg  = signal('');
  createOpen  = signal(false);
  creating    = signal(false);
  createError = signal('');
  detailUser  = signal<ProUser | null>(null);

  domains = DOMAINS;
  readonly limit = 20;

  createForm = this.fb.group({
    firstName:     [''],
    lastName:      [''],
    email:         ['', [Validators.required, Validators.email]],
    password:      ['', [Validators.required, Validators.minLength(8)]],
    companyName:   [''],
    domain:        [''],
    structureType: ['']
  });

  cf(name: string) { return this.createForm.get(name); }
  domainLabel(id: string): string { return DOMAINS.find(d => d.value === id)?.label ?? id; }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = { role: 'pro', page: this.page(), limit: this.limit };
    if (this.filterActive()) params['isActive'] = this.filterActive();

    this.api.get<{ data: ProUser[]; pagination: { total: number; pages: number } }>('/admin/users', params)
      .subscribe({
        next: res => {
          this.users.set(res.data);
          this.total.set(res.pagination.total);
          const p = res.pagination.pages;
          this.pages.set(p);
          this.pagesArr.set(Array.from({ length: p }, (_, i) => i));
          this.isLoading.set(false);
        },
        error: () => this.isLoading.set(false)
      });
  }

  goTo(p: number): void { this.page.set(p); this.load(); }

  toggleUser(u: ProUser): void {
    this.api.patch<{ isActive: boolean }>(`/admin/users/${u._id}/toggle`).subscribe(res => {
      u.isActive = res.isActive;
      this.successMsg.set(`Compte ${res.isActive ? 'activé' : 'désactivé'} : ${u.email}`);
      if (this.detailUser()?._id === u._id) {
        this.detailUser.update(d => d ? { ...d, isActive: res.isActive } : d);
      }
      setTimeout(() => this.successMsg.set(''), 3000);
    });
  }

  openCreate(): void {
    this.createForm.reset();
    this.createError.set('');
    this.createOpen.set(true);
  }

  submitCreate(): void {
    if (this.createForm.invalid) { this.createForm.markAllAsTouched(); return; }
    this.creating.set(true);
    this.createError.set('');

    const { email, password, companyName, domain, structureType, firstName, lastName } = this.createForm.getRawValue();

    this.api.post('/admin/users/pro', { email, password, companyName, domain, structureType, firstName, lastName })
      .subscribe({
        next: () => {
          this.creating.set(false);
          this.createOpen.set(false);
          this.successMsg.set('Compte Pro créé avec succès !');
          this.load();
          setTimeout(() => this.successMsg.set(''), 4000);
        },
        error: err => {
          this.creating.set(false);
          this.createError.set(err.error?.error || 'Erreur lors de la création');
        }
      });
  }

  openDetail(u: ProUser): void { this.detailUser.set(u); }
}
