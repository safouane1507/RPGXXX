import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

interface Article {
  _id:        string;
  title:      { fr?: string; ar?: string };
  status:     string;
  category:   string;
  author?:    string;
  createdAt:  string;
  publishedAt?: string;
}

const STATUS_MAP: Record<string, { label: string; cls: string }> = {
  draft:     { label: 'Brouillon',    cls: 'draft' },
  published: { label: 'Publié',       cls: 'published' },
  archived:  { label: 'Archivé',      cls: 'archived' },
  scheduled: { label: 'Programmé',    cls: 'scheduled' }
};

const CATEGORIES = ['actualités', 'artisanat', 'tourisme', 'agriculture', 'conseils', 'communauté'];

@Component({
  selector: 'app-cms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<div class="cms-page">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h2>Gestion de Contenu (CMS)</h2>
      <p class="sub">{{ total() }} article(s) au total</p>
    </div>
    <button class="btn-add" (click)="openForm()">+ Nouvel article</button>
  </div>

  <!-- Status tabs -->
  <div class="status-tabs">
    @for (tab of statusTabs; track tab.key) {
      <button class="stab" [class.active]="activeTab() === tab.key"
              (click)="activeTab.set(tab.key); load()">
        {{ tab.label }}
        <span class="count">{{ tab.count }}</span>
      </button>
    }
  </div>

  @if (successMsg()) { <div class="alert success">✓ {{ successMsg() }}</div> }

  @if (isLoading()) {
    <div class="loading">Chargement…</div>
  } @else if (articles().length === 0) {
    <div class="empty">Aucun article dans cette catégorie.</div>
  } @else {
    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Catégorie</th>
            <th>Statut</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (a of articles(); track a._id) {
            <tr>
              <td class="col-title">
                <div class="article-icon">📝</div>
                <div>
                  <div class="title">{{ a.title.fr || a.title.ar || 'Sans titre' }}</div>
                  @if (a.author) { <div class="author">par {{ a.author }}</div> }
                </div>
              </td>
              <td><span class="chip cat">{{ a.category }}</span></td>
              <td>
                <span class="spill" [class]="STATUS_MAP[a.status].cls">
                  {{ STATUS_MAP[a.status].label || a.status }}
                </span>
              </td>
              <td class="date">{{ (a.publishedAt || a.createdAt) | date:'dd/MM/yy' }}</td>
              <td class="actions">
                <button class="act-btn edit"    (click)="openForm(a)">Modifier</button>
                @if (a.status === 'draft') {
                  <button class="act-btn publish" (click)="changeStatus(a._id, 'published')">Publier</button>
                }
                @if (a.status === 'published') {
                  <button class="act-btn archive" (click)="changeStatus(a._id, 'archived')">Archiver</button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

</div>

<!-- ── Article Form Modal ─────────────────────────────────── -->
@if (formOpen()) {
  <div class="overlay" (click)="closeForm()"></div>
  <div class="modal">
    <div class="modal-header">
      <h3>{{ editId() ? 'Modifier l\'article' : 'Nouvel article' }}</h3>
      <button class="close" (click)="closeForm()">✕</button>
    </div>
    <form [formGroup]="form" (ngSubmit)="submit()" class="modal-form">

      <div class="row-2">
        <div class="field">
          <label>Titre (FR) *</label>
          <input formControlName="titleFr" placeholder="Titre en français…" />
        </div>
        <div class="field">
          <label>العنوان (AR)</label>
          <input formControlName="titleAr" placeholder="العنوان بالعربية…" dir="rtl" />
        </div>
      </div>

      <div class="row-2">
        <div class="field">
          <label>Catégorie</label>
          <select formControlName="category">
            <option value="">— Catégorie —</option>
            @for (c of categories; track c) { <option [value]="c">{{ c }}</option> }
          </select>
        </div>
        <div class="field">
          <label>Statut</label>
          <select formControlName="status">
            <option value="draft">Brouillon</option>
            <option value="published">Publié</option>
            <option value="scheduled">Programmer</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label>Contenu (FR)</label>
        <textarea formControlName="contentFr" rows="5" placeholder="Contenu de l'article en français…"></textarea>
      </div>

      <div class="field">
        <label>المحتوى (AR)</label>
        <textarea formControlName="contentAr" rows="4" dir="rtl" placeholder="محتوى المقال بالعربية…"></textarea>
      </div>

      @if (formError()) { <div class="alert error">{{ formError() }}</div> }

      <div class="modal-footer">
        <button type="button" class="btn-ghost" (click)="closeForm()">Annuler</button>
        <button type="submit" class="btn-save" [disabled]="saving()">
          @if (saving()) { <span class="spinner"></span> }
          {{ editId() ? 'Mettre à jour' : 'Créer l\'article' }}
        </button>
      </div>
    </form>
  </div>
}
  `,
  styles: [`
    .cms-page { display:flex; flex-direction:column; gap:1.25rem; }
    .page-header { display:flex; align-items:flex-start; justify-content:space-between; }
    h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 .2rem; }
    .sub { font-size:.8rem; color:var(--text-muted); margin:0; }
    .btn-add { padding:.5rem 1rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-weight:600; font-size:.85rem; cursor:pointer; }
    .status-tabs { display:flex; gap:.25rem; border-bottom:2px solid var(--card-border); flex-wrap:wrap; }
    .stab { padding:.45rem .875rem; background:none; border:none; font-size:.82rem; font-weight:600; color:var(--text-muted); cursor:pointer; border-bottom:2px solid transparent; margin-bottom:-2px; transition:all .2s; display:flex; align-items:center; gap:.375rem; }
    .stab.active { color:#8B4513; border-bottom-color:#8B4513; }
    .count { padding:.1rem .4rem; border-radius:8px; background:var(--bg-tertiary); font-size:.68rem; }
    .alert { padding:.6rem .875rem; border-radius:8px; font-size:.84rem; font-weight:500; }
    .alert.success { background:rgba(39,174,96,.08); border:1px solid rgba(39,174,96,.2); color:#27ae60; }
    .alert.error   { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; }
    .loading,.empty { padding:2rem; text-align:center; color:var(--text-muted); font-size:.875rem; }
    .table-wrap { background:var(--card-bg); border:1px solid var(--card-border); border-radius:10px; overflow:hidden; }
    .table { width:100%; border-collapse:collapse; font-size:.82rem; }
    .table th { padding:.65rem 1rem; text-align:start; font-weight:600; color:var(--text-secondary); background:var(--bg-secondary); white-space:nowrap; }
    .table td { padding:.65rem 1rem; border-top:1px solid var(--card-border); vertical-align:middle; }
    .col-title { display:flex; align-items:center; gap:.625rem; }
    .article-icon { font-size:1.25rem; flex-shrink:0; }
    .title { font-weight:600; color:var(--text-primary); }
    .author { font-size:.72rem; color:var(--text-muted); }
    .chip.cat { padding:.18rem .5rem; background:rgba(139,69,19,.07); color:#8B4513; border-radius:6px; font-size:.7rem; font-weight:600; text-transform:capitalize; }
    .spill { padding:.2rem .55rem; border-radius:10px; font-size:.7rem; font-weight:700; }
    .spill.draft     { background:var(--bg-tertiary); color:var(--text-muted); }
    .spill.published { background:rgba(39,174,96,.1);  color:#27ae60; }
    .spill.archived  { background:rgba(127,140,141,.1);color:#7f8c8d; }
    .spill.scheduled { background:rgba(52,152,219,.1); color:#3498db; }
    .date { font-size:.75rem; color:var(--text-muted); }
    .actions { display:flex; gap:.375rem; }
    .act-btn { padding:.25rem .65rem; border-radius:6px; border:1px solid; font-size:.75rem; font-weight:600; cursor:pointer; background:transparent; }
    .act-btn.edit    { border-color:rgba(52,152,219,.3); color:#3498db; }
    .act-btn.publish { border-color:rgba(39,174,96,.3);  color:#27ae60; }
    .act-btn.archive { border-color:rgba(127,140,141,.3);color:#7f8c8d; }
    /* Modal */
    .overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:50; }
    .modal { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); width:min(620px,95vw); max-height:88vh; overflow-y:auto; background:var(--card-bg); border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,.2); z-index:51; }
    .modal-header { display:flex; align-items:center; justify-content:space-between; padding:1.25rem 1.5rem; border-bottom:1px solid var(--card-border); }
    .modal-header h3 { font-size:1rem; font-weight:800; color:var(--text-primary); margin:0; }
    .close { background:none; border:none; font-size:1.1rem; cursor:pointer; color:var(--text-muted); }
    .modal-form { padding:1.5rem; display:flex; flex-direction:column; gap:1rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.875rem; }
    .field { display:flex; flex-direction:column; gap:.35rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    input,select,textarea { padding:.55rem .8rem; border:1.5px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; font-family:inherit; }
    input:focus,select:focus,textarea:focus { border-color:#8B4513; }
    textarea { resize:vertical; }
    .modal-footer { display:flex; justify-content:flex-end; gap:.75rem; padding-top:.5rem; border-top:1px solid var(--card-border); }
    .btn-ghost { padding:.5rem .875rem; background:var(--bg-secondary); border:1px solid var(--card-border); color:var(--text-secondary); border-radius:8px; font-size:.875rem; cursor:pointer; }
    .btn-save { padding:.5rem 1.25rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-size:.875rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:.375rem; }
    .btn-save:disabled { opacity:.65; cursor:not-allowed; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; display:inline-block; }
    @keyframes spin { to { transform:rotate(360deg); } }
  `]
})
export class CmsComponent implements OnInit {
  private api = inject(ApiService);
  private fb  = inject(FormBuilder);

  articles    = signal<Article[]>([]);
  total       = signal(0);
  isLoading   = signal(true);
  activeTab   = signal('all');
  formOpen    = signal(false);
  editId      = signal<string | null>(null);
  saving      = signal(false);
  successMsg  = signal('');
  formError   = signal('');

  STATUS_MAP  = STATUS_MAP;
  categories  = CATEGORIES;

  counts = signal({ all: 0, draft: 0, published: 0, archived: 0 });

  get statusTabs() {
    const c = this.counts();
    return [
      { key: 'all',       label: 'Tous',       count: c.all },
      { key: 'draft',     label: 'Brouillons', count: c.draft },
      { key: 'published', label: 'Publiés',    count: c.published },
      { key: 'archived',  label: 'Archivés',   count: c.archived }
    ];
  }

  form = this.fb.group({
    titleFr:   ['', Validators.required],
    titleAr:   [''],
    category:  [''],
    status:    ['draft'],
    contentFr: [''],
    contentAr: ['']
  });

  ngOnInit(): void { this.load(); }

  load(): void {
    this.isLoading.set(true);
    const params: Record<string, string | number | boolean> = { limit: 50 };
    if (this.activeTab() !== 'all') params['status'] = this.activeTab();

    this.api.get<{ data: Article[]; pagination: { total: number } }>('/blog', params)
      .subscribe({
        next: res => {
          this.articles.set(res.data);
          this.total.set(res.pagination.total);
          if (this.activeTab() === 'all') this.loadCounts();
          this.isLoading.set(false);
        },
        error: () => { this.articles.set([]); this.isLoading.set(false); }
      });
  }

  private loadCounts(): void {
    const statuses = ['draft', 'published', 'archived'];
    const results: Record<string, number> = { all: this.total() };
    let done = 0;
    statuses.forEach(s => {
      this.api.get<{ pagination: { total: number } }>('/blog', { status: s, limit: 1 }).subscribe({
        next: res => {
          results[s] = res.pagination.total;
          done++;
          if (done === statuses.length) this.counts.set(results as any);
        }
      });
    });
  }

  openForm(a?: Article): void {
    this.formError.set('');
    if (a) {
      this.editId.set(a._id);
      this.form.patchValue({ titleFr: a.title.fr || '', titleAr: a.title.ar || '', category: a.category, status: a.status });
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
      title:   { fr: v.titleFr, ar: v.titleAr },
      content: { fr: v.contentFr, ar: v.contentAr },
      category: v.category,
      status:   v.status
    };

    const req = this.editId()
      ? this.api.put(`/blog/${this.editId()}`, payload)
      : this.api.post('/blog', payload);

    req.subscribe({
      next: () => {
        this.saving.set(false);
        this.successMsg.set(this.editId() ? 'Article mis à jour !' : 'Article créé !');
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
    this.api.patch(`/blog/${id}/status`, { status }).subscribe({
      next: () => {
        this.successMsg.set('Statut mis à jour.');
        this.load();
        setTimeout(() => this.successMsg.set(''), 3000);
      }
    });
  }
}
