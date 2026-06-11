import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

const TABS = ['Identité', 'Contact', 'Descriptions', 'Réseaux sociaux', 'FAQ'] as const;

const STRUCTURE_TYPES = [
  { value: 'cooperative',               label: 'Coopérative' },
  { value: 'sarl',                      label: 'SARL' },
  { value: 'association',               label: 'Association' },
  { value: 'artisan_independant',       label: 'Artisan indépendant' },
  { value: 'entreprise_individuelle',   label: 'Entreprise individuelle' },
  { value: 'groupement_interet_economique', label: 'GIE' }
];

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

const REGIONS = [
  'Tanger-Tétouan-Al Hoceïma','Oriental','Fès-Meknès',
  'Rabat-Salé-Kénitra','Béni Mellal-Khénifra','Casablanca-Settat',
  'Marrakech-Safi','Drâa-Tafilalet','Souss-Massa',
  'Guelmim-Oued Noun','Laâyoune-Sakia El Hamra','Dakhla-Oued Ed-Dahab'
];

@Component({
  selector: 'app-pro-annuaire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<div class="pro-annuaire">

  <!-- Header -->
  <div class="page-header">
    <div>
      <h2>Ma Fiche Annuaire</h2>
      <p class="sub">{{ annuaireId() ? 'Modifier votre fiche' : 'Créer votre fiche publique' }}</p>
    </div>
    @if (annuaireId()) {
      <span class="status-badge" [class.active]="isActive()" [class.pending]="!isActive()">
        {{ isActive() ? '✓ Fiche active' : '⏳ En attente de validation' }}
      </span>
    }
  </div>

  <!-- Success -->
  @if (successMsg()) {
    <div class="alert success">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      {{ successMsg() }}
    </div>
  }

  <!-- Tabs -->
  <div class="tabs-nav">
    @for (tab of tabs; track tab; let i = $index) {
      <button class="tab-btn" [class.active]="activeTab() === i" (click)="activeTab.set(i)">
        {{ tab }}
        @if (i === 0 && hasTabError(0)) { <span class="tab-err">!</span> }
      </button>
    }
  </div>

  <form [formGroup]="form" (ngSubmit)="submit()">

    <!-- ── Tab 0: Identité ─────────────────────────────── -->
    @if (activeTab() === 0) {
      <div class="tab-panel" formGroupName="identity">

        <div class="form-row">
          <div class="field required">
            <label>Nom de la structure</label>
            <input formControlName="structureName" placeholder="Ex: Coopérative Argane de l'Atlas" />
            @if (f('identity.structureName')?.invalid && f('identity.structureName')?.touched) {
              <span class="err">Nom requis</span>
            }
          </div>
        </div>

        <div class="form-row two">
          <div class="field required">
            <label>Type de structure</label>
            <select formControlName="structureType">
              <option value="">— Sélectionner —</option>
              @for (t of structureTypes; track t.value) {
                <option [value]="t.value">{{ t.label }}</option>
              }
            </select>
          </div>
          <div class="field required">
            <label>Domaine principal</label>
            <select formControlName="domain">
              <option value="">— Sélectionner —</option>
              @for (d of domains; track d.value) {
                <option [value]="d.value">{{ d.label }}</option>
              }
            </select>
          </div>
        </div>

        <div class="form-row two">
          <div class="field">
            <label>Année de création</label>
            <input type="number" formControlName="foundedYear" placeholder="Ex: 2010" min="1900" max="2025" />
          </div>
          <div class="field">
            <label>Nombre d'employés</label>
            <input type="number" formControlName="employeeCount" placeholder="Ex: 12" min="0" />
          </div>
        </div>

        <div class="ml-group">
          <div class="ml-header">Slogan <span class="hint">(multilingue)</span></div>
          <div formGroupName="slogan" class="ml-fields">
            @for (lang of langs; track lang.code) {
              <div class="ml-field">
                <label class="lang-label" [class.rtl]="lang.rtl">{{ lang.label }}</label>
                <input [formControlName]="lang.code" [dir]="lang.rtl ? 'rtl' : 'ltr'"
                       [placeholder]="lang.placeholder" />
              </div>
            }
          </div>
        </div>

      </div>
    }

    <!-- ── Tab 1: Contact ──────────────────────────────── -->
    @if (activeTab() === 1) {
      <div class="tab-panel" formGroupName="contact">

        <div class="form-row two">
          <div class="field">
            <label>Téléphone principal</label>
            <input formControlName="phone" placeholder="+212 6XX XXX XXX" />
          </div>
          <div class="field">
            <label>Téléphone fixe</label>
            <input formControlName="fixPhone" placeholder="+212 5XX XXX XXX" />
          </div>
        </div>

        <div class="form-row two">
          <div class="field">
            <label>Email de contact</label>
            <input type="email" formControlName="email" placeholder="contact@structure.ma" />
          </div>
          <div class="field">
            <label>Site web</label>
            <input formControlName="website" placeholder="https://www.structure.ma" />
          </div>
        </div>

        <div class="field">
          <label>Adresse complète</label>
          <input formControlName="address" placeholder="N° rue, quartier…" />
        </div>

        <div class="form-row three">
          <div class="field">
            <label>Ville</label>
            <input formControlName="city" placeholder="Marrakech" />
          </div>
          <div class="field">
            <label>Province</label>
            <input formControlName="province" placeholder="Province" />
          </div>
          <div class="field">
            <label>Région</label>
            <select formControlName="region">
              <option value="">— Région —</option>
              @for (r of regions; track r) {
                <option [value]="r">{{ r }}</option>
              }
            </select>
          </div>
        </div>

        <div class="form-row two">
          <div class="field" formGroupName="coordinates">
            <label>Latitude GPS</label>
            <input type="number" formControlName="lat" placeholder="31.6295" step="any" />
          </div>
          <div class="field" formGroupName="coordinates">
            <label>Longitude GPS</label>
            <input type="number" formControlName="lng" placeholder="-7.9811" step="any" />
          </div>
        </div>

      </div>
    }

    <!-- ── Tab 2: Descriptions ─────────────────────────── -->
    @if (activeTab() === 2) {
      <div class="tab-panel">

        <div class="ml-group">
          <div class="ml-header">Description courte <span class="hint">(résumé affiché sur les cartes)</span></div>
          <div formGroupName="description" class="ml-fields vertical">
            @for (lang of langs; track lang.code) {
              <div class="ml-field wide">
                <label class="lang-label" [class.rtl]="lang.rtl">{{ lang.label }}</label>
                <textarea [formControlName]="lang.code" rows="2"
                          [dir]="lang.rtl ? 'rtl' : 'ltr'"
                          [placeholder]="lang.placeholder"></textarea>
              </div>
            }
          </div>
        </div>

        <div class="ml-group">
          <div class="ml-header">Présentation complète <span class="hint">(page de détail)</span></div>
          <div formGroupName="presentation" class="ml-fields vertical">
            @for (lang of langs; track lang.code) {
              <div class="ml-field wide">
                <label class="lang-label" [class.rtl]="lang.rtl">{{ lang.label }}</label>
                <textarea [formControlName]="lang.code" rows="4"
                          [dir]="lang.rtl ? 'rtl' : 'ltr'"
                          [placeholder]="lang.placeholder"></textarea>
              </div>
            }
          </div>
        </div>

      </div>
    }

    <!-- ── Tab 3: Réseaux sociaux ──────────────────────── -->
    @if (activeTab() === 3) {
      <div class="tab-panel" formGroupName="socialMedia">

        @for (social of socials; track social.key) {
          <div class="social-row">
            <span class="social-icon">{{ social.icon }}</span>
            <div class="field grow">
              <label>{{ social.label }}</label>
              <input [formControlName]="social.key" [placeholder]="social.placeholder" />
            </div>
          </div>
        }

      </div>
    }

    <!-- ── Tab 4: FAQ ──────────────────────────────────── -->
    @if (activeTab() === 4) {
      <div class="tab-panel">

        <div class="faq-header">
          <p class="hint-text">Questions/réponses affichées sur votre fiche publique.</p>
          <button type="button" class="btn-outline-sm" (click)="addFaq()">+ Ajouter une question</button>
        </div>

        @if (faqArray.length === 0) {
          <div class="empty-faq">Aucune question pour l'instant. Cliquez sur « Ajouter ».</div>
        }

        <div class="faq-list" formArrayName="faq">
          @for (control of faqArray.controls; track control; let i = $index) {
            <div class="faq-item" [formGroupName]="i">
              <div class="faq-item-header">
                <span>Question {{ i + 1 }}</span>
                <button type="button" class="btn-remove" (click)="removeFaq(i)">✕</button>
              </div>
              <div class="ml-fields">
                <div class="ml-field" formGroupName="question">
                  <label class="lang-label">FR</label>
                  <input formControlName="fr" placeholder="Question en français…" />
                </div>
                <div class="ml-field" formGroupName="question">
                  <label class="lang-label rtl">AR</label>
                  <input formControlName="ar" dir="rtl" placeholder="السؤال بالعربية…" />
                </div>
              </div>
              <div class="ml-fields mt-sm">
                <div class="ml-field" formGroupName="answer">
                  <label class="lang-label">Réponse FR</label>
                  <textarea formControlName="fr" rows="2" placeholder="Réponse en français…"></textarea>
                </div>
                <div class="ml-field" formGroupName="answer">
                  <label class="lang-label rtl">الجواب AR</label>
                  <textarea formControlName="ar" dir="rtl" rows="2" placeholder="الجواب بالعربية…"></textarea>
                </div>
              </div>
            </div>
          }
        </div>

      </div>
    }

    <!-- ── Footer ──────────────────────────────────────── -->
    <div class="form-footer">
      <div class="footer-nav">
        @if (activeTab() > 0) {
          <button type="button" class="btn-ghost" (click)="activeTab.set(activeTab() - 1)">‹ Précédent</button>
        }
        @if (activeTab() < tabs.length - 1) {
          <button type="button" class="btn-primary" (click)="activeTab.set(activeTab() + 1)">Suivant ›</button>
        }
      </div>
      <button type="submit" class="btn-submit" [disabled]="isSaving()">
        @if (isSaving()) { <span class="spinner"></span> Enregistrement… }
        @else { {{ annuaireId() ? 'Mettre à jour' : 'Soumettre la fiche' }} }
      </button>
    </div>

    @if (apiError()) {
      <div class="alert error">{{ apiError() }}</div>
    }

  </form>
</div>
  `,
  styles: [`
    .pro-annuaire { display:flex; flex-direction:column; gap:1.25rem; }
    .page-header { display:flex; align-items:flex-start; justify-content:space-between; gap:1rem; background:var(--card-bg); border:1px solid var(--card-border); border-radius:var(--radius-lg); box-shadow:var(--shadow-sm); padding:1.25rem 1.5rem; }
    h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 .2rem; }
    .sub { font-size:.8rem; color:var(--text-muted); margin:0; }
    .status-badge { padding:.3rem .8rem; border-radius:20px; font-size:.75rem; font-weight:700; white-space:nowrap; }
    .status-badge.active  { background:rgba(39,174,96,.1);  color:#27ae60; }
    .status-badge.pending { background:rgba(243,156,18,.1); color:#d68910; }
    .alert { display:flex; align-items:center; gap:.5rem; padding:.75rem 1rem; border-radius:10px; font-size:.85rem; }
    .alert.success { background:rgba(39,174,96,.08); border:1px solid rgba(39,174,96,.2); color:#27ae60; }
    .alert.error   { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; }
    .tabs-nav { display:flex; gap:.25rem; border-bottom:2px solid var(--card-border); flex-wrap:wrap; }
    .tab-btn { padding:.5rem .875rem; background:none; border:none; font-size:.82rem; font-weight:600; color:var(--text-muted); cursor:pointer; border-bottom:2px solid transparent; margin-bottom:-2px; transition:color .2s, border-color .2s; position:relative; }
    .tab-btn.active { color:#8B4513; border-bottom-color:#8B4513; }
    .tab-btn:hover:not(.active) { color:var(--text-primary); }
    .tab-err { position:absolute; top:4px; right:4px; width:6px; height:6px; border-radius:50%; background:#e74c3c; }
    .tab-panel { background:var(--card-bg); border:1px solid var(--card-border); border-radius:0 var(--radius-lg) var(--radius-lg) var(--radius-lg); box-shadow:var(--shadow-sm); padding:1.5rem; display:flex; flex-direction:column; gap:1.25rem; }
    .form-row { display:flex; gap:1rem; flex-wrap:wrap; }
    .form-row.two > .field  { flex:1; min-width:200px; }
    .form-row.three > .field { flex:1; min-width:160px; }
    .field { display:flex; flex-direction:column; gap:.35rem; flex:1; }
    .field.required > label::after { content:' *'; color:#e74c3c; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    input, select, textarea { padding:.55rem .8rem; border:1.5px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; font-family:inherit; }
    input:focus, select:focus, textarea:focus { border-color:#8B4513; }
    textarea { resize:vertical; min-height:70px; }
    .err { font-size:.72rem; color:#e74c3c; }
    .hint { font-size:.75rem; color:var(--text-muted); font-weight:400; }
    .ml-group { display:flex; flex-direction:column; gap:.625rem; }
    .ml-header { font-size:.84rem; font-weight:700; color:var(--text-primary); border-left:3px solid #8B4513; padding-left:.625rem; }
    .ml-fields { display:grid; grid-template-columns:1fr 1fr; gap:.75rem; }
    .ml-fields.vertical { grid-template-columns:1fr; }
    .ml-field { display:flex; flex-direction:column; gap:.3rem; }
    .ml-field.wide { grid-column:1 / -1; }
    .lang-label { font-size:.7rem; font-weight:700; color:#8B4513; text-transform:uppercase; letter-spacing:.04em; }
    .lang-label.rtl { direction:rtl; }
    .social-row { display:flex; align-items:flex-end; gap:.875rem; }
    .social-icon { font-size:1.25rem; padding-bottom:.45rem; }
    .grow { flex:1; }
    .faq-header { display:flex; align-items:center; justify-content:space-between; }
    .hint-text { font-size:.8rem; color:var(--text-muted); margin:0; }
    .btn-outline-sm { padding:.35rem .875rem; border:1.5px solid #8B4513; color:#8B4513; background:transparent; border-radius:8px; font-size:.8rem; font-weight:600; cursor:pointer; transition:background .2s; }
    .btn-outline-sm:hover { background:rgba(139,69,19,.06); }
    .empty-faq { text-align:center; padding:2rem; color:var(--text-muted); font-size:.85rem; border:1.5px dashed var(--card-border); border-radius:10px; }
    .faq-list { display:flex; flex-direction:column; gap:1rem; }
    .faq-item { border:1px solid var(--card-border); border-radius:10px; padding:1rem; display:flex; flex-direction:column; gap:.75rem; }
    .faq-item-header { display:flex; align-items:center; justify-content:space-between; font-size:.82rem; font-weight:700; color:var(--text-secondary); }
    .btn-remove { background:none; border:none; color:#e74c3c; cursor:pointer; font-size:.9rem; padding:.1rem .4rem; }
    .mt-sm { margin-top:.25rem; }
    .form-footer { display:flex; align-items:center; justify-content:space-between; padding:1rem 0; gap:1rem; }
    .footer-nav { display:flex; gap:.5rem; }
    .btn-ghost { padding:.55rem 1rem; background:var(--bg-secondary); border:1px solid var(--card-border); color:var(--text-secondary); border-radius:8px; font-size:.875rem; font-weight:600; cursor:pointer; transition:all .2s ease; }
    .btn-ghost:hover { border-color:#8B4513; color:#8B4513; }
    .btn-primary { padding:.55rem 1rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-size:.875rem; font-weight:600; cursor:pointer; transition:opacity .2s ease, transform .2s ease; }
    .btn-primary:hover { opacity:.9; transform:translateY(-1px); }
    .btn-submit { padding:.625rem 1.5rem; background:linear-gradient(135deg,#8B4513,#d4af6a); color:#fff; border:none; border-radius:10px; font-size:.9rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:.5rem; transition:opacity .2s ease, transform .2s ease, box-shadow .2s ease; box-shadow:var(--shadow-sm); }
    .btn-submit:hover:not(:disabled) { opacity:.92; transform:translateY(-1px); box-shadow:var(--shadow-md); }
    .btn-submit:disabled { opacity:.65; cursor:not-allowed; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
  `]
})
export class ProAnnuaireComponent implements OnInit {
  private api  = inject(ApiService);
  private auth = inject(AuthService);
  private fb   = inject(FormBuilder);

  tabs         = TABS;
  structureTypes = STRUCTURE_TYPES;
  domains      = DOMAINS;
  regions      = REGIONS;
  activeTab    = signal(0);
  isSaving     = signal(false);
  isActive     = signal(false);
  annuaireId   = signal<string | null>(null);
  successMsg   = signal('');
  apiError     = signal('');

  langs = [
    { code: 'fr',     label: 'Français',  rtl: false, placeholder: 'En français…' },
    { code: 'ar',     label: 'العربية',   rtl: true,  placeholder: 'بالعربية…' },
    { code: 'en',     label: 'English',   rtl: false, placeholder: 'In English…' },
    { code: 'darija', label: 'الدارجة',   rtl: true,  placeholder: 'بالدارجة…' }
  ];

  socials = [
    { key: 'facebook',  label: 'Facebook',  icon: '📘', placeholder: 'https://facebook.com/...' },
    { key: 'instagram', label: 'Instagram', icon: '📸', placeholder: 'https://instagram.com/...' },
    { key: 'youtube',   label: 'YouTube',   icon: '▶️', placeholder: 'https://youtube.com/...' },
    { key: 'twitter',   label: 'Twitter/X', icon: '🐦', placeholder: 'https://twitter.com/...' },
    { key: 'linkedin',  label: 'LinkedIn',  icon: '💼', placeholder: 'https://linkedin.com/...' },
    { key: 'tiktok',    label: 'TikTok',    icon: '🎵', placeholder: 'https://tiktok.com/...' }
  ];

  private mlGroup() {
    return this.fb.group({ fr: [''], ar: [''], en: [''], darija: [''] });
  }

  form = this.fb.group({
    identity: this.fb.group({
      structureName: ['', Validators.required],
      structureType: ['', Validators.required],
      domain:        ['', Validators.required],
      foundedYear:   [null as number | null],
      employeeCount: [null as number | null],
      slogan:        this.mlGroup()
    }),
    contact: this.fb.group({
      phone:      [''],
      fixPhone:   [''],
      email:      ['', Validators.email],
      website:    [''],
      address:    [''],
      city:       [''],
      province:   [''],
      region:     [''],
      postalCode: [''],
      coordinates: this.fb.group({ lat: [null as number | null], lng: [null as number | null] })
    }),
    description:  this.mlGroup(),
    presentation: this.mlGroup(),
    socialMedia: this.fb.group({
      facebook: [''], instagram: [''], youtube: [''],
      twitter: [''], linkedin: [''], tiktok: ['']
    }),
    faq: this.fb.array([])
  });

  get faqArray(): FormArray { return this.form.get('faq') as FormArray; }

  f(path: string) { return this.form.get(path); }

  hasTabError(tab: number): boolean {
    if (tab === 0) {
      const g = this.form.get('identity');
      return !!(g?.touched && g?.invalid);
    }
    return false;
  }

  ngOnInit(): void {
    this.api.get<{ data: any }>('/annuaire/my').subscribe({
      next: res => {
        const a = res.data;
        this.annuaireId.set(a._id);
        this.isActive.set(a.isActive);
        this.patchForm(a);
      },
      error: () => {}
    });
  }

  private patchForm(a: any): void {
    this.form.get('identity')?.patchValue({
      structureName: a.structureName,
      structureType: a.structureType,
      domain:        a.domain,
      foundedYear:   a.foundedYear,
      employeeCount: a.employeeCount,
      slogan:        a.slogan || {}
    });
    this.form.get('contact')?.patchValue({
      ...a.contact,
      coordinates: a.contact?.coordinates || { lat: null, lng: null }
    });
    this.form.get('description')?.patchValue(a.description || {});
    this.form.get('presentation')?.patchValue(a.presentation || {});
    this.form.get('socialMedia')?.patchValue(a.socialMedia || {});
    (a.faq || []).forEach((item: any) => this.addFaq(item));
  }

  addFaq(data?: any): void {
    this.faqArray.push(this.fb.group({
      question: this.fb.group({ fr: [data?.question?.fr || ''], ar: [data?.question?.ar || ''] }),
      answer:   this.fb.group({ fr: [data?.answer?.fr   || ''], ar: [data?.answer?.ar   || ''] })
    }));
  }

  removeFaq(i: number): void { this.faqArray.removeAt(i); }

  submit(): void {
    const identity = this.form.get('identity');
    if (identity?.invalid) {
      identity.markAllAsTouched();
      this.activeTab.set(0);
      return;
    }

    this.isSaving.set(true);
    this.apiError.set('');
    this.successMsg.set('');

    const raw    = this.form.getRawValue();
    const payload = {
      structureName:  (raw.identity as any).structureName,
      structureType:  (raw.identity as any).structureType,
      domain:         (raw.identity as any).domain,
      foundedYear:    (raw.identity as any).foundedYear,
      employeeCount:  (raw.identity as any).employeeCount,
      slogan:         (raw.identity as any).slogan,
      contact:        raw.contact,
      description:    raw.description,
      presentation:   raw.presentation,
      socialMedia:    raw.socialMedia,
      faq:            raw.faq
    };

    const request = this.annuaireId()
      ? this.api.put(`/annuaire/${this.annuaireId()}`, payload)
      : this.api.post('/annuaire', payload);

    request.subscribe({
      next: (res: any) => {
        this.isSaving.set(false);
        if (!this.annuaireId()) {
          this.annuaireId.set(res.data?._id);
          this.successMsg.set('Fiche soumise avec succès ! Elle est en attente de validation par l\'administrateur.');
        } else {
          this.successMsg.set('Fiche mise à jour avec succès !');
        }
      },
      error: err => {
        this.isSaving.set(false);
        this.apiError.set(err.error?.error || 'Erreur lors de l\'enregistrement');
      }
    });
  }
}
