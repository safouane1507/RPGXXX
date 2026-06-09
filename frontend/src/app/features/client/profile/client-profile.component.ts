import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

function pwdMatch(ctrl: AbstractControl): ValidationErrors | null {
  const a = ctrl.get('newPassword')?.value;
  const b = ctrl.get('confirmPassword')?.value;
  return a && b && a !== b ? { mismatch: true } : null;
}

const LANGS = [
  { code: 'fr', label: 'Français',  flag: '🇫🇷' },
  { code: 'ar', label: 'العربية',   flag: '🇲🇦' },
  { code: 'en', label: 'English',   flag: '🇬🇧' },
  { code: 'darija', label: 'Darija', flag: '🌟' }
];

@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
<div class="profile-page">
  <div class="container">

    <div class="page-header">
      <h1>Mon Profil</h1>
      <a routerLink="/" class="btn-back">← Retour à l'accueil</a>
    </div>

    <div class="profile-layout">

      <!-- ── Carte identité ── -->
      <aside class="profile-card">
        <div class="avatar-circle">
          {{ initials() }}
        </div>
        <h2>{{ user()?.fullName || user()?.email }}</h2>
        <span class="role-badge">{{ roleLabel() }}</span>
        <div class="profile-meta">
          <div class="meta-row"><span>📧</span> {{ user()?.email }}</div>
          @if (user()?.phone) { <div class="meta-row"><span>📞</span> {{ user()?.phone }}</div> }
          @if (user()?.address?.city) { <div class="meta-row"><span>📍</span> {{ user()?.address?.city }}</div> }
          <div class="meta-row"><span>🌐</span> {{ langLabel(user()?.preferredLanguage) }}</div>
        </div>
      </aside>

      <!-- ── Formulaires ── -->
      <div class="profile-forms">

        <!-- Infos personnelles -->
        <section class="form-section">
          <h3>✏️ Informations personnelles</h3>
          @if (infoSuccess()) { <div class="alert success">✓ {{ infoSuccess() }}</div> }
          @if (infoError())   { <div class="alert error">{{ infoError() }}</div> }

          <form [formGroup]="infoForm" (ngSubmit)="saveInfo()">
            <div class="row-2">
              <div class="field" [class.invalid]="inv(infoForm, 'firstName')">
                <label>Prénom</label>
                <input formControlName="firstName" />
              </div>
              <div class="field" [class.invalid]="inv(infoForm, 'lastName')">
                <label>Nom</label>
                <input formControlName="lastName" />
              </div>
            </div>
            <div class="field">
              <label>Téléphone</label>
              <input formControlName="phone" type="tel" />
            </div>
            <div class="field">
              <label>Langue préférée</label>
              <div class="lang-chips">
                @for (l of langs; track l.code) {
                  <button type="button" class="lang-chip"
                    [class.active]="infoForm.value.preferredLanguage === l.code"
                    (click)="infoForm.patchValue({ preferredLanguage: l.code })">
                    {{ l.flag }} {{ l.label }}
                  </button>
                }
              </div>
            </div>
            <div class="form-footer">
              <button type="submit" class="btn-save" [disabled]="savingInfo()">
                @if (savingInfo()) { <span class="spinner"></span> }
                Enregistrer les modifications
              </button>
            </div>
          </form>
        </section>

        <!-- Changement de mot de passe -->
        <section class="form-section">
          <h3>🔐 Changer le mot de passe</h3>
          @if (pwdSuccess()) { <div class="alert success">✓ {{ pwdSuccess() }}</div> }
          @if (pwdError())   { <div class="alert error">{{ pwdError() }}</div> }

          <form [formGroup]="pwdForm" (ngSubmit)="savePwd()">
            <div class="field">
              <label>Mot de passe actuel</label>
              <div class="pwd-wrap">
                <input [type]="showCurrent() ? 'text' : 'password'" formControlName="currentPassword" />
                <button type="button" class="eye" (click)="showCurrent.set(!showCurrent())">{{ showCurrent() ? '🙈' : '👁️' }}</button>
              </div>
            </div>
            <div class="field" [class.invalid]="inv(pwdForm, 'newPassword')">
              <label>Nouveau mot de passe</label>
              <div class="pwd-wrap">
                <input [type]="showNew() ? 'text' : 'password'" formControlName="newPassword"
                  placeholder="8 caractères minimum" />
                <button type="button" class="eye" (click)="showNew.set(!showNew())">{{ showNew() ? '🙈' : '👁️' }}</button>
              </div>
              @if (inv(pwdForm, 'newPassword')) { <span class="err">8 caractères minimum</span> }
            </div>
            <div class="field" [class.invalid]="pwdForm.hasError('mismatch') && pwdForm.get('confirmPassword')?.touched">
              <label>Confirmer le nouveau mot de passe</label>
              <div class="pwd-wrap">
                <input [type]="showConfirm() ? 'text' : 'password'" formControlName="confirmPassword" />
                <button type="button" class="eye" (click)="showConfirm.set(!showConfirm())">{{ showConfirm() ? '🙈' : '👁️' }}</button>
              </div>
              @if (pwdForm.hasError('mismatch') && pwdForm.get('confirmPassword')?.touched) {
                <span class="err">Les mots de passe ne correspondent pas</span>
              }
            </div>
            <div class="form-footer">
              <button type="submit" class="btn-save" [disabled]="savingPwd()">
                @if (savingPwd()) { <span class="spinner"></span> }
                Changer le mot de passe
              </button>
            </div>
          </form>
        </section>

      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
    .profile-page { min-height:70vh; padding:2rem 0 4rem; }
    .page-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:2rem; flex-wrap:wrap; gap:.75rem; }
    h1 { font-size:1.4rem; font-weight:900; color:var(--text-primary); margin:0; }
    .btn-back { font-size:.82rem; color:#8B4513; text-decoration:none; font-weight:600; }
    .btn-back:hover { text-decoration:underline; }
    .profile-layout { display:grid; grid-template-columns:260px 1fr; gap:1.75rem; align-items:start; }
    /* Card */
    .profile-card { background:var(--card-bg); border:1px solid var(--card-border); border-radius:16px; padding:1.75rem; display:flex; flex-direction:column; align-items:center; gap:1rem; text-align:center; position:sticky; top:80px; }
    .avatar-circle { width:80px; height:80px; border-radius:50%; background:linear-gradient(135deg,#8B4513,#D4AF6A); color:#fff; font-size:1.75rem; font-weight:800; display:flex; align-items:center; justify-content:center; }
    .profile-card h2 { font-size:.975rem; font-weight:800; color:var(--text-primary); margin:0; }
    .role-badge { padding:.2rem .65rem; background:rgba(139,69,19,.1); color:#8B4513; border-radius:6px; font-size:.72rem; font-weight:700; }
    .profile-meta { width:100%; display:flex; flex-direction:column; gap:.5rem; border-top:1px solid var(--card-border); padding-top:1rem; }
    .meta-row { display:flex; align-items:center; gap:.5rem; font-size:.82rem; color:var(--text-secondary); }
    /* Forms */
    .profile-forms { display:flex; flex-direction:column; gap:1.5rem; }
    .form-section { background:var(--card-bg); border:1px solid var(--card-border); border-radius:14px; padding:1.5rem; }
    .form-section h3 { font-size:.95rem; font-weight:800; color:var(--text-primary); margin:0 0 1.25rem; }
    .alert { padding:.55rem .875rem; border-radius:8px; font-size:.83rem; font-weight:500; margin-bottom:.875rem; }
    .alert.success { background:rgba(39,174,96,.08); border:1px solid rgba(39,174,96,.2); color:#27ae60; }
    .alert.error   { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; }
    form { display:flex; flex-direction:column; gap:.875rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.75rem; }
    .field { display:flex; flex-direction:column; gap:.3rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    input { padding:.55rem .8rem; border:1.5px solid var(--card-border); border-radius:9px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; }
    input:focus { border-color:#8B4513; }
    .field.invalid input { border-color:#e74c3c; }
    .err { font-size:.72rem; color:#e74c3c; }
    .lang-chips { display:flex; flex-wrap:wrap; gap:.375rem; }
    .lang-chip { padding:.3rem .65rem; border:1.5px solid var(--card-border); border-radius:20px; background:transparent; color:var(--text-secondary); font-size:.78rem; cursor:pointer; transition:all .2s; }
    .lang-chip.active { background:#8B4513; color:#fff; border-color:#8B4513; }
    .pwd-wrap { position:relative; }
    .pwd-wrap input { padding-right:2.5rem; }
    .eye { position:absolute; right:.6rem; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; font-size:.9rem; }
    .form-footer { display:flex; justify-content:flex-end; padding-top:.375rem; }
    .btn-save { padding:.55rem 1.25rem; background:#8B4513; color:#fff; border:none; border-radius:9px; font-size:.875rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:.4rem; }
    .btn-save:disabled { opacity:.65; cursor:not-allowed; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.3); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    @media(max-width:768px) { .profile-layout{grid-template-columns:1fr;} .profile-card{position:relative;top:0;} .row-2{grid-template-columns:1fr;} }
  `]
})
export class ClientProfileComponent implements OnInit {
  private api  = inject(ApiService);
  private auth = inject(AuthService);
  private fb   = inject(FormBuilder);

  user       = signal<any>(null);
  infoSuccess = signal('');
  infoError   = signal('');
  pwdSuccess  = signal('');
  pwdError    = signal('');
  savingInfo  = signal(false);
  savingPwd   = signal(false);
  showCurrent = signal(false);
  showNew     = signal(false);
  showConfirm = signal(false);

  langs = LANGS;

  infoForm = this.fb.group({
    firstName:         [''],
    lastName:          [''],
    phone:             [''],
    preferredLanguage: ['fr']
  });

  pwdForm = this.fb.group({
    currentPassword:  ['', Validators.required],
    newPassword:      ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword:  ['', Validators.required]
  }, { validators: pwdMatch });

  ngOnInit(): void {
    this.api.get<{ user: any }>('/auth/me').subscribe({
      next: res => {
        const u = res.user;
        this.user.set(u);
        this.infoForm.patchValue({
          firstName:         u.firstName || '',
          lastName:          u.lastName  || '',
          phone:             u.phone     || '',
          preferredLanguage: u.preferredLanguage || 'fr'
        });
      }
    });
  }

  initials(): string {
    const u = this.user();
    if (!u) return '?';
    const fn = u.firstName?.[0] || '';
    const ln = u.lastName?.[0]  || '';
    return (fn + ln).toUpperCase() || u.email?.[0]?.toUpperCase() || '?';
  }

  roleLabel(): string {
    const roles: Record<string, string> = { admin: '🔴 Admin', pro: '🟠 Acteur Pro', client: '🟢 Client' };
    return roles[this.user()?.role] || 'Membre';
  }

  langLabel(code: string): string {
    return LANGS.find(l => l.code === code)?.label || code;
  }

  inv(form: any, field: string): boolean {
    const c = form.get(field);
    return !!(c?.invalid && c?.touched);
  }

  saveInfo(): void {
    if (this.infoForm.invalid) return;
    this.savingInfo.set(true);
    this.infoError.set('');

    const v = this.infoForm.getRawValue();
    this.api.put<any>('/auth/me', v).subscribe({
      next: res => {
        if (res?.user) {
          this.user.set(res.user);
          this.auth.currentUser.set(res.user as any);
        }
        this.savingInfo.set(false);
        this.infoSuccess.set('Profil mis à jour avec succès !');
        setTimeout(() => this.infoSuccess.set(''), 4000);
      },
      error: err => {
        this.savingInfo.set(false);
        this.infoError.set(err.error?.error || 'Erreur lors de la mise à jour');
      }
    });
  }

  savePwd(): void {
    if (this.pwdForm.invalid) { this.pwdForm.markAllAsTouched(); return; }
    this.savingPwd.set(true);
    this.pwdError.set('');

    const v = this.pwdForm.getRawValue();
    this.api.patch('/auth/change-password', {
      currentPassword: v.currentPassword,
      newPassword:     v.newPassword
    }).subscribe({
      next: () => {
        this.savingPwd.set(false);
        this.pwdSuccess.set('Mot de passe modifié avec succès !');
        this.pwdForm.reset();
        setTimeout(() => this.pwdSuccess.set(''), 4000);
      },
      error: err => {
        this.savingPwd.set(false);
        this.pwdError.set(err.error?.error || 'Erreur lors du changement de mot de passe');
      }
    });
  }
}
