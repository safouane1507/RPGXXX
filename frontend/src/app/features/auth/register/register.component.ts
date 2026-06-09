import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth.service';

// Validateur personnalisé : confirmation de mot de passe
function passwordMatchValidator(ctrl: AbstractControl): ValidationErrors | null {
  const pwd     = ctrl.get('password')?.value;
  const confirm = ctrl.get('confirmPassword')?.value;
  return pwd && confirm && pwd !== confirm ? { passwordMismatch: true } : null;
}

// Calcul force du mot de passe
function passwordStrength(pwd: string): { score: number; label: string; color: string } {
  let score = 0;
  if (pwd.length >= 8)          score++;
  if (pwd.length >= 12)         score++;
  if (/[A-Z]/.test(pwd))        score++;
  if (/[0-9]/.test(pwd))        score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 1) return { score, label: 'Faible',    color: '#e74c3c' };
  if (score <= 3) return { score, label: 'Moyen',     color: '#f39c12' };
  return             { score, label: 'Fort',      color: '#27ae60' };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule],
  template: `
<div class="auth-page">
  <div class="auth-card">

    <!-- Logo -->
    <div class="auth-brand">
      <span class="brand-ar">كنز بلادي</span>
      <span class="brand-fr">KENZ BLADI</span>
    </div>

    <h1 class="auth-title">Créer un compte</h1>
    <p class="auth-sub">Rejoignez la communauté du patrimoine marocain</p>

    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>

      <!-- Nom & Prénom -->
      <div class="row-2">
        <div class="field" [class.invalid]="invalid('firstName')">
          <label>Prénom *</label>
          <input formControlName="firstName" placeholder="Amina" autocomplete="given-name" />
          @if (invalid('firstName')) { <span class="err">Prénom requis</span> }
        </div>
        <div class="field" [class.invalid]="invalid('lastName')">
          <label>Nom *</label>
          <input formControlName="lastName" placeholder="Benkhalil" autocomplete="family-name" />
          @if (invalid('lastName')) { <span class="err">Nom requis</span> }
        </div>
      </div>

      <!-- Email -->
      <div class="field" [class.invalid]="invalid('email')">
        <label>Email *</label>
        <input formControlName="email" type="email" placeholder="vous@exemple.com" autocomplete="email" />
        @if (invalid('email')) { <span class="err">Email invalide</span> }
      </div>

      <!-- Téléphone -->
      <div class="field">
        <label>Téléphone <small>(optionnel)</small></label>
        <input formControlName="phone" type="tel" placeholder="+212 6XX XXX XXX" autocomplete="tel" />
      </div>

      <!-- Mot de passe -->
      <div class="field" [class.invalid]="invalid('password')">
        <label>Mot de passe *</label>
        <div class="pwd-wrap">
          <input [type]="showPwd() ? 'text' : 'password'"
            formControlName="password"
            placeholder="8 caractères minimum"
            autocomplete="new-password" />
          <button type="button" class="eye-btn" (click)="showPwd.set(!showPwd())">
            {{ showPwd() ? '🙈' : '👁️' }}
          </button>
        </div>
        @if (invalid('password')) { <span class="err">8 caractères minimum requis</span> }
        <!-- Barre de force -->
        @if (form.value.password) {
          <div class="strength-bar">
            <div class="strength-fill"
              [style.width]="(pwdStrength().score / 5 * 100) + '%'"
              [style.background]="pwdStrength().color">
            </div>
          </div>
          <span class="strength-label" [style.color]="pwdStrength().color">
            {{ pwdStrength().label }}
          </span>
        }
      </div>

      <!-- Confirmation mot de passe -->
      <div class="field" [class.invalid]="invalid('confirmPassword') || form.hasError('passwordMismatch')">
        <label>Confirmer le mot de passe *</label>
        <div class="pwd-wrap">
          <input [type]="showConfirm() ? 'text' : 'password'"
            formControlName="confirmPassword"
            placeholder="Retapez votre mot de passe"
            autocomplete="new-password" />
          <button type="button" class="eye-btn" (click)="showConfirm.set(!showConfirm())">
            {{ showConfirm() ? '🙈' : '👁️' }}
          </button>
        </div>
        @if (form.hasError('passwordMismatch') && form.get('confirmPassword')?.touched) {
          <span class="err">Les mots de passe ne correspondent pas</span>
        }
      </div>

      <!-- CGU -->
      <label class="cgu-label">
        <input type="checkbox" formControlName="acceptTerms" />
        <span>J'accepte les <a routerLink="/cgu" target="_blank">conditions d'utilisation</a></span>
      </label>
      @if (form.get('acceptTerms')?.invalid && form.get('acceptTerms')?.touched) {
        <span class="err">Vous devez accepter les conditions</span>
      }

      <!-- Erreur API -->
      @if (errorMsg()) {
        <div class="alert-error">{{ errorMsg() }}</div>
      }

      <!-- Submit -->
      <button type="submit" class="btn-submit" [disabled]="loading()">
        @if (loading()) { <span class="spinner"></span> Création en cours… }
        @else { Créer mon compte }
      </button>
    </form>

    <p class="auth-footer">
      Déjà un compte ? <a routerLink="/auth/login">Se connecter</a>
    </p>
  </div>
</div>
  `,
  styles: [`
    .auth-page { min-height:100vh; display:flex; align-items:center; justify-content:center; background:var(--bg-primary); padding:2rem 1rem; }
    .auth-card { width:100%; max-width:440px; background:var(--card-bg); border:1px solid var(--card-border); border-radius:20px; padding:2.25rem; box-shadow:0 8px 40px rgba(0,0,0,.08); }
    .auth-brand { display:flex; flex-direction:column; align-items:center; gap:.15rem; margin-bottom:1.25rem; }
    .brand-ar { font-size:1.3rem; font-weight:900; color:#8B4513; font-family:'Amiri','Arial',serif; direction:rtl; }
    .brand-fr { font-size:.75rem; font-weight:700; letter-spacing:.15em; color:var(--text-muted); text-transform:uppercase; }
    .auth-title { font-size:1.35rem; font-weight:900; color:var(--text-primary); text-align:center; margin:0 0 .25rem; }
    .auth-sub   { font-size:.82rem; color:var(--text-muted); text-align:center; margin:0 0 1.75rem; }
    form { display:flex; flex-direction:column; gap:.875rem; }
    .row-2 { display:grid; grid-template-columns:1fr 1fr; gap:.75rem; }
    .field { display:flex; flex-direction:column; gap:.3rem; }
    label { font-size:.78rem; font-weight:600; color:var(--text-secondary); }
    label small { font-weight:400; color:var(--text-muted); }
    input { padding:.58rem .85rem; border:1.5px solid var(--card-border); border-radius:9px; background:var(--bg-secondary); color:var(--text-primary); font-size:.875rem; outline:none; transition:border-color .2s; width:100%; box-sizing:border-box; }
    input:focus { border-color:#8B4513; }
    .field.invalid input { border-color:#e74c3c; }
    .err { font-size:.72rem; color:#e74c3c; }
    .pwd-wrap { position:relative; }
    .pwd-wrap input { padding-right:2.5rem; }
    .eye-btn { position:absolute; right:.6rem; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; font-size:.95rem; padding:0; }
    .strength-bar { height:4px; background:var(--bg-tertiary); border-radius:2px; margin-top:.375rem; overflow:hidden; }
    .strength-fill { height:100%; border-radius:2px; transition:width .3s,background .3s; }
    .strength-label { font-size:.7rem; font-weight:600; }
    .cgu-label { display:flex; align-items:flex-start; gap:.5rem; font-size:.82rem; color:var(--text-secondary); cursor:pointer; }
    .cgu-label input { width:auto; margin-top:.1rem; flex-shrink:0; }
    .cgu-label a { color:#8B4513; }
    .alert-error { background:rgba(231,76,60,.08); border:1px solid rgba(231,76,60,.2); color:#e74c3c; padding:.6rem .875rem; border-radius:8px; font-size:.83rem; }
    .btn-submit { padding:.7rem; background:#8B4513; color:#fff; border:none; border-radius:10px; font-size:.9rem; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:.5rem; margin-top:.25rem; transition:background .2s; }
    .btn-submit:hover:not(:disabled) { background:#7a3a10; }
    .btn-submit:disabled { opacity:.65; cursor:not-allowed; }
    .spinner { width:16px; height:16px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; display:inline-block; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .auth-footer { text-align:center; font-size:.83rem; color:var(--text-muted); margin-top:1.25rem; margin-bottom:0; }
    .auth-footer a { color:#8B4513; font-weight:600; text-decoration:none; }
    .auth-footer a:hover { text-decoration:underline; }
    @media(max-width:480px) { .row-2{grid-template-columns:1fr;} .auth-card{padding:1.5rem;} }
  `]
})
export class RegisterComponent implements OnInit {
  private fb   = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  loading     = signal(false);
  errorMsg    = signal('');
  showPwd     = signal(false);
  showConfirm = signal(false);

  form = this.fb.group({
    firstName:       ['', [Validators.required, Validators.minLength(2)]],
    lastName:        ['', [Validators.required, Validators.minLength(2)]],
    email:           ['', [Validators.required, Validators.email]],
    phone:           [''],
    password:        ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    acceptTerms:     [false, Validators.requiredTrue]
  }, { validators: passwordMatchValidator });

  ngOnInit(): void {
    // Rediriger si déjà connecté
    if (this.auth.isLoggedIn()) {
      const role = this.auth.currentUser()?.role;
      this.router.navigate([role === 'admin' ? '/admin/dashboard' : role === 'pro' ? '/pro/dashboard' : '/']);
    }
  }

  invalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  pwdStrength(): { score: number; label: string; color: string } {
    return passwordStrength(this.form.value.password || '');
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.errorMsg.set('');

    const v = this.form.getRawValue();
    this.auth.register({
      firstName: v.firstName!,
      lastName:  v.lastName!,
      email:     v.email!,
      password:  v.password!,
      phone:     v.phone || undefined
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/']);
      },
      error: err => {
        this.loading.set(false);
        this.errorMsg.set(
          err.error?.error ||
          err.error?.errors?.[0]?.msg ||
          'Erreur lors de la création du compte'
        );
      }
    });
  }
}
