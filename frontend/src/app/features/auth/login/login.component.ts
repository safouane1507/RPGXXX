import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="login-page">
      <div class="login-card">

        <div class="login-header">
          <img src="assets/logo.png" alt="KENZ BLADI" class="login-logo" />
          <h1>KENZ BLADI</h1>
          <p class="login-sub">كنز بلادي · Connexion</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="submit()" class="login-form" novalidate>

          <!-- Email -->
          <div class="field" [class.has-error]="emailInvalid">
            <label for="email">Adresse email</label>
            <div class="input-wrap">
              <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,12 2,6"/>
              </svg>
              <input id="email" type="email" formControlName="email"
                     placeholder="email@exemple.ma"
                     autocomplete="email" />
            </div>
            @if (emailInvalid) {
              <span class="field-error">Email invalide</span>
            }
          </div>

          <!-- Mot de passe -->
          <div class="field" [class.has-error]="passwordInvalid">
            <label for="password">Mot de passe</label>
            <div class="input-wrap">
              <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input [type]="showPassword() ? 'text' : 'password'"
                     id="password" formControlName="password"
                     placeholder="Minimum 8 caractères"
                     autocomplete="current-password" />
              <button type="button" class="toggle-pw" (click)="showPassword.set(!showPassword())"
                      [attr.aria-label]="showPassword() ? 'Masquer' : 'Afficher'">
                @if (showPassword()) {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                } @else {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                }
              </button>
            </div>
            @if (passwordInvalid) {
              <span class="field-error">8 caractères minimum requis</span>
            }
          </div>

          <!-- Erreur API -->
          @if (apiError()) {
            <div class="alert-error" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {{ apiError() }}
            </div>
          }

          <!-- Submit -->
          <button type="submit" class="btn-submit"
                  [disabled]="form.invalid || isLoading()">
            @if (isLoading()) {
              <span class="spinner"></span>
              Connexion en cours…
            } @else {
              Se connecter
            }
          </button>

        </form>

        <div class="login-footer">
          <a href="#" class="link-forgot" (click)="$event.preventDefault()">
            Mot de passe oublié ?
          </a>
          <a routerLink="/" class="link-back">← Retour au site</a>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-secondary);
      padding: 1rem;
    }

    .login-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 2.5rem 2rem;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 12px 40px rgba(0,0,0,.12);
    }

    .login-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .login-logo {
      width: 72px;
      height: 72px;
      object-fit: contain;
      margin: 0 auto .75rem;
      display: block;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-primary);
      margin: 0 0 .25rem;
    }

    .login-sub {
      font-size: .82rem;
      color: var(--text-muted);
      margin: 0;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: .375rem;
    }

    label {
      font-size: .82rem;
      font-weight: 600;
      color: var(--text-secondary);
    }

    .input-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }

    .field-icon {
      position: absolute;
      left: .75rem;
      width: 16px;
      height: 16px;
      color: var(--text-muted);
      pointer-events: none;
      flex-shrink: 0;
    }

    input {
      width: 100%;
      padding: .65rem .875rem .65rem 2.5rem;
      border: 1.5px solid var(--card-border);
      border-radius: 10px;
      background: var(--bg-secondary);
      color: var(--text-primary);
      font-size: .9rem;
      outline: none;
      transition: border-color .2s, box-shadow .2s;
      box-sizing: border-box;
    }

    input:focus {
      border-color: #8B4513;
      box-shadow: 0 0 0 3px rgba(139,69,19,.12);
    }

    .has-error input {
      border-color: #e74c3c;
    }

    .has-error input:focus {
      box-shadow: 0 0 0 3px rgba(231,76,60,.12);
    }

    .toggle-pw {
      position: absolute;
      right: .75rem;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--text-muted);
      display: flex;
      align-items: center;
    }

    .toggle-pw svg {
      width: 18px;
      height: 18px;
    }

    .toggle-pw:hover {
      color: var(--text-primary);
    }

    .field-error {
      font-size: .76rem;
      color: #e74c3c;
      margin-top: .125rem;
    }

    .alert-error {
      display: flex;
      align-items: center;
      gap: .5rem;
      background: rgba(231,76,60,.08);
      border: 1px solid rgba(231,76,60,.25);
      color: #e74c3c;
      padding: .625rem .875rem;
      border-radius: 10px;
      font-size: .84rem;
      font-weight: 500;
    }

    .alert-error svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    .btn-submit {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      padding: .75rem;
      background: linear-gradient(135deg, #8B4513, #d4af6a);
      color: #fff;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      font-size: .95rem;
      cursor: pointer;
      transition: opacity .2s, transform .1s;
      margin-top: .25rem;
    }

    .btn-submit:hover:not(:disabled) {
      opacity: .92;
      transform: translateY(-1px);
    }

    .btn-submit:disabled {
      opacity: .65;
      cursor: not-allowed;
      transform: none;
    }

    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255,255,255,.35);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin .7s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .login-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;
    }

    .link-forgot, .link-back {
      font-size: .8rem;
      color: var(--text-muted);
      text-decoration: none;
      transition: color .2s;
    }

    .link-forgot:hover, .link-back:hover {
      color: #8B4513;
    }
  `]
})
export class LoginComponent implements OnInit {
  private auth   = inject(AuthService);
  private router = inject(Router);
  private fb     = inject(FormBuilder);

  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  isLoading    = signal(false);
  apiError     = signal('');
  showPassword = signal(false);

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) this.redirectByRole();
  }

  get emailInvalid(): boolean {
    const c = this.form.get('email')!;
    return c.invalid && (c.dirty || c.touched);
  }

  get passwordInvalid(): boolean {
    const c = this.form.get('password')!;
    return c.invalid && (c.dirty || c.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.apiError.set('');

    const { email, password } = this.form.getRawValue();

    this.auth.login(email!, password!).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.redirectByRole();
      },
      error: err => {
        this.isLoading.set(false);
        this.apiError.set(
          err.error?.error ?? 'Email ou mot de passe incorrect'
        );
      }
    });
  }

  private redirectByRole(): void {
    const role = this.auth.currentUser()?.role;
    if (role === 'admin') this.router.navigate(['/admin/dashboard']);
    else if (role === 'pro') this.router.navigate(['/pro/dashboard']);
    else this.router.navigate(['/']);
  }
}
