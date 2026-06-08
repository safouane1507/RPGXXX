import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

export interface AuthUser {
  id:               string;
  email:            string;
  role:             'admin' | 'pro' | 'client';
  fullName:         string;
  preferredLanguage:string;
  avatar:           string | null;
  proProfile?:      { companyName: string; domain: string; annuaireRef: string | null };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api    = inject(ApiService);
  private router = inject(Router);

  private readonly TOKEN_KEY = 'kb_token';

  currentUser = signal<AuthUser | null>(null);
  isLoggedIn  = signal(false);

  constructor() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) this.loadProfile();
  }

  login(email: string, password: string) {
    return this.api.post<{ token: string; user: AuthUser }>('/auth/login', { email, password })
      .pipe(
        tap(res => {
          localStorage.setItem(this.TOKEN_KEY, res.token);
          this.currentUser.set(res.user);
          this.isLoggedIn.set(true);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAdmin(): boolean { return this.currentUser()?.role === 'admin'; }
  isPro():   boolean { return this.currentUser()?.role === 'pro'; }

  private loadProfile(): void {
    this.api.get<{ user: AuthUser }>('/auth/me').subscribe({
      next: res => { this.currentUser.set(res.user); this.isLoggedIn.set(true); },
      error: ()  => this.logout()
    });
  }
}
