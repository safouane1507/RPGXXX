import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

interface KenzEvent {
  _id:       string;
  title:     { fr?: string; ar?: string };
  type:      string;
  status:    string;
  startDate: string;
  endDate:   string;
  location:  { city?: string; region?: string };
  registrationCount?: number;
  createdAt: string;
}

const EVENT_TYPES = ['festival', 'foire', 'atelier', 'exposition', 'conference', 'autre'];
const STATUS_MAP: Record<string, { label: string; cls: string }> = {
  draft:     { label: 'Brouillon',  cls: 'draft' },
  published: { label: 'Publié',     cls: 'published' },
  cancelled: { label: 'Annulé',     cls: 'cancelled' },
  archived:  { label: 'Archivé',    cls: 'archived' }
};

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<div class="events-page">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h2>Gestion des Événements</h2>
      <p class="sub">{{ total() }} événement(s)</p>
    </div>
    <button class="btn-add" (click)="openForm()">+ Nouvel événement</button>
  </div>

  <!-- Filters -->
  <div class="filter-bar">
    <select class="fs" (change)="filterStatus.set($any($event.target).value); load()">
      <option value="">Tous les statuts</option>
      @for (s of statusEntries; track s.key) { <option [value]="s.key">{{ s.label }}</option> }
    </select>
    <select class="fs" (change)="filterType.set($any($event.target).value); load()">
      <option value="">Tous les types</option>
      @for (t of eventTypes; track t) { <option [value]="t">{{ t }}</option> }
    </select>
  </div>

  @if (successMsg()) { <div class="alert success">✓ {{ successMsg() }}</div> }

  @if (isLoading()) {
    <div class="loading">Chargement…</div>
  } @else if (events().length === 0) {
    <div class="empty">Aucun événement. Créez le premier !</div>
  } @else {
    <div class="events-grid">
      @for (e of events(); track e._id) {
        <div class="event-card">
          <div class="event-head">
            <span class="type-badge">{{ e.type }}</span>
            <span class="status-pill" [class]="STATUS_MAP[e.status].cls">{{ STATUS_MAP[e.status].label || e.status }}</span>
          </div>
          <h4>{{ e.title.fr || e.title.ar || 'Sans titre' }}</h4>
          <div class="event-meta">
            <span>📅 {{ e.startDate | date:'dd/MM/yyyy' }}</span>
            @if (e.endDate && e.endDate !== e.startDate) {
              <span>→ {{ e.endDate | date:'dd/MM/yyyy' }}</span>
            }
          </div>
          <div class="event-meta">
            <span>📍 {{ e.location.city || 'Lieu à définir' }}</span>
            @if (e.registrationCount) { <span>👥 {{ e.registrationCount }}</span> }
          </div>
          <div class="event-actions">
            <button class="act-btn edit" (click)="openForm(e)">Modifier</button>
            @if (e.status === 'draft') {
              <button class="act-btn publish" (click)="changeStatus(e._id, 'published')">Publier</button>
            }
            @if (e.status === 'published') {
              <button class="act-btn cancel" (click)="changeStatus(e._id, 'cancelled')">Annuler</button>
            }
          </div>
        </div>
      }
    </div>
  }

</div>

<!-- ── Event Form Modal ───────────────────────────────────── -->
@if (formOpen()) {
  <div class="overlay" (click)="closeForm()"></div>
  <div class="modal">
    <div class="modal-header">
      <h3>{{ editId() ? 'Modifier l\'événement' : 'Nouvel événement' }}</h3>
      <button class="close" (click)="closeForm()">✕</button>
    </div>
    <form [formGroup]="form" (ngSubmit)="submit()" class="modal-form">

      <div class="row-2">
        <div class="field">
          <label>Titre (FR) *</label>
          <input formControlName="titleFr" placeholder="Festival de l'Argane…" />
        </div>
        <div class="field">
          <label>العنوان (AR)</label>
          <input formControlName="titleAr" placeholder="مهرجان…" dir="rtl" />
        </div>
      </div>

      <div class="row-2">
        <div class="field">
          <label>Type *</label>
          <select formControlName="type">
            <option value="">— Type —</option>
            @for (t of eventTypes; track t) { <option [value]="t">{{ t }}</option> }
          </select>
        </div>
        <div class="field">
          <label>Statut</label>
          <select formControlName="status">
            <option value="draft">Brouillon</option>
            <option value="published">Publié</option>
          </select>
        </div>
      </div>

      <div class="row-2">
        <div class="field">
          <label>Date de début *</label>
          <input formControlName="startDate" type="date" />
        </div>
        <div class="field">
          <label>Date de fin</label>
          <input formControlName="endDate" type="date" />
        </div>
      </div>

      <div class="row-2">
        <div class="field">
          <label>Ville</label>
          <input formControlName="city" placeholder="Marrakech" />
        </div>
        <div class="field">
          <label>Région</label>
          <input formControlName="region" placeholder="Marrakech-Safi" />
        </div>
      </div>

      <div class="field">
        <label>Description (FR)</label>
        <textarea formControlName="descFr" rows="3" placeholder="Description de l'événement…"></textarea>
      </div>

      @if (formError()) { <div class="alert error">{{ formError() }}</div> }

      <div class="modal-footer">
        <button type="button" class="btn-ghost" (click)="closeForm()">Annuler</button>
        <button type="submit" class="btn-save" [disabled]="saving()">
          @if (saving()) { <span class="spinner"></span> }
          {{ editId() ? 'Mettre à jour' : 'Créer l\'événement' }}
        </button>
      </div>
    </form>
  </div>
}
  `,
  styles: [`
    .events-page { display:flex; flex-direction:column; gap:1.25rem; }
    .page-header { display:flex; align-items:flex-start; justify-content:space-between; }
    h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 .2rem; }
    .sub { font-size:.8rem; color:var(--text-muted); margin:0; }
    .btn-add { padding:.5rem 1rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-weight:600; font-size:.85rem; cursor:pointer; }
    .filter-bar { display:flex; gap:.625rem; flex-wrap:wrap; }
    .fs { padding:.375rem .625rem; border:1px solid var(--card-border); border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); font-size:.82rem; outline:none; }
    .alert { padding:.6rem .875rem; border-radius:8px; font-size:.84rem; font-weight:500; }
    .alert.success { background:rgba(39,174,96,.08); border:1px solid rgba(39,174,96,.2); color:#27ae60; }
    .alert.error   { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; }
    .loading,.empty { padding:2rem; text-align:center; color:var(--text-muted); font-size:.875rem; }
    .events-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1rem; }
    .event-card { background:var(--card-bg); border:1px solid var(--card-border); border-radius:12px; padding:1.25rem; display:flex; flex-direction:column; gap:.625rem; }
    .event-head { display:flex; align-items:center; justify-content:space-between; }
    .type-badge { padding:.2rem .625rem; background:rgba(139,69,19,.07); color:#8B4513; border-radius:6px; font-size:.7rem; font-weight:700; text-transform:capitalize; }
    .status-pill { padding:.2rem .55rem; border-radius:10px; font-size:.7rem; font-weight:700; }
    .status-pill.draft     { background:var(--bg-tertiary); color:var(--text-muted); }
    .status-pill.published { background:rgba(39,174,96,.1); color:#27ae60; }
    .status-pill.cancelled { background:rgba(231,76,60,.1); color:#e74c3c; }
    .status-pill.archived  { background:rgba(52,73,94,.08); color:#52616b; }
    h4 { font-size:.9rem; font-weight:700; color:var(--text-primary); margin:0; }
    .event-meta { display:flex; gap:.875rem; font-size:.75rem; color:var(--text-muted); flex-wrap:wrap; }
    .event-actions { display:flex; gap:.5rem; margin-top:.25rem; }
    .act-btn { padding:.28rem .7rem; border-radius:6px; border:1px solid; font-size:.75rem; font-weight:600; cursor:pointer; background:transparent; }
    .act-btn.edit    { border-color:rgba(52,152,219,.3); color:#3498db; }
    .act-btn.publish { border-color:rgba(39,174,96,.3);  color:#27ae60; }
    .act-btn.cancel  { border-color:rgba(231,76,60,.3);  color:#e74c3c; }
    /* Modal */
    .overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:50; }
    .modal { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); width:min(560px,95vw); max-height:85vh; overflow-y:auto; background:var(--card-bg); border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,.2); z-index:51; }
    .modal-header { display:flex; align-items:center; justify-content:space-between; padding:1.25rem 1.5rem; border-bottom:1px solid var(--card-border); }
    .modal-header h3 { font-size:1rem; font-weight:800; color:var(--text-primary); margin:0; }
    .close { background:none; border:none; font-size:1.1rem; cursor:pointer; color:var(--text-muted); }
    .modal-form { padding:1.5rem; display:flex; flex-direction:column; gap:1rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.875rem; }
    .field { display:flex; flex-direction:column; gap:.35rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    input, select, textarea { padding:.55rem .8rem; border:1.5px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; font-family:inherit; }
    input:focus, select:focus, textarea:focus { border-color:#8B4513; }
    textarea { resize:vertical; }
    .modal-footer { display:flex; justify-content:flex-end; gap:.75rem; padding-top:.5rem; border-top:1px solid var(--card-border); }
    .btn-ghost { padding:.5rem .875rem; background:var(--bg-secondary); border:1px solid var(--card-border); color:var(--text-secondary); border-radius:8px; font-size:.875rem; cursor:pointer; }
    .btn-save { padding:.5rem 1.25rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-size:.875rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:.375rem; }
    .btn-save:disabled { opacity:.65; cursor:not-allowed; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; display:inline-block; }
    @keyframes spin { to { transform:rotate(360deg); } }
  `]
})
export class EventsListComponent implements OnInit {
  private api = inject(ApiService);
  private fb  = inject(FormBuilder);

  events      = signal<KenzEvent[]>([]);
  total       = signal(0);
  isLoading   = signal(true);
  filterStatus = signal('');
  filterType   = signal('');
  formOpen     = signal(false);
  editId       = signal<string | null>(null);
  saving       = signal(false);
  successMsg   = signal('');
  formError    = signal('');

  eventTypes  = EVENT_TYPES;
  STATUS_MAP  = STATUS_MAP;

  get statusEntries() {
    return Object.entries(STATUS_MAP).map(([key, v]) => ({ key, label: v.label }));
  }

  form = this.fb.group({
    titleFr:   ['', Validators.required],
    titleAr:   [''],
    type:      ['', Validators.required],
    status:    ['draft'],
    startDate: ['', Validators.required],
    endDate:   [''],
    city:      [''],
    region:    [''],
    descFr:    ['']
  });

  ngOnInit(): void { this.load(); }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = { limit: 50 };
    if (this.filterStatus()) params['status'] = this.filterStatus();
    if (this.filterType())   params['type']   = this.filterType();

    this.api.get<{ data: KenzEvent[]; pagination: { total: number } }>('/events', params)
      .subscribe({
        next: res => {
          this.events.set(res.data);
          this.total.set(res.pagination.total);
          this.isLoading.set(false);
        },
        error: () => { this.events.set([]); this.isLoading.set(false); }
      });
  }

  openForm(event?: KenzEvent): void {
    this.formError.set('');
    if (event) {
      this.editId.set(event._id);
      this.form.patchValue({
        titleFr:   event.title?.fr || '',
        titleAr:   event.title?.ar || '',
        type:      event.type,
        status:    event.status,
        startDate: event.startDate?.slice(0, 10) || '',
        endDate:   event.endDate?.slice(0, 10)   || '',
        city:      event.location?.city   || '',
        region:    event.location?.region || ''
      });
    } else {
      this.editId.set(null);
      this.form.reset({ status: 'draft' });
    }
    this.formOpen.set(true);
  }

  closeForm(): void { this.formOpen.set(false); }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.formError.set('');

    const v = this.form.getRawValue();
    const payload = {
      title:       { fr: v.titleFr, ar: v.titleAr },
      type:        v.type,
      status:      v.status,
      startDate:   v.startDate,
      endDate:     v.endDate || v.startDate,
      location:    { city: v.city, region: v.region },
      description: { fr: v.descFr }
    };

    const req = this.editId()
      ? this.api.put(`/events/${this.editId()}`, payload)
      : this.api.post('/events', payload);

    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.successMsg.set(this.editId() ? 'Événement mis à jour !' : 'Événement créé !');
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

  changeStatus(id: string, status: string): void {
    this.api.patch(`/events/${id}/status`, { status }).subscribe({
      next: () => {
        this.successMsg.set('Statut mis à jour.');
        this.load();
        setTimeout(() => this.successMsg.set(''), 3000);
      }
    });
  }
}
