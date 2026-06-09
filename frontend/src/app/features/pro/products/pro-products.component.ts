import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

interface ProProduct {
  _id: string;
  name: Record<string, string>;
  domain: string;
  price: number;
  stock: number;
  status: string;
  isFeatured: boolean;
  isActive: boolean;
  rejectionReason?: string;
  createdAt: string;
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

const STATUS_LABELS: Record<string, { label: string; cls: string }> = {
  draft:                { label: 'Brouillon',      cls: 'draft' },
  en_cours_publication: { label: 'En cours',       cls: 'pending' },
  published:            { label: 'Publié',          cls: 'published' },
  archived:             { label: 'Archivé',         cls: 'archived' },
  rejected:             { label: 'Rejeté',          cls: 'rejected' }
};

@Component({
  selector: 'app-pro-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<div class="pro-products">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h2>Mes Produits</h2>
      <p class="sub">{{ total() }} produit(s) dans votre catalogue</p>
    </div>
    <button class="btn-add" (click)="openForm()">+ Ajouter un produit</button>
  </div>

  <!-- Success / Error banners -->
  @if (successMsg()) {
    <div class="alert success">✓ {{ successMsg() }}</div>
  }

  <!-- Filters -->
  <div class="filter-bar">
    <select class="filter-select" (change)="statusFilter.set($any($event.target).value); load()">
      <option value="">Tous les statuts</option>
      @for (s of statusEntries; track s.key) {
        <option [value]="s.key">{{ s.label }}</option>
      }
    </select>
  </div>

  <!-- Loading -->
  @if (isLoading()) {
    <div class="loading">Chargement…</div>
  } @else if (products().length === 0) {
    <div class="empty">
      <p>Vous n'avez pas encore de produits.</p>
      <button class="btn-add" (click)="openForm()">Ajouter votre premier produit</button>
    </div>
  } @else {
    <div class="table-wrap">
      <table class="products-table">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Domaine</th>
            <th>Prix (MAD)</th>
            <th>Stock</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (p of products(); track p._id) {
            <tr>
              <td class="col-name">
                <div class="avatar">{{ (p.name['fr'] || p.name['ar'] || '?').charAt(0) }}</div>
                <div>
                  <div class="name">{{ p.name['fr'] || p.name['ar'] || '—' }}</div>
                  @if (p.rejectionReason) {
                    <div class="rejection-note">✗ {{ p.rejectionReason }}</div>
                  }
                </div>
              </td>
              <td><span class="domain-chip">{{ domainLabel(p.domain) }}</span></td>
              <td class="price">{{ p.price | number:'1.2-2' }}</td>
              <td>{{ p.stock }}</td>
              <td>
                <span class="status-pill" [class]="STATUS_LABELS[p.status].cls">
                  {{ STATUS_LABELS[p.status].label || p.status }}
                </span>
              </td>
              <td class="actions">
                <button class="icon-btn edit" (click)="openForm(p)" title="Modifier">✏️</button>
                <button class="icon-btn del" (click)="confirmDelete(p._id)" title="Supprimer">🗑️</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- Slide-in form panel -->
  @if (formOpen()) {
    <div class="overlay" (click)="closeForm()"></div>
    <div class="slide-panel">
      <div class="panel-header">
        <h3>{{ editId() ? 'Modifier le produit' : 'Nouveau produit' }}</h3>
        <button class="close-btn" (click)="closeForm()">✕</button>
      </div>

      <form [formGroup]="form" (ngSubmit)="submitForm()" class="panel-form">

        <div class="field-group">
          <label class="section-label">Nom du produit</label>
          <div class="ml-row">
            <div class="field">
              <label>Français *</label>
              <input formControlName="nameFr" placeholder="Nom en français" />
              @if (fc('nameFr')?.invalid && fc('nameFr')?.touched) {
                <span class="err">Requis</span>
              }
            </div>
            <div class="field">
              <label class="rtl">العربية</label>
              <input formControlName="nameAr" placeholder="الاسم بالعربية" dir="rtl" />
            </div>
          </div>
        </div>

        <div class="field-group">
          <label class="section-label">Description</label>
          <div class="ml-row">
            <div class="field">
              <label>Français</label>
              <textarea formControlName="descFr" rows="3" placeholder="Description en français…"></textarea>
            </div>
            <div class="field">
              <label class="rtl">العربية</label>
              <textarea formControlName="descAr" rows="3" dir="rtl" placeholder="الوصف بالعربية…"></textarea>
            </div>
          </div>
        </div>

        <div class="row-2">
          <div class="field">
            <label>Domaine *</label>
            <select formControlName="domain">
              <option value="">— Sélectionner —</option>
              @for (d of domains; track d.value) {
                <option [value]="d.value">{{ d.label }}</option>
              }
            </select>
          </div>
          <div class="field">
            <label>Statut</label>
            <select formControlName="status">
              <option value="draft">Brouillon</option>
              <option value="en_cours_publication">Soumettre pour publication</option>
            </select>
          </div>
        </div>

        <div class="row-2">
          <div class="field">
            <label>Prix (MAD) *</label>
            <input type="number" formControlName="price" placeholder="0.00" min="0" />
          </div>
          <div class="field">
            <label>Stock</label>
            <input type="number" formControlName="stock" placeholder="0" min="0" />
          </div>
        </div>

        @if (formError()) {
          <div class="alert error">{{ formError() }}</div>
        }

        <div class="panel-footer">
          <button type="button" class="btn-ghost" (click)="closeForm()">Annuler</button>
          <button type="submit" class="btn-save" [disabled]="isSaving()">
            @if (isSaving()) { <span class="spinner"></span> }
            {{ editId() ? 'Mettre à jour' : 'Enregistrer' }}
          </button>
        </div>
      </form>
    </div>
  }

</div>
  `,
  styles: [`
    .pro-products { display:flex; flex-direction:column; gap:1.25rem; position:relative; }
    .page-header { display:flex; align-items:flex-start; justify-content:space-between; }
    h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 .2rem; }
    .sub { font-size:.8rem; color:var(--text-muted); margin:0; }
    .btn-add { padding:.5rem 1rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-weight:600; font-size:.85rem; cursor:pointer; white-space:nowrap; }
    .alert { padding:.65rem 1rem; border-radius:8px; font-size:.84rem; font-weight:500; }
    .alert.success { background:rgba(39,174,96,.08); border:1px solid rgba(39,174,96,.2); color:#27ae60; }
    .alert.error   { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; }
    .filter-bar { display:flex; gap:.75rem; }
    .filter-select { padding:.375rem .625rem; border:1px solid var(--card-border); border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .loading, .empty { padding:2.5rem; text-align:center; color:var(--text-muted); font-size:.875rem; }
    .empty { display:flex; flex-direction:column; align-items:center; gap:1rem; border:1.5px dashed var(--card-border); border-radius:12px; }
    .table-wrap { background:var(--card-bg); border:1px solid var(--card-border); border-radius:10px; overflow:hidden; }
    .products-table { width:100%; border-collapse:collapse; font-size:.82rem; }
    .products-table th { padding:.6rem 1rem; text-align:start; font-weight:600; color:var(--text-secondary); background:var(--bg-secondary); white-space:nowrap; }
    .products-table td { padding:.65rem 1rem; border-top:1px solid var(--card-border); vertical-align:middle; }
    .col-name { display:flex; align-items:center; gap:.625rem; }
    .avatar { width:30px; height:30px; border-radius:7px; background:linear-gradient(135deg,#8B4513,#d4af6a); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.8rem; flex-shrink:0; }
    .name { font-weight:600; color:var(--text-primary); }
    .rejection-note { font-size:.72rem; color:#e74c3c; margin-top:.15rem; }
    .domain-chip { padding:.18rem .5rem; background:rgba(139,69,19,.07); color:#8B4513; border-radius:6px; font-size:.7rem; font-weight:600; white-space:nowrap; }
    .price { font-weight:700; color:var(--text-primary); }
    .status-pill { padding:.2rem .55rem; border-radius:10px; font-size:.7rem; font-weight:700; }
    .status-pill.draft     { background:rgba(149,165,166,.12); color:#7f8c8d; }
    .status-pill.pending   { background:rgba(243,156,18,.1);  color:#d68910; }
    .status-pill.published { background:rgba(39,174,96,.1);   color:#27ae60; }
    .status-pill.archived  { background:rgba(52,73,94,.08);   color:#52616b; }
    .status-pill.rejected  { background:rgba(231,76,60,.1);   color:#e74c3c; }
    .actions { display:flex; gap:.25rem; }
    .icon-btn { background:none; border:none; cursor:pointer; font-size:.9rem; padding:.2rem .3rem; border-radius:5px; transition:background .15s; }
    .icon-btn:hover { background:var(--bg-tertiary); }
    /* Slide panel */
    .overlay { position:fixed; inset:0; background:rgba(0,0,0,.4); z-index:50; }
    .slide-panel { position:fixed; top:0; right:0; height:100vh; width:min(460px,100vw); background:var(--card-bg); box-shadow:-8px 0 32px rgba(0,0,0,.15); z-index:51; display:flex; flex-direction:column; overflow-y:auto; }
    .panel-header { display:flex; align-items:center; justify-content:space-between; padding:1.25rem 1.5rem; border-bottom:1px solid var(--card-border); }
    h3 { font-size:1rem; font-weight:800; color:var(--text-primary); margin:0; }
    .close-btn { background:none; border:none; font-size:1.1rem; cursor:pointer; color:var(--text-muted); }
    .panel-form { padding:1.5rem; display:flex; flex-direction:column; gap:1.25rem; flex:1; }
    .field-group { display:flex; flex-direction:column; gap:.625rem; }
    .section-label { font-size:.8rem; font-weight:700; color:var(--text-primary); border-left:3px solid #8B4513; padding-left:.5rem; }
    .ml-row { display:grid; grid-template-columns:1fr 1fr; gap:.75rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.75rem; }
    .field { display:flex; flex-direction:column; gap:.3rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    label.rtl { direction:rtl; }
    input, select, textarea { padding:.5rem .75rem; border:1.5px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; font-family:inherit; }
    input:focus, select:focus, textarea:focus { border-color:#8B4513; }
    textarea { resize:vertical; }
    .err { font-size:.72rem; color:#e74c3c; }
    .panel-footer { display:flex; justify-content:flex-end; gap:.75rem; padding-top:.5rem; border-top:1px solid var(--card-border); }
    .btn-ghost { padding:.5rem .875rem; background:var(--bg-secondary); border:1px solid var(--card-border); color:var(--text-secondary); border-radius:8px; font-size:.875rem; cursor:pointer; }
    .btn-save { padding:.5rem 1.25rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-size:.875rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:.375rem; }
    .btn-save:disabled { opacity:.65; cursor:not-allowed; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
  `]
})
export class ProProductsComponent implements OnInit {
  private api = inject(ApiService);
  private fb  = inject(FormBuilder);

  products    = signal<ProProduct[]>([]);
  total       = signal(0);
  isLoading   = signal(true);
  formOpen    = signal(false);
  editId      = signal<string | null>(null);
  isSaving    = signal(false);
  successMsg  = signal('');
  formError   = signal('');
  statusFilter = signal('');

  domains     = DOMAINS;
  STATUS_LABELS = STATUS_LABELS;

  get statusEntries() {
    return Object.entries(STATUS_LABELS).map(([key, v]) => ({ key, label: v.label }));
  }

  form = this.fb.group({
    nameFr:  ['', Validators.required],
    nameAr:  [''],
    descFr:  [''],
    descAr:  [''],
    domain:  ['', Validators.required],
    price:   [0, [Validators.required, Validators.min(0)]],
    stock:   [0],
    status:  ['draft']
  });

  fc(name: string) { return this.form.get(name); }
  domainLabel(id: string): string { return DOMAINS.find(d => d.value === id)?.label ?? id; }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = { limit: 50 };
    if (this.statusFilter()) params['status'] = this.statusFilter();

    this.api.get<{ data: ProProduct[]; pagination: { total: number } }>('/products/my', params)
      .subscribe({
        next: res => {
          this.products.set(res.data);
          this.total.set(res.pagination.total);
          this.isLoading.set(false);
        },
        error: () => { this.products.set([]); this.isLoading.set(false); }
      });
  }

  openForm(product?: ProProduct): void {
    this.formError.set('');
    this.successMsg.set('');
    if (product) {
      this.editId.set(product._id);
      this.form.patchValue({
        nameFr:  product.name['fr'] || '',
        nameAr:  product.name['ar'] || '',
        domain:  product.domain,
        price:   product.price,
        stock:   product.stock,
        status:  product.status
      });
    } else {
      this.editId.set(null);
      this.form.reset({ price: 0, stock: 0, status: 'draft' });
    }
    this.formOpen.set(true);
  }

  closeForm(): void { this.formOpen.set(false); }

  submitForm(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.isSaving.set(true);
    this.formError.set('');

    const v = this.form.getRawValue();
    const payload = {
      name:        { fr: v.nameFr, ar: v.nameAr },
      description: { fr: v.descFr, ar: v.descAr },
      domain: v.domain, price: v.price, stock: v.stock, status: v.status
    };

    const req = this.editId()
      ? this.api.put(`/products/${this.editId()}`, payload)
      : this.api.post('/products', payload);

    req.subscribe({
      next: () => {
        this.isSaving.set(false);
        this.successMsg.set(this.editId() ? 'Produit mis à jour !' : 'Produit créé avec succès !');
        this.closeForm();
        this.load();
      },
      error: err => {
        this.isSaving.set(false);
        this.formError.set(err.error?.error || 'Erreur lors de l\'enregistrement');
      }
    });
  }

  confirmDelete(id: string): void {
    if (!confirm('Supprimer ce produit définitivement ?')) return;
    this.api.delete(`/products/${id}`).subscribe({
      next: () => { this.successMsg.set('Produit supprimé.'); this.load(); },
      error: () => {}
    });
  }
}
