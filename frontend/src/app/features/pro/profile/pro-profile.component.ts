import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthService, AuthUser } from '../../../core/services/auth.service';

function pwdMatchValidator(g: AbstractControl): ValidationErrors | null {
  const pwd = g.get('newPassword')?.value;
  const confirm = g.get('confirmPassword')?.value;
  return pwd && confirm && pwd !== confirm ? { mismatch: true } : null;
}

@Component({
  selector: 'app-pro-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<div class="pro-profile">

  <h2>Mon Profil</h2>

  <!-- Info section -->
  <div class="section-card">
    <h3 class="section-title">Informations personnelles</h3>

    @if (infoSuccess()) { <div class="alert success">✓ {{ infoSuccess() }}</div> }
    @if (infoError())   { <div class="alert error">{{ infoError() }}</div> }

    <form [formGroup]="infoForm" (ngSubmit)="saveInfo()" class="profile-form">
      <div class="row-2">
        <div class="field">
          <label>Prénom</label>
          <input formControlName="firstName" placeholder="Prénom" />
        </div>
        <div class="field">
          <label>Nom</label>
          <input formControlName="lastName" placeholder="Nom de famille" />
        </div>
      </div>

      <div class="row-2">
        <div class="field">
          <label>Email</label>
          <input formControlName="email" type="email" placeholder="email@exemple.ma" />
        </div>
        <div class="field">
          <label>Téléphone</label>
          <input formControlName="phone" placeholder="+212 6XX XXX XXX" />
        </div>
      </div>

      <div class="field">
        <label>Langue préférée</label>
        <div class="lang-chips">
          @for (l of languages; track l.code) {
            <button type="button" class="lang-chip"
              [class.active]="infoForm.get('preferredLanguage')?.value === l.code"
              (click)="infoForm.get('preferredLanguage')?.setValue(l.code)">
              {{ l.label }}
            </button>
          }
        </div>
      </div>

      <button type="submit" class="btn-save" [disabled]="savingInfo()">
        @if (savingInfo()) { <span class="spinner"></span> }
        Sauvegarder les informations
      </button>
    </form>
  </div>

  <!-- Password section -->
  <div class="section-card">
    <h3 class="section-title">Modifier le mot de passe</h3>

    @if (pwdSuccess()) { <div class="alert success">✓ {{ pwdSuccess() }}</div> }
    @if (pwdError())   { <div class="alert error">{{ pwdError() }}</div> }

    <form [formGroup]="pwdForm" (ngSubmit)="savePwd()" class="profile-form">
      <div class="field">
        <label>Mot de passe actuel</label>
        <input type="password" formControlName="currentPassword" placeholder="••••••••" autocomplete="current-password" />
        @if (pf('currentPassword')?.invalid && pf('currentPassword')?.touched) {
          <span class="err">Requis</span>
        }
      </div>

      <div class="row-2">
        <div class="field">
          <label>Nouveau mot de passe</label>
          <input type="password" formControlName="newPassword" placeholder="8 caractères minimum" autocomplete="new-password" />
          @if (pf('newPassword')?.invalid && pf('newPassword')?.touched) {
            <span class="err">8 caractères minimum</span>
          }
        </div>
        <div class="field">
          <label>Confirmer le mot de passe</label>
          <input type="password" formControlName="confirmPassword" placeholder="••••••••" autocomplete="new-password" />
          @if (pwdForm.errors?.['mismatch'] && pf('confirmPassword')?.touched) {
            <span class="err">Les mots de passe ne correspondent pas</span>
          }
        </div>
      </div>

      <button type="submit" class="btn-save" [disabled]="savingPwd()">
        @if (savingPwd()) { <span class="spinner"></span> }
        Changer le mot de passe
      </button>
    </form>
  </div>

</div>
  `,
  styles: [`
    .pro-profile { display:flex; flex-direction:column; gap:1.5rem; }
    h2 { font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 .5rem; }
    .section-card { background:var(--card-bg); border:1px solid var(--card-border); border-radius:12px; padding:1.5rem; display:flex; flex-direction:column; gap:1rem; }
    .section-title { font-size:.95rem; font-weight:700; color:var(--text-primary); margin:0 0 .25rem; padding-bottom:.625rem; border-bottom:1px solid var(--card-border); }
    .alert { padding:.6rem .875rem; border-radius:8px; font-size:.84rem; font-weight:500; }
    .alert.success { background:rgba(39,174,96,.08); border:1px solid rgba(39,174,96,.2); color:#27ae60; }
    .alert.error   { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; }
    .profile-form { display:flex; flex-direction:column; gap:1rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.875rem; }
    .field { display:flex; flex-direction:column; gap:.35rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    input { padding:.575rem .8rem; border:1.5px solid var(--card-border); border-radius:8px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; }
    input:focus { border-color:#8B4513; }
    .err { font-size:.72rem; color:#e74c3c; }
    .lang-chips { display:flex; gap:.5rem; flex-wrap:wrap; }
    .lang-chip { padding:.3rem .875rem; border:1.5px solid var(--card-border); border-radius:20px; background:transparent; color:var(--text-secondary); font-size:.8rem; font-weight:600; cursor:pointer; transition:all .2s; }
    .lang-chip.active { border-color:#8B4513; background:rgba(139,69,19,.07); color:#8B4513; }
    .btn-save { align-self:flex-start; padding:.575rem 1.25rem; background:#8B4513; color:#fff; border:none; border-radius:8px; font-size:.875rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:.375rem; transition:opacity .2s; }
    .btn-save:disabled { opacity:.65; cursor:not-allowed; }
    .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    @media (max-width:600px) { .row-2 { grid-template-columns:1fr; } }
  `]
})
export class ProProfileComponent implements OnInit {
  private api  = inject(ApiService);
  private auth = inject(AuthService);
  private fb   = inject(FormBuilder);

  savingInfo = signal(false);
  savingPwd  = signal(false);
  infoSuccess = signal('');
  infoError   = signal('');
  pwdSuccess  = signal('');
  pwdError    = signal('');

  languages = [
    { code: 'fr',     label: 'Français' },
    { code: 'ar',     label: 'العربية' },
    { code: 'en',     label: 'English' },
    { code: 'darija', label: 'الدارجة' }
  ];

  infoForm = this.fb.group({
    firstName: [''],
    lastName:  [''],
    email:     ['', Validators.email],
    phone:     [''],
    preferredLanguage: ['fr']
  });

  pwdForm = this.fb.group({
    currentPassword:  ['', Validators.required],
    newPassword:      ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword:  ['', Validators.required]
  }, { validators: pwdMatchValidator });

  pf(name: string) { return this.pwdForm.get(name); }

  ngOnInit(): void {
    this.api.get<{ user: AuthUser }>('/auth/me').subscribe({
      next: res => {
        const u = res.user;
        this.infoForm.patchValue({
          firstName: u.fullName?.split(' ')[0] || '',
          lastName:  u.fullName?.split(' ').slice(1).join(' ') || '',
          email:     u.email,
          preferredLanguage: u.preferredLanguage || 'fr'
        });
      }
    });
  }

  saveInfo(): void {
    this.savingInfo.set(true);
    this.infoSuccess.set('');
    this.infoError.set('');

    const { preferredLanguage, ...rest } = this.infoForm.getRawValue();

    const calls = [
      this.api.patch('/auth/preferences', { preferredLanguage })
    ];

    this.api.patch('/auth/preferences', { preferredLanguage }).subscribe({
      next: () => {
        this.savingInfo.set(false);
        this.infoSuccess.set('Informations mises à jour avec succès.');
      },
      error: err => {
        this.savingInfo.set(false);
        this.infoError.set(err.error?.error || 'Erreur lors de la sauvegarde');
      }
    });
  }

  savePwd(): void {
    if (this.pwdForm.invalid) { this.pwdForm.markAllAsTouched(); return; }

    this.savingPwd.set(true);
    this.pwdSuccess.set('');
    this.pwdError.set('');

    const { currentPassword, newPassword } = this.pwdForm.getRawValue();

    this.api.patch('/auth/change-password', { currentPassword, newPassword }).subscribe({
      next: () => {
        this.savingPwd.set(false);
        this.pwdSuccess.set('Mot de passe modifié avec succès.');
        this.pwdForm.reset();
      },
      error: err => {
        this.savingPwd.set(false);
        this.pwdError.set(err.error?.error || 'Mot de passe actuel incorrect');
      }
    });
  }
}
