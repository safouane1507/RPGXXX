import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="login-page">
      <div class="login-card">
        <img src="assets/logo.png" alt="KENZ BLADI" class="login-logo" />
        <h1>KENZ BLADI</h1>
        <p class="login-sub">كنز بلادي · Administration</p>
        <form (ngSubmit)="submit()" class="login-form">
          <div class="form-group">
            <label>Email</label>
            <input type="email" [(ngModel)]="email" name="email" placeholder="admin@kenzbladi.ma" required />
          </div>
          <div class="form-group">
            <label>Mot de passe</label>
            <input type="password" [(ngModel)]="password" name="password" placeholder="••••••••" required />
          </div>
          @if (error()) {
            <div class="error-msg">{{ error() }}</div>
          }
          <button type="submit" class="btn-login" [disabled]="isLoading()">
            {{ isLoading() ? 'Connexion…' : 'Se connecter' }}
          </button>
        </form>
        <a routerLink="/" class="back-home">← Retour au site</a>
      </div>
    </div>`,
  styles: [`.login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg-secondary);padding:1rem;} .login-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:20px;padding:2.5rem;width:100%;max-width:400px;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.1);} .login-logo{width:72px;height:72px;object-fit:contain;margin:0 auto 1rem;} h1{font-size:1.4rem;font-weight:800;color:var(--text-primary);margin-bottom:.25rem;} .login-sub{font-size:.82rem;color:var(--text-muted);margin-bottom:2rem;} .login-form{display:flex;flex-direction:column;gap:1rem;text-align:start;} .form-group{display:flex;flex-direction:column;gap:.375rem;} label{font-size:.82rem;font-weight:600;color:var(--text-secondary);} input{padding:.625rem .875rem;border:1px solid var(--card-border);border-radius:8px;background:var(--bg-secondary);color:var(--text-primary);font-size:.9rem;outline:none;transition:border-color .2s;&:focus{border-color:#8B4513;}} .btn-login{padding:.7rem;background:linear-gradient(135deg,#8B4513,#d4af6a);color:#fff;border:none;border-radius:10px;font-weight:700;font-size:.95rem;cursor:pointer;transition:opacity .2s;&:disabled{opacity:.7;cursor:not-allowed;}} .error-msg{background:rgba(231,76,60,.08);border:1px solid rgba(231,76,60,.2);color:#e74c3c;padding:.5rem .75rem;border-radius:8px;font-size:.82rem;} .back-home{display:block;margin-top:1.25rem;font-size:.8rem;color:var(--text-muted);text-decoration:none;&:hover{color:#8B4513;}}`]
})
export class LoginComponent {
  private api    = inject(ApiService);
  private router = inject(Router);

  email    = '';
  password = '';
  isLoading = signal(false);
  error     = signal('');

  submit(): void {
    this.isLoading.set(true);
    this.error.set('');
    this.api.post<{ token: string; user: any }>('/auth/login', { email: this.email, password: this.password })
      .subscribe({
        next: res => {
          localStorage.setItem('kb_token', res.token);
          this.router.navigate([res.user.role === 'admin' ? '/admin/dashboard' : '/pro/dashboard']);
        },
        error: err => {
          this.error.set(err.error?.error || 'Email ou mot de passe incorrect');
          this.isLoading.set(false);
        }
      });
  }
}
